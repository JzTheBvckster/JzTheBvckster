# Contributing

Thanks for caring enough to improve this portfolio.

This is a personal portfolio, so changes should stay focused on clarity, polish, accessibility, performance, and accurate representation of Jonzelle Otieno's work.

## Local Setup

```bash
npm install
npm run dev
```

## Before Opening a Pull Request

Run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

For UI changes, check at least:

- Home page
- Work page
- Services page
- About page
- Mobile viewport around 390px wide
- Desktop viewport around 1440px wide

## Content Guidelines

- Keep claims accurate and grounded in the portfolio data.
- Do not invent client work, years of experience, metrics, or technologies.
- Add new projects and services through `app/data/portfolio.ts` where possible.
- Prefer reusable components under `app/components/` over one-off markup.

## Design Guidelines

- Preserve the neobrutalist character.
- Keep layouts responsive and scannable.
- Avoid excessive whitespace on operational pages.
- Use icon buttons where icons are clearer than text.
- Keep text readable, high-contrast, and accessible.

## Pull Request Style

Include:

- What changed
- Why it changed
- Screenshots for visual changes
- Checks run locally
