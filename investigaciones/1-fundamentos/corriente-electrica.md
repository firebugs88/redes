---
type: research
fuente: Estudio propio (fundamentos, historia y aplicaciones)
fecha: 2026-04-09
relevancia: alta
dominio: física / electromagnetismo
review-count: 1
ultimo-review: 2026-06-27
next-review: 2026-07-18
nivel-retencion: 1
tags:
  - research
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
---
![[corriente-electrica.png]]

### **Mi definición en una frase:**

> [!important] La corriente eléctrica es el **flujo ordenado de electrones a través de un conductor** (formalizado como $I = \frac{dQ}{dt}$).

> [!NOTE] **Analogía de Feynman (Refinada en [[2026-05-21]]): El Túnel Abarrotado**
> 
> * **El Túnel y las Columnas:** El cable conductor es como un puente subterráneo (por ejemplo, el del portal Tunal) completamente abarrotado de millones de moscas de extremo a extremo (los electrones libres), rodeadas de columnas de piedra fijas (los átomos/iones del metal).
> * **El Caos Térmico:** Sin voltaje, las moscas vuelan y chocan entre sí a toda velocidad de forma caótica. No hay avance neto, por lo que **no hay corriente**.
> * **La Brisa (Voltaje) y la Deriva:** Al aplicar voltaje, una suave brisa sopla a lo largo del túnel. Las moscas siguen revoloteando caóticamente, pero experimentan un sutil y lento desplazamiento colectivo hacia la salida (la *velocidad de deriva*, de apenas $\sim 0.45\text{ mm/s}$).
> * **El Empuje Instantáneo (Señal):** Como el túnel ya está repleto, si empujas a una mosca en la entrada, la repulsión mutua empuja inmediatamente a la mosca de la salida (la onda de presión viaja a $\sim 2\times 10^8\text{ m/s}$, casi a la velocidad de la luz).
> * **La Resistencia y Calor:** Las moscas chocan contra los pilares fijos de piedra al derivar. Estos impactos representan la **resistencia eléctrica** y hacen vibrar los pilares, liberando calor (**efecto Joule**).

---
#### **La corriente eléctrica: fundamentos, historia y aplicaciones**

**La corriente eléctrica es el flujo ordenado de cargas eléctricas a través de un conductor**, formalmente definida como la tasa de cambio de carga respecto al tiempo: **I = dQ/dt**. Este fenómeno, cuyos fundamentos se explican mediante el modelo de Drude y la teoría de bandas, constituye el pilar de la civilización tecnológica moderna. Desde las primeras observaciones de Tales de Mileto con ámbar frotado hasta los sistemas HVDC de ±1.100 kV que cruzan continentes, la comprensión y el dominio de la corriente eléctrica ha transformado radicalmente la humanidad. Este informe recorre con rigor técnico-intermedio los principios físicos, la evolución histórica, las diferencias entre corriente alterna y continua, y las aplicaciones prácticas en circuitos y dispositivos.

---
## 1. Fundamentos físicos

### La carga eléctrica y la cuantización de la naturaleza

La carga eléctrica es una propiedad fundamental de la materia que determina las interacciones electromagnéticas. Su unidad en el Sistema Internacional es el coulomb (C), y la carga mínima observable, la **carga elemental,** tiene un valor exacto por definición SI desde 2019:

> **e = 1,602176634 × 10⁻¹⁹ C**

Toda carga eléctrica observable es un múltiplo entero de esta cantidad fundamental: **Q = n·e**, donde n es un entero. Esta cuantización fue demostrada experimentalmente por Robert Millikan en 1909 mediante su famoso experimento de la gota de aceite, en el que equilibró la fuerza gravitatoria y eléctrica sobre gotas cargadas suspendidas entre placas conductoras. Los quarks poseen cargas fraccionarias (±⅓e, ±⅔e), pero siempre se observan confinados en combinaciones que resultan en múltiplos enteros de e.

**La carga eléctrica posee tres propiedades fundamentales**: 

- se **conserva** (la carga total de un sistema aislado permanece constante), 
- está **cuantizada** (solo existen múltiplos enteros de e)
- es **relativistamente invariante** (no depende del marco de referencia). 

**Existen dos tipos**: 

- **positiva (protones, q = +e)** 
- **negativa (electrones, q = −e)**, con masa del electrón mₑ = **9,109 × 10⁻³¹ kg**.

### El modelo de Drude y los electrones de conducción

Para explicar cómo los electrones transportan corriente en un metal, Paul Drude propuso en 1900 un modelo clásico que trata a los electrones de conducción como un **gas de partículas libres** que se mueve a través de una red de iones positivos inmóviles. Los supuestos fundamentales son: los electrones de valencia se deslocalizan y se mueven libremente entre colisiones; las colisiones son eventos instantáneos caracterizados por un **tiempo de relajación τ** (tiempo medio entre colisiones, del orden de 10⁻¹⁴ s en metales a temperatura ambiente); y entre colisiones, los electrones no interactúan entre sí.

La ecuación de movimiento de Drude para la velocidad promedio ⟨v⟩ del electrón es:

> **m(d⟨v⟩/dt) = qE − (m/τ)⟨v⟩**

En estado estacionario (d⟨v⟩/dt = 0), el electrón alcanza una velocidad de deriva constante v_d = eEτ/m, y la **conductividad eléctrica** resultante es:

> **σ = ne²τ/m**

donde n es la densidad de portadores de carga (electrones/m³), e la carga elemental, τ el tiempo de relajación, y m la masa del electrón. Para el cobre, con n ≈ **8,5 × 10²⁸ m⁻³** y τ ≈ 2,5 × 10⁻¹⁴ s, se obtiene σ ≈ 5,88 × 10⁷ S/m, un valor muy cercano al experimental. Aunque el modelo de Drude explica correctamente la ley de Ohm y el efecto Hall, falla al predecir la capacidad calorífica electrónica; estas deficiencias se corrigen con el modelo cuántico de Sommerfeld.

En un sólido cristalino, los niveles de energía discretos de átomos aislados se ensanchan formando **bandas de energía** continuas. La **banda de Valencia** es la banda más alta completamente llena a temperatura cero, mientras que la **banda de conducción** es la inmediatamente superior. Entre ambas existe una **banda prohibida** (gap, Eg) donde no hay estados electrónicos permitidos. En los metales las bandas se solapan (Eg = 0), en los semiconductores el gap es pequeño (Si: **1,12 eV**, Ge: 0,67 eV), y en los aislantes el gap es grande (diamante: **5,5 eV**, SiO₂: ~9 eV). Los **electrones libres** (de conducción) son electrones de valencia deslocalizados que participan en el transporte de carga; en el cobre hay aproximadamente 1 electrón libre por átomo.

### El campo eléctrico impulsa la corriente

Dentro de un conductor con corriente circulante existe un campo eléctrico **E** (V/m) no nulo, mantenido por una fuente de fuerza electromotriz como una batería. La fuerza sobre cada electrón es **F = −eE** (opuesta al campo, dado que la carga del electrón es negativa). Para un conductor uniforme de longitud L con diferencia de potencial V, el campo es E = V/L. En un cable doméstico típico (~0,01 V/m), la aceleración resultante sobre un electrón alcanza a ≈ 1,76 × 10⁹ m/s², pero las colisiones constantes con la red cristalina limitan la velocidad media a meros milímetros por segundo.

### Definición formal de corriente, densidad y velocidad de deriva

La **intensidad de corriente eléctrica** se define como la tasa de flujo de carga a través de una sección transversal:

> **I = dQ/dt**

Se mide en **amperios** (A): 1 A = 1 C/s. Para obtener una corriente de 1 A, aproximadamente **6,242 × 10¹⁸ electrones** deben atravesar una sección del conductor cada segundo.

