const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Problem 02: Accessible Registration Form', () => {
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

  test('form has valid action and method', () => {
    const form = document.querySelector('form');
    expect(form).not.toBeNull();
    expect(form.getAttribute('action')).toBe('/api/register');
    expect(form.getAttribute('method')).toBe('POST');
  });

  test('full name input has matching label, autocomplete, and required', () => {
    const nameInput = document.querySelector('input[autocomplete="name"]');
    expect(nameInput).not.toBeNull();
    expect(nameInput.hasAttribute('required')).toBe(true);

    const id = nameInput.getAttribute('id');
    expect(id).toBeTruthy();

    const label = document.querySelector(`label[for="${id}"]`);
    expect(label).not.toBeNull();
  });

  test('email input has type email, aria-describedby pointing to help element', () => {
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).not.toBeNull();

    const describedBy = emailInput.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();

    const helpEl = document.getElementById(describedBy);
    expect(helpEl).not.toBeNull();
  });

  test('password input has minlength 8 and required', () => {
    const pwdInput = document.querySelector('input[type="password"]');
    expect(pwdInput).not.toBeNull();
    expect(pwdInput.getAttribute('minlength')).toBe('8');
    expect(pwdInput.hasAttribute('required')).toBe(true);
  });

  test('submit button has type submit and correct text', () => {
    const btn = document.querySelector('button[type="submit"]');
    expect(btn).not.toBeNull();
    expect(btn.textContent).toMatch(/Create Account/i);
  });
});
