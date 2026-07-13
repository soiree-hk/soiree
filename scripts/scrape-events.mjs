import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractTag(block, tag) {
  const cdata = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdata) return cdata[1];
  const plain = block.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
  return plain ? plain[1] : '';
}

async function main() {
  const xml = await fetch('https://laviebay.wixsite.com/soiree/blog-feed.xml');
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const block = m[1];
    const link = extractTag(block, 'link') || (block.match(/<link>([^<]+)<\/link>/) || [])[1] || '';
    const slug = decodeURIComponent(link.split('/post/')[1] || '');
    const image = (block.match(/url="([^"]+)"/) || [])[1] || '';
    return {
      title: extractTag(block, 'title'),
      excerpt: extractTag(block, 'description'),
      slug,
      image,
      category: extractTag(block, 'category'),
      pubDate: extractTag(block, 'pubDate'),
    };
  });

  const outPath = path.join(__dirname, '../src/data/events.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(items, null, 2));
  console.log(`Wrote ${items.length} events to ${outPath}`);
}

main().catch(console.error);
