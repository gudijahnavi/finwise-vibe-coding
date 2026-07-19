# Project Proposal — SHOPEZ

## 1. Overview
SHOPEZ is a full-stack e-commerce web application enabling customers to browse,
purchase, and track products online, and enabling admins to manage the store's
catalog and orders through a dedicated dashboard.

## 2. Objectives
- Deliver a working, deployable e-commerce platform within the internship timeline.
- Demonstrate full-stack proficiency: frontend, backend, database, auth, payments, deployment.
- Apply AI-assisted development practices with proper logging (prompt log, AI tool log).

## 3. Key Features
1. User authentication (signup/login/JWT)
2. Product catalog with search & category/price filters
3. Product detail page with reviews & ratings
4. Shopping cart (add/update/remove)
5. Checkout with address management & payment gateway integration
6. Order history + real-time status tracking
7. Wishlist
8. Admin dashboard: product CRUD, order management, user management

## 4. Approach
Agile, sprint-based delivery (see Phase 4 – Planning). Each sprint delivers a
demoable vertical slice (e.g., Sprint 1: Auth + Catalog; Sprint 2: Cart + Checkout;
Sprint 3: Orders + Admin; Sprint 4: Polish + Testing + Deployment).

## 5. Hardware Requirements
- Development laptop/desktop (min 8GB RAM recommended)
- Internet connectivity for cloud DB (MongoDB Atlas) and deployment

## 6. Software Requirements
| Category | Tool |
|---|---|
| IDE | VS Code |
| Runtime | Node.js (LTS) |
| Database | MongoDB Atlas (cloud) |
| API Testing | Postman |
| Version Control | Git + GitHub |
| Design | Figma (wireframes/mockups) |
| Project Tracking | Jira / Trello |
| Deployment | Vercel (frontend), Render/AWS (backend) |

## 7. Expected Outcome
A live, publicly accessible SHOPEZ web app + complete documentation set + demo
video/presentation, submitted as per the 8-phase repository structure.

## 8. Risks & Mitigation
| Risk | Mitigation |
|---|---|
| Payment gateway integration delays | Use sandbox/test-mode keys early in Sprint 2 |
| Scope creep | Freeze feature list after Phase 3; extras go to a "stretch goals" backlog |
| Time overruns near deadline | Buffer sprint (Sprint 4) reserved purely for testing/docs/deployment |
