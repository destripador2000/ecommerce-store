from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from config import settings

# * Creamos la URL de la base de datos usando la variable de config.
SQLALCHEMY_DATABASE_URL = settings.database_url

# * Creamos el engine de SQLAlchemy.
# * Este es el objeto principal que maneja la conexión con la bd.
engine = create_async_engine(SQLALCHEMY_DATABASE_URL)

# * Creamos una fábrica de sesiones
# * Esta clase es la que usaremos para crear nuevas sesiones de BD para cada petición
SessionLocal = async_sessionmaker(autocommit=False, autoflush=False, bind=engine)

# * Creamos una clase Base
# Todos nuestros modelos de la base de datos (las clases que se convertirán en tablas)
# * Heredaran esta clase
Base = declarative_base()

async def get_db():
    async with SessionLocal() as bd:
        yield bd