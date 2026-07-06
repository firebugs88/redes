---
name: cierre-del-dia
description: >
  Pausa 3 del Ritual de las 3 Pausas (procesamiento nocturno). Registra los
  repasos hechos en el día actualizando el frontmatter de cada nota repasada
  (review-count, ultimo-review, next-review según la escalera, nivel-retencion)
  y su tabla de registro; replanifica sin culpa los repasos que no alcanzaron;
  procesa las capturas del día (inbox/, ideas); guía la reflexión y sincroniza
  cosas-por-hacer.md. Usar al final de la jornada de estudio, o cuando el
  usuario diga "cerrar el día", "cierre nocturno" o "procesa el día".
---

# 🌙 Cierre del Día

Este skill ejecuta la **Pausa 3** del ritual diario: convierte lo que pasó durante el día en estado persistente del sistema. Es la pieza que elimina la fricción principal del repaso: actualizar a mano el frontmatter de cada nota repasada.

---

## Cuándo activar este skill

- Al final de la jornada de estudio ("cerrar el día", "cierre nocturno").
- Cuando el usuario reporta repasos hechos ("hoy repasé X y Y").
- Si `generador-daily` corrió en la mañana pero la daily quedó sin procesar en la noche.

---

## Flujo de trabajo

### Paso 1: Localizar la daily de hoy
- Abre `daily-notes/YYYY-MM-DD.md` (fecha de hoy). Si no existe, pregunta si el usuario quiere cerrar el día sin daily (se puede: los pasos 2-3 y 6 no la necesitan).

### Paso 2: Registrar repasos hechos
- Identifica qué notas de la sección de repasos están marcadas `- [x]` (o pregunta: "¿cuáles repasaste y cómo te fue: ✅ / ⚠️ / ❌?").
- **NUNCA inventes un repaso**: solo registra lo que el usuario confirme.
- Por cada nota repasada, actualiza su frontmatter:
  - `review-count`: +1
  - `ultimo-review`: hoy
  - `nivel-retencion` y `next-review`: según la tabla de escalera (abajo)
  - Si consolidó el Día 30 → propone cambiar `review/pendiente` → `review/dominado`
- Agrega/completa la fila correspondiente en la tabla `## 🔁 Registro de repasos` de la nota (fecha + resultado).

### Paso 3: Replanificar lo que no alcanzó (sin culpa)
- Notas con `next-review` ≤ hoy que NO se repasaron: corre su `next-review` a los próximos días **respetando el presupuesto de máx. 5 notas/día** (cuenta también las ya agendadas en esos días).
- Prioridad al reasignar cupos: ① `relevancia: alta` atrasadas, ② hubs ⭐ del `900 Índice del Grafo MOC.md`, ③ resto por antigüedad.
- Ignora las notas con tag `review/pausado` (están fuera de la cola).
- Regla de deuda (CLAUDE.md): si una nota lleva +30 días sin repaso, no la replanifiques como si nada — márcala "releer y reiniciar desde Día 1".

### Paso 4: Procesar las capturas del día
- Revisa la Pausa 2 de la daily (tabla Cornell, tareas, ideas):
  - `#idea` con peso → crear nota en `ideas/` con `templates/idea.md` y enlazarla desde la daily.
  - Captura que es material de estudio → `inbox/` (o directo a research si está maduro y NO duplica — aplicar el protocolo anti-duplicados de CLAUDE.md regla 5).
  - Tareas sin fecha → `cosas-por-hacer.md`.

### Paso 5: Reflexión del día
- Si las dos preguntas de reflexión están vacías, pídelas en una línea cada una ("¿Qué aprendiste hoy que no sabías ayer?" / "¿Qué conexión nueva descubriste?"). Si el usuario no quiere, no insistas.

### Paso 6: Sincronizar cosas-por-hacer.md
- Tareas completadas en la daily que existan en `cosas-por-hacer.md` → moverlas a "✅ Completadas" con fecha.

### Paso 7: Higiene de lo creado hoy
- Toda nota nueva/movida del día debe tener `🔗 Relacionado` con al menos 1 enlace real y frontmatter completo.
- Si hubo notas nuevas, movidas o con enlaces cambiados → sugiere regenerar el índice con `indexador-grafo`.

### Paso 8: Cierre
- Reporta en ≤5 líneas: repasos registrados (con su resultado), replanificaciones, capturas procesadas, y qué toca mañana (máx. 5 repasos).
- Marca `status: Done` en el frontmatter de la daily.

---

## Escalera de actualización (tras cada repaso)

Escalera mínima sostenible: **Día 1 → Día 7 → Día 30**. Completa (solo `#prioridad/alta`): Día 1 → 3 → 7 → 14 → 30 → 60.

| Resultado | `nivel-retencion` | `next-review` |
|-----------|-------------------|---------------|
| ✅ Recordé bien | sube al escalón consolidado (0→1→2→3) | hoy + siguiente intervalo de la escalera |
| ⚠️ Parcial | se mantiene | hoy + el MISMO intervalo (repetir escalón) |
| ❌ Fallé | baja un escalón (mín. 0) | mañana (reiniciar Día 1) |

`nivel-retencion`: **0** = ningún escalón · **1** = Día 1 superado · **2** = Día 7 superado · **3** = Día 30 superado → candidata a `#review/dominado`.

---

## Reglas

- Usa `[[doble corchete]]`, fechas `YYYY-MM-DD`, tags de frontmatter sin `#`.
- NUNCA sobrescribas contenido de la daily: solo completa lo vacío y marca checkboxes confirmados.
- No toques notas `review/pausado` ni `review/dominado` (salvo que el usuario pida reactivarlas).
- El presupuesto de 5/día es un TECHO, no una meta: si el usuario solo pudo con 2, está bien — replanifica el resto sin comentarios de culpa.
- Coherencia de fechas: `ultimo-review` jamás en el futuro; `next-review` jamás anterior a `ultimo-review` (error recurrente detectado en [[patrones]]).

---

## 🔗 Relacionado

- Pausa 1: `generador-daily` · Captura: `procesador-inbox` · Reporte de cola: `auditor-repasos`.
- Cierra el ciclo diario del Ritual de las 3 Pausas (CLAUDE.md, "Ritual de las 3 Pausas").
