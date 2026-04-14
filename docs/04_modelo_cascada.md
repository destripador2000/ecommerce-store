# Justificación del Modelo en Cascada

## ¿Por qué el modelo en cascada requiere cerrar la fase de análisis antes de codificar?

El modelo en cascada (Waterfall) es un método lineal y secuencial de desarrollo de software donde cada fase debe completarse antes de pasar a la siguiente. La obligación de cerrar la fase de análisis de requisitos antes de iniciar cualquier codificación responde a principios fundamentales de este modelo:

### 1. Dependencia secuencial de las fases

```
Requisitos → Diseño → Implementación → Verificación → Mantenimiento
```

Cada fase produce una "entrega" que serve como entrada para la siguiente. Si los requisitos no están completos y validados, el diseño carecerá de fundamento sólido, y la implementación se basará en supuestos incorrectos.

### 2. Costo de cambio exponencial

En el modelo en cascada, el costo de corregir un error cresce exponencialmente según avanza el proyecto:

| Fase | Costo relativo de corrección |
|------|--------------------------|
| Requisitos | 1x |
| Diseño | 5x |
| Implementación | 10x |
| Verificación | 25x |
| Producción | 50x |

Por esto es crítico definir requisitos correctos al inicio.

### 3. Preventing rework (re-trabajo)

Codificar antes de tener requisitos firmados genera:
- Re-escritura de código
- Rediseño de la base de datos
- Cambios en la UI/UX
- Conflictos con integraciones existentes

### 4. Garantía de calidad y predictibilidad

El modelo en cascada ofrece:
- **Fechas de entrega predecibles**: Cada fase tiene duración definida
- **Entregas medibles**: Productos concretos en cada hito
- **Documentación completa**: Cada fase produce documentación técnica

### 5. Contractualización con el cliente

En proyectos empresariales, el documento de requisitos funciona como contrato. La codificación sin requisitos formalizados puede gerar:
- Disputas sobre el alcance
- Expectativas no cumplidas
- Pagos retenidos

---

## Ejemplo práctico en Ecommerce Store

### Sin requisitos cerrados:
- "¿Cómo manejamos el inventario?"
- "¿Qué pasa si no hay stock?"
- "¿Se permite compra sin registro?"

### Con requisitos cerrados (ejemplo del documento):
- RF-10: Gestión de inventario con alertas (stock mínimo)
- El código sabe que debe validar `actualStock > 0` antes de confirmar

---

## Conclusión

El modelo en cascada no es "malo", es **conservador**. Para proyectos donde los requisitos son estables y el cliente sabe lo que quiere, es ideal. Obligar a cerrar la fase de análisis antes de codificar asegura que el equipo desarrolla correctamente desde la primera iteración, evitando costos innecesarios de refactorización.