# Projects: HTML Architecture & Systems Design Specs

No code is provided here. You must review the architecture, plan the document structure, and build the project from scratch.

---

## Project 1 (Mini): Clean Semantic Portfolio Template

### Architecture Overview
A lightweight, fast-loading personal developer portfolio site built using 100% semantic HTML5 without external dependencies.

```
html
├── head (Charset, Viewport, OpenGraph, Favicons)
├── body
    ├── header (Nav landmarks, Brand Logo, CTA)
    ├── main
    │   ├── section#hero (H1, Lead paragraph, Primary CTA)
    │   ├── section#projects (H2, Grid of <article> cards with pictures & github links)
    │   ├── section#skills (H2, Definition list <dl> of technical competencies)
    │   └── section#contact (H2, Accessible contact form)
    └── footer (Social links nav, Copyright)
```

---

## Project 2 (Intermediate): Enterprise Documentation Site Layout

### Architecture Overview
A multi-page documentation portal layout (similar to Stripe or Vercel Docs) featuring deep semantic hierarchy, breadcrumbs, search markup, table of contents, and dark-mode meta configurations.

```
html
├── head (Theme-color meta, Preconnect CDN fonts, Search Index prefetch)
├── body
    ├── header (Global nav, Version switcher dropdown, Search trigger)
    ├── div.layout-wrapper
    │   ├── nav.sidebar-nav (Accordion list of doc categories using <details>/<summary>)
    │   ├── main#doc-content
    │   │   ├── nav aria-label="Breadcrumb" (Ordered list of location links)
    │   │   ├── article (Doc page content, Code snippet blocks using <pre><code>, Callout boxes)
    │   │   └── footer.doc-footer (Last updated timestamp, Edit on GitHub link, Prev/Next nav)
    │   └── aside.toc-nav (On-this-page navigation list)
    └── footer (Global company footer)
```

---

## Project 3 (Production): SaaS Dashboard & Analytics Shell Architecture

### Architecture Overview
A complex web application shell architecture designed for screen readers, keyboard accessibility, security sandboxing, and micro-frontend integration via iframes.

```
html
├── head (CSP meta policy, Security origin policies, App icons)
├── body
    ├── nav#skip-link (<a href="#main-dashboard" class="visually-hidden">Skip to main content</a>)
    ├── div.app-shell
    │   ├── header#app-header (User menu, Workspace selector, Notification live region aria-live="polite")
    │   ├── aside#app-sidebar (Collapsed/Expanded navigation tree with keyboard shortcuts aria-keyshortcuts)
    │   └── main#main-dashboard (Tab panels using role="tablist", role="tab", role="tabpanel")
    │       ├── div[role="tabpanel"]#overview
    │       │   ├── section (Analytics metrics grid using <meter> and <progress> elements)
    │       │   └── section (Data table with complex sorting aria-sort attributes)
    │       └── div[role="tabpanel"]#integrations
    │           └── iframe[sandbox="allow-scripts allow-forms"] (Isolated payment/integration widget)
    └── div#portal-root (Aria-modal overlay container for dynamically rendered dialogs)
```
