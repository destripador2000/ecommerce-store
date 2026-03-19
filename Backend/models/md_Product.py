from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING

# Verificamos que no hayan referencias circulares
if TYPE_CHECKING:
    from .md_Supplier import Supplier
    from .md_Inventary import Inventary
    from .md_Promotion import Promotion
    from .md_Request_Detail import RequestDetail

# Creamos tabla Product
class Product(SQLModel, table = True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: str
    basePrice: float
    urlImage: str
    supplierID: Optional[int] = Field(default=None, foreign_key="supplier.id")

# Instanceamos la relación
    supplier: Optional["Supplier"] = Relationship(back_populates="products")
    inventary: Optional["Inventary"] = Relationship(back_populates="product")
    promotions: list["Promotion"] = Relationship(back_populates="product")
    requestDetails: list["RequestDetail"] = Relationship(back_populates="product")