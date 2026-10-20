Nexxus Drako Multimedia is the creative umbrella of Pyra Drake (Nexxus Drako): music, novels, game development, streaming and graphic design out of Brisbane. The identity is two colours — maroon and gold — a modular display face, and Nexxus herself inside a gold ring.

## Content fundamentals

- Write in first person as Nexxus ("I", "my"); address readers as "you". The umbrella is "Nexxus Drako Multimedia"; shorten to "NDM" only after first use.
- Be warm, direct and identity-forward. Real copy from nexxusdrako.au sets the tone:
  - "Creative jack-of-all-trades from Brisbane working as a musician, worldbuilder, game developer, and graphic designer."
  - "She/her, they/them. Transfem, nonbinary, autistic, plural, and proudly queer in most directions."
  - "My Twitch, Youtube, and Discord server are all part of the Nexxus Drako Multimedia umbrella."
- Nexxus is a dragon. Describe her as a "cryptid", never a "gremlin".
- Use Australian English spelling (colour, organise).
- Set display lines in uppercase; keep running text in sentence case. No emoji as decoration.
- Every public-facing surface carries the Acknowledgement of Country (stolen Jagera and Turrbal land, sovereignty never ceded) and NDM's queer-by-design statement, with the Intersex-Inclusive Progress Pride flag as the only pride flag. The required wording and rules are in the Values and statements section.

## Colour

- The brand is `maroon` and `gold`. Pair them with each other or with black/white only; add no third brand hue.
- Dark is the primary theme: `surface` is black, `ink` is white, headings in `accent` (gold).
- Use `surface-brand` (maroon) for banners, headers and hero bands; set display text on it in `on-brand` (gold) and body text in white.
- On a gold fill (primary button, highlight chip) put text and icons in `on-gold` (maroon).
- Never set gold text on white or on the light `surface` — it fails at 1.4:1. On light grounds, headings use `accent`, which is maroon there.
- Status colours are colour-blind safe: `success` is blue, not green; `warning` is orange; `danger` is red. Every status also carries a word or icon — never colour alone.
- Draw borders and dividers in `line`; draw the focus ring as a solid 2px `focus` outline with a 2px offset (gold on dark and on maroon, maroon on light).

## Typography

- The display face is **HK Modular**, licensed through Canva. Use it in Canva work for every `display-xl`, `display-l` and `heading` line.
- Where HK Modular isn't licensed (web, code, other tools), use **Orbitron** from Google Fonts as the substitute; the `display` stack falls back to it automatically.
- Set body text (`body`, `body-sm`, `label`) in **Exo 2** (Google Fonts, also in Canva). Load it alongside Orbitron: `https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Orbitron:wght@400;700&display=swap`.
- Display styles are uppercase with slight tracking; never set long passages in the display face.
- Exception: nexxusdrako.au is built on VentraIP's VIPsites builder, which can't load Orbitron or Exo 2. There, set both headings and body text in **Play** (Google Fonts). Keep every other rule: headings in `accent`, uppercase where the display styles are, and the same colours and contrast. Use Play only where a platform blocks the brand fonts.

## Spacing, radii, layout

- Space on a 4/8 rhythm: `space-2` inside controls, `space-4` card padding, `space-6` between sections, `space-10` around logos.
- Round buttons and cards at `radius-md`, tags and inputs at `radius-sm`; anything circular uses `radius-full`, like the avatar ring.
- Flat colour fields, no gradients or drop shadows: the logos are solid maroon, gold and black. The low-poly pattern is the only texture.

## Logos

Three lockups share one structure — the avatar ring on the left, the name in HK Modular on the right — each in a maroon-ink and a gold-ink version. See the Logos group.

- **Nexxus Drako Multimedia** (`ndm-*`): the umbrella; use for business, publishing, music licensing and anything company-wide.
- **Nexxus Drako Gaming** (`ndg-*`): streaming, Twitch, YouTube gaming and sim-racing work.
- **Nexxus Drako** (`nexxus-drako-*`): the personal brand.
- Use the maroon-ink files on white or light grounds; use the gold-ink files on black or maroon. Never place a maroon-ink logo on maroon or a gold-ink logo on white.
- Keep `space-10` of clear space around any lockup. Don't recolour, stretch, re-type the wordmark, or crop the ring.
- The avatar ring alone (Avatar group) is the profile picture and favicon-scale mark.

## Imagery

- Nexxus's character art is the only mascot imagery. Use the full-colour render inside the ring; use `nexxus-mono-art.png` (black-and-white manga treatment) for print, stickers and one-colour contexts.
- The low-poly gold pattern (Pattern group) is the one background texture: full-bleed behind social graphics, stream scenes and thumbnails. Text never sits directly on it; put text on a solid `maroon` or `gold` panel above it.

## Iconography

- Use the brand icon set (Icons group, `Icon` component): 27 line icons on a 24px grid, 2px round strokes, no fills.
- Draw icons in the surrounding text colour (`ink`, `accent` or a status token), at 3:1 or better against the ground. Pair an icon with a word unless it has an accessible label.
- Never use emoji as icons. For platform links use each platform's official mark, not a redrawn one.

## Components

React components live in `window.NexxusDrako` (load React 18, then `components/bundle.css` and `components/bundle.js`). Each component's README says what to pass it.

- **Actions:** `Button` (`primary` gold fill once per view, `secondary` outline, `ghost`).
- **Content:** `SectionHeading`, `ProjectCard`, `Tag`.
- **Status:** `StatusBadge` and `Alert` (always icon + word + colour), `LiveBadge` (maroon/gold, only while actually live).
- **Identity:** `Avatar` (pass the `avatar-ring.png` asset).
- **Identity:** `Icon` (the brand icon set, drawn in `currentColor`).
- **Streaming:** `TwitchPanel` (320px panel for the Twitch About section), `LowerThird` (maroon/gold overlay), `StreamScreen` (1920×1080 starting / BRB / ending / offline scenes), `StreamAlert` (follow, sub, raid and tip pop-ups). Overlays are theme-independent.
- Load Exo 2 and Orbitron from Google Fonts (link above) wherever the components run.
