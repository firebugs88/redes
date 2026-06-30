---
type: research
fuente: Explicación del profesor de física (sesión con el asistente)
fecha: 2026-06-30
relevancia: media
dominio: física / telecomunicaciones
review-count: 0
ultimo-review: 2026-06-30
next-review: 2026-07-01
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
  - loci/anclado
---

# 🔬 Modulación digital: ASK / FSK / PSK (y QAM)

> [!info] Segunda mitad de un puente. La prima analógica de esta nota es [[modulacion-am-fm]] (AM/FM = deformar una portadora con una señal continua). Aquí cerramos el puente hacia la codificación digital del vault: [[codificacion-4b-5b-y-mlt-3]].

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `Portadora` · `Keying (conmutar)` · `Símbolo ≠ bit` · `Constelación I/Q` · `QAM` · `Eficiencia espectral` · `Banda base vs paso banda`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **Las mismas tres perillas, ahora en escalones.** Una portadora $A\cos(2\pi f t + \phi)$ tiene solo tres propiedades tocables: **amplitud, frecuencia y fase**. La modulación digital es exactamente lo mismo que AM/FM, pero en vez de seguir una señal continua, **conmuta** ("keying") entre **valores discretos** para representar bits. ASK toca la amplitud, FSK la frecuencia, PSK la fase.
2. **La fase es la dimensión nueva.** AM/FM analógicas casi no usaban la fase; el mundo digital la explota a fondo (BPSK = 2 fases = 1 bit; QPSK = 4 fases = 2 bits/símbolo). Y como la información no vive en la amplitud, PSK hereda la robustez al ruido que ya viste en FM.
3. **Símbolo ≠ bit — y ahí está la palanca.** Un **símbolo** es un estado de la portadora que dura un tiempo $T_s$. Si hay $M$ estados distinguibles, cada símbolo lleva $\log_2 M$ bits. QPSK manda 2 bits por símbolo → **duplica el caudal en el mismo ancho de banda**. Eso es **eficiencia espectral**, y se visualiza en el **diagrama de constelación** (plano I/Q).
4. **QAM es el caballo de batalla moderno** (WiFi, LTE/5G, cable): combina amplitud **y** fase para llenar el plano I/Q de puntos (16-, 64-, 256-, 1024-QAM). Más puntos = más bits/símbolo, pero más juntos = más sensibles al ruido → **exige más SNR**. Es el tradeoff moderno **tasa ↔ SNR**, eco directo del calidad↔ancho-de-banda de FM.
5. **El puente que cierra el vault:** [[codificacion-4b-5b-y-mlt-3]] es **codificación de línea en BANDA BASE** (moldea la señal directamente sobre el cobre, sin portadora). ASK/FSK/PSK/QAM son modulación en **PASO BANDA** (montan los bits sobre una portadora de alta frecuencia). Ambos responden la **misma** pregunta —"¿cómo pongo bits en una señal física?"— solo que cable vs aire. MLT-3 (multinivel de amplitud) es conceptualmente un primo de banda base del ASK; el WiFi usa QAM. Tu Ethernet-sobre-cobre y el inalámbrico son **dos respuestas a un mismo problema**.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué tienen en común la modulación analógica y la digital? | Las **dos** parten de una portadora $A\cos(2\pi f t + \phi)$ con tres perillas: amplitud $A$, frecuencia $f$, fase $\phi$. AM/FM mueven una perilla siguiendo una señal **continua**; ASK/FSK/PSK mueven la misma perilla pero **saltando entre valores discretos** que representan bits. Mismo hardware conceptual, distinta "letra". |
| ¿Qué significa "keying" (conmutar)? | Viene del **telégrafo**: la "llave" (key) se pulsaba para encender/apagar la señal. "Shift Keying" = conmutar entre estados discretos. Por eso son ASK/FSK/PSK = *Amplitude/Frequency/Phase Shift Keying*: cambias a saltos una propiedad de la portadora. |
| ASK — ¿qué perilla mueve y cuál es su caso mínimo? | Mueve la **amplitud**. El caso mínimo es **OOK** (On-Off Keying): portadora encendida = 1, apagada = 0 (literalmente prender y apagar). Es la prima digital de AM. Ventaja: simplísima. Defecto: **frágil al ruido**, porque el ruido eléctrico se suma justo a la amplitud (misma lección que en AM). |
| FSK — ¿qué perilla mueve y por qué es robusta? | Mueve la **frecuencia**: $f_1$ = un bit, $f_2$ = otro bit. Prima digital de FM. Como la información vive en la frecuencia y no en la altura, **ignora el ruido de amplitud** → robusta. La usaron los módems telefónicos clásicos (Bell 103) y hoy variantes la usan Bluetooth (GFSK) y mandos/sensores. |
| PSK — ¿qué aporta de nuevo respecto a AM/FM? | Explota la **fase**, la dimensión que la modulación analógica casi no tocaba. **BPSK**: dos fases separadas 180° (0° y 180°) = 1 bit. **QPSK**: cuatro fases (0/90/180/270°) = **2 bits por símbolo**. Robusta (no usa amplitud) y eficiente. El precio: el receptor necesita una **referencia de fase** coherente (recuperación de portadora). |
| ¿Por qué "símbolo ≠ bit"? | Un **símbolo** es un estado de la portadora mantenido durante un tiempo de símbolo $T_s$. Si el esquema tiene $M$ estados distinguibles, cada símbolo transporta $\log_2 M$ **bits**. *Baudios* = símbolos/segundo; *bits/segundo* = baudios × bits/símbolo. BPSK: 1 bit/símbolo. QPSK: 2. 16-QAM: 4. Confundir baudios con bits/s es el error clásico. |
| ¿Qué es el diagrama de constelación (plano I/Q)? | Toda señal de paso banda se escribe $s(t)=I\cos(2\pi f t)-Q\sin(2\pi f t)$, con dos ejes en cuadratura: **I** (in-phase) y **Q** (quadrature, desfasado 90°). Cada símbolo es un **punto $(I,Q)$**: su **distancia al origen = amplitud**, su **ángulo = fase**. Así, ASK = puntos en un rayo (mismo ángulo, distinto radio); PSK = puntos en un círculo (mismo radio, distinto ángulo); QAM = puntos en una rejilla. |
| ¿Qué es QAM y por qué es el caballo de batalla moderno? | **QAM** (Quadrature Amplitude Modulation) combina **amplitud Y fase** a la vez → llena el plano I/Q de puntos. 16-QAM = rejilla 4×4 = 16 puntos = **4 bits/símbolo**; 64-QAM = 6; 256-QAM = 8; 1024-QAM (WiFi 6) = 10; 4096-QAM (WiFi 7) = 12. Está en WiFi, LTE/5G y cable (DOCSIS). Es PSK + ASK fusionados usando las dos dimensiones del plano. |
| El tradeoff moderno: ¿qué se gana y qué se paga al subir de QAM? | Más puntos en la constelación = más bits por símbolo = **más caudal** en el mismo ancho de banda. Pero los puntos quedan **más juntos**, así que un ruido pequeño ya cruza la frontera de decisión → **más errores**. Para sostenerlo necesitas mejor **SNR** (señal/ruido). Es el tradeoff **tasa ↔ SNR**, hermano del **calidad ↔ ancho de banda** de FM: no hay almuerzo gratis. |
| Orden de inmunidad al ruido | **ASK (más débil)** < FSK ≈ PSK (más fuertes). La amplitud es la propiedad que el ruido perturba primero, así que ASK sufre más. Para igual energía, **BPSK es de los más robustos**: sus dos puntos están a 180° (máxima separación posible), así que el ruido tiene que recorrer la mayor distancia para provocar un error. La regla general: **mayor distancia mínima entre puntos de la constelación = más robusto**. |
| ¿Cómo cierra esto el puente con [[codificacion-4b-5b-y-mlt-3]]? | 4B/5B + MLT-3 es **codificación de línea en BANDA BASE**: moldea la señal *directamente* sobre el cobre, **sin portadora** (MLT-3 son 3 niveles de amplitud: +1/0/−1 V; 4B/5B asegura sincronía de reloj). ASK/FSK/PSK/QAM son **PASO BANDA**: montan los bits sobre una **portadora** de alta frecuencia. Misma pregunta —"¿cómo meto bits en una señal?"— resuelta para cable (banda base) vs aire/coax (paso banda). |
| Matiz honesto MLT-3 ↔ ASK / PAM | MLT-3 **no es** un ASK estricto (ASK modula la amplitud de una *sinusoide portadora*). El paralelo preciso es: **PAM** (Pulse Amplitude Modulation, multinivel de amplitud en banda base) ↔ **ASK** (su versión sobre portadora). 1000BASE-T usa **PAM-5** (5 niveles): literalmente "ASK de banda base". Por eso decimos que MLT-3 es *primo* del ASK, no idéntico. |
| Guiño a Shannon (sin descarrilar) | El techo lo pone $C = B\log_2(1+\text{SNR})$: la capacidad (bits/s) crece con el ancho de banda $B$ y, **logarítmicamente**, con la SNR. Por eso para meter más bits/símbolo (más QAM) hace falta más SNR. Los sistemas modernos combinan **QAM alto + corrección de errores (FEC**, p. ej. LDPC) para acercarse a ese límite sin que los errores los maten. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Explícalo como si se lo contaras a alguien que no sabe nada del tema. Si no puedes, aún no lo entiendes.

