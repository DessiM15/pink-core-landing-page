# BUILD-STATE.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Last Updated: 2026-05-04

---

## CURRENT STATUS
**Active Stage:** Stage 2.5 — Beta/Founders Sections (Complete)
**Overall Progress:** 45%
**Last Session:** 2026-05-04
**Next Action:** Stage 3 — Visual polish, app mockup images, animations, and form wiring

---

## COMPLETED STAGES
- Stage 0 — Project Setup (completed 2026-05-03)
- Stage 1 — Global Brand Application (completed 2026-05-04)
- Stage 2 — Section Content Build-Out (completed 2026-05-04)
- Stage 2.5 — Beta/Founders Sections (completed 2026-05-04)

---

## STAGE 0 PROGRESS
- [x] BRIX template files added to repo (v1 selected as base)
- [x] GitHub repo initialized and connected (github.com/DessiM15/pink-core-landing-page)
- [x] All project files pushed to GitHub
- [x] Vercel project connected
- [x] pinkcore.app domain verified
- [x] All 7 spec files in repo root
- [x] Folder structure created (css/, js/, images/, images/logo/, images/app-mockups/, fonts/)
- [x] design-system.css created with all CSS variables
- [x] Static deploy verified on Vercel
- [x] Gate 0 passed: YES

---

## STAGE 1 PROGRESS
- [x] index.html rewritten with 12-section skeleton per PROJECT-SPEC.md
- [x] Meta tags updated (title, description, OG tags, canonical, Twitter card, favicon)
- [x] Google Fonts import updated to include Josefin Sans 700 weight
- [x] Nav updated: How It Works | For Studios | Pricing | Get Early Access links + "List Your Studio" secondary CTA
- [x] Hero replaced: white bg, split layout (text left / phone mockup placeholder right), Hot Pink headline
- [x] 10 section shells created with correct IDs
- [x] Footer rewritten: 4 columns (Brand+tagline, Product links, Company links, Contact) per spec
- [x] css/main.css created
- [x] js/main.js created
- [x] css/studio.css deleted
- [x] js/studio.js deleted
- [x] images/favicon.svg created (PinkCore ring mark)
- [x] Removed BRIX vendor CSS dependencies (bootstrap, font-awesome)
- [x] Gate 1 passed: YES

---

## STAGE 2 PROGRESS
- [x] Real logo PNG (1.png) copied to images/logo/pinkcore-logo.png and used in nav as <img>
- [x] Footer retains CSS-based logo (works on dark ink background)
- [x] Social Proof Bar — stats row with 200+ Studios, 5000+ Classes, Free to List, iOS + Android
- [x] How It Works (Consumer) — 3 steps: Open, Find, Book — with copy from PROJECT-SPEC.md
- [x] Consumer Features — 6 cards with inline SVG icons: Starting Soon, Trial Classes, Drop-In, Map, Events, Home Studio
- [x] How It Works (Studio) — 3 steps: Create listing, Connect scheduler, Watch bookings + CTA
- [x] Studio Pricing — 3 tier cards (Starter $0, Growth $49 featured, Pro $99) with checkmark SVGs
- [x] Studio Features — 4 cards: Self-Serve Setup, Connect Scheduler, Your Brand, Real Bookings
- [x] Consumer Waitlist — form with first name, email, zip, studio owner checkbox, honeypot, success state
- [x] Studio CTA — hot pink background section with ghost CTA button
- [x] FAQ — 6 accordion items with all Q&A from PROJECT-SPEC.md, desktop-expanded / mobile-accordion
- [x] FAQ accordion JS added to main.js
- [x] Hero has subtle pink gradient mesh in top-right corner (CSS pseudo-element)
- [x] All copy matches PROJECT-SPEC.md exactly
- [x] All CSS for new sections added to main.css
- [x] Responsive breakpoints updated for all new sections

---

## STAGE 2.5 PROGRESS — Beta/Founders Sections
- [x] Nav updated: "Founding Partners" link added between "For Studios" and "Pricing" (desktop + mobile)
- [x] Beta Studios section (#beta-studios): ink bg, two-column layout, application CTA, benefits card
- [x] Studio Application Modal: full form with all fields, honeypot, validation, loading/success/error states
- [x] Modal opens on CTA click, closes on X / overlay click / Escape key
- [x] Beta Consumers section (#beta-consumers): petal bg, centered layout, 3 benefit cards, invite code flow
- [x] Invite code input: shows email field on submit with code, scrolls to waitlist if empty
- [x] Both forms console.log data (to be connected to Resend in Stage 6)
- [x] Fade-up scroll animations on both new sections
- [x] Responsive: tablet stacks studio grid, mobile stacks benefit cards + invite row
- [x] Modal: full-screen on mobile, no top border-radius
- [x] All colors use CSS variables from design-system.css
- [x] All fonts: Josefin Sans (labels/headlines) + DM Sans (body/forms)

---

## DECISIONS LOG
2026-04-06 | Selected BRIX v1 as base template | Light backgrounds match PinkCore's white/soft-white design system
2026-04-06 | Created placeholder PinkCore CSS/JS files alongside BRIX files
2026-05-03 | Connected GitHub repo and merged local project files
2026-05-04 | Removed Bootstrap and Font Awesome vendor CSS | Only design-system.css + main.css
2026-05-04 | Hero uses white background with Hot Pink headline | Per DESIGN-SYSTEM.md
2026-05-04 | Footer links use --color-blush per spec
2026-05-04 | Nav is always white background (no transparent state) | Hero is white bg
2026-05-04 | Nav logo uses real PNG (1.png) | Footer keeps CSS logo for dark bg compatibility
2026-05-04 | Used inline SVG icons instead of Font Awesome | No external icon dependencies
2026-05-04 | FAQ is accordion on mobile, expanded on desktop | Per PROJECT-SPEC.md spec
2026-05-04 | Beta studios section placed after pricing, before studio features | Logical flow: pricing → founding partner → features
2026-05-04 | Beta consumers section placed after FAQ, before footer | Last section before footer
2026-05-04 | Studio modal card bg #2A2A2A not in design system | One-off dark variant for ink bg section
2026-05-04 | Beta pills use hot pink bg (not candy) per user spec | Overrides default pill styling from DESIGN-SYSTEM.md

---

## BLOCKERS / QUESTIONS
(none currently)

---

## NOTES FOR NEXT SESSION
- All 12 + 2 beta sections are fully built with real content
- Phone mockup in hero is still a placeholder div — needs real app mockup image
- Waitlist form submits to console.log only (placeholder) — needs backend wiring in Stage 5
- Studio application modal form submits to console.log — connect to Resend with tag "beta_studio_application" in Stage 6
- Beta consumer invite code form submits to console.log — connect to Resend with tag "beta_consumer" in Stage 6
- Studio CTA "List Your Studio Free" currently mailto: link — will become a proper form/flow later
- No app mockup images yet — need designed assets for hero and feature sections
- forms.js is still a placeholder — needs rewrite for waitlist form validation/submission
- Consider adding entrance animations beyond fade-up (staggered reveals, etc.)
- About and Contact pages (privacy.html, terms.html) are linked but not yet created
