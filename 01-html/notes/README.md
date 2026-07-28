# Notes: HTML First Principles & Document Engine

> **Instructions for Mahesh**: Fill in the blank sections (`[FILL THIS]`) while studying. Use first-principles reasoning. Do not copy-paste from AI or documentation.

---

## 1. What is HTML & Why Does It Exist?
- **Definition**: 
- **Problem it Solved**: 
- **History (HTML1 -> HTML5)**: 

---

## 2. Browser Internal Working: How HTML Is Processed
```
Network Bytes ──► Characters ──► Tokens ──► Nodes ──► DOM Tree
```
- **Byte Stream to Characters Conversion (Encoding)**:
  - *Why `utf-8` matters*: `[FILL THIS]`
- **Tokenization Stage**:
  - *How HTML parser handles start tags, end tags, attributes*: `[FILL THIS]`
- **Tree Construction (DOM Generation)**:
  - *How parent-child relationships are built in memory*: `[FILL THIS]`
- **Speculative Parsing (Pre-parser)**:
  - *What resources it fetches ahead of time*: `[FILL THIS]`

---

## 3. Memory & Execution Model
- **DOM Node Memory Structure**:
  - *Is a DOM node a JavaScript object or C++ browser object?*: `[FILL THIS]`
  - *How V8/Blink bridge bindings work*: `[FILL THIS]`
- **Quirks Mode vs Standards Mode**:
  - *Role of `<!DOCTYPE html>`*: `[FILL THIS]`
  - *What happens when `<!DOCTYPE html>` is missing?*: `[FILL THIS]`

---

## 4. Semantics & Accessibility (A11y) Tree
- **DOM Tree vs Accessibility Tree**:
  - *Difference between DOM Tree and A11y Tree*: `[FILL THIS]`
  - *How screen readers (NVDA/VoiceOver) consume the A11y tree*: `[FILL THIS]`
- **Semantic Tags vs Generic Tags (`<div>`/`<span>`)**:
  - *Why `<div>` soup destroys accessibility & SEO*: `[FILL THIS]`

---

## 5. Performance & Complexity
- **DOM Depth & Node Count Impact**:
  - *Reflow & Repaint complexity*: `[FILL THIS]`
  - *Lighthouse DOM size threshold limit*: `[FILL THIS]`
- **Script Loading Execution Model**:
  - *Default `<script>`*: `[FILL THIS]`
  - *`<script async>`*: `[FILL THIS]`
  - *`<script defer>`*: `[FILL THIS]`

---

## 6. Security Considerations
- **XSS (Cross-Site Scripting)**:
  - *How unescaped user HTML causes XSS*: `[FILL THIS]`
- **iFrame Vulnerabilities & Sandboxing**:
  - *`tabnabbing` protection with `rel="noopener noreferrer"`*: `[FILL THIS]`

---

## 7. Production Usage & Best Practices
- **Production Checklist**:
  - [ ] Valid `<!DOCTYPE html>`
  - [ ] `lang` attribute on `<html>`
  - [ ] Responsive `viewport` meta tag
  - [ ] Proper Heading Hierarchy (`<h1>` -> `<h6>` without skipping)
  - [ ] All `<img>` tags have explicit `width`, `height`, and `alt`
