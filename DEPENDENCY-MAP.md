# DEPENDENCY-MAP.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Built by BotMakers.ai

---

## PURPOSE OF THIS FILE

Every change has a ripple effect. This file maps every dependency so that when
something changes, you know EXACTLY what else needs to update.

Before making ANY change, search this file for that element.
After making a change, update this file to reflect any new dependencies.

---

## 1. COLOR DEPENDENCIES

### --color-hot-pink (#E8005A)
If this changes, update:
- [ ] css/design-system.css — the variable value
- [ ] All btn-primary styles
- [ ] Logo ring SVG (inline hex value)
- [ ] Nav CTA button
- [ ] Pricing Growth card border
- [ ] "Most Popular" badge background
- [ ] FAQ open state left border
- [ ] Stats bar numbers
- [ ] Footer CTA section background (uses direct hex in some BRIX overrides)
- [ ] OG image (manually regenerate)
- [ ] Favicon (manually regenerate)
- [ ] All social share images

### --color-core-pink (#D4537E)
If this changes, update:
- [ ] css/design-system.css
- [ ] btn-primary hover state
- [ ] Logo tagline color
- [ ] Input focus border
- [ ] Nav link hover state

### --font-display ('Josefin Sans')
If this changes, update:
- [ ] Google Fonts import link in index.html
- [ ] Google Fonts import link in privacy.html
- [ ] Google Fonts import link in terms.html
- [ ] CSS variable in design-system.css
- [ ] Logo component CSS
- [ ] Nav brand CSS
- [ ] Hero headline CSS
- [ ] Studio CTA section headline

### --font-heading ('DM Sans')
If this changes, update:
- [ ] Google Fonts import link in all HTML files
- [ ] CSS variable in design-system.css
- [ ] All section headings
- [ ] All button text
- [ ] All card titles

---

## 2. COPY DEPENDENCIES

### Tagline "Find Your Class."
If this changes, update:
- [ ] index.html hero headline
- [ ] index.html footer tagline
- [ ] <title> meta tag
- [ ] og:description meta tag
- [ ] Confirmation email template (in Resend)
- [ ] PROJECT-SPEC.md
- [ ] OG image (manually regenerate)

### "Get Early Access" CTA text
If this changes, update:
- [ ] Hero section primary CTA
- [ ] Nav (if shown there)
- [ ] Waitlist form submit button
- [ ] Pricing tier CTA buttons
- [ ] PROJECT-SPEC.md

### "List Your Studio Free" CTA text
If this changes, update:
- [ ] Hero section secondary CTA
- [ ] Nav button
- [ ] Studio section CTA
- [ ] Footer CTA section
- [ ] PROJECT-SPEC.md

### Studio email (studio@pinkcore.app)
If this changes, update:
- [ ] Studio CTA section subtext link
- [ ] Footer contact column
- [ ] Studio interest form mailto fallback
- [ ] Resend sender configuration
- [ ] DESIGN-SYSTEM.md Section 10

### Consumer email (hello@pinkcore.app)
If this changes, update:
- [ ] Footer contact column
- [ ] Confirmation email sender
- [ ] Resend sender configuration
- [ ] DESIGN-SYSTEM.md Section 10

---

## 3. FORM DEPENDENCIES

### Waitlist Form (consumer)
If form FIELDS change:
- [ ] index.html form HTML
- [ ] js/forms.js validation logic
- [ ] js/forms.js submission payload
- [ ] Resend audience custom fields
- [ ] PROJECT-SPEC.md Section 4

If form ENDPOINT changes:
- [ ] js/forms.js fetch URL
- [ ] Any serverless function (if used)

If SUCCESS MESSAGE changes:
- [ ] index.html success state HTML
- [ ] PROJECT-SPEC.md

### Studio Interest Form
Same dependencies as waitlist form above.
Additionally:
- [ ] Modal HTML in index.html
- [ ] Modal open/close JS in main.js
- [ ] "List Your Studio Free" CTA href/onclick

---

## 4. NAVIGATION DEPENDENCIES

### Nav Links
If nav links change (add/remove/rename):
- [ ] Nav HTML in index.html
- [ ] Mobile overlay menu HTML
- [ ] Footer links column (may need matching update)
- [ ] Smooth scroll JS targets (if anchor links)
- [ ] PROJECT-SPEC.md Section 3 Nav

### Logo
If logo design changes:
- [ ] Nav logo component HTML
- [ ] Footer logo component HTML
- [ ] Favicon files (manually regenerate)
- [ ] OG image (manually regenerate)
- [ ] DESIGN-SYSTEM.md Section 4

---

## 5. PRICING DEPENDENCIES

### Tier Names (Starter/Growth/Pro)
If tier names change:
- [ ] Pricing section cards in index.html
- [ ] Any FAQ answers mentioning tier names
- [ ] Studio onboarding form dropdown (in pinkcore-app — cross-repo dependency)
- [ ] PROJECT-SPEC.md Section 7
- [ ] Brand Package document (separate)

### Tier Prices ($0/$49/$99)
If prices change:
- [ ] Pricing section cards in index.html
- [ ] Any FAQ answers mentioning prices
- [ ] pinkcore-app pricing pages (cross-repo dependency)
- [ ] PROJECT-SPEC.md Section 7
- [ ] Brand Package document (separate)

### Per-Booking Fees ($1.00/$0.50/$0)
If per-booking fees change:
- [ ] Pricing section cards in index.html
- [ ] FAQ answer #1 (mentions $1 fee)
- [ ] pinkcore-app billing logic (cross-repo dependency — CRITICAL)
- [ ] PROJECT-SPEC.md Section 7

---

## 6. CROSS-REPO DEPENDENCIES
These are changes in pinkcore-web that affect pinkcore-app or vice versa.
ALWAYS flag these to the user before making them.

| Change in pinkcore-web | Also affects in pinkcore-app |
|---|---|
| Pricing tier names change | Studio dashboard tier display |
| Pricing amounts change | Stripe product prices, billing logic |
| Studio email changes | Studio notification emails in app |
| Consumer waitlist fields change | User onboarding fields in app |
| FAQ answers about scheduler integration | Studio onboarding flow copy |
| Brand colors change | App theme file, all components |
| Tagline changes | App splash screen, onboarding |

---

## 7. SEO DEPENDENCIES

### Page Title
If page title changes:
- [ ] <title> tag in index.html
- [ ] og:title meta tag
- [ ] twitter:title meta tag
- [ ] PROJECT-SPEC.md Section 5

### Meta Description
If meta description changes:
- [ ] <meta name="description"> in index.html
- [ ] og:description meta tag
- [ ] twitter:description meta tag
- [ ] PROJECT-SPEC.md Section 5

### Domain (pinkcore.app)
If domain changes (unlikely but document it):
- [ ] All canonical URLs
- [ ] All og:url tags
- [ ] Resend email links
- [ ] Vercel domain configuration
- [ ] GitHub repo deploy settings
- [ ] DESIGN-SYSTEM.md Section 10
- [ ] pinkcore-app deep links and API endpoints (cross-repo — CRITICAL)

---

## 8. CHANGE LOG
[Record every significant change made after initial build]
Format: DATE | WHAT CHANGED | FILES UPDATED | CROSS-REPO IMPACT

---

## GOLDEN RULE
If you make a change and it's not in this dependency map,
ADD IT before closing the session. Future you will be grateful.
