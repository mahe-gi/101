# Day 1 Revision Quiz: HTML Parsing & Basics

> **Rule**: Do not check notes before answering. Write your answers directly below each question.

---

### Question 1
What happens to DOM parsing when the browser encounters a plain `<script src="app.js"></script>` tag in `<head>`?

### Question 2
What is the exact purpose of `<!DOCTYPE html>` at line 1 of a file?

### Question 3
Explain the difference between `<script async>` and `<script defer>`.

---

<details>
<summary>🔍 Check Answers (Only after attempting!)</summary>

1. HTML parsing stops completely (blocking). The browser fetches `app.js` over network, executes it synchronously, and only then resumes HTML parsing.
2. It prevents the browser from entering "Quirks Mode" or "No-Quirks Mode" legacy rendering and forces modern HTML5 W3C Standards Mode layout engine parsing.
3. `async` fetches script in parallel and executes immediately as soon as fetch completes (pausing HTML parser). `defer` fetches in parallel but delays execution until HTML parsing finishes completely, maintaining document script order.

</details>
