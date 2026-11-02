import { Expand, LockKeyhole, ShieldCheck } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Values.css';

const values = [
  { id: 'security', icon: ShieldCheck },
  { id: 'scale', icon: Expand },
  { id: 'privacy', icon: LockKeyhole },
];

export function Values() {
  const t = useT();

  return (
    <section className="values section" id="values">
      <div className="value-grid" aria-label={t('values.label')}>
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article className="value-card" key={value.id}>
              <div className="card-heading">
                <Icon size={22} />
                <h3>{t(`values.${value.id}.title`)}</h3>
              </div>
              <p>{t(`values.${value.id}.text`)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
