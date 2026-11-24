---
type: recurso
fecha: 2026-06-18
tags:
  - recurso
  - tema/aprendizaje
---

# 🧠 Metodologías de aprendizaje del Segundo Cerebro

> [!info] Esta nota es la **referencia extensa** de las cinco metodologías que estructuran la bóveda. Las reglas operativas resumidas viven en `CLAUDE.md`; aquí está el "por qué" y el "cómo" completos para repasar cuando lo necesites.

---

## 1. Método Cornell (Captura estructurada)

**Qué es:** Dividir las notas en tres zonas: claves/preguntas (izquierda), desarrollo (derecha) y resumen (abajo).

**Cuándo usarlo:** En TODA nota de `investigaciones/` y en la sección "Captura rápida" de `daily-notes/`.

**Cómo se aplica aquí:**
- Las plantillas incluyen tablas Cornell con columnas `🔑 Pregunta / Clave` y `📝 Respuesta / Desarrollo`.
- Al final de cada tabla Cornell hay un campo `📌 Resumen` donde debes sintetizar en 2-3 frases propias.
- La columna izquierda sirve para repasar: tapa la derecha y responde a las preguntas.

> [!warning] Regla
> Nunca dejes el resumen Cornell vacío. Si no puedes resumirlo, no lo has entendido.

---

## 2. Principio de Pareto — Regla 80/20 (Foco)

**Qué es:** El 20% del esfuerzo genera el 80% de los resultados.

**Cuándo usarlo:** Al definir objetivos (daily y proyectos), al resumir investigaciones, al evaluar ideas.

**Cómo se aplica aquí:**
- `daily-note.md`: Máximo 3 objetivos del día. Pregunta: *¿cuáles generan el mayor impacto?*
- `proyecto.md`: Los objetivos prioritarios llevan ⭐. Revisión semanal con "Pareto check."
- `research.md`: El resumen se limita a 3-5 ideas clave, no a un volcado completo.
- `idea.md`: Evaluación rápida con criterios de impacto vs. esfuerzo antes de promover a proyecto.

> [!warning] Regla
> Si un objetivo, tarea o nota no pasa el filtro 80/20, baja su prioridad o elimínala.

---

## 3. Repetición Espaciada (Retención a largo plazo)

**Qué es:** Repasar información en intervalos crecientes para consolidarla en la memoria a largo plazo.

**Cuándo usarlo:** Para TODA nota de `investigaciones/` y para conceptos clave capturados en `daily-notes/`.

**Cómo se aplica aquí (sistema de 2 niveles):**
- Las plantillas de research incluyen el campo `next-review` en el frontmatter y una tabla de registro de repasos.
- **Nivel mínimo sostenible (default para toda nota): Día 1 → Día 7 → Día 30.** Tres toques. Es lo que de verdad puedes mantener.
- **Nivel completo (opcional, solo `#prioridad/alta`): Día 1 → Día 3 → Día 7 → Día 14 → Día 30 → Día 60.**
- Ajuste tras cada repaso: si la retención es buena (✅), avanza al siguiente intervalo; si es parcial (⚠️), repite el actual; si falla (❌), regresa al anterior.
- Usa `#review/pendiente` para marcar notas que necesitan repaso y `#review/dominado` cuando el concepto esté consolidado.

> [!warning] Regla
> El único repaso no negociable es el **primero, al día siguiente** — es el que más rinde. El resto es escalera mínima (1 → 7 → 30); la completa solo para prioridad alta. Si dejaste pasar un mes sin repasar, no acumules deuda: relee y reinicia desde Día 1.

---

## 4. Método de Loci — Palacio de la Memoria (Memorización profunda)

**Qué es:** Asociar información a ubicaciones o imágenes mentales vívidas dentro de un recorrido espacial imaginario.

**Cuándo usarlo:** Para conceptos técnicos complejos, listas que necesitas recordar, o información densa en `investigaciones/`.

**Cómo se aplica aquí:**
- La plantilla de research incluye una tabla `🏛 Anclas de memoria` con columnas para concepto, lugar/imagen y escena vívida.
- La plantilla de persona incluye un campo `🏛 Ancla` para asociar una imagen memorable a cada contacto.
- Cuanto más absurda, exagerada o emocional sea la imagen, mejor funciona.

> [!warning] Regla
> No es obligatorio para toda nota, pero SÍ para cualquier concepto marcado como `#prioridad/alta`.

---

## 5. Técnica Feynman (Comprensión real)

**Qué es:** Explicar un concepto con palabras simples, como si le hablaras a alguien que no sabe nada del tema. Si no puedes, no lo entiendes.

**Cuándo usarlo:** En el resumen Cornell de `investigaciones/` y cuando una nota lleve el tag `#feynman/pendiente`.

**Cómo se aplica aquí:**
- El campo "Resumen en tus propias palabras (Feynman check)" de la plantilla research exige explicación simple.
- Si al escribirlo detectas huecos, márcalos con `❓` y busca llenarlos antes del primer repaso.

> [!warning] Regla
> Si no puedes explicar la idea central en 3 frases sin jerga, la nota no está completa.

---

## 🔗 Relacionado

- MOC: [[000 Home MOC]]
- Convenciones operativas: `CLAUDE.md` (raíz de la bóveda)
- Plantillas: `templates/research.md`, `templates/daily-note.md`, `templates/proyecto.md`
