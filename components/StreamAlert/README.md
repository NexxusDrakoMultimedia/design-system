# StreamAlert

The on-stream pop-up for follows, subs, raids and tips: a maroon label with an icon, the viewer's name on a gold slab, and an optional message.

- **Consumer provides:** `kind` (`follow` · `sub` · `raid` · `tip`), `name`, optional `message` and `label` (replaces the default "New follower" etc.).
- The icon and label word always name the kind, so it never relies on colour alone.
- Wire it to your alert tool's browser source. It is theme-independent (maroon and gold, 8:1).
- Animate it in and out with your alert tool, not inside the component, and keep it on screen for at least 5 seconds.
