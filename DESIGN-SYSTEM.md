# DESIGN-SYSTEM.md — PinkCore Web
# Version 1.0 | pinkcore-web (Landing Page)
# Built by BotMakers.ai

---

## CRITICAL RULE
This file is the SINGLE SOURCE OF TRUTH for all design decisions.
Claude Code MUST reference this file before writing ANY styles, colors, fonts, or spacing.
NEVER hardcode values that exist in this file. ALWAYS use the CSS variables defined here.

---

## 1. BRAND IDENTITY

**Product Name:** PinkCore
**Tagline:** Find Your Class.
**Secondary Taglines:**
- "Your core. Your class. Your city."
- "Pilates near you."
- "Book it. Work it. Own it."

**What PinkCore is:** A mobile-first discovery marketplace for pilates classes.
Think Eventbrite meets Yelp — built specifically for the pilates community.

**Brand Personality:** Fun, confident, encouraging. Speaks like your most fit girlfriend
who genuinely wants you to come to class. Never clinical, never intimidating.

**Target Audience:**
- PRIMARY: Women 25-45 who do or want to do pilates
- SECONDARY: Pilates studio owners and gym owners with pilates programs

---

## 2. COLOR PALETTE — COMPLETE SPECIFICATION

### CSS Variables (paste into :root in every CSS file)
```css
:root {
  /* PRIMARY BRAND COLORS */
  --color-hot-pink: #E8005A;        /* PRIMARY — CTAs, buttons, logo ring, key highlights */
  --color-core-pink: #D4537E;       /* SECONDARY — hover states, links, subheadings */
  --color-blush: #F4C0D1;           /* SUBTLE — borders, dividers, input outlines */
  --color-petal: #FBEAF0;           /* LIGHTEST — section backgrounds, card fills */
  --color-candy: #FFD6E7;           /* TAGS — pills, badges, notification backgrounds */

  /* NEUTRAL COLORS */
  --color-ink: #1A1A1A;             /* PRIMARY TEXT — headings, body on light bg */
  --color-white: #FFFFFF;           /* BACKGROUNDS — cards, nav, primary surfaces */
  --color-soft-white: #F7F7F7;      /* PAGE BG — alternating sections */
  --color-gray-light: #EEEEEE;      /* BORDERS — subtle dividers */
  --color-gray-mid: #888888;        /* SECONDARY TEXT — captions, meta, placeholders */
  --color-gray-dark: #444444;       /* BODY TEXT — paragraphs */

  /* SEMANTIC COLORS */
  --color-success: #22C55E;         /* Success states, confirmations */
  --color-error: #EF4444;           /* Error states, warnings */
  --color-warning: #F59E0B;         /* Warning states */

  /* GRADIENTS */
  --gradient-hero: linear-gradient(135deg, #E8005A 0%, #D4537E 50%, #F4C0D1 100%);
  --gradient-card: linear-gradient(180deg, rgba(232,0,90,0.05) 0%, rgba(255,255,255,0) 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,0.8) 100%);
}
```

### Color Usage Rules — NEVER deviate from these
| Element | Color | Do NOT use |
|---|---|---|
| Primary CTA button bg | --color-hot-pink | Any other color |
| Primary CTA button text | --color-white | --color-ink |
| Secondary button bg | --color-white | --color-petal |
| Secondary button border | --color-hot-pink | --color-blush |
| Secondary button text | --color-hot-pink | --color-core-pink |
| Hover state (all pink elements) | --color-core-pink | Darken hot-pink manually |
| Active/selected state | --color-hot-pink | Any other color |
| Input border default | --color-blush | --color-gray-light |
| Input border focus | --color-core-pink | --color-hot-pink |
| Card background | --color-white | --color-soft-white |
| Page/section background alt | --color-soft-white OR --color-petal | White only |
| Tags and pills | --color-candy bg + --color-core-pink text | Any other combo |
| Body text | --color-ink | --color-gray-dark |
| Secondary/caption text | --color-gray-mid | --color-gray-dark |
| Nav background | --color-white | Any pink |
| Nav links default | --color-ink | |
| Nav links hover | --color-hot-pink | |
| Footer background | --color-ink | --color-hot-pink |
| Footer text | --color-white | |
| Footer links | --color-blush | |
| Headings | --color-ink | --color-hot-pink (except hero) |
| Hero heading | --color-white OR --color-hot-pink | --color-ink |

