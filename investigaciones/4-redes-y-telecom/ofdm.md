---
type: research
fuente: Explicación del profesor de física (sesión con el asistente)
fecha: 2026-06-30
relevancia: media
dominio: física / telecomunicaciones
review-count: 0
ultimo-review: 2026-06-30
next-review: 2026-07-05
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - tema/física
  - review/pendiente
  - tipo/puente
  - loci/anclado
---

# 🔬 OFDM — Multiplexación por División de Frecuencia Ortogonal

> [!info] Tercer y último escalón de un puente. La portadora analógica nació en [[modulacion-am-fm]]; los símbolos digitales (y **QAM**) en [[modulacion-digital-ask-fsk-psk]]. Esta nota responde **cómo WiFi/4G/5G usan QAM en la práctica**: no inventando una modulación nueva, sino **organizando miles de canalcitos QAM en paralelo**. OFDM no reemplaza a QAM — la **administra**.

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `Multitrayecto → ISI` · `Muchas subportadoras lentas` · `Ortogonalidad (pico en el null)` · `IFFT/FFT` · `Prefijo cíclico` · `Cada subportadora lleva un QAM` · `OFDMA (multiusuario)`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **El enemigo es el eco (multitrayecto → ISI).** En el aire la señal rebota en paredes, suelo y edificios; los ecos llegan **retrasados**. Si mandás los bits por **una sola portadora rapidísima**, cada símbolo dura un instante y el retardo del eco se vuelve una fracción enorme del símbolo → un símbolo pisa al siguiente (**ISI**, interferencia entre símbolos) y los datos se destruyen.
2. **La idea de OFDM: divide y vencerás en frecuencia.** En vez de una portadora veloz, usá **muchas subportadoras lentas en paralelo**, cada una con su propio flujo QAM de baja tasa. Como cada símbolo ahora dura **mucho** ($N$ veces más), el retardo del eco pasa a ser una fracción minúscula del símbolo y la ISI casi desaparece.
3. **Ortogonalidad (la "O"): solapar sin estorbarse.** Las subportadoras se espacian **exactamente** en $\Delta f = 1/T$ (la inversa de la duración del símbolo), de modo que **el pico de cada una cae justo en el cero (null) de todas las demás**. Resultado: se amontonan en frecuencia, se solapan, y aun así no se interfieren → **máxima eficiencia espectral, sin bandas de guarda** entre subcanales.
4. **El truco que lo hace barato: IFFT/FFT + prefijo cíclico.** Sumar miles de subportadoras ortogonales **es matemáticamente una IFFT** → el transmisor hace una **IFFT** (y el receptor una **FFT**). Idea profunda: **OFDM modula en el dominio de la frecuencia** y el silicio lo resuelve barato. El **prefijo cíclico** (copiar la cola del símbolo y anteponerla) **absorbe los ecos** y preserva la ortogonalidad: ahí está la robustez real.
5. **Dónde vive y la "A" de OFDMA.** Cada subportadora carga un **símbolo QAM** (16/64/256-QAM) de la nota anterior. Está en WiFi (desde 802.11a/g), 4G LTE, 5G NR, TV digital (DVB-T) y DSL. **OFDMA** (WiFi 6, LTE) reparte **subconjuntos de subportadoras a distintos usuarios** a la vez → la "A" = **Access**, multiusuario. Costos honestos: **PAPR alto** y **fragilidad a desajustes de frecuencia/Doppler**.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué problema físico resuelve OFDM? | El **multitrayecto**: en inalámbrico la onda llega por varios caminos (directo + rebotes) con **retardos** distintos (el *delay spread*, típicamente decenas–cientos de ns en interiores). Cada eco es una copia desplazada en el tiempo de la señal. |
| ¿Por qué el multitrayecto produce ISI con una sola portadora veloz? | A alta tasa, el tiempo de símbolo $T_s$ es **diminuto** (ej. a 20 Mbaud, $T_s=50$ ns). Si el *delay spread* (ej. 200 ns) es **mayor** que $T_s$, el eco del símbolo anterior se solapa sobre el símbolo actual → **ISI** (Inter-Symbol Interference). Cuanto más rápido vas, peor: el eco abarca más símbolos. Ecualizar eso en una sola portadora es carísimo. |
| ¿Cuál es la jugada central de OFDM? | **Partir un flujo veloz en $N$ flujos lentos en paralelo**, cada uno sobre su propia **subportadora**. Si repartís la tasa entre $N$ subportadoras, el tiempo de símbolo de cada una crece $\times N$ ($T_{sub}=N\cdot T_s$). Ahora el *delay spread* es una **fracción minúscula** de $T_{sub}$ → la ISI casi se evapora. **Divide y vencerás, pero en el dominio de la frecuencia.** |
| ¿Qué significa exactamente la "O" de ortogonal? | Las subportadoras se espacian en $\Delta f = 1/T_{sub}$. Cada subportadora, al durar un tiempo finito (ventana rectangular), tiene en frecuencia forma de **sinc**. Con ese espaciado, **el pico (máximo) de cada sinc cae sobre los ceros (nulls) de todas las demás**. Formalmente: $\int_0^{T} \cos(2\pi f_i t)\cos(2\pi f_j t)\,dt = 0$ para $i\neq j$. Producto interno cero = **ortogonales**: se solapan en frecuencia pero **no se interfieren** en el punto de muestreo de cada una. |
| ¿Por qué la ortogonalidad ahorra ancho de banda? | Los sistemas multiportadora clásicos (FDM) dejaban **bandas de guarda** vacías entre canales para que no se mezclaran. OFDM, al lograr no-interferencia con subportadoras que **se solapan**, elimina esas guardas → **eficiencia espectral casi máxima**: empaqueta las subportadoras hombro con hombro. |
| ¿Cómo se genera OFDM en la práctica? (el truco FFT) | Sumar $N$ subportadoras ortogonales, cada una con su valor complejo QAM $X_k$, es **exactamente** la **IDFT**: $x[n]=\sum_{k=0}^{N-1} X_k\,e^{\,j2\pi kn/N}$. Por eso el transmisor calcula una **IFFT** del bloque de símbolos QAM (datos en frecuencia → muestras en tiempo) y el receptor una **FFT** (vuelta a los símbolos). La FFT es $O(N\log N)$: **baratísima en silicio**. |
| Idea profunda: ¿en qué dominio modula OFDM? | **En el de la frecuencia.** En modulación clásica colocás los datos en el tiempo; en OFDM colocás cada símbolo QAM en un **bin de frecuencia** y la **IFFT** te lo "renderiza" a la forma de onda temporal. Es un cambio de perspectiva: *los datos viven en las frecuencias, no en los instantes.* |
| ¿Por qué OFDM "explotó" recién en los 90-2000 si la idea es de los 60? | El concepto es de los 60 (Chang, Bell Labs 1966) y la implementación por DFT se propuso en 1971 (Weinstein & Ebert). Pero hacer miles de osciladores coherentes en hardware era inviable; **calcular una FFT en tiempo real exige DSP barato**, que recién llegó con la microelectrónica moderna. OFDM es un caso de "idea correcta esperando al silicio". |
| ¿Qué es el prefijo cíclico (CP) y qué dos cosas logra? | Un **intervalo de guarda** que se antepone a cada símbolo OFDM **copiando su cola** (las últimas muestras) al frente. (1) **Absorbe los ecos**: mientras el *delay spread* sea menor que la duración del CP, los ecos solo "manchan" el CP, no la parte útil → **sin ISI entre símbolos OFDM**. (2) **Preserva la ortogonalidad**: convierte la convolución del canal en **circular**, que en frecuencia es una **multiplicación por subportadora** → el canal se reduce a **un solo coeficiente complejo por subportadora** (ecualización de "un tap", trivial). |
| ¿Cuál es el costo del CP? | Es **overhead**: el CP no lleva datos nuevos (es una repetición), así que gasta tiempo y energía. Típicamente 1/4 o 1/8 del símbolo. Es el precio de la robustez: cambiás un poco de tasa a cambio de inmunidad al eco. |
| ¿Qué carga cada subportadora? (el puente con QAM) | Un **símbolo QAM** de [[modulacion-digital-ask-fsk-psk]] (16-/64-/256-QAM). OFDM = **"miles de canalcitos QAM en paralelo"**. Clave: OFDM **no reemplaza** a QAM, la **organiza** en frecuencia. Aún más: cada subportadora puede usar **un orden de QAM distinto** según qué tan limpio esté su trocito de espectro (*adaptive bit-loading* / water-filling): subportadora en un hoyo de desvanecimiento → QAM bajo o apagada; subportadora limpia → 256-QAM. |
| ¿Dónde se usa OFDM? | WiFi (802.11**a/g** en adelante, n/ac/ax), **4G LTE**, **5G NR**, **TV digital terrestre** (DVB-T/T2), radio digital (DAB) y **DSL/ADSL/VDSL** (ahí se llama **DMT**, *Discrete MultiTone* — OFDM sobre cobre). Es la modulación de facto de casi toda la banda ancha inalámbrica moderna. |
| ¿Qué es OFDMA y en qué se diferencia de OFDM? | **OFDMA** = *Orthogonal Frequency-Division Multiple **Access***. OFDM organiza subportadoras **para un enlace**; OFDMA va más allá y **asigna subconjuntos de subportadoras (resource units) a usuarios distintos al mismo tiempo**. La "A" es **Access**: pasa de "una tubería" a "muchos usuarios compartiendo las subportadoras". Es la gran novedad de **WiFi 6 (802.11ax)** y la base del downlink de **LTE/5G** (ideal para muchos paquetes pequeños / IoT). |
| Matiz honesto 1: ¿qué es el PAPR y por qué duele? | **PAPR** = *Peak-to-Average Power Ratio*. Al sumar miles de subportadoras, de vez en cuando **se alinean en fase** y producen un **pico de potencia** enorme frente al promedio. Eso **estresa el amplificador**: hay que dejarle margen (back-off) → menos eficiencia, o se recorta el pico → distorsión. Por eso el **uplink de LTE usa SC-FDMA** (variante de menor PAPR), pensando en la batería del teléfono. |
| Matiz honesto 2: ¿por qué OFDM es sensible a la frecuencia/Doppler? | La ortogonalidad depende del espaciado **exacto** $\Delta f = 1/T$. Si los osciladores TX/RX **derivan** (offset de frecuencia, CFO), o hay **Doppler** por movimiento, las subportadoras se corren y **el pico ya no cae en los nulls** → reaparece la interferencia, ahora **entre subportadoras (ICI)**. La ortogonalidad es frágil: OFDM exige buena **sincronización de frecuencia**. 5G mitiga usando **espaciados de subportadora mayores** (numerologías) en alta movilidad/alta frecuencia. |
| Resumen del "no hay almuerzo gratis" en OFDM | OFDM **compra** robustez al multitrayecto y ecualización trivial; **paga** con (a) overhead del CP, (b) PAPR alto que castiga el amplificador, y (c) fragilidad a errores de frecuencia/fase. Es el mismo patrón de tradeoff que [[modulacion-digital-ask-fsk-psk]] y [[modulacion-am-fm]]: cada ventaja se compra con una moneda física. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Explícalo como si se lo contaras a alguien que no sabe nada del tema. Si no puedes, aún no lo entiendes.

