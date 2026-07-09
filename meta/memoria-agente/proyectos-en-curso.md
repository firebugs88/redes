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
- **2026-06-28 · Auditoría de repasos.** Escaneo completo de las 23 notas. Estado: **19/23 nunca repasadas** (review-count 0), 0 atrasadas, `voltaje` era la única para hoy (ya repasada, falta actualizar next-review→07-05). Próximos repasos: 3 notas el 29 jun (ecuaciones-de-maxwell, codificación-4b5b, fast-ethernet), 3 notas el 30 jun. `fast-ethernet` tiene deuda de 80 días → releer y reiniciar desde Día 1.
- **2026-06-28 · Higiene: tags faltantes corregidos.** Se agregó campo `tags` a 4 notas que no lo tenían: `corriente-electrica`, `onda-electromagnetica`, `fotones-virtuales`, `fast-ethernet-ieee-802-3u`. Ahora las 23 notas tienen `review/pendiente` y tags de tema consistentes. Pendiente: commit + push.
- **2026-06-30 · Nuevo subagente `profesor-fisica` creado.** Tutor de física que explica con didáctica (analogías + descomposición paso a paso) y persiste cada explicación como nota con las metodologías (Cornell/Feynman/Pareto/Loci). Archivos: `.claude/agents/profesor-fisica.md` + memoria en `.claude/agent-memory/profesor-fisica/`. Ya autodescubierto como `subagent_type`. **Pendiente: validarlo en una sesión real.** El porqué de sus decisiones de diseño está en [[decisiones]].

- **2026-07-03 · Optimización integral del ecosistema (auditoría + aplicación).** (1) **Anti-avalancha:** presupuesto de repaso ≤5/día + `review/pausado` (4 notas baja pausadas: lagrangiano, nsfnet, rfc, ondas-gravitacionales) + cola replanificada: de 16 vencidas/hoy a 5 para hoy y ≤5/día hasta el 07-07 (el porqué en [[decisiones]]). (2) **Ritual de las 3 Pausas** formalizado: `generador-daily` (P1) + inbox (P2) + nueva skill `cierre-del-dia` (P3) + plantilla daily reescrita (frontmatter roto corregido). (3) **Protocolo anti-duplicados** en regla 5 + Paso 0 de `investigador-profundo`. (4) **Huecos y puentes** (regla 14 + tag `tipo/puente` en las 3 notas de modulación); huecos nuevos registrados: ECMA, IEEE 802.11. (5) **Higiene:** 9 enlaces rotos corregidos (7 estilo ruta en la-composicion + typo en dix + prefijo en maxwell), carpetas `inbox/ proyectos/ personas/` creadas con README, cosas-por-hacer sincronizada, CLAUDE.md → v4 con inventario de skills. **Pendiente: commit + push** (el working tree arrastra además cambios sin commitear de las sesiones del 06-28 y 06-30).

- **2026-07-08 · Skills de git añadidas al toolkit.** Tres slash-commands nuevos en `.claude/skills/` — categoría propia harness-level, distinta de las skills de flujo de bóveda (`.agents/skills/`): `revisar-cambios-git` (audita el árbol sin confirmar en busca de secretos/riesgos; solo lectura), `escribir-commit` (mensajes por el porqué + commits atómicos con staging por ruta), `rescate-git` (recupera trabajo perdido sin empeorar el daño). Documentadas en CLAUDE.md → **v5** (línea nueva bajo la tabla de skills). Commits `0146585` (skills) + `8e4dc4c` (updates de plugins Obsidian, ruido separado en su propio commit) + `10a7451` (docs CLAUDE.md), los tres pusheados a `origin/main`. **Working tree limpio.** El porqué del diseño en [[decisiones]].

## 🔗 Relacionado

- [[_indice]] · [[decisiones]] · [[900 Índice del Grafo MOC]]
