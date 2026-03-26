from fastapi import FastAPI
from core.config import settings
from routers.rt_product import router as routerProduct
from routers.rt_supplier import router as routerSupplier
from routers.rt_inventary import router as routerInventary
from models import *

app = FastAPI(title=settings.app_name)

app.include_router(routerProduct, prefix="/router/rt_product", tags=["product"])
app.include_router(routerSupplier, prefix="/router/rt_supplier", tags=["supplier"])
app.include_router(routerInventary, prefix="/router/rt_inventary", tags=["inventary"])

app.get("/")
async def root():
    return {"Servidor encendido"}
