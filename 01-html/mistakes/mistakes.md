# Mistakes Journal: HTML Pitfalls & Antipatterns

Document mistakes you make during drills, problems, and assignments here. Analyze WHY it happened, WHAT was misunderstood, and HOW to avoid it.

---

## 🟢 Beginner Level Mistakes

### 1. The `<div>` Soup Antipattern
- **Symptom**: Wrapping every single text block, button, and container in `<div>` or `<span>`.
- **Why It Happens**: Treating HTML solely as a canvas for CSS styling rather than a semantic document tree.
- **Impact**: Completely breaks screen reader landmark navigation and tanks SEO crawler indexing.
- **Fix**: Map design blocks to HTML5 semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).

### 2. Missing Input Labels
- **Symptom**: Using `placeholder="Enter your name"` instead of a proper `<label>`.
- **Why It Happens**: Placeholders look cleaner in UI designs.
- **Impact**: Placeholders disappear when user types, provide no permanent accessible name for screen readers, and fail WCAG 2.1 AA color contrast tests.
- **Fix**: Always use `<label for="input-id">` paired with `id="input-id"` on `<input>`.

---

## 🟡 Intermediate Level Mistakes

### 3. Missing Image Dimensions & Cumulative Layout Shift (CLS)
- **Symptom**: Writing `<img src="hero.jpg" alt="Hero">` without explicit `width` and `height` attributes.
- **Why It Happens**: Developers assume CSS will control image size (`width: 100%`).
- **Impact**: Browser cannot reserve layout space before image binary downloads over network. Page jumps down when image loads (high CLS score penalty in Google Core Web Vitals).
- **Fix**: Always specify intrinsic aspect ratio via `width="..."` and `height="..."` on `<img>`.

### 4. Clickable Elements Without Keyboard Focusability
- **Symptom**: Adding `@click` or `onclick` handlers to a `<div class="clickable">` or `<span>`.
- **Why It Happens**: Laziness or quick prototype styling.
- **Impact**: Keyboard-only users (navigating via `Tab` key) cannot focus or activate the element.
- **Fix**: Use native `<button>` or `<a>` tags. If using a non-standard tag, add `role="button"`, `tabindex="0"`, and keydown event handlers for `Enter`/`Space`.

---

## 🔴 Senior Level Mistakes

### 5. Overusing ARIA Attributes ("First Rule of ARIA")
- **Symptom**: Adding `role="button"` and `aria-label` to native `<button>` tags or using custom `role="heading"` on `<div>` tags instead of `<h2>`.
- **Why It Happens**: Over-engineering accessibility.
- **Impact**: Overrides browser built-in implicit semantic roles, often creating contradictory states in Accessibility Tree.
- **Fix**: Obey the 1st Rule of ARIA: Never use ARIA when native HTML tags provide identical semantics.

### 6. Vulnerable iFrames & Missing Security Headers
- **Symptom**: Rendering third-party content in `<iframe>` without restrictive `sandbox` attributes or using `target="_blank"` without `rel="noopener noreferrer"`.
- **Why It Happens**: Assuming third-party scripts/iframes are benign.
- **Impact**: Opens vulnerability to Tabnabbing (third party page redirects parent window via `window.opener.location`) and XSS script execution.
- **Fix**: Always add `sandbox="allow-scripts allow-forms"` to `<iframe>` and `rel="noopener noreferrer"` to external links.

---

## 📝 Personal Error Log (Add Your Own Mistakes Here)

| Date | Topic | Mistake Made | Root Cause | Prevention Strategy |
|---|---|---|---|---|
| 2026-07-28 | HTML | Example: Forgot `datetime` attribute on `<time>` | Didn't check W3C spec | Add linter rule for semantic HTML tags |
