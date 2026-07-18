---
type: research
fuente: Síntesis propia (respuestas a preguntas clave)
fecha: 2026-04-09
relevancia: media
dominio: física / electromagnetismo
review-count: 0
ultimo-review: 2026-04-09
next-review: 2026-07-21
nivel-retencion: 0
tags:
  - research
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
  - prioridad/media
---

# ❓ Preguntas clave sobre la Onda Electromagnética

> [!info] Esta nota es una herramienta de repaso activo sobre [[onda-electromagnetica]]. Contiene las preguntas esenciales que debes poder responder sin consultar la nota canónica. Úsala para repasar con repetición espaciada y como checklist de comprensión antes de exámenes o explicaciones.

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 7 palabras clave:
> `Campo eléctrico` · `Campo magnético` · `Propagación` · `Frecuencia` · `Longitud de onda` · `Velocidad de la luz` · `Polarización`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **Autopropagación sin medio:** una onda EM es una perturbación que se sostiene sola — un campo E variable genera H (Faraday), y ese H variable regenera E (Ampère-Maxwell) en un ciclo infinito que no necesita materia para propagarse.
2. **E ⊥ H ⊥ dirección:** los campos eléctrico y magnético oscilan siempre perpendiculares entre sí y perpendiculares a la dirección de avance (onda transversal). Esta geometría fija determina la polarización.
3. **La velocidad es una propiedad del medio:** en el vacío, c ≈ 3×10⁸ m/s es una constante universal. En cualquier otro medio se reduce según v = c / √εᵣ — por eso en UTP Cat.5 la señal viaja a ~0,66c.
4. **Mismo fenómeno, distinta frecuencia:** todo el espectro EM (radio a rayos γ) es el mismo fenómeno físico. Solo cambia la frecuencia f y, con ella, la energía del fotón E = hf.
5. **La energía viaja fuera del conductor:** intuitivamente parece que la electricidad "va por el cable", pero el vector de Poynting demuestra que el grueso de la energía viaja en el campo exterior al conductor — el cobre solo guía.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas que te ayuden a repasar. Columna derecha: respuestas. Tapa la derecha y responde.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| **¿Qué es una onda electromagnética?** | Una perturbación oscilatoria de los campos **E** (eléctrico) y **H** (magnético) que **se autopropaga sin necesitar medio material**. El mecanismo es un ciclo cerrado: E variable genera H variable (ley de Faraday), y H variable regenera E (ley de Ampère-Maxwell). Los dos campos se impulsan mutuamente de forma indefinida. |
| **¿Cómo se genera una onda EM?** | Cualquier **carga acelerada** o corriente variable en el tiempo — I(t) — la genera. Cuando los electrones aceleran, perturban el campo E circundante, que a su vez perturba H, iniciando el ciclo de autopropagación. En Ethernet, cada pulso MLT-3 es un cambio de I(t) que genera una onda EM guiada por el cable. |
| **¿Cómo se propaga en el vacío vs. en un medio guiado?** | **Vacío:** los campos se sostienen mutuamente y avanzan a c ≈ 3×10⁸ m/s sin soporte material. **Medio guiado (Ethernet):** el conductor no transporta la energía, pero impone condiciones de frontera (E ⊥ superficie, H ∥ superficie) que confinan los campos y los dirigen. El par trenzado cancela campos externos en modo común → reduce radiación e interferencia. > [!tip] El cable actúa como tobogán: no lleva la pelota, le marca el camino. |
| **¿Qué relación geométrica tienen E, H y la dirección de propagación?** | Los tres vectores son **mutuamente perpendiculares**: E ⊥ H ⊥ dirección de avance (onda transversal). La magnitud se relaciona por \|E\| = Z₀ · \|H\|, donde Z₀ ≈ 377 Ω es la impedancia característica del vacío. En un medio material, Z cambia según las propiedades del dieléctrico. |
| **¿Qué es la velocidad de la luz y por qué es un límite?** | c ≈ 3×10⁸ m/s es la velocidad de propagación de cualquier onda EM en el vacío. No es solo la velocidad de la luz — es la velocidad máxima de propagación de **cualquier interacción causal** en el universo (relatividad especial). En un medio, v = c / √εᵣ. En UTP Cat.5: ~0,66c ≈ 2×10⁸ m/s. |
| **¿Qué es la polarización?** | La **orientación del campo eléctrico E** respecto a un plano de referencia durante la oscilación. Si E oscila siempre en el mismo plano → polarización lineal. Si rota describiendo un círculo → circular. Es una consecuencia directa de la geometría transversal de la onda. Es clave en antenas WiFi y comunicaciones inalámbricas. |
| **¿Qué relación hay entre frecuencia, longitud de onda y velocidad?** | La relación fundamental: **c = λ · f** (velocidad = longitud de onda × frecuencia). Si la frecuencia sube, la longitud de onda baja proporcionalmente y la energía del fotón aumenta (E = hf). Una señal Fast Ethernet (f ≈ 31,25 MHz) tiene λ ≈ 9,6 m en vacío. |
| **¿Cómo transporta energía una onda EM?** | A través del **vector de Poynting**: **S⃗ = E⃗ × H⃗** (en W/m²), que apunta en la dirección de propagación. La energía no viaja "dentro" del conductor sino en los campos que lo rodean. El cobre solo disipa una fracción como calor (efecto Joule). Este es el puente conceptual entre [[corriente-electrica]], [[onda-electromagnetica]] y [[fast-ethernet-ieee-802-3u]]. |
| **¿Qué es el espectro electromagnético?** | Todos los rangos de frecuencia de las ondas EM constituyen un **continuo único**: Radio → Microondas → Infrarrojo → Luz visible → UV → Rayos X → Rayos γ. Es el mismo fenómeno físico: solo cambia f (y con ella E = hf). Una señal Ethernet está en la banda de **radiofrecuencia** — idéntica a una señal de radio, solo que guiada por cable. |
| **¿Por qué el par trenzado reduce interferencia?** | Al trenzar los dos conductores, las ondas EM generadas por cada uno tienen **polaridad opuesta** en cada semitorsión. Las interferencias externas afectan a ambos conductores por igual (modo común) y se cancelan al restar las señales en el receptor. Esto es equivalente a crear un "blindaje geométrico" sin apantallamiento metálico. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que tiras una piedra a un estanque. La perturbación crea olas que se alejan solas. Una onda electromagnética es parecido, pero en lugar de agua, lo que oscila son campos eléctricos y magnéticos. Lo sorprendente es que **la onda se crea a sí misma**: el campo eléctrico cambiante genera el magnético, y el magnético cambiante regenera el eléctrico, en un ciclo que se alimenta solo y puede viajar por el vacío del espacio sin necesitar nada material. Como dos bailarines que se impulsan mutuamente sin tocarse.

