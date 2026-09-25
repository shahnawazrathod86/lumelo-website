# LUMELO website

Multi-page website for the LUMELO brand and all its books. Plain HTML, CSS and JavaScript with no build step. Free to host on GitHub Pages.

## Pages
`index.html` home, `books.html` catalogue with topic filters, `book.html?id=...` one page for every book, `printables.html` free downloads, `parents.html`, `about.html`, `legal.html`, `404.html`.

## Add a new book
Open `books.js`, copy one block, change the text and save. The book appears on the home page, the catalogue and gets its own page. Add its cover to the main folder and set `cover` to that path. Set `status` to `available` and add a `links` entry with the Amazon URL only when the book is really on sale.

## Add a free printable
Put the PDF in the main folder and add a link on `printables.html`.

## Publish (GitHub Pages)
1. Create a public repository, for example `lumelo-website`, and upload these files.
2. Settings > Pages > Source: Deploy from a branch > main > / (root).
3. The site appears at `https://YOUR-USERNAME.github.io/lumelo-website/`.

## Before launch
- The legal page is a draft. Have it reviewed.
- Replace the cover image when the final book cover is ready.
- Add a contact email to `legal.html` and the footer in `site.js` if you want one.
