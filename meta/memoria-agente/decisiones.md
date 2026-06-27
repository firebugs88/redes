---
type: memoria-agente
rol: decisiones
fecha: 2026-06-26
tags:
  - meta
  - memoria-agente
  - decisiones
---

# 🏛️ Decisiones de arquitectura (registro ADR)

> Decisiones de diseño del sistema-agente y su porqué. Formato: fecha · decisión · razón. No las borres aunque se reviertan — marca la reversión con una entrada nueva (el historial enseña).

- **2026-06-26 · La capa de agente se construye en 3 piezas, una por pilar.** A) Índice del grafo (integración + ahorro de tokens), B) Memoria del agente (mejora adaptativa), C) Decantador/poda (poda cognitiva). _Razón:_ separar los 3 pilares de la visión en entregables validables por separado.
- **2026-06-26 · Empezar por la Pieza A (índice del grafo).** _Razón:_ es la fundación que las otras dos recorren y materializa de inmediato el ahorro de tokens. **Estado: HECHA** (`900 Índice del Grafo MOC.md` + skill `indexador-grafo` + regla 11 en CLAUDE.md).
- **2026-06-26 · La memoria del agente vive EN LA BÓVEDA (`meta/memoria-agente/`), git-sincronizada, no en el harness.** _Razón:_ el usuario prioriza transparencia, curación manual y sincronización a sus dispositivos (Hermes) por encima de la auto-carga sin coste del `memory/` nativo de Claude Code. Coste aceptado: una regla en CLAUDE.md para leerla al iniciar.
- **2026-06-26 · Memoria meta en archivos por categoría, no un archivo por hecho.** _Razón:_ para meta-memoria del agente, unos pocos archivos estables (preferencias/decisiones/patrones/proyectos) son más legibles y podables en Obsidian que decenas de micro-notas. (Distinto de la regla "una nota, un tema" que aplica al conocimiento de dominio.)
- **2026-06-26 · Poda = degradar o archivar, NUNCA borrar conocimiento.** El decantador (`decantador-cognitivo`) solo propone; archivar mueve a `archivo/` (reversible, los `[[enlaces]]` siguen resolviendo). Solo se borra la memoria operativa del agente (`meta/`), no las notas de dominio. _Razón:_ en una bóveda de aprendizaje el costo de perder conocimiento es alto; el de degradar prioridad es nulo.
- **2026-06-26 · El Índice de Valor del decantador es transparente y pondera el grafo cuando la relevancia se satura.** _Razón:_ el primer escaneo mostró que ~86% de las notas están marcadas `relevancia: alta` → esa señal no informa. La conectividad en el grafo (Pieza A) es entonces la señal de valor más fiable.
- **2026-06-26 · Distribución objetivo de relevancias ~tipo Pareto (≈30/50/20).** Al recalibrar, `alta` se reserva para hubs que además son columna vertebral del proyecto física↔redes; `media` para soporte/contexto/historia; `baja` para temas periféricos. Resultado del primer pase: 7 alta / 12 media / 4 baja sobre 23 notas. Mantener esta proporción al crear notas nuevas (no marcar todo "alta").

## 🔗 Relacionado

- [[_indice]] · [[proyectos-en-curso]] · [[vision-agente-memoria-progresiva]]
