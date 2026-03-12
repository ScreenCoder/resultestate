# 07 — Templates

## 1. Discovery notes template

```text
Client:
Decision-maker:
Ops contact:
CRM:
Lead sources:
Monthly volume:
Primary audience: buyer / seller / investor
Biggest leakage point:
Current response time:
Qualified conversation definition:
Hot lead owner:
Business hours:
Chosen 7-day wedge:
Channels in scope:
Reporting recipients:
Risks / blockers:
```

## 2. 7-day scope template

```text
ResultEstate will launch [workflow] for [client] in 7 days.

In scope:
- [lead sources]
- [buyer/seller/investor flow]
- [SMS/email]
- [routing + handoff]
- [daily reporting]

Success at launch means:
- leads captured with clean source data
- first response triggered automatically
- qualified leads routed to [owner/team]
- non-ready leads placed into nurture
- daily summary visible to [recipient]

Out of scope:
- [anything custom, additional sources, extra personas, custom app work]
```

## 3. Hot lead handoff template

```text
🔥 Hot lead ready for follow-up

Name: [name]
Source: [source]
Type: [buyer/seller/investor]
Market: [market]
Timeline: [timeline]
Intent summary: [1-2 lines]
Key details: [budget/address/motivation]
Recommended next step: [call/text/book tour/send valuation]
CRM link: [link]
```

## 4. Buyer instant response

```text
Hey [First Name] — got your inquiry about buying in [Area].
I can help narrow down the best next options.
Are you looking to move soon, or just starting the search?
```

## 5. Seller instant response

```text
Hey [First Name] — saw your inquiry about selling in [Area].
Happy to help.
Are you looking to sell soon, or just exploring your options right now?
```

## 6. Buyer follow-up

```text
Wanted to circle back in case timing is still good.
Are you looking in the next 30-90 days, or later on?
```

## 7. Seller follow-up

```text
Quick follow-up — are you still considering a sale this year, or has the timing shifted?
```

## 8. Reactivation template

```text
Hey [First Name] — just checking whether you're still interested in [buying/selling] in [Area], or if I should close this out for now?
```

## 9. Daily operator report template

```text
ResultEstate Daily Summary — [date]

New leads: [#]
Median first response time: [x min]
Hot leads: [#]
Appointments booked: [#]
Nurture replies: [#]
Reactivation wins: [#]

Needs action:
- [lead] — [issue]
- [lead] — [issue]

Notes:
- [brief tuning / anomaly note]
```

## 10. Prompt skeleton for AI qualification

```text
You are assisting a real estate team with lead qualification.
Your job is to identify intent, timeline, location fit, and next best action.

Rules:
- be concise and human
- ask one question at a time
- do not invent facts
- do not give legal, lending, or fair housing advice
- escalate to a human when intent is strong or the user asks for a person

Collect when possible:
- buyer/seller intent
- area/market
- timeframe
- budget or property context
- financing/readiness
- best next step

Classify the lead as:
- hot
- warm
- nurture
- invalid

Return recommended action and a one-line summary for the CRM.
```

## 11. Internal defect log template

```text
Date:
Client:
Issue:
Severity: high / medium / low
Workflow area:
Observed behavior:
Expected behavior:
Temporary workaround:
Owner:
Resolution status:
```