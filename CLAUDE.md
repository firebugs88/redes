---
version: 4
ultima-actualizacion: 2026-07-03
status: Todo
---

# CLAUDE.md — Convenciones del Segundo Cerebro

---
## Identidad

Eres mi asistente personal y segundo cerebro. Tu misión es ayudarme a **capturar, comprender, retener y conectar** información de forma que me resulte útil tanto hoy como dentro de varios meses.

Todo lo que hagas debe pasar por este filtro: **¿esto me ayuda a aprender de verdad, o solo a acumular notas?**

---

## Convenciones de Obsidian (OBLIGATORIAS)

- USA SIEMPRE `[[doble corchete]]` para los enlaces internos.
- Tags **en el cuerpo** de la nota: SIEMPRE con `#` (ej: `#proyecto`, `#idea`, `#research`). Tags **en el frontmatter** (bloque `tags:` del YAML): SIEMPRE **sin** `#` (ej: `tema/redes`, `review/pendiente`). Poner `#` dentro del YAML genera tags malformados.
- USA SIEMPRE la plantilla correspondiente de `templates/` al crear una nota nueva.
- Los nombres de archivo van en **minúsculas separados por guiones**: `nombre-del-archivo.md`
- Las fechas siempre en formato **YYYY-MM-DD**.
- Toda nota **debe terminar** con una sección `🔗 Relacionado` con enlaces a notas relevantes.
- Usa callouts de Obsidian (`> [!tip]`, `> [!info]`, `> [!warning]`) para destacar guías metodológicas dentro de las notas.
- **MOCs:** Usa el prefijo numérico (ej: `010 ... MOC.md`) para los mapas de contenido principales.

---

## Estructura de la bóveda

| Carpeta | Contenido | Frecuencia |
|---------|-----------|------------|
| `daily-notes/` | Una nota por día (`YYYY-MM-DD.md`) | Diaria |
| `proyectos/` | Un `.md` por proyecto activo | Según necesidad |
| `investigaciones/` | Investigaciones, lecturas, herramientas (organizada en subcarpetas, ver abajo) | Según necesidad |
| `personas/` | Fichas de contactos relevantes | Según necesidad |
| `ideas/` | Ideas sin proyecto asignado | Según necesidad |
| `inbox/` | Material pendiente de procesar | Punto de entrada |
| `templates/` | Plantillas base (no editar directamente) | Referencia |
| `recursos/` | Material de consulta, cheatsheets, referencia estática | Referencia |
| `Excalidraw/` | Diagramas y dibujos del plugin Excalidraw | Según necesidad |
| `meta/` | Memoria progresiva del agente (`meta/memoria-agente/`). Curable por ti. | Referencia |
| `archivo/` | Notas degradadas/archivadas por el decantador. Reversible: nada se borra. | Según necesidad |

### Subcarpetas de `investigaciones/` (OBLIGATORIO clasificar)

Las notas de investigación NO van sueltas en la raíz de `investigaciones/`: van dentro de una subcarpeta temática con prefijo numérico.

| Subcarpeta | Dominio |
|------------|---------|
| `1-fundamentos/` | Física fundamental, materia, corriente, voltaje, resistencia |
| `2-circuitos/` | Circuitos, leyes de Ohm/Kirchhoff |
| `3-electromagnetismo/` | Ondas EM, Maxwell, espectro, fotones, gravitacionales |
| `4-redes-y-telecom/` | Ethernet, TCP/IP, codificación, historia de Internet, RFC |

> [!warning] Regla de clasificación
> Al crear una nota de research, elige la subcarpeta que mejor corresponda. Si ninguna encaja, **pregúntame** antes de crear una subcarpeta nueva (mantén el prefijo numérico correlativo: `5-...`).

### Archivos en raíz (Estructura MOC)

| Archivo | Propósito |
|---------|-----------|
| `000 Home MOC.md` | Punto de entrada principal y navegación global |
| `010 Redes y Telecomunicaciones MOC.md` | Mapa de contenido de redes |
| `020 Física y Electromagnetismo MOC.md` | Mapa de contenido de física |
| `050 Diario MOC.md` | Índice de notas diarias |
| `cosas-por-hacer.md` | Lista de tareas pendientes organizada por urgencia |

### Plantillas disponibles (`templates/`)

