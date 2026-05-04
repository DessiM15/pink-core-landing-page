# BUILD-PROMPTS.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Built by BotMakers.ai

---

## HOW TO USE THESE PROMPTS

Copy the prompt for your current stage and paste it directly into Claude Code.
Each prompt is self-contained — it includes all context Claude Code needs.
Always run prompts in order. Never skip a stage.

---

## STAGE 0 PROMPT — PROJECT SETUP

```
You are setting up the pinkcore-web project. This is the landing page for PinkCore,
a pilates class discovery app. Read CLAUDE.md, PROJECT-SPEC.md, and DESIGN-SYSTEM.md
before doing anything.

Setup tasks:
1. Confirm the BRIX template files exist in the repo
2. Create this folder structure if it doesn't exist:
   /css (design-system.css, main.css, animations.css)
   /js (main.js, forms.js)
   /images (logo/, app-mockups/, icons/)
3. Create css/design-system.css with ALL CSS variables from DESIGN-SYSTEM.md —
   copy them exactly, every single variable
4. Verify the Google Fonts import link for Josefin Sans + DM Sans is in index.html
5. Update BUILD-STATE.md to reflect what was completed

Do not change any visual design yet. Setup only.
Ask me before making any changes to index.html structure.
```

---

## STAGE 1 PROMPT — GLOBAL BRAND APPLICATION

```
You are applying the PinkCore brand system to the BRIX template.
Read CLAUDE.md, DESIGN-SYSTEM.md, and BUILD-STATE.md before starting.

Your tasks:
1. Open css/design-system.css and confirm ALL CSS variables are present
2. Open BRIX main CSS file and do a global find/replace:
   - Replace every hardcoded color with the corresponding CSS variable
   - Replace every font-family with var(--font-display) or var(--font-heading) or var(--font-body)
3. Replace the BRIX logo in the nav with the PinkCore logo component from DESIGN-SYSTEM.md
   (the exact HTML and CSS for the logo is in DESIGN-SYSTEM.md Section 4)
4. Replace all BRIX button styles with PinkCore button system from DESIGN-SYSTEM.md Section 8
5. Replace ALL demo text with [PLACEHOLDER - STAGE 3 COPY] temporarily
6. Replace all BRIX images with empty placeholder divs with correct dimensions

Do NOT change the HTML structure or section order yet.
Do NOT write any new sections yet.
After each major change, tell me what you changed and show me the before/after.
Update BUILD-STATE.md when complete.
```

---

## STAGE 2 PROMPT — HERO AND NAV

```
You are building the Hero section and Navigation for PinkCore's landing page.
Read CLAUDE.md, PROJECT-SPEC.md Section 3 (Sections 1 and 2), DESIGN-SYSTEM.md, and BUILD-STATE.md.

Build in this exact order:

1. NAV SECTION:
   - Fixed position, full width
   - Left: PinkCore logo (exact component from DESIGN-SYSTEM.md)
   - Right: links (How It Works, For Studios, Pricing) + "List Your Studio" btn-secondary
   - JavaScript: transparent background when at top of page, white + shadow when scrolled
   - Mobile: hamburger icon, full-screen overlay menu in Hot Pink #E8005A
   - Nav links in overlay: white, Josefin Sans, large

2. HERO SECTION:
   - Full viewport height (100vh)
   - Left side (60%): headline, subheadline, two CTAs
   - Headline: "Find Your Class." — font-display, display size, color: hot-pink, letter-spacing: 0.08em
   - Subheadline: exact copy from PROJECT-SPEC.md Section 3 Hero
   - CTA 1: btn-primary btn-lg "Get Early Access" — smooth scroll to #waitlist section
   - CTA 2: btn-secondary "List Your Studio Free →" — smooth scroll to #studios section
   - Right side (40%): placeholder div for phone mockup (style it nicely)
   - Background: white, subtle pink gradient mesh in top-right (CSS only, no images)
   - Staggered animations: headline (0s), subheadline (0.2s), CTAs (0.4s), phone (0.3s)

3. SOCIAL PROOF BAR:
   - Below hero, white background
   - 4 stats: "200+ Studios" | "5,000+ Classes/Month" | "Free to List" | "iOS + Android"
   - Stats in Hot Pink, labels in gray-mid
   - Dividers between stats

All copy must match PROJECT-SPEC.md exactly.
Mobile: hero stacks vertically, phone mockup below text.
Update BUILD-STATE.md when complete.
```

