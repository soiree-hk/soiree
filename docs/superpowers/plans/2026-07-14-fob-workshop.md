# Frontier of Biotech 2026 Workshop Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a single-page workshop at `/2026-fob` for Frontier of Biotech (June 28–30, 2026), listed under Workshops.

**Architecture:** Follow existing workshop pattern: content in `src/data/workshops.js`, one home page component, one route in `App.jsx`. No WorkshopNav, no sub-pages. No automated test suite in this repo — verify with `npm run build` and route smoke checks.

**Tech Stack:** React 19, React Router 7, Vite 6

**Spec:** `docs/superpowers/specs/2026-07-14-fob-workshop-design.md`

---

## File map

| File | Role |
|------|------|
| `src/data/workshops.js` | List card + `fob2026` content object |
| `src/pages/workshops/Fob2026Home.jsx` | Single page UI |
| `src/App.jsx` | Route `/2026-fob` |

---

### Task 1: Add workshop data

**Files:**
- Modify: `src/data/workshops.js`

- [ ] **Step 1: Prepend list entry and export `fob2026`**

Insert a new object at the **start** of the `workshops` array (newest first):

```js
{
  id: '2026-fob',
  title: 'Frontier of Biotech: From System Biology to Whole Cell Methodology',
  date: 'June 2026',
  path: '/2026-fob',
  image: '/images/971def_54f5f5f0b25846da8ba5831405d7ee17.png',
},
```

Append after `nast2023` export:

```js
export const fob2026 = {
  title: 'Frontier of Biotech: From System Biology to Whole Cell Methodology',
  description: `A workshop entitled "Frontier of Biotech: From System Biology to Whole Cell Methodology" will take place from 28 to 30 June 2026 on the campus of HKUST. This event invites participants to explore the transformative intersection of artificial intelligence and biological research, showcasing AI's potential to revolutionize research efficiency, data analysis, and translational applications. The workshop will demonstrate AI's applications in microbial genomics, metabolic modulation, and whole-cell simulations, providing participants with a better understanding of AI's potential to enhance biological research.`,
  topics: [
    'System Biology - Whole Cell',
    'Synthetic Biology',
    'Phase Separation',
    'Biomedical: RNA Fundamental & Therapeutics; Drug Discovery',
  ],
  dates: 'June 28 ～ 30, 2026',
  venue:
    'Kaisa Group Lecture Theater (IAS LT), Lo Ka Chung Building, Lee Shau Kee Campus, HKUST',
  moreInfoUrl: 'https://leo3233.github.io/Frontier-of-Biotech/',
};
```

- [ ] **Step 2: Commit**

```bash
git add src/data/workshops.js
git commit -m "Add 2026 Frontier of Biotech workshop data."
```

---

### Task 2: Create workshop home page

**Files:**
- Create: `src/pages/workshops/Fob2026Home.jsx`

- [ ] **Step 1: Create page component**

```jsx
import { fob2026 } from '../../data/workshops';

export default function Fob2026Home() {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{fob2026.title}</h1>
        {fob2026.description.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <h3 style={{ marginTop: '2rem' }}>Topics include:</h3>
        <ol>
          {fob2026.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ol>
        <h3 style={{ marginTop: '2rem' }}>Quick Details</h3>
        <ul>
          <li>
            <strong>Date:</strong> {fob2026.dates}
          </li>
          <li>
            <strong>Venue:</strong> {fob2026.venue}
          </li>
        </ul>
        <p style={{ marginTop: '2rem' }}>
          <a
            href={fob2026.moreInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/workshops/Fob2026Home.jsx
git commit -m "Add Frontier of Biotech 2026 workshop page."
```

---

### Task 3: Register route and verify build

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Import and route**

After the Nast2023Photos import, add:

```js
import Fob2026Home from './pages/workshops/Fob2026Home';
```

Inside the Layout routes, after the `workshops` route (or near other workshop routes), add:

```jsx
<Route path="2026-fob" element={<Fob2026Home />} />
```

- [ ] **Step 2: Verify build**

```bash
npm install
npm run build
```

Expected: build completes with exit code 0; `dist/` contains hashed assets.

- [ ] **Step 3: Smoke-check strings in bundle / source**

```bash
grep -n "2026-fob\|Frontier of Biotech\|fob2026" src/data/workshops.js src/App.jsx src/pages/workshops/Fob2026Home.jsx
```

Expected: matches in all three files.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "Route /2026-fob to Frontier of Biotech workshop page."
```

---

## Spec coverage check

| Spec requirement | Task |
|------------------|------|
| Workshops list entry | Task 1 |
| Single page: title, description, topics, details | Task 2 |
| Route `/2026-fob` | Task 3 |
| Optional More info link | Task 2 |
| No sub-pages / no Upcoming Events change | (intentionally omitted) |
| Build verification | Task 3 |
