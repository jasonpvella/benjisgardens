# Benji's Gardens — Project Memory Journal

---

## Executive Snapshot

**Current Focus:** Site fully live, copy cleaned, messaging accurate. Next priorities are ABN, Google Reviews, and before/after photos.

**What's done:**
- Full Astro 4 + Tailwind 3 site — 15 pages, compiling clean
- Design system: deep botanical green + warm ivory + brass, Cormorant Garamond headings
- Nav: 4 tabs — Home, Hedging, Gallery, Contact (Care Plans, Services, About, Areas all removed from nav)
- Care Plans page deleted entirely; all internal links cleaned up
- "Same-day quote" promises removed sitewide — replaced with "we'll get back to you the same day"
- "Same-Day Quotes" → "Free On-Site Quotes — No obligation, no surprises" throughout
- "Recurring Care Plans" → "Ongoing Seasonal Care" in What Sets Us Apart
- Contact form live — submissions go to benjikerkin23@gmail.com via Web3Forms (key: c5728b58-eef5-406c-bd71-60bc0028c4bd)
- Homepage hero: highend-formal-garden.jpg (IMG_4318), headline "Sydney's Hedging, Lawn & Garden Specialists"
- All service photos refreshed with Highend E shots across homepage + services index
- Gallery refreshed with best Highend E picks
- 35 photos in public/images/, 2 videos, logo
- GitHub repo: https://github.com/jasonpvella/benjisgardens
- Firebase Hosting live: https://benjisgardens.com.au + www.benjisgardens.com.au (both SSL provisioned)

**Next session — in order:**
1. Fill in ABN once Benji provides it
2. Add Google Reviews widget (Elfsight or Trustindex) to homepage
3. Get before/after photo pairs from Benji (Folder B "before" shots need matching afters)
4. Test contact form — submit on live site, confirm email arrives at benjikerkin23@gmail.com

---

## Historical Log

### 2026-06-10 (session 8)

**Session summary:** Messaging cleanup based on Benji's feedback. Removed all specific same-day quote promises, deleted Care Plans page entirely, updated copy sitewide.

**Decisions made:**
- "Same-Day Quotes" replaced with "Free On-Site Quotes — No obligation, no surprises" across homepage trust bar, What Sets Us Apart, contact sidebar
- "Recurring Care Plans" in What Sets Us Apart replaced with "Ongoing Seasonal Care — Regular maintenance tailored to your garden's needs throughout the year"
- Care Plans page deleted — Benji's current focus is recruiting clients, not selling structured plans
- Care Plans removed from nav, footer, sitemap, and all internal links across services/lawn-mowing, services/garden-maintenance, services/index
- All "enquire by midday for a quote by evening" language removed sitewide — replaced with "we'll get back to you the same day"
- About page hero ("The Story") section removed — added no value
- Nav now 4 tabs: Home, Hedging, Gallery, Contact

**What changed:**
- src/pages/care-plans.astro — deleted
- src/components/Header.astro — Care Plans removed from nav
- src/components/Footer.astro — Care Plans removed from services list
- src/pages/index.astro — trust bar, What Sets Us Apart, Care Plans teaser removed
- src/pages/contact.astro — copy updated, "Same-Day Response" trust signal updated
- src/pages/services/index.astro — CTA updated
- src/pages/services/lawn-mowing.astro — care plans callout removed
- src/pages/services/garden-maintenance.astro — care plans callout updated
- All pages — "midday/by evening" quote promises replaced sitewide
- public/sitemap.xml — care-plans URL removed

**What's next:**
- ABN from Benji
- Google Reviews widget
- Before/after photos from Benji

### 2026-06-10 (session 7)

**Session summary:** Major polish pass + site fully operational. Contact form wired to email, www SSL fixed, nav stripped to 5 tabs, all Highend E photos deployed across homepage/services/gallery.

**Decisions made:**
- Nav trimmed to Home, Hedging, Care Plans, Gallery, Contact — Services and About removed (pages kept for SEO, About demoted to quiet footer link)
- Areas section removed entirely from nav, footer, and sitemap
- Homepage hero swapped to `highend-formal-garden.jpg` (IMG_4318 — formal buxus standards garden) — better mobile display than landscape Benji action shot
- Hero headline changed to "Sydney's Hedging, Lawn & Garden Specialists"
- Hero eyebrow label changed from brass to white/75 for readability on photo background
- Contact form wired via Web3Forms (key c5728b58-eef5-406c-bd71-60bc0028c4bd) — sends to benjikerkin23@gmail.com
- www.benjisgardens.com.au SSL fixed: Vodien www CNAME updated from benjisgardens.com.au → benjis-gardens-au.web.app, Firebase re-verified
- About page hero section removed ("The Story / About Benji's Gardens" intro — added no value)
- Gallery last 8 replaced with Highend E picks; services index photos matched to homepage
- "What Sets Us Apart" cut from 8 → 6 items, tighter mobile layout
- Pressure washing added as 5th service card on homepage
- Recent Projects section removed from homepage

