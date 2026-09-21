const fs = require('fs');
const path = require('path');

const pages = ['index.html', ...fs.readdirSync('.').filter((name) => fs.existsSync(path.join(name, 'index.html'))).map((name) => path.join(name, 'index.html'))];

function textOnly(value) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

for (const file of pages) {
  let html = fs.readFileSync(file, 'utf8');
  const entries = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)]
    .map((match) => ({
      '@type': 'Question',
      name: textOnly(match[1]),
      acceptedAnswer: { '@type': 'Answer', text: textOnly(match[2]) }
    }));
  if (!entries.length) continue;
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entries });
  const pattern = /<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"FAQPage"[\s\S]*?<\/script>/;
  if (!pattern.test(html)) throw new Error(`FAQ schema not found in ${file}`);
  html = html.replace(pattern, `<script type="application/ld+json">${schema}</script>`);
  fs.writeFileSync(file, html);
}

console.log(`Synchronized FAQ schema for ${pages.length} pages.`);
