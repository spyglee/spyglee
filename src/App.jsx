import { useReveal } from './hooks/useReveal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { Problems } from './components/Problems';
import { Process } from './components/Process';
import { About } from './components/About';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

export function App() {
  useReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <Values />
      <Technology />
      <Projects />
      <Clients />
      <Services />
      <Problems />
      <Process />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}
