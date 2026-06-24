---
name: auditor-repasos
description: >
  Escanea todas las notas de investigación de la bóveda Obsidian, lee el campo
  next-review del frontmatter y genera un reporte de repetición espaciada.
  Clasifica notas como atrasadas, para hoy, próximos 7 días o dominadas.
  Usar cuando el usuario pregunte "¿qué debo repasar?", en la rutina matutina,
  o en la revisión semanal.
---

# 📅 Auditor de Repasos

Este skill escanea las notas de investigación y genera reportes de repetición espaciada para mantener el sistema de aprendizaje funcionando.

---

## Cuándo activar este skill

- El usuario pregunta "¿qué debo repasar hoy?" o similar.
- Es parte de la rutina matutina o revisión semanal.
- Se sospecha que hay deuda de repaso acumulada.
- Se quiere verificar el estado general del sistema de repetición espaciada.

---

## Flujo de trabajo

1. Escanea TODAS las notas `.md` en `investigaciones/` y sus subcarpetas:
   - `1-fundamentos/`
   - `2-circuitos/`
   - `3-electromagnetismo/`
   - `4-redes-y-telecom/`

2. Lee el frontmatter YAML de cada nota buscando:
   - `next-review` — fecha del próximo repaso
   - `review-count` — número de repasos completados
   - `ultimo-review` — fecha del último repaso
   - `nivel-retencion` — nivel 0-100
   - `tags` — buscar `review/pendiente` vs `review/dominado`

3. Compara `next-review` con la fecha actual y clasifica:
   - 🔴 **Atrasada** → `next-review` < hoy
   - 🟡 **Hoy** → `next-review` = hoy
   - 🟢 **Próximos 7 días** → `next-review` dentro de los próximos 7 días
   - ✅ **Dominada** → tag `review/dominado`

4. Genera el reporte.

---

## Reglas de repetición espaciada (de CLAUDE.md)

- **Escalera mínima sostenible (default):** Día 1 → Día 7 → Día 30 (3 toques)
- **Escalera completa (solo `#prioridad/alta`):** Día 1 → 3 → 7 → 14 → 30 → 60
- **Regla de deuda:** Si han pasado +30 días desde el último repaso sin repasar, NO acumules deuda — recomienda releer y reiniciar desde Día 1.
- El primer repaso (Día 1, al día siguiente) es el **único no negociable**.
- Tras cada repaso: ✅ retención buena → avanza; ⚠️ parcial → repite intervalo; ❌ fallida → retrocede.

---

## Formato del reporte

```markdown
# 📅 Reporte de Repasos — YYYY-MM-DD

## 🔴 Atrasadas (requieren acción inmediata)

| Nota | Subcarpeta | Último repaso | Días atrasada | Repasos hechos | Acción recomendada |
|------|------------|---------------|---------------|----------------|-------------------|

## 🟡 Para hoy

| Nota | Subcarpeta | Repasos hechos | Siguiente paso |
|------|------------|----------------|----------------|

## 🟢 Próximos 7 días

| Nota | Subcarpeta | Fecha de repaso | Repasos hechos |
|------|------------|-----------------|----------------|

## 📊 Resumen
- Total de notas de investigación: X
- Pendientes de repaso: X
- Dominadas: X
- Con deuda (+30 días): X

## 💡 Recomendaciones
[Sugerencias basadas en el estado actual]
```

---

## Reglas

- Usa SIEMPRE `[[doble corchete]]` para los enlaces a las notas.
- Si una nota no tiene campo `next-review`, repórtala como "⚠️ Sin fecha de repaso configurada".
- **No modifiques ninguna nota** — solo genera el reporte.
- Sé conciso pero completo: incluye TODAS las notas escaneadas en alguna categoría.
- Ordena las atrasadas por días de atraso (más atrasada primero).
