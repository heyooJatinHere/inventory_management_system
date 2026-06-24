from decimal import Decimal

from sqlalchemy import Numeric
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class OrderItem(Base):
    __tablename__ = "tbl_order_item"

    id: Mapped[int] = mapped_column(primary_key=True)

    order_id: Mapped[int]

    product_id: Mapped[int]

    quantity: Mapped[int]

    price: Mapped[Decimal] = mapped_column(
        Numeric(10, 2)
    )

    subtotal: Mapped[Decimal] = mapped_column(
        Numeric(10, 2)
    )