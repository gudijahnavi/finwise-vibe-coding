# Environment Setup — SHOPEZ

## 1. Project Structure
```
shopez/
├── client/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── .env                # REACT_APP_API_URL, REACT_APP_RAZORPAY_KEY
├── server/                 # Node/Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   ├── package.json
│   └── .env                # MONGO_URI, JWT_SECRET, PAYMENT_KEY, PAYMENT_SECRET
├── docker-compose.yml       # optional: spin up backend + local Mongo
└── README.md
```

## 2. Virtual/Isolated Environment
- **Node projects** don't need a Python-style venv, but dependencies are isolated
  per-folder via `node_modules` + a committed `package-lock.json`.
- **Optional Docker setup** for full parity across dev machines:
```yaml
# docker-compose.yml (example)
services:
  server:
    build: ./server
    ports: ["5000:5000"]
    env_file: ./server/.env
  client:
    build: ./client
    ports: ["3000:3000"]
```

## 3. Environment Variables (`.env` — never committed to Git)
**server/.env**
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/shopez
JWT_SECRET=<random-long-secret>
JWT_EXPIRES_IN=7d
RAZORPAY_KEY_ID=<key>
RAZORPAY_KEY_SECRET=<secret>
CLIENT_URL=http://localhost:3000
```
**client/.env**
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_RAZORPAY_KEY_ID=<public key only>
```
`.env` files are listed in `.gitignore` — secrets are never hardcoded in source files.

## 4. Dependency Manifests
- `server/package.json` lists: express, mongoose, jsonwebtoken, bcryptjs, cors,
  dotenv, razorpay/stripe, multer, express-validator
- `client/package.json` lists: react, react-router-dom, axios, redux/@reduxjs/toolkit
  (or context API), tailwindcss

Anyone cloning the repo can reproduce the setup with:
```bash
cd server && npm install && npm run dev
cd client && npm install && npm start
```

## 5. Version Control
- `main` branch = stable/deployable
- `dev` branch = integration branch
- Feature branches: `feature/cart-api`, `feature/checkout-ui`, etc.
- PRs reviewed before merging into `dev`
