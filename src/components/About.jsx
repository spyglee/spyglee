import './About.css';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-visual" aria-hidden="true">
          <img src="/spyglee-logo.svg" alt="" />
        </div>
        <div className="about-content reveal">
          <p className="eyebrow">About spyglee</p>
          <h2>Full-stack software development.</h2>
          <p className="about-text">
            We design and build across web, mobile, desktop, and cloud, with practical Microsoft 365 and automation expertise built in — secure, scalable software shaped around how your business actually runs.
          </p>
        </div>
      </div>
    </section>
  );
}
