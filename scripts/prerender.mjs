// Prerenders the built SPA into dist so crawlers (and slow/no-JS clients) get
// real, indexable markup on first response instead of an empty #root shell.
// React still mounts client-side over this markup afterwards.
//
// Pure Node.js via react-dom/server — no headless browser required, so this
// runs reliably in minimal CI build containers.
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrOutDir = path.join(root, 'dist-ssr');
const ssrEntry = path.join(ssrOutDir, 'entry-server.mjs');

const { render, legal } = await import(ssrEntry);

const indexPath = path.join(root, 'dist', 'index.html');
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> placeholder in dist/index.html');
}

const homeDescription =
  'spyglee helps small and mid-sized businesses save time and cut manual work through custom software, Microsoft 365, automation, and AI solutions.';
const ledgerDescription =
  'Ledger is a personal finance app for income, expenses, budgets, on-device receipt scanning, and the prices of things you buy.';

const ledgerSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Ledger',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'FinanceApplication',
  url: 'https://spyglee.work/ledger',
  installUrl: [
    'https://apps.apple.com/app/bundleid/work.spyglee.ledger',
    'https://play.google.com/store/apps/details?id=work.spyglee.ledger',
  ],
  description: ledgerDescription,
  author: {
    '@type': 'Organization',
    name: 'spyglee',
    url: 'https://spyglee.work/',
  },
};

function withApp(html, appHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function ledgerDocument(html) {
  return html
    .replace(
      '<title>spyglee — Software, Automation &amp; AI for Growing Businesses</title>',
      '<title>Ledger — Personal finance, kept privately on your device only | spyglee</title>',
    )
    .replaceAll(homeDescription, ledgerDescription)
    .replace('href="https://spyglee.work/"', 'href="https://spyglee.work/ledger"')
    .replaceAll('content="https://spyglee.work/"', 'content="https://spyglee.work/ledger"')
    .replaceAll(
      'content="spyglee — Software, Automation & AI for Growing Businesses"',
      'content="Ledger — Personal finance, kept privately on your device only"',
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${JSON.stringify(ledgerSchema, null, 2)}\n    </script>`,
    );
}

const homeHtml = withApp(template, render('/'));
await writeFile(indexPath, homeHtml, 'utf8');

const ledgerDir = path.join(root, 'dist', 'ledger');
await mkdir(ledgerDir, { recursive: true });
const ledgerHtml = ledgerDocument(withApp(template, render('/ledger')));
await writeFile(path.join(ledgerDir, 'index.html'), ledgerHtml, 'utf8');

function legalDocument(html, doc) {
  const page = legal.en[doc];
  const url = `https://spyglee.work/ledger/${doc}`;
  const title = `${page.title} — Ledger | spyglee`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url,
    description: page.description,
    isPartOf: { '@type': 'WebSite', name: 'spyglee', url: 'https://spyglee.work/' },
  };
  return html
    .replace(
      '<title>spyglee — Software, Automation &amp; AI for Growing Businesses</title>',
      `<title>${title}</title>`,
    )
    .replaceAll(homeDescription, page.description)
    .replace('href="https://spyglee.work/"', `href="${url}"`)
    .replaceAll('content="https://spyglee.work/"', `content="${url}"`)
    .replaceAll('content="spyglee — Software, Automation & AI for Growing Businesses"', `content="${title}"`)
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`,
    );
}

for (const doc of ['privacy', 'terms']) {
  const dir = path.join(ledgerDir, doc);
  await mkdir(dir, { recursive: true });
  const docHtml = legalDocument(withApp(template, render(`/ledger/${doc}`)), doc);
  await writeFile(path.join(dir, 'index.html'), docHtml, 'utf8');
  console.log(`Prerendered dist/ledger/${doc}/index.html (${docHtml.length} bytes)`);
}

await rm(ssrOutDir, { recursive: true, force: true });

console.log(`Prerendered dist/index.html (${homeHtml.length} bytes)`);
console.log(`Prerendered dist/ledger/index.html (${ledgerHtml.length} bytes)`);
