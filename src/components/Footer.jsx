import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="brand" href="#top" aria-label="spyglee home">
          <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
        </a>
        <div className="footer-links" aria-label="Footer navigation">
          <a href="#values">Values</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#services">Services</a>
          <a href="#problems">Problems</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copyright">&copy; {new Date().getFullYear()} spyglee. All rights reserved.</p>
      </div>
    </footer>
  );
}
