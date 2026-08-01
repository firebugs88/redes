---
name: indexador-grafo
description: >
  Regenera el "900 Índice del Grafo MOC.md", un mapa compacto y legible por
  máquina de toda la bóveda (una línea de resumen + enlaces salientes por nota).
  El agente lo lee PRIMERO para navegar el grafo de conocimiento sin escanear
  carpetas a ciegas, ahorrando tokens (modelo LLM-wiki de Karpathy).
  Usar tras crear/editar varias notas, en la revisión semanal, o cuando el
  índice se sienta desactualizado respecto a investigaciones/ e ideas/.
---

# 🗺️ Indexador del Grafo

Este skill construye y mantiene el **índice navegable del grafo** de la bóveda: el archivo `900 Índice del Grafo MOC.md` en la raíz. Es la pieza que materializa la visión de [[vision-agente-memoria-progresiva]]: el agente recorre un mapa de enlaces en vez de buscar a ciegas.

---

## Cuándo activar este skill

- Después de crear o editar varias notas de `investigaciones/` o `ideas/`.
- En la revisión semanal (mantener el mapa sincronizado).
- Cuando el usuario pida "regenerar el índice", "actualizar el mapa del grafo" o similar.
- Tras `procesador-inbox` o `investigador-profundo` (han añadido nodos nuevos).

---

## Qué incluir como nodo del grafo

- **Sí:** notas de `investigaciones/**` e `ideas/**` (el grafo conceptual).
- **No** (no son nodos): imágenes (`.png/.jpg`), PDFs, `daily-notes/`, `templates/`, MOCs, y material en bruto de `recursos/` (eso va en la sección "Material fuente").

---

## Flujo de trabajo

1. **Listar nodos:** todos los `.md` en `investigaciones/**` e `ideas/**`.
2. **Por cada nota, extraer:**
   - **Resumen de 1 frase.** Tómalo del primer punto del bloque `## 📝 Resumen` / `## 📌 Resumen`, o de la definición destacada (`> [!important]`). Comprímelo a una sola frase densa (estilo Feynman, sin relleno). NUNCA lo dejes vacío.
   - **Aristas salientes:** todos los `[[enlaces]]` internos de la nota, **filtrando**:
     - Quita imágenes, PDFs, anclas (`#sección`), alias (`[[x|alias]]` → usa `x`), enlaces a `daily-notes`, a MOCs y a `cosas-por-hacer`.
     - Deja solo enlaces a **otras notas-nodo que existan como archivo**.
     - Deduplica.
3. **Detectar hubs:** marca con ⭐ las 4-6 notas con más enlaces entrantes+salientes (puntos de entrada por dominio).
4. **Detectar huecos:** enlaces `[[x]]` cuyo archivo destino NO existe. Sepáralos en:
   - **Huecos legítimos** (concepto aún no investigado) → sección "🕳️ Huecos del grafo".
   - **Probables typos/rotos** (existe un archivo muy parecido) → sub-bloque de advertencia, sugiriendo el nombre correcto.
5. **Escribir** `900 Índice del Grafo MOC.md` con el formato de abajo. Sobrescribe el archivo completo (es generado).

---

## Formato de salida (canónico)

- Frontmatter con `type: indice-grafo`, `generado: YYYY-MM-DD`, `generado-por: skill indexador-grafo`.
- Callout de advertencia "archivo generado, no editar a mano".
- Callout con las **instrucciones de uso para el agente** (leer primero → localizar 1-3 notas → seguir aristas → abrir solo esas).
- Una sección `##` por subcarpeta/dominio, con prefijo emoji.
- Cada nodo en dos líneas:
  ```
  - [[slug]] :: resumen de una frase
    → [[vecino1]], [[vecino2]], [[vecino3]]
  ```
- Hubs con `⭐` delante.
- Secciones finales: "🕳️ Huecos del grafo", "📚 Material fuente", "🔗 Relacionado" (a los MOCs).

---

## Reglas

- **Compacto = barato.** El valor del índice es que sea pequeño. Resúmenes de UNA frase, sin párrafos.
- **No inventes enlaces ni resúmenes:** todo sale de las notas reales.
- **No modifiques las notas fuente** — este skill solo escribe `900 Índice del Grafo MOC.md`.
- Si una nota no tiene resumen extraíble, márcala con `:: ⚠️ sin resumen — completar nota` (señal para `verificador-feynman`).
- Usa SIEMPRE `[[doble corchete]]`, fechas `YYYY-MM-DD`, nombres en minúsculas-con-guiones.
- Tras regenerar, reporta brevemente: nodos indexados, hubs detectados, huecos y enlaces rotos encontrados.

---

## 🔗 Relacionado

- Complementa a `organizador-boveda` (auditoría) y `auditor-repasos` (repetición espaciada).
- Sirve a la visión de [[vision-agente-memoria-progresiva]] (pilar 3: integración + ahorro de tokens).
