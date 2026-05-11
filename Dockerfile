# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# -------------------------
# Backend Setup
# -------------------------
WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend/ .

# -------------------------
# Frontend Setup
# -------------------------
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

# Build frontend
RUN npm run build

# -------------------------
# Install serve globally
# -------------------------
RUN npm install -g serve concurrently

# -------------------------
# Expose ports
# -------------------------
EXPOSE 5000
EXPOSE 5173

# -------------------------
# Start both frontend & backend
# -------------------------
WORKDIR /app

CMD concurrently \
    "cd backend && node src/server.js" \
    "serve -s frontend/dist -l 5173"