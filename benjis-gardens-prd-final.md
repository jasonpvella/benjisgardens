# Product Requirements Document — Benji's Gardens

**Domain:** benjisgardens.com.au
**Version:** Final (v2)
**Last updated:** June 2026

---

## 1. Overview

Benji's Gardens is a Sydney garden-maintenance business serving the Hills District, Northern Suburbs (Upper North Shore), and Inner West. This PRD specifies a new website with two equally weighted goals:

1. **Lead generation** — drive quote requests and calls.
2. **Premium positioning** — look elite enough to win high-value properties and recurring clients.

The build must be **lightweight and easy to adjust over time**, so the owner can keep it fresh without a developer for routine updates.

**Positioning in one line:** Benji's Gardens is Sydney's hedging specialist and the team that affluent properties trust for the complete, ongoing care of their gardens.

---

## 2. What's Different in This Version

This v2 incorporates feedback that sharpened the original PRD. The guiding principle: **adopt the upgrades that convert and prove craft; sequence the heavy features so V1 stays lightweight and ships.** Key changes:

- **Before/after is now a homepage hero element**, presented as a draggable "lens" slider, not a buried side-by-side.
- **Benji is the brand** — a real face, name, and story woven across the site rather than confined to a low-priority About page.
- **Garden Care Plans pulled into V1** as a premium, recurring-revenue offer (the most important *business* change).
- **Suburb pages are generated from real completed projects**, not pre-built as a batch of near-identical templates (avoids thin/doorway-page risk).
- **A "Recent Projects" content engine** turns each real job into fresh local content and SEO.
- **A top-down orthographic drone shot of a finished hedge** as a signature proof-of-precision visual.
- **Premium "estate" language is region-contextual** (Hills/North Shore acreage), not a single sitewide slogan; the existing "the final touch" tagline is retained.
- **Photo upload on the quote form is optional, not a required step** (captures high-intent leads without taxing completion).
- **Deferred to later phases:** the interactive job map, batch suburb pages, and other JS-heavy delighters that fight the lightweight goal.

---

## 3. Positioning Strategy

Two layered messages:

1. **Hero differentiator — hedging mastery.** Hedging is rare, ownable, visually impressive, and the most craft-signalling service. It is the premium lead generator. Lead with it everywhere.
2. **Full-service reassurance — complete premium care.** Mowing, mulching, and general maintenance positioned as ongoing "complete care" so one client books everything on a recurring basis (the recurring revenue base).

**Tone:** confident, understated, craft-led. Avoid "cheap," "affordable," "no job too small." Use specific craft vocabulary (buxus, lilly pilly, leighton green, formal lines, hedge reduction, topiary) to prove expertise.

**Language by region (important nuance):**
- **Hills District / Upper North Shore acreage and estates:** elevated "estate" language is appropriate — "estate-grade care," "the long-term health and structure of your garden." Reserve the grander phrasing for here.
- **Inner West heritage:** emphasise precision in compact, heritage gardens — "Federation-era topiary," "meticulous work in tight, treasured spaces." "Estate stewardship" language does **not** fit a Haberfield courtyard; don't force it.
- **Retained tagline:** "The final touch your garden deserves" (existing brand equity). Use elevated phrasing as regional accents, not a replacement.

---

## 4. Target Audience / Personas

Suburb medians below are CoreLogic/Cotality 12-month figures via property aggregators (to early-to-mid 2026) — directional for targeting, not for publishing.

1. **Hills District acreage owner** (Kenthurst ~$3.2M, Dural ~$2.5M, Glenorie ~$2.3M, Middle Dural ~$3.8M, Glenhaven ~$2.7M). Large semi-rural blocks and equestrian estates. Best fit for high-value recurring maintenance because of block size. *Needs:* reliable large-scale hedging, screening, and grounds upkeep; values quality and professionalism over price.
2. **Upper North Shore "garden suburb" owner** (Killara, Pymble ~$3.67M, St Ives, Wahroonga ~$3.0M, Gordon, Lindfield, Turramurra). Large blocks, mature landscaping, formal hedges. The prestige-hedging heartland. *Needs:* a manicured aesthetic, discretion, consistency.
3. **Inner West heritage-prestige owner** (Haberfield ~$2.99M, Balmain ~$2.91M, Birchgrove, Hunters Hill/Woolwich). Smaller, heritage courtyard/Federation gardens — compact but high-value, design-conscious. *Needs:* precise, tasteful maintenance sensitive to heritage streetscapes.

**Secondary:** strata/commercial managers; real-estate agents needing pre-sale garden makeovers. Worth acknowledging, not the hero focus.

---

## 5. Goals & Success Metrics

**Lead-gen KPIs:** quote-form submissions/month; click-to-call taps/month; form completion rate; % of visitors reaching the quote step.

