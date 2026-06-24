from decimal import Decimal

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.models.order import Order
from app.models.order_item import OrderItem
from app.models.product import Product
from app.schemas.order import OrderCreate


class OrderService:

    @staticmethod
    def create_order(
        db: Session,
        payload: OrderCreate
    ):

        customer = (
            db.query(Customer)
            .filter(
                Customer.id == payload.customer_id,
                Customer.status == True
            )
            .first()
        )

        if not customer:
            raise HTTPException(
                status_code=404,
                detail="Customer not found"
            )

        total_amount = Decimal("0.00")

        order = Order(
            customer_id=payload.customer_id,
            total_amount=0
        )

        db.add(order)
        db.flush()

        for item in payload.items:

            product = (
                db.query(Product)
                .filter(
                    Product.id == item.product_id,
                    Product.status == True
                )
                .first()
            )

            if not product:
                raise HTTPException(
                    status_code=404,
                    detail=f"Product {item.product_id} not found"
                )

            if product.quantity < item.quantity:
                raise HTTPException(
                    status_code=400,
                    detail=f"Insufficient stock for {product.name}"
                )

            subtotal = product.selling_price * item.quantity

            order_item = OrderItem(
                order_id=order.id,
                product_id=item.product_id,
                quantity=item.quantity,
                price=product.selling_price,
                subtotal=subtotal
            )

            db.add(order_item)

            product.quantity -= item.quantity

            total_amount += subtotal

        order.total_amount = total_amount

        db.commit()
        db.refresh(order)

        return order

    @staticmethod
    def get_orders(
        db: Session
    ):

        return (
            db.query(Order)
            .filter(
                Order.status == True
            )
            .all()
        )

    @staticmethod
    def get_order_by_id(
        db: Session,
        order_id: int
    ):

        order = (
            db.query(Order)
            .filter(
                Order.id == order_id,
                Order.status == True
            )
            .first()
        )

        if not order:
            raise HTTPException(
                status_code=404,
                detail="Order not found"
            )

        order_items = (
            db.query(OrderItem)
            .filter(
                OrderItem.order_id == order_id
            )
            .all()
        )

        return {
            "id": order.id,
            "customer_id": order.customer_id,
            "total_amount": order.total_amount,
            "items": order_items
        }

    @staticmethod
    def delete_order(
        db: Session,
        order_id: int
    ):

        order = (
            db.query(Order)
            .filter(
                Order.id == order_id,
                Order.status == True
            )
            .first()
        )

        if not order:
            raise HTTPException(
                status_code=404,
                detail="Order not found"
            )

        order.status = False

        db.commit()

        return {
            "message": "Order deleted successfully"
        }