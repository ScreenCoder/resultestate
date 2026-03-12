# ResultEstate Ops Pack

This is the internal operating system behind the ResultEstate offer.

**Offer promise:** install an AI appointment engine for a real estate team in **7 days**.

**Primary outcome:** more conversations with qualified buyers and sellers.

## What ships in this ops pack

- `01-service-blueprint.md` — service scope, ICP, success criteria, delivery model
- `02-workflows.md` — end-to-end workflows for intake, routing, qualification, nurture, reactivation, handoff
- `03-crm-spec.md` — CRM stages, required fields, hygiene rules, SLAs
- `04-client-onboarding.md` — pre-sale to kickoff to launch onboarding flow
- `05-reporting.md` — dashboard, KPIs, daily/weekly reporting cadence
- `06-checklists.md` — internal checklists for sales, implementation, QA, launch, and ongoing ops
- `07-templates.md` — scripts, forms, prompts, and message templates

## 7-day implementation principle

Do not try to automate the whole brokerage.

Ship the narrowest production-safe system that:

1. captures inbound leads cleanly,
2. responds within 60 seconds when possible,
3. qualifies for timing, motivation, and fit,
4. routes hot leads to a human,
5. nurtures everybody else automatically,
6. produces a daily operator view.

## Service boundaries

ResultEstate is **not** sold as a generic chatbot.
It is sold as an **appointment engine + follow-up operating system**.

That means the first pilot should usually include:

- 1 primary lead source cluster
- 1 buyer flow
- 1 seller flow or 1 reactivation flow
- 1 CRM pipeline cleanup pass
- 1 reporting dashboard
- 1 human handoff SOP

Anything beyond that is phase 2.
