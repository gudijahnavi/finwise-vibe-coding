# Product Backlog — User Stories (SHOPEZ)

Format: **As a** [role] **I want** [goal] **so that** [benefit]

| ID | User Story | Sprint | Priority |
|---|---|---|---|
| US-01 | As a **visitor**, I want to sign up with email/password so that I can create an account | 1 | High |
| US-02 | As a **user**, I want to log in securely so that I can access my account and orders | 1 | High |
| US-03 | As a **user**, I want to browse products by category so that I can find what I need faster | 1 | High |
| US-04 | As a **user**, I want to search products by keyword so that I can find specific items | 1 | High |
| US-05 | As a **user**, I want to view full product details (images, price, stock, reviews) before buying | 1 | High |
| US-06 | As a **user**, I want to add items to a cart so that I can buy multiple products at once | 2 | High |
| US-07 | As a **user**, I want to update quantities or remove items in my cart | 2 | High |
| US-08 | As a **user**, I want to save/select a delivery address at checkout | 2 | High |
| US-09 | As a **user**, I want to pay securely online so that I can complete my purchase | 2 | High |
| US-10 | As a **user**, I want an order confirmation after payment so that I know it succeeded | 2 | High |
| US-11 | As a **user**, I want to view my order history and current status so I know when it'll arrive | 3 | High |
| US-12 | As an **admin**, I want to add/edit/delete products so I can manage the catalog | 3 | High |
| US-13 | As an **admin**, I want to update order status so customers see accurate tracking | 3 | High |
| US-14 | As a **user**, I want to add products to a wishlist so I can buy them later | 3 | Medium |
| US-15 | As a **user**, I want to rate/review purchased products so others can benefit | 3 | Medium |
| US-16 | As an **admin**, I want to view registered users so I can manage the customer base | 3 | Medium |
| US-17 | As a **user**, I want to reset my password if I forget it | 4 | Medium |

## Acceptance Criteria Example (US-09 — Secure Payment)
- Given a filled cart and valid address, when the user selects a payment method and confirms,
  then the payment gateway sandbox processes the transaction and returns success/failure.
- On success: an order record is created with status `Placed`, cart is cleared, confirmation shown.
- On failure: user sees an error message and cart/items are preserved.
