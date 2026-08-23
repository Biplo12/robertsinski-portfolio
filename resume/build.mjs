/* Recomputes the durations in resume.html from the dates on each
   .duration span, then renders public/resume.pdf.

   Run it with `npm run resume`. Set CHROME to point at the binary if it is
   not in one of the usual places. */

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'resume.html');
const output = resolve(here, '..', 'public', 'resume.pdf');

const candidates = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

const chrome = candidates.find((path) => path && existsSync(path));

if (!chrome) {
  console.error('No Chrome found. Set CHROME to the binary.');
  process.exit(1);
}

const parse = (month) => {
  const [year, index] = month.split('-').map(Number);

  return { year, month: index };
};

/* Both ends count, which is how LinkedIn arrives at its numbers. */
const monthsBetween = (start, end) => {
  const from = parse(start);
  const to = parse(end);

  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
};

const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }

  if (rest > 0) {
    parts.push(`${rest} ${rest === 1 ? 'month' : 'months'}`);
  }

  return parts.join(' ');
};

const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

const html = readFileSync(source, 'utf8');
const changes = [];

const updated = html.replace(
  /<span class="duration"([^>]*)>([^<]*)<\/span>/g,
  (match, attributes, current) => {
    const start = attributes.match(/data-start="([\d-]+)"/);

    if (!start) {
      return match;
    }

    const end = attributes.match(/data-end="([\d-]+)"/);
    const next = formatDuration(monthsBetween(start[1], end ? end[1] : today));

    if (next !== current) {
      changes.push(`${current} -> ${next}`);
    }

    return `<span class="duration"${attributes}>${next}</span>`;
  }
);

if (updated !== html) {
  writeFileSync(source, updated);
}

console.log(changes.length ? changes.join('\n') : 'durations already current');

execFileSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${output}`,
  source,
]);

const pages = readFileSync(output).toString('latin1').match(/\/Type\s*\/Page[^s]/g);

console.log(`${output} written, ${statSync(output).size} bytes`);
console.log(`pages: ${pages ? pages.length : 'unknown'}`);
