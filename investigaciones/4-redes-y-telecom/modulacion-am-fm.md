---
type: research
fuente: Explicación del profesor de física (sesión con el asistente)
fecha: 2026-06-30
relevancia: media
dominio: física / telecomunicaciones
review-count: 0
ultimo-review: 2026-06-30
next-review: 2026-07-21
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
  - tipo/puente
  - loci/anclado
---

# 🔬 Modulación AM vs FM

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `Portadora` · `Mensaje` · `Amplitud` · `Frecuencia` · `Desviación ±75 kHz` · `Inmunidad al ruido` · `Ancho de banda`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **El espectro y la modulación son capas distintas.** El espectro dice *en qué frecuencia* emite una estación (su "casillero"); la modulación dice *cómo* esa onda lleva la información dentro de ese casillero. Por eso este tema no iba en la nota del espectro.
2. **Siempre hay dos ondas.** Una **portadora** de alta frecuencia y fija (el "vehículo") y una **señal mensaje** de baja frecuencia (la voz, la música). Modular = deformar la portadora al ritmo del mensaje. Sin portadora no hay nada que transmitir.
3. **AM deforma la amplitud; FM deforma la frecuencia.** En AM la frecuencia de la portadora queda fija y su *altura* sube y baja con el mensaje. En FM la altura queda fija y lo que late es la *frecuencia*.
4. **La emisora FM NO se mueve de su centro.** Una estación en 100.1 MHz sigue centrada en 100.1 MHz; la frecuencia solo se desvía levemente alrededor (±75 kHz en FM comercial). Esos pequeños vaivenes *son* el sonido.
5. **FM suena mejor porque el ruido ataca la amplitud.** Como FM guarda la información en la frecuencia (no en la altura), es casi inmune al ruido eléctrico; lo paga con más ancho de banda. AM es más sencilla y barata, y de noche llega lejísimos por rebote en la ionosfera.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué diferencia hay entre "espectro" y "modulación"? | El espectro es *en qué frecuencia* emite la estación (su casillero asignado: 100.1 MHz). La modulación es *cómo* esa onda codifica la información dentro de ese casillero. Son capas distintas: una es la dirección, la otra es el método de carga. |
| ¿Cuáles son las dos ondas que intervienen siempre? | La **portadora** (carrier): alta frecuencia, fija, sin información propia, es el vehículo. Y la **señal mensaje**: baja frecuencia (audio, 20 Hz–20 kHz), es la carga. Modular = imprimir la forma del mensaje sobre la portadora. |
| En AM, ¿qué varía y qué se mantiene? | Varía la **amplitud** (altura) de la portadora al ritmo del mensaje; la **frecuencia** de la portadora se mantiene constante. La envolvente de las puntas dibuja la onda de audio. |
| En FM, ¿qué varía y qué se mantiene? | Varía la **frecuencia** instantánea de la portadora; la **amplitud** se mantiene constante. Mensaje fuerte → mayor desviación de frecuencia; mensaje agudo → desviación más rápida. |
| Mito a corregir: ¿la emisora FM "se mueve" de su dial? | No. Una estación en 100.1 MHz permanece centrada ahí. La frecuencia solo se **desvía** ±75 kHz alrededor del centro (entre ~100.025 y ~100.175 MHz). Esos micro-desvíos codifican el audio; el centro nunca cambia. |
| ¿Por qué FM tiene mejor calidad que AM? | Porque el ruido eléctrico (tormentas, motores, chispas) se suma a la **amplitud** de la señal. AM guarda la información justo ahí, así que el ruido se cuela como audio. FM guarda la información en la frecuencia e ignora las variaciones de amplitud (el receptor las recorta), quedando casi inmune. |
| ¿Qué precio paga FM por esa calidad? | **Ancho de banda.** Un canal FM ocupa ~200 kHz; uno AM, ~10 kHz. FM "gasta" mucho más espectro por estación, por eso vive en frecuencias altas (88–108 MHz) donde hay sitio de sobra. |
| Bandas típicas de cada una | AM: ~530–1700 kHz (onda media). FM: ~88–108 MHz (VHF). |
| ¿Por qué la AM llega más lejos de noche? | De noche desaparece la capa D de la ionosfera, que de día absorbe las ondas medias. Sin esa absorción, la señal AM rebota en las capas altas de la ionosfera y "salta" cientos o miles de km (propagación de cielo / skywave). |
| ¿Cómo conecta AM/FM con la codificación digital del vault? | Son la versión **analógica** de la misma pregunta de [[codificacion-4b-5b-y-mlt-3]]: "¿cómo meto información en una señal?". AM/FM modulan una portadora continua; 4B/5B + MLT-3 codifican bits en niveles discretos de voltaje. Mismo problema, dos eras. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Explícalo como si se lo contaras a alguien que no sabe nada del tema. Si no puedes, aún no lo entiendes.

