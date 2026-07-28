# Problem 03: Responsive Picture Hero Element

## Difficulty: Medium

### Goal
Implement high-performance responsive image switching using HTML `<picture>`.

### Requirements
1. `<picture>` tag container.
2. High-res AVIF format for desktops (`min-width: 1024px`): `srcset="hero-desktop.avif"`, `type="image/avif"`.
3. WebP format for tablets (`min-width: 768px`): `srcset="hero-tablet.webp"`, `type="image/webp"`.
4. Standard fallback `<img>`:
   - `src="hero-mobile.jpg"`
   - Descriptive `alt` text explaining the image.
   - `width="1200"` and `height="600"` (to prevent CLS).
   - `loading="lazy"`
   - `decoding="async"`
