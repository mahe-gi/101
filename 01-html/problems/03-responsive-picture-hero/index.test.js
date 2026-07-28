const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Problem 03: Responsive Picture Hero Element', () => {
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

  test('picture element exists', () => {
    const picture = document.querySelector('picture');
    expect(picture).not.toBeNull();
  });

  test('contains desktop AVIF source tag with min-width 1024px', () => {
    const sourceAvif = document.querySelector('picture source[type="image/avif"]');
    expect(sourceAvif).not.toBeNull();
    expect(sourceAvif.getAttribute('media')).toMatch(/min-width:\s*1024px/i);
  });

  test('contains tablet WebP source tag with min-width 768px', () => {
    const sourceWebp = document.querySelector('picture source[type="image/webp"]');
    expect(sourceWebp).not.toBeNull();
    expect(sourceWebp.getAttribute('media')).toMatch(/min-width:\s*768px/i);
  });

  test('fallback img has lazy loading, decoding async, and width/height dimensions', () => {
    const img = document.querySelector('picture img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('loading')).toBe('lazy');
    expect(img.getAttribute('decoding')).toBe('async');
    expect(img.getAttribute('width')).toBe('1200');
    expect(img.getAttribute('height')).toBe('600');
    expect(img.getAttribute('alt')).toBeTruthy();
  });
});
