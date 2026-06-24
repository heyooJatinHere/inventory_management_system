# from sqlalchemy import text
# from app.core.database import engine

# try:
#     with engine.connect() as conn:
#         conn.execute(text("SELECT 1"))
#         print("Database connected successfully!")
# except Exception as e:
#     print("Connection failed")
#     print(e)

from passlib.context import CryptContext

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

print(
    pwd_context.hash("admin123")
)