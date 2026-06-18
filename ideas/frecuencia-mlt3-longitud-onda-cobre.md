---
type: idea
fecha: 2026-04-12
estado: semilla
potencial: medio
proyecto-destino: 
---

# 💡 Relación entre frecuencia MLT-3 y longitud de onda en el cobre

---

## 📝 La idea en una frase

Calcular la longitud de onda correspondiente a la frecuencia de 31.25 MHz usada en MLT-3 (Fast Ethernet) cuando se propaga en el cobre.

---

## 🧠 Desarrollo

**¿Qué problema resuelve o qué oportunidad abre?**

Conecta el conocimiento de redes (codificación MLT-3, 100BASE-TX) con el de física (ondas EM en medios materiales), haciendo concreto el concepto de "señal como onda".

**¿Cómo funcionaría?**

La velocidad de propagación en el cobre es ≈ 2/3 × c ≈ 2×10⁸ m/s. Con f = 31.25 MHz:
λ = v/f = 2×10⁸ / 31.25×10⁶ ≈ **6.4 metros**.

Eso significa que la longitud de onda es comparable a la longitud de muchos cables de red — lo que explica por qué los efectos de reflexión y la impedancia del cable importan.

---

## ⚖️ Evaluación rápida (Pareto check)

| Criterio | Puntuación (1-5) |
|----------|-----------------|
| Impacto potencial | 3 |
| Esfuerzo requerido | 1 |
| Alineación con mis objetivos | 4 |

**¿Vale la pena convertirla en proyecto?** No — es un cálculo de cierre. Agregarlo como nota al pie en [[fast-ethernet-ieee-802-3u]] o [[señalizacion-diferencial]].

---

## 🔗 Relacionado

- [[fast-ethernet-ieee-802-3u]]
- [[señalizacion-diferencial]]
- [[onda-electromagnetica]]

---

#idea #tema/redes #tema/física