---

## 💡 Aprendizajes principales

- La onda EM no es "luz que viaja por cables" — es un mecanismo de autopropagación de campos que opera igual en el vacío interestelar que en un UTP Cat.5.
- La distinción entre energía dentro del conductor vs. fuera de él (vector de Poynting) es el concepto más contraintuitivo y más importante: conecta [[corriente-electrica]] con [[onda-electromagnetica]] y explica por qué los cables se calientan.
- Todo el espectro EM es un solo fenómeno: entender una señal Ethernet de 31,25 MHz es entender también la luz visible, solo que con diferente frecuencia.
- La geometría E ⊥ H ⊥ dirección no es un detalle técnico: determina la polarización, el diseño de antenas y la cancelación de interferencia en pares trenzados.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **Onda EM como autopropagación** | 🌊 Una playa con olas | Una ola gigante que al romper genera otra ola frente a ella, y esa otra genera otra, así infinitamente. Las olas no necesitan que nadie las empuje — se crean a sí mismas. Cada cresta es el campo E, cada valle el campo H, alternándose eternamente. |
| **Campos E y H perpendiculares** | 🕺💃 Dos bailarines de tango | Un bailarín eléctrico (azul, carga positiva) y una bailarina magnética (roja, norte) danzan en un escenario circular. Él se mueve hacia adelante cuando ella se mueve hacia los lados — siempre perpendiculares, nunca en la misma dirección. Su complicidad es perfecta: uno no puede moverse sin que el otro responda. |
| **Propagación en medio guiado** | 🎳 Fichas de dominó en un tobogán | Imagina fichas de dominó cayendo por un tobogán de cobre. El tobogán (cable) no empuja las fichas — solo las canaliza. La energía del empujón viaja de ficha en ficha (campo EM), no por el tobogán. Si el tobogán se trenza (par trenzado), las interferencias externas resbalan y se cancelan. |
| **Velocidad de la luz como límite** | 🚧 Un peaje cósmico con barrera | En el peaje del universo hay un cartel gigante: **"LÍMITE: 300.000 km/s"**. Ninguna partícula, señal o información puede pasar más rápido. Es la ley fundamental del cosmos — incluso la luz obedece este límite exacto. Los electrones en el cable (lentos como tortugas a ~mm/s) no llegan ni al peaje; lo que viaja rápido es la onda EM que empujan. |
| **Espectro EM como un solo fenómeno** | 🎹 Un piano de 70 octavas | Imagina un piano absurdamente largo. Todas las teclas producen el mismo tipo de sonido (ondas EM), pero en frecuencias distintas. Las teclas de la izquierda son ondas de radio (graves, largas), las del centro son luz visible (lo que vemos son solo unas pocas teclas), y las de la derecha son rayos gamma (agudos, peligrosos). Ethernet toca una tecla en la zona grave del piano. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**

