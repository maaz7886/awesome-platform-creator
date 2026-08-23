# Maaz Patel / Aivalytics — 1:1 rebuild

Rebuild the referenced site as a single scrolling landing page with the same structure, copy, and dark editorial look.

## Visual system

- Near-black background (#111014-ish) with a slightly purple-tinted alternate section band.
- Acid-lime accent (#D6F84C-ish) for highlighted words, buttons, and the marquee bar.
- Warm off-white body text, muted grey secondary text, small salmon/clay uppercase eyebrow labels.
- Two type roles: a tight geometric grotesk for the huge display headlines (with an outlined-stroke variant used on "Real execution.") and a monospace for eyebrows, labels, and buttons.
- Fine 1px hairline dividers and grid borders; generous vertical whitespace between numbered sections.

## Page structure (top to bottom)

1. Fixed header: logo mark, nav (Ways to engage, Who it is for, Campus programs, Contact) with anchor scroll, and a "START A CONVERSATION" outlined lime button.
2. Hero: location tag "BANGALORE · INDIA", role line, three-line display headline ("Technical" / "depth." in lime / "Real execution." outlined), bordered intro paragraph, "CHOOSE AN ENGAGEMENT" lime button + LinkedIn link, "SCROLL TO READ" cue, and a full-height portrait panel on the right.
3. Lime marquee strip: 15,000+ learner interactions · Schools to MBA & engineering · Cross-disciplinary by design · AI knowledge partner.
4. "START HERE — Looking for an AI partner?" two-column intro.
5. "02 / WHAT I DO": four numbered engagement cards (keynote, student bootcamp, faculty enablement, AI-ready campus), each with a GOOD FIT line and "DISCUSS THIS OPTION" link, plus THE FIELD GUIDE topic list.
6. "03 / WHO IT IS FOR": 2x2 bordered grid — institutions, students, faculty, teams & founders.
7. "04 / INSTITUTION BUILDING": headline + CTA on the left, four-row numbered list on the right.
8. "05 / SIGNATURE TOPIC": full lime section with oversized ghost "AI" glyph, "The rise of AI-native companies.", supporting copy, and "INVITE THIS CONVERSATION".
9. "06 / IN THE ROOM": five-step chevron row (Understand → Compare → Demonstrate → Build → Apply), two supporting columns, and the pull quote.
10. "07 / WHY THIS WORK": headline with lime "decision." plus three bordered columns (Technology, Business, Education).
11. "08 / OPEN CHANNEL": "Let's build what's next." with email, phone, LinkedIn, and maazpatel.com links.
12. Footer bar: MAAZ PATEL / AIVALYTICS · BUILT FOR THE NEXT OPERATING MODEL · BANGALORE.

## Interactions

- Smooth anchor scrolling for nav and CTAs; header condenses slightly on scroll.
- Subtle fade/rise reveal on section entry, hover states on cards, links, and buttons.
- Fully responsive: single-column stacking on mobile, portrait moves below the hero copy.

## Technical notes

- One route at `/` (replaces the placeholder index) with section components under `src/components/`.
- All colors, fonts, and accents added as semantic tokens in `src/styles.css`; no hardcoded color utilities in components.
- Route-level `head()` metadata: title "Maaz Patel — AI Platform Architect & Keynote Speaker" plus description, og and twitter tags.
- Every CTA ("START A CONVERSATION", "DISCUSS THIS OPTION", "INVITE THIS CONVERSATION", "DISCUSS A CAMPUS PROGRAM") opens a mailto to maazaivalytics@gmail.com with a prefilled subject — no backend needed.
- Hero portrait: a generated stand-in image in the same dark studio style. Swap in the real photo any time by uploading it.
