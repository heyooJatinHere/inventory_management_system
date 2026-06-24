from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.dependencies.auth import get_current_user
from app.schemas.product import (
    ProductCreate,
    ProductUpdate,
    ProductResponse
)
from app.services.product_service import ProductService

router = APIRouter(
    prefix="/api/product",
    tags=["Product"]
)


@router.post(
    "/",
    response_model=ProductResponse
)
def create_product(
    payload: ProductCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.create_product(
        db,
        payload
    )


@router.get(
    "/",
    response_model=List[ProductResponse]
)
def get_products(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.get_products(db)


@router.get(
    "/low-stock",
    response_model=List[ProductResponse]
)
def get_low_stock_products(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.get_low_stock_products(
        db
    )


@router.get(
    "/{product_id}",
    response_model=ProductResponse
)
def get_product_by_id(
    product_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.get_product_by_id(
        db,
        product_id
    )


@router.put(
    "/{product_id}",
    response_model=ProductResponse
)
def update_product(
    product_id: int,
    payload: ProductUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.update_product(
        db,
        product_id,
        payload
    )


@router.delete(
    "/{product_id}"
)
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return ProductService.delete_product(
        db,
        product_id
    )