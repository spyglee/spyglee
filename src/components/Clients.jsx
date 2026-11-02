import { useT } from '../i18n.jsx';
import './Clients.css';

const clients = [
  {
    name: 'Amazon',
    logo: 'amazon.png',
    className: 'logo-amazon',
    link: 'https://amazon.com/',
  },
  {
    name: 'Columbia Shipmanagement',
    logo: 'columbiashipmanagement.svg',
    link: 'https://columbiagroup.org/',
  },
  {
    name: 'Thinkspan',
    logo: 'thinkspan.svg',
    className: 'logo-dark-source',
    link: 'https://thinkspan.com/',
  },
  {
    name: 'Rocket League Garage',
    logo: 'rlgarage.png',
    link: 'https://rocket-league.com/',
  },
  {
    name: 'AlmaTherm.kz',
    logo: 'almatherm.svg',
    link: 'https://almatherm.kz/',
  },
  {
    name: 'Lunapizza.ge',
    logo: 'lunapizza.png.webp',
    link: 'https://lunapizza.ge/',
  },
  {
    name: 'EBU',
    logo: 'ebu.svg',
    link: 'https://www.ebu.ch/',
  },
];

export function Clients() {
  const t = useT();

  return (
    <section className="clients section" id="clients">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('clients.eyebrow')}</p>
        <h2>{t('clients.title')}</h2>
      </div>
      <div className="client-marquee" aria-label={t('clients.logos')}>
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
                aria-label={t('clients.source', { name: client.name })}
                aria-hidden={duplicate || undefined}
                tabIndex={duplicate ? -1 : undefined}
              >
                <img className={client.className || ''} src={client.logo} alt={t('clients.logo', { name: client.name })} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
