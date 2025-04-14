from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from models import Base
from database import engine, get_db, test_connection
from routers import auth, shoes
from routers.auth import get_current_user
from config import settings
import logging
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://shoe-store-g3p7la424-skeesen8s-projects.vercel.app",
        "https://shoe-store-kappa-seven.vercel.app",
        "https://frontendshoestore-skeesen8s-projects.vercel.app",
        "https://frontendshoestore.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(shoes.router)

@app.on_event("startup")
async def startup_event():
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        logger.info("Database tables created successfully")
    except Exception as e:
        logger.error(f"Error creating database tables: {str(e)}")
        raise

@app.get("/", status_code=status.HTTP_200_OK)
async def root():
    return {"message": "Welcome to the Shoe Store API"}

@app.get("/health", status_code=status.HTTP_200_OK)
async def health_check():
    try:
        is_connected = await test_connection()
        if is_connected:
            return {"status": "healthy", "database": "connected"}
        else:
            return {"status": "unhealthy", "database": "disconnected"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return {"status": "unhealthy", "error": str(e)}

@app.get("/user", status_code=status.HTTP_200_OK)
async def user(user: dict = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication Failed")
    return {"User": user}

# Add error handlers
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    logger.error(f"Global error handler caught: {str(exc)}")
    return {"error": str(exc)}
