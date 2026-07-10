import { Bot, Code2, Layers3, LineChart, ShieldCheck } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Code2,
    title: 'Apps and platforms',
    text: 'Modern web products, SaaS platforms, and internal tools shaped around secure, scalable business workflows.',
  },
  {
    icon: Bot,
    title: 'AI and automation',
    text: 'AI agents, chatbots, and workflow automation that take over the repetitive work — document processing, approvals, and internal knowledge search.',
  },
  {
    icon: Layers3,
    title: 'Cloud systems',
    text: 'APIs, infrastructure, integrations, and migrations designed to scale cleanly without unnecessary complexity.',
  },
  {
    icon: LineChart,
    title: 'Data experiences',
    text: 'Dashboards, automation, and analytics interfaces that keep sensitive operational data useful and well protected.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing reliability',
    text: 'Testing, security reviews, deployment pipelines, and support for software your team depends on every day.',
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">Capabilities</p>
        <h2>Software that fits the way your business operates.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.title}>
              <div className="card-heading">
                <Icon size={24} />
                <h3>{service.title}</h3>
              </div>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
