from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from database.db import get_db
from models.md_Supplier import Supplier as db_supplier
from core.logging_config import logger
from schemas.sc_Supplier import Supplier

# * Inicializando router
router = APIRouter()

# * API para crear distribuidor
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_supplier(supplier: Supplier,
                        conex: AsyncSession = Depends(get_db)):
        try:
            supplier_add = db_supplier(businessName= supplier.businessName,
                                    phoneNumber= supplier.phoneNumber)

            conex.add(supplier_add)
            await conex.commit()
            await conex.refresh(supplier_add)
            return supplier_add

        except Exception as e:
            await conex.rollback()
            logger.error(f"ERROR: {e}")
            raise HTTPException(status_code=400, detail= "Error en la petición, intente más tarde")