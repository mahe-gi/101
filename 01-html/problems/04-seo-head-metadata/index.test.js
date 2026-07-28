const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Problem 04: Production SEO Head Metadata Suite', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, './index.html'),
      'utf8'
    );
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('contains title and meta description', () => {
    const title = document.querySelector('title');
    expect(title.textContent).toBe('CS101 - Master Software Engineering Fundamentals');

    const desc = document.querySelector('meta[name="description"]');
    expect(desc).not.toBeNull();
    expect(desc.getAttribute('content')).toBeTruthy();
  });

  test('contains valid canonical link tag', () => {
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).not.toBeNull();
    expect(canonical.getAttribute('href')).toBe('https://cs101.dev/html-mastery');
  });

  test('contains Open Graph property meta tags', () => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle).not.toBeNull();

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType.getAttribute('content')).toBe('website');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl.getAttribute('content')).toBe('https://cs101.dev/html-mastery');

    const ogImg = document.querySelector('meta[property="og:image"]');
    expect(ogImg.getAttribute('content')).toBe('https://cs101.dev/assets/og-cover.png');
  });

  test('contains Twitter card meta tags', () => {
    const twCard = document.querySelector('meta[name="twitter:card"]');
    expect(twCard.getAttribute('content')).toBe('summary_large_image');
  });

  test('contains preconnect and dns-prefetch resource hints', () => {
    const preconnect = document.querySelector('link[rel="preconnect"]');
    expect(preconnect.getAttribute('href')).toBe('https://fonts.googleapis.com');

    const dnsPrefetch = document.querySelector('link[rel="dns-prefetch"]');
    expect(dnsPrefetch.getAttribute('href')).toBe('https://analytics.cs101.dev');
  });
});
