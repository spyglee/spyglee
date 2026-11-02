import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Problems.css';

const businessProblems = ['1', '2', '3', '4', '5', '6'];

export function Problems() {
  const t = useT();

  return (
    <section className="section problems" id="problems">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('problems.eyebrow')}</p>
        <h2>{t('problems.title')}</h2>
      </div>
      <div className="problem-grid" aria-label={t('problems.label')}>
        {businessProblems.map((id) => (
          <div className="problem-row" key={id}>
            <div className="problem-cell problem">
              <span className="problem-tag">{t('problems.before')}</span>
              <p>{t(`problems.${id}.problem`)}</p>
            </div>
            <ArrowRight className="problem-arrow" size={20} aria-hidden="true" />
            <div className="problem-cell solution">
              <span className="problem-tag">{t('problems.after')}</span>
              <p>{t(`problems.${id}.solution`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