---

## 3. TYPOGRAPHY — COMPLETE SPECIFICATION

### Font Stack
```css
/* Import in <head> of every HTML file */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

/* CSS Variables */
:root {
  --font-display: 'Josefin Sans', sans-serif;   /* Logo, hero headlines, nav brand */
  --font-heading: 'DM Sans', sans-serif;         /* Section headers, card titles, CTAs */
  --font-body: 'DM Sans', sans-serif;            /* Body copy, descriptions, UI */
  --font-editorial: 'Playfair Display', serif;   /* Pull quotes, special moments ONLY */
}
```

### Type Scale
```css
:root {
  /* DISPLAY — Hero only */
  --text-display: clamp(48px, 7vw, 80px);
  --text-display-weight: 300;               /* Josefin Sans Light */
  --text-display-spacing: 0.08em;           /* Wide tracking — signature of brand */

  /* HEADINGS */
  --text-h1: clamp(36px, 5vw, 56px);
  --text-h2: clamp(28px, 4vw, 40px);
  --text-h3: clamp(20px, 3vw, 28px);
  --text-h4: clamp(18px, 2.5vw, 22px);
  --text-heading-weight: 500;

  /* BODY */
  --text-body-lg: 18px;
  --text-body: 16px;
  --text-body-sm: 14px;
  --text-body-weight: 400;
  --text-body-line-height: 1.7;

  /* UI ELEMENTS */
  --text-label: 12px;
  --text-label-weight: 500;
  --text-label-spacing: 0.08em;
  --text-micro: 11px;

  /* BUTTON TEXT */
  --text-btn: 14px;
  --text-btn-weight: 600;
  --text-btn-spacing: 0.05em;
}
```

### Typography Rules
- Logo/wordmark ALWAYS uses Josefin Sans Light (300) with wide letter-spacing (0.08em+)
- The O in PinkCore ALWAYS replaced by the pilates ring SVG — NEVER type the letter O
- Section headings use DM Sans 500
- Body copy uses DM Sans 400
- Pull quotes and tagline moments use Playfair Display Italic
- ALL CAPS with letter-spacing ONLY for labels, tags, nav items — never body copy
- NEVER use system fonts, Arial, Roboto, or Inter

---

## 4. LOGO SYSTEM — EXACT SPECIFICATIONS

### The PinkCore Ring (SVG — use this EXACT code everywhere)
```svg
<!-- The pilates ring that replaces the O -->
<!-- Scale by changing width/height proportionally -->
<svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="22" r="13" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="16" cy="9" r="4.5" fill="currentColor"/>
  <circle cx="16" cy="35" r="4.5" fill="currentColor"/>
</svg>
```

### Logo HTML Component (primary — dark text on white)
```html
<div class="pinkcore-logo">
  <span class="logo-pink">PINK</span>
  <span class="logo-core">C</span>
  <svg class="logo-ring" width="32" height="44" viewBox="0 0 32 44" fill="none">
    <circle cx="16" cy="22" r="13" stroke="#E8005A" stroke-width="2.5"/>
    <circle cx="16" cy="9" r="4.5" fill="#E8005A"/>
    <circle cx="16" cy="35" r="4.5" fill="#E8005A"/>
  </svg>
  <span class="logo-core">RE</span>
</div>
```

```css
.pinkcore-logo {
  display: flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
}
.logo-pink { color: var(--color-ink); }
.logo-core { color: var(--color-hot-pink); }
.logo-ring { margin: 0 2px; flex-shrink: 0; }
.logo-tagline {
  display: block;
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.35em;
  color: var(--color-core-pink);
  text-transform: uppercase;
  text-align: center;
  margin-top: 4px;
}
```

### Logo Versions
| Version | Background | Text Color | Ring Color | Use Case |
|---|---|---|---|---|
| Primary | White | Ink #1A1A1A | Hot Pink #E8005A | Nav, landing page, light sections |
| Reversed | Hot Pink #E8005A | White | White | Hero overlays, dark sections |
| Dark Mode | Ink #1A1A1A | White (PINK) + Hot Pink (CORE) | Hot Pink | Dark footer, dark cards |
| Blush | Petal #FBEAF0 | Core Pink #D4537E | Core Pink | Editorial sections |

