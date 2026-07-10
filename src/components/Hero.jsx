import { ArrowRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Software, automation, and AI for growing businesses</p>
        <h1>Software that feels simple. Built for work that is not.</h1>
        <p className="hero-text">
          We help teams cut manual work, connect disconnected systems, and ship software that fits how the business actually runs — backed by secure, production-grade engineering across web, cloud, automation, and AI.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Book a free consultation
            <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="#services">
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
