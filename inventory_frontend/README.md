# Inventory Frontend

React + TypeScript + Vite frontend for the inventory management system.

## Stack

- React
- TypeScript
- Vite
- Axios
- React Router

## Requirements

- Node.js 20+
- npm

## Environment

Create a `.env` file in `inventory_frontend/` with:

```env
VITE_API_URL=https://inventorybackend-production-5227.up.railway.app/api
```

For local development, you can point `VITE_API_URL` at your local backend instead.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

The app runs at the Vite dev server URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` type-checks and builds the app
- `npm run lint` runs Oxlint
- `npm run preview` previews the production build

## Deployment Notes

- Set `VITE_API_URL` in Vercel to the Railway backend `/api` URL.
- The API client trims trailing slashes and normalizes the base path, so both local and deployed values work cleanly.