Tenés una onda "portadora" que siempre vibra, y solo podés cambiarle tres cosas: qué tan alta es, qué tan rápido vibra y en qué momento del vaivén está (su fase). Para mandar ceros y unos, en vez de moverlas suavecito como con la música, las hacés **saltar entre valores fijos**: saltás la altura (ASK), la velocidad (FSK) o la fase (PSK). Si combinás altura y fase a la vez podés mandar varios bits de un solo golpe (eso es QAM, lo que usa el WiFi): más rápido, pero solo si la señal llega limpia.

---

## 💡 Aprendizajes principales

- **La modulación es una sola idea con tres puertas.** No memorices ASK/FSK/PSK como tres temas: son la **misma** acción —tocar una propiedad de la portadora— aplicada a amplitud, frecuencia o fase. Lo digital solo añade que esos cambios son **a saltos discretos** (símbolos), no continuos. Quien entiende AM/FM ya tiene el 70% de esto.
- **La amplitud es frágil, la fase y la frecuencia son robustas** — la misma lección de [[modulacion-am-fm]], reaparecida. Por eso ASK es el esquema más débil y los sistemas serios viven en PSK/QAM (que usan fase) con la amplitud bien controlada.
- **El plano I/Q es el lenguaje unificador.** Amplitud y fase no son dos cosas: son las **coordenadas polares** (radio y ángulo) de un único punto en el plano I/Q. Una vez ves la constelación, ASK, PSK y QAM dejan de ser esquemas distintos y se vuelven "dónde pongo los puntos". Esa es la idea de catedrático que conviene fijar.
- **Todo es el mismo tradeoff disfrazado.** FM compraba calidad pagando ancho de banda; QAM compra caudal pagando SNR. Subir la constelación aprieta los puntos y exige una señal más limpia. "No hay almuerzo gratis" gobierna toda la ingeniería de telecomunicaciones, y Shannon ($C=B\log_2(1+\text{SNR})$) le pone el número exacto.
- **Banda base y paso banda son dos respuestas a la misma pregunta.** Meter bits en cobre (codificación de línea, MLT-3/PAM) y meterlos en el aire (modulación, QAM) resuelven idéntico problema con física distinta. Ver esa unidad **es** el puente física↔redes de tu bóveda.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

