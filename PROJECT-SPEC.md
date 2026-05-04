# PROJECT-SPEC.md — PinkCore Web (Landing Page)
# Version 1.0 | pinkcore-web
# Built by BotMakers.ai

---

## CRITICAL CONTEXT — READ THIS FIRST
This is the landing page and marketing website for PinkCore — a pilates class
discovery and booking mobile app. This website has ONE primary job: collect
waitlist signups from two audiences before the app launches.

This is NOT the app itself. The app lives in the `pinkcore-app` repo.
This site lives at pinkcore.app and is built on the BRIX HTML/CSS/JS template.

---

## 1. WHAT IS PINKCORE

PinkCore is a mobile-first discovery marketplace for pilates classes.
Think Eventbrite meets Yelp — built specifically for the pilates community.

A consumer opens the app, turns on location, and instantly sees every pilates
class available near them — starting now, today, or this week. They can book
a drop-in, sign up for a trial, or register for a one-off pilates event in
under 60 seconds.

Studios and gyms list their classes on PinkCore. Consumers discover and book them.
PinkCore connects supply (studios) and demand (pilates lovers).

**Launch Market:** Houston, Texas (v1 only — do NOT reference other cities)
**Platform:** iOS and Android mobile app
**Website:** pinkcore.app (this repo)
**App subdomain:** app.pinkcore.app (separate repo — pinkcore-app)

---

## 2. THE TWO AUDIENCES THIS SITE MUST CONVERT

### Audience A — Consumers (Pilates Lovers)
**Who they are:** Women 25-45 in Houston who do pilates or want to try it.
They're on Instagram, they know their reformer from their magic circle,
and they want to find classes without Googling 10 different studio websites.

**What they want from this site:**
- Understand what PinkCore does in under 10 seconds
- Get excited that this product exists
- Sign up to be notified when the app launches
- Download the app when it's live

**CTA for consumers:** "Get Early Access" → email waitlist form

### Audience B — Studios (Pilates Studios + Gyms)
**Who they are:** Boutique pilates studio owners, independent instructors,
and full-service gym owners who offer pilates classes in Houston.
They're busy, skeptical of new platforms, and protective of their client base.

**What they want from this site:**
- Understand how PinkCore gets them new clients
- See that it's free to list
- Understand the tier options
- Sign up to list their studio before launch

**CTA for studios:** "List Your Studio Free" → studio interest form

---

## 3. SITE STRUCTURE — ALL PAGES AND SECTIONS

### Page: index.html (single page — all sections on one page)

#### Section 1: NAV
**Elements:**
- PinkCore logo (left) — use logo component from DESIGN-SYSTEM.md
- Nav links (right): How It Works | For Studios | Pricing | Get Early Access
- "List Your Studio" button (CTA — btn-secondary style)
- Mobile: hamburger menu collapsing to full-screen overlay nav
- Nav behavior: transparent on hero, white + shadow on scroll (JS scroll listener)
- Nav position: fixed/sticky

#### Section 2: HERO
**Purpose:** Instantly communicate what PinkCore is and capture email
**Layout:** Full viewport height, split — left text, right phone mockup
**Headline:** "Find Your Class." (Josefin Sans Light, display size, Hot Pink)
**Subheadline:** "Discover pilates classes near you — starting now, today, or whenever you're ready. Houston's pilates community, all in one place."
**CTAs:**
- Primary: "Get Early Access" → scrolls to or opens waitlist form
- Secondary: "List Your Studio Free" → scrolls to studio section
**Background:** White with subtle pink gradient mesh in top-right corner
**Phone mockup:** Placeholder phone image showing app UI (class discovery screen)
**Animation:** Headline fades up on load, subheadline fades up with delay, CTAs fade up with delay, phone slides in from right

#### Section 3: SOCIAL PROOF BAR
**Purpose:** Build instant credibility
**Content:** "Houston's pilates community is joining PinkCore"
**Elements:** Stats row — "200+ Studios" | "5,000+ Classes/Month" | "Free to List" | "iOS + Android"
NOTE: Use these numbers as launch targets/projections — mark them clearly as "at launch" or rephrase as goals
**Style:** White background, hot pink stat numbers, gray labels

#### Section 4: HOW IT WORKS — CONSUMER
**Headline:** "Find your class in 60 seconds."
**Subheadline:** "No more Googling 10 different studio websites. PinkCore shows you every pilates class near you, right now."
**3 steps:**
1. "Open the app" — Turn on location, see every pilates class near you on a live map
2. "Find your class" — Filter by type, time, price, and distance. See what's starting soon.
3. "Book instantly" — Reserve your spot, pay, and get confirmation — all in under 60 seconds.
**Style:** Alternating layout — step number (large, light pink), icon, text. Clean, minimal.

