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
   

    
