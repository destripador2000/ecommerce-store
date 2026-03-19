from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, TYPE_CHECKING
from datetime import datetime

if TYPE_CHECKING:
    from .md_Product import Product

class Promotion(SQLModel, table= True):
    id: Optional[int] = Field(default= None, primary_key= True)
    productID: Optional[int] = Field(default= None, foreign_key= "product.id")
    discount: float
    dateBegin: datetime = Field(default_factory=datetime.now)
    dateEnd: datetime = Field(default_factory=datetime.now)

    product: list["Product"] = Relationship(back_populates="promotions")