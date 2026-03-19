from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING

# Verificamos que no hayan referencias circulares
if TYPE_CHECKING:
    from .md_Product import Product

# Creamos tabla Supplier
class Supplier(SQLModel, table= True):
    id: Optional[int] = Field(default= None, primary_key= True)
    businessName: str = Field(index= True)
    phoneNumber: str

# Instanceamos relación
    products: list["Product"] = Relationship(back_populates="supplier")