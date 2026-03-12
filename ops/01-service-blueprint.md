# 01 — Service Blueprint

## 1. Productized service definition

**Name:** ResultEstate AI Appointment Engine

**Who it serves:**

- solo agents with inconsistent follow-up
- small real estate teams with inbound lead leakage
- investor operators handling mixed-quality inbound leads
- brokerages or ISA teams that need speed-to-lead discipline

**What the client buys:**

A done-for-you workflow install that improves:

- speed to lead
- contact rate
- appointment booking consistency
- CRM cleanliness
- visibility into pipeline activity

**What the client does not buy:**

- a custom software platform
- a full CRM replacement
- a broad AI transformation project
- unlimited channels / workflows / integrations in week one

## 2. Core promise

Launch a live pilot in 7 days that handles the messy middle:

- lead intake
- routing
- first response
- AI-assisted qualification
- nurture / reactivation
- operator handoff
- daily reporting

## 3. Pilot scope rules

Every pilot must be scoped to one operational bottleneck.

Choose one primary wedge:

1. **Speed-to-lead wedge** — new inbound leads are slow to contact
2. **Follow-up wedge** — leads are touched once and then forgotten
3. **CRM cleanup wedge** — stages are unreliable and reporting is fake
4. **Reactivation wedge** — stale leads sit dead in the database

If a prospect wants all four in one week, narrow the scope before sale.

## 4. Minimum viable production stack

ResultEstate should be deliverable with whatever stack the client already has, or a lightweight stack if they have none.

Minimum components:

- intake source(s): website form, portal lead feed, ad lead form, manual import
- CRM or lead table
- messaging channel: SMS and/or email
- automation layer
- reporting view
- human owner for hot lead follow-up

## 5. Roles and ownership

### ResultEstate roles

- **Closer / strategist** — runs discovery, scopes the wedge, closes the pilot
- **Implementation operator** — maps workflow, configures routing, builds sequences
- **QA / launch owner** — tests flows, confirms routing, signs off launch
- **Account lead** — owns client communication for the first 14 days

In a lean setup, one person can hold multiple roles, but the responsibilities still need clear ownership.

### Client-side roles

- **Decision-maker** — approves scope and signs off fast
- **Ops admin** — gives CRM / inbox / automations access
- **Lead owner(s)** — receives routed hot leads and follows SLA
- **Reporting recipient** — receives daily / weekly summaries

## 6. Success criteria for week one

A pilot counts as shipped only if all of the following are true:

- leads land in the system with source and contact data
- auto-response is triggered reliably
- qualification logic runs for the chosen wedge
- hot leads route to a human with alerting
- non-hot leads enter nurture or reactivation correctly
- CRM stages update consistently enough to report on
- daily summary can be generated without manual spreadsheet cleanup

## 7. Commercial guardrails

To keep delivery sane:

- max 1 core workflow per buyer journey in week one
- max 2 personas in messaging for initial pilot
- max 3 lead sources connected in the first 7 days unless they are structurally identical
- no custom app build during pilot
- no undocumented manual processes accepted as dependencies

## 8. Escalation rules

Pause launch if any of the following are unresolved:

- no single client owner for inbound leads
- no legal approval for SMS / email usage where needed
- no CRM access or sample data by day 2
- no agreed definition of what counts as a qualified conversation
- response SLA depends on a person who is unavailable

## 9. Definition of qualified conversation

Default ResultEstate definition:

A lead is considered a qualified conversation when the system confirms enough intent and availability for a human to take over efficiently.

Usually this means at least 3 of the following:

- clear buyer or seller intent
- target geography / asset type fit
- realistic timeframe
- financing / readiness signal
- willingness to speak or book
- valid contact path

## 10. Delivery posture

Be opinionated. Reduce ambiguity. Push prospects and clients to pick the narrowest launchable flow.

The business wins by installing live revenue plumbing fast, not by producing impressive diagrams.