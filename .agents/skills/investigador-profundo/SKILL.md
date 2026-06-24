---
name: investigador-profundo
description: >
  Investigador académico riguroso que crea notas de investigación completas
  para la bóveda Obsidian. Sigue todas las convenciones de CLAUDE.md: Cornell,
  Feynman, Loci, Pareto y repetición espaciada. Busca fuentes confiables y
  genera la nota en la subcarpeta correcta de investigaciones/.
  Usar cuando el usuario pida investigar un tema, crear una nota de research,
  o profundizar en un concepto.
---

# 🔬 Investigador Profundo

Este skill crea notas de investigación COMPLETAS y RIGUROSAS en la bóveda Obsidian, siguiendo todas las convenciones del segundo cerebro.

---

## Cuándo activar este skill

- El usuario pide "investigar", "crear nota de research", "profundizar en" un tema.
- Se menciona un concepto de redes, física, electromagnetismo o telecomunicaciones que necesita documentación.
- El usuario quiere transformar información bruta en una nota estructurada.

---

## Convenciones obligatorias (de CLAUDE.md)

- Usa SIEMPRE `[[doble corchete]]` para enlaces internos de Obsidian.
- Tags en el CUERPO de la nota: SIEMPRE con `#` (ej: `#proyecto`, `#research`).
- Tags en el FRONTMATTER (bloque YAML `tags:`): SIEMPRE **sin** `#` (ej: `tema/redes`, `review/pendiente`).
- Los nombres de archivo van en **minúsculas separados por guiones**: `nombre-del-archivo.md`
- Las fechas siempre en formato **YYYY-MM-DD**.
- Toda nota **debe terminar** con una sección `🔗 Relacionado` con enlaces a notas relevantes.
- Usa callouts de Obsidian (`> [!tip]`, `> [!info]`, `> [!warning]`).

---

## Estructura de carpetas

Las notas de investigación van en `investigaciones/` dentro de la subcarpeta correcta:

| Subcarpeta | Dominio |
|------------|---------|
| `1-fundamentos/` | Física fundamental, materia, corriente, voltaje, resistencia |
| `2-circuitos/` | Circuitos, leyes de Ohm/Kirchhoff |
| `3-electromagnetismo/` | Ondas EM, Maxwell, espectro, fotones, gravitacionales |
| `4-redes-y-telecom/` | Ethernet, TCP/IP, codificación, historia de Internet, RFC |

Si el tema no encaja en ninguna, **PREGUNTA** al usuario antes de crear subcarpeta nueva (mantén prefijo numérico correlativo: `5-...`).

---

## Plantilla de research (OBLIGATORIA)

Toda nota de investigación DEBE usar esta estructura exacta. Lee `templates/research.md` para la versión canónica, pero aquí está la referencia completa:

```markdown
---
type: research
fuente: [fuente principal]
fecha: YYYY-MM-DD
relevancia: alta/media/baja
dominio: [dominio]
review-count: 0
ultimo-review: YYYY-MM-DD
next-review: [fecha de mañana, YYYY-MM-DD]
nivel-retencion: 0
palabras-clave:
  - palabra1
  - palabra2
tags:
  - research
  - tema/[categoría]
  - review/pendiente
---

# 🔬 Título del tema

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `Palabra 1` · `Palabra 2` · `Palabra 3` · `Palabra 4` · `Palabra 5`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1.
2.
3.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
|                     |                          |

**📌 Resumen en tus propias palabras (Feynman check):**

> Explícalo como si se lo contaras a alguien que no sabe nada del tema.

---

## 💡 Aprendizajes principales

-
-

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Solo obligatorio para #prioridad/alta.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
|          |                    |                   |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**

**Aplicación a medio plazo (este mes):**

**Proyecto o idea donde encaja:**
- [[ ]]

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default: Día 1 → Día 7 → Día 30. Solo para #prioridad/alta: Día 1 → 3 → 7 → 14 → 30 → 60.

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1) |       | ✅ / ⚠️ / ❌    |        |
| 2 (Día 7) |       | ✅ / ⚠️ / ❌    |        |
| 3 (Día 30) |       | ✅ / ⚠️ / ❌    |        |

---

## 🔗 Relacionado

- Proyectos: [[ ]]
- Ideas: [[ ]]
- Otras investigaciones: [[ ]]
```

---

## Reglas de calidad

1. **Verificar antes de crear:** Antes de crear una nota nueva, busca si ya existe una relacionada en `investigaciones/` que puedas enriquecer.
2. **NUNCA dejes secciones vacías.** Si no hay contenido para Loci (porque no es prioridad alta), escribe "No aplica (no es #prioridad/alta)".
3. **Feynman:** El resumen DEBE ser comprensible para alguien sin conocimiento técnico. Si usas jerga, explícala inmediatamente.
4. **Pareto:** El resumen se limita a 3-5 ideas clave, NO es un volcado de todo lo investigado.
5. **Fuentes:** Prioriza estándares (RFC, IEEE), libros de texto, papers, documentación oficial. Cita la fuente en el campo `fuente:` del frontmatter.
6. **Una nota, un tema.** Si el tema cubre más de un concepto diferenciado, crea notas separadas con `🔗 Relacionado` entre ellas.
7. **Después de crear la nota:** Actualiza el MOC correspondiente (010 Redes, 020 Física, etc.) agregando un enlace `[[nombre-de-la-nota]]`.

---

## Fuentes confiables (por prioridad)

1. Estándares oficiales (RFC vía datatracker.ietf.org, IEEE)
2. Libros de texto universitarios reconocidos
3. Papers revisados por pares
4. Documentación oficial de protocolos/tecnologías
5. Recursos educativos de universidades
