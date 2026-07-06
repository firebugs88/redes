---
type: memoria-agente
rol: patrones
fecha: 2026-06-26
tags:
  - meta
  - memoria-agente
  - patrones
---

# 🔁 Patrones recurrentes

> Lo que se repite en cómo el usuario estudia, conecta ideas y colabora. Esto me deja anticipar en vez de reaccionar. Actualiza cuando un patrón se confirme o cambie.

## Dominio de estudio

- **2026-06-26 · Dos dominios entrelazados:** física fundamental + electromagnetismo (1-fundamentos, 2-circuitos, 3-electromagnetismo) y redes/telecom (4-redes-y-telecom). El usuario **conecta ambos** deliberadamente — ej.: la señal de un cable Ethernet entendida como onda EM guiada (vector de Poynting). Al investigar redes, busca el fundamento físico; al investigar física, busca la aplicación en redes.

## Filosofía rectora

- **2026-06-26 · LLM-wiki de Karpathy:** el norte es un grafo de conocimiento navegable donde el agente recorre enlaces en vez de buscar a ciegas. Toda pieza nueva debe servir a esto.

## Cómo colabora

- **2026-06-26 · Flujo típico:** plantea una visión amplia → pide diseño → yo recomiendo → él elige una opción → construyo → valido → siguiente pieza. Le gusta decidir en bifurcaciones reales (usa bien las preguntas de opción).

## Higiene del sistema de aprendizaje (hallazgo del 1er decantado)

- **2026-06-26 · Inflación de relevancia:** marca casi todo como `relevancia: alta` (~86% de las notas). La señal de prioridad está saturada → al evaluar valor, pesa más la **conectividad en el grafo** que la relevancia declarada. Conviene recordarle de vez en cuando que recalibre (Pareto: no todo puede ser alta).
- **2026-06-26 · Deuda de repaso crónica:** casi todas las notas tienen `review-count: 0`, `nivel-retencion: 0` y `next-review` vencido ~3 semanas. El sistema de repetición espaciada existe pero apenas se usa. La ÚNICA nota con repasos reales es `señalizacion-diferencial` (review-count 4) — buena señal de lo que de verdad ha estudiado a fondo.
- **2026-06-26 · Errores recurrentes en el frontmatter:** aparecieron `ultimo-review` en el futuro, `next-review` anterior al último repaso, y un campo escrito en inglés (`relevance` en vez de `relevancia`, lo que lo vuelve invisible a los escaneos). Vigilar nombres de campo y coherencia de fechas al crear/editar notas.
- **2026-06-26 · Tags malformados — CORREGIDO.** Se limpiaron 69 líneas en 23 archivos (frontmatter con `#` entre comillas `"#tema/física"` → `tema/física`), preservando los tags del cuerpo `- #idea` (que SÍ llevan `#`). Se arregló también la raíz: la plantilla `registro-lectura-semanal.md` generaba tags malformados. La señal que separó malformado de correcto fue las comillas: solo el frontmatter los tenía entrecomillados.

- **2026-07-03 · La deuda de repaso era estructural, no de disciplina.** Sin cupo diario, las 23 notas compiten todas a la vez y la cola explota una y otra vez (21 vencidas el 06-24; 16 el 07-03 — cinco días después de haberla saneado). Respuesta estructural: presupuesto ≤5/día + `review/pausado` para relevancia baja (ver [[decisiones]]). **Señal de vigilancia:** si la cola de un día vuelve a superar ~8 notas, algo está agendando mal (¿notas nuevas todas en el mismo next-review? ¿pausadas reactivadas en bloque?).

## 🔗 Relacionado

- [[_indice]] · [[preferencias]] · [[900 Índice del Grafo MOC]]
