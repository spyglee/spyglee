import './Nav.css';

export function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="spyglee home">
        <img className="brand-logo" src="/spyglee-logo.svg" alt="spyglee" />
      </a>
      <div className="nav-links" aria-label="Primary navigation">
        <a href="#values">Values</a>
        <a href="#technology">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#clients">Clients</a>
        <a href="#services">Services</a>
        <a href="#problems">Problems</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
