from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING
from datetime import datetime

# Verifiacamos que no hayan referencias circulares
if TYPE_CHECKING:
    from .md_User import User

# Creamos la tabla Request
class Request(SQLModel, table= True):
    id: Optional[int] = Field(default=None, primary_key=True)
    userID: int = Field(foreign_key="user.id")
    dateCreate: datetime = Field(default_factory=datetime.now)
    status: str

# Instanceamos relación
    user: Optional["User"] = Relationship(back_populates="requests")