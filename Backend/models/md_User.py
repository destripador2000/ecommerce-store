from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING

# Verificamos que no hayan referencias circulares
if TYPE_CHECKING:
    from .md_Request import Request

# Creamos tabla User
class User(SQLModel, table= True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    email: str = Field(index=True, unique=True)
    passwordHash: str
    role: str

# Instanceamos relación
    requests: list["Request"] = Relationship(back_populates="user")