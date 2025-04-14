from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.pool import NullPool
from config import settings
import logging
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Get DATABASE_URL from environment variable
DATABASE_URL = os.getenv("DATABASE_URL", settings.DATABASE_URL)

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

# Convert the DATABASE_URL to async format
async_database_url = DATABASE_URL.replace('postgresql://', 'postgresql+asyncpg://')

logger.info(f"Connecting to database at: {async_database_url}")

# Configure async engine with NullPool for serverless
engine = create_async_engine(
    async_database_url,
    poolclass=NullPool,  # Use NullPool for serverless
    echo=True,  # Enable SQL query logging
    connect_args={
        "ssl": "require" if "sslmode=require" in DATABASE_URL else None
    }
)

# Create async session factory
async_session = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False
)

Base = declarative_base()

async def get_db():
    async with async_session() as session:
        try:
            yield session
        except Exception as e:
            logger.error(f"Database session error: {str(e)}")
            raise
        finally:
            await session.close()

# Function to test database connection
async def test_connection():
    try:
        async with engine.begin() as conn:
            await conn.execute("SELECT 1")
        logger.info("Database connection test successful")
        return True
    except Exception as e:
        logger.error(f"Database connection test failed: {str(e)}")
        return False
