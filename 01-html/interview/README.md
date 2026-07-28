# Interview: HTML Senior Engineering Assessment

Test your recall and deep understanding. Attempt to answer all questions orally or in writing before looking at reference material.

---

## 1. Theory Questions
1. Explain the step-by-step process of how a browser parses HTML bytes sent over TCP into a DOM Tree in memory.
2. What is the difference between `document.createElement('div')` in JavaScript and the browser's C++ HTML Tokenizer creating a HTMLDivElement node?
3. How does the browser construct the Accessibility (A11y) tree from the DOM tree, and what HTML attributes directly modify the A11y tree without changing visual presentation?
4. Explain the difference between `src` and `href` attributes in HTML. Why is CSS linked via `href` while images and scripts use `src`?
5. What is the difference between `shadowDOM` and standard light DOM? How does encapsulation work at the HTML markup level?

---

## 2. Coding & Markup Questions
6. Write the exact HTML markup for an accessible tab list component (`role="tablist"`, `role="tab"`, `role="tabpanel"`) including keyboard interaction attributes (`aria-selected`, `aria-controls`, `tabindex`).
7. Write the HTML structure for a multi-language page where parts of a paragraph are in English, Arabic (right-to-left), and Japanese, ensuring correct text directionality attributes (`dir="rtl"`, `lang="..."`).
8. Write an HTML responsive media container using `<picture>`, `srcset`, `sizes`, and `<source>` that serves WebP images on retina screens (`2x`) and JPEG fallbacks.

---

## 3. Debugging Questions
9. **Scenario**: A user reports that clicking on a form label text does not focus the adjacent input field. What are the 3 potential HTML bugs causing this?
10. **Scenario**: On iOS Safari, a custom web page allows zooming even though `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">` was added. Why is `user-scalable=no` ignored in modern browsers, and how should accessibility font scaling be handled?
11. **Scenario**: An automated WCAG accessibility audit flags a button: `<div class="btn" onclick="submit()">Submit</div>`. List all 5 missing HTML/ARIA properties required to make this element act like a true button.

---

## 4. Production & Security Questions (Staff-Level)
12. How do you prevent Clickjacking attacks using HTML iFrame headers/attributes? Explain `X-Frame-Options` vs CSP `frame-ancestors` vs `<iframe sandbox>`.
13. Explain how modern web apps use HTML Microdata (`itemscope`, `itemtype`, `itemprop`) or JSON-LD (`<script type="application/ld+json">`) for Rich Search Results on Google.
14. What are Content Security Policy (CSP) meta tags? Write a CSP meta tag that restricts script execution to same-origin scripts and trusted CDNs.

---

## 5. Behavioral & Architecture Questions
15. How do you convince a product manager to allocate engineering sprint time to refactor legacy `<div>`-heavy HTML into semantic, accessible HTML5?
16. How do you establish HTML quality standards across a frontend engineering team of 20+ developers?
