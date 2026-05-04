# BUILD-STAGES.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Built by BotMakers.ai

---

## HOW TO USE THIS FILE

Each stage has a GATE that must be passed before moving to the next stage.
Claude Code MUST NOT proceed to the next stage until the gate is cleared.
Gates require user approval — Claude Code cannot self-approve a gate.

---

## STAGE 0 — PROJECT SETUP
**Goal:** Repository and template ready to build on

### Tasks
- [ ] Download BRIX template files
- [ ] Initialize pinkcore-web GitHub repo
- [ ] Push BRIX template files to repo as starting point
- [ ] Connect repo to Vercel project
- [ ] Confirm pinkcore.app domain points to Vercel project
- [ ] Add all 7 CodeBakers spec files to repo root
- [ ] Create /css, /js, /images, /fonts folder structure
- [ ] Create design-system.css with all CSS variables from DESIGN-SYSTEM.md
- [ ] Verify static deploy works on Vercel (BRIX default styles visible)

### Gate 0 — Must pass before Stage 1
- [ ] pinkcore.app loads BRIX template in browser
- [ ] All spec files visible in repo root
- [ ] design-system.css exists with all CSS variables
- [ ] Vercel auto-deploy confirmed working

---

## STAGE 1 — GLOBAL BRAND APPLICATION
**Goal:** BRIX template fully converted to PinkCore brand

### Tasks
- [ ] Replace ALL BRIX colors with PinkCore CSS variables globally
- [ ] Replace ALL fonts with Josefin Sans + DM Sans (Google Fonts import added)
- [ ] Remove ALL BRIX demo copy (replace with [PLACEHOLDER] temporarily)
- [ ] Remove ALL BRIX images (replace with placeholder blocks temporarily)
- [ ] Replace BRIX logo with PinkCore logo component (exact spec from DESIGN-SYSTEM.md)
- [ ] Apply PinkCore button styles to all CTAs (btn-primary, btn-secondary, btn-ghost)
- [ ] Apply PinkCore nav styles (transparent → white on scroll)
- [ ] Update favicon files to PinkCore ring mark
- [ ] Update all meta tags with PinkCore SEO content from PROJECT-SPEC.md

### Gate 1 — Must pass before Stage 2
- [ ] User confirms brand looks correct on desktop
- [ ] User confirms brand looks correct on mobile
- [ ] Zero BRIX colors remaining in CSS
- [ ] Zero BRIX fonts remaining
- [ ] PinkCore logo renders correctly in nav
- [ ] CTAs are correct Hot Pink color

---

## STAGE 2 — HERO + NAV SECTIONS
**Goal:** Hero section complete and converting

### Tasks
- [ ] NAV: Fixed nav with PinkCore logo, links, dual CTAs
- [ ] NAV: Transparent on load, white + shadow on scroll (JS)
- [ ] NAV: Mobile hamburger → full screen overlay menu
- [ ] HERO: Full viewport height layout
- [ ] HERO: Headline "Find Your Class." — Josefin Sans Light display size, Hot Pink
- [ ] HERO: Subheadline copy from PROJECT-SPEC.md Section 2
- [ ] HERO: Primary CTA "Get Early Access" scrolls to waitlist form
- [ ] HERO: Secondary CTA "List Your Studio Free" scrolls to studio section
- [ ] HERO: Phone mockup placeholder (right side)
- [ ] HERO: Pink gradient mesh background element (top right)
- [ ] HERO: Staggered fade-up animations on load (headline → subheadline → CTAs → phone)
- [ ] SOCIAL PROOF BAR: Stats row below hero fold

### Gate 2 — Must pass before Stage 3
- [ ] User approves hero visual on desktop
- [ ] User approves hero visual on mobile
- [ ] Nav scroll behavior works correctly
- [ ] Mobile menu opens and closes correctly
- [ ] Hero CTAs scroll to correct sections
- [ ] Animations run correctly on page load

---

## STAGE 3 — HOW IT WORKS + FEATURES SECTIONS
**Goal:** Consumer and studio value props clearly communicated

### Tasks
- [ ] HOW IT WORKS (Consumer): 3-step section with icons and copy
- [ ] CONSUMER FEATURES: 6-card grid with correct icons and copy
- [ ] HOW IT WORKS (Studio): 3-step section for studio audience
- [ ] STUDIO FEATURES: 4-feature section for studio audience
- [ ] All copy exactly matches PROJECT-SPEC.md
- [ ] All sections responsive on mobile (stacked cards)
- [ ] Scroll-triggered animations on all cards

