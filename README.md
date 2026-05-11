<h1 align="center">✨ Fullstack Chat & Video Calling App ✨</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

## 🚀 Highlights

- 🌐 Real-time Messaging with Typing Indicators & Reactions
- 📹 1-on-1 and Group Video Calls with Screen Sharing & Recording
- 🔐 JWT Authentication & Protected Routes
- 🌍 Language Exchange Platform with 32 Unique UI Themes
- ⚡ Tech Stack: React + Express + MongoDB + TailwindCSS + TanStack Query
- 🧠 Global State Management with Zustand
- 🚨 Error Handling (Frontend & Backend)
- 🚀 Free Deployment
- 🎯 Built with Scalable Technologies like Stream
- 🐳 Docker Support with `docker compose up --build` for easy setup & deployment
- ⏳ And much more!

---

## 🧪 .env Setup

### Backend (`/backend`)

```env
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend`)

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

---

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Run with Docker

Make sure Docker is installed and running, then execute:

```bash
docker compose up --build
```

This command will build and start both the frontend and backend containers together.

---

## 🛠️ Tech Stack

- Frontend: React, TailwindCSS, Zustand, TanStack Query
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Video & Chat: Stream
- Deployment: Docker

---

## 📸 Features Preview

- Real-time chat messaging
- Group & private video calling
- Screen sharing & recording
- Typing indicators and reactions
- Secure authentication system
- Multiple modern UI themes

---

## 📄 License

This project is licensed under the MIT License.