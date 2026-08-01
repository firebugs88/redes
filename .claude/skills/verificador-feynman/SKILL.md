---
name: verificador-feynman
description: >
  Audita la calidad de comprensión en las notas de investigación de la bóveda.
  Evalúa si los resúmenes Feynman son comprensibles, detecta jerga sin explicar,
  encuentra secciones vacías y notas con #feynman/pendiente. Genera preguntas
  de comprensión basadas en la tabla Cornell.
  Usar para verificar la calidad de notas existentes, buscar huecos de
  comprensión, o después de crear varias notas de research.
---

# 🧪 Verificador Feynman

Este skill evalúa si las notas de investigación demuestran comprensión real, no solo acumulación de información.

---

## Cuándo activar este skill

- El usuario pide "revisar calidad de mis notas", "verificar comprensión" o similar.
- Después de crear varias notas de investigación nuevas.
- Para encontrar notas con `#feynman/pendiente`.
- En la revisión semanal como control de calidad.

---

## Criterios de evaluación

### 1. Resumen Feynman (📌 Resumen en tus propias palabras)

| Evaluación | Criterio |
|-----------|----------|
| 🔴 Crítico | Resumen vacío o ausente |
| 🟡 Medio | Usa jerga técnica sin explicarla |
| 🟡 Medio | Más de 3 frases (demasiado largo, no es conciso) |
| ✅ Bien | Comprensible para alguien sin contexto, ≤3 frases, sin jerga |

### 2. Resumen Pareto (3-5 ideas clave)

- ¿Tiene el número correcto de ideas (3-5)?
- ¿Cada idea es concisa y con valor real?
- ¿O es un "volcado" de toda la información? → No aplica Pareto.

### 3. Tabla Cornell

- ¿Las preguntas de la columna izquierda son útiles para repasar?
- ¿Las respuestas son claras y completas?
- ¿Hay filas vacías?

### 4. Tags de Feynman

- Busca notas con tag `feynman/pendiente` — estas son prioridad máxima.
- Si un resumen Feynman está completo y es bueno, sugiere retirar el tag.

### 5. Huecos de comprensión

- Busca marcas `❓` dentro de las notas — son huecos que el usuario reconoció pero no resolvió.
- Reporta cada uno con su contexto.

---

## Formato del reporte

```markdown
# 🧪 Auditoría Feynman — YYYY-MM-DD

## 📊 Resumen
- Notas evaluadas: X
- Con comprensión verificada: X ✅
- Con problemas de comprensión: X ⚠️
- Sin resumen Feynman: X 🔴

## 🔴 Resúmenes faltantes o críticos

| Nota | Problema | Acción sugerida |
|------|----------|-----------------|

## ⚠️ Resúmenes con problemas

| Nota | Evaluación | Jerga detectada | Sugerencia |
|------|-----------|-----------------|------------|

## ✅ Resúmenes bien logrados

| Nota | Fortaleza |
|------|-----------|

## ❓ Huecos de comprensión pendientes

| Nota | Contexto del hueco | Sugerencia para resolver |
|------|-------------------|------------------------|

## 💡 Preguntas de comprensión sugeridas
[Para cada nota con problemas, genera 2-3 preguntas que ayuden al usuario
a verificar si realmente entiende el concepto. Basadas en la columna
izquierda de Cornell.]
```

---

## Reglas

- Usa `[[doble corchete]]` para enlaces a notas.
- **No modifiques ninguna nota** — solo genera el reporte.
- Sé constructivo: señala problemas pero también reconoce lo bien hecho.
- Regla Feynman de CLAUDE.md: "Si no puedes explicar la idea central en 3 frases sin jerga, la nota no está completa."
- Las preguntas de comprensión deben ser específicas al contenido de cada nota, no genéricas.
