# 02 — Operating Workflows

## Workflow map

ResultEstate runs eight linked workflows:

1. lead intake
2. lead routing
3. qualification
4. nurture
5. reactivation
6. CRM hygiene
7. reporting
8. client onboarding and launch

---

## 1. Lead intake workflow

### Goal

Capture every inbound lead with enough metadata to trigger the correct automation immediately.

### Inputs

- website forms
- listing inquiry forms
- Zillow / portal leads
- Facebook / paid media leads
- direct email inquiries
- manual CSV imports
- past CRM export for reactivation

### Required fields

- first name
- last name or full name
- phone if available
- email if available
- source
- inquiry type: buyer / seller / investor / renter / unknown
- market / geography
- timestamp
- assigned owner or routing pool

### Intake rules

- create one contact per person, not per message
- preserve original source field
- timestamp first seen and most recent activity
- tag imported stale records separately from new inbound
- if phone and email are both missing, flag as unworkable

### Intake SLA

- new lead visible in CRM or lead queue within 1 minute
- first response attempt triggered within 60 seconds where channel permissions allow

---

## 2. Lead routing workflow

### Goal

Send the right lead to the right person or sequence without manual triage.

### Default routing logic

1. detect lead type
2. detect geography / market
3. detect urgency / timeframe
4. detect source priority
5. route to owner, round robin pool, or nurture bucket

### Routing buckets

- **Hot now** — immediate handoff to human
- **Warm nurture** — continue automated qualification and reminders
- **Long-term nurture** — lower frequency sequence
- **Reactivation candidate** — stale record or old inquiry
- **Invalid / dead** — bad contact info, spam, duplicates, or wrong market

### Hot lead conditions

Any 2-3 of these usually qualifies:

- asks to tour, list, book, or speak now
- timeframe under 90 days
- replies to outreach with intent
- price range or property criteria supplied
- seller signals readiness to discuss valuation or timing

### Human alert rules

When a lead hits hot status:

- assign owner
- create task
- send internal alert
- include conversation summary
- include recommended next step

### Fallback rule

If the assigned human does not touch the lead within SLA, re-alert or reassign.

Default SLA:

- hot lead human touch within 10 minutes during business hours
- within next opening window after hours

---

## 3. Qualification workflow

### Goal

Use AI or scripted logic to collect enough signal before handing to a human.

### Core qualification questions

For buyers:

- are you looking to buy now or later?
- preferred area?
- price range?
- timeline?
- financing / cash / pre-approval status?
- do you want to see options or speak with an agent?

For sellers:

- are you looking to sell now or exploring?
- property address / market?
- ideal timeline?
- motivation trigger?
- already listed or not?
- open to a valuation / strategy call?

For investors:

- buy box?
- target market?
- cash / financing?
- deal timeline?
- disposition or acquisition need?

### Qualification outputs

- lead score: hot / warm / cold / invalid
- opportunity type: buyer / seller / investor / nurture
- confidence notes
- recommended next action

### Guardrails

- do not invent property facts
- do not quote legal, lending, or fair housing guidance beyond approved scripts
- do not promise availability or pricing the team has not confirmed
- escalate confused, angry, or compliance-sensitive conversations to a human fast

---

## 4. Nurture workflow

### Goal

Keep leads moving instead of dying after first touch.

### Sequence structure

Default week-one nurture:

- Day 0: instant reply
- Day 1: follow-up with one clear CTA
- Day 3: value touchpoint
- Day 7: check-in
- Day 14: intent reset message
- Day 30: long-tail follow-up

### Messaging principles

- short and human
- one ask per message
- reference original intent or source
- avoid sounding like a bot
- stop sequence when lead books, opts out, or goes invalid

### Buyer nurture examples

- offer listings or area options
- invite a call
- ask about timing and financing

### Seller nurture examples

- offer valuation / pricing guidance
- ask about move timeline
- check if property prep questions exist

---

## 5. Reactivation workflow

### Goal

Mine stale CRM contacts for revived intent.

### Eligible records

- no meaningful activity in 60-365+ days
- valid phone or email
- not closed lost for compliance-sensitive reason
- not do-not-contact

### Reactivation process

1. segment stale database
2. group by source, geography, and persona
3. send simple re-open message
4. classify replies
5. route intent-positive replies to human follow-up

### Recommended first message

Keep it plain:

- buyer: "Still looking in [area], or should I close this out for now?"
- seller: "Are you still considering selling, or has the timing changed?"

### Outcomes

- revived and routed
- nurtured for later
- closed out / do not contact
- invalid contact

---

## 6. CRM hygiene workflow

### Goal

Make reporting trustworthy and prevent pipeline rot.

### Hygiene actions

- deduplicate records
- standardize stage names
- enforce required fields
- auto-close dead leads after rules are met
- log last contact date
- log next action date
- mark owner explicitly

### Daily hygiene loop

- clear duplicate queue
- review unassigned leads
- review leads with no next action
- review hot leads with no human touch
- review bounced / invalid contacts

---

## 7. Reporting workflow

### Goal

Give the operator and client a simple picture of what happened and what needs action.

### Daily output

- leads received
- first response rate / speed
- hot leads created
- appointments requested / booked
- nurture replies
- reactivation wins
- dead / invalid leads
- leads needing human attention

### Weekly output

- source-by-source conversion trend
- contact rate
- appointment rate
- stage aging
- stale lead count
- owner SLA adherence
- top failure points

---

## 8. Handoff workflow

### Goal

Move qualified leads to humans without context loss.

### Handoff package

Every handoff should include:

- name and contact info
- source
- conversation summary
- qualification answers collected
- urgency / timeline
- recommended next move
- link to CRM record

### Human action expectation

The owner should not need to reread the full transcript to know what to do.

If the handoff requires detective work, the workflow is not finished.
