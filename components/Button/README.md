# Button

Clickable actions, uppercase and short, with a verb first.

- **Consumer provides:** the label as children, `onClick`, and optionally `variant` (`primary` · `secondary` · `ghost`), `size` (`md` · `sm`), `disabled`, `type`.
- Use `primary` (gold fill, `on-gold` maroon text) once per view for the main action: "Watch live", "Buy the book". Use `secondary` (outline in `accent`) for alternatives and `ghost` for low-weight actions.
- Labels are 1–3 words, verb first. Don't put emoji in labels.
- Place buttons on `surface`. On a maroon `surface-brand` band, use `primary` only and keep the focus ring gold.
- The focus ring is a solid 2px `focus` outline with a 2px offset, so never remove the outline.