#### Section 5: CONSUMER FEATURES
**Headline:** "Everything you need to find your perfect class."
**Feature cards (6 cards in 3x2 grid):**
1. "Starting Soon Near You" — See classes starting in the next hour, today, or this week
2. "Trial Classes" — First-timers welcome. Find studios offering trial classes near you
3. "Drop-In Friendly" — No membership required. Book one class at a time, any studio
4. "Map Discovery" — See every class pin on a live map. Find what's closest to you right now
5. "One-Off Events" — Pop-up pilates, workshops, outdoor sessions. Never miss a special event
6. "Your Home Studio" — Set a favorite studio. See their full schedule front and center
**Style:** Cards with hot pink icon, ink heading, gray body. Hover: subtle pink border + shadow lift.

#### Section 6: HOW IT WORKS — STUDIO
**Headline:** "Get discovered by pilates lovers in your city."
**Subheadline:** "List your studio free. Reach clients who are actively looking for classes right now."
**3 steps:**
1. "Create your listing" — Add your studio profile, class schedule, and pricing in under 10 minutes
2. "Connect your scheduler" — Already use Mindbody, Mariana Tek, or another platform? Connect it in one click
3. "Watch the bookings come in" — New clients discover your classes and book directly through PinkCore
**CTA:** "List Your Studio Free →"

#### Section 7: STUDIO TIERS / PRICING
**Headline:** "Simple, transparent pricing."
**Subheadline:** "Start free. Only pay when you grow."
**3 tier cards:**

STARTER (Free):
- $0/month
- $1.00 per booking through PinkCore
- Basic studio listing
- Class schedule visible
- Consumer bookings
- Perfect for new studios
- CTA: "Start Free"

GROWTH ($49/month):
- $0.50 per booking
- Everything in Starter
- Featured placement in search
- Push notifications to nearby users
- Trial class badge
- Analytics dashboard
- CTA: "Get Started"
- Badge: "Most Popular" (hot pink badge)

PRO ($99/month):
- Flat fee — no per-booking charge
- Everything in Growth
- Promoted event listings
- Lead capture to your email list
- SMS retargeting to viewers
- Priority support
- CTA: "Get Started"

**Style:** 3 cards, Growth card slightly elevated with hot pink border. Mobile: stacked.

#### Section 8: STUDIO FEATURES
**Headline:** "Built for studio owners who don't have time for complicated software."
**4 feature blocks:**
1. "Self-Serve Setup" — Go live in under 10 minutes. No calls, no demos, no waiting.
2. "Connect Your Scheduler" — Works with Mindbody, Mariana Tek, Arketa, Push Press, and more. One click to connect.
3. "Your Classes, Your Brand" — Full control over how your studio looks on PinkCore. Photos, descriptions, instructor bios.
4. "Real Bookings" — Not just views. PinkCore sends you clients who are ready to book right now.

#### Section 9: CONSUMER WAITLIST FORM
**Headline:** "Be first to know when PinkCore launches in Houston."
**Subheadline:** "Join the waitlist and get early access before we go live."
**Form fields:**
- First name (required)
- Email address (required)
- Zip code (optional — for launch area targeting)
- Checkbox: "I'm a studio owner — I want to list my studio" (routes to studio follow-up)
**Submit button:** "Get Early Access" (btn-primary full width)
**Success state:** "You're on the list! 🩷 We'll be in touch before launch."
**Form submission:** Sends to Resend email list — tag as "consumer_waitlist"
**Validation:** Real-time email format validation, required field highlights

