---
type: research
fuente: Estudio propio (IEEE 802.3u)
fecha: 2026-04-09
relevancia: alta
dominio: redes / IEEE / capa física
keywords:
  - IEEE 802.3u
  - Fast Ethernet
  - 100BASE-TX
  - MLT-3
  - 4B/5B
  - 125 Mbaud
  - Cat5
review-count: 0
ultimo-review: 2026-04-09
next-review: 2026-06-03
nivel-retencion: 0
status: Completed
finished: 2026-06-04
---

# 🔬 Fast Ethernet (IEEE 802.3u) — 100 Mbps sobre par trenzado

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. Fast Ethernet (1995, IEEE 802.3u) es **10× más rápido** que Ethernet original (10 → 100 Mbps) manteniendo el mismo cable Cat5 y el mismo formato de trama CSMA/CD.
2. La clave de la codificación en 100BASE-TX es la cadena **4B/5B + MLT-3**: 4B/5B garantiza densidad de transiciones para sincronización, MLT-3 reduce la frecuencia fundamental a **31,25 MHz** para que Cat5 aguante 100 m.
3. MLT-3 usa 3 niveles de voltaje (+1, 0, −1) y necesita **4 bits '1' consecutivos** para completar un ciclo completo → 125 Mbaud / 4 = 31,25 MHz.
4. La señal no viaja "dentro" del cobre sino en el **campo EM que rodea el par trenzado** (vector de Poynting S = E × H); el cable solo guía la onda.
5. Su legado clave: consolidó el dominio de Ethernet, estandarizó la **auto-negociación** y desplazó los hubs por switches (full-dúplex elimina colisiones).

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves para repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Por qué MLT-3 y no NRZ para 100BASE-TX? | NRZ a 125 Mbaud requeriría ~62,5 MHz → demasiada atenuación en Cat5 a 100 m. MLT-3 divide la frecuencia entre 4 (necesita 4 bits '1' para un ciclo) → 31,25 MHz → Cat5 lo aguanta. |
| ¿Cómo reduce MLT-3 la frecuencia? | Ciclo completo: 0→+1→0→−1→0 requiere 4 transiciones, cada una ante un bit '1'. A 125 Mbaud, 4 símbolos por ciclo = 125/4 = 31,25 MHz. |
| ¿Para qué sirve 4B/5B antes de MLT-3? | Convierte cada grupo de 4 bits de datos en 5 símbolos con suficientes '1s' para garantizar transiciones frecuentes → sincronización de reloj sin cadenas largas de ceros. |
| ¿En qué se diferencia 100BASE-TX de 100BASE-FX? | TX: cobre UTP Cat5 (2 pares, 100 m), MLT-3. FX: fibra óptica multimodo (2 km), NRZ-I. Ambos usan 4B/5B. FX puede ir más lejos porque la fibra tiene menos atenuación. |
| ¿Dónde viaja realmente la energía de la señal? | En el campo EM (E entre los hilos, H en anillos concéntricos alrededor). S = E × H apunta a lo largo del cable. Los electrones solo se mueven ~mm/s; la señal viaja a ~0,66c. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Explícalo como si se lo contaras a alguien que no sabe nada del tema. Si no puedes, aún no lo entiendes.

Fast Ethernet es básicamente "Ethernet 10× más rápido pero con el mismo cable". El truco está en cómo codifican la señal para que el cable Cat5 aguante 100 metros a esa velocidad: primero convierten los datos en grupos especiales (4B/5B) que garantizan suficientes cambios de señal para sincronizarse; luego usan tres niveles de voltaje (MLT-3) en vez de dos, lo que hace que la señal "oscile" solo a 31 MHz en vez de 62 MHz — menos oscilaciones, menos pérdida por efecto skin, más distancia. Y lo más sorprendente: la energía no viaja dentro del cobre, sino en el campo electromagnético que rodea los dos hilos. El cable solo le da forma al camino.

---

## 💡 Aprendizajes principales

