from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.auth import UserRegister, UserLogin
from app.services.auth_service import AuthService
from app.dependencies.auth import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)

@router.post("/register")
def register(
    payload: UserRegister,
    db: Session = Depends(get_db)
):

    return AuthService.register_user(
        db,
        payload
    )

@router.post("/login")
def login(
    payload: UserLogin,
    db: Session=Depends(get_db)
):
    response=AuthService.login_user(
        db,
        payload
    )

    if not response:
        raise HTTPException(
            status_code=401,
            detail="invalid credentials"
        )

    return response

@router.get("/me")
def me(
    current_user: User = Depends(get_current_user)
):
    return current_user