---
version: 3
ultima-actualizacion: 2026-06-18
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

---

## Sistema de tags

### Tags estructurales
- `#daily` → notas diarias
- `#proyecto` → proyectos
- `#research` → investigaciones
- `#persona` → contactos
- `#idea` → ideas sueltas
- `#inbox` → pendiente de clasificar

### Tags de estado
- `#estado/activo` · `#estado/pausado` · `#estado/completado`

### Tags de prioridad
- `#prioridad/alta` · `#prioridad/media` · `#prioridad/baja`

### Tags de aprendizaje
- `#review/pendiente` → necesita repaso por repetición espaciada
- `#review/dominado` → concepto consolidado
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
3. **Repetición espaciada (realista, 2 niveles):** Al crear una nota de research, fija `next-review` al día siguiente — **eso es lo único no negociable** (el primer repaso es el que más rinde). Después usa la escalera **mínima sostenible: Día 1 → 7 → 30** (3 toques). La escalera completa (1 → 3 → 7 → 14 → 30 → 60) es **opcional** y solo se justifica en conceptos `#prioridad/alta`. Marca `#review/pendiente` / `#review/dominado`. Si un mes no repasaste, no acumules deuda: relee y reinicia desde Día 1.
4. **Loci:** Obligatorio solo para conceptos `#prioridad/alta`. Usa la tabla `🏛 Anclas de memoria` con imágenes vívidas/exageradas.
5. **Feynman:** Si no puedes explicar la idea central en 3 frases sin jerga, la nota no está completa. Marca huecos con `❓` y `#feynman/pendiente`.

---

## Reglas de funcionamiento

1. **Enlazar siempre.** Si una nota pertenece a un proyecto, enlázala desde `🔗 Relacionado` del proyecto. Si menciona a una persona, crea o enlaza su ficha en `personas/`.
2. **Ideas con peso → proyecto.** Cuando una idea madure, conviértela en proyecto usando `templates/proyecto.md`.
3. **Inbox sin forzar.** Si algo llega sin contexto claro, déjalo en `inbox/`. No fuerces clasificación.
4. **Claridad > detalle.** Prioriza conexión entre notas y utilidad real por encima del detalle excesivo.
5. **Revisar antes de crear.** Antes de crear una nota nueva, verifica si ya existe una relacionada que puedas enriquecer.
6. **Repasar > acumular.** Una nota repasada tres veces vale más que diez notas sin revisar.
7. **Feynman como filtro.** Si no puedes explicar algo en tus palabras, no pases a la siguiente nota: primero entiende esta.
8. **Una nota, un tema.** Si una nota cubre más de un tema claramente diferenciado, dividirla en notas separadas con `🔗 Relacionado` entre ellas (ej: `INTERNET`, `NSFNET`, `RFC`).
9. **Frontmatter obligatorio en `investigaciones/`.** Usa la plantilla `templates/research.md`, que genera todos los campos: `type`, `fuente`, `fecha`, `relevancia`, `dominio`, `review-count`, `ultimo-review`, `next-review`, `nivel-retencion` y `tags`. Imprescindibles para que el sistema de repaso funcione: `type`, `fecha`, `next-review` y `nivel-retencion`.
10. **Tareas pendientes → `cosas-por-hacer.md`.** Las tareas sin fecha fija van ahí. Las del día van en la daily note.

---

## Flujo de trabajo diario recomendado

```
Mañana (5-10 min)
├── Abrir daily-note del día
├── Definir 1-3 objetivos (Pareto)
└── Revisar notas con #review/pendiente para hoy

Durante el día
├── Capturar ideas en inbox/ o en la daily-note
├── Crear notas de research con plantilla completa
└── Llenar Cornell + resumen Feynman al terminar cada lectura

Noche (5-10 min)
├── Completar reflexión del día en la daily-note
├── Mover ideas maduras a ideas/ o proyectos/
├── Actualizar next-review de las notas repasadas
└── Verificar que toda nota nueva tiene 🔗 Relacionado
```

---

## Revisión semanal

Cada semana dedica 20-30 minutos a:

- [ ] Vaciar `inbox/` clasificando cada nota
- [ ] Revisar el estado de los proyectos activos (Pareto check)
- [ ] Buscar notas con `#review/pendiente` atrasadas
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