- **La codificación de señal es ingeniería de compromiso**: necesitas velocidad alta Y alcance de 100 m. 4B/5B + MLT-3 es la solución elegante que permite ambos.
- **El trenzado del par no es estético**: cancela los campos EM en modo común, reduciendo EMI y permitiendo señalización diferencial. Sin trenzado, no habría 100BASE-TX.
- **La señal EM guiada conecta Ethernet con Maxwell**: cada transición MLT-3 es un cambio en E(t) y H(t) que se propaga a 0,66c. Ver [[onda-electromagnetica]] para el fundamento completo.
- **Auto-negociación fue el legado silencioso de 802.3u**: permitió coexistencia 10/100 Mbps, base de todas las generaciones siguientes.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| MLT-3 reduce frecuencia ÷4 | Rueda con 4 escalones | Una rueda con 4 escalones (+1→0→−1→0) que necesita 4 "kicks" (bits '1') para dar una vuelta completa — 4 veces más lenta que una rueda normal de 2 estados |
| 4B/5B → suficientes '1s' | Traductor con código mínimo | Un traductor que insiste en añadir letras extra a cada palabra (5 símbolos por 4 bits) para asegurarse de que haya suficientes consonantes (transiciones) y el oyente no pierda el ritmo |
| Señal viaja en campo EM, no en el cobre | Tubería que guía el agua | Los electrones son la tubería (casi inmóviles); el campo EM es el agua (se propaga casi a c). La tubería da forma al flujo, no lo transporta |
| 125 Mbaud vs 100 Mbps | Peaje en autopista | Por cada 4 coches útiles (bits de datos) pasan 5 coches por el peaje (símbolos) → 100 × 5/4 = 125 Mbaud, el "overhead" del peaje |
| Cat5 vs Cat3 (ancho de banda) | Carretera ancha vs estrecha | Cat5 es una autopista de 100 carriles (100 MHz) donde 31,25 MHz circula holgado; Cat3 es una calle de pueblo de 16 carriles (16 MHz) que se satura con tanto tráfico |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Explicar de memoria por qué un cable Cat5 puede transportar 100 Mbps a 100 m — con la cadena 4B/5B → MLT-3 → 31,25 MHz → menos atenuación.

**Aplicación a medio plazo (este mes):**
Conectar con [[codificacion-4b-5b-y-mlt-3]] para profundizar en la capa PCS/PMA y comparar con Gigabit Ethernet (PAM-5).

**Proyecto o idea donde encaja:**
- [[historia-y-origen-de-ethernet-1973]] — origen del estándar que este evoluciona
- [[el-estandar-dix]] — paso intermedio entre Ethernet original y Fast Ethernet

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| #   | Intervalo | Fecha      | ¿Recordé bien? | Ajuste |
| --- | --------- | ---------- | -------------- | ------ |
| 1   | Día 1     | 2026-06-04 | ✅ / ⚠️ / ❌     |        |
| 2   | Día 3     | 2026-06-06 | ✅ / ⚠️ / ❌     |        |
| 3   | Día 7     | 2026-06-10 | ✅ / ⚠️ / ❌     |        |
| 4   | Día 14    | 2026-06-17 | ✅ / ⚠️ / ❌     |        |
| 5   | Día 30    | 2026-07-03 | ✅ / ⚠️ / ❌     |        |


---

## 1. Definición y Contexto Histórico

- **Fast Ethernet** (FE) es una evolución del estándar Ethernet original, **diseñada para transportar tráfico de red a 100 Megabits por segundo (Mbps)** — exactamente diez veces la velocidad de su predecesor (10 Mbps).
- Fue **estandarizado en 1995** bajo la norma **IEEE 802.3u** y se identifica genéricamente como **"100BASE-X"**.
- Surgió por la creciente demanda de ancho de banda a principios de los 90, impulsada por aplicaciones gráficas y multimedia.
- Mantuvo el formato de trama y el método de acceso **CSMA/CD**, pero introdujo la **auto negociación** y nuevas interfaces de capa física (**PHY**) para gestionar la mayor velocidad.
- Su estandarización priorizó la **retrocompatibilidad** y la facilidad de migración, lo que fue clave para su rápida adopción frente a tecnologías competidoras como 100VG-AnyLAN.

>**Nota sobre la nomenclatura:** donde **"100"** indica la velocidad, **"BASE"** la transmisión en banda base y **"X"** el tipo de medio físico (**TX** para par trenzado, **FX** para fibra óptica).

---

## 2. Variantes Principales