La **densidad de corriente** J (A/m²) describe la corriente por unidad de área y en forma microscópica se expresa como:

> **J = nev_d = σE**

donde v_d es la velocidad de deriva. La **velocidad de deriva** es la velocidad promedio neta de los electrones bajo la acción del campo: v_d = I/(neA). En un cable de cobre calibre 12 (d = 2,053 mm) transportando 20 A, el cálculo arroja v_d ≈ **0,45 mm/s** — un desplazamiento extraordinariamente lento. Sin embargo, la señal eléctrica se propaga como onda electromagnética a ∼2 × 10⁸ m/s (⅔ de la velocidad de la luz). La analogía es una tubería llena de agua: al empujar un extremo, la presión se transmite casi instantáneamente, aunque las moléculas individuales apenas se muevan.

El sentido **convencional** de la corriente se define como la dirección del movimiento de cargas positivas (de + a −), por una convención histórica de Benjamin Franklin establecida ~150 años antes del descubrimiento del electrón. En metales, los electrones fluyen en dirección opuesta, del terminal negativo al positivo. Ambas convenciones son matemáticamente equivalentes para el análisis de circuitos.

### [[resistencia|Resistencia eléctrica]], ley de Ohm y potencia

La **ley de Ohm** establece la relación fundamental entre tensión, corriente y resistencia. Ver [[resistencia]] para un estudio profundo desde el modelo clásico hasta la física del estado sólido:

> **V = IR**

donde V es la diferencia de potencial (voltios), I la corriente (amperios) y R la resistencia (ohmios, Ω). La resistencia depende de la geometría y el material del conductor:

> **R = ρL/A**

donde ρ es la resistividad del material (Ω·m), L la longitud y A el área de sección transversal. La **conductancia** es G = 1/R (siemens, S), y la forma microscópica de la ley de Ohm es J = σE.

A nivel microscópico, la resistencia se origina por las **colisiones de electrones** con las vibraciones de la red cristalina (fonones, dominante a temperatura ambiente) y con impurezas y defectos (dominante a bajas temperaturas). Para metales, la resistividad varía linealmente con la temperatura en un rango moderado: **ρ(T) = ρ₀[1 + α(T − T₀)]**, donde α es el coeficiente térmico de resistividad. En metales, α > 0 (la resistividad aumenta con la temperatura: cobre α ≈ 3,9 × 10⁻³ °C⁻¹), mientras que en semiconductores α < 0 (la resistividad disminuye, porque la excitación térmica genera más portadores).

La **potencia eléctrica** disipada en un componente resistivo se expresa en tres formas equivalentes:

> **P = VI = I²R = V²/R**

El **efecto Joule** describe la conversión irreversible de energía eléctrica en calor: Q = I²Rt. Microscópicamente, los electrones acelerados por el campo transfieren energía cinética a los iones de la red en cada colisión, incrementando su amplitud de vibración (temperatura).

### Conductores, semiconductores y aislantes

La clasificación de materiales según sus propiedades eléctricas refleja su estructura de bandas. Los **conductores** (plata: ρ = 1,6 × 10⁻⁸ Ω·m; cobre: 1,7 × 10⁻⁸ Ω·m) tienen bandas solapadas con densidades de portadores ~10²⁸–10²⁹ m⁻³. Los **semiconductores** (silicio intrínseco: ρ ~ 6,4 × 10² Ω·m) poseen un gap pequeño y una concentración intrínseca de portadores de nᵢ ≈ 1,5 × 10¹⁰ cm⁻³ a 300 K. Los **aislantes** (vidrio: ~10¹⁰–10¹⁴ Ω·m; cuarzo: ~7 × 10¹⁷ Ω·m) presentan un gap tan grande que prácticamente no tienen portadores a temperatura ambiente.

Los semiconductores pueden ser **intrínsecos** (puros, donde la conducción depende únicamente de excitación térmica generando pares electrón-hueco) o **extrínsecos** (dopados). El **dopaje tipo n** introduce átomos del grupo V (fósforo, arsénico) que aportan electrones adicionales como portadores mayoritarios. El **dopaje tipo p** introduce átomos del grupo III (boro, galio) que crean huecos como portadores mayoritarios. El dopaje puede reducir la resistividad del silicio desde ~10³ Ω·m hasta ~10⁻⁴ Ω·m.

Merece mención breve la **superconductividad**, descubierta por Kamerlingh Onnes en 1911: ciertos materiales enfriados por debajo de una temperatura crítica Tc presentan resistencia exactamente cero y efecto Meissner (expulsión del campo magnético). La teoría BCS (1957) explica el fenómeno mediante pares de Cooper. Los superconductores de alta temperatura (cupratos como YBa₂Cu₃O₇, Tc ≈ 93 K, descubiertos en 1986) han ampliado las posibilidades prácticas, aunque los mejores conductores normales (Cu, Ag, Au) no presentan superconductividad.

---
## 2. Perspectiva histórica y descubrimientos

### Del ámbar de Tales a la botella de Leyden

La historia de la electricidad comienza hacia el **600 a.C.**, cuando el filósofo griego **Tales de Mileto** observó que una varilla de ámbar frotada con lana atraía objetos livianos como plumas. La palabra griega para ámbar — _ēlektron_ (ἤλεκτρον) — daría nombre a toda la disciplina. En 1600, **William Gilbert** retomó estos estudios, acuñó el término "electricidad", construyó el primer electroscopio y diferenció claramente los fenómenos eléctricos de los magnéticos.

El avance decisivo llegó en **1733**, cuando **Charles François de Cisternay du Fay** identificó la existencia de dos tipos de cargas eléctricas: la "electricidad vítrea" (producida al frotar vidrio con seda) y la "electricidad resinosa" (al frotar ámbar con piel). Du Fay observó que cargas del mismo tipo se repelen y de distinto tipo se atraen. En **1745-1746**, Ewald Georg von Kleist y Pieter van Musschenbroek inventaron independientemente la **botella de Leyden**, el primer condensador eléctrico: un recipiente de vidrio con una varilla metálica inmersa en líquido que podía almacenar carga eléctrica y liberarla en una descarga repentina.

### Franklin, la cometa y la convención de cargas

**Benjamín Franklin** (1706–1790) realizó en **junio de 1752** en Filadelfia su célebre experimento, volando una cometa con esqueleto metálico durante una tormenta eléctrica. Un cordel de cáñamo húmedo conducía la electricidad atmosférica hasta una llave metálica atada al extremo inferior, mientras una cinta de seda aislaba la mano del experimentador. La chispa resultante al acercar un nudillo a la llave demostró que el rayo era un fenómeno eléctrico. Franklin formuló la **teoría del fluido único**, estableciendo la convención de cargas "positiva" y "negativa" que aún utilizamos — aunque su suposición sobre la dirección del flujo resultó ser opuesta al movimiento real de los electrones, descubiertos 150 años después. Como aplicación directa, inventó el **pararrayos**, y para 1782 ya había 400 instalados solo en Filadelfia.

### De la pila de Volta al electromagnetismo de Ørsted

La controversia entre Luigi Galvani (quien creía en una "electricidad animal" inherente a los tejidos biológicos) y **Alessandro Volta** (quien demostró que la electricidad provenía de la interacción entre metales diferentes) culminó el **20 de marzo de 1800**, cuando Volta anunció su invento a la Royal Society de Londres: la **pila voltaica**. Consistía en discos alternados de zinc y cobre separados por cartón empapado en salmuera. Fue la primera fuente de corriente continua estable de la historia, revolucionando la ciencia y haciendo posible la electroquímica — Humphry Davy usó pilas voltaicas para aislar sodio, potasio, calcio y bario entre 1807 y 1808. En 1881, el voltio fue adoptado como unidad de fuerza electromotriz en honor a Volta.

