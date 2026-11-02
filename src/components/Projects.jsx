import { useT } from '../i18n.jsx';
import './Projects.css';

const projects = [
  // {
  //   name: 'TerraPia',
  //   logo: '/terrapia-logo.svg',
  //   id: 'terra',
  //   features: ['terra.f1', 'terra.f2', 'terra.f3', 'terra.f4'],
  // },
  {
    name: 'peasySchedule',
    logo: '/peasyschedule-logo.svg',
    id: 'peasy',
    features: ['peasy.f1', 'peasy.f2', 'peasy.f3', 'peasy.f4'],
  },
  {
    name: 'Ledger',
    logo: '/ledger-logo.svg',
    id: 'ledger',
    features: ['ledger.f1', 'ledger.f2', 'ledger.f3', 'ledger.f4'],
    href: '/ledger',
  },
];

export function Projects() {
  const t = useT();

  return (
    <section className="projects section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('projects.eyebrow')}</p>
        <h2>{t('projects.title')}</h2>
      </div>
      <div className="project-showcase">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-logo-wrap">
              <img src={project.logo} alt={t('projects.logo', { name: project.name })} />
            </div>
            <div className="project-content reveal">
              <p className="project-label">{t(`${project.id}.label`)}</p>
              <h3>{t(`${project.id}.title`)}</h3>
              <p>{t(`${project.id}.text`)}</p>
              <div className="project-features" aria-label={t('projects.features', { name: project.name })}>
                {project.features.map((feature) => (
                  <span key={feature}>{t(feature)}</span>
                ))}
              </div>
              {project.href ? (
                <a className="project-more" href={project.href}>
                  {t('projects.see')}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
