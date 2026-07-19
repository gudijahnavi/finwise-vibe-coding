# AI Prompt Log — SHOPEZ

Every AI-assisted task is logged here: the prompt used, a summary of the output, and
whether the result was refined/iterated on.

| # | Date | Task | Prompt (summary) | Output Summary | Refined? |
|---|---|---|---|---|---|
| 1 | *(fill)* | Scaffold Express server | "Generate an Express.js boilerplate with folder structure for routes/controllers/models, MongoDB via Mongoose, and JWT auth middleware" | Base server structure with `/routes`, `/controllers`, `/models`, `/middleware`, connected to MongoDB | Yes — adjusted folder names to match team convention |
| 2 | *(fill)* | Design Product schema | "Create a Mongoose schema for an e-commerce product with name, description, price, category, stock, images, ratings" | Schema with validation rules and indexes on `category` and `name` | Yes — added `discountPrice` field |
| 3 | *(fill)* | Cart logic | "Write cart add/update/remove controller logic ensuring quantity can't exceed stock" | Controller functions with stock-check validation | No |
| 4 | *(fill)* | Checkout UI | "Build a 3-step React checkout component: address, payment, review" | JSX component with step state management | Yes — merged review step into payment step for UX |
| 5 | *(fill)* | Payment integration | "Show how to integrate Razorpay checkout in a React + Node app in sandbox mode" | Client-side checkout trigger + server-side order verification endpoint | Yes — added signature verification for security |
| 6 | *(fill)* | Order tracking | "Design an order status enum and API to update/fetch order status" | `Placed → Packed → Shipped → Delivered` enum + PATCH endpoint | No |
| 7 | *(fill)* | Testing | "Generate Jest test cases for the cart controller" | Unit tests covering add/remove/edge cases (stock=0, invalid product id) | Yes — added negative quantity test case |

*Add a row every time an AI tool materially contributes to code, design, or docs —
this log is a required deliverable, not optional.*
