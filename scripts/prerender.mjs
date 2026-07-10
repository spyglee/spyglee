// Prerenders the built SPA into dist/index.html so crawlers (and slow/no-JS
// clients) get real, indexable markup on first response instead of an empty
// #root shell. React still mounts client-side over this markup afterwards.
import { preview } from 'vite';
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const server = await preview({
  root,
  preview: { port: 4173, strictPort: false, host: '127.0.0.1' },
});
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch();
const page = await browser.newPage();
const pageErrors = [];
page.on('pageerror', (err) => pageErrors.push(err.message));

try {
  await page.goto(url, { waitUntil: 'networkidle' });
  // Sanity check that the app actually mounted content, not just the empty shell.
  await page.waitForSelector('footer.footer', { timeout: 10000 });

  if (pageErrors.length) {
    throw new Error('Page threw errors while rendering:\n' + pageErrors.join('\n'));
  }

  const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
  const outPath = path.join(root, 'dist', 'index.html');
  await writeFile(outPath, html + '\n', 'utf8');
  console.log(`Prerendered dist/index.html (${html.length} bytes)`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
