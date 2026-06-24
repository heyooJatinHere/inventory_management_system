from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base, TimestampMixin


class Customer(Base, TimestampMixin):
    __tablename__ = "tbl_customer"

    id: Mapped[int] = mapped_column(primary_key=True)

    full_name: Mapped[str] = mapped_column(
        String(100)
    )

    email: Mapped[str] = mapped_column(
        String(100),
        unique=True
    )

    phone: Mapped[str] = mapped_column(
        String(20)
    )