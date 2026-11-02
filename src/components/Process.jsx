import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Process.css';

const process = [
  { step: '01', id: '1' },
  { step: '02', id: '2' },
  { step: '03', id: '3' },
  { step: '04', id: '4' },
  { step: '05', id: '5' },
];

export function Process() {
  const t = useT();

  return (
    <section className="section process-section" id="process">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('process.eyebrow')}</p>
        <h2>{t('process.title')}</h2>
      </div>
      <div className="process-timeline" aria-label={t('process.label')}>
        {process.map((item, index) => (
          <ProcessStep key={item.step} item={item} isLast={index === process.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ProcessStep({ item, isLast }) {
  const t = useT();

  return (
    <>
      <div className="process-step">
        <span className="process-index">{item.step}</span>
        <h3>{t(`process.${item.id}.title`)}</h3>
        <p>{t(`process.${item.id}.text`)}</p>
      </div>
      {!isLast && (
        <div className="process-connector" aria-hidden="true">
          <ArrowRight size={18} />
        </div>
      )}
    </>
  );
}
