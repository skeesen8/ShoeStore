from fastapi import APIRouter, Depends,HTTPException,status,FastAPI
from pydantic import BaseModel
from backend.models import Base
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from backend.database import get_db
from backend.config import settings
from backend.database import engine, SessionLocal 
from backend.routers.users import router




def create_tables():         
	Base.metadata.create_all(bind=engine)
    
def start_application():
    app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
    create_tables()
    return app

app = start_application()

app = FastAPI()

app.include_router(router)

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
async def root():
    return {"message": "Hello World"}
