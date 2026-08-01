---
name: organizador-boveda
description: >
  Audita la integridad estructural de la bóveda Obsidian. Detecta enlaces rotos,
  notas huérfanas, MOCs desactualizados, tags malformados en frontmatter,
  secciones vacías en notas de research y violaciones de las convenciones de
  CLAUDE.md. Genera un reporte priorizado con acciones correctivas.
  Usar en la revisión semanal, después de crear varias notas, o cuando la
  bóveda se sienta desorganizada.
---

# 🗂️ Organizador de Bóveda

Este skill audita la integridad estructural de la bóveda Obsidian y genera reportes con problemas detectados y acciones correctivas priorizadas.

---

## Cuándo activar este skill

- En la revisión semanal del usuario.
- Después de crear varias notas nuevas.
- Cuando el usuario pida "auditar", "revisar" u "organizar" la bóveda.
- Cuando se sospeche desorganización o enlaces rotos.

---

## Auditorías que realiza

### 1. Auditoría de enlaces
- Busca todos los `[[enlaces]]` en todas las notas.
- Verifica que cada nota referenciada exista como archivo `.md` en la bóveda.
- Reporta enlaces rotos indicando nota de origen y el enlace roto.

### 2. Notas huérfanas
- Identifica notas que NO están enlazadas desde ningún MOC (000, 010, 020, 050) ni desde `🔗 Relacionado` de otra nota.
- Una nota huérfana es información aislada — el objetivo de la bóveda es que todo esté conectado.

### 3. MOCs desactualizados
- Compara las notas existentes en cada subcarpeta de `investigaciones/` contra lo listado en:
  - `010 Redes y Telecomunicaciones MOC.md`
  - `020 Física y Electromagnetismo MOC.md`
  - `000 Home MOC.md`
- Reporta notas que existen en disco pero no aparecen en ningún MOC.

### 4. Tags malformados
- En el frontmatter YAML: los tags NO deben tener `#` (correcto: `tema/redes`, incorrecto: `#tema/redes`).
- En el cuerpo de la nota: los tags SÍ deben tener `#`.
- Detecta y reporta cualquier violación.

### 5. Frontmatter incompleto
- Las notas en `investigaciones/` DEBEN tener estos campos: `type`, `fuente`, `fecha`, `next-review`, `nivel-retencion`, `tags`.
- Reporta campos faltantes por nota.

### 6. Secciones vacías en notas de research
- Tabla Cornell sin contenido.
- Resumen Feynman vacío.
- Sección `🔗 Relacionado` sin enlaces.
- Resumen Pareto sin ideas.

### 7. Nomenclatura de archivos
- Todos los archivos deben ser `minúsculas-separadas-por-guiones.md`.
- Excepto los MOC que usan prefijo numérico: `010 Nombre MOC.md`.
- Reporta violaciones.

### 8. Regla "Una nota, un tema"
- Si detectas una nota que claramente cubre más de un tema diferenciado, sugiere dividirla con `🔗 Relacionado` entre las partes.

---

## Formato del reporte

```markdown
# 🗂️ Auditoría de Bóveda — YYYY-MM-DD

## 📊 Resumen General
- Total de notas escaneadas: X
- Problemas encontrados: X
- Severidad: 🔴 Crítico (X) / 🟡 Medio (X) / 🟢 Menor (X)

## 🔴 Problemas Críticos
[enlaces rotos, frontmatter faltante en research]

## 🟡 Problemas Medios
[notas huérfanas, MOCs desactualizados, secciones vacías]

## 🟢 Problemas Menores
[tags malformados, nomenclatura de archivos]

## ✅ Acciones Recomendadas (priorizadas)
1. [acción más importante]
2. ...
```

---

## Estructura de la bóveda (referencia)

- **Raíz:** MOCs (000, 010, 020, 050), `cosas-por-hacer.md`
- **`investigaciones/`** → `1-fundamentos/`, `2-circuitos/`, `3-electromagnetismo/`, `4-redes-y-telecom/`
- **Otras carpetas:** `daily-notes/`, `proyectos/`, `ideas/`, `inbox/`, `personas/`, `recursos/`, `templates/`, `Excalidraw/`

---

## Reglas

- Usa `[[doble corchete]]` para todos los enlaces internos.
- **No modifiques ningún archivo** — solo genera el reporte.
- Sé específico: indica archivo y problema exacto.
- Prioriza los problemas por impacto en la utilidad de la bóveda.
