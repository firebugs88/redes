---
type: research
fuente: Estudio propio (síntesis de notas de Corriente Eléctrica, Fast Ethernet y Fotones Virtuales)
fecha: 2026-06-03
relevancia: alta
dominio: física / electromagnetismo / redes
review-count: 1
ultimo-review: 2026-06-27
next-review: 2026-07-04
nivel-retencion: 1
---
![[onda-electromagnetica.png]]
# 🔬 Onda Electromagnética


## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. Una onda electromagnética es la propagación de campos eléctrico (E) y magnético (H) **perpendiculares entre sí y a la dirección de propagación**, sin necesidad de un medio material.
2. La energía **no viaja dentro del conductor**, sino en el campo EM que lo rodea — el vector de **Poynting** (S = E × H) cuantifica ese flujo de energía.
3. En un **cable Ethernet**, la onda EM está **guiada** por los conductores: el par trenzado confina los campos y dirige la señal sin que se irradie al espacio libre.
4. Las ecuaciones de Maxwell predicen que cualquier carga acelerada (o corriente variable) **genera ondas EM** que se propagan a la velocidad de la luz en ese medio.
5. A nivel cuántico, el campo EM está cuantizado en **fotones**: reales (ondas de radio, luz) o virtuales (mediadores de fuerzas entre cargas).

---

## Mi definición:

* **es una perturbación autosostenida de campos eléctricos y magnéticos acoplados que se generan mutuamente y se propagan juntos por el espacio sin necesitar ningún medio material, viajan a la velocidad de la luz**


## Lo que le falta a tu definición (Los "Matices de Experto")

Para completar el cuadro, deberías considerar estos cuatro ejes fundamentales:

- **La Geometría (Naturaleza Transversal):** No solo están acoplados; oscilan de forma **estrictamente perpendicular** entre sí y, a su vez, ambos son perpendiculares a la dirección en la que se mueve la onda.

- **El Propósito Físico (Transporte):** Una onda electromagnética es, ante todo, un vehículo que transporta **energía y momento lineal** a través del espacio sin necesidad de desplazar materia macroscópica.

- **La Doble Identidad (Dualidad Onda-Partícula):** Aunque la vemos como una onda, a nivel microscópico se comporta como un flujo de paquetes discretos de energía llamados **fotones**.

- **El Origen:** Es vital mencionar que estas ondas solo nacen cuando una **carga eléctrica experimenta aceleración**.

## Definición Integral Sugerida:

Si quieres una definición que un profesor de física aplaudiría, podrías redactarla así:

 Una **onda electromagnética** es una forma de **energía radiante** generada por la **aceleración de cargas eléctricas**. Consiste en una perturbación transversal de campos eléctricos ($\vec{E}$) y magnéticos ($\vec{B}$) que oscilan en fase y de manera **perpendicular** entre sí. Gracias a un ciclo de **inducción mutua** (regido por las ecuaciones de Maxwell), la onda se auto propaga en el vacío a una velocidad constante de aproximadamente **$3 \times 10^8$ m/s**, exhibiendo una naturaleza dual como onda y como flujo de **fotones**.


## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es una onda EM? | Perturbación oscilatoria de los campos E y H que se autopropaga. E variable genera H variable, que a su vez genera E variable → el ciclo se sostiene solo (ley de Faraday + ley de Ampère-Maxwell). |
| ¿Cómo se relacionan E y H? | Son perpendiculares entre sí y ambos perpendiculares a la dirección de propagación (onda transversal). Sus módulos están relacionados: \|E\| = Z₀ · \|H\|, donde Z₀ ≈ 377 Ω es la impedancia del vacío. |
| ¿Qué es el vector de Poynting? | **S⃗ = E⃗ × H⃗** (W/m²). Indica la dirección y densidad de flujo de energía EM. En un cable, S⃗ apunta a lo largo del eje, confirmando que la energía fluye por el exterior del conductor, no por dentro. |
| ¿Qué significa "onda guiada"? | El conductor no transporta la energía, pero impone condiciones de frontera (E ⊥ superficie, H ∥ superficie) que confinan el campo EM en una geometría definida. El cable actúa como "carril". |
| ¿A qué velocidad se propaga? | En el vacío: c ≈ 3×10⁸ m/s. En un cable UTP con dieléctrico (polietileno, εᵣ ≈ 2.3): v ≈ c / √εᵣ ≈ 0,66 c ≈ 2×10⁸ m/s. Por eso la señal Ethernet llega casi a la velocidad de la luz. |
| ¿Qué genera una onda EM? | Cualquier carga acelerada o corriente que varía en el tiempo. En un cable Ethernet, el pulso MLT-3 crea una corriente I(t) variable → genera onda EM guiada. |
| Espectro EM | Radio → Microondas → Infrarrojo → Luz visible → UV → Rayos X → Rayos γ. Todos son el mismo fenómeno, solo cambia la frecuencia (y por tanto la energía del fotón: E = hf). |
| Descripción cuántica | El campo EM cuantizado se describe mediante fotones. Fotones reales = radiación detectable. Fotones virtuales = mediadores de la fuerza eléctrica entre cargas (ver [[fotones-virtuales]]). |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que lanzas una piedra al agua: se forma una ola que avanza sola sin que nadie la empuje. Con las ondas EM pasa algo parecido, pero en el vacío: cuando la corriente eléctrica cambia, crea un campo magnético; ese campo magnético cambiante crea de vuelta un campo eléctrico; y así se van pasando la energía el uno al otro, avanzando solos indefinidamente. Así funciona la señal Wi-Fi, la luz del sol y la señal dentro de un cable Ethernet. En ese cable, el "baile" ocurre pegado a los conductores — la energía viaja en el espacio entre los hilos, no dentro del cobre. A nivel cuántico, ese campo está hecho de fotones.

