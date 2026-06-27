---
type: memoria-agente
rol: vision
fecha: 2026-06-26
tags:
  - meta
  - memoria-agente
  - vision
---

# 🌟 Visión — Agente con memoria progresiva (LLM-wiki)

Convertir el segundo cerebro de un ejecutor de tareas a un **agente con memoria progresiva** que mejora con el uso (efecto compuesto), inspirado en la "LLM Wiki" de Andrej Karpathy: el conocimiento vive en un grafo Markdown enlazado que el agente recorre, en vez de buscar a ciegas en carpetas.

## Tres pilares

1. **Mejora adaptativa** — la base de conocimiento evoluciona integrando lo aprendido en cada tarea.
2. **Poda / decantación cognitiva** — filtrar lo trivial, priorizar lo crítico (analogía: memoria de trabajo). Valor sobre volumen.
3. **Integración lógica** — los hallazgos nuevos se enlazan coherentemente con la estructura previa.

Objetivo transversal: **ahorro de tokens** vía un grafo navegable con contexto preciso.

> [!warning] Realidad técnica acordada
> Un LLM no ajusta pesos; la "mejora continua" se implementa como **memoria externa que crece** (archivos + recuperación por grafo), no como entrenamiento. Esto se le explicó al usuario y lo aceptó.

## Plan: la capa de agente en 3 piezas (una por pilar)

| Pieza | Pilar | Estado |
|-------|-------|--------|
| A — Índice del grafo (`900 Índice del Grafo MOC.md` + skill `indexador-grafo`) | Integración + tokens | ✅ Hecha |
| B — Memoria del agente (`meta/memoria-agente/` + skill `memoria-agente`) | Mejora adaptativa | ✅ Hecha |
| C — Decantador / poda (skill `decantador-cognitivo` + `archivo/`) | Poda cognitiva | ✅ Hecha |

**Las 3 piezas están completas (v1, 2026-06-26).**

> El estado vivo y detallado está en [[proyectos-en-curso]].

## 🔗 Relacionado

- [[_indice]] · [[decisiones]] · [[proyectos-en-curso]] · [[900 Índice del Grafo MOC]]
