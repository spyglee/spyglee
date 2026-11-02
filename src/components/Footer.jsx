import { useT } from '../i18n.jsx';
import { LanguageSwitcher } from './LanguageSwitcher';
import './Footer.css';

export function Footer({ home = true }) {
  const t = useT();
  const section = (id) => (home ? `#${id}` : `/#${id}`);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="brand" href={home ? '#top' : '/'} aria-label={t('nav.home')}>
          <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
        </a>
        <div className="footer-links" aria-label={t('footer.nav')}>
          <a href={section('values')}>{t('nav.values')}</a>
          <a href={section('projects')}>{t('nav.projects')}</a>
          <a href={section('clients')}>{t('nav.clients')}</a>
          <a href={section('services')}>{t('nav.services')}</a>
          <a href={section('problems')}>{t('nav.problems')}</a>
          <a href={section('about')}>{t('nav.about')}</a>
          <a href={section('contact')}>{t('nav.contact')}</a>
        </div>
        <div className="footer-end">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} spyglee. {t('footer.rights')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
