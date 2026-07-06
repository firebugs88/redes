---
type: novedad-trabajo
fecha: 2026-07-06
hora: "18:30"
categoria: info
tags:
  - trabajo
origen: tui
relevancia: baja
---

# 🏢 Prueba del flujo de captura del segundo cerebro

## ¿Qué ocurrió?

Primera captura de prueba del sistema de segundo cerebro: Hermes (vía Telegram/TUI) clasifica capturas y las enruta a `daily-notes/`, `trabajo/`, `ideas/` o `inbox/`, con sync nocturno automático a GitHub.

## ¿Cuándo? (línea de tiempo)

- **2026-07-06 18:30** — Sistema construido y probado end-to-end.

## ¿Cómo? (contexto, causa, resolución)

Se construyó la skill `captura-segundo-cerebro`, la plantilla `novedad-trabajo`, la carpeta `trabajo/` y el cron de sync (23:30). Esta nota valida el camino "novedad laboral": nota nueva + registro en el índice.

## Seguimiento

- [x] Verificar que aparece enlazada en [[_indice]]
- [ ] Borrar o archivar esta nota cuando el flujo esté validado en uso real

---

## 🔗 Relacionado

- [[_indice]]

#trabajo
