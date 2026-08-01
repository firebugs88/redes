---
name: generador-daily
description: >
  Crea la nota diaria del día en daily-notes/ usando templates/daily-note.md.
  Escanea notas con repaso pendiente para hoy, revisa la daily-note del día
  anterior para extraer tareas incompletas, y sugiere objetivos Pareto.
  Actualiza el 050 Diario MOC con la nueva nota.
  Usar cada mañana al iniciar la sesión de estudio, o cuando el usuario pida
  "crear mi daily note" o "¿qué tengo para hoy?".
---

# 📝 Generador de Daily Notes

Este skill automatiza la creación de la nota diaria integrando repasos pendientes, tareas heredadas y objetivos priorizados.

---

## Cuándo activar este skill

- El usuario pide "crear mi daily note", "nota del día" o similar.
- Es la rutina matutina: "¿qué tengo para hoy?" (**Pausa 1** del Ritual de las 3 Pausas)
- Al inicio de cada sesión de estudio.

---

## Flujo de trabajo

### Paso 1: Verificar existencia
- Comprobar si ya existe `daily-notes/YYYY-MM-DD.md` (con la fecha de hoy).
- Si ya existe, **NO la sobrescribas** — reporta que ya fue creada y pregunta si quiere agregar algo.

### Paso 2: Leer la plantilla
- Lee `templates/daily-note.md` y úsala como base para la nueva nota.

### Paso 3: Escanear repasos del día (con presupuesto)
- Lee el frontmatter de TODAS las notas en `investigaciones/` y subcarpetas.
- Busca notas donde `next-review` ≤ fecha de hoy (hoy o atrasadas), **excluyendo** las que tengan tag `review/pausado`.
- Selecciona **máx. 5** para la daily (presupuesto de CLAUDE.md, regla 3): ① `relevancia: alta` atrasadas, ② hubs ⭐ del `900 Índice del Grafo MOC.md`, ③ resto por antigüedad.
- Lista SOLO esas en la sección de repasos con enlaces `[[nota]]`. Si quedaron más fuera, indícalo en una línea ("+N replanificables — corre `auditor-repasos` para el detalle"), sin listarlas una a una.

### Paso 4: Revisar daily-note anterior
- Busca la daily-note más reciente anterior a hoy en `daily-notes/`.
- Extrae tareas no completadas (`- [ ]` sin marcar).
- Inclúyelas en la nueva daily-note como "tareas heredadas".

### Paso 5: Sugerir objetivos Pareto
- Lee `cosas-por-hacer.md` para tareas pendientes generales.
- Revisa `proyectos/` para proyectos activos.
- Basándote en todo lo anterior, sugiere 1-3 objetivos de alto impacto.
- Aplica el principio 80/20: ¿cuáles generan el mayor impacto?

### Paso 6: Actualizar MOC
- Agrega un enlace `[[YYYY-MM-DD]]` al `050 Diario MOC.md`.

---

## Convenciones

- `[[doble corchete]]` para enlaces internos.
- Nombre del archivo: `YYYY-MM-DD.md` en `daily-notes/`.
- Tags en frontmatter **SIN** `#`.
- Usa callouts de Obsidian (`> [!tip]`, `> [!info]`, `> [!warning]`).
- Máximo 3 objetivos del día (Pareto).

---

## Reglas

- NUNCA sobrescribas una daily-note existente.
- Si no hay repasos pendientes, escríbelo: "✅ Sin repasos pendientes para hoy."
- Si no hay tareas heredadas, omite esa sección.
- Los objetivos sugeridos son sugerencias — el usuario decide los definitivos.
