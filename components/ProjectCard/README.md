# ProjectCard

A card for one project (a book, album, game or series) with an optional 16:9 image, a kind tag, title, description and link.

- **Consumer provides:** `title`, plus optional `kind`, `description`, `href` with `linkLabel` (default "View project"), `image` and `imageAlt`.
- The image is cropped to 16:9. Use cover art or a banner; pass `imageAlt=""` when the title already says what it is.
- The card is 320px max wide; lay several out in a grid with `space-6` gaps.
- Keep descriptions to one or two sentences.
