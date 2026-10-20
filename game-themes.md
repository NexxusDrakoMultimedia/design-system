# Game themes

In-game UI themes that carry the brand into the games Nexxus plays and streams. Each one maps the brand tokens onto the slots the game gives you.

## EVE Online — Drakonikan

Named for Nexxus's pilot, Drakonikan, and for the community, who call themselves Drakonikans.

Theme string (paste into the code box under the colour fields in EVE's **Edit Theme** window, then **Apply** and **Save**):

```
#7F0000,#FFD900,#140000,#FF5C5C
```

| EVE slot | Value | Brand source | Why |
| --- | --- | --- | --- |
| Primary | `#7F0000` | `maroon` | Buttons such as Undock, window chrome. |
| Accent | `#FFD900` | `gold` | Highlights, selected tabs. |
| Background Tint | `#140000` | (EVE-only) | A near-black with a maroon cast, so windows feel warm over busy station and space backdrops while maroon buttons still stand out. Not used anywhere outside EVE. |
| Alert | `#FF5C5C` | `danger` (dark) | About 7:1 on the dark windows, and far lighter than the maroon primary, so warnings never blur into buttons. |

Rules:

- Name the theme **Drakonikan** exactly, so fans who import it see the community's name.
- Don't use maroon as the Background Tint: maroon buttons disappear into maroon windows.
- Don't use blue, gold or orange for Alert. Blue is too dark on EVE's panels; gold and orange look like the accent.
- Pure black (`#000000`) is an acceptable Background Tint for anyone who wants the brand's neutral dark theme; keep the other three slots as they are.
