const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Problem 05: Custom Accessible Dialog Widget', () => {
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

  test('trigger button has aria-haspopup dialog', () => {
    const trigger = document.getElementById('open-btn');
    expect(trigger).not.toBeNull();
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
  });

  test('dialog has valid id confirm-modal and ARIA labeling attrs', () => {
    const dialog = document.getElementById('confirm-modal');
    expect(dialog).not.toBeNull();
    expect(dialog.tagName.toLowerCase()).toBe('dialog');
    expect(dialog.getAttribute('aria-labelledby')).toBe('modal-title');
    expect(dialog.getAttribute('aria-describedby')).toBe('modal-desc');
  });

  test('modal title and desc exist with matching IDs', () => {
    const title = document.getElementById('modal-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toMatch(/Confirm Deletion/i);

    const desc = document.getElementById('modal-desc');
    expect(desc).not.toBeNull();
  });

  test('modal contains form with method="dialog" and cancel/confirm buttons', () => {
    const form = document.querySelector('dialog form[method="dialog"]');
    expect(form).not.toBeNull();

    const cancelBtn = form.querySelector('button[value="cancel"]');
    expect(cancelBtn).not.toBeNull();

    const confirmBtn = form.querySelector('button[value="confirm"]');
    expect(confirmBtn).not.toBeNull();
  });
});
