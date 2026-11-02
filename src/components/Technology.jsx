import { useT } from '../i18n.jsx';
import './Technology.css';

const technologyStack = [
  {
    id: 'web',
    technologies: [
      { name: 'React', image: '/tech/react.svg', description: 'tech.react' },
      { name: 'Node.js', image: '/tech/nodejs.png', description: 'tech.node' },
      { name: 'TypeScript', image: '/tech/typescript.png', description: 'tech.ts' },
    ],
  },
  {
    id: 'mobile',
    technologies: [
      { nameKey: 'tech.ios.name', image: '/tech/ios.svg', description: 'tech.ios' },
      { name: 'React Native', image: '/tech/react.svg', description: 'tech.rn' },
    ],
  },
  {
    id: 'desktop',
    technologies: [
      { name: 'Swift', image: '/tech/swift.png', description: 'tech.swift' },
      { name: 'Electron', image: '/tech/electron.svg', description: 'tech.electron' },
    ],
  },
  {
    id: 'microsoft',
    technologies: [
      { name: 'Power Apps', image: '/tech/powerapps.png', description: 'tech.powerapps' },
      { name: 'Power Automate', image: '/tech/powerautomate.svg', description: 'tech.automate' },
      { name: 'Copilot Studio', image: '/tech/copilotstudio.webp', description: 'tech.copilot' },
      { name: 'SharePoint Online', image: '/tech/sharepointonline.png', description: 'tech.sharepoint' },
    ],
  },
];

export function Technology() {
  const t = useT();

  return (
    <section className="technology section" id="technology">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('tech.eyebrow')}</p>
        <h2>{t('tech.title')}</h2>
      </div>
      <div className="stack-groups">
        {technologyStack.map((group) => (
          <article className="stack-group" key={group.id}>
            <div className="stack-group-heading">
              <h3>{t(`tech.${group.id}`)}</h3>
              <p>{t(`tech.${group.id}.text`)}</p>
            </div>
            <div className="tech-grid">
              {group.technologies.map((tech) => {
                const name = tech.nameKey ? t(tech.nameKey) : tech.name;
                return (
                  <div className="tech-card" key={tech.name ?? tech.nameKey}>
                    <div className="card-heading">
                      <img src={tech.image} alt={t('tech.image', { name })} />
                      <h4>{name}</h4>
                    </div>
                    <p>{t(tech.description)}</p>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
