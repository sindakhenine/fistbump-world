# fistbump.world

The public site [fistbump.world](https://fistbump.world): the home page, the legal pages and support. Plain HTML with no build step, served by GitHub Pages.

The home page links to the app (app.fistbump.world), the App Store and Google Play. Its pictures are the app's own: the parachute, carrying the Fistbump logo on a round badge drawn in the page, and 3D pictures copied from `public/icons/`. `og.png` is the picture shown when someone shares the site. It is made from the headline by `scripts/og-image.mjs` in the app's own repository (run `node scripts/og-image.mjs` there, not in the published site).

Fonts: Bricolage Grotesque and Manrope, both under the SIL Open Font License 1.1 (see `fonts/`).

Search: `robots.txt` and `sitemap.xml` list the page for crawlers. The 32-character `.txt` file is the public [IndexNow](https://www.indexnow.org) key that lets us ask Bing and other IndexNow engines to recrawl after a change.
