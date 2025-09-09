# Thinkboard

Thinkboard is a full-stack note-taking application with a modern React frontend and a Node.js/Express backend. It features rate limiting, MongoDB storage, and a clean, responsive UI.

## Project Structure

- `frontend/` – React app ([Frontend Setup & Usage](./frontend/README.md))
- `backend/` – Node.js/Express REST API ([Backend Setup & Usage](./backend/README.md))

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB Atlas or local MongoDB
- Upstash Redis account (for rate limiting)

### Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd thinkboard
   ```

2. **Install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Configure environment variables:**
   - See [`backend/.env.example`](./backend/.env.example) for required variables.
   - See [Backend Setup & Usage](./backend/README.md) for details.

4. **Run the backend:**
   ```sh
   cd backend
   npm run dev
   ```

5. **Run the frontend:**
   ```sh
   cd frontend
   npm run dev
   ```

6. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5001/api](http://localhost:5001/api)

## License

MIT
