# Documento de Requisitos - Ecommerce Store

## 1. Catálogo de Productos

### 1.1 Funcionalidades del Catálogo
- **Visualización de productos**: Grid de cartas mostrando imagen, nombre, descripción, precio y proveedor
- **Filtrado por categoría**: Filtrar productos por proveedor, rango de precio
- **Búsqueda**: Barra de búsqueda por nombre de producto
- **Paginación**: Carga de productos con límite y salto (skip/limit)
- **Imágenes**: Soporte para imágenes PNG con fondo transparente

### 1.2 Estructura del Producto
```
- id: integer
- name: string
- description: string
- basePrice: float (en córdobas NIO)
- urlImage: string (URL de imagen o vacío)
- supplierID: integer
- supplier: { id, businessName, phoneNumber }
```

## 2. Carrito de Compras

### 2.1 Funcionalidades del Carrito
- **Agregar producto**: Botón "Añadir" en cada carta de producto
- **Selección de cantidad**: Modal de checkout con selector de cantidad
- **Cálculo de total**: Precio base × cantidad
- **Identificación de producto**: Mostrar nombre y precio unitario en el checkout
- **Confirmación de compra**: Integración con formulario de datos del cliente

## 3. Roles de Usuario

### 3.1 Cliente
- **Registro**: Formulario con nombre, apellido, email, contraseña
- **Login**: Autenticación con email y contraseña
- **Historial de pedidos**: Ver pedidos anteriores
- **Datos de pago**: Información de tarjeta guardada (simulada)

### 3.2 Administrador
- **Gestión de productos**: CRUD completo de productos
- **Gestión de inventario**: Control de stock por producto
- **Reportes**: Generación de reportes de ventas
- **Gestión de fornecedores**: CRUD de proveedores

### 3.3 Vendedor
- **Registro de pedidos**: Crear pedidos en nombre del cliente
- **Consulta de inventario**: Ver stock disponible
- **Reporte de ventas**: Ver ventas realizadas
- **Gestión de promociones**: Crear/editar promociones

## 4. Inventario con Alertas

### 4.1 Modelo de Inventario
```
- id: integer
- productID: integer (FK)
- actualStock: integer (cantidad actual)
- minimStock: integer (umbral mínimo de alerta)
```

### 4.2 Alertas
- **Alerta de stock bajo**: Notificación cuando actualStock ≤ minimStock
- **Alerta de stock agotado**: Notificación cuando actualStock = 0
- **Reporte de inventario**: Listado de productos con stock bajo

## 5. Reportes de Ventas

### 5.1 Tipos de Reportes
- **Ventas por fecha**: Filtrado por rango de fechas
- **Ventas por producto**: Productos más vendidos
- **Ventas por vendedor**: Comisión por vendedor
- **Ventas por cliente**: Historial de compras por cliente
- **Totales**: Ingresos totales, cantidad de pedidos

### 5.2 Métricas
- Total de ingresos (suma de basePrice × cantidad)
- Cantidad de pedidos
- Producto más vendido
- Cliente más activo

## 6. Simulación de Pagos

### 6.1 Flujo de Pago Simulado
1. Cliente selecciona producto y cantidad
2. Sistema calcula total (precio × cantidad)
3. Cliente ingresa datos de tarjeta:
   - Número de tarjeta (formato: XXXX XXXX XXXX XXXX)
   - Fecha de vencimiento (MM/YY)
   - CVV (3-4 dígitos)
   - Nombre en tarjeta
4. Cliente ingresa datos personales:
   - Nombre
   - Apellido
   - Email
5. Sistema procesa simulación (siempre exitosa)
6. Sistema genera ID de transacción (formato: TXN-XXXXXXXX)
7. Sistema envía email de confirmación (simulado)

### 6.2 Validaciones
- Número de tarjeta: 16 dígitos
- Fecha de vencimiento: MM/YY válida
- CVV: 3-4 dígitos
- Email: Formato válido

### 6.3 Respuesta de Pago
- Éxito: Mostrar mensaje de confirmación con ID de transacción
- Error: Mostrar mensaje de error (simulado solo para datos inválidos)

---

## Notas de Implementación

- Backend: FastAPI (Python) con SQLAlchemy
- Frontend: TypeScript + Vite
- Base de datos: PostgreSQL
- Modalidad actual: Datos mock en frontend para desarrollo sin backend