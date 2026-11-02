import { Bot, Code2, Layers3, LineChart, ShieldCheck } from 'lucide-react';
import { useT } from '../i18n.jsx';
import './Services.css';

const services = [
  { id: 'apps', icon: Code2 },
  { id: 'ai', icon: Bot },
  { id: 'cloud', icon: Layers3 },
  { id: 'data', icon: LineChart },
  { id: 'reliability', icon: ShieldCheck },
];

export function Services() {
  const t = useT();

  return (
    <section className="section" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">{t('services.eyebrow')}</p>
        <h2>{t('services.title')}</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.id}>
              <div className="card-heading">
                <Icon size={24} />
                <h3>{t(`services.${service.id}.title`)}</h3>
              </div>
              <p>{t(`services.${service.id}.text`)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
