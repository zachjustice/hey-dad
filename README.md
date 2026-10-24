# Hey, Dad

A static article library built with HTML, CSS, and vanilla JavaScript.

## Preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). You can also open `index.html` directly. No installation or build is needed.

## Homepage

The homepage is a single column of articles grouped by topic. Large buttons filter the list. With JavaScript disabled, every article remains visible and the topic controls link to the corresponding sections.

The visual style pairs warm ivory paper with deep teal headings and burnt-orange accents. Georgia titles and locally hosted Source Sans 3 body text keep the reading experience familiar. Shared color variables in `assets/css/styles.css` carry the palette through the homepage, articles, tables, and interaction states.

Every homepage link leads to its HTML article under `articles/`. Article content is published as static HTML so it remains readable without JavaScript.

## Files

- `index.html`: article titles, descriptions, and topic sections.
- `articles/`: published articles, organized by topic.
- `assets/css/styles.css`: responsive layout and typography.
- `assets/js/topic-filters.js`: optional topic filtering.
- `assets/js/three-views.js`: optional view switch for `articles/immigration/three-views.html`. Without JavaScript, each claim shows all three views stacked.
- `assets/fonts/`: Source Sans 3 and its SIL Open Font License.

All assets are local. The homepage does not use external services or store browser data.

## Add an article

1. Create `articles/<topic>/<article-slug>.html`. Include its title, topic, source links, and a link to `../../index.html`.
2. Use `../../assets/css/styles.css` for shared styles. The topic filter script is only for the homepage.
3. Add an `<article>` to the matching topic section in `index.html`. Copy an existing entry and update its link, title, and description.
4. Update the initial article count in `index.html` for readers with JavaScript disabled. With JavaScript enabled, the count is calculated from the article list.
5. For a new topic, add a filter link and a section. Match the link’s `data-topic-filter` and `href` to the section’s `data-topic` and `id`. Use lowercase, hyphenated names.

## Checks

Run `git diff --check` before committing. Check every homepage-to-article link, article return link, source link, topic filter, keyboard focus, phone and desktop layout, and the page with JavaScript disabled.

See [TODO.md](TODO.md) for the remaining work before publishing.
