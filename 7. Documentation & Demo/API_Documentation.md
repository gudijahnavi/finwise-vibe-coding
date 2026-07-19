# API Documentation — SHOPEZ

Base URL: `http://localhost:5000/api` (dev) · `https://<deployed-backend>/api` (prod)

## Auth
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/auth/register` | Create a new user account | No |
| POST | `/auth/login` | Login, returns JWT | No |
| POST | `/auth/forgot-password` | Trigger password reset | No |

## Products
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/products` | List products (supports `?category=&search=&minPrice=&maxPrice=`) | No |
| GET | `/products/:id` | Get single product details | No |
| POST | `/products` | Create product | Admin |
| PUT | `/products/:id` | Update product | Admin |
| DELETE | `/products/:id` | Delete product | Admin |

## Cart
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/cart` | Get current user's cart | User |
| POST | `/cart` | Add item to cart `{productId, quantity}` | User |
| PUT | `/cart/:itemId` | Update quantity | User |
| DELETE | `/cart/:itemId` | Remove item | User |

## Orders
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/orders` | Place order from cart `{addressId, paymentId}` | User |
| GET | `/orders` | Get logged-in user's order history | User |
| GET | `/orders/:id` | Get single order detail/status | User |
| PATCH | `/orders/:id/status` | Update order status (Placed/Packed/Shipped/Delivered) | Admin |

## Payments
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/payments/create` | Create a payment intent/order with gateway | User |
| POST | `/payments/verify` | Verify payment signature after gateway callback | User |

## Wishlist & Reviews
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/wishlist/:productId` | Add product to wishlist | User |
| DELETE | `/wishlist/:productId` | Remove from wishlist | User |
| POST | `/products/:id/reviews` | Add rating/review | User |

## Standard Response Shape
```json
{
  "success": true,
  "data": { },
  "message": "..."
}
```

## Error Response Shape
```json
{
  "success": false,
  "message": "Product out of stock",
  "code": "OUT_OF_STOCK"
}
```

*Full request/response schemas and example payloads should be maintained in a
Postman Collection exported alongside this file.*