En el aire, tu señal rebota y los ecos llegan tarde; si mandás los datos por **un solo canal rapidísimo**, cada eco pisa lo siguiente y se hace puré. OFDM lo arregla **partiendo el chorro veloz en miles de chorritos lentos en paralelo**, cada uno cargando un símbolo QAM, y afinándolos como las notas de un coro para que suenen juntos sin enturbiarse (eso es la "ortogonalidad"); una FFT genera todo eso casi gratis y un "prefijo cíclico" se traga los ecos. Por eso WiFi, 4G y 5G no inventan una modulación nueva: **organizan QAM en montones de subportadoras a la vez.**

---

## 💡 Aprendizajes principales

- **OFDM es organización, no una modulación nueva.** Separá las capas (tu patrón de confusión a vigilar): *qué* va en cada subportadora = **QAM** (capa modulación); *cómo se reparten y empaquetan* las subportadoras = **OFDM** (capa multiplexación/estructura); *cómo se domestican los ecos* = **prefijo cíclico** (capa robustez). Tres capas en la misma señal. OFDM responde solo a la segunda y tercera.
- **La velocidad es el enemigo, la lentitud-en-paralelo es la cura.** El instinto dice "para ir más rápido, una portadora más veloz". En multitrayecto eso es exactamente lo que te mata (ISI). OFDM invierte la intuición: **muchas portadoras lentas** suman la misma tasa total pero cada una es inmune al eco. Contraintuitivo y profundo.
- **Ortogonalidad = solaparse sin estorbarse.** No es magia: es geometría. Espaciar en $1/T$ pone el pico de cada subportadora sobre los ceros de las otras. Es el mismo concepto de "vectores perpendiculares" llevado a señales: producto interno cero. Por eso podés empaquetarlas pegadas y ganar eficiencia espectral.
- **OFDM es modular en el dominio de la frecuencia, y la FFT es lo que lo abarata.** Cambiar de "poner datos en el tiempo" a "poner datos en frecuencias y dejar que la IFFT los dibuje" es el salto mental. Y explica la historia: la idea esperó 30 años a que el DSP fuera barato.
- **Todo tiene su factura física.** CP (overhead), PAPR (estrés del amplificador), sensibilidad a Doppler/CFO (sincronía exacta). OFDM no es gratis; es un trato muy bueno **si** controlás la frecuencia. Reconocer estos costos es lo que separa entender OFDM de repetir el folleto de marketing.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

