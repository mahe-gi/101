const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Problem 01: Semantic Article Structure', () => {
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

  test('contains root <article> element', () => {
    const article = document.querySelector('article');
    expect(article).not.toBeNull();
  });

  test('<article> header contains h1 and time with valid datetime attribute', () => {
    const header = document.querySelector('article header');
    expect(header).not.toBeNull();

    const h1 = header.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toMatch(/Understanding the Event Loop in Node\.js/i);

    const time = header.querySelector('time');
    expect(time).not.toBeNull();
    expect(time.getAttribute('datetime')).toBe('2026-07-28');
  });

  test('contains main content <section> with at least 2 paragraphs', () => {
    const section = document.querySelector('article section');
    expect(section).not.toBeNull();
    const ps = section.querySelectorAll('p');
    expect(ps.length).toBeGreaterThanOrEqual(2);
  });

  test('contains <aside> with related links list', () => {
    const aside = document.querySelector('article aside');
    expect(aside).not.toBeNull();
    const ul = aside.querySelector('ul');
    expect(ul).not.toBeNull();
  });

  test('contains <footer> with copyright info', () => {
    const footer = document.querySelector('article footer');
    expect(footer).not.toBeNull();
    expect(footer.textContent).toMatch(/CS101 Engineering/i);
  });
});
