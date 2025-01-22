from backend.database import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text

class Users_hr(Base):
    __tablename__="users_hr"
    id = Column(Integer,primary_key=True,nullable=False)
    username = Column(String,nullable=False)
    password= Column(String,nullable=False)
    email = Column(String,nullable=False)
    disabled = Column(Boolean, nullable=False)
    hashed_password=Column (String,nullable=False)

    