#### Section 10: STUDIO CTA SECTION
**Background:** Hot Pink (#E8005A)
**Headline:** "Your classes deserve to be discovered." (white, Josefin Sans)
**Subheadline:** "Join hundreds of Houston studios listing on PinkCore. Free forever to get started." (white, slightly transparent)
**CTA:** "List Your Studio Free →" (btn-ghost)
**Sub-CTA:** "Questions? Email studio@pinkcore.app" (link, white)

#### Section 11: FAQ
**Headline:** "Common questions."
**FAQ items (accordion on mobile, expanded on desktop):**
1. Q: "Is it really free to list my studio?" A: "Yes. The Starter tier is completely free. You only pay $1 per booking that comes through PinkCore. No monthly fee until you're ready to upgrade."
2. Q: "I already use Mindbody / Mariana Tek / another platform. Do I have to switch?" A: "Never. PinkCore connects to your existing scheduler. Your classes sync automatically. You keep using whatever you already use."
3. Q: "How is PinkCore different from ClassPass?" A: "ClassPass charges studios a discounted rate and controls pricing. On PinkCore, you set your own prices and keep your client relationships. We're a discovery tool, not a middleman that devalues your memberships."
4. Q: "When does the app launch?" A: "We're launching in Houston in 2026. Sign up for early access and you'll be the first to know."
5. Q: "Can I list a drop-in class and a special event?" A: "Yes — both. Regular classes, drop-in slots, one-off workshops, pop-up sessions. If it's pilates and it has a time and a place, it belongs on PinkCore."
6. Q: "What if I'm just a solo instructor, not a studio?" A: "PinkCore works for independent instructors too. Create a profile, add your schedule, and reach clients looking for exactly what you teach."

#### Section 12: FOOTER
**Layout:** 4 columns on desktop, stacked on mobile
**Column 1:** PinkCore logo + tagline "Find Your Class." + Instagram link
**Column 2:** Product links — How It Works, For Studios, Pricing, Get Early Access
**Column 3:** Company links — About, Contact, Privacy Policy, Terms of Service
**Column 4:** Contact — hello@pinkcore.app, studio@pinkcore.app, Instagram @pinkcore
**Bottom bar:** "© 2026 PinkCore. Built by BotMakers.ai in Houston, TX."
**Style:** Ink (#1A1A1A) background, white text, blush links

---

## 4. FORMS — TECHNICAL SPECIFICATION

### Consumer Waitlist Form
**Method:** POST to backend endpoint OR direct Resend API call
**Endpoint:** /api/waitlist (create this as a simple JS fetch)
**Fields stored:** first_name, email, zip_code, is_studio_owner, timestamp, source
**On success:** Show success message, hide form, log to console
**On error:** Show "Something went wrong. Try again." message
**Spam protection:** Honeypot field (hidden, if filled = bot)
**Email notification:** Send confirmation to user email via Resend
**Confirmation email subject:** "You're on the PinkCore waitlist! 🩷"
**Confirmation email body:** Warm, brand-voice message confirming their spot

### Studio Interest Form (separate page or modal)
**Trigger:** "List Your Studio Free" CTA
**Fields:** Studio name, owner name, email, phone, city/zip, current booking platform (dropdown: Mindbody/Mariana Tek/Arketa/Push Press/Other/None)
**On submit:** Email to studio@pinkcore.app + confirmation to studio owner
**Tag in Resend:** "studio_interest"

---

## 5. SEO SPECIFICATION

### Meta Tags (in <head> of index.html)
```html
<title>PinkCore — Find Pilates Classes Near You | Houston</title>
<meta name="description" content="Discover and book pilates classes near you with PinkCore. Drop-in classes, trial sessions, and one-off events — all on one app. Launching in Houston.">
<meta name="keywords" content="pilates classes Houston, pilates near me, book pilates class, reformer pilates Houston, drop-in pilates">
<meta property="og:title" content="PinkCore — Find Your Class">
<meta property="og:description" content="Houston's pilates discovery app. Find classes near you, book instantly.">
<meta property="og:image" content="/images/og-image.png"> <!-- 1200x630px -->
<meta property="og:url" content="https://pinkcore.app">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://pinkcore.app">
```

### Favicon
- `/favicon.ico` — 32x32 pilates ring mark on white
- `/favicon-192.png` — 192x192 for Android
- `/apple-touch-icon.png` — 180x180 for iOS

---

## 6. PERFORMANCE REQUIREMENTS
- Page load: under 3 seconds on 4G
- All images: WebP format with JPG fallback
- CSS: single minified file for production
- JS: minimal — only what's needed for nav, forms, animations
- No jQuery — vanilla JS only
- Google Fonts: preconnect + display=swap

---

## 7. RESPONSIVE BREAKPOINTS
```css
/* Mobile first */
/* sm */ @media (min-width: 640px) {}
/* md */ @media (min-width: 768px) {}
/* lg */ @media (min-width: 1024px) {}
/* xl */ @media (min-width: 1280px) {}
```

---

## 8. FILE STRUCTURE
```
pinkcore-web/
├── index.html              (main landing page)
├── privacy.html            (privacy policy)
├── terms.html              (terms of service)
├── css/
│   ├── design-system.css   (all CSS variables from DESIGN-SYSTEM.md)
│   ├── main.css            (all page styles)
│   └── animations.css      (animation keyframes)
├── js/
│   ├── main.js             (nav scroll, mobile menu, animations)
│   └── forms.js            (form submission, validation)
├── images/
│   ├── logo/               (all logo versions as SVG/PNG)
│   ├── app-mockups/        (phone mockup images)
│   ├── og-image.png        (1200x630 social share image)
│   └── favicon files
└── fonts/                  (if self-hosting — otherwise Google Fonts CDN)
```

---

## 9. DEPLOYMENT
- Host: Vercel (free tier)
- Repo: github.com/[org]/pinkcore-web
- Domain: pinkcore.app (connected in Vercel)
- Auto-deploy: main branch → production
- Preview deploys: all other branches
- No build step needed — static HTML/CSS/JS deploys directly

---

## 10. SUCCESS METRICS
The landing page is successful when:
- 500+ consumer email signups before app launch
- 50+ studio interest form submissions before launch
- Page loads in under 3 seconds
- Mobile experience matches desktop quality
- Zero broken links or form errors
