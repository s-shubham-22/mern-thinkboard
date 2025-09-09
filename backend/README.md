# Thinkboard Backend

This is the backend for Thinkboard, a note-taking app. It is built with Node.js, Express, MongoDB, and Upstash for rate limiting.

## Features

- REST API for notes (CRUD)
- MongoDB for data storage
- Rate limiting using Upstash Redis
- CORS enabled for frontend integration

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas or local MongoDB instance
- Upstash Redis account

### Installation

```sh
cd backend
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```sh
cp .env.example .env
```

- `PORT` – Port for the backend server (default: 5001)
- `MONGO_URI` – MongoDB connection string
- `UPSTASH_REDIS_REST_URL` – Upstash Redis REST URL
- `UPSTASH_REDIS_REST_TOKEN` – Upstash Redis REST token

### Development

```sh
npm run dev
```

The API will be available at [http://localhost:5001/api](http://localhost:5001/api).

### Production

```sh
npm start
```

## API Endpoints

- `GET /api/notes` – Get all notes
- `GET /api/notes/:id` – Get a note by ID
- `POST /api/notes` – Create a new note
- `PUT /api/notes/:id` – Update a note
- `DELETE /api/notes/:id` – Delete a note

## License

MIT
