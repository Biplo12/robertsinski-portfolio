# Resume

`resume.html` is the source of `public/resume.pdf`. Edit the HTML, then render it
with headless Chrome:

```
chrome --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/resume.pdf resume/resume.html
```

It has to stay one A4 page. Check the page count after rendering.

## Scale

The `:root` block holds the scale knobs: `--fs` (base size), `--lh` (line
height), `--sec` and `--ent` (spacing between sections and entries), `--h1`,
`--company`, `--small`. Current values sit at the largest scale that still fits one page with this
amount of content: `--fs: 8.8pt`. Anything from 9pt up spills onto a second page, so going bigger means cutting a line of content first.
