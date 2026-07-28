# Drills: HTML Muscle Memory Exercises

These exercises must be typed out quickly without looking at docs. Repeat until execution is instant.

---

## Section A: Semantic Markup Drills

1. Write a `<head>` containing standard UTF-8 charset, responsive viewport meta, and document title.
2. Write a semantic layout structure containing header, navigation bar, main content area with two articles, sidebar, and footer.
3. Write an accessible search form with a hidden label for screen readers (`visually-hidden` or `aria-label`) and a submit button.
4. Write a responsive image using `<picture>`, two WebP `<source>` tags for desktop (`min-width: 1024px`) and tablet (`min-width: 768px`), and a fallback `<img>` with `loading="lazy"`.
5. Write a `<form>` with a select dropdown containing grouped options using `<optgroup>`.
6. Write a complete data table with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th>` with proper `scope="col"` and `scope="row"` attributes.
7. Write an external hyperlink that opens in a new tab without exposing `window.opener` security vulnerabilities.
8. Write a `<dialog>` element with open state and an inner close button.
9. Write a numerical `<input>` enforcing a minimum of 1, maximum of 100, step of 5, and default value of 50.
10. Write an `<input>` for phone numbers with auto-complete hint for mobile keypads (`type="tel"`, `inputmode="tel"`).

---

## Section B: Accessibility & ARIA Drills

11. Write an interactive non-button element (e.g. `<div>`) styled as a toggle switch with proper ARIA role, tab focusability, and pressed state (`aria-checked`).
12. Write a live region (`aria-live="polite"`) for dynamically injected alert messages.
13. Write a form field error message connected to an input using `aria-invalid` and `aria-describedby`.
14. Write a breadcrumb navigation structure using `<nav>` and `aria-label="Breadcrumb"`.
15. Write an accordion header button controlling a hidden panel using `aria-expanded` and `aria-controls`.

---

## Section C: SEO, Security & Performance Drills

16. Write Open Graph (`og:title`, `og:image`, `og:description`, `og:url`) meta tags for social media previews.
17. Write resource hints in `<head>` to `preconnect` to `https://fonts.googleapis.com` and `dns-prefetch` to `https://analytics.example.com`.
18. Write a script tag that defers execution until DOM parsing completes.
19. Write an `<iframe>` sandbox configuration allowing only scripts and form submission, blocking same-origin access.
20. Write a favicon link tag referencing an SVG favicon with `type="image/svg+xml"`.
