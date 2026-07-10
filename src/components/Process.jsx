import { ArrowRight } from 'lucide-react';
import './Process.css';

const process = [
  {
    step: '01',
    title: 'Understand your business',
    text: 'We learn how your team actually works, where time is lost, and what success looks like before proposing anything.',
  },
  {
    step: '02',
    title: 'Design the solution',
    text: 'We recommend the most effective approach — technology chosen to fit the problem, not the other way around.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'We develop in focused, production-ready releases with security and scalability visible from the start.',
  },
  {
    step: '04',
    title: 'Deploy',
    text: 'We roll out with minimal disruption to your daily operations.',
  },
  {
    step: '05',
    title: 'Support',
    text: 'We stay on as a long-term partner — monitoring, improving, and extending the system as your business grows.',
  },
];

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-heading reveal">
        <p className="eyebrow">Approach</p>
        <h2>Thoughtful process. Fewer surprises. Better software.</h2>
      </div>
      <div className="process-timeline" aria-label="How we work">
        {process.map((item, index) => (
          <ProcessStep key={item.step} item={item} isLast={index === process.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ProcessStep({ item, isLast }) {
  return (
    <>
      <div className="process-step">
        <span className="process-index">{item.step}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      {!isLast && (
        <div className="process-connector" aria-hidden="true">
          <ArrowRight size={18} />
        </div>
      )}
    </>
  );
}
