from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.product import router as product_router
from app.api.customer import router as customer_router
from app.api.order import router as order_router
from app.api.dashboard import router as dashboard_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://inventory-frontend-ir4voacon-heyoojatinheres-projects.vercel.app",
        "https://inventory-frontend-8klnnr9to-heyoojatinheres-projects.vercel.app"
    ],
    allow_origin_regex=r"https://inventory-frontend-[a-z0-9-]+-heyoojatinheres-projects\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "Inventory API Running"
    }
