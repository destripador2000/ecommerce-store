from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlmodel import col
from typing import List
from sqlalchemy.orm import joinedload

from database.db import get_db
from models.md_Product import Product as db_Product
from models.md_Inventary import Inventary as db_Inventary
from core.logging_config import logger
from schemas.sc_Product import Product
from schemas.sc_Product import UpdateProduct
from schemas.sc_Product import ProductWithSupplier
from schemas.sc_Inventary import Inventary

# * Inicializando router
router = APIRouter()


# * API para crear producto
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(product: Product,
                         inventary: Inventary,
                         conex: AsyncSession = Depends(get_db)):
    try:
        product_add = db_Product(name=product.name,
                                 description=product.description,
                                 basePrice=product.basePrice,
                                 urlImage=product.urlImage,
                                 supplierID=product.supplierID)

        conex.add(product_add)
        await conex.flush()

        inventary_add = db_Inventary(productID=product_add.id,
                                     actualStock=0,
                                     minimStock=5)

        conex.add(inventary_add)
        await conex.commit()
        await conex.refresh(product_add)
        return product_add

    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=400, detail="Error de registro")


# * API para leer producto
@router.get("/", response_model=List[ProductWithSupplier])
async def read_product(skip: int = 0,
                       limit: int = 100,
                       idProduct: int | None = None,
                       basePrice: float | None = None,
                       idSupplier: int | None = None,
                       conex: AsyncSession = Depends(get_db)):

    try:
        stmt = select(db_Product).options(joinedload(db_Product.supplier))

        if idProduct is not None:
            stmt = stmt.where(col(db_Product.id) == idProduct)

        if basePrice is not None:
            stmt = stmt.where(col(db_Product.basePrice) == basePrice)

        if idSupplier is not None:
            stmt = stmt.where(col(db_Product.supplierID) == idSupplier)

        stmt = stmt.offset(skip).limit(limit)
        result = await conex.execute(stmt)
        producRead = result.scalars().all()

    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=500, detail="Error en la petición")

    return producRead


# API para actualizar producto
@router.patch("/{idProduct}")
async def update_product(idProduct: int,
                         mdProduct: UpdateProduct,
                         conex: AsyncSession = Depends(get_db)):

    stmt = select(db_Product)

    try:
        if idProduct is not None:
            stmt = stmt.where(db_Product.id == idProduct)

        result = await conex.execute(stmt)
        product = result.scalars().first()
        update_data = mdProduct.model_dump(exclude_unset=True)

        for llave, valor in update_data.items():
            setattr(product, llave, valor)

        await conex.commit()
        await conex.refresh(product)

    except Exception as e:
        await conex.rollback()
        logger.error(f"ERROR: {e}")
        raise HTTPException(status_code=404, detail="Producto inexistente")

    return product
