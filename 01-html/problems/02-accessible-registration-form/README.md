# Problem 02: Accessible Registration Form

## Difficulty: Medium

### Goal
Build a fully accessible HTML5 registration form complying with WCAG 2.1 AA guidelines.

### Requirements
1. Form element with `action="/api/register"` and `method="POST"`.
2. Text input for Full Name:
   - `<label>` properly linked via `for` and `id` attributes.
   - `autocomplete="name"`
   - `required` attribute.
3. Email input:
   - `<label>` properly linked via `for` and `id`.
   - `type="email"`
   - `autocomplete="email"`
   - `aria-describedby` pointing to a hint element `<span id="email-help">`.
4. Password input:
   - `<label>` properly linked via `for` and `id`.
   - `type="password"`
   - `minlength="8"`
   - `required`
5. Terms & Conditions checkbox:
   - `<input type="checkbox">` properly linked to its label.
   - `required`
6. Submit button:
   - `<button type="submit">` with text "Create Account".