|**Estándar**|**Medio físico**|**Distancia máx.**|**Codificación**|
|---|---|---|---|
|**100BASE-TX**|UTP Cat. 5 / STP (RJ45, 2 pares)|100 m|4B/5B + MLT-3|
|**100BASE-FX**|Fibra óptica multimodo (2 hebras)|2 km (multimodo) / mayor en monomodo|4B/5B + NRZ-I|
|**100BASE-T4**|UTP Cat. 3 (4 pares)|100 m|8B/6T|

### Descripción de cada variante:

- **100BASE-TX:** La más común. Usa dos pares de cable **UTP** Cat. 5 o **STP**. Soporta half y full-dúplex. Emplea codificación **4B/5B + MLT-3**.
- **100BASE-FX:** Opera principalmente en **full-dúplex** sobre fibra multimodo. Alcanza hasta 2 km (más con fibra monomodo). Usa codificación **4B/5B + NRZ-I**.
- **100BASE-T4:** Variante temprana para cables Cat. 3. Solo operaba en **half-duplex** con codificación **8B/6T** (más compleja). Prácticamente en desuso.

---

## 3. Codificación de Señal (100BASE-TX)

### :memoria2: MLT-3 (Multi-Level Transmit 3)

- Método de **codificación de línea** que utiliza **3 niveles de tensión**: +1, 0, −1.
- En el cable UTP/RJ45, lo que viaja son **señales eléctricas diferenciales (voltajes)**.
- Los bits se convierten en **variaciones de voltaje** entre 2 hilos; un pulso es la representación física de la señal.
- **100BASE-TX** usa MLT-3 (vs. Gigabit Ethernet que usa **PAM-5**).
- Permite reducir la frecuencia máxima requerida a **31.25 MHz**, facilitando la transmisión sobre UTP Cat. 5.

