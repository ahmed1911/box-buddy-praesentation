# slidev-theme-boxify

Corporate-Theme für [Slidev](https://sli.dev). Moss/Clay-Palette, Instrument-Serif-Headings, dezente Grain-Textur, Boxify-Logo oben rechts.

## Verwendung

Im Frontmatter der `slides.md`:

```yaml
---
theme: slidev-theme-boxify
---
```

Lokal per Pfad (ohne npm-Install):

```yaml
---
theme: ../slidev-theme-boxify
---
```

## Layouts

| Layout           | Zweck                                            |
|------------------|--------------------------------------------------|
| `boxify-cover`   | Titelfolie, zentriert                            |
| `boxify-default` | Standardfolie mit Seitenzähler unten rechts      |
| `boxify-quote`   | Zitat auf Clay-Hintergrund (`::author::` Slot)   |
| `boxify-section` | Abschnittstrenner auf Moss-Hintergrund           |

## Component

`<Card variant="moss | clay | default">…</Card>` — Inhaltskarte in den Markenfarben.

## Farben (UnoCSS-Tokens)

`ivory`, `clay`, `moss`, `stone`, `forest` — nutzbar als `bg-*` / `text-*`.
