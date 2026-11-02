import { useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import { LanguageProvider, useT } from './i18n.jsx';
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
import { LedgerPage } from './pages/LedgerPage';
import { LegalPage } from './pages/LegalPage';

function pagePath(path) {
  const value = path ?? (typeof window === 'undefined' ? '/' : window.location.pathname);
  const clean = value.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1);
  return clean || '/';
}

export function App({ path }) {
  return (
    <LanguageProvider>
      <Site path={path} />
    </LanguageProvider>
  );
}

function Site({ path }) {
  useReveal();
  const t = useT();
  const current = pagePath(path);
  const ledger = current === '/ledger';
  const legalDoc = { '/ledger/privacy': 'privacy', '/ledger/terms': 'terms' }[current];

  useEffect(() => {
    if (ledger || legalDoc) return;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  }, [ledger, legalDoc, t]);

  if (legalDoc) return <LegalPage doc={legalDoc} />;
  if (ledger) return <LedgerPage />;

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
