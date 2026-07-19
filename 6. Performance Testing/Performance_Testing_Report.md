# Performance & Testing Report — SHOPEZ

## 1. Test Types Covered
- Functional testing (feature-by-feature)
- API testing (Postman collections)
- Performance/load testing (response time under concurrent users)
- Cross-browser/responsive UI testing

## 2. Functional Test Cases (sample)

| TC ID | Feature | Steps | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| TC-01 | Signup | Register with valid email/password | Account created, redirected to login | *(fill)* | ⬜ |
| TC-02 | Login | Login with correct credentials | JWT issued, redirected to home | *(fill)* | ⬜ |
| TC-03 | Login | Login with wrong password | Error shown, no token issued | *(fill)* | ⬜ |
| TC-04 | Add to Cart | Add product with stock > 0 | Item appears in cart with correct qty | *(fill)* | ⬜ |
| TC-05 | Add to Cart | Try adding out-of-stock product | Blocked with "out of stock" message | *(fill)* | ⬜ |
| TC-06 | Checkout | Complete checkout with test card | Order created, status = Placed | *(fill)* | ⬜ |
| TC-07 | Payment | Simulate failed payment | Order not created, cart preserved | *(fill)* | ⬜ |
| TC-08 | Order Tracking | View order after placing | Status shown correctly | *(fill)* | ⬜ |
| TC-09 | Admin | Add new product | Product appears in catalog immediately | *(fill)* | ⬜ |
| TC-10 | Admin | Update order status | Customer sees updated status | *(fill)* | ⬜ |

## 3. Performance Test Log

| Endpoint | Concurrent Users | Avg Response Time | Error Rate | Notes |
|---|---|---|---|---|
| GET /api/products | 50 | *(fill, target < 2s)* | *(fill)* | |
| POST /api/cart | 50 | *(fill)* | *(fill)* | |
| POST /api/orders | 20 | *(fill)* | *(fill)* | payment-dependent |
| GET /api/orders/:id | 50 | *(fill)* | *(fill)* | |

*Tools: Postman Runner / Apache JMeter / k6 for load simulation.*

## 4. Bug / Error Log

| # | Issue | Severity | Status | Fix Summary |
|---|---|---|---|---|
| 1 | *(fill)* | *(Low/Med/High)* | *(Open/Fixed)* | |
| 2 | | | | |

## 5. Summary
This report is updated continuously across sprints (ongoing validation), not filled
once at the end — each sprint's testing pass appends new rows here.
