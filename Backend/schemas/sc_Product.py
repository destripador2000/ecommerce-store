from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    description: str
    basePrice: float
    urlImage: str
    supplierID: int

    class Config:
        from_attributes = True

class UpdateProduct(BaseModel):
    name: str | None = None
    description: str | None = None
    basePrice: float | None = None
    urlImage: str | None = None
