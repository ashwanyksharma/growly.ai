# Growly – AI Ad Creative Generator

Growly is a simple yet powerful web application designed to help businesses create high-converting ad creatives in minutes.  
It comes with a clean, responsive UI for capturing leads and a secure backend to store them in a database.

---

## 🚀 Overview
This project lets users:
- Submit their details via a modern, mobile-friendly form
- Store lead information securely in MongoDB
- Get real-time validation for better user experience
- Connect frontend and backend seamlessly

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- TailwindCSS
- Axios for HTTP requests

**Backend**
- Node.js & Express
- MongoDB with Mongoose
- dotenv, CORS

**Hosting**
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---
## 💻 Run Locally
### 1. Clone the repo
```bash
git clone https://github.com/ashwanyksharma/growly.git
cd growly


### 2. Install dependencies

**Frontend**
```bash
cd Client
npm install

**Backend**
cd server
npm install

###3. Add environment variables

Create a .env file inside the backend folder:

MONGO_URI=your-mongodb-uri
PORT=5000

##Start backend
cd server
npx nodemon server.js (Install nodemon)

##Start frontend
cd Client
npm run dev

🌍 Live Links

    Frontend (Vercel): https://growly-frontend-three.vercel.app/
    Backend API (Render): https://growly-1-35v4.onrender.com/

