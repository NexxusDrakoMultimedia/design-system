# Alert

A boxed message with a status icon, a title, and optional body text.

- **Consumer provides:** `status` (`success` · `warning` · `danger`), `title`, and body as children.
- The border and icon take the status colour; the title stays in `ink` and the body in `ink-muted`, so the text is always readable.
- `danger` alerts are announced to screen readers immediately (`role="alert"`); the others politely (`role="status"`).
- Write titles as plain statements in sentence case. Give times in AEST.
