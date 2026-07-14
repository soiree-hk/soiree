# Design: Frontier of Biotech 2026 Workshop Page

**Date:** 2026-07-14  
**Status:** Approved for implementation planning  
**Source content:** https://leo3233.github.io/Frontier-of-Biotech/

## Goal

Add a single-page workshop sub-site for **Frontier of Biotech: From System Biology to Whole Cell Methodology** (28–30 June 2026, HKUST), following the existing SOIRÉE workshop patterns.

## Scope

### In scope

- Workshops list entry linking to the new page
- One workshop home page with title, description, topics, and quick details
- Route registration at `/2026-fob`
- Optional outbound link to the source site for “More info”

### Out of scope

- Multi-page workshop nav (Committees, Speakers, Program, etc.)
- Home page “Upcoming Events” update (remains “Please stay tuned”)
- New poster/hero image assets (reuse an existing workshop image or text-only card)
- Content beyond what appears on the source page today

## Content

| Field | Value |
|-------|--------|
| Title | Frontier of Biotech: From System Biology to Whole Cell Methodology |
| Dates | June 28 ～ 30, 2026 |
| Venue | Kaisa Group Lecture Theater (IAS LT), Lo Ka Chung Building, Lee Shau Kee Campus, HKUST |
| Description | Copy from source page (AI ∩ biology workshop blurb) |
| Topics | 1. System Biology - Whole Cell 2. Synthetic Biology 3. Phase Separation 4. Biomedical: RNA Fundamental & Therapeutics; Drug Discovery |

## Architecture

Reuse the existing workshop pattern:

1. **`src/data/workshops.js`**
   - Add list item: `id: '2026-fob'`, `path: '/2026-fob'`, `date: 'June 2026'`, title, image (existing asset or none)
   - Add `fob2026` content object: `title`, `description`, `topics[]`, `dates`, `venue`, optional `moreInfoUrl`

2. **`src/pages/workshops/Fob2026Home.jsx`**
   - Render title + description paragraphs + Topics list + Quick Details
   - No `WorkshopNav` (single page only)

3. **`src/App.jsx`**
   - `<Route path="2026-fob" element={<Fob2026Home />} />`

## Data flow

`Workshops.jsx` already maps `workshops` → cards. Adding the list entry automatically surfaces the event under Events → Workshops. The home page reads only `fob2026` from `workshops.js`.

## Error handling / edge cases

- Image: if no dedicated image, reuse `/images/971def_54f5f5f0b25846da8ba5831405d7ee17.png` (2023 NAST) as temporary card art, or omit image styling breakage by keeping a valid path.
- External “More info” link opens in a new tab (`target="_blank"` + `rel="noopener noreferrer"`).

## Testing

- `npm run dev` → open `/workshops` → card appears and links to `/2026-fob`
- `/2026-fob` shows title, body, four topics, date, venue
- Optional more-info link reaches the source GitHub Pages URL
- `npm run build` succeeds

## Success criteria

Visitors can find the 2026 Frontier of Biotech workshop under Workshops and read the full single-page details on-site without leaving SOIRÉE (except the optional external link).
