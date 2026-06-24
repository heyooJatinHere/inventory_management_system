from decimal import Decimal
from pydantic import BaseModel, ConfigDict


class ProductCreate(BaseModel):
    name: str
    sku: str
    description: str | None = None
    cost_price: Decimal
    selling_price: Decimal
    quantity: int
    reorder_level: int


class ProductUpdate(ProductCreate):
    pass


class ProductResponse(BaseModel):
    id: int
    name: str
    sku: str
    description: str | None
    cost_price: Decimal
    selling_price: Decimal
    quantity: int
    reorder_level: int

    model_config = ConfigDict(
        from_attributes=True
    )