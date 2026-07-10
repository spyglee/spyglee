import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
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
    icon: Bot,
    title: 'AI and automation',
    text: 'AI agents, chatbots, and workflow automation that take over the repetitive work — document processing, approvals, and internal knowledge search.',
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
  {
    name: 'EBU',
    logo: 'ebu.svg',
    link: 'https://www.ebu.ch/'
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

const businessProblems = [
  {
    problem: "Manual, repetitive work eats up your team's time.",
    solution: 'Automated workflows and AI agents handle the repetitive parts.',
  },
  {
    problem: 'Employees waste time searching for documents and answers.',
    solution: 'Centralized systems and AI-powered search surface what people need.',
  },
  {
    problem: "Core systems don't talk to each other.",
    solution: 'Integrations and APIs connect the tools you already use.',
  },
  {
    problem: 'Approvals and internal processes move too slowly.',
    solution: 'Streamlined, automated approval workflows.',
  },
  {
    problem: "Internal tools are outdated or don't fit how you work.",
    solution: 'Custom software built around your actual workflow.',
  },
  {
    problem: 'Reporting still happens by hand, in spreadsheets.',
    solution: 'Automated dashboards and reporting your team can trust.',
  },
];

const process = [
  {
    step: '01',
    title: 'Understand your business',
    text: 'We learn how your team actually works, where time is lost, and what success looks like before proposing anything.',
  },
  {
    step: '02',
    title: 'Design the solution',
    text: 'We recommend the most effective approach — technology chosen to fit the problem, not the other way around.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'We develop in focused, production-ready releases with security and scalability visible from the start.',
  },
  {
    step: '04',
    title: 'Deploy',
    text: 'We roll out with minimal disruption to your daily operations.',
  },
  {
    step: '05',
    title: 'Support',
    text: 'We stay on as a long-term partner — monitoring, improving, and extending the system as your business grows.',
  },
];

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
          <a href="#problems">Problems</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software, automation, and AI for growing businesses</p>
          <h1>Software that feels simple. Built for work that is not.</h1>
          <p className="hero-text">
            We help teams cut manual work, connect disconnected systems, and ship software that fits how the business actually runs — backed by secure, production-grade engineering across web, cloud, automation, and AI.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Book a free consultation
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#services">
              Explore our services
            </a>
          </div>
        </div>
      </section>

      <section className="values section" id="values">
        <div className="value-grid" aria-label="spyglee values">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="value-card" key={value.title}>
                <div className="card-heading">
                  <Icon size={22} />
                  <h3>{value.title}</h3>
                </div>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="technology section" id="technology">
        <div className="section-heading reveal">
          <p className="eyebrow">Technology</p>
          <h2>The right technology for the job — chosen to fit your business, not the other way around.</h2>
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
                    <div className="card-heading">
                      <img src={tech.image} alt={tech.name + ' technology image'} />
                      <h4>{tech.name}</h4>
                    </div>
                    <p>{tech.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading reveal">
          <p className="eyebrow">Our projects</p>
          <h2>Digital products designed around sensitive, human workflows.</h2>
        </div>
        <div className="project-showcase">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-logo-wrap">
                <img src={project.logo} alt={project.name + ' logo'} />
              </div>
              <div className="project-content reveal">
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
        <div className="section-heading reveal">
          <p className="eyebrow">Clients</p>
          <h2>Trusted by teams across commerce, logistics, gaming, and hospitality.</h2>
        </div>
        <div className="client-marquee" aria-label="Client logos">
          <div className="client-track">
            {[...clients, ...clients].map((client, index) => {
              const duplicate = index >= clients.length;
              return (
                <a
                  className="client-logo"
                  href={client.link}
                  key={`${client.name}-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${client.name} logo source`}
                  aria-hidden={duplicate || undefined}
                  tabIndex={duplicate ? -1 : undefined}
                >
                  <img className={client.className || ''} src={client.logo} alt={`${client.name} logo`} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading reveal">
          <p className="eyebrow">Capabilities</p>
          <h2>Software that fits the way your business operates.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="card-heading">
                  <Icon size={24} />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section problems" id="problems">
        <div className="section-heading reveal">
          <p className="eyebrow">Business problems</p>
          <h2>We solve real, everyday problems — not just build software.</h2>
        </div>
        <div className="problem-grid" aria-label="Problems we solve and how">
          {businessProblems.map((row) => (
            <div className="problem-row" key={row.problem}>
              <div className="problem-cell problem">
                <span className="problem-tag">Before</span>
                <p>{row.problem}</p>
              </div>
              <ArrowRight className="problem-arrow" size={20} aria-hidden="true" />
              <div className="problem-cell solution">
                <span className="problem-tag">After</span>
                <p>{row.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading reveal">
          <p className="eyebrow">Approach</p>
          <h2>Thoughtful process. Fewer surprises. Better software.</h2>
        </div>
        <div className="process-timeline" aria-label="How we work">
          {process.map((item, index) => (
            <React.Fragment key={item.step}>
              <div className="process-step">
                <span className="process-index">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              {index < process.length - 1 && (
                <div className="process-connector" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-grid">
          <div className="about-visual" aria-hidden="true">
            <img src="/spyglee-logo.svg" alt="" />
          </div>
          <div className="about-content reveal">
            <p className="eyebrow">About spyglee</p>
            <h2>Full-stack software development.</h2>
            <p className="about-text">
              We design and build across web, mobile, desktop, and cloud, with practical Microsoft 365 and automation expertise built in — secure, scalable software shaped around how your business actually runs.
            </p>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="reveal">
          <p className="eyebrow">Start</p>
          <h2>Bring us an idea, a workflow, or a system that needs to grow without compromising security or privacy.</h2>
        </div>
        <a className="button primary" href="mailto:hello@spyglee.work">
          hello@spyglee.work
          <ArrowRight size={18} />
        </a>
      </section>
      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="#top" aria-label="spyglee home">
            <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
          </a>
          <div className="footer-links" aria-label="Footer navigation">
            <a href="#values">Values</a>
            <a href="#projects">Projects</a>
            <a href="#clients">Clients</a>
            <a href="#services">Services</a>
            <a href="#problems">Problems</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} spyglee. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
