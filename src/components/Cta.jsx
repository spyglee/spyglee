import { ArrowRight } from 'lucide-react';
import './Cta.css';

export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="reveal">
        <p className="eyebrow">Start</p>
        <h2>Bring us an idea, a workflow, or a system that needs to grow without compromising security or privacy.</h2>
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
