from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING

# Verificando que no haya referencias circulares
if TYPE_CHECKING:
    from .md_Product import Product

# Creando tabla RequestDetail
class RequestDetail(SQLModel, table= True):
    id: Optional[int] = Field(default= None, primary_key= True)
    productID: Optional[int] = Field(default= None, foreign_key= "product.id")
    amount: int
    fixedPrice: float

# Instanceando Relacion
    product: Optional["Product"] = Relationship(back_populates="requestDetails")