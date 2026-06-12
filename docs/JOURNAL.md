# Benji's Gardens — Project Memory Journal

---

## Executive Snapshot

**Current Focus:** CMS infrastructure built — awaiting Jason's 3-step setup to activate self-serve editing for sister.

**What's done:**
- Full Astro 4 + Tailwind 3 site — 18 pages, compiling clean
- Design system: deep botanical green + warm ivory + brass, Cormorant Garamond headings
- Nav: 5 tabs — Home, Hedging, Gallery, Journal, Contact
- Contact form → benjikerkin23@gmail.com via Web3Forms, redirects to /thank-you on success
- /thank-you page live (noindex) — ready for Google Ads conversion tracking
- Homepage hero: highend-formal-garden.jpg, headline "Sydney's Hedging, Lawn & Garden Specialists"
- 35 photos in public/images/, 2 videos, logo
- GitHub repo: https://github.com/jasonpvella/benjisgardens
- Firebase Hosting live: https://benjisgardens.com.au + www.benjisgardens.com.au (both SSL provisioned)
- Google setup playbook drafted — full sequence from GBP → Search Console → Ads
- Garden Journal (/blog/) live with sample post
- Decap CMS admin at /admin/ — sister edits via email/password login (no GitHub needed)
- GitHub Actions workflow at .github/workflows/deploy.yml — auto-deploys to Firebase on every push

**Blocking: 3 setup steps before CMS goes live (Jason to complete):**
1. Firebase service account → add as `FIREBASE_SERVICE_ACCOUNT_BENJIS_GARDENS_AU` secret in GitHub repo settings
2. Netlify account: link benjisgardens repo, enable Identity + Git Gateway, invite sister via email
3. Push this code → GitHub Actions auto-deploys everything

**Next session — in order:**
1. Complete CMS activation (above 3 steps)
2. Benji: complete Google Business Profile setup + verification (benjikerkin23@gmail.com)
3. Jason: set up Google Search Console + submit sitemap (needs Vodien DNS access)
4. Fill in ABN once Benji provides it
5. Add Google Reviews widget to homepage once GBP is live
6. When Benji has Google Ads account: provide Tag ID (AW-XXXXXXXXXX) → one-line site update to enable conversion tracking
7. Before/after photo pairs from Benji (Folder B "before" shots need matching afters)

---

## Historical Log

### 2026-06-12 (session 10)

**Session summary:** Built self-serve CMS infrastructure so Jason's sister can edit the site (photos, text, blog posts) without developer involvement. Added Garden Journal blog section and wired GitHub Actions for automatic Firebase deploys.

**Decisions made:**
- CMS: Decap CMS + Netlify Identity + Git Gateway — sister logs in with email/password at `/admin/`, no GitHub account needed
- Blog URL: `/blog/` with slug-based posts at `/blog/[slug]/`
- Blog display name: "Garden Journal" (premium feel), nav label: "Journal"
- Content storage: Astro content collections — markdown files in `src/content/blog/` (auditable, git-tracked)
- Auto-deploy: GitHub Actions on push to main → `npm run build` → Firebase Hosting (replaces manual `firebase deploy`)
- @tailwindcss/typography added for blog post prose rendering
- Netlify is used only for Identity + Git Gateway auth — Firebase remains the actual host

**What changed:**
- src/content/config.ts — new Astro content collection schema for blog
- src/content/blog/welcome-to-the-garden-journal.md — sample first post
- src/pages/blog/index.astro — Garden Journal listing page
- src/pages/blog/[...slug].astro — individual post page with prose styling
- src/components/Header.astro — "Journal" added to nav (5th tab)
- public/admin/index.html — Decap CMS admin SPA
- public/admin/config.yml — CMS schema (blog collection + media library)
- .github/workflows/deploy.yml — GitHub Actions auto-deploy to Firebase
- tailwind.config.mjs — @tailwindcss/typography plugin added
- package.json — @tailwindcss/typography dependency added

**What's next:**
- Jason: Firebase service account secret → GitHub repo settings
- Jason: Netlify account → link repo → enable Identity + Git Gateway → invite sister
- Push code → CMS goes live

### 2026-06-12 (session 9)

**Session summary:** Google presence strategy + conversion tracking setup. Built /thank-you page and wired form redirect. Prepared GBP photo pack and review template for Benji.

**Decisions made:**
- Benji uses benjikerkin23@gmail.com for Google Business Profile and Google Ads (no need to create a new account)
- 20 reviews is a suggestion, not a hard launch requirement for ads — start when tracking works and GBP is verified
- "Same-Day Quotes" in ad copy must be avoided — site says "Free on-site quote" and ad copy must match or Google penalises Quality Score
- Form success redirects to /thank-you (page-based conversion) rather than inline message — cleaner for Google Ads tracking
- /thank-you is noindex — conversion page, not a real content page
- Google Ads tag will be added to Layout.astro once Benji provides the Tag ID (AW-XXXXXXXXXX)

**What changed:**
- src/layouts/Layout.astro — added `noindex` prop
- src/pages/thank-you.astro — new page (styled, noindex, links back to homepage)
- src/pages/contact.astro — form redirects to /thank-you on success; inline success message removed
- ~/Downloads/BenjisGardens-Google/ — 15 best photos + review request template (sent to Benji, not in repo)

**What's next:**
- Benji sets up GBP + verification
- Jason sets up Search Console via Vodien DNS
- ABN from Benji
- Reviews widget once GBP is live
- Google Ads Tag ID → plug into Layout.astro

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
