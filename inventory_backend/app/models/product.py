from decimal import Decimal

from sqlalchemy import String, ForeignKey, Numeric
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base, TimestampMixin


class Product(Base, TimestampMixin):
    __tablename__ = "tbl_product"

    id: Mapped[int] = mapped_column(primary_key=True)

    sku: Mapped[str] = mapped_column(
        String(50),
        unique=True
    )

    name: Mapped[str]

    description: Mapped[str | None]

    cost_price: Mapped[Decimal] = mapped_column(
        Numeric(10, 2)
    )

    selling_price: Mapped[Decimal] = mapped_column(
        Numeric(10, 2)
    )

    quantity: Mapped[int] = mapped_column(
        default=0
    )

    reorder_level: Mapped[int] = mapped_column(
        default=10
    )

