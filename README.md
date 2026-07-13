# SOIRÉE Website

Replica of [Society of Interdisciplinary Research (SOIRÉE)](https://laviebay.wixsite.com/soiree) website.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components/` — Reusable UI components (Header, Footer, Carousel, Forms)
- `src/pages/` — Page components for each route
- `src/pages/workshops/` — Workshop sub-sites (2018 GWFMD, 2023 NAST)
- `src/data/` — Content data (events, news, navigation, centers)
- `public/images/` — Local images (logo, hero slides)

## Update Event Content

To re-scrape events from the original Wix site:

```bash
npm run scrape
```

## Download Images Locally

All images are stored in `public/images/`. To re-download from Wix:

```bash
npm run download-images
```

## Pages Included

- Home (carousel, upcoming/past events)
- About Us, Mission
- News (4 articles)
- Events → Dialogues/Lectures (20 posts), Workshops
- Centers → AiForce, Art (Watercolor, Photography)
- Membership, Contact forms
- Workshop subsites with full navigation