En **1820**, el danés **Hans Christian Ørsted** hizo un descubrimiento que cambiaría la física para siempre: durante una clase, observó que una aguja magnética se desviaba al colocarla cerca de un cable por el que circulaba corriente eléctrica. Este experimento demostró por primera vez la **relación entre electricidad y magnetismo**, dos fenómenos considerados hasta entonces completamente independientes, y dio nacimiento al electromagnetismo como disciplina.

### Ampère, Ohm y la cuantificación de los fenómenos eléctricos

El francés **André-Marie Ampère** respondió inmediatamente al descubrimiento de Ørsted, formulando en semanas una teoría matemática de los fenómenos electromagnéticos. Descubrió que dos conductores paralelos con corrientes en el mismo sentido se atraen, y con corrientes opuestas se repelen, y llegó a la conclusión revolucionaria de que todo magnetismo se origina en corrientes eléctricas. Su **ley de Ampère** establece la relación matemática entre corriente y campo magnético generado. Publicó su obra principal en 1826, y el **amperio** honra su nombre.

**Georg Simon Ohm** publicó en **1827** su obra _Die galvanische Kette, mathematisch bearbeitet_, donde formuló la relación **V = IR**. La comunidad científica alemana, dominada entonces por la filosofía de la naturaleza de Hegel, rechazó su trabajo calificándolo de "fantasía desnuda". Ohm renunció a su puesto y pasó años en oscuridad académica. El reconocimiento llegó primero del extranjero: la Royal Society de Londres le otorgó la **Medalla Copley en 1841**. Finalmente, en 1849 obtuvo una cátedra en la Universidad de Múnich. El ohmio fue oficialmente nombrado en su honor en 1867.

### Faraday descubre la inducción electromagnética

**Michael Faraday** (1791–1867), hijo de una familia humilde y autodidacta, registró el **29 de agosto de 1831** su descubrimiento fundamental: un campo magnético cambiante induce una corriente eléctrica en un conductor. Enrolló dos solenoides alrededor de un anillo de hierro y observó que al establecer o cortar la corriente en uno, una corriente transitoria aparecía en el otro. La **ley de Faraday** se expresa como:

> **EMF = −dΦ_B/dt**

donde Φ_B es el flujo magnético y el signo negativo refleja la **ley de Lenz** (la corriente inducida se opone al cambio que la produce). Faraday construyó la primera dinamo, inventó el primer motor eléctrico (1821), introdujo el concepto revolucionario de **líneas de campo** — abandonando la "acción a distancia" newtoniana — y formuló sus dos leyes de la electrólisis en 1834, acuñando términos como "electrodo" y "electrolito".

### Maxwell unifica el electromagnetismo

**James Clerk Maxwell** (1831–1879), descrito por Einstein como el físico más importante entre Newton y el propio Einstein, publicó en **1865** su artículo _A Dynamical Theory of the Electromagnetic Field_. Maxwell reunió las leyes experimentales de Coulomb, Gauss, Ampère y Faraday, añadió la **corriente de desplazamiento** como concepto propio, y formuló un sistema de ecuaciones que Oliver Heaviside reduciría después a las célebres cuatro ecuaciones de Maxwell. De ellas dedujo la existencia de **ondas electromagnéticas** que se propagan a una velocidad calculable de ~310.740.000 m/s — extraordinariamente cercana a la velocidad de la luz medida experimentalmente, lo que le llevó a concluir que la luz misma es una perturbación electromagnética. Heinrich Hertz confirmó experimentalmente la existencia de estas ondas en **1888**.

### La guerra de las corrientes: Edison contra Tesla y Westinghouse

A finales del siglo XIX estalló una feroz competencia industrial conocida como la **Guerra de las Corrientes** (~1882–1896). **Thomas Edison** inauguró en 1882 la primera central eléctrica en Pearl Street, Manhattan, distribuyendo corriente continua (DC) a 110 V. Sin embargo, la DC no podía transmitirse eficientemente más allá de ~1,6 km. **Nikola Tesla**, tras una breve y conflictiva colaboración con Edison, desarrolló el motor de inducción de corriente alterna (AC), cuyas patentes adquirió **George Westinghouse** en 1888 por ~2 millones de dólares.

Edison emprendió una campaña de desprestigio contra la AC: organizó electrocuciones públicas de animales, promovió la silla eléctrica con AC para asociarla con la muerte, y difundió desinformación sobre su peligrosidad. Los eventos decisivos fueron la **Exposición Universal de Chicago (1893)**, donde Westinghouse iluminó la "Ciudad Blanca" con AC por $399.000 frente a los $554.000 que pedía General Electric con DC, y la **central hidroeléctrica de las cataratas del Niágara (1895-1896)**, que transmitió energía AC a Buffalo, Nueva York. La AC venció porque los transformadores permitían elevar la tensión para transmisión eficiente y reducirla para consumo seguro. Hoy, prácticamente toda la electricidad del mundo se genera y distribuye mediante corriente alterna.

---

## 3. Corriente alterna y corriente directa

### Definiciones matemáticas y la onda sinusoidal

La **corriente continua (DC)** mantiene magnitud y dirección constantes en el tiempo: I(t) = I₀, V(t) = V₀. Sus fuentes principales son baterías, celdas solares y fuentes rectificadas. La **corriente alterna (AC)** varía cíclicamente en magnitud y sentido, y su forma más común es la onda sinusoidal:

> **v(t) = V_pico × sen(2πft + φ) = V_pico × sen(ωt + φ)**

donde V_pico es la amplitud máxima, f la frecuencia en hertzios (Hz), ω = 2πf la frecuencia angular (rad/s), T = 1/f el período, y φ el ángulo de fase inicial. Las frecuencias estándar mundiales son **50 Hz** (Europa, Asia, mayoría de Sudamérica) y **60 Hz** (Norteamérica, parte de Sudamérica). Japón constituye un caso único: 50 Hz en la región oriental (Tokio) y 60 Hz en la occidental (Osaka).

El **valor RMS** (Root Mean Square o valor eficaz) es la tensión/corriente DC equivalente que produce la misma disipación de potencia en una resistencia:

> **V_RMS = V_pico / √2 ≈ 0,707 × V_pico**

Para la red doméstica europea, V_RMS = **230 V** corresponde a un valor pico de **325 V**; en Norteamérica, V_RMS = 120 V corresponde a un pico de 170 V. El factor de cresta (V_pico/V_RMS) para una sinusoidal es siempre √2 ≈ 1,414, y el factor de forma (V_RMS/V_medio) es π/(2√2) ≈ 1,11.

### Por qué la AC conquistó la distribución eléctrica

La ventaja decisiva de la AC es la posibilidad de **transformar fácilmente su nivel de tensión** mediante transformadores, máquinas estáticas con eficiencias del 95–99% que no funcionan con DC. La relación de transformación es:

> **V₁/V₂ = N₁/N₂ = I₂/I₁**

Las pérdidas en transmisión por efecto Joule son P_pérdida = I²R_línea = P²R/V². Al duplicar la tensión, las pérdidas se reducen a **una cuarta parte**. La cadena típica de distribución opera así: generación a 11–25 kV → transformador elevador a **110–765 kV** para transmisión → transformador reductor a 4–35 kV para distribución → reductor final a 120/230 V para consumo doméstico. La AC también permite alternadores más simples (sin conmutador mecánico) y motores de inducción más robustos y económicos.

La DC conserva ventajas propias: almacenamiento de energía en baterías, compatibilidad directa con electrónica (procesadores, LEDs, circuitos integrados funcionan internamente con DC a 1,2–48 V), ausencia de reactancia, potencia reactiva y efecto skin, y menor interferencia electromagnética.

### HVDC: el renacimiento moderno de la corriente continua