**What changed:**
- src/components/Header.astro — nav links
- src/components/Footer.astro — areas removed, About demoted
- src/pages/index.astro — hero, What Sets Us Apart, What We Do, headline, eyebrow text
- src/pages/contact.astro — Web3Forms key wired
- src/pages/about.astro — hero section removed
- src/pages/services/index.astro — 4 photos updated
- src/pages/services/mulching.astro — photo updated
- src/pages/gallery.astro — last 8 photos replaced
- public/images/ — 9 new Highend E images added
- public/sitemap.xml — areas URLs removed
- Vodien DNS + Firebase Hosting — www SSL provisioned

**What's next:**
- ABN from Benji
- Google Reviews widget
- Before/after photo pairs from Benji

### 2026-06-07 (session 6)

**Session summary:** Homepage polish pass — tighter mobile layout, new Highend E photos throughout What We Do section, hero restructured for full-image mobile display, Recent Projects removed.

**Decisions made:**
- Hero restructured: on mobile the image now displays at its natural height (no `object-cover` cropping), with text overlaid via bottom gradient. Desktop unchanged. Awaiting portrait crop of `benji-hedging-federation-house.jpg` to replace current landscape version.
- "What Sets Us Apart" cut from 8 → 6 items (removed "Reliable Communication" and "Local Knowledge" as too generic). Grid changed to 2-col mobile / 3-col desktop. Spacing tightened throughout.
- "What We Do" expanded from 4 → 5 services (added Pressure Washing). Grid changed to `lg:grid-cols-5`.
- 4 service photos replaced with Highend E shots: hedge trimming → `576891633...n(1).jpg`, lawn/edging → `576636535...n(1).jpg` (jacaranda + lawn), mulching → `IMG_5721.jpeg`, garden maintenance → `575179465...n.jpg`.
- Hedging feature text color raised from `white/65` → `white/90` for readability on green background.
- Recent Projects section removed from homepage entirely.

**What changed:**
- src/pages/index.astro — hero, What Sets Us Apart, What We Do, hedging feature text, Recent Projects removed
- public/images/ — 4 new images added: highend-hedge-trimming.jpg, highend-lawn-edging.jpg, highend-mulching.jpg, highend-garden-maintenance.jpg

**What's next:**
- Jason to export portrait crop of benji-hedging-federation-house.jpg to disk
- Wire contact form to Firestore

### 2026-06-08 (session 5)

**Session summary:** Connected benjisgardens.com.au custom domain to Firebase Hosting. Site is now live at the real URL with SSL.

**Decisions made:**
- Domain registrar is Vodien — DNS managed via their "DNS Settings - Premium" panel
- A record changed from 122.201.127.228 (Vodien hosting) to 199.36.158.100 (Firebase)
- TXT record added via Vodien live chat: `hosting-site=benjis-gardens-au`
- www CNAME was already pointing to benjisgardens.com.au — no change needed
- Firebase verified both records and provisioned SSL automatically

**What changed:**
- CLAUDE.md updated to reflect live domain
- DNS records updated at Vodien

**What's next:**
- Wire contact form to Firestore

---

### 2026-06-05 (session 4)

**Session summary:** Connected project to GitHub and deployed to Firebase Hosting. Site is now publicly accessible.

**Decisions made:**
- GitHub repo created as public: https://github.com/jasonpvella/benjisgardens
- Firebase project created: `benjis-gardens-au`
- firebase.json configured for static hosting with long-cache headers on assets, no-cache on HTML
- CLAUDE.md updated to reflect Firebase Hosting is live

**What changed:**
- firebase.json + .firebaserc created
- CLAUDE.md updated (stack description + critical rules)
- All 88 files (16 pages + assets) deployed to Firebase Hosting

**What's next:**
- Connect custom domain benjisgardens.com.au
- Wire contact form to Firestore

---

### 2026-06-05 (session 3)

**Session summary:** Photo polish pass — replaced all remaining generic Benji action shots with correct regional Facebook photos across area pages, services overview, and hedging page.

**Decisions made:**
- Hedging Gallery section removed entirely — photos added no value over what's elsewhere on the page
- Full-width `inner-west-layered-hedge.jpg` added before the CTA on /hedging as a cinematic strip
- Areas hub cards: all three now show correct regional photos
- Inner West gallery: replaced Five Dock action shots with Haberfield + Inner West Facebook photos
- Hills District + North Shore: new gallery sections added (were previously only 2 photos each)
- Services overview: Lawn Mowing → `north-shore-estate-pool-hedge.jpg`, Mulching → `hills-district-topiary-verandah.jpg`, Garden Maintenance → `inner-west-buxus-topdown.jpg`

**What changed:**
- src/pages/areas/index.astro
- src/pages/areas/hills-district.astro (gallery section added)
- src/pages/areas/north-shore.astro (gallery section added)
- src/pages/areas/inner-west.astro (gallery photos swapped)
- src/pages/hedging.astro (gallery removed, feature photo added)
- src/pages/services/index.astro (3 photo swaps)

**What's next:**
- Firebase connection

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
