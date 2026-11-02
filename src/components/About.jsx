import { useT } from '../i18n.jsx';
import './About.css';

export function About() {
  const t = useT();

  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-visual" aria-hidden="true">
          <img src="/spyglee-logo.svg" alt="" />
        </div>
        <div className="about-content reveal">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2>{t('about.title')}</h2>
          <p className="about-text">{t('about.text')}</p>
        </div>
      </div>
    </section>
  );
}
