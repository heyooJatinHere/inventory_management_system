from decimal import Decimal

from sqlalchemy import Numeric
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base, TimestampMixin


class Order(Base, TimestampMixin):
    __tablename__ = "tbl_order"

    id: Mapped[int] = mapped_column(primary_key=True)

    customer_id: Mapped[int]

    total_amount: Mapped[Decimal] = mapped_column(
        Numeric(10, 2),
        default=0
    )