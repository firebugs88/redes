---
type: research
fuente: Estudio propio (señalización eléctrica en redes)
fecha: 2026-04-12
relevancia: alta
dominio: física / redes / capa física
review-count: 1
ultimo-review: 2026-06-27
next-review: 2026-07-04
nivel-retencion: 1
tags:
  - research
  - tema/redes
  - tema/física
  - review/pendiente
---

## 🔑 Recuperación Activa (Palabras Clave)

- **Señalización diferencial** — codificación por diferencia de voltaje entre dos conductores
- **CMRR** — relación de rechazo de modo común, mide inmunidad al ruido
- **V_diff = V₁ − V₂** — señal útil (datos) en modo diferencial
- **Modo común** — ruido que afecta igual a ambos conductores y se cancela al restar
- **Par trenzado** — simetría geométrica que garantiza cancelación de campos externos
- **MLT-3** — esquema de 3 niveles que reduce EMI irradiada
- **Transformador Ethernet** — aislamiento galvánico + rechazo de modo común

# 📡 Señalización Diferencial

## 📌 Resumen — 3 ideas clave (Pareto)

1. La señalización diferencial codifica la información como la **diferencia de voltaje entre dos conductores** (V₁ − V₂), sin usar tierra como referencia absoluta.
2. Su ventaja principal es la **inmunidad al ruido**: cualquier interferencia externa afecta igual a ambos conductores; al restar, se cancela (rechazo de modo común — CMRR).
3. En 100BASE-TX, el sistema completo es: **par trenzado + señalización diferencial + MLT-3** → 100 Mbps sobre Cat5 a 100 m.

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave                  | 📝 Respuesta / Desarrollo                                                                                                                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ¿Qué es la señalización diferencial? | Codifica datos como V_diff = V₁ − V₂ entre dos conductores. Los dos hilos llevan señales opuestas en polaridad. No necesita tierra como referencia.                                       |
| Modo diferencial vs. modo común      | **V_diff = V₁ − V₂** → la señal útil (datos). **V_cm = (V₁+V₂)/2** → el ruido común. El receptor solo "escucha" V_diff e ignora V_cm.                                                     |
| ¿Por qué cancela el ruido?           | El ruido externo (EMI) induce el mismo voltaje en ambos conductores → aparece solo como V_cm → el receptor lo rechaza. El CMRR mide esta capacidad: CMRR = 20·log(A_d/A_cm) dB.           |
| ¿Qué es el modo TEM?                 | Transverse Electromagnetic: E y H son perpendiculares a la dirección de propagación. Es el modo dominante en el par diferencial guiado. Ver [[onda-electromagnetica]].                    |
| Parámetros RLGC                      | Modelo distribuido de la línea: R (Ω/m), L (H/m), G (S/m), C (F/m). Definen Z₀ = √(L/C) en el caso sin pérdidas. Para Cat5: Z₀ = 100 Ω.                                                   |
| Impedancia característica Z₀         | Relación V/I de una onda viajando en una sola dirección. Si la carga ≠ Z₀ → coeficiente de reflexión Γ = (Z_L−Z₀)/(Z_L+Z₀) → rebotes de señal.                                            |
| Skew intra-par                       | Diferencia de longitud o retardo entre TX+ y TX-. Convierte señal diferencial en modo común → degrada la transmisión a alta frecuencia.                                                   |
| Transformador Ethernet (magnetics)   | Acopla el PHY al cable UTP. Proporciona aislamiento galvánico y rechaza el modo común antes de inyectar al cable.                                                                         |
| MLT-3 en este contexto               | Esquema de 3 niveles (−1V, 0V, +1V) sobre el par diferencial. Reduce frecuencia fundamental a 31,25 MHz → menos EMI irradiada. Ver [[codificacion-4b-5b-y-mlt-3]].                        |
| 4D-PAM5 (Gigabit Ethernet)           | 5 niveles × 4 pares simultáneos en 1000BASE-T. Permite 1 Gbps en Cat5e.                                                                                                                   |
| Ground Bounce (SSN)                  | En señalización single-ended: la inductancia parásita de tierra genera rebotes que desplazan la referencia del receptor. La señalización diferencial lo elimina al no depender de tierra. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina dos cables gemelos que llevan señales en espejo (una sube cuando la otra baja). El dato está en la diferencia entre ellos. Si llega ruido externo, golpea igual a los dos al mismo tiempo, así que cuando restas se cancela solo. Eso es la señalización diferencial: usar un par de cables opuestos para que el ruido se borre matemáticamente. En Ethernet, ese par además está trenzado para que los campos magnéticos externos afecten igual a ambos hilos, y la señal (MLT-3) está diseñada para irradiar lo menos posible hacia afuera.

---

## 🔄 El sistema completo en 100BASE-TX

```
Chip PHY
   ↓ bits digitales
Codificación 4B/5B + MLT-3   ← reduce frecuencia a 31,25 MHz y EMI
   ↓
Scrambler                     ← distribuye el espectro uniformemente
   ↓
Transformador Ethernet         ← aislamiento galvánico + rechazo de modo común
   ↓
Par trenzado (TX+, TX−)        ← cancela ruido externo por simetría geométrica
   ↓
Receptor diferencial           ← lee V_diff, ignora V_cm
   ↓ datos recuperados
```

---

## 🔁 Registro de repasos (Repetición Espaciada)

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1)  | 2026-06-27 | ✅ | Reinicio desde Día 1 tras hueco largo |
| 2 (Día 7)  | 2026-07-04 | ✅ / ⚠️ / ❌ | |
| 3 (Día 30) | 2026-07-27 | ✅ / ⚠️ / ❌ | |

---

## 🔗 Relacionado

- [[fast-ethernet-ieee-802-3u]] — 100BASE-TX usa señalización diferencial con MLT-3 sobre par trenzado
- [[codificacion-4b-5b-y-mlt-3]] — la codificación MLT-3 opera directamente sobre el par diferencial
- [[onda-electromagnetica]] — el modo TEM que propaga la señal diferencial es una onda EM guiada
