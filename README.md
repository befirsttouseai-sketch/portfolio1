# Pemba Sherpa — Professional Frontend Developer Portfolio

A modern, responsive, accessible, and fast personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed following editorial aesthetics with deep navy (`#101B35`), vibrant orange accents (`#F97316`), crisp typography, and an 8-point spacing system.

---

## 🎨 Design System & Palette

- **Deep Navy:** `#101B35` (Brand identity, typography, dark accents)
- **Primary Orange:** `#F97316` (Buttons, highlights, badges, active states)
- **White Background:** `#FFFFFF` (Predominant background)
- **Light Gray Background:** `#F5F7FA` (Card sections and contrast layers)
- **Primary Text:** `#172033` (Body and high-contrast headings)
- **Secondary Text:** `#64748B` (Descriptions and metadata)
- **Borders:** `#E2E8F0` (Subtle dividers and card outlines)

---

## 🚀 Key Features

1. **Sticky Header & Mobile Drawer:** Responsive navigation bar with custom "PS" monogram, smooth-scroll links with active indicator, and accessible mobile drawer with body scroll lock.
2. **Hero Showcase:** Large typography, real-time availability indicator, call-to-action buttons, and an interactive code window mockup (`DeveloperProfile.tsx`).
3. **About Section:** Narrative introduction, development philosophy, core value cards, and visual profile card.
4. **Technical Skills:** Categorized skill cards (Frontend Development, Styling & UI Architecture, Tools & Workflow) with recognizable tech icons (no arbitrary percentage bars).
5. **Featured Projects (Three Showcases):**
   - **Project 01:** Travel & Tourism Website
   - **Project 02:** Modern Business Website
   - **Project 03:** Personal Portfolio Website
   - High-fidelity browser frame mockups for every project.
   - Interactive **Full Details Modal** for architectural breakdown and feature analysis.
   - Graceful "Link coming soon" status for placeholder URLs.
   - "Have a project in mind?" CTA banner.
6. **Development Approach:** 4-step methodology (01 Understand, 02 Design, 03 Develop, 04 Refine).
7. **Contact Experience:**
   - Accurate contact details: `pembasherpa20@gmaiil.com` and `+977 9851145639`.
   - One-click copy email & phone buttons with clipboard feedback.
   - Validated interactive contact form with error handling and default email app (`mailto:`) fallback launcher.
8. **Footer:** Monogram, quick links, direct contact, dynamic copyright year, and smooth back-to-top button.
9. **Accessibility & SEO:**
   - WCAG 2.2 AA contrast standards.
   - Skip to main content link.
   - `prefers-reduced-motion` CSS overrides.
   - Schema.org JSON-LD structured data (`Person` & `WebSite`).
   - OpenGraph & Twitter cards.
   - Custom SVG favicon (`icon.svg`) with "PS" monogram.

---

## 📂 Project Architecture

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Tailwind v4 theme tokens & accessibility rules
│   ├── icon.svg            # Custom SVG monogram favicon
│   ├── layout.tsx          # SEO metadata, OpenGraph, JSON-LD Schema & SkipLink
│   ├── page.tsx            # Assembled portfolio page
│   └── robots.ts           # Robots indexing configuration
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx # Validated interactive contact form
│   ├── layout/
│   │   ├── Footer.tsx      # Comprehensive site footer with back-to-top
│   │   └── Navbar.tsx      # Sticky navbar with mobile navigation drawer
│   ├── projects/
│   │   ├── ProjectCard.tsx # Showcase card with tags and action status
│   │   ├── ProjectMockup.tsx # High-fidelity custom browser mockups
│   │   └── ProjectModal.tsx # In-depth modal dialog for project details
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── BrandIcons.tsx  # Standalone GitHub and Figma SVGs
│       ├── Button.tsx
│       ├── Monogram.tsx    # "PS" monogram brand mark
│       ├── SectionHeading.tsx
│       └── SkipToContent.tsx
└── data/
    └── portfolioData.ts    # Centralized personal info, skills & project content
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run Local Development Server
```bash
npm run dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📝 Personalization Checklist for Pemba

Before publishing this website to a live custom domain, update the following in `src/data/portfolioData.ts`:

- [ ] **Live Project URLs:** Replace `liveUrl: null` with your actual hosted project demo links.
- [ ] **Repository URLs:** Replace `repoUrl: null` with your public GitHub repositories.
- [ ] **Custom Domain:** When deploying to your custom domain (e.g. `pembasherpa.com`), update `metadataBase` in `src/app/layout.tsx`.
- [ ] **Form Backend (Optional):** If you wish to receive form submissions via Formspree, Resend, or Web3Forms, connect your API endpoint in `src/components/contact/ContactForm.tsx`.
