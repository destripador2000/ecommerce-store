from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlmodel import col

from database.db import get_db
from models.md_Inventary import Inventary as db_Inventary
from core.logging_config import logger
from schemas.sc_Inventary import Inventary
from schemas.sc_Inventary import updateInventary as scUpdate

router = APIRouter()

# * API  para filtros de inventario
@router.get("/")
async def read_inventary(skip: int = 0,
                        limit: int = 10,
                        lowStock: bool = False,
                        inStock: bool | None = None,
                        productId: int | None = None,
                        conex: AsyncSession = Depends(get_db)):

    try:
        stmt = select(db_Inventary)

        if lowStock is True:
            stmt = stmt.where(col(db_Inventary.actualStock <= db_Inventary.minimStock))
        
        if productId is not None:
            stmt = stmt.where(col(db_Inventary.productID) == productId)
        
        if inStock is True:
            stmt = stmt.where(col(db_Inventary.actualStock) > 0)
        elif inStock is False:
            stmt = stmt.where(col(db_Inventary.actualStock) == 0)
            
        stmt = stmt.offset(skip).limit(limit)
        result = await conex.execute(stmt)
        inventaryRead = result.scalars().all()
    
    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=500, detail= "Error con el servidor")
    
    return inventaryRead

# * API para modificar inventario (stocks)
@router.patch("/{idInventary}")
async def update_intenvary(idInventary: int,
                             mdInventary: scUpdate,
                            conex: AsyncSession = Depends(get_db)):

    stmt = select(db_Inventary)
    
    try:
        if idInventary is not None:
            stmt = stmt.where(db_Inventary.id == idInventary)
        
        result = await conex.execute(stmt)
        inventary = result.scalars().first()
        update_data = mdInventary.model_dump(exclude_unset=True)

        for llave, valor in update_data.items():
            setattr(inventary, llave, valor)

        await conex.commit()
        await conex.refresh(inventary)

    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=404, detail="Inventario inexistente")
    
    return inventary
