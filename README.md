# Struc website

The site for [struc.co.uk](https://struc.co.uk). It is a static site built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it locally

You need Node.js 22 or later.

```sh
npm install      # first time only
npm run dev      # local preview at http://localhost:4321, updates as you edit
npm run build    # build the finished site into dist/
npm run preview  # serve the built site from dist/
```

## Add or edit a case study

Each case study is one Markdown file in `src/content/work/`. The file name becomes the URL: `charity-donor-data.md` is published at `/work/charity-donor-data/`.

To add one, copy an existing file, rename it and edit it. Everything sits between the two `---` lines at the top, and the page lays it out for you:

```yaml
title: Donor data a fundraising team can rely on   # page heading and card title
clientType: An Oxfordshire charity                 # never a client name
tag: Charity                                       # short tag shown on the card
services: [Build, Support]                         # any of Review, Build, Measure, Support
summary: One sentence, used on cards and in search results.

stats:                                             # optional number cards, up to three
  - value: "99.8%"                                 # the first one is also shown on the card
    caption: donor data accuracy, up from 65%

challenges:                                        # peach panel: short title + one sentence
  - title: Data in several places
    text: "Supporter data still ended up in several places."

diagram:                                           # optional picture
  title: What we built
  layout: flow                                     # flow = boxes joined by arrows, grid = boxes only
  items:
    - name: Supporter data
      note: CRM and other platforms                # note is optional
    - name: Reports
  caption: "Optional sentence under the picture."

stepsTitle: What we did                            # heading above the numbered circles
steps:
  - title: Review
    text: "One sentence."

outcomesTitle: What changed                        # heading on the teal band
outcomes:
  - title: Accurate donor data
    text: "Donor data accuracy rose from 65% to 99.8%."

quotes:                                            # optional, shown with no name
  - "A verbatim quote."

featured: true                                     # true = show on the homepage
order: 1                                           # position on the Work page
draft: false                                       # true = leave out of the site entirely
```

Put text in double quotes if it contains a colon. Any Markdown written below the second `---` is shown as extra text after the quotes, but it is not needed.

Things to remember:

- This repository is public. Describe clients by type and never name them.
- The homepage shows the first three case studies with `featured: true`, sorted by `order`.
- A case study with `draft: true` is not built at all, so it is safe to keep unfinished work there.

## Where things live

| What | Where |
|---|---|
| Email, booking link, LinkedIn links, company number, menu links | `src/data/site.ts` |
| The four services (homepage cards and the Services page) | `src/data/services.ts` |
| Case studies | `src/content/work/` |
| Other page copy | `src/pages/` (one `.astro` file per page) |
| Header, footer and other shared pieces | `src/components/` |
| Colours, fonts and base styles | `src/styles/global.css` |
| Logo and founder photo | `src/assets/` |
| Favicons, share image, `CNAME`, `robots.txt`, redirects for old URLs | `public/` |

## Publishing

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repository settings, Pages must have its source set to "GitHub Actions".