> [!info] Esta nota es `#prioridad/media`, así que el Loci no era obligatorio; se incluyen 2 anclas porque pediste tratamiento "a fondo" y porque la distinción ASK/FSK/PSK + el salto a "símbolo ≠ bit" son justo los puntos donde conviene fijar imagen.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **ASK / FSK / PSK = tres perillas de un mismo faro** | Un faro en un acantilado de noche, frente a un barco | El farero tiene **tres formas** de mandar el mismo mensaje al barco. (1) Sube y baja el **brillo** de la lámpara: brillante = 1, tenue = 0 → eso es **ASK** (y la niebla, que apaga el brillo, le arruina el mensaje: amplitud frágil). (2) Cambia el **color** de la luz: rojo = 1, verde = 0 → **FSK** (la niebla no cambia el color, así que aguanta mejor). (3) Hace destellar la lámpara **justo en el "tic" o justo en el "tac"** de un metrónomo que el barco también tiene → **PSK** (muy distinguible, pero solo si ambos relojes están sincronizados). Tres perillas, un faro. |
| **Símbolo ≠ bit + constelación QAM** | Un tablero de dardos cuadriculado con 16 casillas iluminadas | Cada vez que el farero quiere hablar, no manda un bit: clava **un dardo** en una de **16 casillas** del tablero (16-QAM). La **distancia al centro** del dardo = brillo (amplitud); el **ángulo** = momento del destello (fase). Como hay 16 casillas, **cada dardo dice 4 bits de golpe** (símbolo ≠ bit). Si quiere mandar más rápido, mete **64 casillas** en el mismo tablero: caben más, pero quedan tan **pegadas** que con poca niebla (ruido) el dardo cae en la casilla vecina y el mensaje se corrompe. Tablero amplio y pocas casillas = robusto; tablero lleno = rápido pero exige vista de águila (alta SNR). |