- Usar esta nota para repasar con repetición espaciada: tapar la columna derecha de Cornell y responder cada pregunta en voz alta (técnica Feynman).
- Verificar que puedo explicar la autopropagación EM sin mirar la nota — si no puedo, volver a [[onda-electromagnetica]].

**Aplicación a medio plazo (este mes):**

- Conectar estas preguntas con [[codificacion-4b-5b-y-mlt-3]]: ¿cómo se traduce un cambio de código 4B/5B en una perturbación I(t) que genera la onda EM?
- Intentar explicar el puente conceptual completo: electrón → corriente variable → campo EM → señal en cable → bits recibidos.

**Proyecto o idea donde encaja:**

- [[antena-wifi-tarro-papas]] — entender la propagación EM libre es la base para construir una antena direccional.
- [[frecuencia-mlt3-longitud-onda-cobre]] — calcular λ en cobre requiere dominar la relación c = λ · f.

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 | 2026-06-04 | ✅ / ⚠️ / ❌ | |
| 2 | 2026-06-06 | ✅ / ⚠️ / ❌ | |
| 3 | 2026-06-10 | ✅ / ⚠️ / ❌ | |
| 4 | 2026-06-17 | ✅ / ⚠️ / ❌ | |
| 5 | 2026-07-03 | ✅ / ⚠️ / ❌ | |

---

## 🔗 Relacionado

- [[onda-electromagnetica]] — nota canónica con desarrollo completo, Cornell y anclas de memoria
- [[corriente-electrica]] — la corriente variable es la fuente generadora de la onda EM
- [[fast-ethernet-ieee-802-3u]] — aplicación directa: señales MLT-3 como ondas EM guiadas
- [[fotones-virtuales]] — descripción cuántica del campo EM
- [[codificacion-4b-5b-y-mlt-3]] — cómo la codificación se traduce en perturbaciones I(t)
- [[señalizacion-diferencial]] — la base física de cómo se detectan las ondas EM en pares trenzados
