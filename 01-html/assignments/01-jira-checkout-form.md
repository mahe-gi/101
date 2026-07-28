# [JIRA-PAY-4029] Build Production-Grade Accessible Payment Checkout Form

**Ticket Type**: Task / Feature  
**Priority**: High  
**Assignee**: Mahesh (Product Engineer)  
**Target Milestone**: Sprint 14 - Checkout Accessibility Audit  
**Compliance Requirement**: WCAG 2.1 AA & PCI-DSS Frontend Markup Spec  

---

## 📋 Context & Business Need
Our checkout conversion funnel currently drops 8% of users using assistive technologies (screen readers, keyboard-only navigation). Furthermore, automated Lighthouse accessibility score is stuck at 68/100 due to improper markup structure, missing input labels, and invalid ARIA attributes.

You must build the complete HTML structure for our enterprise checkout form.

---

## 🎯 Acceptance Criteria

### 1. Document Landmark Architecture
- Wrap checkout in `<main id="checkout-container">`.
- Group checkout steps into `<section aria-labelledby="...">` elements:
  - Step 1: Billing & Shipping Address
  - Step 2: Payment Method (Credit Card / UPI / NetBanking)
  - Step 3: Order Summary Table
- Include a sticky `<aside>` for order totals and coupon code input.

### 2. Form Input Requirements & Native HTML5 Constraints
- **Full Name**: `type="text"`, `autocomplete="cc-name"`, `required`
- **Card Number**: `type="text"`, `inputmode="numeric"`, `pattern="[0-9]{13,19}"`, `autocomplete="cc-number"`, `aria-invalid="false"`
- **Expiry Date**: `<input type="month">` or month/year inputs with `autocomplete="cc-exp"`
- **CVV**: `type="password"`, `inputmode="numeric"`, `maxlength="4"`, `autocomplete="cc-csc"`, `aria-describedby="cvv-tooltip"`
- **CVV Tooltip**: `<span id="cvv-tooltip">` explaining 3 digits on back of card.

### 3. Accessible Radio Group (Payment Options)
- Fieldset wrapper `<fieldset>` with legend `<legend>Select Payment Method</legend>`.
- Options for "Credit Card", "UPI", and "NetBanking".
- Each radio button must have a linked label.

### 4. Order Summary Table
- Semantic `<table>` with `<thead>`, `<tbody>`, and `<tfoot>`.
- Item columns: Product Name, Qty, Unit Price, Total Price.
- Table header cells must use `scope="col"`.
- Total calculation row in `<tfoot>` using `scope="row"` for label cell.

### 5. Security & CSP Compliance
- Form MUST use `action="/api/checkout/process"` and `method="POST"`.
- NO inline JavaScript event handlers (`onclick`, `onsubmit`, etc.).

---

## 🧪 Definition of Done
1. Hand-code HTML in `assignments/01-checkout/index.html`.
2. Validated against W3C HTML validator with zero errors.
3. VoiceOver / NVDA screen reader test: Every input announced with role, label, and description.
