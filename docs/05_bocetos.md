# Bocetos de Interfaz - Ecommerce Store

## 1. Pantalla: Catálogo de Productos

### 1.1 Estructura de Componentes (Layout)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (barra fija superior)                                  │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ [Logo]                    [Buscar...] [Login] [Carrito]│  │
│ └─────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│ BARRA DE FILTROS (opcional)                               │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ [Todos ▼] [Por precio ▼] [Buscar...]                  │  │
│ └─────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│ GRID DE PRODUCTOS (área principal)                        │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│ │  card   │ │  card   │ │  card   │ │  card   │          │
│ │ ┌─────┐ │ │ ┌─────┐ │ │ ┌─────┐ │ │ ┌─────┐ │          │
│ │ │ img │ │ │ │ img │ │ │ │ img │ │ │ │ img │ │          │
│ │ └─────┘ │ │ └─────┘ │ │ └─────┘ │ │ └─────┘ │          │
│ │ titulo  │ │ titulo  │ │ titulo  │ │ titulo  │          │
│ │ desc   │ │ desc   │ │ desc   │ │ desc   │          │
│ │ precio │ │ precio │ │ precio │ │ precio │          │
│ │ [Añadir]│ │ [Añadir]│ │ [Añadir]│ │ [Añadir]│          │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────────────────┘
│ FOOTER (información de la empresa)                       │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ © 2026 Ecommerce Store | Tel: +505 XXX-XXXX        │  │
│ └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Componente: Carta de Producto (Product Card)

```
┌─────────────────��───────────────┐
│  PRODUCT-CARD                    │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │      IMAGEN               │  │
│  │   (300x300px)             │  │
│  │   PNG/transparent         │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  PRODUCT-TITLE                 │
│  Laptop Gaming Pro              │
│                                 │
│  PRODUCT-DESCRIPTION          │
│  Potente laptop para gaming...   │
│                                 │
│  PRODUCT-SUPPLIER             │
│  Vendido por: TechWorld NI    │
│                                 │
│  PRODUCT-PRICE                │
│  C$ 47,450.00                │
│                                 │
│  [AÑADIR] ♥                   │
└─────────────────────────────────┘
```

### 1.3 Detalles del Layout

| Componente | Propiedades |
|------------|-------------|
| Grid | CSS Grid, `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` |
| Gap entre cartas | `gap: 20px` |
| Imagen | `width: 100%`, `height: 200px`, `object-fit: contain` |
| Padding contenido | `padding: 16px` |
| sombra | `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` |
| border-radius | `border-radius: 8px` |
| Background | `#ffffff` |

---

## 2. Pantalla: Carrito de Compras (Modal de Checkout)

### 2.1 Estructura de Componentes (Layout)

