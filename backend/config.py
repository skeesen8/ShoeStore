import os
from dotenv import load_dotenv
import psycopg2

from pathlib import Path
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

class Settings:
    PROJECT_NAME:str = "Dog Database"
    PROJECT_VERSION: str = "1.0.0"

    POSTGRES_USER : str = os.getenv("POSTGRES_USER")
    POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
    POSTGRES_SERVER : str = os.getenv("POSTGRES_SERVER","localhost")
    POSTGRES_PORT : str = os.getenv("POSTGRES_PORT",5434) # default postgres port is 5432
    POSTGRES_DB : str = os.getenv("POSTGRES_DB","tdd")
    DATABASE_URL = "postgresql://dogdb_owner:npg_XmOvWu6GBcN8@ep-nameless-butterfly-a5ozk8et-pooler.us-east-2.aws.neon.tech/dogdb?sslmode=require"
    # DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"


settings = Settings()

