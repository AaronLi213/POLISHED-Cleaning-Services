# Polished Cleaning Service — Website

**polished.website** — Worcester, MA's friendliest cleaning crew.

## About This Site
Built for Izabela Sztejner and the Polished Cleaning Service team. Clean, warm design with a friendly (not stuffy) tone, multiple pages, real review screenshots, and an easy booking form.

## Pages
| File | Page |
|------|------|
| `index.html` | Homepage |
| `pages/services.html` | Services & Pricing |
| `pages/about.html` | About Izabela & the Team |
| `pages/reviews.html` | Reviews (Google + Facebook) |
| `pages/book.html` | Book a Cleaning Appointment |

## File Structure
```
polished-site/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All styles
├── js/
│   └── layout.js           ← Shared nav + footer
├── images/
│   ├── image_2026-06-10_214142134.png     ← Tiffany K review screenshot
│   ├── Screenshot_2026-06-10_214055.png   ← Brianne Erban review screenshot
│   └── Screenshot_2026-06-10_214104.png   ← Brandon Dobnick review screenshot
└── pages/
    ├── services.html
    ├── about.html
    ├── reviews.html
    └── book.html
```

## Tech Stack
- Pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step
- Google Fonts: Fraunces (display) + DM Sans (body)
- Fully responsive (mobile-friendly)
- No external dependencies

## Deploying to GitHub Pages
1. Push all files to your GitHub repo
2. Go to **Settings → Pages**
3. Set source to **main branch / root folder**
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Connecting the Booking Form
The current form shows a success message on submit but doesn't send any data (it's a static site). To make it actually send booking requests, connect it to one of these free services:
- **[Formspree](https://formspree.io)** — add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the `onsubmit` handler
- **[EmailJS](https://www.emailjs.com)** — plug in directly via JavaScript
- **[Google Forms](https://forms.google.com)** — embed or redirect to a Google Form for simplicity

## Contact Info Embedded
- Phone: (508) 335-4191
- Email: izabela.sztejner@gmail.com
- Address: 66 Crest Cir, Worcester MA 01603
- Facebook: https://www.facebook.com/PolishedMAwoo/
- Hours: Mon–Sat, 7AM–5PM

---
*Nearly 20 years of making Worcester homes shine. Now under the name Polished.*