```
┌─────────────────────────────────────────────────────────────┐
│ MODAL OVERLAY (fondo semitransparente)                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ MODAL (centro de pantalla)                             │ │
│ │ ┌─────────────────────────────────────────────────────┐ │ │
│ │ │ [X] Cerrar                              FINALIZAR │ │
│ │ │                                   COMPRA          │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ │ ┌─────────────────────────────────────────────────────┐ │ │
│ │ │ RESUMEN DEL PEDIDO                                  │ │ │
│ │ │ ─────────────────────────────────────────────────  │ │ │
│ │ │ Producto    │ Laptop Gaming Pro                   │ │ │
│ │ │ Precio     │ C$ 47,450.00                        │ │ │
│ │ │ Cantidad   │ [ - ] 1 [ + ]                        │ │ │
│ │ │ ─────────────────────────────────────────────────  │ │ │
│ │ │ TOTAL      │ C$ 47,450.00                        │ │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ │                                                            │
│ │ ┌───────────────────��─────────────────────────────────┐   │
│ │ │ INFORMACIÓN PERSONAL                                 │   │
│ │ │ ─────────────────────────────────────────────────  │   │
│ │ │ Nombre:     [________________]                     │   │
│ │ │ Apellido:   [________________]                     │   │
│ │ │ Email:      [________________]                     │   │
│ │ └─────────────────────────────────────────────────────┘   │
│ │                                                            │
│ │ ┌─────────────────────────────────────────────────────┐   │
│ │ │ DATOS DE PAGO (Simulado)                             │   │
│ │ │ ─────────────────────────────────────────────────  │   │
│ │ │ Número de tarjeta: [________________]              │   │
│ │ │ Vencimiento:  [____] CVV: [____]                 │   │
│ │ │ Nombre en tarjeta: [________________]            │   │
│ │ └─────────────────────────────────────────────────────┘   │
│ │                                                            │
│ │ ┌─────────────────────────────────────────────────────┐ │
│ │ │         PAGAR C$ 47,450.00                         │ │
│ │ └─────────────────────────────────────────────────────┘ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componente: Resumen del Pedido

| Campo | Descripción |
|-------|-------------|
| Producto | Nombre del producto seleccionado |
| Precio | `basePrice` formateado en NIO |
| Cantidad | Selector `- 1 +` (mín: 1, máx: stock) |
| Total | `precio × cantidad` |

### 2.3 Componente: Datos de Pago

```
┌──────────────────────────────────────────────────────┐
│ Campo              │ Formato          │ Validación   │
│ ─────────────────────────────────────────────────────│
│ Número tarjeta    │ XXXX XXXX XXXX   │ 16 dígitos  │
│                   │ XXXX            │             │
│ ─────────────────────────────────────────────────────│
│ Vencimiento      │ MM/YY           │ fecha válida│
│ ─────────────────────────────────────────────────────│
│ CVV              │ XXX             │ 3-4 dígitos │
│ ─────────────────────────────────────────────────────│
│ Nombre tarjeta   �� texto libre     │ requerido  │
└──────────────────────────────────────────────────────┘
```

### 2.4 Estados del Modal

| Estado | Descripción |
|--------|------------|
| Carga | "Cargando..." mientras se procesa |
| formulario | Formulario visible |
| éxito | Mensaje de confirmación con ID de transacción |
| error | Mensaje de error con descripción |

---

## 3. Pantalla: Mensaje de Éxito (Post-Pago)

### 3.1 Estructura

```
┌─────────────────────────────────────────────────────────┐
│ ✓ ÉXITO                                                 │
│                                                         │
│     ┌───────────────────┐                              │
│     │   ✓ (icono)       │                              │
│     └───────────────────┘                              │
│                                                         │
│     ¡Pago Exitoso!                                     │
│     Tu pedido ha sido procesado correctamente.           │
│                                                         │
│     ID de transacción: TXN-ABCD1234                    │
│     Correo: cliente@email.com                          │
│                                                         │
│     [VOLVER AL CATÁLOGO]                                │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Responsive Design (Breakpoints)

| Breakpoint | Ancho | Columnas |
|-----------|-------|---------|
| Mobile | < 576px | 1 columna |
| Tablet | 576px - 992px | 2 columnas |
| Desktop | > 992px | 3-4 columnas |

---

## 5. Paleta de Colores

| Propósito | Color | Hex |
|-----------|-------|-----|
| Primary | Azul | #2563EB |
| Secondary | Gris | #6B7280 |
| Success | Verde | #10B981 |
| Error | Rojo | #EF4444 |
| Background | Blanco | #FFFFFF |
| Surface | Gris claro | #F9FAFB |
| Text primary | Negro | #111827 |
| Text secondary | Gris oscuro | #6B7280 |

---

## 6. Tipografía

| Elemento | Fuente | Tamaño |
|----------|--------|--------|
| Título h1 | system-ui | 24px |
| Título h2 | system-ui | 20px |
| Título h3 | system-ui | 16px |
| Body | system-ui | 14px |
| Small | system-ui | 12px |
| Button | system-ui | 14px |