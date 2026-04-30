# HAUS OF BOBA — 3D Marketing Website

## Original problem statement
Build a 3D website for HAUS OF BOBA, a bubble tea store in Sachse, Texas (4325 Miles Rd, Suite 108, Sachse, TX 75048 · (214) 501-3231 · hausofboba.net · 4.4★ 317 reviews). Use the user-provided 3D boba drink video as the hero/transition. Match the brand logo (deep forest green + cream, geometric "haus of boba" wordmark, "Good Tea · Good Time · All The Time").

## User choices
- Marketing-only (no ordering backend)
- Full immersive scroll-driven 3D world
- 3D boba video used in the hero
- All sections: Hero, Menu, About, Gallery, Reviews, Location, Footer
- Visual vibe: match the logo (deep green + cream)

## Architecture
- Frontend: React 19 + CRA + Tailwind, Framer Motion, Lenis smooth scroll, lucide-react icons
- Backend: existing FastAPI template (untouched, no API needed for marketing site)
- 3D hero video: provided .mov converted to MP4 + WEBM at /app/frontend/public/boba-hero.{mp4,webm} (browser-compatible H.264 / VP9)
- Fonts: Outfit (display) + Manrope (body) via Google Fonts

## Implemented (Iteration 1)
- Brand-faithful loader splash with progress bar
- Sticky-glass nav with anchor links + Order CTA
- Hero with sticky 3D boba video, scroll-linked scale/translate/rotate, massive editorial typography "haus / of / boba."
- Outline-text marquee strip
- About section with parallax interior image + stats
- Menu with 6 categories (Signatures, Milk Tea, Fruit Tea, Smoothies, Coffee, Snacks), animated tab-based reveal, dotted-leader prices
- Gallery (asymmetric editorial grid)
- Reviews carousel on deep-green section
- Location with hours table, Google Maps embed, pickup/delivery CTAs
- Footer with newsletter, address, phone, social links, massive "haus of boba." typography
- Custom mix-blend cursor on desktop
- Lenis smooth scroll
- All interactive elements have data-testid

## Backlog (P1/P2)
- P1: Real online ordering (Toast / Square embed)
- P1: Connect newsletter to Mailchimp / SendGrid
- P2: Add "drink builder" interactive boba customizer
- P2: Replace iframe map with Mapbox styled map
- P2: Live store status (open/closed) from backend
- P2: Loyalty program / Punch card

## Next tasks
- Validate visually with the user. If approved, wire up newsletter + add real ordering link.
