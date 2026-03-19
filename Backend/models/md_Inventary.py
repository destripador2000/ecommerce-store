from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING

# Verificamos que no haya referencias circulares
if TYPE_CHECKING:
    from .md_Product import Product 

# Creamos tabla Inventary
class Inventary(SQLModel, table= True):
    id: Optional[int] = Field(default= None, primary_key= True)
    productID: Optional[int] = Field(default= None, foreign_key= "product.id")
    actualStock: int
    minimStock: int

# Instanceamos relación
    product: Optional["Product"] = Relationship(back_populates="inventary")