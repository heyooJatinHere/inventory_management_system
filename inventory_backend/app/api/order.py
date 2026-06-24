from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.dependencies.auth import get_current_user
from app.schemas.order import (
    OrderCreate,
    OrderResponse,
    OrderDetailResponse
)
from app.services.order_service import OrderService

router = APIRouter(
    prefix="/api/order",
    tags=["Order"]
)


@router.post(
    "/",
    response_model=OrderResponse
)
def create_order(
    payload: OrderCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return OrderService.create_order(
        db,
        payload
    )


@router.get(
    "/",
    response_model=List[OrderResponse]
)
def get_orders(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return OrderService.get_orders(db)


@router.get(
    "/{order_id}",
    response_model=OrderDetailResponse
)
def get_order_by_id(
    order_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return OrderService.get_order_by_id(
        db,
        order_id
    )


@router.delete(
    "/{order_id}"
)
def delete_order(
    order_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return OrderService.delete_order(
        db,
        order_id
    )