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

function NightModeLoop() {
  const cells = Array.from({ length: 20 }, (_, index) => index);
  const steps = ['Scan the grid', 'Spot the change', 'Pick it', 'Replay or rank'];

  return (
    <div className="night-mode-visual">
      <figure className="night-cover">
        <img src={nightModeCover} alt="Night Mode game cover with a crescent moon on a deep blue background" />
        <figcaption>
          <span>Released game</span>
          <span>Original art · credited third-party music</span>
        </figcaption>
      </figure>

      <div className="night-loop">
        <div className="night-loop-heading">
          <span className="context-label">Released interaction</span>
          <h3>One input keeps the loop immediate.</h3>
          <p>Interaction diagram based on the published web game, not a process artifact.</p>
        </div>
        <div className="night-grid" aria-hidden="true">
          {cells.map((cell) => <i className={cell === 13 ? 'changed' : ''} key={cell} />)}
          <span>Pick</span>
        </div>
        <ol className="night-loop-steps">
          {steps.map((step, index) => (
            <li key={step}><span>0{index + 1}</span>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function AdaBuilderVisual() {
  const projectCards = [
    ['Thread', 'Working'],
    ['Thread', 'Preview'],
    ['Thread', 'Available'],
  ];

  return (
    <div className="ada-visual">
      <div className="ada-canvas" aria-hidden="true">
        <div className="ada-canvas-meta"><span>Canvas overview</span><span>Semantic zoom</span></div>
        <div className="ada-project-cluster ada-project-primary">
          <div className="ada-project-name"><i />Project folder</div>
          <div className="ada-thread-row">
            {projectCards.map(([name, state], index) => (
              <div className={index === 0 ? 'ada-thread active' : 'ada-thread'} key={`${name}-${state}`}>
                <span>{name}</span><b>{state}</b><i />
              </div>
            ))}
          </div>
        </div>
        <div className="ada-project-cluster ada-project-secondary"><span>Project folder</span><i /><i /></div>
        <div className="ada-project-cluster ada-project-tertiary"><span>Project folder</span><i /><i /><i /></div>
        <div className="ada-canvas-controls"><span>Search</span><span>Fit all</span><span>List</span></div>
      </div>

      <div className="ada-guide">
        <div className="ada-guide-bar"><span>Project Guide</span><span>Read-only scan</span></div>
        <div className="ada-guide-copy">
          <span className="context-label">Repository evidence</span>
          <h3>Show what the guide found before it runs anything.</h3>
        </div>
        <div className="ada-guide-signals">
          <div><span>Tooling</span><b>Evidence + confidence</b></div>
          <div><span>Start and checks</span><b>Evidence + confidence</b></div>
          <div><span>Ports and environment</span><b>Evidence + confidence</b></div>
          <div><span>Deployment signals</span><b>Evidence + confidence</b></div>
        </div>
        <div className="ada-guide-consent">
          <span>Preview command</span>
          <strong>Exact consent required</strong>
        </div>
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
        Audos Code adapts the open-source T3 Code project for an embedded Audos workflow. Quick Edit is
        a workflow inside Audos Code, so the next section is a deep dive rather than a separate product.
        Ada Builder is a different T3 Code-based prototype and appears as a separate case below.
        These sections cover Audos-specific work and do not claim ownership of T3 Code.
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

        <section className="case-study case-study-alt" id="quick-edit" aria-labelledby="quick-edit-title">
          <div className="section-label"><span>Interaction deep dive</span><span>Workflow within Audos Code</span></div>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Quick Edit workflow · Audos Code · 2026</p>
              <h2 id="quick-edit-title">Target a UI element, request a change and inspect the draft.</h2>
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

        <section className="case-study ada-builder-case" id="ada-builder" aria-labelledby="ada-builder-title">
          <div className="section-label"><span>Case study 02</span><span>Working prototype · adapted from T3 Code</span></div>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Ada Builder · 2026</p>
              <h2 id="ada-builder-title">A visual workspace over the agent work already in T3 Code.</h2>
            </div>
            <p className="case-summary">
              Ada Builder is a separate local prototype. It keeps T3 Code's project, thread, worktree
              and preview models, then presents them as a spatial canvas with a repository-aware Project Guide.
            </p>
          </div>

          <aside className="prototype-note">
            <span>Foundation and scope</span>
            <p>
              The prototype is a fork of T3 Code, not a from-scratch product. Its current canvas is a
              read-only presentation over T3's existing data model. Unsupported lifecycle actions are
              absent rather than simulated.
            </p>
          </aside>

          <AdaBuilderVisual />

          <div className="case-context">
            <article>
              <span className="context-label">The prototype question</span>
              <p>
                Can projects and agent threads become a navigable visual workspace without inventing a
                second backend or hiding what the system actually knows?
              </p>
            </article>
            <dl>
              <div><dt>Role</dt><dd>Product design and AI-assisted implementation</dd></div>
              <div><dt>Foundation</dt><dd>T3 Code fork</dd></div>
              <div><dt>State</dt><dd>Local working prototype</dd></div>
              <div><dt>Use</dt><dd>No user or deployment claim</dd></div>
            </dl>
          </div>

          <div className="ada-decisions">
            <article><span>01</span><h3>Spatial, not separate</h3><p>The canvas adapts existing T3 read models and keeps the standard view within reach.</p></article>
            <article><span>02</span><h3>Density follows zoom</h3><p>Overview, near and focus states reveal more detail without changing the underlying project.</p></article>
            <article><span>03</span><h3>Unknown stays unknown</h3><p>Missing repository, branch, worktree or preview metadata remains visibly unavailable.</p></article>
            <article><span>04</span><h3>Consent before execution</h3><p>The Project Guide analyzes a bounded file set first, then asks before starting a preview.</p></article>
          </div>

          <aside className="ada-verification">
            <div>
              <span className="context-label">Local verification</span>
              <strong>58 focused tests passed</strong>
              <p>Canvas layout, data adaptation, evidence collection, profile verification and Project Guide behavior.</p>
            </div>
            <div>
              <span className="context-label">Evidence boundary</span>
              <p>
                The current branch supports a working prototype claim. It does not support users,
                deployment, adoption, time saved or other outcome metrics. Quick Edit and Cerebras
                belong to Audos Code, not this case.
              </p>
            </div>
          </aside>
        </section>

        <section className="case-study night-mode-case" id="night-mode" aria-labelledby="night-mode-title">
          <div className="section-label"><span>Case study 03</span><span>Solo release · Unity · 2023 to 2024</span></div>
          <div className="case-heading">
            <div>
              <p className="eyebrow">Night Mode · Indie Spain Jam 2023</p>
              <h2 id="night-mode-title">A one-button game built around visual perception and replay.</h2>
            </div>
            <p className="case-summary">
              Created solo in Unity during a week-long jam, then released on the web. Night Mode received
              an honorable mention and later got an Android follow-up.
            </p>
          </div>

          <NightModeLoop />

          <div className="case-context night-context">
            <article>
              <span className="context-label">Released constraint</span>
              <p>
                Build an original solo entry in one week, with a visual-perception loop that works with
                one input on keyboard and touch.
              </p>
            </article>
            <dl>
              <div><dt>Role</dt><dd>Solo creator</dd></div>
              <div><dt>Engine</dt><dd>Unity</dd></div>
              <div><dt>Release</dt><dd>Web, then Android follow-up</dd></div>
              <div><dt>Access</dt><dd>One button, tutorial and color-blind-friendly label</dd></div>
            </dl>
          </div>

          <div className="night-evidence">
            <div className="night-results">
              <span className="context-label">Official jam results</span>
              <div className="night-result-grid">
                <article><strong>Honorable mention</strong><span>Indie Spain Jam 2023</span></article>
                <article><strong>#16</strong><span>Mechanics</span></article>
                <article><strong>#33</strong><span>Overall</span></article>
                <article><strong>101</strong><span>Jam ratings · 176 entries</span></article>
              </div>
            </div>
            <div className="night-feedback">
              <span className="context-label">What the public record shows</span>
              <h3>Comments praised quick replay and flagged one color ambiguity.</h3>
              <p>
                Several public comments praised the quick restart and leaderboard competition. One jam
                commenter was unsure which color could be selected. These are public comments, not formal research.
              </p>
            </div>
          </div>

          <div className="night-followup">
            <div>
              <span className="context-label">After the jam</span>
              <h3>The leaderboard passed 100 score submissions. An Android release followed.</h3>
            </div>
            <div className="night-followup-copy">
              <p>
                The public leaderboard received more than 100 score submissions. A January 2024 update
                announced an Android version with a new mode, performance work and other features.
              </p>
              <p className="night-boundary">
                Evidence boundary: public release pages, jam results and comments support this case. No
                local source archive, early design files or analytics export were found. Score submissions
                are not presented as unique users, and the Android work is not attributed to a specific comment.
              </p>
              <div className="night-links">
                <a href="https://noahuxui.itch.io/night-mode" target="_blank" rel="noreferrer">Play Night Mode <Arrow /></a>
                <a href="https://itch.io/jam/indie-spain-jam-23/rate/2272825" target="_blank" rel="noreferrer">View official jam entry <Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="selected-work" aria-labelledby="selected-title">
          <div className="section-label"><span>Selected earlier work</span></div>
          <div className="selected-heading">
            <h2 id="selected-title">Product UX and accessible systems.</h2>
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
