# Ecommerce Store - Documentación del Proyecto

## Descripción

Tienda en línea desarrollada con arquitectura cliente-servidor para la venta de productos tecnológicos en Nicaragua.

## Estructura del Proyecto

```
ecommerce-store/
├── docs/                    # Documentación del proyecto
│   ├── 01_requisitos.md     # Documento de requisitos
│   ├── 02_diagramas.md      # Diagramas de diseño (MermaidJS)
│   ├── 03_cierre_acuerdos.md # Evidencia de cierre y acuerdos
│   ├── 04_modelo_cascada.md # Justificación del modelo en cascada
│   ├── 05_bocetos.md       # Bocetos de interfaz
│   └── 06_cronograma.md    # Cronograma del proyecto
├── Frontend/                # Aplicación frontend (TypeScript + Vite)
├── Backend/                # API backend (FastAPI + Python)
└── README.md              # Este archivo
```

## Documentación por Entregables

| # | Entregable | Puntos | Archivo |
|---|-----------|--------|---------|
| 1 | Documento de Requisitos | 1 punto | [docs/01_requisitos.md](docs/01_requisitos.md) |
| 2 | Diagramas de Diseño | 2 puntos | [docs/02_diagramas.md](docs/02_diagramas.md) |
| 3 | Evidencia de Cierre | 2 puntos | [docs/03_cierre_acuerdos.md](docs/03_cierre_acuerdos.md) |
| 4 | Justificación Cascada | 1 punto | [docs/04_modelo_cascada.md](docs/04_modelo_cascada.md) |
| 5 | Bocetos de Interfaz | 1 punto | [docs/05_bocetos.md](docs/05_bocetos.md) |
| 6 | Cronograma | 1 punto | [docs/06_cronograma.md](docs/06_cronograma.md) |

**Total: 8 puntos**

---

## Tecnologías

### Frontend
- TypeScript
- Vite
- CSS (estilos personalizados)

### Backend
- FastAPI (Python)
- SQLAlchemy (ORM)
- PostgreSQL (Base de datos)
- Alembic (Migraciones)

---

## Funcionalidades Implementadas

- [x] Catálogo de productos en grid
- [x] Filtrado por proveedor
- [x] Modal de checkout
- [x] Simulación de pago
- [x] Registro de usuarios
- [x] Login de usuarios
- [x] Modo mock (desarrollo sin backend)

---

## Requisitos del Sistema

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Backend
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## Documentación Adicional

- [01_requisitos.md](docs/01_requisitos.md) - Catálogo, Carrito, Roles, Inventario, Reportes, Pagos
- [02_diagramas.md](docs/02_diagramas.md) - Casos de uso, ER, Flujo, Arquitectura
- [03_cierre_acuerdos.md](docs/03_cierre_acuerdos.md) - Requisitos finales, Acuerdos, Roles
- [04_modelo_cascada.md](docs/04_modelo_cascada.md) - Por qué cerrar análisis antes de codificar
- [05_bocetos.md](docs/05_bocetos.md) - Layout del Catálogo y Carrito
- [06_cronograma.md](docs/06_cronograma.md) - Fases, hitos, fechas

---

## Licencia

MIT License