> [!info] Esta nota es `#prioridad/media`, así que el Loci no era obligatorio; se incluyen 2 anclas porque pediste tratamiento "a fondo" y porque la intuición *velocidad→ISI* y la *ortogonalidad* son justo los puntos donde conviene fijar imagen.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **Una portadora veloz sufre ISI / muchas subportadoras lentas la curan** | Una catedral con muchísimo eco | Un **único pregonero** intenta leer un mensaje larguísimo **a toda velocidad**; la catedral devuelve el eco de cada sílaba **justo encima** de la siguiente y todo se vuelve un barullo ininteligible (eso es **ISI**). Lo echás y entra un **coro de mil cantantes**: cada uno sostiene **una sola nota, lenta y estable** (una subportadora). Como cada nota dura mucho, su propio eco se mezcla **consigo misma**, no con la nota siguiente → el mensaje del coro se entiende perfecto. Y las notas forman un **acorde afinado** (ortogonal): suenan todas a la vez **sin enturbiarse**. Cada cantante, además, lleva un cartelito QAM con su trocito de datos. |
| **Ortogonalidad + prefijo cíclico** | Una mesa de mezclas con deslizadores (faders) y, antes de cada frase, un "respiro" | Mirás la mesa de mezclas: cada deslizador es una subportadora afinada de modo que **su pico de volumen cae exactamente donde las vecinas están en silencio absoluto** (cero), por eso podés subirlas todas pegadas sin que se ensucien (**ortogonalidad**). Y antes de que el coro empiece cada frase, todos **repiten en voz baja la colita de la frase anterior** como un pequeño "respiro" de relleno: cuando el eco rezagado llega, choca contra ese respiro y **no contra la frase nueva** (eso es el **prefijo cíclico** tragándose el eco). Si alguien **desafina** un pelín (deriva de frecuencia / Doppler), los picos dejan de caer en los silencios y el acorde se enturbia: la ortogonalidad es frágil. |