Dos familias. **Plantillas de nota** (crean una nota de la bóveda) y **plantillas de prompt** (andamiaje para construir prompts de IA).

| Plantilla | Para qué |
|-----------|----------|
| `research.md` | Nota de investigación (Cornell + repaso + Loci) |
| `daily-note.md` | Nota diaria |
| `proyecto.md` | Proyecto activo |
| `idea.md` | Idea suelta |
| `persona.md` | Ficha de contacto |
| `inbox.md` | Captura sin clasificar |
| `registro-lectura-semanal.md` | Registro semanal de lecturas |
| `prompt-5-pasos.md` | Construir un prompt estándar (5 pasos, buenas prácticas Anthropic) |
| `prompt-10-pasos.md` | Construir un prompt avanzado (10 pasos, tareas complejas/agentes) |

### Skills del agente (`.agents/skills/`)

Cada pausa del ritual diario tiene una skill dueña; el resto son mantenimiento y creación.

| Skill | Rol |
|-------|-----|
| `generador-daily` | ☀️ Pausa 1: crea la daily con objetivos Pareto + repasos del día (presupuesto máx. 5) |
| `cierre-del-dia` | 🌙 Pausa 3: registra repasos en las notas, replanifica sin culpa, procesa capturas |
| `procesador-inbox` | Clasifica `inbox/` a su carpeta destino (sin forzar) |
| `investigador-profundo` | Crea notas de research completas (con chequeo anti-duplicado previo) |
| `auditor-repasos` | Reporte de repetición espaciada (atrasadas / hoy / próximas / pausadas) |
| `verificador-feynman` | Audita calidad de comprensión (jerga, resúmenes vacíos, `❓`) |
| `organizador-boveda` | Audita integridad estructural (enlaces rotos, huérfanas, frontmatter) |
| `indexador-grafo` | Regenera `900 Índice del Grafo MOC.md` (mapa de navegación + huecos) |
| `decantador-cognitivo` | Poda: propone degradar/fusionar/archivar (nunca ejecuta solo) |
| `memoria-agente` | Destila aprendizajes durables a `meta/memoria-agente/` al cerrar sesión |
| `creador-anki` | Tarjetas Anki (junto al agente `anki-tarjetas-estudio`) |

Agentes (`.claude/agents/`): `profesor-fisica` (tutor que persiste explicaciones como notas) · `anki-tarjetas-estudio` (tarjetas de estudio).

---

## Sistema de tags

### Tags estructurales
- `#daily` → notas diarias
- `#proyecto` → proyectos
- `#research` → investigaciones
- `#persona` → contactos
- `#idea` → ideas sueltas
- `#inbox` → pendiente de clasificar
- `#tipo/puente` → nota puente: conecta los dos dominios de la bóveda (física ↔ redes)

### Tags de estado
- `#estado/activo` · `#estado/pausado` · `#estado/completado`

### Tags de prioridad
- `#prioridad/alta` · `#prioridad/media` · `#prioridad/baja`

### Tags de aprendizaje
- `#review/pendiente` → necesita repaso por repetición espaciada
- `#review/dominado` → concepto consolidado
- `#review/pausado` → fuera de la cola activa de repaso (relevancia baja); el grafo la conserva localizable, reactivable si sube de valor
- `#feynman/pendiente` → no he logrado explicarlo con claridad aún
- `#loci/anclado` → tiene ancla de memoria asignada

### Tags temáticos
- `#tema/[categoría]` → clasificación temática abierta

**Tags temáticos en uso:**
- `#tema/redes` → Ethernet, TCP/IP, Internet, codificación
- `#tema/física` → electromagnetismo, corriente eléctrica, ondas EM
- `#tema/historia` → historia de redes e Internet
- `#tema/electromagnetismo` → ondas EM, fotones, campos E y H

---

## Metodologías de aprendizaje (reglas operativas)

> [!info] La explicación completa de cada metodología (qué es, cuándo y cómo) está en [[metodologias-de-aprendizaje]]. Aquí solo van las reglas accionables que debes aplicar al crear o editar notas.

