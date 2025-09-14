# Smart Agri Assistant - Starter Repo

This repository contains a full-stack starter for the Smart Agri Assistant:
- Frontend: React + Tailwind (demo UI)
- Backend: Node.js + Express (mock endpoints)
- Placeholder API integrations: OpenWeather, Bhuvan, YouTube, Payment gateway
- .env.example and SQL schema

**Usage**
1. Start backend:
   ```
   cd backend
   npm install
   cp .env.example .env
   # fill API keys in .env
   node server.js
   ```

2. Start frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

The frontend is configured to call the backend at relative path `/api/*`.
All detection/weather/soil/video responses are mocked for local testing.

Next steps:
- Replace mocks with real ML inference endpoint.
- Integrate OpenWeather, Bhuvan, YouTube Data API.
- Add DB (Postgres) and authentication.
- Implement payment gateway (Razorpay/Stripe) and subsidy logic.

