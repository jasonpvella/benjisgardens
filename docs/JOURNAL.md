# Benji's Gardens — Project Memory Journal

---

## Executive Snapshot

**Current Focus:** Site is fully built, photos are diversified across all regions, running locally. Next priority is Firebase connection and deployment.

**What's done:**
- Full Astro 4 + Tailwind 3 site — 16 pages, compiling clean
- Design system: deep botanical green + warm ivory + brass, Cormorant Garamond headings
- All pages: homepage (12 sections), /hedging, /services (5 sub-pages incl. pressure washing), /care-plans, /gallery, /projects, /about, /areas (3 regional), /contact
- Schema markup: LocalBusiness (homepage + areas), Service (/hedging), FAQPage (/about)
- SEO: per-page metadata, sitemap.xml, robots.txt, canonical URLs
- Mobile: fixed header, hamburger menu, sticky bottom call bar
- Quote form: fully built frontend, Firebase backend placeholder (console.log only)
- 26 photos organised by region (Five Dock, Upper North Shore, Inner West, Hills District), 2 videos, logo
- Homepage now shows a different photo in every section (services grid + recent projects span all 3 regions)
- CLAUDE.md + docs/JOURNAL.md created, git repo initialised

**Next session — in order:**
1. Connect Firebase — create project → Firestore + Storage → wire /contact.astro form
2. Deploy to Firebase Hosting
3. Fill in ABN once Benji provides it
4. Add Google Reviews widget (Elfsight or Trustindex) to homepage + contact page
5. Get before/after photo pairs from Benji (Folder B "before" shots need matching afters — unlocks homepage slider)

---

## Historical Log

### 2026-06-05 (session 2)

**Session summary:** Diversified homepage photos — replaced the repeated Benji action shots in the services grid and recent projects section with the new regional photos. Each section now shows a different property from a different region.

**Decisions made:**
- Services grid (hedging, mowing, mulching, maintenance): now uses north-shore-estate-driveway, north-shore-mowing-driveway, hills-district-topiary-verandah, inner-west-formal-hedge-beds
- Recent projects on homepage: now shows one from each region (Upper North Shore estate, Haberfield, Hills District) instead of three Five Dock shots
- Meet Benji section: kept benji-hedging-closeup.jpg (correct — that section is specifically about Benji)

**What changed:**
- src/pages/index.astro — services grid photos + recent projects cards updated
- Git repo initialised, all files committed

**What's next:**
- Firebase connection (still the main blocker)
- Benji to provide after photos for Folder B before shots

### 2026-06-05

**Session summary:** Photo audit of 6 Facebook folders (A–F, Highend E, Highend F). Assessed all photos, classified by region and quality. Copied best selections to public/images/ with clean names. Added pressure washing as a new service (page + services index + footer + sitemap). Updated key pages with premium new photos. Created CLAUDE.md and docs/JOURNAL.md.

**Decisions made:**
- Folder B (all "before" shots) held back — unusable without matching after photos. Jason to ask Benji.
- Folder D (pressure washing) included — service added to site as /services/pressure-washing
- Pressure washing named "Pressure Washing" not "High Pressure Spraying" (cleaner, better SEO)
- Folder C estate captioned as "Upper North Shore" (suburb not confirmed — don't specify further)
- Folder E jacaranda photo captioned as "Haberfield, Inner West" (sandstone + heritage style confirms it)
- Folder F captioned as "Hills District" (gum trees, dry grass, rural — unmistakably Hills)
- Homepage hero kept as Benji-in-action shot (PRD: "Benji is the brand") — estate photos used on inner pages

**What changed:**
- Added 21 new photos to public/images/
- Created /services/pressure-washing.astro
- Updated /services/index.astro, /gallery.astro, /projects/index.astro
- Updated /areas/north-shore.astro, /areas/inner-west.astro, /areas/hills-district.astro heroes + galleries
- Updated /hedging.astro gallery with estate photos
- Updated homepage hedging feature section with north-shore-estate-hedge-wall.jpg
- Created CLAUDE.md + docs/JOURNAL.md

**What's next:**
- Firebase connection (blocking — form does nothing until this is done)
- Before/after photos from Benji
- ABN

### 2026-06-04

**Session summary:** Initial build. Scaffolded full Astro 4 + Tailwind 3 project from scratch overnight while Jason slept. Built all 15 pages, header/footer, mobile sticky bar, schema markup, SEO metadata, sitemap. Integrated Five Dock job photos (5 photos + 2 videos) and downloaded logo from existing WordPress site.

**Decisions made:**
- Stack: Astro 4 (SSG) + Tailwind 3 + @fontsource + Firebase (pending)
- CMS deferred to V2 — hardcoded content for V1
- Before/after slider deferred — no "before" photos available at launch
- Care plan pricing set to enquire-only (no fixed prices published)
- Pressure washing not included in initial build (added 2026-06-05)

**What changed:**
- Project scaffolded from zero
- 15 pages built and compiling clean
- Five Dock photos + logo integrated

**What's next:**
- (Carried forward — see 2026-06-05 entry)
