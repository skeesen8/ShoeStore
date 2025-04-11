from backend.database import Base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text


class Users(Base):
    __tablename__='users'
    id = Column(Integer,primary_key=True,nullable=False)
    username = Column(String,nullable=False)
    email = Column(String,unique=True,nullable=True)
    disabled = Column(Boolean, nullable=True)
    password = Column(String,nullable=True)
    hashed_password=Column (String,nullable=False)

class Shoes(Base):
    __tablename__ = 'shoes'
    id = Column(Integer, primary_key=True,nullable=False)
    brand = Column(String, nullable=False)
    size = Column(Integer, nullable=False)
    creator_id= Column(Integer, nullable=False)
    color = Column(String,nullable=False)
    buy_now=Column(Integer,nullable=False)
    image=Column(String, nullable = False)
    start_price=Column(Integer, nullable=False)


   

    
