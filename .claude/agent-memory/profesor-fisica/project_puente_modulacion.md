---
name: project-puente-modulacion
description: Estado del puente conceptual de modulación física↔redes en la bóveda — completo en 3 escalones (AM/FM → digital/QAM → OFDM)
metadata:
  type: project
---

El usuario construyó un **puente de modulación** de tres notas, ahora **completo** (2026-06-30):
1. [[modulacion-am-fm]] — modulación analógica (deformar una portadora con señal continua).
2. [[modulacion-digital-ask-fsk-psk]] — modulación digital (ASK/FSK/PSK + **QAM**; símbolo≠bit, constelación I/Q, tradeoff tasa↔SNR, banda base vs paso banda).
3. [[ofdm]] (`investigaciones/4-redes-y-telecom/ofdm.md`) — cómo WiFi/4G/5G usan QAM en la práctica: muchas subportadoras QAM ortogonales en paralelo + IFFT/FFT + prefijo cíclico + OFDMA.

**Why:** es la columna del puente física↔redes del usuario; las tres son `relevancia: media` por ahora, con la idea de subirlas a `alta` si decide que es backbone de su estudio.

**How to apply:** no re-sugieras estas tres como "notas nuevas" — ya existen y están enlazadas entre sí y en `010 Redes y Telecomunicaciones MOC`. Siguientes escalones naturales que el usuario podría pedir (aún sin nota): **MIMO / MIMO-OFDM**, **SC-FDMA**, **adaptive bit-loading / water-filling**. Relacionado: [[user-aprendizaje]] (separar capas qué/dónde/cómo aplica aquí: QAM=qué, OFDM=cómo se organiza, prefijo cíclico=robustez al eco).
