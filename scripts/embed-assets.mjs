import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../app/', import.meta.url);
const pdfs = ['Intoxicacao_Exogena.pdf', 'violencia.pdf', 'CAT.pdf'];
const coordinates = ['intoxica.json', 'violencia.json', 'cat.json'];
const assets = { bytes: {}, json: {} };

for (const name of pdfs) {
  const path = `templates/${name}`;
  assets.bytes[path] = (await readFile(new URL(path, root))).toString('base64');
}
for (const name of coordinates) {
  const path = `templates/templates_coordinates/${name}`;
  assets.json[path] = JSON.parse(await readFile(new URL(path, root), 'utf8'));
}
await writeFile(new URL('js/embedded-assets.js', root), `window.SINAN_EMBEDDED_ASSETS = ${JSON.stringify(assets)};\n`);
