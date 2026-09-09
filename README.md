# shyamkotak.com

Personal website for **Shyam Kotak** — software engineer at Shopify. A single
self-contained `index.html`: no build step, no dependencies, no network calls.

## What's in it

- **Interactive fluid hero** — a real-time 2D stable-fluids simulation written
  from scratch in WebGL (WebGL2 preferred, WebGL1 + half-float fallback, graceful
  static gradient if WebGL is unavailable). Velocity + dye ping-pong framebuffers,
  semi-Lagrangian advection, curl + vorticity confinement, 20-iteration Jacobi
  pressure solve, gradient subtraction, and a tonemapped display shader with
  vignette. Drag to stir; it also blooms on load and idles gracefully.
  Honors `prefers-reduced-motion` (renders one calm still frame, no autoplay).
- **Controls** (top-right, collapsible): pause/play, clear dye, cycle color
  palette (Nebula / Ember / Glacier), toggle auto-demo. Plus a live
  fps · sim-resolution readout (bottom-left).
- **Sections**: About, Projects (Balligami, MyPeloStats, WalkTheWorld), Contact,
  footer. Dark theme, system font stack, inline SVG social icons, inline SVG
  favicon.

## Run locally

Just open `index.html` in a modern browser — or serve the folder:

```sh
cd personal-site
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy on Render (Static Site)

1. Push this folder's contents to a GitHub repo (e.g. `shyamkotak/kotak-website`),
   with `index.html` at the **repo root**.
2. In the [Render dashboard](https://dashboard.render.com) → **New +** →
   **Static Site** → connect the repo.
3. Settings:
   - **Build Command:** *(leave empty — there is nothing to build)*
   - **Publish Directory:** `.` (or `/`, the repo root)
4. Deploy. Every push to the tracked branch redeploys automatically.

To use a custom domain (`shyamkotak.com`), add it under the site's
**Settings → Custom Domains** and point DNS at Render as documented there.

## Notes

- Everything is inline: HTML, CSS, JS, GLSL shaders, SVG icons. The only
  outbound URLs are the `href`s on the social/project links themselves.
- Touch: the canvas uses `touch-action: pan-y`, so vertical swipes scroll the
  page while drags stir the fluid.
- Keyboard: `Space` toggles pause.
