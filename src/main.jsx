import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  Code2,
  Expand,
  Layers3,
  LineChart,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Code2,
    title: 'Apps and platforms',
    text: 'Modern web products, SaaS platforms, and internal tools shaped around secure, scalable business workflows.',
  },
  {
    icon: Layers3,
    title: 'Cloud systems',
    text: 'APIs, infrastructure, integrations, and migrations designed to scale cleanly without unnecessary complexity.',
  },
  {
    icon: LineChart,
    title: 'Data experiences',
    text: 'Dashboards, automation, and analytics interfaces that keep sensitive operational data useful and well protected.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing reliability',
    text: 'Testing, security reviews, deployment pipelines, and support for software your team depends on every day.',
  },
];



const values = [
  {
    icon: ShieldCheck,
    title: 'Security by design',
    text: 'Threat-aware architecture, hardened integrations, and release practices that reduce operational risk from day one.',
  },
  {
    icon: Expand,
    title: 'Built to scale',
    text: 'Cloud-ready systems, maintainable code, and pragmatic architecture that can grow with teams, traffic, and data.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacy first',
    text: 'Careful data handling, permission-aware workflows, and product decisions shaped around user trust.',
  },
];

const clients = [
  {
    name: 'Amazon',
    logo: 'amazon.png',
    className: 'logo-amazon',
    link: 'https://amazon.com/'
  },
  {
    name: 'Columbia Shipmanagement',
    logo: 'columbiashipmanagement.svg',
    link: 'https://columbiagroup.org/'
  },
  {
    name: 'Thinkspan',
    logo: 'thinkspan.svg',
    className: 'logo-dark-source',
    link: 'https://thinkspan.com/'
  },
  {
    name: 'Rocket League Garage',
    logo: 'rlgarage.png',
    link: 'https://rocket-league.com/'
  },
  {
    name: 'AlmaTherm.kz',
    logo: 'almatherm.svg',
    link: 'https://almatherm.kz/'
  },
  {
    name: 'Lunapizza.ge',
    logo: 'lunapizza.png.webp',
    link: 'https://lunapizza.ge/'
  },
];



const technologyStack = [
  {
    category: 'Web',
    description: 'Secure, scalable web products and APIs with modern frontend and backend foundations.',
    technologies: [
      {
        name: 'React',
        image: '/tech/react.svg',
        description: 'Component-driven interfaces for fast, polished, maintainable web applications.',
      },
      {
        name: 'Node.js',
        image: '/tech/nodejs.png',
        description: 'Efficient server-side JavaScript for APIs, integrations, automation, and real-time services.',
      },
      {
        name: 'TypeScript',
        image: '/tech/typescript.png',
        description: 'Typed JavaScript that improves reliability, refactoring confidence, and long-term maintainability.',
      },
    ],
  },
  {
    category: 'Mobile',
    description: 'Native and cross-platform mobile experiences designed for performance and everyday usability.',
    technologies: [
      {
        name: 'iOS development',
        image: '/tech/ios.svg',
        description: 'Native Apple mobile applications with smooth interactions and platform-specific quality.',
      },
      {
        name: 'React Native',
        image: '/tech/react.svg',
        description: 'Cross-platform mobile apps that share product logic while preserving a native feel.',
      },
    ],
  },
  {
    category: 'Desktop',
    description: 'Desktop software for focused workflows, internal operations, and cross-platform productivity tools.',
    technologies: [
      {
        name: 'Swift',
        image: '/tech/swift.png',
        description: 'Native macOS applications with Apple-quality performance, privacy, and interface behavior.',
      },
      {
        name: 'Electron',
        image: '/tech/electron.svg',
        description: 'Cross-platform desktop apps built with web technologies and packaged for team workflows.',
      },
    ],
  },
  {
    category: 'Microsoft',
    description: 'Practical Microsoft 365 and Power Platform solutions that improve day-to-day office work.',
    technologies: [
      {
        name: 'Power Apps',
        image: '/tech/powerapps.png',
        description: 'Power Apps, Power Automate, and Power BI solutions for forms, approvals, dashboards, and automation.',
      },
      {
        name: 'Power Automate',
        image: '/tech/powerautomate.svg',
        description: 'Excel automation for repeatable reporting, cleanup, and business process shortcuts.',
      },
      {
        name: 'Copilot Studio',
        image: '/tech/copilotstudio.webp',
        description: 'Enables users to build, customize, and deploy AI-powered copilots and chatbots across Microsoft services.',
      },
      {
        name: 'SharePoint Online',
        image: '/tech/sharepointonline.png',
        description: 'Cloud-based platform for team collaboration, document management, and intranet site creation.',
      },
    ],
  },
];

