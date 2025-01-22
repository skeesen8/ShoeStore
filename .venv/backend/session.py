from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,Session

from backend.config import settings
from fastapi import Depends


POSTGRESQL_DATABASE_URL = settings.DATABASE_URL
print("Database URL is ",POSTGRESQL_DATABASE_URL)
engine = create_engine(POSTGRESQL_DATABASE_URL)


SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)