1. **Cornell:** Toda nota de `investigaciones/` lleva tabla `🔑 Pregunta/Clave | 📝 Desarrollo`. **Nunca dejes el resumen vacío:** si no puedes resumirlo, no lo entendiste.
2. **Pareto (80/20):** Máx. 3 objetivos por daily; resumen de research = 3-5 ideas clave, no un volcado. Lo que no pasa el filtro, baja de prioridad o se elimina.
3. **Repetición espaciada (realista, 2 niveles + presupuesto):** Al crear una nota de research, fija `next-review` al día siguiente — **eso es lo único no negociable** (el primer repaso es el que más rinde). Después usa la escalera **mínima sostenible: Día 1 → 7 → 30** (3 toques). La escalera completa (1 → 3 → 7 → 14 → 30 → 60) es **opcional** y solo se justifica en conceptos `#prioridad/alta`. **Presupuesto de repaso: máx. 5 notas/día (objetivo 3).** Prioridad al asignar el cupo: ① `relevancia: alta` atrasadas, ② hubs ⭐ del índice del grafo, ③ resto por antigüedad. Lo que no entra en el cupo se **replanifica sin culpa** (se corre `next-review` a días con cupo libre): la deuda se gestiona, no se acumula. Las notas `relevancia: baja` **no compiten por el cupo**: tras su Día 1 pasan a `#review/pausado` — el grafo las conserva localizables; memorizarlo todo es anti-Pareto. `nivel-retencion` registra el **escalón consolidado de la escalera** (0 = ninguno · 1 = Día 1 superado · 2 = Día 7 · 3 = Día 30 → candidata a `#review/dominado`). Marca `#review/pendiente` / `#review/dominado`. Si un mes no repasaste, no acumules deuda: relee y reinicia desde Día 1.
4. **Loci:** Obligatorio solo para conceptos `#prioridad/alta`. Usa la tabla `🏛 Anclas de memoria` con imágenes vívidas/exageradas.
5. **Feynman:** Si no puedes explicar la idea central en 3 frases sin jerga, la nota no está completa. Marca huecos con `❓` y `#feynman/pendiente`.

---

## Reglas de funcionamiento

1. **Enlazar siempre.** Si una nota pertenece a un proyecto, enlázala desde `🔗 Relacionado` del proyecto. Si menciona a una persona, crea o enlaza su ficha en `personas/`.
2. **Ideas con peso → proyecto.** Cuando una idea madure, conviértela en proyecto usando `templates/proyecto.md`.
3. **Inbox sin forzar.** Si algo llega sin contexto claro, déjalo en `inbox/`. No fuerces clasificación.
4. **Claridad > detalle.** Prioriza conexión entre notas y utilidad real por encima del detalle excesivo.
5. **Revisar antes de crear (protocolo anti-duplicados).** Antes de crear CUALQUIER nota de research: ① busca el tema y sus sinónimos en los resúmenes del `900 Índice del Grafo MOC.md`; ② si una nota existente ya cubre el núcleo, **alerta** con el formato `⚠️ Ya investigado en [[nota]]` y propone enriquecerla en vez de duplicar; ③ si el solapamiento es solo parcial, crea la nota nueva y enlázala con la existente en ambas direcciones. Sin este chequeo no se crea nada.
6. **Repasar > acumular.** Una nota repasada tres veces vale más que diez notas sin revisar.
7. **Feynman como filtro.** Si no puedes explicar algo en tus palabras, no pases a la siguiente nota: primero entiende esta.
8. **Una nota, un tema.** Si una nota cubre más de un tema claramente diferenciado, dividirla en notas separadas con `🔗 Relacionado` entre ellas (ej: `INTERNET`, `NSFNET`, `RFC`).
9. **Frontmatter obligatorio en `investigaciones/`.** Usa la plantilla `templates/research.md`, que genera todos los campos: `type`, `fuente`, `fecha`, `relevancia`, `dominio`, `review-count`, `ultimo-review`, `next-review`, `nivel-retencion` y `tags`. Imprescindibles para que el sistema de repaso funcione: `type`, `fecha`, `next-review` y `nivel-retencion`.
10. **Tareas pendientes → `cosas-por-hacer.md`.** Las tareas sin fecha fija van ahí. Las del día van en la daily note.
11. **Navega por el grafo, no a ciegas.** Antes de buscar con `glob`/`grep` o de abrir notas al azar, lee PRIMERO `900 Índice del Grafo MOC.md`: localiza por su resumen las 1-3 notas relevantes, sigue sus aristas `→` y solo entonces abre el contenido completo. Esto ahorra tokens (modelo LLM-wiki). Tras crear/editar/mover notas, regenera el índice con la skill `indexador-grafo`.
12. **Memoria progresiva del agente.** Al INICIAR una sesión de trabajo, lee `meta/memoria-agente/_indice.md` (y al menos `preferencias.md` y `proyectos-en-curso.md`) para arrancar con contexto acumulado. Al CERRAR, si hubo aprendizajes durables, destílalos al archivo correcto con la skill `memoria-agente`, aplicando su filtro de poda (valor sobre volumen). No dupliques lo que ya está en las notas, en git o en este CLAUDE.md.
13. **Decantación cognitiva (poda).** Periódicamente (revisión semanal/mensual) corre la skill `decantador-cognitivo`: cruza relevancia + nivel-retención + conectividad en el grafo + antigüedad y **propone** degradar prioridad, fusionar o archivar a `archivo/`. **Solo propone**: nunca borra ni archiva sin tu aprobación, y archivar es reversible. También poda esta memoria del agente y `meta/` cuando se saturen. Valor sobre volumen.
14. **Huecos y notas puente.** La sección «🕳️ Huecos del grafo» del `900 Índice del Grafo MOC.md` es la lista oficial de **lo que falta por investigar**: enlaces con demanda real pero sin archivo destino. Al planear qué estudiar a continuación, propón primero los huecos con más referencias entrantes. Si una nota (o un hueco) conecta los dos dominios de la bóveda (física ↔ redes), es una **nota puente**: lleva tag `#tipo/puente` y su `🔗 Relacionado` enlaza al menos 1 nota de **cada** dominio (ej: [[modulacion-digital-ask-fsk-psk]] une el espectro EM con la codificación de línea). Los puentes son los nodos de mayor valor del grafo: priorízalos al elegir qué investigar y qué repasar.

