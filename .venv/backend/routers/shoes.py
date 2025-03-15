from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi import APIRouter, Depends,HTTPException,status
from backend.models import Shoes
from typing import Annotated
from sqlalchemy.orm import Session
from backend.database import get_db
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
from jose import jwt, JWTError
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from datetime import datetime
import secrets
from datetime import datetime, timedelta, timezone
from backend.session import SessionLocal
import logging

class Shoes_base(BaseModel):
    id:int
    brand:  str | None=None
    size:  int | None=None
    creator_id:     int | None=None
    color: str | None=None
    buy_now: int | None=None
    image:str | None=None
    start_price: int | None=None


    class Config:
         from_attributes=True


router = APIRouter(
    prefix="",
    tags=[""]
)

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close

db_dependency = Annotated[Session, Depends(get_db)]

@router.get("/shoes")
async def all_shoes(db:db_dependency):
    # return(["string of words"])
    shoes_all= db.query(Shoes).all()
    return (shoes_all)  

@router.post("/shoes", response_model=Shoes_base)
async def create_shoes(shoes:Shoes_base, db:db_dependency):
    db_shoes=Shoes(**shoes.model_dump())
    db.add(db_shoes)
    db.commit()         
    db.refresh(db_shoes)
    return db_shoes