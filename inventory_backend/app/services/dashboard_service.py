from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.models.order import Order
from app.models.product import Product


class DashboardService:

    @staticmethod
    def get_dashboard(
        db: Session
    ):

        total_products = (
            db.query(Product)
            .filter(
                Product.status == True
            )
            .count()
        )

        total_customers = (
            db.query(Customer)
            .filter(
                Customer.status == True
            )
            .count()
        )

        total_orders = (
            db.query(Order)
            .filter(
                Order.status == True
            )
            .count()
        )

        low_stock_products = (
            db.query(Product)
            .filter(
                Product.quantity <= Product.reorder_level,
                Product.status == True
            )
            .count()
        )

        return {
            "total_products": total_products,
            "total_customers": total_customers,
            "total_orders": total_orders,
            "low_stock_products": low_stock_products
        }