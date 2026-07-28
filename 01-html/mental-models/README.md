# Mental Models: HTML Architecture ASCII Diagrams

Complete these empty diagrams by replacing `[ ? ]` with correct terms and relationships.

---

## Diagram 1: The Critical Rendering Path & HTML Parsing

```
HTML Bytes
    │
    ▼
[ ? Encoding Stage ]
    │
    ▼
[ ? Tokenizer ]
    │
    ▼
[ ? Nodes ]
    │
    ▼
┌───────────────────────┐
│     DOM Tree          │
└───────────┬───────────┘
            │
            ├──────────────────────────► [ ? Secondary Tree for Assistive Tech ]
            │
            ▼
┌───────────────────────┐           ┌───────────────────────┐
│     [ ? Tree ]        │ ◄─────────┤     CSSOM Tree        │
└───────────┬───────────┘           └───────────────────────┘
            │
            ▼
   [ ? Layout Stage ] (Calculates geometry)
            │
            ▼
   [ ? Paint Stage ] (Rasterization)
```

---

## Diagram 2: Script Execution Behaviors (`async` vs `defer` vs default)

Complete the timeline for each script loading method:

```
1. Default <script src="...">:
HTML Parsing:  ██████████ [ ? ] ██████████████
Script Fetch:             █████
Script Exec:                  ████

2. <script async src="...">:
HTML Parsing:  ██████████████ [ ? ] ██████████
Script Fetch:        █████████
Script Exec:                  ████

3. <script defer src="...">:
HTML Parsing:  ███████████████████████████████
Script Fetch:        █████████
Script Exec:                                  [ ? ]
```

---

## Diagram 3: Form Data Packaging & Encoding Types

```
User Clicks Submit Button
            │
            ▼
Does form have file input (`<input type="file">`)?
     ├── YES ──► Enctype MUST be: [ ? ]
     └── NO  ──► Enctype defaults to: [ ? ]
```

---

## Diagram 4: HTML Accessibility Tree Mapping

```
HTML Markup:
<button aria-label="Close Dialog">✕</button>

Accessibility Node:
┌──────────────────────────────────────┐
│ Role:     [ ? ]                      │
│ Name:     [ ? ]                      │
│ State:    [ ? ]                      │
└──────────────────────────────────────┘
```