---

## STAGE 3 PROMPT — HOW IT WORKS + FEATURES

```
You are building the How It Works and Features sections for PinkCore.
Read CLAUDE.md, PROJECT-SPEC.md Sections 4-8, DESIGN-SYSTEM.md, BUILD-STATE.md.

Build these sections in order:

SECTION 4 — HOW IT WORKS (CONSUMER):
- White background
- Headline + subheadline from PROJECT-SPEC.md
- 3 steps in horizontal row (desktop), vertical stack (mobile)
- Each step: large step number (light pink, huge font), icon placeholder, heading, body text
- Exact copy from PROJECT-SPEC.md

SECTION 5 — CONSUMER FEATURES:
- Petal (#FBEAF0) background
- Headline from PROJECT-SPEC.md
- 6 cards in 3x2 grid (desktop), 1 column (mobile)
- Each card: Hot Pink icon placeholder, ink heading, gray body text
- Hover: pink border + shadow lift (CSS transition)
- All 6 features with exact copy from PROJECT-SPEC.md

SECTION 6 — HOW IT WORKS (STUDIO):
- White background
- Same 3-step pattern as Section 4
- Exact copy from PROJECT-SPEC.md
- CTA at bottom: "List Your Studio Free →" btn-primary

SECTION 7 — STUDIO FEATURES:
- Soft White (#F7F7F7) background
- 4 feature blocks in 2x2 grid
- Exact copy from PROJECT-SPEC.md

Add scroll-triggered fade-up animations to all cards and sections.
Use Intersection Observer API (vanilla JS, no library).
Update BUILD-STATE.md when complete.
```

---

## STAGE 4 PROMPT — PRICING + FAQ

```
You are building the Pricing and FAQ sections for PinkCore.
Read CLAUDE.md, PROJECT-SPEC.md Sections 7 and 11, DESIGN-SYSTEM.md, BUILD-STATE.md.

PRICING SECTION:
- White background
- Headline + subheadline from PROJECT-SPEC.md
- 3 cards side by side (desktop), stacked (mobile)
- STARTER card: standard card, white bg, blush border
- GROWTH card: slightly larger/elevated, Hot Pink border (2px), white bg,
  "Most Popular" badge in Hot Pink above card
- PRO card: standard card, white bg, blush border
- All pricing details EXACTLY from PROJECT-SPEC.md — do not change any copy
- Each CTA scrolls to #waitlist for now
- Mobile: Growth card appears FIRST on mobile (most important offer)

FAQ SECTION:
- Petal (#FBEAF0) background
- Headline from PROJECT-SPEC.md
- 6 accordion items — all questions and answers EXACTLY from PROJECT-SPEC.md
- Accordion behavior: click to expand/collapse, smooth CSS height transition
- Only ONE item open at a time (close others when opening new one)
- Open state: Hot Pink left border accent, ink text
- Closed state: gray border, ink heading
- Arrow icon rotates 180deg when open (CSS transform)
- All JS vanilla, no libraries

Update BUILD-STATE.md when complete.
```

---

## STAGE 5 PROMPT — FORMS + CONVERSION

```
You are building the conversion forms and CTA sections for PinkCore.
Read CLAUDE.md, PROJECT-SPEC.md Sections 9 and 10, DESIGN-SYSTEM.md, BUILD-STATE.md.

SECTION 9 — CONSUMER WAITLIST FORM:
- id="waitlist" (anchor for CTA scroll targets)
- White background
- Headline + subheadline from PROJECT-SPEC.md
- Form fields (all from PROJECT-SPEC.md):
  * First name (required, text input)
  * Email address (required, email input)
  * Zip code (optional, text input, max 5 chars)
  * Checkbox: "I own or manage a pilates studio"
  * Honeypot: hidden input name="website" (if filled = bot, reject silently)
- Submit button: "Get Early Access 🩷" btn-primary btn-lg full-width
- Loading state: disable button, show "Sending..." text
- Success state: hide form, show "You're on the list! 🩷 We'll be in touch before launch."
- Error state: show "Something went wrong. Please try again." in red
- Validation: highlight empty required fields in red, show error messages
- On submit: console.log all form data (Resend connected in Stage 6)

SECTION 10 — STUDIO CTA:
- id="studios" (anchor for CTA scroll targets)
- Hot Pink (#E8005A) background
- Headline + subheadline from PROJECT-SPEC.md — white text
- CTA: "List Your Studio Free →" btn-ghost btn-lg
- Sub-text: "Questions? Email studio@pinkcore.app" — white, mailto link

STUDIO MODAL FORM:
- Triggered by "List Your Studio Free" CTA
- Full-screen overlay, centered modal card
- Close button (X) top right
- All fields from PROJECT-SPEC.md studio form
- Same loading/success/error states as waitlist form
- On submit: console.log (Resend connected Stage 6)

Update BUILD-STATE.md when complete.
```

