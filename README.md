# Tula's International School — Homepage Redesign

A responsive single-page redesign of the Tula's International School homepage for a frontend developer assessment.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS
- Framer Motion
- Lucide React
- Vercel-ready

## Live Demo

[View Live Website](https://tis-homepage-redesign-wine.vercel.app/)

## Implemented assessment requirements

- Custom desktop cursor with hover reaction
- Scroll-triggered section reveals
- Animated light/dark theme switcher
- Scroll progress indicator
- Responsive navigation with mobile menu
- Semantic page sections and accessible labels
- Responsive layouts for desktop, tablet and mobile
- Admission CTAs connected to the official TIS admission portal

## Content and visual direction

The redesign uses TIS's publicly available homepage content and preserves recognizable brand elements including the red/turquoise palette, the Tulas logo, the “LET'S DO it with Tulas” messaging, admission CTA, school statistics, boarding positioning and sports content.

Official source: https://tis.edu.in/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production check

```bash
npm run build
npm start
```

## Deploy

Push the repository to GitHub and import it into Vercel. Vercel automatically detects the Next.js project.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ClientFeatures.tsx
  Navbar.tsx
  Reveal.tsx
```
