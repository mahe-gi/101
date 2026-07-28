# Day 3 Revision Quiz: Semantics & Accessibility

### Question 1
Why is `<section>` without a heading element (`<h2>`-`<h6>`) usually considered bad semantic practice?

### Question 2
What is the difference between `<article>` and `<section>`?

### Question 3
What visual/screen-reader difference exists between `display: none` and `<span class="visually-hidden">`?

---

<details>
<summary>🔍 Check Answers</summary>

1. A `<section>` represents a thematic grouping of content. Without a heading, screen reader landmark navigation cannot identify the purpose of the section in the document outline.
2. `<article>` is a self-contained, independently distributable piece of content (like a blog post or news item). `<section>` is a thematic slice of a broader document.
3. `display: none` removes the element from both the DOM layout AND the Accessibility Tree (screen readers ignore it). `visually-hidden` hides the element visually offscreen using CSS clip/dimensions while keeping it in the Accessibility Tree for screen reader announcement.

</details>
