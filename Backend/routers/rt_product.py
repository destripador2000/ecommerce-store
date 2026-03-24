from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from database.db import get_db
from models.md_Product import Product as db_Product
from core.logging_config import logger
from schemas.sc_Product import Product

# * Inicializando router
router = APIRouter()

# * API para crear producto
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(product: Product,
                        conex: AsyncSession = Depends(get_db)):
        try:
            product_add = db_Product(name= product.name,
                                    description= product.description,
                                    basePrice= product.basePrice,
                                    urlImage= product.urlImage,
                                    supplierID= product.supplierID)

            conex.add(product_add)
            await conex.commit()
            await conex.refresh(product_add)
            return product_add

        except Exception as e:
            await conex.rollback()
            logger.error(f"ERROR: {e}")
            raise HTTPException(status_code=400, detail= "Error en la petición, intente más tarde")