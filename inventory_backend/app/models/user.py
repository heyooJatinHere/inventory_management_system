from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base, TimestampMixin


class User(Base, TimestampMixin):
    __tablename__ = "tbl_user"

    id: Mapped[int] = mapped_column(primary_key=True)

    username: Mapped[str] = mapped_column(
        String(50),
        unique=True
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True
    )

    hashed_password: Mapped[str]

    role: Mapped[str] = mapped_column(
        String(20),
        default="staff"
    )