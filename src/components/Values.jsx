import { Expand, LockKeyhole, ShieldCheck } from 'lucide-react';
import './Values.css';

const values = [
  {
    icon: ShieldCheck,
    title: 'Security by design',
    text: 'Threat-aware architecture, hardened integrations, and release practices that reduce operational risk from day one.',
  },
  {
    icon: Expand,
    title: 'Built to scale',
    text: 'Cloud-ready systems, maintainable code, and pragmatic architecture that can grow with teams, traffic, and data.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacy first',
    text: 'Careful data handling, permission-aware workflows, and product decisions shaped around user trust.',
  },
];

export function Values() {
  return (
    <section className="values section" id="values">
      <div className="value-grid" aria-label="spyglee values">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article className="value-card" key={value.title}>
              <div className="card-heading">
                <Icon size={22} />
                <h3>{value.title}</h3>
              </div>
              <p>{value.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