---

## Ritual de las 3 Pausas (flujo diario)

Cada pausa tiene una **skill dueña**: si la pausa no ocurre sola, se invoca la skill. La Pausa 3 es la que sostiene el sistema (sin cierre, los repasos no se registran y la cola explota).

```
☀️ Pausa 1 — Revisión matutina (5-10 min) · skill: generador-daily
├── Crear/abrir la daily-note del día
├── Definir 1-3 objetivos (Pareto)
└── Repasos de hoy: máx. 5 notas (presupuesto — regla 3 de metodologías)

✍️ Pausa 2 — Captura rápida (durante el día, sin fricción)
├── Capturar en inbox/ o en la daily-note SIN clasificar
├── Crear notas de research con plantilla completa
└── Llenar Cornell + resumen Feynman al terminar cada lectura

🌙 Pausa 3 — Procesamiento nocturno (5-10 min) · skill: cierre-del-dia
├── Registrar repasos hechos en cada nota (frontmatter + tabla de repasos)
├── Replanificar sin culpa los repasos que no alcanzaron
├── Procesar capturas: inbox/ → ideas / proyectos / research
├── Completar la reflexión del día
└── Verificar que toda nota nueva tiene 🔗 Relacionado
```

---

## Revisión semanal

Cada semana dedica 20-30 minutos a:

- [ ] Vaciar `inbox/` clasificando cada nota
- [ ] Revisar el estado de los proyectos activos (Pareto check)
- [ ] Buscar notas con `#review/pendiente` atrasadas (correr `auditor-repasos`)
- [ ] ¿Alguna `#review/pausado` merece reactivarse? (subió de relevancia o ganó conexiones en el grafo)
- [ ] Buscar notas con `#feynman/pendiente` y completar el resumen
- [ ] Identificar conexiones nuevas entre notas (agregar `[[enlaces]]`)
- [ ] Archivar o completar lo que ya no es relevante

---

## Inventario de notas

> [!info] No mantengo un inventario manual aquí.
> Un listado fijo se desincroniza en cuanto creo o muevo una nota. La **fuente de verdad** del contenido de la bóveda son los MOC y el buscador de Obsidian:
> - [[000 Home MOC]] → navegación global
> - [[010 Redes y Telecomunicaciones MOC]] → redes y telecom
> - [[020 Física y Electromagnetismo MOC]] → física y electromagnetismo
> - [[050 Diario MOC]] → índice de notas diarias
>
> Para saber qué notas existen, usa la búsqueda por carpeta (`path:investigaciones/`) o por tag (`#tema/...`). Si creas o reorganizas notas, **actualiza el MOC correspondiente**, no este archivo.