Para mandar música por el aire necesitás una "ola portadora" rápida que siempre está vibrando. Le pegás encima tu canción de dos formas: o haces que la ola sea más alta y más baja siguiendo la música (eso es **AM**), o dejas la altura quieta y haces que la ola vibre un poquito más rápido y más lento siguiendo la música (eso es **FM**). Como el ruido del ambiente cambia sobre todo la altura de las olas, FM —que no usa la altura— suena mucho más limpio.

---

## 💡 Aprendizajes principales

- **Modular es siempre "deformar una portadora".** El concepto madre no es AM ni FM, sino la idea de tomar una onda fija de alta frecuencia y alterar *una* de sus propiedades (altura o ritmo) al compás del mensaje. AM y FM son solo dos elecciones de *qué* propiedad tocar.
- **La amplitud es frágil, la frecuencia es robusta.** El ruido del mundo (estática, motores, rayos) se suma como energía y, por tanto, perturba la *amplitud*. Cualquier esquema que guarde información en la frecuencia o en la fase hereda esa misma ventaja de inmunidad. Esta intuición reaparece en sistemas digitales (FSK, PSK).
- **No hay almuerzo gratis: calidad ↔ ancho de banda.** FM compra inmunidad al ruido pagando con espectro (≈200 kHz/canal vs ≈10 kHz en AM). Esa misma tensión "robustez vs recursos" gobierna toda la ingeniería de telecomunicaciones.
- **El centro es sagrado, la desviación es la señal.** Entender que en FM el dial (100.1 MHz) es un ancla inmóvil y que el sonido vive en los ±75 kHz de vaivén disuelve el malentendido más común sobre FM.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

> [!info] Esta nota es `#prioridad/media`, así que el Loci no era obligatorio; se incluyen 2 anclas porque pediste tratamiento "a fondo" y ayudan a fijar la distinción AM/FM, que es justo donde nace el malentendido.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **AM = varía la altura, frecuencia fija** | Un metrónomo sobre el piano | El metrónomo marca un tic-tac **perfectamente constante** (frecuencia fija), pero un niño caprichoso le sube y baja el brazo metálico haciéndolo **más alto y más bajo** a cada golpe siguiendo la melodía. La velocidad nunca cambia; solo la altura del brazo. Eso es AM: amplitud bailando, ritmo inmóvil. |
| **FM = varía el ritmo, altura fija + centro inmóvil** | Un corredor en una cinta de gimnasio anclada al piso | La cinta está **atornillada en el sitio 100.1** y jamás se mueve de ahí (el centro es sagrado). El corredor mantiene **siempre la misma zancada de altura** (amplitud fija) pero **acelera y frena el ritmo** un pasito según la canción que escucha. Esos pequeños cambios de velocidad alrededor del punto fijo *son* la música. Eso es FM. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Al ver "FM 100.1" en una radio, recordar que ese número es solo el *centro* fijo y que el sonido vive en los ±75 kHz de desviación. Releer junto a [[espectro-electromagnetico]] para separar mentalmente "casillero de frecuencia" (espectro) de "método de carga" (modulación).

**Aplicación a medio plazo (este mes):**
Usar AM/FM como puente hacia la modulación **digital** (ASK, FSK, PSK): son los mismos tres trucos —tocar amplitud, frecuencia o fase— pero con símbolos discretos en vez de audio continuo. Esto enlaza directamente con [[codificacion-4b-5b-y-mlt-3]].

**Proyecto o idea donde encaja:**
- [[espectro-electromagnetico]] — puente física↔redes: dónde vive cada estación vs cómo transporta su información.

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30** (3 toques). El único obligatorio es el primero (mañana). Solo para conceptos `#prioridad/alta` extiende a Día 1 → 3 → 7 → 14 → 30 → 60 (añade filas).

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1) | 2026-07-01 | ✅ / ⚠️ / ❌    |        |
| 2 (Día 7) | 2026-07-07 | ✅ / ⚠️ / ❌    |        |
| 3 (Día 30) | 2026-07-30 | ✅ / ⚠️ / ❌    |        |

---

## 🔗 Relacionado

- Proyectos: puente física↔redes (modulación analógica como antecesora de la codificación digital)
- Ideas: [[modulacion-digital-ask-fsk-psk]] — la extensión digital de AM/FM (AM↔ASK, FM↔FSK, y la fase→PSK como dimensión nueva). Cierra el puente.
- Otras investigaciones: [[espectro-electromagnetico]] · [[onda-electromagnetica]] · [[codificacion-4b-5b-y-mlt-3]] · [[señalizacion-diferencial]]