> [!warning] Límites de la analogía del faro (declararlos es parte del método)
> - El **"color" del FSK** es bastante fiel (para la luz, color *es* frecuencia), pero en radio real las dos frecuencias FSK están muy juntas y se separan con **filtros**, no con el ojo.
> - El **PSK como "destello en el tic/tac"** sí captura lo esencial: necesitás un **metrónomo compartido** (referencia de fase coherente). Si el reloj del barco deriva, el PSK falla — y eso es real, no licencia poética.
> - La analogía **no muestra el plano I/Q como espacio continuo 2D**: el faro sugiere categorías separadas (brillos, colores, momentos), pero la constelación es un plano donde amplitud y fase son ejes continuos. Para eso, quedate con el tablero de dardos.

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Cerrar mentalmente el puente: releer [[modulacion-am-fm]] y esta nota juntas viendo AM→ASK, FM→FSK, y la **fase→PSK** como la dimensión nueva. Cada vez que oigas "el router negocia 256-QAM", traducir: "manda 8 bits por símbolo, pero solo porque la señal llega limpia".

**Aplicación a medio plazo (este mes):**
Conectar con la columna vertebral de redes del vault: comparar **MLT-3/PAM (banda base, cobre)** de [[codificacion-4b-5b-y-mlt-3]] contra **QAM (paso banda, WiFi)** como dos soluciones al mismo problema. Si decides que este puente es backbone, **subir la relevancia de esta nota a `alta`** y extender la escalera de repaso a 6 toques + más Loci.

**Proyecto o idea donde encaja:**
- [[modulacion-am-fm]] — la mitad analógica del mismo puente: misma pregunta ("¿cómo meto información en una onda?"), dos eras.

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

- Proyectos: puente física↔redes — segunda mitad (la modulación **digital** como la cara inalámbrica de la codificación de línea).
- Ideas: [[ofdm]] — **el siguiente escalón real de WiFi/4G/5G**: muchas subportadoras QAM ortogonales en paralelo. OFDM no reemplaza a QAM, la organiza.
- Otras investigaciones:
  - [[modulacion-am-fm]] — **la prima analógica directa**: AM↔ASK, FM↔FSK, y la fase (PSK) como dimensión nueva. Empieza por aquí.
  - [[codificacion-4b-5b-y-mlt-3]] — **la prima de banda base**: misma pregunta resuelta sobre cobre sin portadora (MLT-3/PAM ↔ ASK).
  - [[señalizacion-diferencial]] — cómo viaja físicamente la señal de banda base sobre el par trenzado donde vive MLT-3.
  - [[espectro-electromagnetico]] — el "dónde" (casillero de frecuencia) frente al "cómo" (la modulación de esta nota); separa las dos capas.
  - [[onda-electromagnetica]] — la portadora es, físicamente, una onda EM; aquí se ve qué le hacemos para que cargue bits.