> [!warning] Límites de la analogía del coro (declararlos es parte del método)
> - El **"acorde afinado"** captura el espíritu de la ortogonalidad (notas en relación armónica), pero la ortogonalidad real es una condición matemática precisa (espaciado $=1/T$, picos sinc sobre los nulls), **no** "suena bonito juntas".
> - El coro sugiere **mil osciladores físicos** sonando en paralelo. En la práctica **no hay mil osciladores**: hay **una IFFT** que calcula la suma de todas las subportadoras de un golpe. La imagen del coro es para la intuición, no para el hardware.
> - La analogía **no muestra el PAPR**: el caso real en que **todos los cantantes coinciden en un grito fortísimo a la vez** (picos de potencia que estresan el amplificador). Agregalo mentalmente como "de vez en cuando el coro pega un alarido".
> - Variante útil para la parte de ISI/paralelismo: **un camión a 200 km/h en un camino con baches** pierde la carga, mientras que **muchos camiones lentos en carriles paralelos** llevan la misma carga total y llegan intactos. Sirve para "velocidad = enemiga", pero **no** captura la ortogonalidad; para eso quedate con el coro.

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Cerrar el puente completo de modulación leyendo las tres notas en orden —[[modulacion-am-fm]] → [[modulacion-digital-ask-fsk-psk]] → [[ofdm]]— y verbalizando la escalera: *deformar una portadora* (AM/FM) → *saltar entre símbolos QAM en una portadora* (digital) → *repartir esos símbolos QAM en miles de subportadoras ortogonales* (OFDM). Cada vez que el router diga "WiFi 6, 80 MHz, 256-QAM", traducir: "está repartiendo símbolos de 8 bits sobre cientos de subportadoras ortogonales con prefijo cíclico, y con OFDMA puede atender varios dispositivos a la vez".