### Gate 3 — Must pass before Stage 4
- [ ] User approves all copy
- [ ] User approves card layouts
- [ ] Mobile stacking verified

---

## STAGE 4 — PRICING + FAQ SECTIONS
**Goal:** Pricing and objections handled

### Tasks
- [ ] PRICING: 3-tier cards (Starter/Growth/Pro) with exact specs from PROJECT-SPEC.md
- [ ] PRICING: Growth card elevated with Hot Pink border + "Most Popular" badge
- [ ] PRICING: All CTAs linked (to waitlist form for now)
- [ ] PRICING: Mobile — stacked cards, Growth card first on mobile
- [ ] FAQ: Accordion component (click to expand/collapse)
- [ ] FAQ: All 6 questions and answers from PROJECT-SPEC.md
- [ ] FAQ: Smooth expand animation
- [ ] FAQ: Only one item open at a time

### Gate 4 — Must pass before Stage 5
- [ ] User approves pricing layout
- [ ] User approves FAQ content
- [ ] FAQ accordion works correctly
- [ ] Pricing cards stack correctly on mobile

---

## STAGE 5 — FORMS + CONVERSION SECTIONS
**Goal:** Both conversion paths working

### Tasks
- [ ] WAITLIST FORM: All fields from PROJECT-SPEC.md
- [ ] WAITLIST FORM: Real-time validation
- [ ] WAITLIST FORM: Loading state on submit
- [ ] WAITLIST FORM: Success state (hide form, show message)
- [ ] WAITLIST FORM: Error state
- [ ] WAITLIST FORM: Honeypot spam protection
- [ ] WAITLIST FORM: Console.log submission data (Resend connected in Stage 6)
- [ ] STUDIO CTA SECTION: Hot pink background, ghost button, correct copy
- [ ] STUDIO INTEREST FORM: Modal or separate section with all fields

### Gate 5 — Must pass before Stage 6
- [ ] User tests waitlist form end-to-end
- [ ] User tests studio form end-to-end
- [ ] All validation messages visible and correct
- [ ] Success states display correctly
- [ ] Forms work on mobile

---

## STAGE 6 — INTEGRATIONS + FOOTER
**Goal:** Fully functional and connected

### Tasks
- [ ] FOOTER: 4-column layout with all links from PROJECT-SPEC.md
- [ ] FOOTER: Mobile stacked layout
- [ ] FOOTER: Instagram link active
- [ ] FOOTER: Email links (mailto:) active
- [ ] FOOTER: Privacy Policy and Terms pages created (placeholder content)
- [ ] RESEND: Connect waitlist form to Resend email list (tag: consumer_waitlist)
- [ ] RESEND: Connect studio form to Resend (tag: studio_interest)
- [ ] RESEND: Confirmation email triggers correctly
- [ ] SEO: All meta tags verified
- [ ] SEO: OG image created and referenced
- [ ] ANALYTICS: Google Analytics or Plausible added (if approved by user)

### Gate 6 — Must pass before Stage 7
- [ ] User tests full form flow including email confirmation
- [ ] Footer links all work
- [ ] Privacy and Terms pages exist
- [ ] SEO meta tags verified in browser inspector

---

## STAGE 7 — POLISH + LAUNCH
**Goal:** Production ready

### Tasks
- [ ] Full mobile QA — test every section at 375px, 390px, 768px, 1280px
- [ ] Cross-browser test — Chrome, Safari, Firefox
- [ ] All images optimized (WebP, compressed)
- [ ] CSS minified for production
- [ ] All console.log statements removed
- [ ] Page speed test — target under 3 seconds
- [ ] Broken link check
- [ ] Form submission final test
- [ ] Custom 404 page created
- [ ] pinkcore.app confirmed live and correct
- [ ] User final approval

### Gate 7 — LAUNCH
- [ ] User gives final approval
- [ ] Page loads under 3 seconds
- [ ] Zero broken links
- [ ] Forms submit and email confirmations arrive
- [ ] Mobile experience approved
- [ ] 🚀 LAUNCHED

---

## TOTAL ESTIMATED BUILD TIME
- Stage 0: 30 minutes (setup)
- Stage 1: 1-2 hours (brand application)
- Stage 2: 2-3 hours (hero + nav)
- Stage 3: 2-3 hours (features sections)
- Stage 4: 1-2 hours (pricing + FAQ)
- Stage 5: 2-3 hours (forms)
- Stage 6: 1-2 hours (integrations + footer)
- Stage 7: 1-2 hours (polish + QA)
- **Total: 10-18 hours of Claude Code sessions**
