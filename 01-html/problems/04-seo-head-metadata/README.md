# Problem 04: Production SEO Head Metadata Suite

## Difficulty: Hard

### Goal
Construct a production-grade `<head>` tag complete with meta tags, OpenGraph cards, Twitter cards, canonical tags, and resource hints.

### Requirements
1. `meta charset="UTF-8"`
2. `meta viewport` configured with `width=device-width, initial-scale=1.0`
3. `<title>`: "CS101 - Master Software Engineering Fundamentals"
4. `<meta name="description">`: Concise description of the platform.
5. Canonical link tag: `<link rel="canonical" href="https://cs101.dev/html-mastery">`
6. Open Graph Meta Tags:
   - `og:title` matching title
   - `og:description` matching description
   - `og:type` set to `"website"`
   - `og:url` set to `"https://cs101.dev/html-mastery"`
   - `og:image` set to `"https://cs101.dev/assets/og-cover.png"`
7. Twitter Card Meta Tags:
   - `twitter:card` set to `"summary_large_image"`
   - `twitter:title`
   - `twitter:image`
8. Resource Hint:
   - `<link rel="preconnect" href="https://fonts.googleapis.com">`
   - `<link rel="dns-prefetch" href="https://analytics.cs101.dev">`