Pese al triunfo histórico de la AC, la tecnología **HVDC** (High Voltage Direct Current) ha experimentado un renacimiento notable. Para cables submarinos de más de 40–60 km, la AC genera corrientes capacitivas excesivas que hacen la transmisión impráctica; la DC elimina este problema. En líneas aéreas de más de 500–900 km, las pérdidas HVDC son un 30–40% menores que las de AC. La tecnología también permite interconectar redes de diferente frecuencia (50 Hz ↔ 60 Hz) y ofrece control preciso del flujo de potencia.

La cadena HVDC opera como: Red AC₁ → Rectificador (AC→DC) → Línea/Cable DC → Inversor (DC→AC) → Red AC₂. Los convertidores modernos VSC (Voltage Source Converter, basados en IGBT) permiten incluso arrancar redes en "black start". El proyecto más ambicioso hasta la fecha es la línea **Changji–Guquan** en China: **3.293 km**, ±1.100 kV, **12.000 MW** de capacidad, operativa desde 2019. Otros ejemplos incluyen NorNed (580 km submarinos entre Noruega y Países Bajos, ±450 kV) y el Proyecto Rómulo (237 km submarinos entre la Península Ibérica y Mallorca).

### Rectificadores e inversores: la conversión entre mundos

Los **rectificadores** convierten AC en DC. El rectificador de media onda (un solo diodo) solo aprovecha el semiciclo positivo, con tensión media V_DC = Vp/π ≈ 0,318 × Vp. El **puente de Graetz** (cuatro diodos) rectifica ambos semiciclos y obtiene V_DC = 2Vp/π ≈ 0,636 × Vp, el doble. Un condensador de filtro en paralelo con la carga alisa la tensión; el rizado resultante es aproximadamente V_rizado ≈ I_carga/(f_rizado × C).

Los **inversores** realizan la conversión inversa (DC→AC) usando transistores de potencia (MOSFET, IGBT) que conmutan la DC alternando polaridad a frecuencia controlada, típicamente en topología de puente H con modulación SPWM para generar una onda casi sinusoidal. Los inversores de onda senoidal pura alcanzan THD < 3–5% y rendimientos superiores al 90%. Los **conversores DC-DC** (buck, boost, buck-boost) transforman niveles de tensión DC mediante conmutación a alta frecuencia (20–500 kHz), con eficiencias del 80–95%. La ecuación del conversor buck es V_out = D × V_in, y la del boost es V_out = V_in/(1−D), donde D es el ciclo de trabajo.

---

## 4. Circuitos eléctricos y análisis con ecuaciones

### Circuitos en serie y en paralelo

En un **circuito en serie**, los componentes comparten la misma corriente y la resistencia total es la suma: **R_total = R₁ + R₂ + ... + Rₙ**. La tensión se divide proporcionalmente según el **divisor de tensión**: V_Rk = V_total × (Rk/R_total). Ejemplo: tres resistores de 100, 200 y 300 Ω en serie alimentados a 12 V dan R_total = 600 Ω, I = 20 mA, y las caídas de tensión son 2 V, 4 V y 6 V respectivamente.

En un **circuito en paralelo**, todos los componentes comparten la misma tensión y la resistencia equivalente sigue **1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ**. La corriente se divide inversamente proporcional a la resistencia según el **divisor de corriente**: I₁ = I_total × R₂/(R₁ + R₂). Ejemplo: 200 Ω y 300 Ω en paralelo a 12 V dan R_total = 120 Ω, I_total = 100 mA, con 60 mA por la rama de 200 Ω y 40 mA por la de 300 Ω — la mayor corriente circula por la menor resistencia.

### Las leyes de Kirchhoff como principios de conservación

Las leyes de Kirchhoff son las herramientas fundamentales para analizar circuitos de cualquier topología. La **ley de corrientes (KCL)** establece que en cualquier nodo la suma de corrientes que entran es igual a la suma de las que salen: **ΣI_nodo = 0**. Su fundamento es la conservación de la carga eléctrica. La **ley de voltajes (KVL)** establece que en toda malla cerrada la suma algebraica de las diferencias de potencial es cero: **ΣV_malla = 0**. Su fundamento es la conservación de la energía. Combinando ambas leyes se obtiene un sistema de ecuaciones lineales que permite resolver cualquier circuito resistivo.

### Condensadores e inductores: componentes que almacenan energía

El **condensador** almacena energía en un campo eléctrico: C = Q/V (faradios), con energía E = ½CV². Su relación corriente-tensión es i(t) = C × dv/dt. En DC, se carga/descarga exponencialmente con constante de tiempo **τ = RC** (completamente cargado tras ~5τ), y en régimen permanente actúa como circuito abierto. En AC presenta una **reactancia capacitiva** X_C = 1/(ωC) que disminuye con la frecuencia — deja pasar mejor las altas frecuencias — y la corriente **adelanta 90°** a la tensión.

El **inductor** almacena energía en un campo magnético: V = L × dI/dt (henrios), con energía E = ½LI². Se opone a cambios bruscos de corriente con constante de tiempo τ = L/R, y en régimen permanente DC actúa como cortocircuito. En AC presenta una **reactancia inductiva** X_L = ωL que aumenta con la frecuencia, y la tensión **adelanta 90°** a la corriente.

### Impedancia, circuitos RLC y resonancia

La **impedancia** Z combina resistencia y reactancia en notación compleja: **Z = R + jX**, donde j = √(−1). Para un circuito RLC en serie:

> **Z = R + j(ωL − 1/(ωC))**

con módulo |Z| = √(R² + (X_L − X_C)²) y ángulo de fase φ = arctan((X_L − X_C)/R). Cuando X_L > X_C el circuito es inductivo; cuando X_C > X_L, capacitivo. En la **frecuencia de resonancia**:

> **f₀ = 1/(2π√(LC))**

las reactancias se cancelan, la impedancia se reduce al mínimo Z = R, la corriente alcanza su máximo, y tensión y corriente están en fase. El **factor de calidad** Q = ω₀L/R = (1/R)√(L/C) determina la selectividad: un Q alto produce una curva de resonancia estrecha (ancho de banda BW = f₀/Q). Notablemente, la tensión en L o C en resonancia puede ser **Q veces** la tensión de la fuente.

---

## 5. Aplicaciones prácticas y dispositivos

### Motores, generadores y transformadores

El **motor eléctrico** convierte energía eléctrica en mecánica mediante la fuerza de Lorentz: F = BIL. En un motor DC, un conmutador invierte periódicamente la corriente en las bobinas del rotor para mantener el giro continuo; la ecuación fundamental es V = E_back + I×R_a, donde E_back es la fuerza contraelectromotriz proporcional a la velocidad. El **motor de inducción AC** (inventado por Tesla) es más robusto y económico: la corriente alterna trifásica crea un campo magnético rotatorio a velocidad de sincronismo n_s = 120f/p, que induce corrientes en el rotor generando par motor. El rotor gira a velocidad ligeramente menor (deslizamiento típico del 2–5%), y la eficiencia de motores industriales modernos alcanza el **85–97%**.

El **generador** opera según el principio inverso: al girar una bobina en un campo magnético, el flujo magnético cambiante induce EMF(t) = NBAω × sen(ωt). Los alternadores (AC) usan anillos rozantes y requieren menos mantenimiento que las dinamos (DC), que usan un colector de delgas. Prácticamente toda la electricidad mundial se genera con alternadores.

El **transformador** funciona por inducción mutua entre dos bobinas acopladas magnéticamente: V₁/V₂ = N₁/N₂. Las pérdidas incluyen las del cobre (P_Cu = I²R, efecto Joule en los devanados) y las del hierro (corrientes de Foucault, reducidas laminando el núcleo, e histéresis magnética, reducida con acero al silicio). Los transformadores modernos de potencia alcanzan eficiencias del 95–99%.

### Diodos y transistores: las bases de la electrónica

