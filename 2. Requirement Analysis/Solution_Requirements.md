# Solution Requirements — SHOPEZ

## A. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | User can register/login (email+password, JWT-based session) | High |
| FR-02 | User can browse products with category filters, price range, and search | High |
| FR-03 | User can view a product detail page (images, description, price, stock, reviews) | High |
| FR-04 | User can add/remove/update quantity of items in cart | High |
| FR-05 | User can checkout: select/add address, choose payment method, place order | High |
| FR-06 | System integrates a payment gateway (Razorpay/Stripe test mode) | High |
| FR-07 | User can view order history and live order status (placed/packed/shipped/delivered) | High |
| FR-08 | User can add products to a wishlist | Medium |
| FR-09 | User can leave a rating/review on purchased products | Medium |
| FR-10 | Admin can add/edit/delete products and manage inventory | High |
| FR-11 | Admin can view all orders and update order status | High |
| FR-12 | Admin can view/manage registered users | Medium |
| FR-13 | System sends order confirmation notification (email or in-app) | Medium |
| FR-14 | User can reset a forgotten password | Medium |

## B. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | **Performance** | Product listing and search must respond within 2 seconds under normal load |
| NFR-02 | **Scalability** | Backend APIs should be stateless and horizontally scalable (support load balancing) |
| NFR-03 | **Security** | Passwords hashed (bcrypt); JWT tokens with expiry; HTTPS in production; input validation to prevent SQL/NoSQL injection & XSS |
| NFR-04 | **Privacy** | Payment details never stored on SHOPEZ servers — handled entirely via payment gateway tokens |
| NFR-05 | **Reliability** | 99% uptime target for the deployed demo environment; graceful error handling with user-friendly messages |
| NFR-06 | **Usability** | Mobile-responsive UI; checkout completable in ≤ 4 steps |
| NFR-07 | **Maintainability** | Modular codebase (MVC/service-layer pattern), documented API endpoints, environment-based config |
| NFR-08 | **Portability** | Containerized via Docker so the app can be deployed on AWS/Azure/GCP/Render interchangeably |

## C. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router, Redux/Context API, Tailwind CSS or Bootstrap |
| Backend | Node.js, Express.js, REST API |
| Database | MongoDB (Mongoose ODM) — alt: PostgreSQL if relational model preferred |
| Authentication | JWT + bcrypt |
| Payments | Razorpay / Stripe (test/sandbox mode) |
| Version Control | Git + GitHub |
| Deployment | Frontend → Vercel/Netlify; Backend → Render/AWS EC2; DB → MongoDB Atlas |
| Containerization (optional) | Docker |
| Project Management | Jira / Trello (Kanban board) |
