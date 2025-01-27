from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi import APIRouter, Depends,HTTPException,status
from backend.models import Users_hr
from typing import Annotated
from sqlalchemy.orm import Session
from backend.database import get_db
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
import jwt
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from datetime import datetime
import secrets
from datetime import datetime, timedelta, timezone


SECRET_KEY = secrets.token_hex(32)
# ALGORITHM = do I need this?
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class Token(BaseModel):
    access_token: str
    token_type: str

class Token_data(BaseModel):
    username: str | None = None

class Users_base(BaseModel):
    id:int
    username:  str | None=None
    password:  str | None=None
    email:     str | None=None
    disabled: bool | None=None


user_dependency = Annotated[Session, Depends(get_db)]

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

pwd_context=CryptContext(schemes=["bcrypt"], deprecated="auto")

db=user_dependency

router = APIRouter()


def run_hashed_password(password:str):
    return password 

def verify_password(plain_password,hashed_password):
    return pwd_context.verify(plain_password,hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

# def get_user(username: str):
#     username_db = Users_hr.username
#     if username == username_db:
#         user_dict= Users_hr[username]
#     return user_dict


def get_user(db:user_dependency, username: str):
    print(db.query(Users_hr))
    return db.query(Users_hr).filter(Users_hr.username==username).first()

    
def authenticate_user(db:user_dependency,username:str,password:str):
    user = get_user(db,username)
    if not user:
        return False
    if not verify_password(password,user.hashed_password):
        return False
    return user

    

def decode_token(token):
    return Users_hr(
        username=token, email="how can I make this dynamic?", id="Users_hr.id")

def create_access_token(data: dict, expires_delta: timedelta | None=None):
    to_encode=data.copy()
    if expires_delta:
        expire=datetime.now(timezone.utc) + expires_delta
    else:
        expire=datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt=jwt.encode(to_encode, SECRET_KEY)
    return encoded_jwt

async def get_current_user(token:Annotated[str,Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate":"Bearer"}
    )
    try:
        payload=jwt.decode(token,SECRET_KEY)
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = Token_data(username=username)
    except InvalidTokenError:
        raise credentials_exception
    user=get_user(user_dependency, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(
    current_user: Annotated[Users_base, Depends(get_current_user)],
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user



@router.post("/token")
async def login_for_access_token(
    form_data:Annotated[OAuth2PasswordRequestForm,Depends(),db:user_dependency],
)-> Token:
    user=authenticate_user(db,form_data.username,form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate":"Bearer"},
        )
    access_token_expires=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token=create_access_token(
        data={"sub":user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


@router.get("/users/me")
async def read_users_me(current_user: Annotated[Users_hr, Depends(get_current_active_user)]):
    return current_user



@router.get("/users")
async def read_items(token:Annotated[str, Depends(oauth2_scheme)]):
    return{"token":token}




@router.post("/users/")
async def add_user(new_user:Users_base, db:user_dependency):
    hashed_password = get_password_hash(new_user.password)
    db_new_user = Users_hr(
    username=new_user.username,
    id= new_user.id,
    password = new_user.password,
    email = new_user.email,
    disabled=new_user.disabled,
    hashed_password=hashed_password)
    db.add(db_new_user)
    db.commit()
    db.refresh(db_new_user)
    return "success"
    
    