### Logo Rules — NEVER violate these
- NEVER stretch or distort
- NEVER use fonts other than Josefin Sans Light
- NEVER remove the ring — it is non-negotiable
- NEVER add drop shadows or effects to the logo
- NEVER enclose logo in a box/container
- NEVER place primary logo on dark/busy backgrounds — use reversed version
- MINIMUM SIZE: 120px wide

---

## 5. SPACING SYSTEM
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* SECTION PADDING */
  --section-padding-y: clamp(60px, 8vw, 120px);
  --section-padding-x: clamp(20px, 5vw, 80px);

  /* CONTAINER */
  --container-max: 1200px;
  --container-padding: clamp(20px, 5vw, 60px);
}
```

---

## 6. BORDER RADIUS
```css
:root {
  --radius-sm: 4px;       /* Tags, small elements */
  --radius-md: 8px;       /* Buttons, inputs */
  --radius-lg: 12px;      /* Cards */
  --radius-xl: 16px;      /* Large cards, modals */
  --radius-pill: 9999px;  /* Pills, tags, round buttons */
  --radius-circle: 50%;   /* Avatars, icons */
}
```

---

## 7. SHADOWS
```css
:root {
  --shadow-sm: 0 1px 3px rgba(232, 0, 90, 0.08);
  --shadow-md: 0 4px 16px rgba(232, 0, 90, 0.12);
  --shadow-lg: 0 8px 32px rgba(232, 0, 90, 0.16);
  --shadow-card: 0 2px 12px rgba(26, 26, 26, 0.08);
  --shadow-card-hover: 0 8px 32px rgba(26, 26, 26, 0.16);
}
```

---

## 8. BUTTON SYSTEM
```css
/* PRIMARY BUTTON */
.btn-primary {
  background: var(--color-hot-pink);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--text-btn);
  font-weight: var(--text-btn-weight);
  letter-spacing: var(--text-btn-spacing);
  padding: 14px 32px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover { background: var(--color-core-pink); }
.btn-primary:active { transform: scale(0.98); }

/* SECONDARY BUTTON */
.btn-secondary {
  background: var(--color-white);
  color: var(--color-hot-pink);
  font-family: var(--font-heading);
  font-size: var(--text-btn);
  font-weight: var(--text-btn-weight);
  letter-spacing: var(--text-btn-spacing);
  padding: 13px 32px;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--color-hot-pink);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-secondary:hover {
  background: var(--color-petal);
  border-color: var(--color-core-pink);
  color: var(--color-core-pink);
}

/* GHOST BUTTON (on dark/pink backgrounds) */
.btn-ghost {
  background: transparent;
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--text-btn);
  font-weight: var(--text-btn-weight);
  padding: 13px 32px;
  border-radius: var(--radius-md);
  border: 1.5px solid rgba(255,255,255,0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.15);
  border-color: var(--color-white);
}

/* CTA SIZES */
.btn-lg { padding: 18px 48px; font-size: 16px; }
.btn-sm { padding: 10px 20px; font-size: 12px; }
```

---

## 9. ANIMATION TOKENS
```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
  --transition-page: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --animation-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Fade up animation — use for section reveals */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.6s var(--transition-page) forwards;
  opacity: 0;
}
.animate-delay-1 { animation-delay: 0.1s; }
.animate-delay-2 { animation-delay: 0.2s; }
.animate-delay-3 { animation-delay: 0.3s; }
.animate-delay-4 { animation-delay: 0.4s; }
```

---

## 10. SOCIAL HANDLES (for footer and meta)
- Instagram: @pinkcore
- Domain: pinkcore.app
- Backup domain: getpinkcore.com
- Email: hello@pinkcore.app
- Studio inquiries: studio@pinkcore.app

---

## 11. APP STORE BADGES
- Include Apple App Store badge (placeholder until live)
- Include Google Play badge (placeholder until live)
- Both badges should link to # until app is published
- Use official Apple/Google badge assets — never custom design these

---

## FINAL RULE
If ANY design decision is not covered in this file, default to:
1. Hot Pink (#E8005A) for any actionable/interactive element
2. Josefin Sans for any display text
3. DM Sans for any body/UI text
4. White or Soft White for any background
5. Ink (#1A1A1A) for any text
THEN add the missing spec to this file immediately.
