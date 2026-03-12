import Link from 'next/link'
import Header from '../../../components/Header'

const agentPages = {
  sales: {
    title: 'The Sales Agent turns attention into booked pilots.',
    intro: 'This subagent owns outbound, qualification, objection handling, follow-up, and the practical mechanics of getting ResultEstate paid.',
    mission: 'Sell the outcome, not the AI.',
    bullets: ['Write and refine outbound messages', 'Qualify inbound leads and pilot-fit accounts', 'Handle objections around AI, brand voice, and ISA replacement', 'Structure pilot offers around measurable results', 'Run follow-up sequences that drive replies'],
  },
  research: {
    title: 'The Research Agent finds where ResultEstate wins fastest.',
    intro: 'This subagent identifies high-probability customer segments, pain points, competitor gaps, pricing benchmarks, and the fastest path to first revenue.',
    mission: 'Find the sharpest ICP, not the broadest market.',
    bullets: ['Map the best early customer segments', 'Identify pain points worth paying to fix', 'Benchmark pricing and competing offers', 'Surface message angles that resonate fastest', 'Find prospecting sources and priority lists'],
  },
  copy: {
    title: 'The Copy Agent makes ResultEstate sound sharp, credible, and easy to buy.',
    intro: 'This subagent improves the words that sell: homepage copy, outbound, FAQs, proof blocks, lead magnets, and call scripts.',
    mission: 'Translate the offer into language buyers actually respond to.',
    bullets: ['Tighten landing page headlines and hero sections', 'Write outbound DMs and email sequences', 'Create proof blocks, FAQ answers, and CTA stacks', 'Draft discovery scripts and objection responses', 'Turn rough ideas into persuasive sales language quickly'],
  },
  ops: {
    title: 'The Ops Agent makes the service real in 7 days.',
    intro: 'This subagent designs and documents the operating workflows behind ResultEstate: intake, lead routing, qualification, nurture, CRM hygiene, reporting, client onboarding, and launch checklists.',
    mission: 'Turn the sales promise into a repeatable delivery system.',
    bullets: ['Design intake and lead routing logic', 'Document nurture and reactivation workflows', 'Create CRM hygiene and stage rules', 'Build onboarding and delivery checklists', 'Define reporting and handoff processes'],
  },
  product: {
    title: 'The Product Agent keeps ResultEstate getting better at making money.',
    intro: 'This subagent evolves the site and the service into something more sellable, more useful, and more measurable.',
    mission: 'Improve the product in the direction of revenue.',
    bullets: ['Evolve the site and offer structure', 'Prioritize roadmap and feature ideas', 'Improve lead capture and form flows', 'Add analytics and conversion infrastructure', 'Bias toward what helps make money fastest'],
  },
}

export function generateStaticParams() {
  return Object.keys(agentPages).map((slug) => ({ slug }))
}

export default async function AgentPage({ params }) {
  const { slug } = await params
  const agent = agentPages[slug]
  if (!agent) return <div>Not found</div>

  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="page-hero">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>→</span><span>{slug}</span></div>
          <h1>{agent.title.split(' ').slice(0, 2).join(' ')} <em>{agent.title.split(' ').slice(2).join(' ')}</em></h1>
          <p>{agent.intro}</p>
        </section>
        <section className="agent-layout">
          <div className="detail-stack">
            <article className="detail-block">
              <div className="agent-badge">Mission</div>
              <h3>{agent.mission}</h3>
              <p>{agent.intro}</p>
            </article>
            <article className="detail-block">
              <div className="agent-badge">Core responsibilities</div>
              <ul className="detail-list compact">{agent.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </article>
          </div>
          <aside className="detail-stack">
            <article className="detail-block">
              <div className="agent-badge">Best next move</div>
              <p>Use this agent when you want this specific function to improve ResultEstate faster.</p>
              <a className="primary-btn wide" href="/#contact">Book a pilot</a>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}
