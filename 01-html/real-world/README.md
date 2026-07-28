# Real-World Engineering: HTML in Production Tech Companies

Here is how top product companies architect and optimize HTML at scale:

---

## 1. Stripe & Razorpay (Checkout Payment Gateways)
- **Problem**: Payment forms hosted on merchant websites are exposed to malicious script inspection (XSS keylogging).
- **HTML Solution**: **iFrame Isolation Pattern**.
  - Stripe and Razorpay render credit card input fields (`Card Number`, `CVV`, `Expiry`) inside isolated cross-origin `<iframe src="https://checkout.stripe.com/hosted-field">` elements.
  - The host website HTML never touches card numbers. Card data is tokenized inside the isolated iframe DOM tree.
  - iFrame security attributes used in production:
    ```html
    <iframe 
      src="https://api.razorpay.com/v1/checkout/hosted"
      sandbox="allow-scripts allow-forms allow-same-origin"
      title="Secure Payment Frame"
      aria-hidden="false"
    ></iframe>
    ```

---

## 2. CRED & Meesho (SEO & Social Sharing Conversion Engines)
- **Problem**: Links shared on WhatsApp, Twitter, and iMessage need rich media cards to maximize Click-Through Rate (CTR).
- **HTML Solution**: **Dynamic OpenGraph Meta Ingestion**.
  - Every product/deal URL dynamically injects server-rendered `<meta property="og:image">` and `<meta property="twitter:card">` in the `<head>` before returning HTML to web crawlers.
  - Speculative pre-rendering via `<link rel="prerender">` or `<link rel="prefetch">` for checkout pages.

---

## 3. Postman & Vercel (Accessibility & Micro-Frontends)
- **Problem**: Web applications with complex desktop-like user interfaces (tabs, sidebars, context menus) must be 100% accessible to enterprise customers for compliance (Section 508 / WCAG 2.1 AA).
- **HTML Solution**: **Strict Landmark & ARIA Region Specs**.
  - Using `<main>`, `<nav>`, `<aside>`, `<header>`, and ARIA live regions (`aria-live="polite"`) to announce background request statuses without interrupting screen readers.
  - `tabindex="-1"` management to programmatically move focus to opened dialogs and slide-over drawers.

---

## 4. Google & Amazon (Core Web Vitals & Image Optimization)
- **Problem**: Cumulative Layout Shift (CLS) destroys user experience when images load asynchronously without dimensions.
- **HTML Solution**: **Aspect-Ratio & Explicit Dimension Attributes**.
  - Always specifying `width="..."` and `height="..."` on `<img>` tags, combined with `loading="lazy"` and `fetchpriority="high"` for Largest Contentful Paint (LCP) hero images:
    ```html
    <!-- Hero Image (LCP) -->
    <img src="hero.jpg" width="1200" height="600" fetchpriority="high" alt="Hero Banner">
    
    <!-- Below-the-fold Images -->
    <img src="item.jpg" width="300" height="300" loading="lazy" decoding="async" alt="Product Thumbnail">
    ```
