# Engineering Handbook: HTML5 & Accessibility (A11y)

A concise, high-density engineering reference guide.

---

## 1. HTML Element Taxonomy

| Element Category | Elements | Primary Purpose | A11y Landmark Role |
|---|---|---|---|
| **Document Root** | `<html>`, `<head>`, `<body>` | Skeleton & metadata | None |
| **Sectioning** | `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>` | Document structural hierarchy | `main`, `article`, `region`, `navigation`, `complementary`, `banner`, `contentinfo` |
| **Grouping** | `<p>`, `<hr>`, `<pre>`, `<blockquote>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<div>` | Content layout blocks | `list`, `listitem`, `group` |
| **Text Semantics** | `<a>`, `<em>`, `<strong>`, `<small>`, `<cite>`, `<code>`, `<sub>`, `<sup>`, `<time>`, `<span>` | Phrase level context | `link`, `emphasis`, `strong`, `time` |
| **Embedded Content** | `<img>`, `<iframe>`, `<embed>`, `<object>`, `<picture>`, `<source>`, `<video>`, `<audio>` | Media & external content | `img`, `application` |
| **Tabular Data** | `<table>`, `<caption>`, `colgroup>`, `<col>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>` | Tabular matrices | `table`, `row`, `columnheader`, `rowheader`, `cell` |
| **Forms** | `<form>`, `<label>`, `<input>`, `<button>`, `<select>`, `<option>`, `<textarea>`, `<fieldset>`, `<legend>`, `<datalist>`, `<output>`, `<progress>`, `<meter>` | User input collection | `form`, `button`, `textbox`, `combobox`, `group` |
| **Interactive** | `<details>`, `<summary>`, `<dialog>` | Native client widgets | `group`, `button`, `dialog` |

---

## 2. Important Form Input Types & Attributes

| Attribute | Valid Values | Purpose |
|---|---|---|
| `type` | `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `month`, `checkbox`, `radio`, `file` | Controls keypad type and native browser validation |
| `inputmode` | `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url` | Selects mobile virtual keyboard layout without altering input constraints |
| `autocomplete` | `on`, `off`, `name`, `email`, `username`, `current-password`, `new-password`, `one-time-code`, `cc-number`, `cc-exp`, `cc-csc` | Directs browser autofill engine |
| `aria-describedby` | Space-separated Element IDs | Links input to hint/error text for screen readers |
| `aria-invalid` | `true`, `false`, `grammar`, `spelling` | Signals validation status to screen readers |

---

## 3. ARIA Rules of Engagement (W3C Guidelines)
1. **First Rule of ARIA**: If you can use a native HTML element or attribute with the semantics and behavior you require, **do so instead of re-purposing an element and adding ARIA**.
2. Do not change native semantics unless necessary (e.g. `<h1 role="button">` is anti-pattern).
3. All interactive ARIA controls (`role="button"`, `role="link"`, `role="checkbox"`) **must be keyboard focusable** (`tabindex="0"`) and handle `Enter` and `Space` key presses.
4. Do not use `role="presentation"` or `aria-hidden="true"` on focusable elements.

---

## 4. Performance Attributes Checklist
- `loading="lazy"`: Defers offscreen image/iframe loading until viewport scroll threshold.
- `decoding="async"`: Allows browser image decoder to run off the main thread.
- `fetchpriority="high" | "low" | "auto"`: Signals resource fetch priority to network scheduler.
- `<link rel="preload" as="image/font/script">`: Downloads critical path assets early in parsing.
