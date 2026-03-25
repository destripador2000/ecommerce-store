from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from sqlalchemy import select
from sqlmodel import col

from database.db import get_db
from models.md_Product import Product as db_Product
from models.md_Inventary import Inventary as db_Inventary
from core.logging_config import logger
from schemas.sc_Product import Product
from schemas.sc_Inventary import Inventary

# * Inicializando router
router = APIRouter()

# * API para crear producto
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(product: Product,
                        inventary: Inventary,
                        conex: AsyncSession = Depends(get_db)):
        try:
            product_add = db_Product(name= product.name,
                                    description= product.description,
                                    basePrice= product.basePrice,
                                    urlImage= product.urlImage,
                                    supplierID= product.supplierID)

            conex.add(product_add)
            await conex.flush()

            inventary_add = db_Inventary(productID= product_add.id,
                                        actualStock= 0,
                                        minimStock= 5)

            conex.add(inventary_add)
            await conex.commit()
            await conex.refresh(product_add)
            return product_add

        except Exception as e:
            await conex.rollback()
            logger.error(f"ERROR: {e}")
            raise HTTPException(status_code=400, detail= "Error en la petición, intente más tarde")

# * API  para leer producto
@router.get("/", response_model= List[Product])
async def read_product(conex: AsyncSession = Depends(get_db)):
    
    try:
        stmt = select(db_Product)
        result = await conex.execute(stmt)
        products = result.scalars().all()
    except Exception as e:
            await conex.rollback()
            logger.error(f"ERROR: {e}")
            raise HTTPException(status_code=404, detail= "Producto no encontrado")
    return products

# * API para leer producto por id 
@router.get("/", response_model= List[Product])
async def read_product_by_id(product_id: int, conex: AsyncSession = Depends(get_db)):
    
    try:
        stmt = select(db_Product).where(col(db_Product.id == product_id))
        result = await conex.execute(stmt)
        product = result.scalars().first()
    
    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=404, detail= "Producto no encontrado")
    
    return product