El **diodo** es una unión PN que permite el paso de corriente en una sola dirección. En polarización directa, al superar la barrera de potencial (~**0,7 V** en silicio), conduce corriente; en inversa, la bloquea prácticamente por completo. Sus aplicaciones incluyen rectificación, LEDs (que emiten fotones cuando electrones y huecos se recombinan) y regulación de tensión (diodos Zener). Los LEDs presentan tensiones directas características: rojo ~1,8 V, verde ~2,2 V, azul/blanco ~3,0–3,5 V.

El **transistor BJT** tiene tres capas semiconductoras (NPN o PNP) y tres terminales: emisor, base y colector. Una pequeña corriente de base I_B controla una corriente de colector mucho mayor: **I_C = β × I_B** (β típico: 50–300). En modo corte actúa como interruptor abierto; en saturación (V_CE ≈ 0,2 V), como interruptor cerrado; en zona activa, como amplificador lineal. El **transistor MOSFET**, controlado por tensión en lugar de corriente, domina los circuitos integrados modernos gracias a su impedancia de entrada extremadamente alta y su velocidad de conmutación. Un procesador actual contiene **miles de millones** de MOSFETs, y la tecnología CMOS es la base de toda la electrónica digital.

### Seguridad eléctrica: proteger la vida humana

La corriente eléctrica es potencialmente letal. Con piel húmeda (~1.000 Ω de impedancia), un contacto con 230 V produce una corriente de 230 mA, muy por encima del umbral de **fibrilación ventricular** (50–100 mA). Los umbrales críticos son: percepción a 0,5–1 mA, contracción muscular sostenida ("no puedo soltar") a 15–30 mA, dificultad respiratoria a 30–50 mA, y fibrilación ventricular probable a 100–300 mA.

Los sistemas de protección incluyen **fusibles** (filamentos calibrados que se funden al exceder una corriente crítica, interrumpiendo el circuito), **disyuntores magnetotérmicos** (reutilizables, combinan protección térmica con bimetal para sobrecargas y magnética con electroimán para cortocircuitos), la **puesta a tierra** (cable verde-amarillo conectado a un electrodo enterrado, con resistencia máxima recomendada ≤10 Ω, que proporciona un camino de baja resistencia para corrientes de fuga), y el **interruptor diferencial** (RCD/GFCI), que compara continuamente la corriente de fase con la de neutro mediante un toroide magnético y desconecta en menos de 30 ms si detecta una diferencia ≥**30 mA**, protegiendo contra electrocución por contactos directos e indirectos.

---

## Conclusión

La corriente eléctrica, definida formalmente como I = dQ/dt, emerge de la interacción entre campos eléctricos aplicados y electrones de conducción cuya velocidad de deriva no supera fracciones de milímetro por segundo — aunque la señal se propaga a dos tercios de la velocidad de la luz. El triunfo de la corriente alterna sobre la continua en la distribución eléctrica fue, en última instancia, un triunfo del transformador: la capacidad de elevar la tensión para reducir pérdidas cuadráticas en transmisión. Sin embargo, la dualidad AC/DC lejos de resolverse ha evolucionado hacia una convivencia sofisticada, donde los sistemas HVDC a ±1.100 kV transportan decenas de gigavatios y la electrónica de potencia convierte entre ambos mundos con eficiencias superiores al 95%.

Tres ideas merecen destacarse.

- **Primera**, la extraordinaria lentitud de los electrones individuales frente a la velocidad casi instantánea de la señal revela que la corriente no es un flujo de partículas en el sentido cotidiano, sino una onda de presión electromagnética que moviliza simultáneamente todo el gas electrónico.
- **Segunda**, la resonancia en circuitos RLC (f₀ = 1/(2π√(LC))) ilustra cómo la interacción entre almacenamiento eléctrico y magnético puede amplificar tensiones por un factor Q, principio que subyace desde la sintonización de radio hasta los filtros de telecomunicaciones.
- **Tercera**, la historia muestra que las ideas correctas — la ley de Ohm rechazada durante décadas, la AC combatida con electrocuciones de animales — a menudo enfrentan resistencia feroz antes de imponerse por su superioridad técnica. La corriente eléctrica, fenómeno que unificó electricidad, magnetismo y óptica bajo las ecuaciones de Maxwell, sigue siendo el vector fundamental de la energía y la información en el siglo XXI.

---

## ⚡ La Paradoja del Cable: ¿Por qué los datos viajan a la velocidad de la luz si los electrones van a milímetros por segundo?

### 🎯 El 20% que explica el 80% del fenómeno

Hay **dos cosas completamente distintas** viajando por el cable, y confundirlas es el error clásico:

|Concepto|Velocidad|¿Qué es?|
|---|---|---|
|**Velocidad de deriva** del electrón|~0.45 mm/s|El electrón moviéndose físicamente|
|**Velocidad de propagación** de la señal|~2×10⁸ m/s (~⅔ de la luz)|La onda electromagnética en cadena|

---

### 🔬 ¿Por qué los electrones van tan lentos? (El obstáculo microscópico)

Los metales tienen millones de electrones libres flotando en una "nube" desordenada. Cuando aplicas voltaje, esos electrones intentan moverse, **pero chocan constantemente** con la red de iones del material (los átomos inamóviles del cable). Esos choques los frenan tanto que su velocidad promedio neta (_velocidad de deriva_) es de fracciones de milímetro por segundo.

---

### 🌊 ¿Por qué la señal va a casi la velocidad de la luz? (La reacción en cadena)

**Aquí está la clave:** **la información no la lleva un electrón viajando de un extremo al otro.** Los electrones se _repelen_ entre sí (carga negativa = repulsión). Cuando el primer electrón recibe el empuje del voltaje, empuja al siguiente, que empuja al siguiente... creando una **onda de presión electromagnética en cadena** que recorre el cable a casi la velocidad de la luz.

> **La señal es la ola, no el agua.**

---

### 🚰 La Analogía Perfecta: La Tubería Llena de Agua

Imagina una manguera **completamente llena de agua** de punta a punta:

- Empujas agua por un extremo → **inmediatamente** sale agua por el otro.
- ¿Se movió la molécula de agua del inicio hasta el final? **No.**
- La **presión** (= señal electromagnética) viajó casi instantáneamente.
- El **agua individual** (= electrón) apenas se desplazó.

Exactamente así funciona un cable de cobre.

---

### 📐 Dato concreto para solidificar la intuición

En un cable de cobre calibre 12 con 20 A de corriente:

- Electrón individual: **0.45 mm/s** → para cruzar un cable transatlántico de 10,000 km le tomaría **miles de años**.
- La señal: **2×10⁸ m/s** → cruza ese mismo cable en **~0.05 segundos**.

La diferencia: el electrón lleva su cuerpo, la señal lleva solo el _efecto dominó_.

---

### 🧠 Feynman en una oración

> "El cable ya está lleno de electrones libres. El voltaje les dice en cuál dirección empujarse. La información viaja con ese empuje, no con los electrones."

---

## 🌐 Latencia Real en Telecomunicaciones: De la Física al Ping

### 🎯 El 20% esencial (Pareto)

La latencia total de una red **NO es solo el cable**. Es la suma de 4 componentes:

|Componente|¿Qué es?|Orden de magnitud|
|---|---|---|
|**Propagación**|Tiempo físico del cable (t = d/v)|Dominante en WAN / intercontinental|
|**Transmisión**|Tiempo en poner los bits en el cable|Dominante en enlaces lentos|
|**Procesamiento**|CPUs de routers y switches|Microsegundos|
|**Cola (queuing)**|Espera en buffers por congestión|Variable, puede dominar en peak|

---

### 1️⃣ Latencia de Propagación: la física pura

**Fórmula:** `t = d / v`

La señal en **cobre** viaja a ≈ **2×10⁸ m/s** (⅔ de la luz).

