# Problem 01: Semantic Blog Article

## Difficulty: Easy

### Goal
Construct a fully semantic blog article structure without using generic `<div>` elements for content layout.

### Requirements
1. The root wrapper of the blog post must be an `<article>` tag.
2. Inside `<article>`, include a `<header>` tag containing:
   - An `<h1>` with text "Understanding the Event Loop in Node.js"
   - A `<time>` element with `datetime="2026-07-28"` displaying "July 28, 2026"
   - An author element using `<address>` or `class="author"` containing text "Mahesh"
3. Create a `<section>` for the main content with at least two paragraphs (`<p>`).
4. Include an `<aside>` tag containing related article links in an unordered list (`<ul>`).
5. Include a `<footer>` tag containing copyright text "© 2026 CS101 Engineering".

### Validation
Run `npm test` from `01-html/` directory.
