---
type: research
fuente: Estudio propio (codificación en redes Fast Ethernet)
fecha: 2026-06-02
relevancia: alta
dominio: redes / capa física / codificación
review-count: 0
ultimo-review: 2026-06-02
next-review: 2026-06-29
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - review/pendiente
---

> [!important] Recuperación Activa
> Antes de releer la nota, intenta recordar qué significa cada concepto. Tapa la nota y explícalo en voz alta.
>
> `4B/5B` · `MLT-3` · `125 Mbaudios` · `31,25 MHz` · `Scrambler` · `PCS / PMD` · `Cat5`

# 🔢 Codificación 4B/5B + MLT-3 en 100BASE-TX

## 📌 Resumen — 3 ideas clave (Pareto)

1. **4B/5B** convierte cada bloque de 4 bits en 5 bits garantizando que nunca haya más de 3 ceros consecutivos → el receptor nunca pierde sincronización de reloj.
2. **MLT-3** toma esos símbolos a 125 Mbaudios y los transmite usando 3 niveles de voltaje (+1V, 0V, −1V), reduciendo la frecuencia fundamental de 125 MHz a **31,25 MHz**.
3. La combinación 4B/5B + MLT-3 es la razón técnica por la que 100 Mbps caben en un cable Cat5 de 100 m sin destruir la señal.

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave                          | 📝 Respuesta / Desarrollo                                                                                                                                                                                                                                                     |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| que es NRZ                                   | la codificación 4B/5B convierte cada nibble (4 bits) en un símbolo de 5 bits, generando un flujo de datos a 125 Mbps en formato **NRZ (Non-Return to Zero).** - **NRZ** significa que cada bit se representa con un nivel de voltaje constante durante todo el tiempo de bit: |
| ¿Por qué no se puede transmitir NRZ directo? | NRZ puro (0V = bit 0, +1V = bit 1) genera largas cadenas de ceros sin transiciones → el receptor pierde el reloj porque no hay cambio de voltaje del que sincronizarse.                                                                                                       |
| ¿Qué hace 4B/5B exactamente?                 | Mapea cada nibble de 4 bits a un símbolo de 5 bits mediante una tabla fija. La tabla garantiza que ningún código tenga más de 3 ceros consecutivos → mínimo 2 transiciones por símbolo → sincronización asegurada.                                                            |
| Eficiencia de 4B/5B                          | 4 bits útiles / 5 bits transmitidos = **80%**. Para transportar 100 Mbps útiles se necesitan 125 Mbaudios en el cable.                                                                                                                                                        |
| ¿Por qué Manchester no se usó aquí?          | Manchester codifica cada bit con una transición en el centro → necesita el doble de ancho de banda (200 MHz para 100 Mbps). 4B/5B + MLT-3 logra lo mismo con solo 31,25 MHz.                                                                                                  |
| ¿Cómo reduce MLT-3 la frecuencia?            | Solo cambia de nivel ante un bit '1'. Completar un ciclo completo requiere 4 bits '1' consecutivos → frecuencia = 125 MHz / 4 = **31,25 MHz**.                                                                                                                                |
| Subcapas del modelo IEEE 802.3u              | **4B/5B** opera en la subcapa **PCS** (Physical Coding Sublayer). **MLT-3** opera en la subcapa **PMD** (Physical Medium Dependent).                                                                                                                                          |
| Conexión con efecto skin                     | A 31,25 MHz la profundidad de penetración en cobre es ~12 µm (vs ~6,6 µm a 100 MHz). Más sección efectiva → menos resistencia → menos atenuación → alcanza 100 m en Cat5.                                                                                                     |
| Origen histórico                             | Derivado de **FDDI** (redes de fibra de los 80s). FDDI usaba 4B/5B + NRZI. Fast Ethernet adaptó MLT-3 en lugar de NRZI para mejor comportamiento EMI en cobre.                                                                                                                |
| Evolución en Gigabit Ethernet                | 1000BASE-T usa **4D-PAM5**: 5 niveles de señal sobre los 4 pares del cable simultáneamente. Mismo principio, más sofisticado.                                                                                                                                                 |
| con que voltaje trabaja un cable UTP Cat5    | el voltaje utilizado por un cable UTP Cat5 en 100BASE-TX con codificación MLT-3 es de **±1 V y 0 V**, lo que produce una señal diferencial de aproximadamente 2 V pico a pico                                                                                                 |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que quieres enviar música por un cable de cobre, pero el cable solo aguanta tonos bajos sin distorsionarse. Tu problema es que la música (los datos) viaja naturalmente a frecuencias altas. La solución tiene dos pasos: primero, codificas los datos de forma que nunca generen silencios largos (4B/5B); segundo, en vez de usar solo dos voltajes como un interruptor de luz, usas tres niveles que "van y vienen" más despacio (MLT-3). El resultado: los datos viajan a una frecuencia cuatro veces menor de la que necesitarían sin este truco, y el cable Cat5 aguanta perfectamente 100 metros.

