# Cronograma del Proyecto - Ecommerce Store

## Fases del Modelo en Cascada

| Fase | Descripción | Duración |
|------|-------------|----------|
| 1. Requisitos | Análisis y documentación de requisitos | 1 semana |
| 2. Diseño | Diagramas, modelos, arquitectura | 1 semana |
| 3. Implementación | Codificación de backend y frontend | 2 semanas |
| 4. Verificación | Pruebas, QA, validaciones | 1 semana |
| 5. Mantenimiento | Correcciones, mejoras | 1 semana |

---

## Cronograma Detallado

### Fase 1: Requisitos

| Actividad | Entregable | Fecha Inicio | Fecha Fin | Estado |
|----------|------------|--------------|-----------|--------|
| Reunión con stakeholders | Lista de requisitos iniciales | 2026-04-07 | 2026-04-08 | ✅ Completado |
| Documento de requisitos v1 | 01_requisitos.md | 2026-04-09 | 2026-04-10 | ✅ Completado |
| Validación con cliente | Requirements firmados | 2026-04-11 | 2026-04-11 | ✅ Completado |
| Cierre de fase de requisitos | Acta de cierre | 2026-04-12 | 2026-04-12 | ✅ Completado |

**Hito: R01 - Documento de requisitos aprobado**

---

### Fase 2: Diseño

| Actividad | Entregable | Fecha Inicio | Fecha Fin | Estado |
|----------|------------|--------------|-----------|--------|
| Diagrama de casos de uso | 02_diagramas.md | 2026-04-13 | 2026-04-13 | ✅ Completado |
| Diseño de base de datos | Modelo ER | 2026-04-13 | 2026-04-14 | ✅ Completado |
| Arquitectura del sistema | Diagramas de flujo | 2026-04-14 | 2026-04-14 | ✅ Completado |
| Bocetos de interface | 05_bocetos.md | 2026-04-14 | 2026-04-15 | ✅ Completado |
| Cierre de fase de diseño | Acta de cierre | 2026-04-15 | 2026-04-15 | ✅ Completado |

**Hito: D01 - Diseño aprobado, lista para implementación**

---

### Fase 3: Implementación

| Actividad | Entregable | Fecha Inicio | Fecha Fin | Estado |
|----------|------------|--------------|-----------|--------|
| Configuración de entorno | Repositorio configurado | 2026-04-14 | 2026-04-14 | ✅ Completado |
| Modelos de base de datos | Modelos SQLAlchemy | 2026-04-14 | 2026-04-16 | ✅ Completado |
| API de productos | Endpoints CRUD | 2026-04-16 | 2026-04-18 | ✅ Completado |
| Frontend: Catálogo | Grid de productos | 2026-04-18 | 2026-04-20 | ✅ Completado |
| Frontend: Checkout | Modal de pago | 2026-04-20 | 2026-04-22 | ✅ Completado |
| Integración frontend-backend | Sistema conectado | 2026-04-22 | 2026-04-24 | ✅ Completado |
| Modo mock para desarrollo | Datos simulados | 2026-04-24 | 2026-04-25 | ✅ Completado |

**Hito: I01 - Código funcionales**

---

### Fase 4: Verificación

| Actividad | Entregable | Fecha Inicio | Fecha Fin | Estado |
|----------|------------|--------------|-----------|--------|
| Pruebas unitarias | Scripts de prueba | 2026-04-26 | 2026-04-27 | Pendiente |
| Pruebas de integración | Pruebas end-to-end | 2026-04-27 | 2026-04-28 | Pendiente |
| QA: Catálogo | Checklist de pruebas | 2026-04-28 | 2026-04-29 | Pendiente |
| QA: Checkout | Checklist de pruebas | 2026-04-29 | 2026-04-30 | Pendiente |
| Corrección de bugs | Bug fixes | 2026-04-30 | 2026-05-01 | Pendiente |
| Validación con usuario | UAT | 2026-05-01 | 2026-05-02 | Pendiente |

**Hito: V01 - Sistema probado y validado**

---

### Fase 5: Mantenimiento

| Actividad | Entregable | Fecha Inicio | Fecha Fin | Estado |
|----------|------------|--------------|-----------|--------|
| Despliegue a producción | Sistema deployed | 2026-05-03 | 2026-05-03 | Pendiente |
| Documentación técnica | README.md | 2026-05-03 | 2026-05-04 | Pendiente |
| Capacitación de usuario | Manual de usuario | 2026-05-04 | 2026-05-05 | Pendiente |
| Período de garantía (30 días) | Soporte post-lanzamiento | 2026-05-05 | 2026-06-05 | Pendiente |

**Hito: M01 - Sistema en producción**

---

## Tabla Resumen de Entregables

| Entregable | Documento | Estado |
|-----------|----------|--------|
| Documento de requisitos | docs/01_requisitos.md | ✅ Completado |
| Diagramas de diseño | docs/02_diagramas.md | ✅ Completado |
| Evidencia de cierre | docs/03_cierre_acuerdos.md | ✅ Completado |
| Justificación modelo | docs/04_modelo_cascada.md | ✅ Completado |
| Bocetos de interfaz | docs/05_bocetos.md | ✅ Completado |
| Cronograma | docs/06_cronograma.md | ✅ Completado |

---

## Diagrama de Gantt (Texto)

```
Semana    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
──────────┼───┼───┼───┼───┼───┼───┤
Req       │████████████│   │   │   │   │
Diseño   │   │████████████│   │   │   │
Impl     │   │   │████████████████████│   │   │
Verif    │   │   │   │   │████████████│   │
Mant     │   │   │   │   │   │████████████│
```

---

## Fechas de Entrega (Entregables)

| Entregable | Fecha Tentativa |
|------------|-----------------|
| Documento de requisitos | 2026-04-12 |
| Diagramas de diseño | 2026-04-15 |
| Código fuente funcional | 2026-04-25 |
| Sistema probado | 2026-05-02 |
| Despliegue a producción | 2026-05-03 |

---

## Notas

- Las fechas son tentativas y pueden ajustarse según disponibilidad del equipo
- La fase de implementación overlaphea ligeramente con diseño para optimizar tiempo
- El período de garantía incluye soporte para correcciones críticas