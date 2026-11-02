import { useT } from '../i18n.jsx';
import './Nav.css';

export function Nav({ home = true }) {
  const t = useT();
  const section = (id) => (home ? `#${id}` : `/#${id}`);

  return (
    <nav className="nav">
      <a className="brand" href={home ? '#top' : '/'} aria-label={t('nav.home')}>
        <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
      </a>
      <div className="nav-links" aria-label={t('nav.primary')}>
        <a href={section('values')}>{t('nav.values')}</a>
        <a href={section('technology')}>{t('nav.stack')}</a>
        <a href={section('projects')}>{t('nav.projects')}</a>
        <a href={section('clients')}>{t('nav.clients')}</a>
        <a href={section('services')}>{t('nav.services')}</a>
        <a href={section('problems')}>{t('nav.problems')}</a>
        <a href={section('process')}>{t('nav.process')}</a>
        <a href={section('about')}>{t('nav.about')}</a>
        <a href={section('contact')}>{t('nav.contact')}</a>
      </div>
    </nav>
  );
}