> 🔊 **Analogía del trueno:** La onda ya partió, pero tiene un límite de velocidad. Cuanto más lejos estás del rayo, más tarde escuchas el trueno. Sin importar qué tan bueno sea tu oído, no puedes vencer ese retardo físico.

**Ejemplos reales calculados:**

|Trayecto|Distancia|Latencia de propagación|
|---|---|---|
|LAN (un edificio)|~100 m|~0.5 µs → **inapreciable**|
|Ciudad a ciudad (500 km)|500 km|~2.5 ms|
|Cable submarino NorNed (Noruega–Países Bajos)|580 km|**~2.9 ms** _(calculado del notebook)_|
|Cable transatlántico (NY–Londres)|~6,500 km|**~32 ms**|
|Ping transatlántico real (ida + vuelta)|×2 + routers|**~70–80 ms** medido|

---

### 2️⃣ ¿Por qué la fibra tiene _más_ latencia de propagación que el cobre?

Aquí el contra ejemplo favorito de los exámenes:

- Luz en el vacío: **3×10⁸ m/s**
- Luz en fibra de vidrio (índice de refracción n≈1.5): **2×10⁸ m/s** ← ¡igual que el cobre!
- Señal en cobre coaxial: **~2×10⁸ m/s**

> 🪟 **Analogía:** La luz en vidrio es como correr en una alberca vs. correr en tierra. En el vacío va a 300,000 km/s, pero el vidrio la frena exactamente hasta ~200,000 km/s, igual que el cobre.

**La fibra gana en latencia total** no por velocidad de propagación, sino porque:

- Tiene **menos pérdida de señal** → cables más largos sin repetidores → menos saltos → menos latencia de procesamiento acumulada.
- Soporta **mayor ancho de banda** → menos latencia de transmisión en enlaces saturados.

---

### 3️⃣ Los 4 componentes de latencia con analogía de autopista

Imagina que el paquete de datos es un **camión en autopista**:

```
🏭 ORIGEN → [Peaje] → ——————carretera—————— → [Peaje] → 🏭 DESTINO
```

|Componente|Analogía|Red Real|
|---|---|---|
|**Propagación**|Distancia del viaje a 120 km/h|Cable físico a ~2×10⁸ m/s|
|**Transmisión**|Tiempo en cargar el camión|Tiempo en serializar los bits|
|**Procesamiento**|Tiempo en el peaje|Router revisando tabla de enrutamiento|
|**Queuing**|Cola de camiones en el peaje|Buffer lleno en hora pico|

En una **LAN de oficina**, el tiempo de propagación es insignificante (<1 µs). Domina el **queuing** si hay congestión.

En un **enlace intercontinental**, el tiempo de propagación es el **pie forzado** que no puedes reducir sin doblar la física del universo.

---

### 4️⃣ El límite infranqueable: la velocidad de la luz

**El problema de los juegos online transoceánicos:**

- Un jugador en México (CDMX) vs. uno en Tokio → ~11,000 km de cable.
- Latencia de propagación mínima teórica: `11,000,000 m / 200,000,000 m/s` = **55 ms solo de ida**.
- Ida + vuelta (RTT): mínimo **110 ms**.
- Con routers y cables no rectilíneos: **~150–200 ms reales**.

> Ningún CDN, ningún servidor mejor, ninguna fibra mágica puede reducir eso. **Es física, no ingeniería.**

---

### 🧠 Feynman en dos oraciones

> "La latencia de propagación es la deuda de velocidad de la luz que pagas por la distancia. Todo lo demás —routers, colas, protocolos— son cargos adicionales que sí puedes optimizar."

---

## 🔄 El Loop Infinito: Electricidad ↔ Magnetismo

### 🎯 El 20% que sostiene el 80% del mundo moderno (Pareto)

> **Electricidad y magnetismo son el mismo fenómeno visto desde dos ángulos.** Uno _siempre_ induce al otro. Dominar esa dualidad bidireccional te da generadores, motores y transformadores — las tres máquinas que sostienen la civilización.

---

### ⚙️ Los Dos Engranajes Invisibles

Imagina dos engranajes conectados por una correa invisible. **Girar uno obliga al otro a girar.** Esto es exactamente la relación electricidad–magnetismo:

```
   ┌──────────────────────────────────────────────────────┐
   │                                                      │
   │   ⚡ CORRIENTE ══════▶ 🧲 CAMPO MAGNÉTICO           │
   │   (Ørsted / Ampère)     "El cable se vuelve imán"   │
   │                                                      │
   │   🧲 CAMPO MAGNÉTICO ══════▶ ⚡ CORRIENTE            │
   │   VARIABLE (Faraday)     "El imán empuja electrones" │
   │                                                      │
   └──────────────────────────────────────────────────────┘
```

---

### 1️⃣ Dirección A → Electricidad Crea Magnetismo (Ørsted / Ampère)

**El descubrimiento (1820):** Ørsted pasa corriente por un cable y la aguja de una brújula cercana **se desvía**. Primera prueba de que electricidad y magnetismo están conectados.

**La ley:** Ampère lo matematiza — toda corriente eléctrica genera un campo magnético circular a su alrededor. Incluso demostró que dos cables paralelos con corriente se atraen o repelen como si fueran imanes físicos.

> 🌊 **Analogía:** Imagina que cada electrón moviéndose es una piedra cayendo al agua. Su movimiento crea ondas circulares (el campo magnético). No puedes mover cargas sin "ondear" el espacio magnético a su alrededor.

**Aplicación directa → El MOTOR eléctrico:** Si inyectas corriente en una bobina dentro de un imán permanente, el campo magnético de la corriente interactúa con el del imán → aparece una fuerza mecánica (fuerza de Lorentz: **F = BIL**) → el rotor **gira**.

```
⚡ Corriente → 🧲 Campo Magnético → 💪 Fuerza Mecánica → 🔄 Movimiento
```

---

### 2️⃣ Dirección B → Magnetismo Crea Electricidad (Faraday / Lenz)

**El descubrimiento (1831):** Faraday mueve un imán dentro de una bobina de cable y un galvanómetro registra corriente. **Pero con un truco crucial:**

> ⚠️ **Un imán QUIETO no genera nada.** El campo magnético debe estar **cambiando** — acercándose, alejándose o rotando. Sin cambio, sin corriente.

**La ecuación:** `EMF = −dΦ_B / dt`

Donde el signo negativo es la **Ley de Lenz**: la corriente inducida siempre se **opone** al cambio que la creó. La naturaleza "resiste" el cambio.

> 🚪 **Analogía:** Imagina una puerta con resorte. Si la empujas (cambias el flujo magnético), el resorte reacciona empujando en sentido contrario (Lenz). Si dejas de empujar (campo constante), la puerta no hace nada.

**Aplicación directa → El GENERADOR eléctrico:** Giras mecánicamente una bobina dentro de un campo magnético → el flujo magnético que "ve" la bobina cambia constantemente → se induce corriente alterna.

```
🔄 Movimiento → 🧲 Campo cambiante → ⚡ Corriente inducida
```

---

### 3️⃣ El Tercer Pilar: El Transformador (Inducción Mutua)

El transformador es la prueba más elegante de la bidireccionalidad. **No tiene partes móviles** — todo es inducción pura:

```
Bobina 1 (Primaria)              Bobina 2 (Secundaria)
   ⚡ Corriente AC         →→→      ⚡ Corriente inducida
   🧲 Campo magnético      →→→      🧲 Campo recibido
   cambiante                         SIN contacto físico
```

1. Corriente alterna entra en la bobina primaria → genera campo magnético **oscilante** (Ampère)
2. Ese campo cambiante atraviesa la bobina secundaria → induce un nuevo voltaje (Faraday)
3. Si la segunda bobina tiene **más espiras** → el voltaje sube. Menos espiras → baja.

