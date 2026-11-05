# BVOSales frontend

Next.js 16 App Router site for BVOSales, built from the developer handoff in `../contents`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Hanken Grotesk + Helvetica Neue (design system)

## Getting started

```bash
cd bvo-sale-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Page | Path |
| --- | --- |
| Home | `/` |
| Sell | `/sell` |
| Exit Ready | `/exit-ready` |
| Buy | `/buy` |
| Accountants & advisers | `/accountants-advisers` |
| About | `/about` |
| Insights | `/insights` |
| Article | `/insights/[slug]` |
| Start chooser | `/start` |
| Seller questionnaire | `/sell/questionnaire` |
| Buyer questionnaire | `/buy/questionnaire` |
| Adviser questionnaire | `/accountants-advisers/questionnaire` |
| Privacy / Terms | `/privacy`, `/terms` (placeholders) |

## Content sources

- Page copy and SEO: `../contents/pages/`
- Articles: `content/articles/` (copied from handoff)
- Assets: `public/assets/` (brand, team, article illustrations)
- Design tokens: `src/app/globals.css`

## Notes

- Questionnaire routing thresholds stay server/CRM-side (not exposed in client code).
- Privacy, terms, buyer fees, valuation “from” price and a few FAQ placeholders remain open per the handoff.
