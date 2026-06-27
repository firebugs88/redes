---
name: decantador-cognitivo
description: >
  Decantación / poda cognitiva de la bóveda. Cruza relevancia + nivel-retención
  + conectividad en el grafo + antigüedad para calcular un Índice de Valor
  transparente por nota, y PROPONE (nunca ejecuta a ciegas) degradar prioridad,
  fusionar, archivar a archivo/ o corregir higiene de datos. También poda la
  memoria del agente cuando se satura. Valor sobre volumen.
  Usar en la revisión semanal/mensual o cuando la bóveda o la memoria se sientan
  saturadas de notas de bajo valor.
---

# 🪓 Decantador Cognitivo

Implementa la Pieza C de [[vision-agente-memoria-progresiva]]: el pilar de **poda / decantación cognitiva**. Mantiene el grafo denso y de alto valor filtrando lo trivial, **sin destruir conocimiento**.

> [!warning] Principio rector
> **Solo PROPONE. Nunca borra. Archivar es reversible.** El conocimiento no se elimina: se degrada de prioridad o se mueve a `archivo/` (donde los `[[enlaces]]` siguen resolviendo en Obsidian). La decisión final es siempre del usuario, ítem por ítem.

---

## Cuándo activar

- Revisión semanal/mensual.
- Cuando la bóveda acumule notas de bajo valor o la memoria del agente (`meta/memoria-agente/`) se sature.
- Cuando el usuario pida "podar", "decantar", "limpiar" o "qué archivo".

---

## Índice de Valor (rúbrica TRANSPARENTE)

Por cada nota, suma señales explicables (muestra siempre el desglose, nunca un número mágico):

| Señal | Fuente | Puntos |
|-------|--------|--------|
| **Conectividad** | grado total (entrantes+salientes) en `900 Índice del Grafo MOC.md` | ≥6 hub: **+3** · 3-5: **+2** · 1-2: **+1** · 0 huérfana: **0** |
| **Relevancia declarada** | frontmatter `relevancia` | alta: **+2** · media: **+1** · baja/ausente: **0** |
| **Compromiso de repaso** | `review-count` | ≥2: **+2** · 1: **+1** · 0: **0** |
| **Recencia** | `ultimo-review`/`fecha` vs hoy | <30d: **+2** · 30-90d: **+1** · >90d: **0** |
| **Completitud** | secciones Cornell/Resumen/Relacionado llenas | completa: **+1** · stub/vacía: **0** |

> [!important] Cuando la relevancia está saturada, manda el grafo
> Si **>70% de las notas** están marcadas `relevancia: alta`, esa señal está saturada y deja de informar (no todo puede ser prioridad alta — eso es lo contrario de Pareto). En ese caso **pondera más la conectividad y el repaso**, y avisa al usuario que recalibre las relevancias.

---

## Categorías de la propuesta

Clasifica cada nota y arma un reporte priorizado:

- 🟢 **Núcleo (mantener / promover).** Valor alto. Si una nota tiene conectividad alta pero `relevancia` baja/media, **propón PROMOVERLA** (la decantación también asciende, no solo degrada).
- 🟡 **Degradar relevancia.** Marcada `alta` sin conectividad ni repaso que lo respalde → bajar a `media`/`baja`. Recalibra el Pareto.
- 🟠 **Fusionar / consolidar.** Notas con fuerte solapamiento temático, o satélites pequeños que ganarían integrados en su nota madre (respeta "una nota, un tema": solo fusiona si NO son temas distintos).
- 🔴 **Archivar a `archivo/`.** Valor bajo + huérfana o casi + antigua sin toque + posible stub. Mover conserva el archivo.
- 🩺 **Higiene de datos.** Campos faltantes, fechas imposibles (futuras) o inconsistentes (`next-review` < `ultimo-review`). Deriva a `organizador-boveda` / `auditor-repasos`.

---

## Barreras de seguridad (innegociables)

1. **Nunca borrar.** Como máximo, mover a `archivo/` — y solo con aprobación explícita del usuario, ítem por ítem.
2. **Protección por enlaces entrantes.** Una nota referenciada por **≥2 notas** NO se archiva (rompería sus enlaces). Si parece de bajo valor pero está muy enlazada, repórtala como "revisar", no como "archivar".
3. **No archivar lo vivo.** Nada con repaso reciente, `relevancia: alta` con compromiso real, o creada en los últimos 30 días.
4. **No inventes candidatos.** Si la bóveda no tiene notas de bajo valor, **dilo claramente**. Un reporte honesto que no propone podar nada es un éxito, no un fracaso.

---

## Al ejecutar acciones aprobadas

- **Archivar:** mover el `.md` a `archivo/` (conserva nombre). Quita su enlace de los MOC. Regenera `900 Índice del Grafo MOC.md` con `indexador-grafo`. Avisa de enlaces que queden colgando.
- **Degradar/promover:** editar solo el campo `relevancia` del frontmatter.
- **Fusionar:** integrar contenido en la nota madre, dejar `🔗 Relacionado`, y archivar la absorbida.
- Registra la decisión en `meta/memoria-agente/decisiones.md` si sienta precedente.

---

## Poda de la propia memoria del agente

Aplica el mismo criterio a `meta/memoria-agente/*`: entradas obsoletas, contradichas por una más nueva, o que envejecieron mal → corrígelas o bórralas (aquí sí se borra, porque es memoria operativa, no conocimiento). Una memoria saturada es tan inútil como ninguna.

---

## 🔗 Relacionado

- Cierra el ciclo de [[vision-agente-memoria-progresiva]] (pilar 2). Usa el grafo de `indexador-grafo` (Pieza A) y vigila `memoria-agente` (Pieza B).
- Complementa `organizador-boveda` (integridad) y `auditor-repasos` (deuda de repaso).