> 📦 **Analogía:** Dos diapasones idénticos uno al lado del otro. Golpeas uno y el otro vibra _sin tocarlo_. La "vibración" (campo magnético alterno) se transmite por el espacio.

**¿Por qué es crítico?** Sin transformadores no habría red eléctrica. Las centrales generan a ~20 kV, se eleva a **765 kV** para transmitir a larga distancia (minimiza pérdidas por calor: P = I²R), y se reduce a 120/220V antes de llegar a tu casa.

---

### 🌍 La Cadena Energética del Mundo Moderno

Todo conectado por la misma dualidad:

```
💧 Agua / 🔥 Vapor / 💨 Viento
          │
          ▼
   [GENERADOR]     ← Faraday: movimiento → electricidad
          │
          ▼
   [TRANSFORMADOR]  ← Inducción mutua: sube voltaje a 765 kV
          │
          ▼
   ═══ Líneas de transmisión (cientos de km) ═══
          │
          ▼
   [TRANSFORMADOR]  ← Inducción mutua: baja voltaje a 220V
          │
          ▼
   [MOTOR / Máquina] ← Ampère: electricidad → movimiento
```

> **Prácticamente el 100% de la electricidad del mundo se genera con alternadores** (turbinas girando bobinas en campos magnéticos). Solar y baterías son la excepción.

---

### 🧪 Ejercicio Mental para Solidificar (del notebook)

> Si giras la manivela de un generador conectado a una bombilla encendida, sientes resistencia física (Lenz se opone). Si la bombilla se funde (circuito abierto), **la manivela se vuelve repentinamente facilísima de girar.** ¿Por qué?
> 
> → Sin circuito cerrado → sin corriente inducida → sin campo magnético opositor → sin resistencia mecánica.

Esto **demuestra físicamente** que el magnetismo inducido por la corriente crea una fuerza real que se opone al movimiento original.

---

### 🧠 Feynman en Dos Oraciones

> "Mueve cargas y creas un imán. Mueve un imán y creas corriente. Esto no es coincidencia — son el mismo fenómeno. Y con esa simetría la humanidad construyó toda su infraestructura eléctrica."

---

## 🏗️ Bandas de Energía: Por Qué Unos Materiales Conducen y Otros No

### 🎯 El 20% esencial (Pareto)

> **Todo depende de un único parámetro: la distancia entre la banda de valencia y la banda de conducción (el bandgap).** Ese "salto" determina si los electrones pueden moverse libremente o no — y la temperatura decide si tienen suficiente energía para saltarlo.

---

### 1️⃣ Las Bandas de Energía: Los "Pisos Permitidos" del Átomo

En mecánica cuántica, los electrones **no pueden estar en cualquier nivel de energía** — solo en niveles específicos (como peldaños de una escalera, no una rampa continua).

Cuando millones de átomos se juntan formando un sólido, esos peldaños individuales se fusionan en **bandas**:

```
   ═══════════════════  Banda de CONDUCCIÓN  ═══════
         ↑
      BANDGAP            ← La brecha prohibida (el abismo)
         ↓
   ═══════════════════  Banda de VALENCIA    ═══════
```

> 🏢 **Analogía del edificio:** Imagina un edificio de dos pisos.
> 
> - **Planta baja (Valencia):** Los electrones están sentados, "ligados" al átomo. No conducen.
> - **Piso de arriba (Conducción):** Electrones libres, moviéndose por todo el edificio. Sí conducen.
> - **El pasillo entre pisos (Bandgap):** La escalera que necesitan subir para conducir.

La pregunta clave es: **¿qué tan alto es ese pasillo?**

---

### 2️⃣ Cómo el Bandgap Define al Material

Aquí está la clasificación completa, con el 20% de datos que lo explican todo:

|Material|Bandgap|Situación de los electrones|Ejemplo|
|---|---|---|---|
|**Conductor**|0 eV (bandas se solapan)|Electrones _ya están_ en conducción|Cobre, plata, oro|
|**Semiconductor**|~0.5–2 eV (brecha pequeña)|Electrones pueden saltar con calor/luz|Silicio (1.1 eV), Germanio (0.67 eV)|
|**Aislante**|>5 eV (brecha enorme)|Electrones nunca llegan a conducción|Vidrio (~9 eV), Diamante (5.5 eV)|

```
CONDUCTOR      SEMICONDUCTOR      AISLANTE
╔══════════╗   ╔══════════╗      ╔══════════╗
║ COND.    ║   ║ COND.    ║      ║ COND.    ║
╠══════════╣   ║          ║      ║          ║
║ VALE.    ║   ║ ~ 1 eV   ║      ║          ║
╚══════════╝   ╠══════════╣      ║  > 5 eV  ║
  (solapadas)  ║ VALE.    ║      ╠══════════╣
               ╚══════════╝      ║ VALE.    ║
                                 ╚══════════╝
```

> 🚪 **Analogía de la puerta:** El bandgap es una puerta con cerradura. En conductores la puerta ya está abierta. En semiconductores la puerta tiene cerradura débil — con suficiente calor o luz la abres. En aislantes la cerradura es un búnker — no hay energía térmica ordinaria que la abra.

---

### 3️⃣ La Temperatura Como "Llave de Energía"

Aquí entra la conexión con todo lo que estudiamos antes: las **colisiones térmicas** del modelo de Drude.

La energía térmica disponible a temperatura ambiente es aproximadamente **~0.026 eV** (~kT a 300K).

Esto explica todo:

**Para AISLANTES (bandgap > 5 eV):**

```
Energía térmica: 0.026 eV
Bandgap: ~9 eV
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
¿Puede el electrón saltar? ❌ Nunca.
→ No hay portadores libres → No conduce.
```

**Para SEMICONDUCTORES (bandgap ~1 eV):**

```
Energía térmica a 20°C: demasiado poca
Energía térmica a 100°C: algo más...
Energía de un fotón de luz: ~1–3 eV ← ¡suficiente!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
¿Puede el electrón saltar? ✅ Con calor O con luz.
→ Más temperatura = más portadores = más conductividad.
```

**Para CONDUCTORES (bandgap = 0):**

```
Las bandas ya se solapan.
Los electrones ya están libres desde 0 K.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
No necesitan saltar nada → Siempre conducen.
```

---

### 4️⃣ La Paradoja Temperatura: Conductores vs. Semiconductores

Este es el punto más contraintuitivo — y el más importante para telecomunicaciones:

### 🥵 Conductores: Más Calor = Más Resistencia

```
Temperatura ↑ → Iones de la red vibran más → Más colisiones → Electrones frenados más
→ Resistencia AUMENTA
```

> 🎯 Conectado con el modelo de Drude que vimos: las colisiones son el obstáculo. Más calor = más obstáculos en el camino.

Ejemplo: La resistencia del cobre aumenta ~0.4% por cada °C. Un cable que se calienta transmite peor.

### 🧊 Semiconductores: Más Calor = Menos Resistencia

Aquí ocurre algo completamente diferente — hay **dos efectos compitiendo**:

```
Temperatura ↑
    ├── Efecto 1: Más vibraciones → más colisiones → SUBE resistencia (igual que metales)
    └── Efecto 2: Más electrones saltan el bandgap → más portadores → BAJA resistencia

¿Cuál gana? El Efecto 2 DOMINA → Resistencia BAJA con temperatura.
```

> 🌊 **Analogía:** Imagina una piscina con pocas personas (semiconductor a baja T). Aunque el agua esté calmada, hay pocos nadadores para "llevar el mensaje". Al calentar el agua (subir T), salen muchísimos más nadadores a la piscina — y aunque el agua se agite más (más colisiones), el número de nadadores crece tanto que la "corriente de personas" aumenta igual.

**Esta diferencia tiene consecuencias prácticas enormes:**

