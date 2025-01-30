from fastapi import APIRouter, Depends,HTTPException,status,FastAPI
from pydantic import BaseModel
from backend.models import Base
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from backend.database import get_db
from backend.routers import auth
from backend.config import settings
from backend.database import engine, SessionLocal 
# from backend.routers.test_user import router
# from backend.routers.users import router




    
def create_tables():         
	Base.metadata.create_all(bind=engine)
    
def start_application():
    create_tables()
    app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
    # create_tables()
    return app

app = start_application()


app = FastAPI()
db_dependency = Annotated[Session, Depends(get_db)]


app.include_router(auth.router)

@app.get("/", status_code=status.HTTP_200_OK)
async def user(user:None, db:db_dependency):
    if user is None:
         raise HTTPException(status_code=401, detail="Authentication Failed")
    return {"User":user}
