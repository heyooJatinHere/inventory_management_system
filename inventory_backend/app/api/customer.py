from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.dependencies.auth import get_current_user
from app.schemas.customer import (
    CustomerCreate,
    CustomerResponse
)
from app.services.customer_service import CustomerService

router = APIRouter(
    prefix="/api/customer",
    tags=["Customer"]
)


@router.post(
    "/",
    response_model=CustomerResponse
)
def create_customer(
    payload: CustomerCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return CustomerService.create_customer(
        db,
        payload
    )


@router.get(
    "/",
    response_model=List[CustomerResponse]
)
def get_customers(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return CustomerService.get_customers(
        db
    )


@router.get(
    "/{customer_id}",
    response_model=CustomerResponse
)
def get_customer_by_id(
    customer_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return CustomerService.get_customer_by_id(
        db,
        customer_id
    )


@router.delete(
    "/{customer_id}"
)
def delete_customer(
    customer_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return CustomerService.delete_customer(
        db,
        customer_id
    )