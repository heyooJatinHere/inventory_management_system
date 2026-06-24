from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate


class ProductService:

    @staticmethod
    def create_product(
        db: Session,
        payload: ProductCreate
    ):

        existing_product = (
            db.query(Product)
            .filter(
                Product.sku == payload.sku,
                Product.status == True
            )
            .first()
        )

        if existing_product:
            raise HTTPException(
                status_code=400,
                detail="Product SKU already exists"
            )

        product = Product(
            name=payload.name,
            sku=payload.sku,
            description=payload.description,
            cost_price=payload.cost_price,
            selling_price=payload.selling_price,
            quantity=payload.quantity,
            reorder_level=payload.reorder_level
        )

        db.add(product)
        db.commit()
        db.refresh(product)

        return product

    @staticmethod
    def get_products(
        db: Session
    ):

        return (
            db.query(Product)
            .filter(
                Product.status == True
            )
            .all()
        )

    @staticmethod
    def get_product_by_id(
        db: Session,
        product_id: int
    ):

        product = (
            db.query(Product)
            .filter(
                Product.id == product_id,
                Product.status == True
            )
            .first()
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        return product

    @staticmethod
    def update_product(
        db: Session,
        product_id: int,
        payload: ProductUpdate
    ):

        product = (
            db.query(Product)
            .filter(
                Product.id == product_id,
                Product.status == True
            )
            .first()
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        product.name = payload.name
        product.sku = payload.sku
        product.description = payload.description
        product.cost_price = payload.cost_price
        product.selling_price = payload.selling_price
        product.quantity = payload.quantity
        product.reorder_level = payload.reorder_level

        db.commit()
        db.refresh(product)

        return product

    @staticmethod
    def delete_product(
        db: Session,
        product_id: int
    ):

        product = (
            db.query(Product)
            .filter(
                Product.id == product_id,
                Product.status == True
            )
            .first()
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        product.status = False

        db.commit()

        return {
            "message": "Product deleted successfully"
        }

    @staticmethod
    def get_low_stock_products(
        db: Session
    ):

        return (
            db.query(Product)
            .filter(
                Product.quantity <= Product.reorder_level,
                Product.status == True
            )
            .all()
        )