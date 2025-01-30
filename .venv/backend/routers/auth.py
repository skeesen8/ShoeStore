from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi import APIRouter, Depends,HTTPException,status
from backend.models import Users
from typing import Annotated
from sqlalchemy.orm import Session
from backend.database import get_db
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
from jose import jwt
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from datetime import datetime
import secrets
from datetime import datetime, timedelta, timezone
from backend.session import SessionLocal


router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)


SECRET_KEY = secrets.token_hex(32)
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

bcrypt_context=CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer=OAuth2PasswordBearer(tokenUrl="auth/token")

class CreateUserRequest(BaseModel):
    username: str
    password:str

class Token(BaseModel):
    access_token: str
    token_type: str

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close

db_dependency = Annotated[Session, Depends(get_db)]

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(db:db_dependency,
                      create_user_request:CreateUserRequest):
    create_user_model=Users(
        username=create_user_request.username,
        hashed_password=bcrypt_context.hash(create_user_request.password)

    )
    db.add(create_user_model)
    db.commit()

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data:Annotated[OAuth2PasswordRequestForm,Depends()],
                                     db:db_dependency):
    user=authenticate_user(form_data.username,form_data.password,db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate user.")
    token=create_access_token(user.username,user.id,timedelta(minutes=20))
    return{"access_token":token, "token_type":"bearer"}
                                     
def authenticate_user(username:str, password:str, db:db_dependency):
    user=db.query(Users).filter(Users.username==username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user
    
def create_access_token(username:str, user_id:int, expires_delta:timedelta):
    encode={"sub":username,"id":user_id}
    expires = datetime.now() + expires_delta
    encode.update({'exp':expires})
    return jwt.encode(encode,SECRET_KEY, algorithm=ALGORITHM)


