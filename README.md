# PPLPPL Tracker

A clean, minimal powerbuilding program tracker. Fully client-side — no login, no server, all data in localStorage.

## Features

- **Paste & Parse** — Paste Strength Log exports (Swedish format), auto-detects workout type and strips warmup sets
- **Dashboard** — Cycle week, peptide tracker, recent sessions, quick stats, bodyweight trend
- **Progress Charts** — Estimated 1RM and working weight trends for key lifts
- **Volume Tracker** — Weekly sets per muscle group with color-coded target ranges
- **Warmup Calculator** — Auto-generates warmup sequences based on exercise category
- **1RM Estimator** — Epley, Brzycki, and Lombardi formulas + auto-calculated from logs
- **Next Session Recommendations** — Weight progression advice based on rep range targets
- **Data Backup** — Export/import JSON, fully offline

## Deployment to GitHub Pages

1. Create a repository named `pplppl` on GitHub
2. Push this code:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/pplppl.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Set source to **Deploy from a branch**, select `main`, root `/`
5. Your site will be live at `https://YOUR_USERNAME.github.io/pplppl`

## File Structure

```
index.html  — SPA shell, navigation
style.css   — All styles (responsive, mobile-first)
app.js      — Application logic (routing, parser, data, charts)
```

## Tech Stack

- Plain HTML/CSS/JS — no build step
- Chart.js (loaded from CDN) for progress graphs
- Playfair Display (Google Fonts) for headings
- localStorage for all data persistence
