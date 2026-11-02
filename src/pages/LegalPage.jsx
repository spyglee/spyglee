import { Fragment, useEffect } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { useLanguage } from '../i18n.jsx';
import { legal } from '../legal.js';
import './LegalPage.css';

const EMAIL = 'hello@spyglee.work';

// Turns the contact address inside a paragraph into a mailto link.
function withEmail(text) {
  const parts = text.split(EMAIL);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
    </Fragment>
  ));
}

export function LegalPage({ doc }) {
  const { language } = useLanguage();
  const content = legal[language] ?? legal.en;
  const page = content[doc];
  const other = doc === 'privacy' ? 'terms' : 'privacy';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${page.title} — Ledger | spyglee`;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', page.description);
    return () => {
      document.title = previousTitle;
      if (previousDescription != null) description?.setAttribute('content', previousDescription);
    };
  }, [page]);

  return (
    <main>
      <Nav home={false} />
      <article className="legal">
        <header className="legal-header">
          <a className="eyebrow legal-back" href="/ledger">
            {content.back}
          </a>
          <h1>{page.title}</h1>
          <p className="legal-updated">
            {content.updatedLabel}: {content.updated}
          </p>
          <p className="legal-intro">{page.intro}</p>
        </header>
        {page.sections.map((section, index) => (
          <section className="legal-section" key={section.title}>
            <h2>
              {index + 1}. {section.title}
            </h2>
            {section.body.map((block, blockIndex) =>
              Array.isArray(block) ? (
                <ul key={blockIndex}>
                  {block.map((item) => (
                    <li key={item}>{withEmail(item)}</li>
                  ))}
                </ul>
              ) : (
                <p key={blockIndex}>{withEmail(block)}</p>
              ),
            )}
          </section>
        ))}
        <nav className="legal-other">
          <a href={`/ledger/${other}`}>{content[other].title}</a>
        </nav>
      </article>
      <Footer home={false} />
    </main>
  );
}