> Ver detalles: [MLT-3 (Multi-Level Transmit 3)](https://www.notion.so/MLT-3-Multi-Level-Transmit-3-5133af460af34136b9747c7b8457cf2c?pvs=21)

![[mlt3.png | 300x400]]

![[nota_mlt3.jpg.png | 300x400]]


> [!tip] Mecanismo detallado de reducción de frecuencia en MLT-3
> MLT-3 usa 3 niveles (+1V, 0V, −1V) y solo cambia de nivel ante un bit '1'. Para completar un ciclo completo (0V → +1V → 0V → −1V → 0V) se necesitan **4 bits '1' consecutivos**. Eso divide la frecuencia entre 4: 4B/5B genera símbolos a 125 Mbaud → MLT-3 reduce la frecuencia fundamental a 125/4 = **31,25 MHz**. Menos frecuencia → menos efecto skin → menos atenuación en Cat5 → posible recorrer 100 m. Ver desarrollo completo en la sección 7.

---
## 4. Ventajas y Limitaciones

### ✅ Ventajas

- Incremento de velocidad **10x** sobre 10BASE-T.
- **Retrocompatibilidad** con Ethernet 10 Mbps.
- **Full-dúplex** disponible (elimina colisiones).
- Rentable y ampliamente adoptado.
- Impulsó el uso masivo de **switches** en lugar de hubs.

### ❌ Limitaciones

- Escalabilidad restringida (rápidamente superado por Gigabit Ethernet).
- Límite de **100 m** en cobre (UTP).
- Ineficiente en modo **half-duplex** (CSMA/CD activo).

---

## 5. Aplicaciones y Legado

### Casos de uso principales:

- Redes LAN corporativas para escritorios y servidores departamentales.
- Redes SOHO (pequeña oficina / oficina doméstica).
- Primeras conexiones a Internet de banda ancha.
- Sistemas de punto de venta, vigilancia y automatización industrial.

### Legado e impacto:

- Consolidó el **dominio de Ethernet** como estándar de facto en redes LAN.
- Demostró la **escalabilidad** de la arquitectura Ethernet.
- Estandarizó la **auto negociación** (base para generaciones posteriores).
- Aunque superado por **Gigabit Ethernet (1000 Mbps)**, 10GbE y Wi-Fi, aún se encuentra en sistemas heredados y dispositivos embebidos de bajo costo.

---

## 6. Recursos de Referencia

### :pdf2: PDFs de estudio:

[Codificación 4B/5B y MLT-3 en 100BASE-TX (Fast Ethernet a 100 Mbps) - perplexity](https://www.notion.so/Codificaci-n-4B-5B-y-MLT-3-en-100BASE-TX-Fast-Ethernet-a-100-Mbps-perplexity-292e9e1b16f6804fa890d5cd26c4a3d1?pvs=21)

[**Codificación 4B/5B y MLT-3 en 100BASE-TX (Fast Ethernet a 100 Mbps) - ChatGpt**](https://www.notion.so/Codificaci-n-4B-5B-y-MLT-3-en-100BASE-TX-Fast-Ethernet-a-100-Mbps-ChatGpt-293e9e1b16f6806a9784fcfc09bad795?pvs=21)

[**Ingeniería de Fast Ethernet a 100 Mbps mediante Codificación 4B/5B y MLT-3 - Gemini**](https://www.notion.so/Ingenier-a-de-Fast-Ethernet-a-100-Mbps-mediante-Codificaci-n-4B-5B-y-MLT-3-Gemini-293e9e1b16f68021ba26d5eab1795baa?pvs=21)

### Temas relacionados:

[**Qué son los Mbaudios.**](https://www.notion.so/Qu-son-los-Mbaudios-328e9e1b16f68040afe4eb9679d4e916?pvs=21)

[MLT-3 (Multi-Level Transmit 3)](https://www.notion.so/MLT-3-Multi-Level-Transmit-3-5133af460af34136b9747c7b8457cf2c?pvs=21)

---

## 7. Preguntas de Comprobación

- [x] ¿Cómo hace el MLT-3 para reducir la frecuencia fundamental a 31.25 MHz?

> MLT-3 usa 3 niveles (+1V, 0V, −1V) y solo cambia de nivel ante un bit '1'. Para completar un ciclo de onda completo (0V → +1V → 0V → −1V → 0V) se necesitan **4 bits '1' consecutivos**. Eso divide la frecuencia entre 4: 4B/5B genera símbolos a 125 Mbaudios → MLT-3 reduce la frecuencia fundamental a 125/4 = **31,25 MHz**. Menos frecuencia → menos efecto skin → menos atenuación en Cat5 → posible recorrer 100 m.

- [x] ¿Cuál es la diferencia funcional entre 100BASE-TX y 100BASE-FX en términos de codificación y medio físico?

> Ambos usan **4B/5B** en la subcapa PCS. La diferencia está en el medio y la codificación de línea: **TX** usa cobre UTP Cat5 (2 pares, 100 m) con **MLT-3** (3 niveles de voltaje eléctrico). **FX** usa fibra óptica multimodo (hasta 2 km) con **NRZ-I** (cambia el estado óptico ante un '1', mantiene ante un '0'). La fibra elimina el efecto skin y la EMI, pero es más cara. NRZ-I funciona en fibra porque las pérdidas ópticas son diferentes a las pérdidas eléctricas del cobre.

- [x] ¿Por qué 100BASE-T4 solo operaba en half-duplex y por qué cayó en desuso más rápido?

> T4 usaba los **4 pares del cable Cat3** para alcanzar 100 Mbps (3 pares de datos + 1 de control). Este diseño multipares requería usar los mismos pares en ambas direcciones en momentos distintos → imposible transmitir y recibir al mismo tiempo → solo **half-duplex**. Sin full-duplex: CSMA/CD activo, colisiones, rendimiento real degradado. Cayó en desuso porque Cat5 se estandarizó rápido, 100BASE-TX con solo 2 pares era más simple, y la codificación 8B/6T de T4 era innecesariamente compleja.

## 8. Fundamento físico: la señal Ethernet como onda EM guiada

> [!info] La energía de cada pulso MLT-3 **no viaja dentro del cobre**, sino en el campo electromagnético que rodea al par trenzado. El cable actúa como guía, no como transportador.

### La ilusión del "flujo por el cable"

Los electrones se mueven a ~mm/s (velocidad de deriva), pero la señal se propaga a ~0,66c. La energía no viaja dentro del cobre: viaja en los **campos E y H que rodean al par trenzado**. Ver fundamento completo en [[onda-electromagnetica]].

![[campo-electrico-magnetico-fondo-gris.jpg]]

### El vector de Poynting: el transportador de energía

**S⃗ = E⃗ × H⃗** apunta a lo largo del eje del cable — la energía fluye por el exterior del conductor (parte se disipa como calor por efecto Joule dentro). Ver desarrollo completo: [[onda-electromagnetica#El vector de Poynting: el transportador de energía]].

### ¿Por qué el conductor "guía" la onda?

Las condiciones de frontera de Maxwell (E ⊥ superficie, H ∥ superficie) crean un "carril" geométrico para la onda. El trenzado cancela los campos en modo común, confinando la energía entre los hilos y reduciendo interferencias. Ver: [[onda-electromagnetica#¿Qué significa "onda guiada"?]].

> [!tip] Analogía: la tubería de agua. El agua (electrones) casi no se mueve; la presión (campo EM) se transmite al instante. El cable da forma al recorrido, no transporta la energía.

### Campo eléctrico (E): geometría entre dos conductores

Cuando se aplica V(t) entre los dos hilos, surge E en el espacio entre ellos:

- Apunta **de un conductor al otro** (radial en el plano transversal), perpendicular a la superficie de cada hilo.
- Magnitud: $|E| pprox V/d$
- **Origen:** diferencia de potencial. **Dependencia:** sigue V(t).

### Campo magnético (H): anillos concéntricos

Según la Ley de Ampère, la corriente I(t) genera **círculos concéntricos de H** alrededor de cada conductor:

- Magnitud: $|H| \propto I/r$, donde r es la distancia al eje.
- Los dos hilos llevan corrientes opuestas → sus anillos se cancelan a distancia (modo común), reduciendo la interferencia radiada.
- **Origen:** corriente en el conductor. **Dependencia:** sigue I(t).

### Geometría de la onda guiada

E y H son perpendiculares entre sí y a la dirección de propagación:

![[3.png]]

La onda no escapa al espacio libre porque el dieléctrico confina E entre los conductores y los anillos de H se cancelan en modo común fuera del par:

![[1.png]]

### Relación directa con el pulso MLT-3

Cada transición de nivel MLT-3 es un cambio de V(t) e I(t) → cambio de E y H → propagación del pulso EM a ~0,66c:

![[2.png]]

---

## 🎯 Recuperación Activa

> [!tip] Repaso activo: tapa el resto de la nota e intenta recordar cada concepto a partir de la palabra clave.

| # | Palabra clave | Pregunta / Pista | Respuesta esperada |
|---|---------------|------------------|-------------------|
| 1 | IEEE 802.3u | ¿Qué estándar definió Fast Ethernet y en qué año? | IEEE 802.3u, 1995 — evolucionó Ethernet de 10 a 100 Mbps manteniendo CSMA/CD y trama Compatible. |
| 2 | 100BASE-TX | ¿Qué medio, cuántos pares y qué distancia máxima usa la Variante más común de FE? | UTP Cat5 (o STP), 2 pares trenzados, 100 m máx., codificación 4B/5B + MLT-3. |
| 3 | MLT-3 | ¿Cómo reduce la frecuencia fundamental y cuántos niveles maneja? | 3 niveles (+1, 0, −1); cambia solo ante bit '1'; 4 bits '1' consecutivos completan un ciclo → 125/4 = 31,25 MHz. |
| 4 | 4B/5B | ¿Cuál es la función de esta pre-codificación antes de MLT-3? | Convierte 4 bits de datos en 5 símbolos ricos en '1s' → garantiza suficientes transiciones para la sincronización del reloj receptor. |
| 5 | 125 Mbaud | ¿Por qué la tasa de símbolos es 125 Mbaud si la velocidad útil es 100 Mbps? | 100 Mbps × 5/4 (overhead de 4B/5B) = 125 Msímbolos/s → cada símbolo lleva 0,8 bits útiles. |
| 6 | Cat5 | ¿Por qué Cat5 aguanta 100 Mbps a 100 m pero Cat3 no (en TX)? | Cat5 tiene mayor ancho de banda (100 MHz) y mejor aislamiento; soporta 31,25 MHz fundamentales con atenuación aceptable. |
| 7 | Auto-negociación | ¿Qué aportó 802.3u que sigue vigente en Ethernet actual? | Auto-negociación 10/100 Mbps mediante pulsos FLP (Fast Link Pulse) — base de todas las generaciones posteriores. |

---

## 🔗 Relacionado

- [[historia-y-origen-de-ethernet-1973]] — el origen del que deriva este estándar
- [[el-estandar-dix]] — el paso intermedio entre Ethernet original y Fast Ethernet
- [[onda-electromagnetica]] — las señales eléctricas en el par trenzado son ondas EM guiadas
---