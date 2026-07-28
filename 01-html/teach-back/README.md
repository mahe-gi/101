# Teach-Back: The Feynman Technique

Close all notes, references, and documentation. Explain HTML to a junior developer or non-technical stakeholder using these prompts. Record your voice or write out full explanations.

---

## Prompt 1: The Browser's Internal HTML Processing Pipeline
> *"Imagine a junior developer asks you: 'What actually happens when a user types a URL and the browser receives HTML bytes?'"*
- Explain character encoding (`utf-8`), tokenization, node creation, and DOM tree construction.
- Explain the role of `<!DOCTYPE html>`.
- Explain how script tag attributes (`async`, `defer`) alter this pipeline.

---

## Prompt 2: Semantic HTML vs Generic `<div>` Soup
> *"A junior developer on your team submits a PR with 50 nested `<div>` tags and `onclick` handlers on `<span>` tags. How do you explain why this is unacceptable in production?"*
- Explain accessibility (screen readers, A11y tree).
- Explain SEO and crawler indexing.
- Explain maintenance and code readability.

---

## Prompt 3: Web Security & iFrames
> *"Explain to a backend developer why unescaped HTML user input causes Cross-Site Scripting (XSS) and how `<iframe sandbox>` prevents clickjacking and security breaches."*

---

## Teach-Back Self-Evaluation Checklist
- [ ] Could you explain without pausing for more than 5 seconds?
- [ ] Did you use precise terms (Tokenizer, DOM Node, A11y Tree, Reflow) instead of vague words ("stuff", "things")?
- [ ] Did you provide concrete production examples?
