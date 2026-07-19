# Software Requirements Specification (SRS) — SHOPEZ

## 1. Introduction
### 1.1 Purpose
Defines the functional and non-functional requirements for SHOPEZ, a full-stack
e-commerce web application built under the Full Stack Development Internship track.

### 1.2 Scope
SHOPEZ allows customers to browse, purchase, and track products, and allows admins
to manage catalog and orders — see Phase 2 (Requirement Analysis) for the full
functional/non-functional requirement tables, which this SRS incorporates by reference.

### 1.3 Intended Audience
Development team, mentors/evaluators, and future maintainers of the codebase.

## 2. Overall Description
### 2.1 Product Perspective
Standalone full-stack web app (MERN-style), consuming a third-party payment gateway
as an external service.

### 2.2 User Classes
- **Customer** — browses, buys, tracks orders
- **Admin** — manages products, orders, users

### 2.3 Operating Environment
Modern web browsers (Chrome, Edge, Firefox); backend hosted on Node.js runtime;
MongoDB Atlas as the managed database.

## 3. Functional Requirements
See `2. Requirement Analysis/Solution_Requirements.md` (FR-01 to FR-14).

## 4. Non-Functional Requirements
See `2. Requirement Analysis/Solution_Requirements.md` (NFR-01 to NFR-08).

## 5. External Interface Requirements
- **UI**: Responsive React SPA
- **API**: RESTful JSON API (`/api/...`) — see API Documentation in this folder
- **Payment Gateway**: Razorpay/Stripe sandbox API

## 6. System Architecture
See `3. Project Design Phase/Solution_Architecture.svg` for the layered
presentation/API/data-layer diagram.

## 7. Assumptions & Constraints
- Internship timeline limits scope to core e-commerce flows (no multi-vendor support).
- Payment processing uses sandbox/test-mode keys — not a live production payment flow.