|Aplicación|Material|¿Por qué?|
|---|---|---|
|Termistor NTC (sensor de temperatura)|Semiconductor|Resistencia baja al calentar → detecta temperatura|
|Cables de alta tensión|Cobre|Se calientan → resistencia sube → pérdidas de energía|
|Transistores en CPUs|Silicio (semiconductor)|A alta T el chip falla porque fluye corriente "de fuga" no controlada|
|Paneles solares|Silicio (semiconductor)|Fotones de luz saltan electrones al banda de conducción → genera corriente|

---

### 🔗 Mapa Mental del Todo

```
Bandgap = 0         → CONDUCTOR    → e⁻ siempre libres → Resistencia sube con T
Bandgap < 2 eV      → SEMICONDUCTOR → e⁻ saltan con calor/luz → Resistencia baja con T
Bandgap > 5 eV      → AISLANTE     → e⁻ nunca saltan → No conduce
```

---

### 🧠 Feynman en Dos Oraciones

> "Los electrones deben saltar una brecha de energía para poder conducir. En conductores esa brecha no existe — ya están arriba. En semiconductores la temperatura o la luz les da el empujón que les falta. En aislantes el salto es tan alto que ninguna fuerza ordinaria los mueve."

---

---

## 🌀 Efecto Skin (Piel) — Por qué la frecuencia limita los cables

> [!info] Este concepto es el puente directo entre la corriente eléctrica y los límites físicos del cableado Ethernet.

### ¿Qué es el efecto skin?

A alta frecuencia, la corriente alterna **no se distribuye uniformemente** por la sección transversal del conductor. Se concentra en una capa superficial delgada llamada **piel** o _skin_. A mayor frecuencia, más delgada es esa capa y menos sección efectiva usa el conductor.

La **profundidad de penetración** (δ) define el espesor de esa capa:

> **δ = √(2ρ / ωμ) = √(ρ / πfμ)**

donde ρ es la resistividad del material, ω = 2πf la frecuencia angular y μ la permeabilidad magnética.

Para cobre (ρ = 1,7×10⁻⁸ Ω·m, μ ≈ μ₀):

| Frecuencia | Profundidad de penetración δ |
|------------|------------------------------|
| 60 Hz (red doméstica) | ~8,5 mm |
| 1 MHz | ~66 µm |
| 31,25 MHz (Fast Ethernet) | ~12 µm |
| 100 MHz | ~6,6 µm |
| 1 GHz | ~2,1 µm |

### Consecuencia práctica

Al reducirse la sección efectiva, la **resistencia efectiva aumenta** con la frecuencia: R_eff ∝ √f. Esto genera más disipación por efecto Joule, más calor y mayor atenuación de la señal con la distancia.

### Conexión con Ethernet

Este es exactamente el motivo por el que Fast Ethernet usa **MLT-3**: al reducir la frecuencia fundamental de 125 MHz a **31,25 MHz**, la profundidad de penetración pasa de ~6,6 µm a ~12 µm — casi el doble de sección efectiva, la mitad de resistencia, y la señal puede viajar **100 m** sin atenuarse fatalmente en Cat5.

> [!tip] Regla práctica: a mayor frecuencia → menos sección efectiva → más resistencia → más atenuación → menos distancia posible.

---

## 🧠 Feynman Check

> [!tip] Explica la corriente eléctrica sin fórmulas ni jerga. Si no puedes, vuelve a las secciones anteriores.

Piensa en un cable como una **manguera ya llena de canicas** de punta a punta. La corriente eléctrica es el movimiento de esas canicas.

- **Voltaje** = la presión que empuja las canicas.
- **Resistencia** = los baches dentro de la manguera que frenan el avance.
- **Ley de Ohm** = cuántas canicas se mueven depende de la presión y de lo difícil que sea el camino.

La clave que confunde a todos: si empujas una canica por un extremo, **sale una del otro extremo al instante** — no porque esa canica viajó todo el camino, sino porque la manguera ya estaba llena y el empujón se transmitió en cadena. Eso explica por qué la señal eléctrica viaja casi a la velocidad de la luz aunque cada electrón se mueva a milímetros por segundo.

- **DC** = empujas las canicas siempre en la misma dirección.
- **AC** = mueves la mano hacia adelante y atrás; las canicas vibran en su sitio pero transmiten la onda. 

***La ventaja:*** con transformadores puedes cambiar la "fuerza" de esa vibración fácilmente, por eso ganó la Guerra de las Corrientes.

---
### **Mí Definición (técnica de Feynman):**  

La corriente eléctrica es como una onda de presión invisible que viaja a la velocidad de la luz por un cable, empujando casi al instante a un grupo de electrones lentos y desordenados que ya estaban ahí adentro, igual que cuando metes una canica por un lado de un tubo lleno de canicas y sale otra inmediatamente por el lado contrario.

### El Modelo de la Tubería de Agua

Imagina un alambre de cobre puro. Para tus ojos es sólido, pero a nivel microscópico, está lleno de pequeñas partículas llamadas **electrones**. Normalmente, se mueven de forma caótica sin ir a ningún lado en particular.  
  
Ahora, imagina una tubería llena de agua. Si la tubería está horizontal, el agua no fluye. Pero si enciendes una **bomba de agua**, creas presión. Esa presión obliga al agua a empujarse y moverse en una dirección.  
  
En nuestro alambre, la **bomba de agua es una batería**. La "presión" que crea la batería empuja a esos electrones libres para que se muevan todos juntos en la misma dirección a lo largo del cable. 

**Ese flujo organizado y continuo de electrones es exactamente lo que llamamos Corriente Eléctrica.**

---
## La Distinción Rigurosa: La Trinidad Eléctrica

Uno de los errores más comunes es confundir voltaje con corriente. Esta sección desglosa las tres fuerzas interdependientes que gobiernan los circuitos básicos (Ley de Ohm). Utiliza la calculadora interactiva para observar cómo la alteración de una variable afecta inmediatamente a la corriente.

### [[voltaje|Voltaje (V)]]

**Diferencia de Potencial.** Es la "presión" o fuerza que empuja los electrones. Se mide en Voltios. Ver [[voltaje]] para una explicación física detallada y el análisis electroquímico de una batería.

Analogía: La presión del agua en la tubería.

### Intensidad (I)

**La Corriente en sí.** Es la cantidad de electrones que fluyen por un punto por segundo. Se mide en Amperios.

Analogía: El volumen de agua que sale de la manguera.

### Resistencia (R)

**La Oposición.** Todo aquello que frena o dificulta el flujo de electrones. Se mide en Ohmios (Ω).

Analogía: Piedras o estrechamientos dentro de la tubería.


---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| #   | Fecha      | ¿Recordé bien? | Ajuste |
| --- | ---------- | -------------- | ------ |
| 1 (Día 1)  | 2026-06-27 | ✅             | Reinicio desde Día 1 tras hueco largo |
| 2 (Día 7)  | 2026-07-04 | ✅ / ⚠️ / ❌     |        |
| 3 (Día 30) | 2026-07-27 | ✅ / ⚠️ / ❌     |        |

---

## 🔗 Relacionado

- [[fotones-virtuales]] — los fotones virtuales son los mediadores del campo electromagnético que sustenta la corriente
- [[la-composicion-de-la-materia-atomos]] — base física fundamental: estructura atómica y comportamiento de los electrones
- [[la-corriente-electrica-en-el-hogar]] — aplicación práctica: el recorrido de la corriente desde la central hasta el enchufe
- [[onda-electromagnetica]] — la corriente alterna genera ondas EM; base física compartida
- [[fast-ethernet-ieee-802-3u]] — el efecto skin explica por qué MLT-3 reduce la frecuencia y por qué el límite es 100 m
- [[señalizacion-diferencial]] — el par trenzado minimiza el efecto skin al distribuir la corriente de forma simétrica

