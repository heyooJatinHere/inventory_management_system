# Inventory Management System

Full-stack inventory management app with a FastAPI backend and a React + TypeScript frontend.

## What It Does

- Handles user authentication
- Manages products, customers, and orders
- Shows a dashboard with inventory and sales data
- Uses JWT-based protected routes for authenticated access

## Project Structure

- `inventory_backend/` - FastAPI API, database models, services, and routing
- `inventory_frontend/` - React app, UI pages, API client, and auth flow
- `docker-compose.yaml` - Local container setup for both services

## Tech Stack

- Backend: FastAPI, SQLAlchemy, PostgreSQL, Alembic, Uvicorn
- Frontend: React, TypeScript, Vite, Axios, React Router

## Documentation

- [Backend README](inventory_backend/README.md)
- [Frontend README](inventory_frontend/README.md)

## Deployment

- Backend deployed on [Railway](https://inventorybackend-production-5227.up.railway.app/)
- Frontend deployed on [Vercel](https://inventory-frontend-g4m0kaceo-heyoojatinheres-projects.vercel.app/)
- Frontend API requests point to the backend `/api` base URL
- CORS is configured on the backend for the deployed frontend origin

## Admin Login

- Username: `admin`
- Password: `admin123`

## Local Development

See the service-specific READMEs for exact setup and run commands.
