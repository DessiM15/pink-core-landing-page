# CLAUDE.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Built by BotMakers.ai

---

## READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE

This file defines how Claude Code MUST behave on this project.
These are non-negotiable rules. Do not deviate. Do not improvise.
If anything is unclear, STOP and ask before proceeding.

---

## 1. WHAT YOU ARE BUILDING

You are building the landing page and marketing website for PinkCore —
a pilates class discovery and booking mobile app launching in Houston, TX.

This is a STATIC HTML/CSS/JS website. It is NOT:
- A Next.js app
- A React app
- A Vue app
- A WordPress site
- Any framework-based site

It is plain HTML5, CSS3, and vanilla JavaScript.
It is built on top of the BRIX Mobile App Landing Page HTML template.
It deploys to Vercel as static files with zero build step.

---

## 2. THE THREE FILES YOU MUST READ BEFORE EVERY SESSION

1. `DESIGN-SYSTEM.md` — All colors, fonts, spacing, components. NEVER deviate from this.
2. `PROJECT-SPEC.md` — All sections, copy, forms, requirements.
3. `BUILD-STATE.md` — Current progress. What's done. What's next.

If you cannot find these files, STOP and ask the user to confirm the file structure
before writing any code.

---

## 3. UNIVERSAL BEHAVIOR RULES

### Colors
- NEVER hardcode a color that exists in DESIGN-SYSTEM.md
- ALWAYS use CSS variables: var(--color-hot-pink) not #E8005A
- EXCEPTION: The logo SVG inline stroke/fill may use literal hex values

### Fonts
- NEVER use system fonts, Arial, Roboto, or Inter
- ALWAYS use Josefin Sans for display/logo text
- ALWAYS use DM Sans for headings and body
- ALWAYS include the Google Fonts import link in every HTML file

### Spacing
- NEVER use arbitrary pixel values for margins/padding
- ALWAYS use spacing variables: var(--space-4) not 16px
- EXCEPTION: Fine-tuning adjustments of 1-3px are acceptable inline

### JavaScript
- NEVER use jQuery
- ALWAYS use vanilla JavaScript (ES6+)
- NEVER use external JS libraries unless explicitly approved
- APPROVED external libraries: None currently — ask before adding any

### Images
- ALWAYS use WebP format with JPG/PNG fallback
- ALWAYS include alt text on every img tag
- NEVER use placeholder services (placehold.it etc) in production code
- Use descriptive filenames: hero-app-mockup.webp not image1.webp

### Forms
- ALWAYS validate required fields before submission
- ALWAYS show loading state during submission (disable button, show spinner)
- ALWAYS show success state after submission (hide form, show message)
- ALWAYS show error state if submission fails
- ALWAYS include honeypot field for spam protection
- NEVER submit to a backend that doesn't exist yet — use console.log as placeholder

### Accessibility
- ALWAYS include aria-label on icon-only buttons
- ALWAYS use semantic HTML: nav, main, section, article, header, footer
- ALWAYS include skip-to-content link at top of page
- ALWAYS ensure color contrast meets WCAG AA minimum

### Mobile
- ALWAYS build mobile-first (smallest screen first, then scale up)
- ALWAYS test mentally at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1280px (desktop)
- NEVER use fixed widths that break on mobile
- ALWAYS use clamp() for font sizes and spacing that should scale

---

## 4. BRIX TEMPLATE RULES

The BRIX template provides the base structure. These are the rules for working with it:

### What to KEEP from BRIX
- Overall HTML structure and semantic markup
- Responsive grid system
- Animation patterns (adapt, don't replace)
- Section structure approach
- Mobile menu pattern

### What to REPLACE from BRIX
- ALL colors → PinkCore design system colors
- ALL fonts → Josefin Sans + DM Sans
- ALL copy → PinkCore copy from PROJECT-SPEC.md
- ALL images → PinkCore images/mockups
- ALL CTAs → PinkCore CTAs
- Logo → PinkCore logo component
- Pricing → PinkCore 3-tier pricing

### What to ADD (not in BRIX)
- Consumer waitlist form (Section 9)
- Studio interest form/CTA (Section 10)
- FAQ accordion (Section 11)
- Two-audience nav (consumer + studio CTAs)

### What to REMOVE from BRIX
- Any demo/placeholder content
- Any unrelated sections
- Any BRIX branding
- Comments referencing BRIX

---

## 5. COPY RULES

- NEVER write your own copy — always use exact copy from PROJECT-SPEC.md
- If copy is missing from the spec for a section, write [COPY NEEDED] and flag it
- Brand voice: warm, confident, encouraging — like a fit girlfriend, not a corporate brand
- NEVER use clinical/corporate language: "leverage", "synergize", "optimize your wellness journey"
- DO use: "book", "find", "discover", "your class", "near you", "right now"
- Tone: fun and feminine but never silly or unprofessional

---

## 6. WHAT TO DO WHEN STUCK

If you encounter any of these situations:
- A design decision not covered in DESIGN-SYSTEM.md
- A feature not described in PROJECT-SPEC.md
- A conflict between two requirements
- Uncertainty about which approach is correct
- A section that doesn't match the BRIX template structure well

**STOP. Do not guess. Do not improvise.**
Write a clear question to the user explaining exactly what you need clarified.
Provide 2-3 options if applicable. Wait for direction.

---

## 7. SESSION START PROTOCOL

At the beginning of EVERY Claude Code session on this project:
1. Read BUILD-STATE.md to understand current progress
2. Read DESIGN-SYSTEM.md to refresh brand tokens
3. Confirm with user: "I've reviewed the build state. Last completed: [X]. Next up: [Y]. Shall I proceed?"
4. Wait for confirmation before writing any code

---

## 8. SESSION END PROTOCOL

At the end of EVERY Claude Code session:
1. Update BUILD-STATE.md — mark completed items, update current stage
2. List any decisions made during the session
3. List any questions or blockers for next session
4. Commit message format: "feat: [what was built] — Stage [X]"

---

## 9. NEVER DO LIST

- NEVER install npm packages — this is a static HTML project
- NEVER add a build step — files deploy as-is
- NEVER use CSS frameworks (Bootstrap from BRIX template is the exception)
- NEVER add analytics scripts without explicit instruction (will be added later)
- NEVER connect to real APIs without explicit instruction
- NEVER push directly to main branch without user approval
- NEVER delete sections from PROJECT-SPEC.md — mark as [SKIPPED] if needed
- NEVER change brand colors — they are final
- NEVER change the logo design — it is final
- NEVER add features not in the spec without asking first

---

## 10. GIT COMMIT FORMAT
```
feat: build hero section with waitlist form — Stage 1
fix: mobile nav overlay z-index — Stage 1
style: apply PinkCore color system globally — Stage 1
content: add FAQ section copy — Stage 2
```
