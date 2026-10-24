# Repository Guidelines

## Purpose & Technology

Build a personal article library for sharing reading with Dad through a github pages website. Use HTML, CSS, and vanilla JavaScript. The homepage should group articles by topic and link to individual HTML articles. Keep core content and navigation usable without JavaScript.

## Project Structure & Module Organization

The repository starts empty. Use this structure as files are added:

- `index.html`: central homepage with clearly labeled topic sections.
- `articles/<topic>/<article-slug>.html`: individual articles, such as `articles/science/moon-phases.html`.
- `assets/css/styles.css`: shared layout, typography, and responsive styles.
- `assets/js/`: small scripts for optional interactions.
- `assets/images/`: article images and other visual assets.

Each article should include its title, topic, and an obvious link back to the homepage. Update the homepage when adding an article.

## Build, Test, and Development Commands

No build system, package manager, or automated test suite is configured.

- `python3 -m http.server 8000`: serve the repository locally; open `http://localhost:8000` once `index.html` exists.
- `git diff --check`: check changes for whitespace errors before committing.

Serve static files directly. Document any tooling introduced later and its commands.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Use lowercase, hyphenated filenames and CSS classes, and `camelCase` JavaScript identifiers. Prefer semantic HTML, shared CSS, relative links, and small scripts. Keep article content in HTML files.

## Accessibility & Responsive Design

Design for older readers on phones and desktops. Start with body text around `20px`, line height of at least `1.6`, and a reading width near `65ch`. Use strong contrast, visible keyboard focus, descriptive links, and generous controls with targets at least `44px` square. Provide logical headings and meaningful image alternative text. Let text resize and layouts reflow without horizontal scrolling.

## Testing Guidelines

Manually check homepage-to-article links and return navigation. Verify phone and desktop layouts, keyboard navigation, 200% zoom, and functionality with JavaScript disabled. No automated coverage threshold exists.

## Commit & Pull Request Guidelines

No commit history establishes a convention yet. Use concise imperative subjects, such as `Add science topic and moon article`. Include a change summary, related issue when applicable, and manual verification results in pull requests. Include mobile and desktop screenshots for visual changes.