---

## 📊 El proceso completo paso a paso

```
Datos originales: 8 bits (1 byte)
        ↓ dividir en dos nibbles de 4 bits
4B/5B: cada nibble → símbolo de 5 bits (tabla fija)
        ↓ 100 Mbps útiles → 125 Mbaudios
Scrambler: aleatoriza la secuencia (evita patrones repetitivos → distribuye EMI)
        ↓
MLT-3: convierte bits en niveles de voltaje (+1V, 0V, −1V)
        → ciclo completo = 4 bits '1' → f_máx = 31,25 MHz
        ↓
Señalización diferencial sobre par trenzado TX+/TX−
        ↓ 100 m de Cat5
Receptor: proceso inverso → datos recuperados
```

## 📷 Diagrama de referencia

![[Proceso completo de codificación 4B-5B_MLT-3 en 100BASE-TX Fast Ethernet.png]]

![[Codificación 4B_5B + MLT-3 en 100BASE-TX_ Análisis_perplexity.pdf]]

---

## 🔁 Registro de repasos (Repetición Espaciada)

| #   | Fecha      | ¿Recordé bien? | Ajuste |
| --- | ---------- | -------------- | ------ |
| 1   | 2026-06-03 | ✅              |        |
| 2   | 2026-06-05 | ✅ / ⚠️ / ❌     |        |
| 3   | 2026-06-09 | ✅ / ⚠️ / ❌     |        |
| 4   | 2026-06-16 | ✅ / ⚠️ / ❌     |        |
| 5   | 2026-07-02 | ✅ / ⚠️ / ❌     |        |

---

## 🏛 Anclas de memoria (Método de Loci)

| Concepto | Lugar / Imagen | Escena vívida |
|----------|---------------|---------------|
| **4B/5B — tabla de mapeo** | La puerta de entrada de tu casa | Ves un portero automático con 16 botones (los 16 nibbles posibles). Cada vez que pulsas 4 botones, la puerta se abre mostrando 5 luces encendidas. Nunca se encienden más de 3 luces apagadas seguidas — si lo hicieran, la puerta se bloquea y el portero grita "¡sincronización perdida!" |
| **MLT-3 — tres niveles de voltaje** | Una escalera de 3 peldaños en el salón | Imagina una pelota que solo sube o baja un peldaño cada vez que alguien grita "¡UNO!". Si gritan "¡CERO!", la pelota se queda quieta. Sube: +1V. Quieta: 0V. Baja: −1V. Para completar un ciclo completo (subir, bajar, volver) necesita 4 gritos de "UNO" → por eso la frecuencia es 125 MHz ÷ 4 = 31,25 MHz |
| **125 → 31,25 MHz — reducción de frecuencia** | El reloj de pared del salón | El reloj hace tic-tac muy rápido (125 veces por segundo). De repente, alguien le pone un engranaje que divide por 4: ahora hace un tic lento y profundo cada 4 tics internos. El cable Cat5 respira aliviado — a esa velocidad lenta (31,25 MHz) la señal viaja 100 metros sin distorsionarse |
| **Scrambler — aleatorización** | Una batidora en la cocina | Antes de enviar los símbolos por el cable, los echas en una batidora que los mezcla y los "desordena". Esto evita que se formen patrones repetitivos que concentrarían la energía EMI en una sola frecuencia (como un zumbido molesto). Al llegar al receptor, otra batidora idéntica los "des-desordena" y recupera el orden original |
| **PCS vs PMD — subcapas** | Dos habitaciones de la casa | La **cocina** (PCS) es donde preparas los ingredientes: coges los 4 bits crudos, los mapeas con 4B/5B y los pasas por el scrambler. El **salón** (PMD) es donde sirves el plato: MLT-3 convierte esos bits en voltajes y los lanza al cable. Cada habitación tiene su trabajo — nunca se mezclan |

---

## 🔗 Relacionado

- [[fast-ethernet-ieee-802-3u]] — estándar donde se aplica esta codificación (100BASE-TX)
- [[señalizacion-diferencial]] — MLT-3 opera sobre el par diferencial; el sistema completo incluye ambos
- [[historia-y-origen-de-ethernet-1973]] — contexto histórico del que deriva Fast Ethernet
- [[onda-electromagnetica]] — la reducción de EMI que logra MLT-3 se explica con campos EM guiados
- [[corriente-electrica]] — el efecto skin justifica físicamente por qué reducir la frecuencia amplía el alcance
