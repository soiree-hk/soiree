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

function htmlToText(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#38;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function fetchPostContent(slug) {
  const url = `https://laviebay.wixsite.com/soiree/post/${encodeURIComponent(slug)}`;
  try {
    const html = await fetch(url);
    const paragraphs = [...html.matchAll(/<p[^>]*class="[^"]*"[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => htmlToText(m[1]))
      .filter((t) => t.length > 20 && !t.includes('website builder'));
    if (paragraphs.length === 0) {
      const fallback = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
        .map((m) => htmlToText(m[1]))
        .filter((t) => t.length > 30 && !t.includes('website builder') && !t.includes('Write a comment'));
      return fallback.join('\n\n');
    }
    return paragraphs.join('\n\n');
  } catch {
    return '';
  }
}

async function main() {
  const xml = await fetch('https://laviebay.wixsite.com/soiree/blog-feed.xml');
  const items = [];

  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const block = m[1];
    const link = extractTag(block, 'link') || (block.match(/<link>([^<]+)<\/link>/) || [])[1] || '';
    const slug = decodeURIComponent(link.split('/post/')[1] || '');
    const image = (block.match(/url="([^"]+)"/) || [])[1] || '';
    const excerpt = extractTag(block, 'description');

    console.log(`Fetching: ${slug}`);
    const content = await fetchPostContent(slug);

    items.push({
      title: extractTag(block, 'title'),
      excerpt,
      slug,
      image,
      category: extractTag(block, 'category'),
      pubDate: extractTag(block, 'pubDate'),
      content: content || excerpt,
    });

    await new Promise((r) => setTimeout(r, 300));
  }

  const outPath = path.join(__dirname, '../src/data/events.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(items, null, 2));
  console.log(`Wrote ${items.length} events`);
}

main().catch(console.error);
