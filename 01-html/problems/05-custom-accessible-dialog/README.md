# Problem 05: Custom Accessible Dialog (Modal) Widget

## Difficulty: Production / Interview

### Goal
Build a fully semantic, WCAG-compliant HTML modal dialog markup pattern without JavaScript dependencies (using native `<dialog>` or custom ARIA overlay pattern).

### Requirements
1. Trigger element: `<button id="open-btn" aria-haspopup="dialog">Open Confirmation</button>`
2. Dialog Element using native HTML5 `<dialog id="confirm-modal">`:
   - `aria-labelledby="modal-title"`
   - `aria-describedby="modal-desc"`
3. Modal Title: `<h2 id="modal-title">Confirm Deletion</h2>`
4. Modal Description: `<p id="modal-desc">Are you sure you want to permanently delete this repository?</p>`
5. Form inside modal with `method="dialog"`:
   - Cancel button: `<button type="submit" value="cancel">Cancel</button>`
   - Danger confirm button: `<button type="submit" value="confirm">Delete Repository</button>`
