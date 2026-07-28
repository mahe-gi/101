# HTML Engineering Cheatsheet

## 1. Document Skeleton
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Engineering Document</title>
</head>
<body>
</body>
</html>
```

## 2. Essential Semantic Elements
- `<main>`: Single unique main content block per document.
- `<article>`: Self-contained, reusable content (blog post, card, widget).
- `<section>`: Thematic grouping of content, typically with a heading.
- `<nav>`: Navigation links block.
- `<aside>`: Tangentially related content (sidebar, callout).
- `<header>` / `<footer>`: Intro/outro landmark regions.

## 3. Accessible Form Pattern
```html
<form action="/api/v1/submit" method="POST">
  <div>
    <label for="user-email">Email Address</label>
    <input 
      type="email" 
      id="user-email" 
      name="email" 
      required 
      autocomplete="email"
      aria-describedby="email-hint"
    />
    <span id="email-hint">We will never share your email.</span>
  </div>
  <button type="submit">Submit</button>
</form>
```

## 4. Responsive & Performance Images
```html
<picture>
  <source srcset="hero-large.avif" type="image/avif" media="(min-width: 1024px)">
  <source srcset="hero-medium.webp" type="image/webp" media="(min-width: 768px)">
  <img 
    src="hero-fallback.jpg" 
    alt="Detailed description of hero visual" 
    width="1200" 
    height="600" 
    loading="lazy" 
    decoding="async"
  />
</picture>
```

## 5. Critical Security Attributes
- External links: `<a href="https://thirdparty.com" target="_blank" rel="noopener noreferrer">`
- iFrame sandboxing: `<iframe src="..." sandbox="allow-scripts allow-forms" referrerpolicy="strict-origin-when-cross-origin"></iframe>`
