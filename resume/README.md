# Resume

`resume.html` is the source of `public/resume.pdf`. Edit the HTML, then render:

```
npm run resume
```

The script recomputes every `.duration` from the `data-start` and `data-end`
attributes on the span, writes them back into the HTML, renders the PDF with
headless Chrome and prints the page count. A duration with no `data-end` counts
up to the current month, so the number for the current job never goes stale by
hand. Set `CHROME` if the binary is somewhere unusual.

It has to stay one A4 page. The script prints the count, check it after a render.

## Scale

The `:root` block holds the scale knobs: `--fs` (base size), `--lh` (line
height), `--sec` and `--ent` (spacing between sections and entries), `--h1`,
`--company`, `--small`. Current values sit at the largest scale that still fits
one page with this amount of content: `--fs: 8.5pt`. Going bigger means cutting
a line of content first.
