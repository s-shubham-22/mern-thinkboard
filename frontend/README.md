# Thinkboard Frontend

This is the frontend for Thinkboard, a simple note-taking app built with React, Vite, Tailwind CSS, and DaisyUI.

## Features

- Create, view, edit, and delete notes
- Responsive UI with DaisyUI and Tailwind CSS
- Rate limiting feedback
- Toast notifications for actions
- API integration with the backend

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
cd frontend
npm install
```

### Development

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

- `src/components/` – Reusable UI components
- `src/pages/` – Page components for routing
- `src/lib/` – Utility and API helper files

## Environment

The frontend expects the backend API to be available at `http://localhost:5001/api` in development.

## License

MIT
