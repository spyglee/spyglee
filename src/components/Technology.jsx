import './Technology.css';

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

export function Technology() {
  return (
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
  );
}