const projects = [
  {
    name: 'TerraPia',
    logo: '/terrapia-logo.svg',
    label: 'Mental health platform',
    title: 'A calmer way to find and work with a therapist online.',
    text: 'TerraPia helps people search for a therapist by issue, meet through secure on-platform video sessions, take private session notes, keep a privacy-aware virtual journal, share selected entries with their chosen therapist, and track progress over time.',
    features: [
      'Issue-based therapist search',
      'Secure video sessions with notes',
      'Privacy-aware virtual journal',
      'Progress tracking',
    ],
  },
];

const process = [
  'Understand the product, users, constraints, privacy needs, and technical risk.',
  'Design the first clear version with security and scalability requirements visible early.',
  'Build in focused releases with production-ready quality and reliable deployment paths.',
  'Measure the result, document the system, and keep improving responsibly.',
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="spyglee home">
          <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#values">Values</a>
          <a href="#technology">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software development solutions</p>
          <h1>Software that feels simple. Built for work that is not.</h1>
          <p className="hero-text">
            spyglee designs and builds refined web products, cloud systems, and data tools for teams that care about security, scalability, privacy, and long-term clarity.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Start your project
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#services">
              Explore services
            </a>
          </div>
        </div>

        <div className="product-panel" aria-label="Software delivery overview">
          <div className="window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="product-screen">
            <div className="screen-header">
              <span>Project OS</span>
              <strong>98%</strong>
            </div>
            <div className="screen-line wide" />
            <div className="screen-line" />
            <div className="screen-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="screen-footer">
              <span>Prototype</span>
              <span>Build</span>
              <span>Launch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="values section" id="values">
        <div className="value-grid" aria-label="spyglee values">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="value-card" key={value.title}>
                <Icon size={22} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="technology section" id="technology">
        <div className="section-heading">
          <p className="eyebrow">Main technology stack</p>
          <h2>Tools we use to build secure products for web, mobile, desktop, and Microsoft workspaces.</h2>
        </div>
        <div className="stack-groups">
          {technologyStack.map((group) => (
            <article className="stack-group" key={group.category}>
              <div className="stack-group-heading">
                <h3>{group.category}</h3>
                <p>{group.description}</p>
              </div>
              <div className="tech-grid">
                {group.technologies.map((tech) => (
                  <div className="tech-card" key={tech.name}>
                    <img src={tech.image} alt={tech.name + ' technology image'} />
                    <div>
                      <h4>{tech.name}</h4>
                      <p>{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Our projects</p>
          <h2>Digital products designed around sensitive, human workflows.</h2>
        </div>
        <div className="project-showcase">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-logo-wrap">
                <img src={project.logo} alt={project.name + ' logo'} />
              </div>
              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-features" aria-label={project.name + ' features'}>
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="clients section" id="clients">
        <div className="section-heading">
          <p className="eyebrow">Clients</p>
          <h2>Trusted by teams across commerce, logistics, gaming, and hospitality.</h2>
        </div>
        <div className="client-grid" aria-label="Client logos">
          {clients.map((client) => (
            <a
              className="client-logo"
              href={client.link}
              key={client.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${client.name} logo source`}
            >
              <img className={client.className || ''} src={client.logo} alt={`${client.name} logo`} />
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Software that fits the way your business operates.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={24} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Approach</p>
          <h2>Thoughtful process. Fewer surprises. Better software.</h2>
        </div>
        <div className="process-list">
          {process.map((item) => (
            <div className="process-item" key={item}>
              <span className="check">
                <Check size={16} />
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Start</p>
          <h2>Bring us an idea, a workflow, or a system that needs to grow without compromising security or privacy.</h2>
        </div>
        <a className="button primary" href="mailto:m.bahrov@icloud.com">
          hello@spyglee.com
          <ArrowRight size={18} />
        </a>
      </section>
      <footer>
          <a>SPYGLEE 2026</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
