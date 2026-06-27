---
name: memoria-agente
description: >
  Gestiona la memoria progresiva del agente en meta/memoria-agente/. Define el
  ritual de RECUERDO al iniciar (leer el índice + archivos relevantes) y el de
  CIERRE al terminar (destilar aprendizajes durables a preferencias, decisiones,
  patrones o proyectos-en-curso, aplicando un filtro de poda). Es lo que hace
  que cada sesión compounde sobre la anterior (efecto compuesto).
  Usar al iniciar una sesión de trabajo en la bóveda y al cerrarla cuando hubo
  aprendizajes que valga la pena retener.
---

# 🧠 Memoria del Agente

Implementa la Pieza B de [[vision-agente-memoria-progresiva]]: el pilar de **mejora adaptativa**. La memoria vive **en la bóveda** (`meta/memoria-agente/`), git-sincronizada y curable por el usuario.

---

## Cuándo activar

- **Al iniciar** cualquier sesión de trabajo en la bóveda → ritual de RECUERDO.
- **Al cerrar** una sesión que produjo aprendizajes durables → ritual de CIERRE.
- Cuando el usuario diga "recuerda esto", "actualiza tu memoria" o corrija algo que debería persistir.

---

## Ritual de RECUERDO (inicio)

1. Lee `meta/memoria-agente/_indice.md`.
2. Lee siempre `preferencias.md` y `proyectos-en-curso.md` (son baratos y casi siempre relevantes).
3. Lee `decisiones.md` si la tarea toca el diseño del sistema; `patrones.md` si vas a investigar o conectar notas.
4. Actúa con ese contexto. No vuelvas a preguntar lo que ya está en memoria.

---

## Ritual de CIERRE (fin) — con filtro de poda

Pregúntate: **¿esta sesión produjo algo durable y no derivable?** Si sí, destílalo al archivo correcto.

### Mapa de destino

| Aprendizaje | Archivo |
|-------------|---------|
| Cómo le gusta trabajar al usuario (idioma, tono, formato, nivel de detalle) | `preferencias.md` |
| Una decisión de diseño y su porqué | `decisiones.md` |
| Un patrón recurrente (temas, conexiones, errores corregidos) | `patrones.md` |
| Cambio de estado de lo que construimos | `proyectos-en-curso.md` |

### Filtro de poda (pilar 2, aplicado a la memoria misma)

> [!warning] Valor sobre volumen. NO guardes:
> - Lo que ya está en las notas, en git, o en CLAUDE.md (no dupliques la bóveda).
> - Detalles efímeros de una sola conversación que no se repetirán.
> - Hechos que envejecerán mal sin que nadie los actualice.
> - Más de lo necesario: una memoria saturada es tan inútil como ninguna.

**SÍ guarda:** preferencias estables, decisiones con consecuencias, patrones confirmados, estado de proyectos.

### Cómo escribir

- Entradas **concisas y fechadas** (`AAAA-MM-DD · …`). Una idea por viñeta.
- **Actualiza, no acumules:** si una preferencia o estado cambia, edita la entrada existente en vez de añadir una contradictoria. (Excepción: en `decisiones.md` las reversiones se registran como entrada nueva — el historial enseña.)
- **Poda al pasar:** si ves una entrada obsoleta o contradicha, corrígela o bórrala.
- Respeta las convenciones de la bóveda: `[[doble corchete]]`, tags en frontmatter sin `#`, terminar con `🔗 Relacionado`.
- Si creas un archivo de memoria nuevo, **regístralo en `_indice.md`**.

---

## Reglas

- La memoria es **del usuario y curable**: nunca guardes nada que no quisieras que viera. Es transparente por diseño.
- No conviertas esto en un diario: no es `daily-notes/`. Solo meta-conocimiento sobre la colaboración y el sistema.
- Si dudas entre guardar o no, **no guardes** — la poda por defecto protege la señal.

## 🔗 Relacionado

- Sirve a [[vision-agente-memoria-progresiva]] (pilar 1). Complementa `indexador-grafo` (Pieza A) y el futuro decantador (Pieza C).
