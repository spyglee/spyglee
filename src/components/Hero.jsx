import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Hero.css';

export function Hero() {
  const t = useT();

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('hero.title')}</h1>
        <p className="hero-text">{t('hero.text')}</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            {t('hero.consult')}
            <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="#services">
            {t('hero.services')}
          </a>
        </div>
      </div>
    </section>
  );
}