---

## STAGE 6 PROMPT — INTEGRATIONS + FOOTER

```
You are adding integrations and building the footer for PinkCore.
Read CLAUDE.md, PROJECT-SPEC.md, DESIGN-SYSTEM.md, BUILD-STATE.md.

FOOTER:
- Ink (#1A1A1A) background
- 4 columns from PROJECT-SPEC.md Section 12
- Mobile: 2 columns, then stacked
- Bottom bar: copyright text
- All email links as mailto:
- Instagram as external link (target="_blank")
- Internal links as anchor tags

RESEND INTEGRATION:
- Install/configure Resend for form submissions
- Consumer form: POST to Resend, add to audience with tag "consumer_waitlist"
- If studio checkbox checked: also tag "studio_interest"
- Studio form: POST to Resend, tag "studio_interest"
- Confirmation email: trigger from Resend on successful signup
- Subject: "You're on the PinkCore waitlist! 🩷"
- NOTE: If Resend API key not yet available, keep console.log and add TODO comment

PRIVACY + TERMS PAGES:
- Create privacy.html with basic privacy policy template
- Create terms.html with basic terms of service template
- Match site nav and footer
- Placeholder content with [LEGAL REVIEW NEEDED] flags

SEO FINAL CHECK:
- Verify all meta tags from PROJECT-SPEC.md Section 5 are in index.html
- Verify og:image exists at /images/og-image.png (create placeholder if needed)
- Verify favicon files exist

Update BUILD-STATE.md when complete.
```

---

## STAGE 7 PROMPT — POLISH + LAUNCH

```
You are doing final polish and QA for the PinkCore landing page.
Read CLAUDE.md, BUILD-STATE.md, and PROJECT-SPEC.md Success Metrics.

QA CHECKLIST — work through every item:

MOBILE QA (check at each breakpoint: 375px, 390px, 768px, 1024px, 1280px):
- [ ] Nav looks correct and functional
- [ ] Hero text readable, not cut off
- [ ] All sections stack correctly
- [ ] Forms usable on mobile keyboard
- [ ] CTAs are large enough to tap (min 44px height)
- [ ] No horizontal scroll at any breakpoint
- [ ] Font sizes readable (min 14px body on mobile)

PERFORMANCE:
- [ ] Remove all console.log statements
- [ ] Compress all images
- [ ] Remove unused CSS
- [ ] Verify Google Fonts loads with display=swap

FUNCTIONALITY:
- [ ] All CTA scroll anchors work
- [ ] Nav links work
- [ ] Mobile menu opens and closes
- [ ] FAQ accordion works
- [ ] Forms validate correctly
- [ ] Forms submit and show correct states
- [ ] Footer links all work
- [ ] mailto links work

FINAL:
- [ ] Custom 404 page (simple, on-brand)
- [ ] Test at pinkcore.app in browser
- [ ] Report any remaining issues

Update BUILD-STATE.md with LAUNCHED status when approved.
```

---

## EMERGENCY CONTEXT RESTORE PROMPT
Use this if Claude Code loses all context mid-session:

```
CONTEXT RESTORE — PinkCore Web

You are building the landing page for PinkCore, a pilates class discovery app.
This is a static HTML/CSS/JS site (NOT React/Next.js) based on the BRIX template.
Read these files immediately before doing anything:
1. CLAUDE.md — your behavior rules
2. DESIGN-SYSTEM.md — all brand tokens (colors, fonts, components)
3. BUILD-STATE.md — where we are in the build
4. PROJECT-SPEC.md — what we're building

Domain: pinkcore.app
Brand color: Hot Pink #E8005A
Font: Josefin Sans (display) + DM Sans (body)
Current stage: [TELL CLAUDE WHICH STAGE YOU'RE ON]

Do NOT write any code until you've read all 4 files.
Confirm you've read them and tell me what the current stage is.
```