**Aplicación a medio plazo (este mes):**
Conectar OFDM con la columna física del vault: ver que **DSL (DMT) es OFDM sobre cobre** y enlazarlo con la familia de banda base ([[codificacion-4b-5b-y-mlt-3]]) — misma idea de "muchos subcanales" pero por par trenzado. Si decidís que este puente modulación↔redes es backbone de tu estudio, **subir la relevancia de las tres notas a `alta`**, extender la escalera de repaso a 6 toques y añadir más Loci.

**Proyecto o idea donde encaja:**
- [[modulacion-digital-ask-fsk-psk]] — el escalón inmediatamente anterior: OFDM **transporta** los símbolos QAM que se definen ahí.

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

- Proyectos: puente física↔redes — **tercer y último escalón** de la línea de modulación (de deformar una portadora a repartir QAM en miles de subportadoras ortogonales).
- Ideas: explorar **MIMO** (múltiples antenas) y **MIMO-OFDM**, la combinación real que usan WiFi 5/6 y 5G — candidata a nota propia futura.
- Otras investigaciones:
  - [[modulacion-digital-ask-fsk-psk]] — **el predecesor directo**: OFDM transporta los símbolos **QAM** definidos ahí. Empieza por aquí si no la leíste.
  - [[modulacion-am-fm]] — el origen analógico del puente: deformar una portadora con una señal continua (AM/FM).
  - [[codificacion-4b-5b-y-mlt-3]] — la prima de **banda base** sobre cobre; DSL (DMT) es OFDM por cobre, así que aquí se tocan los dos mundos.
  - [[espectro-electromagnetico]] — la capa **"dónde"** (en qué frecuencia vive la señal) frente al **"cómo"** (la estructura OFDM de esta nota); separá las capas.
  - [[onda-electromagnetica]] — cada subportadora es, físicamente, una onda EM; aquí se ve cómo las afinamos para que carguen datos sin estorbarse.
