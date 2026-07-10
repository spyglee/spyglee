import { ArrowRight } from 'lucide-react';
import './Cta.css';

export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="reveal">
        <p className="eyebrow">Start</p>
        <h2>Bring us an idea, a workflow, or a system that needs to grow without compromising security or privacy.</h2>
      </div>
      <a className="button primary" href="mailto:hello@spyglee.work">
        hello@spyglee.work
        <ArrowRight size={18} />
      </a>
    </section>
  );
}
