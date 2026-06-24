# Inventory Backend

FastAPI backend for the inventory management system.

## Stack

- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- Uvicorn

## Requirements

- Python 3.12+
- PostgreSQL database

## Environment

Create a `.env` file in `inventory_backend/` with:

```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=5432
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Install

```bash
pip install -r requirements.txt
```

## Run locally

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API runs at `http://localhost:8000`.

## API Base

Routes are mounted under `/api`, for example:

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/product/`
- `GET /api/customer/`
- `GET /api/order/`
- `GET /api/dashboard/`

## Database

The app creates tables from SQLAlchemy models on startup through `app.core.database`.
If you use Alembic migrations, run them from the `inventory_backend/` directory with your normal Alembic command set.

## Deployment Notes

- Configure the Railway service with the same environment variables listed above.
- Allow the deployed frontend origin in CORS inside `app/main.py`.
- Make sure the frontend points to the backend `/api` base URL.
