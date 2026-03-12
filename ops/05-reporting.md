# 05 — Reporting and KPIs

## Reporting principle

Reporting should answer operational questions, not just look pretty.

The first dashboard needs to help the client act today.

## 1. Daily operator report

### Audience

- client lead owner
- ops/admin owner
- ResultEstate account lead

### Send time

- every business morning for previous day
- optional mid-day exception alert for hot leads untouched beyond SLA

### Daily metrics

- new leads created
- leads by source
- median first response time
- number and percent contacted within SLA
- hot leads identified
- appointments requested
- appointments booked
- nurture replies
- reactivation replies
- invalid / bounced / duplicate leads
- active leads with no next action

### Daily action section

Always include:

- hot leads needing human action now
- leads stuck without owner
- sequences failing or paused
- duplicate / hygiene exceptions

## 2. Weekly client summary

### Audience

- decision-maker
- sales / ops leader
- ResultEstate account lead

### Weekly metrics

- total inbound leads
- source-to-engaged rate
- engaged-to-qualified rate
- qualified-to-appointment rate
- appointment count
- stage aging summary
- stale lead inventory
- reactivation lift
- owner SLA compliance

### Weekly narrative

Keep it simple:

- what improved
- where leakage still exists
- what needs tuning next week
- what source or owner performance stands out

## 3. KPI definitions

### Speed to lead

Minutes from `first_seen_at` to first outbound response.

### Contacted within SLA

Lead received first response within agreed SLA window.

### Engaged lead

Lead replied or took an action indicating real interest.

### Qualified lead

Lead meets fit and timing threshold for human follow-up.

### Appointment booked

Concrete meeting or call scheduled.

### Reactivation win

A stale lead replied positively enough to re-enter active pipeline.

## 4. Dashboard sections

### Executive view

- inbound leads
- hot leads
- appointments booked
- median response time

### Source view

- leads by source
- engagement by source
- qualification by source
- appointments by source

### Pipeline view

- counts by lifecycle stage
- aging by stage
- leads with no next action

### SLA view

- response time distribution
- hot lead touch compliance
- unassigned leads

## 5. Reporting QA

Before sending any report:

- confirm no duplicate rows inflate totals
- confirm closed lost reasons are mapped correctly
- confirm appointments are deduped
- confirm nurture and reactivation leads are not double-counted as new inbound

## 6. First 30-day scorecard

The first scorecard should show whether ResultEstate is worth expanding.

Questions to answer:

- are leads being reached faster?
- are more conversations happening?
- is the CRM more trustworthy?
- are stale leads producing revived opportunities?
- should scope expand to another workflow or source?