import Link from 'next/link'
import LeadForm from '../components/LeadForm'
import Header from '../components/Header'

const agents = [
  { slug: 'sales', name: 'ResultEstate Sales Agent', badge: 'Sales', blurb: 'Owns outbound, qualification, objections, follow-up, and turning attention into booked pilot calls.' },
  { slug: 'research', name: 'ResultEstate Research Agent', badge: 'Research', blurb: 'Finds the best ICPs, pain points, competitor gaps, pricing benchmarks, and fastest prospecting paths.' },
  { slug: 'copy', name: 'ResultEstate Copy Agent', badge: 'Copy', blurb: 'Sharpens the words that sell: homepage copy, outbound messages, FAQs, proof blocks, and scripts.' },
  { slug: 'ops', name: 'ResultEstate Ops Agent', badge: 'Ops', blurb: 'Designs the actual delivery engine: intake, routing, nurture, CRM hygiene, onboarding, and launch checklists.' },
  { slug: 'product', name: 'ResultEstate Product Agent', badge: 'Product', blurb: 'Evolves the site and service into something more sellable, measurable, and useful over time.' },
]

const handoffs = [
  {
    step: '01',
    title: 'Research finds the wedge',
    text: 'The Research Agent identifies the sharpest ICP, pain point, and buyer language so the team is aimed at real demand.',
  },
  {
    step: '02',
    title: 'Copy sharpens the message',
    text: 'The Copy Agent turns positioning into a homepage, outbound message, CTA, and proof stack that buyers actually respond to.',
  },
  {
    step: '03',
    title: 'Sales books the pilot',
    text: 'The Sales Agent handles outreach, qualification, objections, and moves good-fit leads into booked calls and pilot scope.',
  },
  {
    step: '04',
    title: 'Ops launches the system',
    text: 'The Ops Agent installs the 7-day appointment engine: intake, routing, nurture, CRM hygiene, reporting, and handoffs.',
  },
  {
    step: '05',
    title: 'Product improves the machine',
    text: 'The Product Agent takes what converts, what breaks, and what buyers ask for — then feeds it back into the next version.',
  },
]

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main id="top">
        <section className="hero">
          <div className="eyebrow"><span className="dot"></span> LIVE PILOT OFFER · 2 CLIENT SLOTS THIS MONTH</div>
          <div className="hero-grid">
            <div>
              <h1>The AI appointment engine for <em>real estate teams that need speed</em>, not more software.</h1>
              <p className="hero-copy">ResultEstate installs a revenue-first AI workflow for real estate operators: instant lead response, nurture sequences, reactivation, listing support, and daily pipeline visibility. Under the hood is a specialist subagent crew built to help teams convert more leads into booked appointments.</p>
              <div className="cta-row">
                <a className="primary-btn" href="#contact">Book a 15-min pilot call</a>
                <a className="ghost-btn" href="#agents">Meet the agents</a>
              </div>
              <ul className="hero-points">
                <li>Respond to new leads in under 60 seconds</li>
                <li>Turn stale CRM contacts into live conversations</li>
                <li>Give every lead a next step automatically</li>
              </ul>
            </div>
            <aside className="hero-card">
              <div className="card-label">FIRST SALE OFFER</div>
              <h2>AI Appointment Engine</h2>
              <p>Done-for-you setup for a small team, brokerage, investor operator, or solo agent ready to stop leaking leads.</p>
              <div className="price-row">
                <div>
                  <div className="price">$2,500</div>
                  <div className="price-note">one-time pilot setup</div>
                </div>
                <div className="guarantee">If we can’t launch in 7 days, we keep working for free until it’s live.</div>
              </div>
              <ul className="checklist">
                <li>Lead intake + routing logic</li>
                <li>SMS / email follow-up sequences</li>
                <li>AI qualification and reactivation flows</li>
                <li>Daily dashboard + handoff SOPs</li>
              </ul>
              <a className="primary-btn wide" href="#contact">Claim a pilot slot</a>
            </aside>
          </div>
        </section>

        <section className="section" id="agents">
          <div className="section-intro">
            <div className="section-label">THE SUBAGENT CREW</div>
            <h2>Five specialists, one revenue system</h2>
            <p>ResultEstate isn’t one generic assistant. It is a coordinated specialist team. Each subagent owns a different part of the machine, from outbound and positioning to delivery and product improvement.</p>
          </div>
          <div className="org-chart">
            <div className="org-center">ResultEstate</div>
            <div className="org-branches">
              {agents.map((agent) => (
                <Link className="org-node" href={`/agents/${agent.slug}`} key={agent.slug}>
                  <div className="agent-badge">{agent.badge}</div>
                  <strong>{agent.name.replace('ResultEstate ', '')}</strong>
                </Link>
              ))}
            </div>
          </div>
          <div className="agents-grid">
            {agents.map((agent) => (
              <article className="agent-card" key={agent.slug}>
                <div className="agent-badge">{agent.badge}</div>
                <h3>{agent.name}</h3>
                <p>{agent.blurb}</p>
                <Link className="text-link" href={`/agents/${agent.slug}`}>View detailed role →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="handoffs">
          <div className="section-intro">
            <div className="section-label">HOW THEY WORK TOGETHER</div>
            <h2>A simple handoff chain from demand to delivery</h2>
            <p>Each agent has a job. The machine works because responsibilities are clear and handoffs are explicit.</p>
          </div>
          <div className="timeline">
            {handoffs.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-intro narrow">
            <div className="section-label">BOOK THE PILOT</div>
            <h2>Tell us what’s breaking in your funnel.</h2>
            <p>Fill this out and the app will capture your pilot inquiry directly. Add a sales webhook and it can forward submissions automatically.</p>
          </div>
          <div className="contact-grid">
            <LeadForm />
            <aside className="contact-card">
              <div className="card-label">WHAT HAPPENS NEXT</div>
              <ol>
                <li>You submit the pilot inquiry</li>
                <li>We scope the highest-leakage workflow</li>
                <li>We define the exact 7-day build</li>
                <li>You get a live pilot, not a proposal maze</li>
              </ol>
              <div className="contact-links">
                <a href="mailto:sales@resultestate.ai?subject=ResultEstate%20Pilot">Email directly</a>
                <Link href="/agents/sales">See sales workflow</Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
