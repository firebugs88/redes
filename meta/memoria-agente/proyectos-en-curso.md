---
type: memoria-agente
rol: proyectos-en-curso
fecha: 2026-06-26
tags:
  - meta
  - memoria-agente
  - proyectos
---

# 🚧 Proyectos en curso

> Estado vivo de lo que estamos construyendo. Mantén esto actualizado: es lo primero que leo para saber "¿dónde estábamos?". Cuando algo se completa del todo, resúmelo y archívalo.

## Capa de agente (3 piezas) — la visión [[vision-agente-memoria-progresiva]]

| Pieza | Pilar | Estado | Artefactos |
|-------|-------|--------|-----------|
| A — Índice del grafo | Integración + tokens | ✅ Hecha (2026-06-26) | `900 Índice del Grafo MOC.md`, skill `indexador-grafo`, regla 11 CLAUDE.md |
| B — Memoria del agente | Mejora adaptativa | ✅ Hecha (2026-06-26) | `meta/memoria-agente/*`, skill `memoria-agente`, regla 12 CLAUDE.md |
| C — Decantador / poda | Poda cognitiva | ✅ Hecha (2026-06-26) | skill `decantador-cognitivo`, carpeta `archivo/`, regla 13 CLAUDE.md |

> **Las 3 piezas de la capa de agente están completas.** La visión [[vision-agente-memoria-progresiva]] está implementada en su versión 1.

## Pendientes inmediatos

- **2026-06-26 · Git: rama + commit + PUSH + PR hechos.** La capa de agente (A+B+C) + las 4 correcciones viven en la rama `agente/capa-memoria` (commit `c827724`), ya pusheada a `origin` (github.com/firebugs88/redes). **PR #1 MERGEADO y `main` sincronizado** el 2026-06-26: https://github.com/firebugs88/redes/pull/1. El PR en GitHub solo había incluido el commit inicial (`c827724`); los otros 6 commits se completaron mergeando la rama a `main` localmente (merge `f9b28fd`, pusheado a origin, porque el `gh` CLI seguía con token inválido). `main` == contenido de la rama (verificado). La rama `agente/capa-memoria` quedó totalmente integrada (se puede borrar).
- **2026-06-26 · Cabos sueltos resueltos.** `lagrangiano` integrado al repo (commit `1e7b994`) + registrado en MOC 020, con su escalera de repaso ajustada a la mínima sostenible. `.obsidian/workspace.json` destrackeado (commit `aeec233`, ya estaba en `.gitignore`; archivo local conservado). La captura `inbox/lagrangiano` (procesado:true) se retiró del working tree (su contenido ya vive en la nota de research). **Working tree limpio.**
- **2026-06-26 · Primer decantado — acciones APLICADAS (aprobadas por el usuario):** corregidos los 3 errores de higiene (`resistencia` tenía el campo en inglés `relevance`→`relevancia`; `voltaje` ultimo-review futuro 06-28→05-28; `corriente-electrica` next-review 06-18→06-27) y degradada `ondas-gravitacionales` alta→media.
- **2026-06-26 · Recalibración de relevancias HECHA.** Las 23 notas de research pasaron de ~86% "alta" a un reparto Pareto: **7 alta / 12 media / 4 baja**. Rúbrica: alta = hub del grafo + columna vertebral física↔redes; media = soporte/contexto; baja = periférica (ondas-gravitacionales, lagrangiano, nsfnet, rfc).
- **2026-06-26 · Tags `prioridad/` reconciliados con la relevancia.** Las 5 notas con `prioridad/alta` en frontmatter se alinearon: `preguntas-clave`, `espectro-electromagnetico`, `la-corriente-electrica-en-el-hogar`, `modelo-osi` → `prioridad/media`; `lagrangiano` → `prioridad/baja`. (Los `#prioridad/alta` que quedan en el cuerpo son texto explicativo de los callouts de repaso, no clasificaciones.)

## 🔗 Relacionado

- [[_indice]] · [[decisiones]] · [[900 Índice del Grafo MOC]]
