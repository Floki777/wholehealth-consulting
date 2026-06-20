# Whole Health Consulting — Claude Code Project Brief

## Project Overview
Hand-coded HTML/CSS/JS wellness website for Whole Health Consulting.
Built in VS Code. Hosted via GitHub Pages or Netlify.
DNS currently managed through Wix — will point to deployed site.

## GitHub Repository
https://github.com/floki777/wholehealth-consulting

## Domain
wholehealth.consulting (purchased through Wix)

## Logo
File: `images/logo.png`
New simplified logo — clean dark green and gold minimal design.
Features: cross, meditating woman, Bible, 5 wellness pillars (Supplements,
Clean Food, Exercise, Beauty, Faith). Dark forest green (#21441F) with
gold (#C8A951) accents. White background.

## Brand Colors
- PRIMARY:   #2C7873  (deep teal)
- SECONDARY: #6FB98F  (sage green)
- ACCENT:    #C8B89A  (warm sand)
- GOLD:      #C8A951  (brand gold)
- DARK:      #21441F  (logo dark green — use for text and dark elements)
- OFF-WHITE: #F8F6F2  (warm off-white background)
- CANVAS:    #0D1F1C  (very dark green — hero backgrounds)

## Typography
- Display/Headers: Cormorant Garamond (Google Fonts) — elegant serif
- Body: Inter (Google Fonts) — clean sans-serif

## The Five Content Pillars
1. Peptides & Longevity — BPC-157, TB-500, NAD+, CJC-1295
2. Clean Supplementation — Magnesium, D3/K2, Omega-3, Methylene Blue
3. Clean Beauty — Non-toxic skincare, tallow balm, chemical-free
4. Non-GMO & Whole Food — Gut health, seed oils, fermented foods, raw dairy
5. Biohacking & Wellness — Grounding, cold therapy, breathwork, sleep

## Brand Values & Mission
"Whole Health Consulting exists to help American families reclaim their
health, their kitchens, and their bodies from a system that profits from
their sickness. We champion American-made, veteran-supported, and
family-owned products that are clean, honest, and built the way God
intended — from the soil up. No GMOs. No chemicals. No compromises."

Tags: American Made · Supports Veterans · Non-GMO · Clean Beauty ·
      Organic · Zero Chemicals · Faith-Centered

## Social & Community Links
All links are placeholders — update with real URLs when available:
- Substack:  https://substack.com/@wholehealthconsulting
- Rumble:    https://rumble.com/c/wholehealthconsulting
- TikTok:    https://www.tiktok.com/@wholehealthconsulting
- Pinterest: https://pinterest.com/wholehealthconsulting

## Affiliate Disclosure (required on every page)
"This site contains affiliate links. We may earn a commission on purchases
made through our links at no extra cost to you. Content is for educational
purposes only and does not constitute medical advice."

## Website Sections Required
1. NAV — Fixed. Logo left. Links: Mission, Pillars, Content, Products, About.
         CTA button: "Join Free" → links to Substack.
2. HERO — Full screen dark canvas. Animated logo center. Tagline.
          Two CTAs: "Subscribe Free" + "Our Mission".
3. MISSION — Bold mission statement. Clean off-white background.
             Brand tags row.
4. PILLARS — 5 animated cards. One per pillar. Dark background.
5. CONTENT — Latest from Substack + Rumble + TikTok cards.
6. PRODUCTS — Clean affiliate product grid. "We use this" badges.
7. ABOUT — Brand story. Who we are. Logo visual. Faith-centered.
8. NEWSLETTER — Dark section. Substack embed CTA. TikTok CTA.
9. FOOTER — Logo, nav links, social links, legal links, disclaimer.

## Current File Structure
```
wholehealth-consulting/
  index.html          ← main site file
  css/
    style.css         ← main styles
    animations.css    ← keyframes and scroll animations
    responsive.css    ← mobile breakpoints
  js/
    main.js           ← core JS
    animations.js     ← intersection observer scroll reveals
    nav.js            ← navbar scroll + mobile menu
  images/
    logo.png          ← NEW simplified logo (dark green/gold)
  fonts/              ← empty, using Google Fonts CDN
  video/              ← empty, reserved for future video background
  components/         ← empty, reserved
  README.md
```

## What Needs To Be Done
1. Update logo.png with the new simplified version
2. Review and polish all 9 sections of index.html
3. Ensure all social links are wired correctly
4. Add proper meta tags for SEO (title, description, og:image)
5. Add favicon using the logo
6. Enable GitHub Pages deployment
7. Verify mobile responsiveness on all breakpoints
8. Test all affiliate disclosure text is present
9. Add smooth scroll behavior throughout
10. Final review before DNS cutover from Wix

## Deployment Plan
1. Push final code to GitHub (github.com/floki777/wholehealth-consulting)
2. Enable GitHub Pages in repo settings → Pages → main branch / root
3. Site will be live at: https://floki777.github.io/wholehealth-consulting
4. Then update Wix DNS to point wholehealth.consulting to GitHub Pages
   OR deploy to Netlify for custom domain with free SSL

## DNS Cutover (Wix → GitHub Pages)
In Wix DNS settings add:
- A record:     @  →  185.199.108.153
- A record:     @  →  185.199.109.153
- A record:     @  →  185.199.110.153
- A record:     @  →  185.199.111.153
- CNAME record: www → floki777.github.io

Then in GitHub repo → Settings → Pages → Custom domain:
Type: wholehealth.consulting
Check: Enforce HTTPS

## Notes For Claude Code
- This is a pure HTML/CSS/JS site — NO frameworks, NO React, NO build tools
- Google Fonts loaded via CDN link in head
- All animations use CSS keyframes + Intersection Observer API
- Mobile-first responsive design
- Keep it fast — no unnecessary dependencies
- The withOpacity deprecation warnings in the Flutter app are separate —
  do not touch the Flutter project
- Always commit and push after completing each section
- Use semantic HTML5 elements throughout
- Maintain the dark, premium, editorial aesthetic throughout
