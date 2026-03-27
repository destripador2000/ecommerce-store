from pydantic import BaseModel

class Inventary(BaseModel):
    id: int
    productID: int
    actualStock: int
    minimStock: int

    class Config:
        from_attributes = True

class updateInventary(BaseModel):
    actualStock: int | None = None
    minimStock: int | None = None