---

## 💡 Aprendizajes principales

- La intuición de que "la electricidad viaja por el cable" es engañosa: la energía viaja en el campo EM exterior, y el vector de Poynting lo demuestra matemáticamente.
- El trenzado del par UTP tiene una función física concreta: cancela los campos EM externos (modo común) y confina la energía entre los dos hilos, reduciendo interferencias y emisiones.
- Las ecuaciones de Maxwell unificaron electricidad, magnetismo y óptica — la luz visible y una señal Ethernet son el mismo fenómeno en frecuencias distintas.
- La velocidad de propagación en el cable depende del dieléctrico (factor de velocidad ≈ 0,66 c en UTP Cat. 5), no solo de la electrónica.

---

## 🏛 Anclas de memoria (Método de Loci)
- [[corriente-electrica]] — la corriente alterna oscilante genera ondas electromagnéticas
- [[corriente-electrica]] — la corriente variable es la fuente de la onda EM

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| E ⊥ H ⊥ propagación | Entrada de tu casa | Parado en la puerta: tu brazo izquierdo apunta al campo E (pared), el derecho al campo H (suelo), y tú avanzas hacia adelante — los tres ejes perfectamente perpendiculares. |
| Vector de Poynting | Cocina | Ves una flecha gigante de fuego (S⃗) saliendo del espacio entre dos cables mientras el interior del cobre está frío — la energía está afuera, no adentro. |
| Onda guiada en cable | Pasillo largo | El cable Ethernet es como un tobogán: no "lleva" la pelota (energía), pero le marca el camino y le impide escaparse hacia los lados. |
| Velocidad 0,66 c en UTP | Dormitorio | Ves una luz que corre a 200 000 km/s dentro del cable porque lleva un "abrigo de plástico" (dieléctrico) que la frena un tercio. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Usar este marco para explicar por qué el par trenzado de Fast Ethernet no "pierde" señal rápidamente: el campo EM guiado queda confinado, y el trenzado minimiza la radiación.

**Aplicación a medio plazo (este mes):**
Conectar este concepto con la codificación MLT-3: cada transición de nivel en MLT-3 es un cambio de corriente → cambio de campo EM guiado → propagación del símbolo. Entender así el límite de frecuencia (31,25 MHz) desde la perspectiva física.

**Proyecto o idea donde encaja:**
- [[fast-ethernet-ieee-802-3u]] — fundamento físico de la transmisión de señal
- [[fotones-virtuales]] — descripción cuántica del mismo campo

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| #   | Fecha      | ¿Recordé bien? | Ajuste |
| --- | ---------- | -------------- | ------ |
| 1 (Día 1)  | 2026-06-27 | ✅             | Reinicio desde Día 1 tras hueco largo |
| 2 (Día 7)  | 2026-07-04 | ✅ / ⚠️ / ❌     |        |
| 3 (Día 30) | 2026-07-27 | ✅ / ⚠️ / ❌     |        |

---
![[Nota-15-05-26.jpg]]

---
## 🔗 Relacionado

- [[fotones-virtuales]] — descripción cuántica de los campos EM: los fotones virtuales son sus mediadores
- [[fast-ethernet-ieee-802-3u]] — las señales Ethernet viajan como ondas EM guiadas por los cables
- [[preguntas-clave-onda-electromagnetica]] — repaso de las 5 preguntas esenciales de esta nota
- [[Investigación Onda Electromagnética Universitaria - gemini]] — investigación exhaustiva nivel universitario con cronología y fronteras tecnológicas
- [[Ondas electromagnéticas - naturaleza, historia y frontera tecnológica]] — cronología completa, formalismo matemático y avances hasta 2026
- [[ondas-electromagneticas-ppxty]] — estudio integral con ecuaciones de Maxwell, espectro y avances 2024-2026

---

#tema/física #tema/electromagnetismo #tema/redes #review/pendiente #prioridad/alta
