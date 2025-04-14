import os
from dotenv import load_dotenv
import psycopg2

from pathlib import Path
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

class Settings:
    PROJECT_NAME:str = "Shoe Store API"
    PROJECT_VERSION: str = "1.0.0"

    # Get DATABASE_URL from environment variable, with a fallback for local development
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://dogdb_owner:npg_XmOvWu6GBcN8@ep-nameless-butterfly-a5ozk8et-pooler.us-east-2.aws.neon.tech/dogdb?sslmode=require")

settings = Settings()

