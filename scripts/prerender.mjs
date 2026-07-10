// Prerenders the built SPA into dist/index.html so crawlers (and slow/no-JS
// clients) get real, indexable markup on first response instead of an empty
// #root shell. React still mounts client-side over this markup afterwards.
//
// Pure Node.js via react-dom/server — no headless browser required, so this
// runs reliably in minimal CI build containers.
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrOutDir = path.join(root, 'dist-ssr');
const ssrEntry = path.join(ssrOutDir, 'entry-server.mjs');

const { render } = await import(ssrEntry);
const appHtml = render();

const indexPath = path.join(root, 'dist', 'index.html');
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> placeholder in dist/index.html');
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
await writeFile(indexPath, html, 'utf8');
await rm(ssrOutDir, { recursive: true, force: true });

console.log(`Prerendered dist/index.html (${html.length} bytes)`);
