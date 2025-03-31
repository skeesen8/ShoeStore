from fastapi import APIRouter, Depends,HTTPException,status,FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from backend.models import Base, Users
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from backend.database import get_db
from backend.routers import auth,shoes
from backend.routers.auth import get_current_user
from backend.config import settings
from backend.database import engine, SessionLocal 

# testes
    
def create_tables():         
	Base.metadata.create_all(bind=engine)
    
def start_application():
    create_tables()
    app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
    return app

app = start_application()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://shoe-store-g3p7la424-skeesen8s-projects.vercel.app",
        "https://shoe-store-kappa-seven.vercel.app",
        "https://shoe-store-kpulrwgcz-skeesen8s-projects.vercel.app"
    ], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]



app.include_router(auth.router)
app.include_router(shoes.router)


@app.get("/", status_code=status.HTTP_200_OK)
async def user(user:user_dependency, db:db_dependency):
    if user is None:
         raise HTTPException(status_code=401, detail="Authentication Failed")
    return {"User":user}
