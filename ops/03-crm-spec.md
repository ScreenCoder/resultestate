# 03 — CRM Specification

## 1. Purpose

This spec defines the minimum CRM structure required for ResultEstate to work reliably in a 7-day pilot.

## 2. Required contact fields

### Identity

- full_name
- first_name
- last_name
- phone
- email

### Attribution

- lead_source
- source_detail
- campaign if known
- first_seen_at
- last_activity_at

### Classification

- lead_type: buyer / seller / investor / other / unknown
- market
- price_range if known
- timeline_bucket: now / 0-3 months / 3-6 months / 6+ months / unknown
- motivation_level: high / medium / low / unknown
- qualification_status: hot / warm / cold / invalid

### Ownership

- assigned_owner
- assigned_team
- owner_response_sla

### Workflow control

- lifecycle_stage
- next_action
- next_action_due_at
- last_outbound_at
- last_inbound_at
- do_not_contact
- invalid_reason

## 3. Pipeline stages

Use a tight pipeline. Too many stages create fake precision.

### Recommended lifecycle stages

1. **New** — just entered system
2. **Attempting contact** — outreach started, no meaningful reply yet
3. **Engaged** — replied or interacted meaningfully
4. **Qualified** — basic fit confirmed
5. **Appointment pending** — trying to lock time
6. **Appointment booked** — confirmed handoff / meeting
7. **Nurture** — not ready now, still active
8. **Reactivation** — stale lead currently being worked
9. **Closed won** — downstream success if client tracks it
10. **Closed lost** — dead, wrong fit, invalid, or opted out

## 4. Stage entry rules

### New

Entered automatically when record is created.

### Attempting contact

Entered when first outreach is sent.

### Engaged

Entered when lead replies, clicks meaningfully, or requests more info.

### Qualified

Entered when timing, intent, and fit are clear enough to justify human conversation.

### Appointment pending

Entered when the conversation is steering toward calendar commitment.

### Appointment booked

Entered when a concrete meeting, call, or tour is set.

### Nurture

Entered when the lead is real but not ready now.

### Reactivation

Entered only for old leads being revived.

### Closed lost

Use reason codes:

- no response
- invalid contact
- wrong market
- not qualified
- timing too far out
- duplicate
- opted out
- already working with someone

## 5. Required automation rules

- every new lead gets owner or queue assignment
- every engaged lead gets a next action
- every hot lead creates an alert
- every nurture lead gets sequence enrollment or task schedule
- every closed lost lead must have a reason code
- every do-not-contact record is excluded from outbound automations

## 6. Data hygiene rules

### Duplicates

Merge duplicates based on phone, email, or explicit review.
Preserve oldest source and newest activity.

### Missing owner

No active record should remain unassigned longer than 1 business hour.

### Missing next action

Any active stage from Engaged through Appointment pending must have a next action due date.

### Stale active leads

If no touch in 14 days for active pipeline stages, flag for review.

## 7. SLA dashboard fields

Track these at minimum:

- minutes from first seen to first response
- minutes from hot qualification to human touch
- count of unassigned new leads
- count of active leads with no next action
- count of leads stuck in same stage over SLA threshold

## 8. Import rules for stale databases

Before loading a stale list:

- normalize phone format
- lowercase and trim emails
- map old stages to new lifecycle stages
- remove or suppress opted-out records
- tag import batch name and date

## 9. Minimum viable truth

If the CRM can answer these 5 questions every day, it is usable:

1. how many new leads came in?
2. how fast were they contacted?
3. who is hot right now?
4. who needs follow-up today?
5. what source is generating real conversations?