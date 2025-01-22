from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi import APIRouter, Depends,HTTPException,status,FastAPI
from backend.models import Base
from typing import Annotated
from sqlalchemy.orm import Session
from backend.database import get_db
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text


router = APIRouter()
user_dependency = Annotated[Session, Depends(get_db)]

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class Users_hr(BaseModel):
    id:int
    username:  str | None=None
    password:  str | None=None
    email:     str | None=None
    disabled: bool | None=None
    hashed_password: str | None=None




