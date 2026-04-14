# Diagramas de Diseño - Ecommerce Store

## 1. Diagrama de Casos de Uso

```mermaid
useCaseDiagram
    actor Cliente
    actor Administrador
    actor Vendedor
    
    rectangle "Ecommerce Store" {
        (Ver catálogo de productos)
        (Buscar productos)
        (Filtrar por proveedor)
        (Agregar al carrito)
        (Realizar pago simulado)
        (Registrar usuario)
        (Iniciar sesión)
        (Ver historial de pedidos)
    }
    
    rectangle "Administración" {
        (Gestionar productos)
        (Gestionar inventario)
        (Ver reportes de ventas)
        (Gestionar fornecedores)
        (Registrar pedido para cliente)
        (Ver inventario)
        (Crear promociones)
    }
    
    Cliente --> (Ver catálogo de productos)
    Cliente --> (Buscar productos)
    Cliente --> (Filtrar por proveedor)
    Cliente --> (Agregar al carrito)
    Cliente --> (Realizar pago simulado)
    Cliente --> (Registrar usuario)
    Cliente --> (Iniciar sesión)
    Cliente --> (Ver historial de pedidos)
    
    Administrador --> (Gestionar productos)
    Administrador --> (Gestionar inventario)
    Administrador --> (Ver reportes de ventas)
    Administrador --> (Gestionar fornecedores)
    
    Vendedor --> (Registrar pedido para cliente)
    Vendedor --> (Ver inventario)
    Vendedor --> (Ver reportes de ventas)
    Vendedor --> (Crear promociones)
```

## 2. Borrador de Diagrama Entidad-Relación

```mermaid
erDiagram
    USUARIO ||--o{ PEDIDO : realiza
    PEDIDO ||--|{ DETALLE_PEDIDO : contiene
    PRODUCTO ||--o{ DETALLE_PEDIDO : incluye
    PRODUCTO ||--|| INVENTARIO : tiene
    PROVEEDOR ||--o{ PRODUCTO : surte
    
    USUARIO {
        int id PK
        string nombre
        string apellido
        string email UK
        string password
        string rol
        date fecha_registro
    }
    
    PEDIDO {
        int id PK
        int usuario_id FK
        float total
        string estado
        date fecha_pedido
        string id_transaccion
    }
    
    PRODUCTO {
        int id PK
        string nombre
        string descripcion
        float basePrice
        string urlImage
        int supplierID FK
    }
    
    DETALLE_PEDIDO {
        int id PK
        int pedido_id FK
        int product_id FK
        int cantidad
        float precio_unitario
    }
    
    INVENTARIO {
        int id PK
        int productID FK
        int actualStock
        int minimStock
    }
    
    PROVEEDOR {
        int id PK
        string businessName
        string phoneNumber
    }
```

## 3. Diagrama de Flujo de Pago

```mermaid
flowchart TD
    A[Seleccionar Producto] --> B[Hacer clic en Añadir]
    B --> C{Abrir Modal Checkout}
    C --> D[Mostrar nombre y precio]
    D --> E[Ingresar cantidad]
    E --> F[Ingresar datos personales]
    F --> G[Ingresar datos de tarjeta]
    G --> H{Validar datos?}
    H -->|No| I[Mostrar error]
    I --> G
    H -->|Sí| J[Procesar pago]
    J --> K[Generar ID de transacción]
    K --> L[Mostrar mensaje de éxito]
    L --> M[Enviar email de confirmación]
```

## 4. Diagrama de Arquitectura

```mermaid
flowchart TB
    subgraph "Frontend"
        UI[Interfaz de Usuario]
        API[API de Servicios]
        STATE[Estado de la App]
    end
    
    subgraph "Backend"
        ROUTES[Routes/Router]
        SCHEMAS[Schemas/Validators]
        MODELS[Modelos DB]
    end
    
    subgraph "Base de Datos"
        DB[(PostgreSQL)]
    end
    
    UI --> API
    API --> ROUTES
    ROUTES --> SCHEMAS
    SCHEMAS --> MODELS
    MODELS --> DB
```

---

## Notas

- Las FK indicam claves foráneas
- PK indica clave primaria
- UK indica clave única
- Las relaciones 1:N se representan con ||--o{
- Las cardinalidades están simplified para el alcance inicial