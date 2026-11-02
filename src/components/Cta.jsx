import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Cta.css';

export function Cta() {
  const t = useT();

  return (
    <section className="cta" id="contact">
      <div className="reveal">
        <p className="eyebrow">{t('cta.eyebrow')}</p>
        <h2>{t('cta.title')}</h2>
      </div>
      <div className="cta-actions">
        <a className="button primary" href="mailto:hello@spyglee.work">
          hello@spyglee.work
          <ArrowRight size={18} />
        </a>
        <a className="button secondary" href="tel:+385916131962">
          +385 91 613 1962
        </a>
      </div>
    </section>
  );
}
