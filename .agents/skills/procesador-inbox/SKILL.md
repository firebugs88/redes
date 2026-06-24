---
name: procesador-inbox
description: >
  Procesa y clasifica las notas pendientes del inbox/ de la bóveda Obsidian.
  Analiza cada nota y determina si es idea, investigación, tarea o ficha de
  persona. La mueve a la carpeta correcta usando la plantilla correspondiente.
  Si no puede clasificar, pregunta al usuario. Nunca fuerza clasificación.
  Usar cuando el inbox acumule notas o en la revisión semanal.
---

# 📥 Procesador de Inbox

Este skill clasifica material pendiente en `inbox/` y lo distribuye a la carpeta correcta de la bóveda, aplicando la plantilla correspondiente.

---

## Cuándo activar este skill

- El usuario pide "procesar inbox", "vaciar inbox" o "clasificar pendientes".
- En la revisión semanal (uno de los checkpoints de CLAUDE.md es "vaciar inbox").
- Cuando `inbox/` tenga notas sin procesar.

---

## Flujo de trabajo

1. Lee TODAS las notas en `inbox/`.
2. Para cada nota, analiza su contenido y determina el destino:

| Tipo de contenido | Destino | Plantilla |
|-------------------|---------|-----------|
| Idea sin proyecto | `ideas/` | `templates/idea.md` |
| Material de investigación — física | `investigaciones/1-fundamentos/` o `3-electromagnetismo/` | `templates/research.md` |
| Material de investigación — circuitos | `investigaciones/2-circuitos/` | `templates/research.md` |
| Material de investigación — redes | `investigaciones/4-redes-y-telecom/` | `templates/research.md` |
| Tarea pendiente | Agregar a `cosas-por-hacer.md` (sección apropiada) | N/A |
| Información sobre una persona | `personas/` | `templates/persona.md` |
| Contenido de un día específico | `daily-notes/` | `templates/daily-note.md` |
| Proyecto potencial | `proyectos/` | `templates/proyecto.md` |

3. Al crear la nota en su destino:
   - Usa la plantilla correspondiente (lee las plantillas de `templates/`).
   - Llena la mayor cantidad de campos posible con la información disponible.
   - Agrega `🔗 Relacionado` conectando a notas existentes relevantes.
   - Si es research, configura `next-review` al día siguiente.

4. **REGLA CARDINAL:** Si NO estás seguro de dónde clasificar algo, **PREGUNTA** al usuario. Nunca fuerces una clasificación. (Regla 3 de CLAUDE.md: "Inbox sin forzar").

---

## Convenciones obligatorias

- `[[doble corchete]]` para enlaces internos.
- Tags en frontmatter **SIN** `#` / Tags en cuerpo **CON** `#`.
- Nombres de archivo: `minúsculas-separadas-por-guiones.md`.
- Fechas: `YYYY-MM-DD`.
- Toda nota termina con `🔗 Relacionado`.

---

## Después de clasificar

Genera un reporte indicando:
- Qué notas procesó, a dónde fueron y por qué.
- Si enriqueció una nota existente en vez de crear una nueva (Regla 5 de CLAUDE.md: "Revisar antes de crear").
- Las notas que no pudo clasificar, esperando instrucciones del usuario.

---

## Reglas

- Verifica si ya existe una nota relacionada que puedas enriquecer antes de crear una nueva.
- Si el inbox está vacío, simplemente repórtalo: "📥 Inbox vacío — nada que procesar."
- Si clasificas algo como research, sigue TODAS las reglas del skill `investigador-profundo`.
