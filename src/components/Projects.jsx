import './Projects.css';

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
  {
    name: 'peasySchedule',
    logo: '/peasyschedule-logo.svg',
    label: 'Group scheduling platform',
    title: 'Grouped schedules, payments, and attendance, kept in sync.',
    text: 'peasySchedule helps teams and groups organize shared schedules, track member payments and attendance, and keep every participant in sync across devices in real time.',
    features: [
      'Grouped schedule organization',
      'Payment tracking',
      'Attendance tracking',
      'Real-time sync across members',
    ],
  },
];

export function Projects() {
  return (
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
  );
}
