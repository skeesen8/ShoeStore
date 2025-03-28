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

class CreateShoeRequest(BaseModel):
    brand: str
    size: int
    creator_id: int
    color: str
    buy_now: int
    image: str
    start_price: int


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
    shoes_all= db.query(Shoes).all()
    return (shoes_all)  



@router.post("/shoes", status_code=status.HTTP_201_CREATED)
async def create_shoe(
    create_shoe_request: CreateShoeRequest,  
    db: db_dependency
):
    new_shoe = Shoes(
        brand=create_shoe_request.brand,
        size=create_shoe_request.size,
        creator_id=create_shoe_request.creator_id,
        color=create_shoe_request.color,
        buy_now=create_shoe_request.buy_now,
        image=create_shoe_request.image,
        start_price=create_shoe_request.start_price,
    )
    db.add(new_shoe)
    db.commit()
    db.refresh(new_shoe) 
    return new_shoe





@router.get("/shoes/{id}")
async def get_shoe_by_id(id: int, db: db_dependency):
    shoe_by_id = db.query(Shoes).get(id)
    if not shoe_by_id:
        return {"error": "Shoe not found"} 
    return shoe_by_id

