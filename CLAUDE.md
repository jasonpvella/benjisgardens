# Benji's Gardens — Claude Code Instructions

**Product:** Marketing and lead-generation website for Benji Kerkin's Sydney garden maintenance business, targeting premium residential clients across the Hills District, Upper North Shore, and Inner West.
**Stack:** Astro 4 (SSG) + Tailwind 3 + Cormorant Garamond/DM Sans (@fontsource) + Firebase (Hosting live at https://benjis-gardens-au.web.app, Firestore + Storage pending) + static sitemap/robots

---

## Terminal Commands

Never ask Jason to run terminal commands manually. Run them yourself with the Bash tool. This includes:
- `npm run dev` — start local dev server (runs on localhost:4321)
- `npm run build` — production build (output to /dist)
- `npm run preview` — preview production build
- `firebase deploy --only hosting` — deploy to Firebase Hosting (once connected)
- `git add`, `git commit`, `git push`

Always run `npm run build` after any significant change to confirm zero errors before reporting done.

---

## Critical Rules

- **Never drop or rename public image files without checking which pages reference them.** Images are referenced by filename across multiple pages — a rename breaks things silently.
- **No stock photography.** Every image on the site must be a real Benji's Gardens job photo. If a section needs a photo we don't have yet, use the closest real photo available or leave a clearly labelled placeholder.
- **ABN is pending.** The footer shows `ABN: [pending]` — do not invent or guess an ABN. Leave the placeholder until Jason provides it.
- **Firebase Hosting is live** at https://benjis-gardens-au.web.app (project ID: `benjis-gardens-au`). Deploy with `firebase deploy --only hosting`. **Firestore is not yet connected** — the contact form logs to console only. Do not claim the form is live until Firestore is wired up.
- **Suburb attribution must be accurate.** Only caption photos with suburbs we are confident about. Use "Sydney" or the region name (e.g. "Upper North Shore") when the exact suburb is uncertain.

---

## Project Index

| Doc | Contents |
|---|---|
| [docs/JOURNAL.md](docs/JOURNAL.md) | Session log, executive snapshot, decisions |
| [benjis-gardens-prd-final.md](benjis-gardens-prd-final.md) | Full PRD — goals, IA, design direction, roadmap |

Read `docs/JOURNAL.md` at the start of any non-trivial session.

---

## Site Structure

```
src/pages/
  index.astro               Homepage
  hedging.astro             Hedging specialist page (hero differentiator)
  care-plans.astro          Care Plans — Essential / Premium / Estate tiers
  gallery.astro             Photo + video gallery
  about.astro               Benji's story + FAQ
  contact.astro             Quote form (#quote anchor) + click-to-call
  services/
    index.astro             Services overview
    lawn-mowing.astro
    mulching.astro
    garden-maintenance.astro
    pressure-washing.astro
  areas/
    index.astro             Areas hub
    hills-district.astro
    north-shore.astro
    inner-west.astro
  projects/
    index.astro             Recent projects content engine

public/images/              All site photography (real jobs only)
public/videos/              hedging-job.mp4, suzie-video.mp4
```

## Photo Inventory

| File | Subject | Region |
|------|---------|--------|
| benji-hedging-large-hedge.jpg | Benji trimming large hedge | Five Dock, Inner West |
| benji-hedging-federation-house.jpg | Benji at heritage property | Five Dock, Inner West |
| benji-hedging-suburban.jpg | Benji trimming front hedge | Five Dock, Inner West |
| benji-hedging-topdown.jpg | Top-down buxus precision | Five Dock, Inner West |
| benji-hedging-closeup.jpg | Benji close-up action | Five Dock, Inner West |
| north-shore-estate-driveway.jpg | Formal buxus + pencil pines at entrance | Upper North Shore |
| north-shore-estate-stepping-stones.jpg | Stepping stone path + formal hedging | Upper North Shore |
| north-shore-estate-pool-hedge.jpg | Pool with terraced buxus hedge | Upper North Shore |
| north-shore-estate-hedge-wall.jpg | Massive leighton green wall + tennis court | Upper North Shore |
| inner-west-jacaranda-heritage.jpg | Heritage home + jacaranda + sandstone | Haberfield, Inner West |
| inner-west-layered-hedge.jpg | Tall lilly pilly over low buxus | Inner West |
| inner-west-formal-hedge-beds.jpg | Geometric hedge beds along path | Inner West |
| inner-west-buxus-topdown.jpg | Top-down buxus spheres around tree | Inner West |
| hills-district-driveway-hedges.jpg | Curved gravel driveway + shaped hedge row | Hills District |
| hills-district-circular-hedge.jpg | Circular hedge around tree in paddock | Hills District |
| hills-district-farmhouse.jpg | Rural homestead + round topiary shrubs | Hills District |
| hills-district-topiary-spheres.jpg | Sphere topiaries beside verandah | Hills District |
| hills-district-topiary-verandah.jpg | Close topiary beside farmhouse | Hills District |
| hills-district-topiary-closeup.jpg | Topiary sphere detail | Hills District |
| north-shore-mowing-driveway.jpg | Clean curved driveway mowing result | North Shore |
| pressure-washing-before-driveway.jpg | Dirty brick paver driveway (before) | Sydney |
| pressure-washing-during.jpg | Pressure washing in progress | Sydney |
| pressure-washing-after-driveway.jpg | Clean brick driveway (after) | Sydney |
| pressure-washing-before-path.jpg | Overgrown side path (before) | Sydney |
| pressure-washing-after-path.jpg | Clean side path (after) | Sydney |
| pressure-washing-after-courtyard.jpg | Clean courtyard + hedge (after) | Sydney |

---

## Save Project

When Jason says "Save Project":
1. Scan the session for new decisions, scope changes, and requirement shifts.
2. Rewrite `## Executive Snapshot` in `docs/JOURNAL.md` — current focus + next session priorities.
3. Append a dated `### YYYY-MM-DD` entry to `## Historical Log` with the session delta (decisions, what changed, what's next).
4. Stage all changed files and push: `git add -A && git commit -m "chore: save project $(date +%Y-%m-%d)" && git push`

---

## Model Selection

- Bulk/repetitive tasks (batch writes, templates, copy) → `claude-haiku-4-5-20251001`
- Default work (features, UI, pages, components) → `claude-sonnet-4-6`
- High-stakes reasoning (Firebase security rules, SEO strategy, architecture) → `claude-opus-4-6`
