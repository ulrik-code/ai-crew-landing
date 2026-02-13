
const painPointPlaceholders = [
  {
    title: 'Pain Point Placeholder',
    body: 'Detailed copy from offer-copy.md will explain the primary constraint founders feel right now.'
  },
  {
    title: 'Hiring Drag Placeholder',
    body: 'This slot highlights why adding headcount is expensive, slow, and rarely the answer.'
  },
  {
    title: 'DIY Trap Placeholder',
    body: 'Placeholder describing how duct-taped automations steal time until we rebuild them.'
  }
]

const pricingPlaceholders = [
  {
    tier: 'Audit',
    price: '$500',
    notes: ['48-hour automation assessment', 'Roadmap + ROI snapshot', 'Ideal for clarity before investing']
  },
  {
    tier: 'Crew Lite',
    price: '$1,500/mo',
    notes: ['1-2 workflows live', 'Monthly maintenance + async support', 'Best for solopreneurs']
  },
  {
    tier: 'Crew Core',
    price: '$3,500/mo',
    notes: ['Full AI ops pod', 'Priority support + weekly optimization', 'For teams ready to scale ops']
  }
]

function App() {
  return (
    <div className="app-shell">
      <header className="hero" id="hero" data-testid="hero-section">
        <p className="hero-eyebrow">AI Crew for Hire</p>
        <h1>Stop Doing $15/hr Work (Placeholder)</h1>
        <p>
          Final copy from offer-copy.md will live here. This ensures we design spacing and rhythm before the
          words lock.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#cta" data-testid="hero-primary-cta">
            Book Audit Placeholder
          </a>
          <a className="btn btn-secondary" href="#cta" data-testid="hero-secondary-cta">
            DM Placeholder
          </a>
        </div>
      </header>

      <main>
        <section className="section" id="pain-points" data-testid="painpoints-section">
          <div className="section-header">
            <span>Section</span>
            <h2>Pain Points Placeholder</h2>
          </div>
          <div className="cards-grid">
            {painPointPlaceholders.map((point) => (
              <article key={point.title} className="card-panel">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing" data-testid="pricing-section">
          <div className="section-header">
            <span>Section</span>
            <h2>Pricing Placeholder</h2>
          </div>
          <div className="pricing-grid">
            {pricingPlaceholders.map((tier) => (
              <article
                key={tier.tier}
                className={`pricing-card ${tier.tier === 'Crew Core' ? 'highlight' : ''}`}
              >
                <div>
                  <p className="hero-eyebrow">{tier.tier}</p>
                  <h3>{tier.tier} Tier</h3>
                  <strong>{tier.price}</strong>
                </div>
                <ul>
                  {tier.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <a className="btn btn-secondary" href="#cta">
                  Placeholder CTA
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="cta" data-testid="cta-section">
          <div className="cta-panel">
            <h2>Ready Placeholder</h2>
            <p>
              CTA copy will highlight the audit, subscription tiers, and DM option. For now this ensures layout,
              rhythm, and measurement.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#cta">
                Book Placeholder
              </a>
              <a className="btn btn-secondary" href="#cta">
                DM Placeholder
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
