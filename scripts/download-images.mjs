import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const imagesDir = path.join(root, 'public/images');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetch(res.headers.location).then(resolve).catch(reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function extFromUrl(url) {
  const base = url.split('?')[0].split('/').pop() || 'image';
  const decoded = decodeURIComponent(base);
  const match = decoded.match(/\.(jpe?g|png|webp|gif)$/i);
  if (match) return match[1].toLowerCase().replace('jpeg', 'jpg');
  if (url.includes('.png')) return 'png';
  if (url.includes('.jpeg') || url.includes('.jpg')) return 'jpg';
  return 'jpg';
}

function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-');
}

async function downloadImage(url, filename) {
  const outPath = path.join(imagesDir, filename);
  if (fs.existsSync(outPath)) {
    console.log(`Skip (exists): ${filename}`);
    return `/images/${filename}`;
  }
  try {
    const data = await fetch(url);
    fs.writeFileSync(outPath, data);
    console.log(`Downloaded: ${filename}`);
    return `/images/${filename}`;
  } catch (err) {
    console.error(`Failed: ${filename}`, err.message);
    return url;
  }
}

function collectUrls() {
  const urls = new Set();

  const events = JSON.parse(fs.readFileSync(path.join(root, 'src/data/events.json'), 'utf8'));
  events.forEach((e) => urls.add(e.image));

  const centers = fs.readFileSync(path.join(root, 'src/data/centers.js'), 'utf8');
  [...centers.matchAll(/https:\/\/static\.wixstatic\.com[^'"]+/g)].forEach((m) => urls.add(m[0]));

  const workshops = fs.readFileSync(path.join(root, 'src/data/workshops.js'), 'utf8');
  [...workshops.matchAll(/https:\/\/static\.wixstatic\.com[^'"]+/g)].forEach((m) => urls.add(m[0]));

  const photos = fs.readFileSync(path.join(root, 'src/pages/workshops/Nast2023Photos.jsx'), 'utf8');
  [...photos.matchAll(/https:\/\/static\.wixstatic\.com[^'"]+/g)].forEach((m) => urls.add(m[0]));

  return [...urls];
}

async function main() {
  fs.mkdirSync(imagesDir, { recursive: true });
  const urlMap = {};
  const urls = collectUrls();

  let i = 0;
  for (const url of urls) {
    i += 1;
    const ext = extFromUrl(url);
    const slug = url.match(/media\/([^/]+)/)?.[1]?.split('~')[0] || `img-${i}`;
    const filename = sanitizeName(`${slug}.${ext}`);
    urlMap[url] = await downloadImage(url, filename);
    await new Promise((r) => setTimeout(r, 200));
  }

  // Update events.json
  const eventsPath = path.join(root, 'src/data/events.json');
  const events = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
  events.forEach((e) => { if (urlMap[e.image]) e.image = urlMap[e.image]; });
  fs.writeFileSync(eventsPath, JSON.stringify(events, null, 2));

  // Replace URLs in JS files
  for (const rel of ['src/data/centers.js', 'src/data/workshops.js', 'src/pages/workshops/Nast2023Photos.jsx']) {
    let content = fs.readFileSync(path.join(root, rel), 'utf8');
    for (const [remote, local] of Object.entries(urlMap)) {
      content = content.split(remote).join(local);
    }
    fs.writeFileSync(path.join(root, rel), content);
  }

  fs.writeFileSync(path.join(root, 'src/data/image-map.json'), JSON.stringify(urlMap, null, 2));
  console.log(`\nDone! ${Object.keys(urlMap).length} images mapped.`);
}

main().catch(console.error);
