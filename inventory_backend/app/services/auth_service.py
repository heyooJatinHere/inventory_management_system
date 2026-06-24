from sqlalchemy.orm import Session

from app.core.security import hash_password, create_access_token, verify_password
from app.models.user import User
from app.schemas.auth import UserRegister, UserLogin

class AuthService:

    @staticmethod
    def register_user(
        db: Session,
        payload: UserRegister
    ):
        user=User(
            username=payload.username,
            email=payload.email,
            hashed_password=hash_password(
                payload.password
            )
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return user
    
    @staticmethod
    def login_user(
        db: Session,
        payload: UserLogin
    ):
        user = db.query(User).filter(
            User.username==payload.username
        ).first()
        
        if not user:
            return None
        
        if not verify_password(
            payload.password,
            user.hashed_password
        ): None

        access_token = create_access_token(
            {"sub": user.username}
        )

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }