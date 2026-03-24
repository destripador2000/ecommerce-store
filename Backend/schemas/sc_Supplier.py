from pydantic import BaseModel

class Supplier(BaseModel):
    id: int
    businessName: str
    phoneNumber: str