**Premium-positioning KPIs:** share of quotes from target premium suburbs; average job value; proportion of recurring (vs one-off) contracts; number of Care Plan sign-ups; Google review count and average rating; branded search volume.

**Technical KPIs:** Core Web Vitals at the 75th percentile — LCP < 2.5s (internal stretch < 2.0s on mobile), INP < 200ms, CLS < 0.1. Lighthouse performance 90+.

---

## 6. Information Architecture / Sitemap

```
/                          Homepage
/hedging                   HERO specialty page (hedging mastery)
/services                  Services overview
  /services/lawn-mowing
  /services/mulching
  /services/garden-maintenance
/care-plans                Garden Care Plans (recurring tiers)   ← new in V1
/gallery                   Portfolio: before/afters + drone video
/projects                  Recent Projects (content engine)      ← new in V1
  /projects/[project]      Individual project pages (generated from real jobs)
/about                     Benji's story, credentials, insurance
/areas                     Service-areas hub
  /areas/hills-district
  /areas/north-shore
  /areas/inner-west
/contact                   Contact + quote form (anchor #quote sitewide)
```

**Note on suburb pages:** Individual suburb pages (e.g. /areas/north-shore/pymble) are **created over time from real `/projects` content**, not pre-built as a batch. Each must carry genuine local photos, a real project, and ideally a local testimonial — otherwise it's a thin page and a liability.

**Persistent header:** logo, nav, click-to-call phone number, high-contrast "Get a Free Quote" button.
**Persistent footer:** NAP, service areas, services, social, ABN, insurance statement, Google review badge.

---

## 7. Homepage Structure

Revised order — before/after and trust elevated, Benji given prominence:

1. **Hero** — drone footage (poster image + deferred load; static hero image on mobile). Restrained overlay headline leading on hedging + premium. Primary CTA "Get a Free Quote"; secondary click-to-call.
2. **Trust bar** — Google rating, "Fully Insured," areas served.
3. **Before/After showcase** — one dramatic hedge transformation on a **draggable lens slider**. The single most persuasive element; give it room.
4. **Why homeowners choose Benji's Gardens** — concise checklist (see §11).
5. **Hedging specialist feature** — links to /hedging; include the **top-down orthographic hedge shot**.
6. **Services grid** — 4 cards.
7. **Garden Care Plans teaser** — links to /care-plans.
8. **Recent Projects** — 3 most recent, suburb-captioned; links to /projects.
9. **Reviews** — Google reviews widget.
10. **Areas served** — map + 3 regional links.
11. **Meet Benji** — real photo, name, "Owner & Hedging Specialist," years of experience; short personal intro.
12. **Final quote CTA.**

Keep the LCP element a fast poster image, never a raw video.

---

## 8. Page-by-Page Requirements

**/hedging — the hero differentiator (most polished page on the site).**
Establish genuine expertise: hedge types (formal buxus, lilly pilly, leighton green, murraya, camellia screens); the craft (clean lines, correct seasonal timing, hedge reductions, restoring overgrown hedges, topiary); why precision matters (plant health, longevity, property value). Include the **orthographic top-down drone shot** (laser-straight lines from directly above = the ultimate proof), a large suburb-captioned gallery of hedge work, before/after sliders, and a hedging-specific quote CTA.

**/services + 3 service pages.**
Each: hero image, what's included, who it's for, real photos, quote CTA. Cross-link mowing/mulching/maintenance into the Care Plans offer.

**/care-plans (new in V1).**
Position recurring work as a premium membership, not a chore. Three tiers:
- **Essential** — monthly maintenance.
- **Premium** — fortnightly maintenance.
- **Estate** — large acreage / bespoke schedule.
Each tier: what's included, who it suits, an enquiry CTA. This reframes the offer and attracts higher-value recurring clients. Pricing can be "from $X" or "request a tailored quote" depending on Benji's preference.

**/gallery.**
Before/after sliders as the centrepiece; suburb-captioned high-res grid; embedded drone video. Lazy-load below the fold; lightbox on click.

**/projects + project pages (new in V1, grows over time).**
The content engine. Each project: title + suburb ("Formal Lilly Pilly Hedge — Pymble"), 3+ real photos (before/after where possible), a few lines of story, service tags. Benji adds one every few weeks via the CMS. These feed SEO, freshness, social proof, and eventually the suburb pages.

**/about.**
Benji's story and craft credentials, the team, "fully insured," philosophy, a genuine owner intro (real photos, never stock). Include an FAQ for SEO/schema. Note: "Meet Benji" also appears on the homepage — About is the deeper version.

