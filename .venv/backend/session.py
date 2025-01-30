from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,Session
import psycopg2

from backend.config import Settings
from fastapi import Depends


POSTGRESQL_DATABASE_URL = Settings.DATABASE_URL
print("Database URL is ",POSTGRESQL_DATABASE_URL)
engine = create_engine(POSTGRESQL_DATABASE_URL)



SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)
