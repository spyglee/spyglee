import { useEffect } from 'react';
import { ChartColumn, FileDown, LayoutDashboard, LockKeyhole, ScanLine, TrendingUp } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { useLanguage, useT } from '../i18n.jsx';
import { legal } from '../legal.js';
import './LedgerPage.css';

// Install URLs for bundle id work.spyglee.ledger. The App Store listing is not
// public yet, so this uses the bundle id until App Store Connect assigns a numeric id.
const APP_STORE_URL = 'https://apps.apple.com/app/bundleid/work.spyglee.ledger';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=work.spyglee.ledger';

const screens = [
  { src: '/ledger/home.svg', id: 'home' },
  { src: '/ledger/expenses.svg', id: 'expenses' },
  { src: '/ledger/budgets.svg', id: 'budgets' },
  { src: '/ledger/prices.svg', id: 'prices' },
];

const reasons = [
  { id: 'privacy', icon: LockKeyhole },
  { id: 'design', icon: LayoutDashboard },
  { id: 'stats', icon: ChartColumn },
  { id: 'inflation', icon: TrendingUp },
  { id: 'scanner', icon: ScanLine },
  { id: 'copy', icon: FileDown },
];
const features = ['month', 'accounts', 'receipts', 'budgets', 'prices', 'privacy'];

export function LedgerPage() {
  const t = useT();
  const { language } = useLanguage();
  const legalText = legal[language] ?? legal.en;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t('ledger.metaTitle');
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', t('ledger.metaDescription'));
    return () => {
      document.title = previousTitle;
      if (previousDescription != null) description?.setAttribute('content', previousDescription);
    };
  }, [t]);

  return (
    <main>
      <Nav home={false} />
      <header className="ledger-hero">
        <img className="ledger-mark" src="/ledger-logo.svg" alt="Ledger" />
        <p className="eyebrow">{t('ledger.eyebrow')}</p>
        <h1>{t('ledger.title')}</h1>
        <p className="ledger-lead">{t('ledger.lead')}</p>
        <div className="ledger-stores">
          <a className="store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            <img src="/app-store.svg" alt={t('ledger.store.apple')} />
          </a>
          <a className="store-link store-link-play" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
            <img src="/google-play.png" alt={t('ledger.store.google')} />
          </a>
        </div>
      </header>

      <section className="section ledger-gallery" aria-labelledby="ledger-screens-heading">
        <div className="section-heading">
          <p className="eyebrow">{t('ledger.screensEyebrow')}</p>
          <h2 id="ledger-screens-heading">{t('ledger.screensTitle')}</h2>
        </div>
        <div className="ledger-shots">
          {screens.map((screen) => (
            <figure className="ledger-shot" key={screen.src}>
              <div className="ledger-phone">
                <img src={screen.src} alt={t(`ledger.screen.${screen.id}Alt`)} />
              </div>
              <figcaption>{t(`ledger.screen.${screen.id}`)}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section ledger-why" aria-labelledby="ledger-why-heading">
        <div className="section-heading reveal">
          <p className="eyebrow">{t('ledger.why.eyebrow')}</p>
          <h2 id="ledger-why-heading">{t('ledger.why.title')}</h2>
        </div>
        <div className="ledger-why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="ledger-why-card" key={reason.id}>
                <div className="card-heading">
                  <Icon size={24} />
                  <h3>{t(`ledger.why.${reason.id}.title`)}</h3>
                </div>
                <p>{t(`ledger.why.${reason.id}.text`)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section ledger-features" aria-labelledby="ledger-features-heading">
        <div className="section-heading">
          <p className="eyebrow">{t('ledger.featuresEyebrow')}</p>
          <h2 id="ledger-features-heading">{t('ledger.featuresTitle')}</h2>
        </div>
        <div className="ledger-feature-grid">
          {features.map((feature) => (
            <article className="ledger-feature reveal" key={feature}>
              <h3>{t(`ledger.feature.${feature}.title`)}</h3>
              <p>{t(`ledger.feature.${feature}.text`)}</p>
            </article>
          ))}
        </div>
      </section>
      <nav className="ledger-legal">
        <a href="/ledger/privacy">{legalText.privacy.title}</a>
        <a href="/ledger/terms">{legalText.terms.title}</a>
      </nav>
      <Footer home={false} />
    </main>
  );
}
