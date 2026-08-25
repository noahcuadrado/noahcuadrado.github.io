import React from 'react';

import './Body.css';
import engagementCover from '../images/engagement-cover.webp';
import colourCover from '../images/colour-cover.webp';
import nightModeCover from '../images/night_mode_square.png';

const proofPoints = [
  ['AI-agent UX', 'Making agent actions visible, inspectable and steerable.'],
  ['Complex workflows', 'Designing clear state, access boundaries and recovery around technical constraints.'],
  ['Systems thinking', 'Reusable interaction patterns for agent actions and product state.'],
  ['AI-assisted delivery', 'Using coding agents to help implement and test product changes.'],
];

const principles = [
  ['01', 'Directness', 'Let people point to the intended element instead of describing it indirectly.'],
  ['02', 'Legibility', 'Show model routing, draft preview, progress and failure states.'],
  ['03', 'Recoverability', 'Provide a recovery path for interrupted previews and agent sessions.'],
  ['04', 'Scoped access', 'Scope WorkspaceDB operations to app-referenced tables, limit and redact sample context, and reduce raw internal-error exposure.'],
];

const selectedWork = [
  {
    type: 'Product UX',
    title: 'Engagement features',
    description: 'A product-design exploration focused on participation, motivation and clear interaction states.',
    href: 'https://www.behance.net/gallery/128428207/UXUI-Design-Engagement-Features',
    color: 'coral',
    image: engagementCover,
  },
  {
    type: 'Design system',
    title: 'Accessible colour',
    description: 'A reusable colour foundation built around hierarchy, contrast and accessible application.',
    href: 'https://www.behance.net/gallery/150994979/TCS-Design-System-Colour',
    color: 'violet',
    image: colourCover,
  },
  {
    type: 'Design system',
    title: 'Buttons and states',
    description: 'A button system showing component anatomy, variants and interaction states.',
    href: 'https://www.behance.net/gallery/151475565/TCS-Design-System-2-Buttons',
    color: 'blue',
  },
  {
    type: 'Game UX',
    title: 'Night Mode',
    description: 'A solo game project recognized with an honorable mention at Indie Spain Jam 2023.',
    href: 'https://noahuxui.itch.io/night-mode',
    color: 'lime',
    image: nightModeCover,
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ButtonsCover() {
  const states = ['Default', 'Hover', 'Focus', 'Disabled'];
  return (
    <div className="buttons-cover">
      {states.map((state) => (
        <div className="spec-row" key={state}>
          <span className={`spec-btn ${state.toLowerCase()}`}>Save changes</span>
          <span className="spec-label">{state}</span>
        </div>
      ))}
    </div>
  );
}

function BuilderWorkflow() {
  return (
    <div className="workflow-visual">
      <div className="visual-meta">
        <span>Interaction composite</span>
        <span>Quick Edit · Audos Code</span>
      </div>
      <div className="workflow-grid">
        <article className="workflow-step">
          <span className="step-index">01</span>
          <div className="mock-browser" aria-hidden="true">
            <div className="mock-browser-bar"><i /><i /><i /></div>
            <div className="mock-page">
              <div className="mock-nav" />
              <div className="mock-heading" />
              <div className="mock-copy" />
              <div className="mock-target"><span>Select target</span></div>
              <div className="mock-cards"><i /><i /><i /></div>
            </div>
          </div>
          <h3>Select the target</h3>
          <p>Select the exact interface element.</p>
        </article>

        <article className="workflow-step">
          <span className="step-index">02</span>
          <div className="mock-prompt" aria-hidden="true">
            <span className="prompt-context">Button · Hero</span>
            <p>Make this action clearer and easier to notice.</p>
            <div className="prompt-footer"><span>Ready</span><b>Send ↑</b></div>
          </div>
          <h3>Ask with context</h3>
          <p>The request carries the selected target.</p>
        </article>

        <article className="workflow-step">
          <span className="step-index">03</span>
          <div className="mock-preview" aria-hidden="true">
            <div className="preview-toolbar"><span>Live draft</span><b>Updated</b></div>
            <div className="preview-body">
              <i className="preview-title" />
              <i className="preview-copy" />
              <span>Primary action</span>
            </div>
          </div>
          <h3>Inspect the result</h3>
          <p>See the draft change in context.</p>
        </article>

        <article className="workflow-step">
          <span className="step-index">04</span>
          <div className="mock-checks" aria-hidden="true">
            <div><i className="pass">✓</i><span>Preview available</span></div>
            <div><i className="pass">✓</i><span>Edit status visible</span></div>
            <div><i className="pending">↻</i><span>Recover if interrupted</span></div>
          </div>
          <h3>Test or recover</h3>
          <p>Keep progress visible and recoverable.</p>
        </article>
      </div>
    </div>
  );
}

function AudosCodeMap() {
  const additions = [
    ['Embedded workflow', 'Launch and continue inside the Audos workspace.'],
    ['Live draft loop', 'Sync edits into a visible draft preview.'],
    ['Visible system state', 'Show model routing, progress and failure.'],
    ['Recovery and scoped access', 'Preserve work and restrict data tools.'],
  ];

  return (
    <div className="code-map">
      <div className="foundation-column">
        <span className="map-label">Inherited foundation</span>
        <div className="foundation-card">
          <span className="foundation-mark">T3</span>
          <div>
            <h3>T3 Code</h3>
            <p>Open-source coding-workspace foundation</p>
          </div>
        </div>
        <p className="foundation-note">Credited as the starting point.</p>
      </div>
      <div className="map-arrow" aria-hidden="true">→</div>
      <div className="contribution-column">
        <span className="map-label">Audos-specific product work</span>
        <div className="addition-grid">
          {additions.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function AttributionNote() {
  return (
    <aside className="attribution-note">
      <span>Foundation credit</span>
      <p>
        Audos Code adapts the open-source T3 Code project for an embedded Audos workflow. Ada is the
        workspace-editing agent inside Audos Code. The second section is a workflow deep dive, not a
        separate product or fork. These sections cover the Audos-specific product and interaction work.
        They do not claim ownership of T3 Code.
      </p>
    </aside>
  );
}

function Body() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Noah Cuadrado, home">
          <span>NC</span>
          <strong>Noah Cuadrado</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#audos-code">Work</a>
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/in/noahuxui/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span className="status-dot" />
            Product Designer · Based in Spain · EU employment · Global contract work
          </div>
          <h1 id="hero-title">I design AI products with <em>visible state</em>, clear controls and recovery.</h1>
          <div className="hero-bottom">
            <p>
              I am a Product Designer at Audos. My recent work covers agent workflows, live previews,
              scoped data access and recovery.
            </p>
            <a className="primary-link" href="#audos-code">View featured work <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="proof-grid" aria-label="Areas of focus">
          {proofPoints.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section className="case-study" id="audos-code" aria-labelledby="audos-code-title">
          <div className="section-label"><span>Case study 01</span><span>Prototype · adapted from T3 Code</span></div>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Audos Code · 2026</p>
              <h2 id="audos-code-title">From open-source coding agent to embedded Audos editor.</h2>
            </div>
            <p className="case-summary">
              A beta prototype used by a small group of Audos users to edit their own workspaces.
              It adapts T3 Code for embedded workspace editing and visible draft inspection.
            </p>
          </div>

          <AttributionNote />
          <AudosCodeMap />

          <div className="case-context">
            <article>
              <span className="context-label">The design problem</span>
              <p>
                The inherited coding-agent workspace sat outside the product it changed. The Audos
                adaptation brings editing, preview and recovery into the workspace.
              </p>
            </article>
            <dl>
              <div><dt>Role</dt><dd>Product Designer</dd></div>
              <div><dt>Focus</dt><dd>Embedded editing, preview and recovery</dd></div>
              <div><dt>Foundation</dt><dd>T3 Code fork</dd></div>
              <div><dt>Use</dt><dd>Small beta group</dd></div>
            </dl>
          </div>
        </section>

        <section className="case-study case-study-alt" id="ada-builder" aria-labelledby="ada-title">
          <div className="section-label"><span>Interaction deep dive</span><span>Workflow within Audos Code</span></div>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Quick Edit workflow · Audos Code · 2026</p>
              <h2 id="ada-title">Target a UI element, request a change and inspect the draft.</h2>
            </div>
            <p className="case-summary">
              Quick Edit carried selected-element context into a dedicated GLM 4.7 route on Cerebras
              through OpenRouter, with the changing draft visible for inspection. It reached the Audos
              Code 0.3.0 staging release path; feature adoption and outcomes were not measured.
            </p>
          </div>

          <BuilderWorkflow />

          <div className="case-context">
            <article>
              <span className="context-label">The design problem</span>
              <p>
                Design hypothesis: keep the agent's target, updated draft, current state and recovery
                path visible during an edit.
              </p>
            </article>
            <dl>
              <div><dt>Role</dt><dd>Product Designer</dd></div>
              <div><dt>Focus</dt><dd>Element targeting and draft inspection</dd></div>
              <div><dt>Environment</dt><dd>Audos Code · Web</dd></div>
              <div><dt>Evidence</dt><dd>Reconstructed from repository history</dd></div>
            </dl>
          </div>

          <div className="principles-heading">
            <span className="context-label">Four principles</span>
            <h3>The workflow keeps target, state, access and recovery visible.</h3>
          </div>
          <div className="principles-grid">
            {principles.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <aside className="reliability-evidence" aria-labelledby="reliability-title">
            <div>
              <span className="context-label">Repository evidence</span>
              <h3 id="reliability-title">The interface could look connected while an agent turn had stopped updating.</h3>
            </div>
            <div className="reliability-copy">
              <p>
                A June 2026 commit traced the failure to a half-open WebSocket. The interface still
                showed a connected state, but completed work appeared only after a manual refresh.
              </p>
              <p>
                Recovery work forced a full session reconnect after heartbeat failure and restored
                active threads after reload. A later watchdog converted long turn stalls into explicit errors.
              </p>
              <p className="evidence-scope">
                Evidence scope: repository history from June and July 2026 records the work under my
                identity. Several commits also credit Cursor as co-author. Beta reports and runtime
                behavior are documented; adoption and customer outcomes remain unmeasured.
              </p>
            </div>
          </aside>

          <aside className="ai-disclosure">
            <div>
              <span className="context-label">AI-assisted delivery</span>
              <h3>This case study focuses on the Audos-specific product experience. Coding agents supported implementation and testing.</h3>
            </div>
            <p>
              I use coding agents extensively for React, TypeScript and Node changes. This case study
              describes the work as AI-assisted product design and implementation. It does not present
              the engineering as hand-written or claim ownership of T3 Code.
            </p>
          </aside>
        </section>

        <section className="selected-work" aria-labelledby="selected-title">
          <div className="section-label"><span>Selected earlier work</span></div>
          <div className="selected-heading">
            <h2 id="selected-title">Product UX, accessible systems and a solo game.</h2>
            <p>Public work from before Audos. Each project opens on its original portfolio page.</p>
          </div>
          <div className="work-grid">
            {selectedWork.map((work) => (
              <a className={`work-card ${work.color}`} href={work.href} target="_blank" rel="noreferrer" key={work.title}>
                <div className="work-art" aria-hidden="true">
                  <span>{work.type}</span>
                  {work.image ? <img src={work.image} alt="" /> : <ButtonsCover />}
                </div>
                <div className="work-copy">
                  <p>{work.type}</p>
                  <h3>{work.title}</h3>
                  <span>{work.description}</span>
                  <b>Open project <Arrow /></b>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <span className="context-label">About</span>
            <h2 id="about-title">A product designer who stays close to how the product actually behaves.</h2>
          </div>
          <div className="about-copy">
            <p>
              My background includes product design, game UX, accessible component systems and behavioral
              analysis. I stay close to implementation because system state, edge cases and recovery are
              part of the design.
            </p>
            <div className="timeline" aria-label="Experience timeline">
              <div><time>2025 to present</time><span><strong>Audos</strong>Product Designer</span></div>
              <div><time>Earlier</time><span><strong>Product design</strong>Prosper Labs · The Collective Studio</span></div>
            </div>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Based in Spain · EU employment · Global contract work</p>
          <h2 id="contact-title">Need a product designer for a difficult workflow?</h2>
          <div>
            <a href="mailto:noahcuadradosuarez@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/noahuxui/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://www.behance.net/noahcuadradodesign" target="_blank" rel="noreferrer">Behance <Arrow /></a>
            <a href="https://github.com/noahcuadrado" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>Noah Cuadrado · Product Designer</span>
        <span>EU employment · Global contract work</span>
      </footer>
    </div>
  );
}

export default Body;
