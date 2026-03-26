from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlmodel import col
from typing import List

from database.db import get_db
from models.md_Inventary import Inventary as db_Inventary
from core.logging_config import logger
from schemas.sc_Inventary import Inventary

router = APIRouter()

# * API  para filtros de inventario
@router.get("/")
async def read_product(skip: int = 0,
                        limit: int = 10,
                        lowStock: bool = False,
                        in_stock: bool | None = None,
                        product_id: int | None = None,
                        conex: AsyncSession = Depends(get_db)):

    try:
        stmt = select(db_Inventary)

        if lowStock is True:
            stmt = stmt.where(col(db_Inventary.actualStock <= db_Inventary.minimStock))
        
        if product_id is not None:
            stmt = stmt.where(col(db_Inventary.productID) == product_id)
        
        if in_stock is True:
            stmt = stmt.where(col(db_Inventary.actualStock) > 0)
        elif in_stock is False:
            stmt = stmt.where(col(db_Inventary.actualStock) == 0)
            
        stmt = stmt.offset(skip).limit(limit)
        result = await conex.execute(stmt)
        inventaryRead = result.scalars().all()

    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=500, detail= "Error con el servidor")
    
    return inventaryRead