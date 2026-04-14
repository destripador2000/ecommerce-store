# Evidencia de Cierre y Acuerdos - Ecommerce Store

## 1. Requisitos Finales Validados

### 1.1 Requisitos Funcionales

| ID | Requisito | Prioridad | Estado |
|----|-----------|-----------|--------|
| RF-01 | Catálogo de productos con grid de cartas | Alta | ✅ Completado |
| RF-02 | Filtrado por proveedor | Alta | ✅ Completado |
| RF-03 | Filtrado por precio | Alta | Pendiente |
| RF-04 | Búsqueda por nombre | Media | Pendiente |
| RF-05 | Carrito de compras con modal de checkout | Alta | ✅ Completado |
| RF-06 | Simulación de pago con datos de tarjeta | Alta | ✅ Completado |
| RF-07 | Registro de usuarios (Cliente) | Alta | ✅ Completado |
| RF-08 | Login de usuarios | Alta | ✅ Completado |
| RF-09 | Roles: Cliente, Administrador, Vendedor | Alta | Pendiente |
| RF-10 | Gestión de inventario con alertas | Media | Pendiente |
| RF-11 | Reportes de ventas | Media | Pendiente |
| RF-12 | Gestión de proveedores (CRUD) | Media | Pendiente |
| RF-13 | Historial de pedidos por cliente | Media | Pendiente |

### 1.2 Requisitos No Funcionales

| ID | Requisito | Prioridad | Estado |
|----|-----------|-----------|--------|
| RNF-01 | Moneda en córdobas (NIO) | Alta | ✅ Completado |
| RNF-02 | Soporte para imágenes PNG con fondo transparente | Alta | ✅ Completado |
| RNF-03 | Interfaz responsiva | Alta | Pendiente |
| RNF-04 | Manejo de errores | Media | ✅ Completado |
| RNF-05 | Filtrado de productos vacíos (name != "string") | Alta | ✅ Completado |

### 1.3 Requisitos Ténicos

| ID | Requisito | Prioridad | Estado |
|----|-----------|-----------|--------|
| RT-01 | Backend con FastAPI | Alta | ✅ Completado |
| RT-02 | Frontend con TypeScript + Vite | Alta | ✅ Completado |
| RT-03 | Base de datos PostgreSQL | Alta | ✅ Completado |
| RT-04 | Modo mock para desarrollo sin backend | Alta | ✅ Completado |
| RT-05 | Actualización parcial sin campos nulos | Alta | ✅ Completado |

---

## 2. Acuerdos del Equipo

### 2.1 Alcance Inicial (MVP)

**Incluido en el alcance:**
- ✅ Catálogo de productos con visualización en grid
- ✅ Filtrado por proveedor
- ✅ Modal de checkout para carrito
- ✅ Simulación de pago (solo éxito)
- ✅ Registro y login de clientes
- ✅ Productos mock para desarrollo
- ✅ Backend FastAPI con PostgreSQL

**Excluido del alcance inicial:**
- Carrito persistente (no hay sesión de usuario)
- Pasarela de pago real (simulación)
- Notificaciones de inventario
- Reportes PDF/Excel
- Email real (simulado)
- Panel de administrador completo

### 2.2 Roles del Equipo

| Rol | Responsable | Funciones |
|-----|------------|----------|
| Líder de Proyecto | David Zúñiga | Coordinación general, documentación |
| Desarrollador Backend | David Zúñiga | FastAPI, routers, modelos, base de datos |
| Desarrollador Frontend | David Zúñiga | TypeScript, Vite, UI/UX |
| QA | David Zúñiga | Pruebas, validación de requisitos |

**Nota:** Por ser un proyecto individual, todas las funciones recaen en el mismo integrante.

### 2.3 Acuerdos Técnicos

| Tema | Acuerdo |
|------|---------|
| Moneda | Córdobas Nicaraguenses (NIO) con formato: C$ X,XXX.XX |
| Imágenes | PNG con fondo transparente |
| Precio base | Almacenado en USD, convertido a NIO (tasa: 36.50) |
| Máximo productos | Límite de 100 por consulta (parámetro limit) |
| Timeout de sesión | No implementado en MVP |
| Identificador de transacción | Formato: TXN-XXXXXXXX (8 caracteres) |

### 2.4 Acuerdos de Comunicación

| Canal | Uso |
|-------|-----|
| Git | Control de versiones |
| Commits | Mensajes descriptivos en español |
| Issues | Seguimiento de tareas |

---

## 3. Registro de Cambios al Alcance

| Fecha | Cambio | Motivo | Aprobado |
|-------|--------|-------|---------|
| 2026-04-14 | Eliminación de productos con name="string" | Datos corruptos en BD | ✅ |
| 2026-04-14 | Modo mock para frontend | Backend no disponible para producción | ✅ |
| 2026-04-14 | Adición de 5 productos en mock | Necesidad de tener productos visuales | ✅ |
| 2026-04-14 | UrlImage vacío para personalización | Permite al usuario poner sus imágenes | ✅ |

---

## 4. Criterios de Éxito

El proyecto se considerará exitoso cuando:

1. ✅ El catálogo muestre productos correctamente
2. ✅ El modal de checkout funcione
3. ✅ La simulación de pago muestre mensaje de éxito
4. ✅ Los precios se muestren en córdobas
5. ✅ Las imágenes se muestren correctamente
6. ✅ El frontend funcione sin backend (modo mock)
7. ✅ El backend procese productos correctamente
8. ✅ No aparezcan productos vacíos

---

## 5. Firmas de Validación

| Rol | Nombre | Fecha | Firma |
|-----|-------|-------|-------|
| Cliente | | | |
| Desarrollador | David Zúñiga | 2026-04-14 | ✅ |
| Administrador | | | |