from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .models import Base
from .database import engine, get_db
from .routers import auth, shoes
from .routers.auth import get_current_user
from .config import settings

def create_tables():
    Base.metadata.create_all(bind=engine)

def start_application():
    create_tables()
    app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost:3000",
            "https://shoe-store-g3p7la424-skeesen8s-projects.vercel.app",
            "https://shoe-store-kappa-seven.vercel.app"
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(auth.router)
    app.include_router(shoes.router)

    return app

app = start_application()

@app.get("/", status_code=status.HTTP_200_OK)
async def user(user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication Failed")
    return {"User": user}
