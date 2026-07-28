# Day 7 Revision Quiz: Forms & Input Validation

### Question 1
How does `aria-describedby` differ from `<label for="...">`?

### Question 2
What does the `inputmode="numeric"` attribute do on a mobile device?

### Question 3
Why should `<button>` elements explicitly define `type="button"` when used inside a `<form>` if they are not submitting?

---

<details>
<summary>🔍 Check Answers</summary>

1. `<label>` provides the primary accessible name of the input. `aria-describedby` provides secondary context (such as hint text, formatting instructions, or validation error messages).
2. It instructs mobile operating systems to display a numeric keypad when the field is focused, without turning the field into a `<input type="number">` (which adds stepper buttons and standardizes spin behavior).
3. In HTML, `<button>` default `type` inside a `<form>` is `type="submit"`. Failing to explicitly set `type="button"` causes non-submitting buttons to submit the form unexpectedly.

</details>
