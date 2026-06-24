from decimal import Decimal

from pydantic import BaseModel, ConfigDict


class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int


class OrderCreate(BaseModel):
    customer_id: int
    items: list[OrderItemCreate]


class OrderResponse(BaseModel):
    id: int
    customer_id: int
    total_amount: Decimal

    model_config = ConfigDict(
        from_attributes=True
    )


class OrderItemResponse(BaseModel):
    product_id: int
    quantity: int
    price: Decimal
    subtotal: Decimal

    model_config = ConfigDict(
        from_attributes=True
    )


class OrderDetailResponse(BaseModel):
    id: int
    customer_id: int
    total_amount: Decimal
    items: list[OrderItemResponse]