# Project Demonstration Script — SHOPEZ

Storytelling-style demo, not a code walkthrough. Total suggested time: **8–10 minutes**
+ Q&A. One person narrates while another drives the screen (or one person does both).

---

## 1. Hook (30 sec)
> "Imagine you're shopping online and you abandon your cart because checkout takes
> forever, and even after you pay, you have no idea where your order is. That's the
> exact problem SHOPEZ solves."

## 2. Problem → Persona (1 min)
- Introduce Ananya, the persona from Phase 1.
- State the 3 pain points: friction-heavy checkout, no order visibility, weak trust.
- *(Optional: show the Empathy Map or Customer Journey Map for 5 seconds as a visual anchor.)*

## 3. Live Product Walkthrough (4–5 min)
Follow the customer journey in order — this doubles as your architecture proof:

| Step | What you show | What you say |
|---|---|---|
| 1 | Homepage + product search/filter | "Here's SHOPEZ's catalog — users can search and filter instantly." |
| 2 | Product detail page | "Full details, stock, and reviews — building trust before purchase." |
| 3 | Add to cart, view cart | "Cart updates live, no page reloads." |
| 4 | Checkout: address → payment | "Checkout is just 3 steps — this directly fixes the friction problem." |
| 5 | Payment confirmation (sandbox) | "Payment is processed securely through Razorpay/Stripe sandbox." |
| 6 | Order history / tracking page | "And here — the customer can see exactly where their order is, solving pain point #2." |
| 7 | Switch to Admin dashboard | "On the other side, admins manage the whole catalog and update order status in real time." |

## 4. Why This Tech Stack (1 min)
> "We used React for a fast, component-driven UI; Node/Express for a lightweight
> REST API; MongoDB for flexible product/order schemas; and JWT for stateless,
> secure auth — a stack that's both fast to build and easy to scale."
Point to the architecture diagram (`3. Project Design Phase/Solution_Architecture.svg`)
for 10–15 seconds while saying this.

## 5. Engineering Highlights (1 min)
- Mention: environment isolation (`.env`), input validation, password hashing,
  payment signature verification, and continuous performance testing.
- Mention 1–2 AI-assisted steps from the Prompt Log to show responsible AI use.

## 6. Results / Metrics (30 sec)
State whatever you filled into `Final_Project_Report.md` Section 7 — e.g. checkout
step count, average response time, test pass rate.

## 7. Close + Future Scope (30 sec)
> "SHOPEZ solves the core e-commerce friction points today, and is architected to
> extend into multi-vendor support and AI-driven recommendations next."

---

## Anticipated Q&A — Be Ready to Defend

| Likely Question | Suggested Answer Angle |
|---|---|
| Why MongoDB over SQL? | Flexible schema for products with varying attributes; fast to iterate during a short internship timeline |
| How do you handle payment security? | No card data touches our servers; gateway tokenizes; signature verified server-side |
| How does it scale? | Stateless JWT auth + REST API means horizontal scaling behind a load balancer is straightforward |
| What was the hardest part? | *(Personalize from your actual build — pull from Final_Project_Report.md Section 8)* |
| What would you add with more time? | Reference the Future Enhancements section |
| How did you use AI in development? | Reference the Prompt Log — specific, honest examples, not vague claims |

## Demo Day Checklist
- [ ] Seed database with realistic sample products (not "Product 1", "Product 2")
- [ ] Use a real (sandbox) test card so payment doesn't fail live
- [ ] Have 1 pre-placed order ready to show tracking without waiting
- [ ] Test the full flow once, right before presenting, on the actual demo network
- [ ] Have the GitHub repo and live deployment link open in tabs, ready to show
- [ ] Backup: a short screen-recording in case live demo/network fails
