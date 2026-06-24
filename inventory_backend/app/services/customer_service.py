from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.schemas.customer import CustomerCreate


class CustomerService:

    @staticmethod
    def create_customer(
        db: Session,
        payload: CustomerCreate
    ):

        existing_customer = (
            db.query(Customer)
            .filter(
                Customer.email == payload.email,
                Customer.status == True
            )
            .first()
        )

        if existing_customer:
            raise HTTPException(
                status_code=400,
                detail="Email already exists"
            )

        customer = Customer(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone
        )

        db.add(customer)
        db.commit()
        db.refresh(customer)

        return customer

    @staticmethod
    def get_customers(
        db: Session
    ):

        return (
            db.query(Customer)
            .filter(
                Customer.status == True
            )
            .all()
        )

    @staticmethod
    def get_customer_by_id(
        db: Session,
        customer_id: int
    ):

        customer = (
            db.query(Customer)
            .filter(
                Customer.id == customer_id,
                Customer.status == True
            )
            .first()
        )

        if not customer:
            raise HTTPException(
                status_code=404,
                detail="Customer not found"
            )

        return customer

    @staticmethod
    def delete_customer(
        db: Session,
        customer_id: int
    ):

        customer = (
            db.query(Customer)
            .filter(
                Customer.id == customer_id,
                Customer.status == True
            )
            .first()
        )

        if not customer:
            raise HTTPException(
                status_code=404,
                detail="Customer not found"
            )

        customer.status = False

        db.commit()

        return {
            "message": "Customer deleted successfully"
        }