**/areas + 3 regional pages.**
Unique local content per region with an **expertise focus that changes by area**, not just the suburb name:
- **Hills District** — scale and machinery: large-scale hedging, acreage rejuvenation, grounds upkeep on big blocks.
- **North Shore (Upper North Shore)** — formal, manicured, mature gardens; prestige hedging.
- **Inner West** — heritage sensitivity: Federation-era topiary, precision in compact spaces.
Each: real area photos/projects, area testimonial where available, embedded Google Map, NAP, LocalBusiness schema, clear CTA.

**/contact.**
Short quote form (3–5 fields: name, phone/email, suburb, service interest, optional message). **Optional photo upload** ("Optionally add a photo for a faster estimate") — present as an optional add-on, not a required step, so high-intent users attach photos without raising friction for everyone. Explicit "we reply same day" promise; click-to-call; service-area reassurance; social proof beside the form.

---

## 9. Feature Requirements

- **Quote flow:** 3–5 fields, single column, mobile-optimised, benefit-driven button ("Get My Free Quote"), success message stating response time, optional photo upload.
- **Click-to-call:** `tel:` in the header on every page + sticky mobile call bar.
- **Same-day quote promise:** highlight in the sticky mobile bar (e.g. "Enquire by midday, quote by this evening" — adjust to Benji's real capacity; only promise what he can keep).
- **Before/After lens slider:** draggable reveal component; used on homepage, /hedging, and /gallery.
- **Reviews integration:** auto-syncing Google reviews widget (e.g. Elfsight or Trustindex — both lazy-load and add review schema); star rating shown in the trust bar.
- **Gallery/video:** streaming-hosted drone video (poster + deferred load; muted loop for background, click-to-play for full); lazy-loaded grid with suburb captions; lightbox.
- **CMS-driven projects:** owner uploads a photo from his phone; the CMS auto-optimises (WebP/AVIF) and publishes to /projects and the relevant gallery/area.
- **Schema:** LocalBusiness (most specific subtype), per-area pages, FAQPage, AggregateRating from reviews.
- **Analytics:** privacy-friendly analytics + Google Search Console; event tracking on form submits and call taps.

---

## 10. Design Direction

"Quiet luxury" / editorial — premium signalled through restraint, not flash.

- **Palette:** deep botanical green + charcoal/near-black + warm ivory/cream, with one restrained accent (muted brass/gold or sharp white). 2–3 core colours plus neutrals.
- **Typography:** elegant serif headlines (authority/heritage) + clean sans body; generous spacing and white space.
- **Imagery:** Benji's professional photos and drone video do the heavy lifting. Full-bleed heroes, large project images, before/afters, the orthographic hedge shot. **No stock photography** — avoid any "handyman" look.
- **Layout:** minimal nav, strong hierarchy, breathing room, subtle motion only.
- **Reference points to brief a designer:** Mark Tessier Landscape Architecture (photography-led), Candide Contractor (video + project-by-town map), Huntergreen (calm white space), Southview Design, NOVA Landscape & Design. Out-class hedge.sydney by being more editorial and image-forward.

---

## 11. Copywriting & Key Messaging

Confident, understated, craft-led. Avoid discount language.

**"Why homeowners choose Benji's Gardens" checklist (homepage + reused):**
- Hedging specialists
- Fully insured
- Professional-grade equipment
- Reliable, clear communication
- Same-day quotes
- Respectful of your property (clean-site finish)
- Recurring care plans available

**Drone video as a sales tool, not decoration:** structure the showcase clip as a mini-story — arrival, the overgrown "before," the team at work, the finished result, a sweeping aerial reveal. The narrative does the selling.

---

## 12. SEO Requirements

- **3 regional location pages in V1** with genuinely unique local content, NAP, embedded map, LocalBusiness schema. Suburb pages added later, each backed by a real project.
- **Google Business Profile:** hide street address (service-area business); define service areas (suburbs/postcodes within driving range — max 20, within ~2 hours' drive, no states/countries per Google's June 2025 policy); most specific category; keep active with photos/posts.
- Per-page metadata; descriptive alt text on every image (valuable given the photo-heavy galleries); clean URLs; XML sitemap; fast mobile pages.
- Service + suburb keyword targeting ("hedge trimming Pymble," "garden maintenance Dural," "lawn mowing Hills District").
- FAQ schema; AggregateRating schema from Google reviews.
- **Recent Projects** is the organic growth engine — fresh, unique, locally-relevant content on a cadence.

---

## 13. Performance & Technical Requirements

- Mobile-first; pass Core Web Vitals at p75 (LCP < 2.5s, stretch < 2.0s mobile; INP < 200ms; CLS < 0.1). Explicit width/height on all media to protect CLS.
- Hero: poster image preloaded (high `fetchpriority`); video `preload="none"`, deferred; lighter asset or static image on mobile.
- Images: WebP/AVIF, responsive sizes, lazy-load below the fold, eager-load the LCP image.
- Video: streaming host + CDN; no large raw MP4 in the hero.
- Minimal JS; hydrate only interactive islands (lens slider, gallery lightbox, quote form, reviews widget).
- CDN hosting, caching, HTTPS.

---

## 14. Recommended Tech Stack

**Astro (static site generation) + Tailwind CSS, content in a lightweight CMS, hosted on Cloudflare Pages or Netlify, drone video on a streaming host, form via Firebase.**

- **Astro** ships zero JS by default and adds interactivity only to flagged "island" components — near-perfect Core Web Vitals for a photo/video-heavy marketing site. Framework-agnostic, so React components (familiar from your stack) can power the lens slider, lightbox, and quote form. Static output hosts on a CDN at near-zero cost.
- **CMS — Storyblok (recommended).** Visual, WYSIWYG, live preview, official Astro SDK, free tier; auto-optimises uploaded images to WebP/AVIF. Lets Benji photograph a fresh job on his phone and publish it to /projects and the right gallery without touching code. (Decap CMS is the truly-free Git-based alternative if you'd rather avoid a SaaS dependency and maintain it yourself.)
- **Forms:** Firestore-backed form + email notification (you already know Firebase) — comfortable and low-maintenance. Formspree/Netlify Forms are simpler no-backend alternatives.
- **Video:** Cloudflare Stream (simple pricing, integrated CDN) or Bunny Stream (low egress). Mux if richer analytics are wanted.

**Tradeoffs:** Next.js is heavier and overkill unless a future booking app shares the codebase; WordPress contradicts the lightweight/low-maintenance goal; no-code (Framer/Webflow) is fastest to launch but carries monthly cost and lock-in; a React/Vite SPA is poor for local SEO. Astro is the best blend of premium performance, low maintenance, low cost, and React compatibility.

---

## 15. Roadmap

**V1 / MVP (launch)**
- Homepage with the revised structure (before/after slider, Why-choose, hedging feature, Care Plans teaser, Recent Projects, Meet Benji).
- /hedging hero page with the orthographic drone shot.
- /services overview + 3 service pages.
- **/care-plans with 3 tiers.**
- /gallery with before/after sliders + drone video.
- **/projects content engine + initial real projects.**
- /about with FAQ + "Meet Benji."
- 3 regional area pages (Hills District, North Shore, Inner West) with maps + LocalBusiness schema and area-specific expertise framing.
- /contact: 3–5 field quote form with optional photo upload + click-to-call + sticky mobile call bar + same-day promise.
- Google reviews widget; full schema; metadata; sitemap; analytics + Search Console; Google Business Profile.

**Phase 2**
- Individual suburb pages generated from accumulated real projects (Kenthurst, Dural, Killara, Pymble, St Ives, Wahroonga, Haberfield, Balmain, etc.).
- Instant-quote / ballpark estimator.
- Blog / seasonal hedging guides.
- Care Plan online sign-up / payment.

**Phase 3 (delighters)**
- Interactive "See our work on a map" of completed jobs (held back deliberately — JS weight and ongoing maintenance vs the lightweight goal).
- Online booking/scheduling + client portal.
- Strata/commercial B2B section.
- Email/SMS lead nurture.

---

## 16. Open Questions / Asset Checklist

Several V1 features depend on real assets — confirm before building:

- **Before/afters:** how many genuine, high-quality before/after pairs does Benji have? (At least one dramatic hedge transformation is needed for the homepage hero.)
- **Drone footage:** does he have, or can he capture, a **top-down orthographic shot** of a finished hedge? And footage suitable for the mini-story showcase?
- **Real projects by suburb:** how many completed jobs with photos, and in which suburbs? (Determines how fast the suburb-page engine can grow.)
- **Care Plans:** is Benji willing to commit to tiers and either fixed or "from" pricing?
- **Same-day quote:** can he reliably keep a same-day promise? Only advertise what he can deliver.
- **Photography:** are existing photos premium-grade, or is a photo shoot needed to avoid a "handyman" look?
- **Testimonials:** any from named premium suburbs, with permission to display?
- **Insurance/credentials:** exact wording for the trust block (insurer, equipment, clean-site guarantee).

---

## 17. Notes & Caveats

- Suburb medians are CoreLogic/Cotality 12-month figures via secondary aggregators (to early-to-mid 2026); low-volume suburbs have volatile medians. Re-verify against a first-party source before publishing any figures. Use for targeting, not as published claims.
- Conversion stats informing the short-form, click-to-call, and optional-upload decisions are directional vendor/agency benchmarks — A/B test on Benji's own traffic.
- Core Web Vitals "good" thresholds per Google Search Central (Dec 2025): LCP 2.5s / INP 200ms / CLS 0.1. The "2.0s" figure is an internal stretch target, not an official threshold.
- hedge.sydney positioning is from its live site (June 2026) and can change.
