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

- **2026-06-26 · Git: rama + commit + PUSH + PR hechos.** La capa de agente (A+B+C) + las 4 correcciones viven en la rama `agente/capa-memoria` (commit `c827724`), ya pusheada a `origin` (github.com/firebugs88/redes). **PR #1 abierto hacia `main`** el 2026-06-26: https://github.com/firebugs88/redes/pull/1 (creado vía navegador; el `gh` CLI falló por token de keyring inválido). _Falta:_ revisar y mergear el PR. Los cambios pre-existentes (`workspace.json`, `020 ... MOC`, `inbox/`, nota suelta del lagrangiano) se dejaron fuera del commit a propósito.
- **2026-06-26 · Primer decantado — acciones APLICADAS (aprobadas por el usuario):** corregidos los 3 errores de higiene (`resistencia` tenía el campo en inglés `relevance`→`relevancia`; `voltaje` ultimo-review futuro 06-28→05-28; `corriente-electrica` next-review 06-18→06-27) y degradada `ondas-gravitacionales` alta→media.
- **2026-06-26 · Recalibración de relevancias pendiente (opcional):** sigue el ~86% en "alta"; solo se degradó una. El usuario puede pedir un pase de recalibración más amplio cuando quiera.

## 🔗 Relacionado

- [[_indice]] · [[decisiones]] · [[900 Índice del Grafo MOC]]
