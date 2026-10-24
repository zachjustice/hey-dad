# TODO

Keep the current single-column homepage and large topic filters. Use static HTML, shared CSS, and small optional scripts.

## Completed cleanup

- [x] Remove the alternate layouts, design switcher, personal copy, and unused images and fonts.
- [x] Remove prototype labels from the homepage and README.
- [x] Calculate the live article count from the HTML list.
- [x] Document local preview and how to add articles.

## Before publishing

- [x] Convert the six Markdown articles to the HTML paths already linked from `index.html`. Include each article’s title, topic, and an obvious homepage link. Preserve the content and source links.
- [x] Add shared article styles: readable text around 20px, line height of at least 1.6, a reading width near 65ch, and tables and long links that work on phones. Keep the homepage layout as it is.
- [x] Review the article content, dates, and citations before publishing. Keep personal additions user-written.
- [x] Check every homepage-to-article link, return link, and source link. Confirm relative paths work under the GitHub Pages project path `/hey-dad/`.
- [x] Check the completed pages on phone and desktop, with keyboard navigation, at 200% zoom, and with JavaScript disabled. Confirm all topic filters and article counts still work.
- [ ] Configure GitHub Pages for the intended branch and folder, then verify the published homepage, article pages, styles, fonts, and scripts load. Requires repository-settings access after the site is pushed.

No framework, package manager, or build step is needed for this scope. Add tooling only if repeated maintenance makes it useful.
