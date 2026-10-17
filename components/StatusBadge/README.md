# StatusBadge

A colour-blind-safe status label that always pairs an icon and a word with the colour.

- **Consumer provides:** `status` (`success` · `warning` · `danger`) and an optional label as children. Without children it shows "Success", "Warning" or "Error".
- Colours come from `success` (blue), `warning` (orange) and `danger` (red). Never strip the icon or word to rely on colour alone.
- Use it for release and project states: "Released", "In progress", "On hiatus".
