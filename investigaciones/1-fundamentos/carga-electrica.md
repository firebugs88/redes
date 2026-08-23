---
type: research
fuente: Explicación del profesor de física (sesión con el asistente)
fecha: 2026-08-12
relevancia: alta
dominio: física / fundamentos - electromagnetismo
review-count: 0
ultimo-review: 2026-08-12
next-review: 2026-08-24
nivel-retencion: 0
tags:
  - research
  - tema/física
  - tema/electromagnetismo
  - prioridad/alta
  - loci/anclado
  - review/pendiente
---

# 🔬 La Carga Eléctrica

### **Mi definición en una frase:**

> [!important] La carga eléctrica es la **propiedad primitiva de la materia que decide si una partícula participa (y con qué signo) en la interacción electromagnética**: un número que solo aparece en múltiplos enteros de $e$, que nunca se crea ni se destruye, y que es el mismo en todos los sistemas de referencia.

> [!important] La carga eléctrica **no es una sustancia ni un fluido**: es una **propiedad fundamental de la materia**, como la masa.

> [!important] No podemos decir “está hecha de…” porque no está hecha de algo más básico. La definimos por sus efectos:
> - Las cargas ejercen fuerzas entre sí.
> - Las cargas crean campos eléctricos.
> - Las cargas en movimiento producen corriente eléctrica.

---
## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas palabras clave:
> `Cuantización (e)` · `Conservación local` · `Dos signos` · `Invariancia relativista` · `Coulomb 1/r²` · `Culombio` · `Quarks fraccionarios` · `Electrización (frotamiento/contacto/inducción)` · `Polarización` · `Jaula de Faraday`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

1. **La carga es la "credencial" de la fuerza electromagnética.** Igual que la masa es lo que te hace sentir la gravedad, la carga es lo que te hace sentir el campo eléctrico. Sin carga, una partícula es invisible para el electromagnetismo (fotón, neutrón neto, neutrino).
2. **Está cuantizada:** toda carga libre observable es $Q = n\,e$ con $n$ entero y $e = 1{,}602176634\times10^{-19}\ \text{C}$ (valor **exacto por definición** del SI desde 2019). No existe media carga elemental suelta.
3. **Se conserva localmente,** no solo en total: la carga no desaparece en un punto para reaparecer en otro; tiene que *fluir*. Eso es la ecuación de continuidad $\partial\rho/\partial t + \nabla\cdot\mathbf{J} = 0$, y es el motivo físico de la ley de nodos de Kirchhoff.
4. **Hay dos signos porque la fuerza puede atraer y repeler.** No son "algo" y "ausencia de algo": son un número con signo. Por eso el universo puede ser neutro y por eso el electromagnetismo, siendo $10^{36}$ veces más fuerte que la gravedad, no domina el cosmos: se cancela a sí mismo.
5. **Es un invariante relativista.** Un electrón tiene exactamente $-e$ esté quieto o al 99,99 % de $c$. La masa-energía cambia con la velocidad; la carga no. De esa asimetría sale el magnetismo.

---

## 1. ¿Qué es realmente la carga? (y por qué la pregunta es más honesta de lo que parece)

Empecemos con honestidad intelectual, porque aquí es donde casi toda la divulgación miente por omisión.

**La carga eléctrica no se "explica" reduciéndola a otra cosa.** Es una *propiedad primitiva*, como lo son la masa o el espín. Cuando preguntás "¿qué ES la carga?", la física no tiene una respuesta del tipo "es un pedacito de X". Lo que sí tiene —y es muchísimo— es una descripción operacional completa:

> La carga es **la magnitud que determina cuánta fuerza siente una partícula en un campo electromagnético, y cuánto campo genera ella misma.**

Formalmente, en la fuerza de Lorentz:

$$\mathbf{F} = q\,(\mathbf{E} + \mathbf{v}\times\mathbf{B})$$

donde $q$ es la carga (C), $\mathbf{E}$ el campo eléctrico (V/m), $\mathbf{B}$ el campo magnético (T) y $\mathbf{v}$ la velocidad. Fijate en el papel de $q$: es simultáneamente **el sensor** (cuánta fuerza recibo) y **la fuente** (cuánto campo emito, vía la ley de Gauss $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$). Esa doble función es la definición física de "carga".

### El "porqué" moderno: simetría gauge y teorema de Noether

Si querés bajar un nivel más, la respuesta contemporánea es preciosa. El teorema de Noether dice: **por cada simetría continua de las leyes de la naturaleza hay una cantidad conservada.**

- Simetría bajo traslaciones en el tiempo → se conserva la **energía**.
- Simetría bajo traslaciones en el espacio → se conserva el **momento**.
- Simetría bajo rotaciones → se conserva el **momento angular**.
- Simetría bajo un cambio de fase de la función de onda ($\psi \to e^{i\theta(x)}\psi$, la llamada **simetría gauge U(1)**) → se conserva la **carga eléctrica**.

Es decir: la carga eléctrica se conserva porque **la fase cuántica de una partícula no es observable**, y la naturaleza no cambia si la redefinís punto a punto. Al exigir que esa redefinición sea local, el propio formalismo *obliga* a que exista un campo compensador: ese campo es el campo electromagnético, y su cuanto es el fotón.

> [!info] Léelo dos veces
> El electromagnetismo no es un añadido al mundo cuántico: es la **consecuencia inevitable** de exigir que la fase cuántica pueda elegirse libremente en cada punto del espacio. La carga es la "etiqueta" que dice cuán fuerte responde una partícula a esa exigencia.

Esto conecta directo con [[lagrangiano-y-principio-de-minima-accion]], donde el mismo lenguaje (acción, simetrías) genera las leyes de movimiento.

---

## 2. Los dos signos: por qué exactamente dos, ni uno ni tres

### La observación original (1733)

Charles du Fay frotó vidrio con seda y ámbar con piel, y descubrió algo que no era obvio: los objetos electrificados **no** se comportaban todos igual. Había dos familias, y la regla era limpia:

- Igual con igual → **repulsión**.
- Distinto con distinto → **atracción**.

La gravedad no hace esto: **siempre atrae**. Ahí está la diferencia estructural.

### Por qué dos y no tres

La razón profunda es matemática: la carga eléctrica es **un número** (en la práctica, un entero por $e$), y los números tienen **exactamente dos signos**. La fuerza entre dos cargas es proporcional al **producto** $q_1 q_2$:

- $(+)(+) = +$ → repulsión
- $(-)(-) = +$ → repulsión
- $(+)(-) = -$ → atracción

Un solo signo daría un universo donde todo se repele (o todo se atrae) y nunca formaría átomos estables. Tres o más "tipos" requerirían que la carga fuese algo más rico que un número —y eso **sí existe** en la naturaleza: la **carga de color** de la fuerza fuerte tiene tres valores (rojo, verde, azul). Pero la carga eléctrica, gobernada por el grupo U(1) que es unidimensional, admite un solo eje: positivo/negativo.

> [!warning] Mito a desmontar #1: "positivo es tener algo y negativo es que falta"
> Falso en general. Un electrón **es** una partícula que existe y su carga es $-e$; no es un "agujero". Lo que sí es cierto —y por eso el mito sobrevive— es que **en un metal**, un objeto cargado positivamente es un objeto al que le *quitaste* electrones (los protones no se mueven, están anclados en la red). Ese caso particular no es la definición general.

> [!warning] Mito a desmontar #2: "la carga es un fluido"
> Franklin creía en un fluido eléctrico único: tener de más = positivo, de menos = negativo. Fue una idea brillante para 1750 y de ahí salieron los nombres "+" y "−", pero es **incorrecta**. Su consecuencia más molesta: Franklin apostó que el fluido que se movía era el positivo, y se equivocó. Por eso hoy la **corriente convencional** va de + a − mientras los electrones van al revés. Ver [[corriente-electrica]].

---

## 3. Cuantización: la naturaleza solo vende en monedas enteras

### El experimento de Millikan (1909)

Robert Millikan pulverizó gotitas de aceite entre dos placas cargadas. Cada gota atrapaba unos pocos electrones al formarse. Millikan ajustaba el campo hasta suspender la gota en equilibrio: la fuerza eléctrica hacia arriba igualaba el peso hacia abajo.

$$qE = mg \quad \Rightarrow \quad q = \frac{mg}{E}$$

Midió miles de gotas. Y el resultado no fue un continuo de valores: **todas las cargas eran múltiplos enteros de una misma cantidad mínima.** Nunca apareció 1,5 veces esa cantidad. Nunca 2,7. Siempre 1, 2, 3, 4…

$$\boxed{Q = n\,e, \qquad n \in \mathbb{Z}}$$

> 🪙 **Analogía central: la máquina expendedora sin cambio.**
> Imaginá una máquina que solo acepta monedas de 100 pesos y no da vuelto. Podés meter 100, 200, 300… pero jamás 150. La carga eléctrica funciona igual: el universo cobra en monedas de $e$ y no existe media moneda circulando suelta.
>
> **Dónde se rompe la analogía:** las monedas se pueden fundir y refundir en piezas más chicas; la carga elemental libre **no** se subdivide. Y ojo: la máquina metafórica sí tiene "medias monedas" internas —los quarks—, pero nunca salen solas de la máquina (ver abajo).

### El valor exacto (SI 2019)

$$e = 1{,}602176634 \times 10^{-19}\ \text{C}$$

Desde la redefinición del SI en 2019 este número **no se mide: se define**. El amperio ya no se define por la fuerza entre dos alambres, sino fijando $e$. Es decir, invertimos la lógica histórica: antes medíamos la carga del electrón en culombios; ahora el culombio se define a partir de la carga del electrón.

### Los quarks y las cargas fraccionarias

Aquí viene el matiz que casi siempre se omite. Los quarks **sí** tienen cargas fraccionarias:

| Quark | Carga | Presente en |
|-------|-------|-------------|
| up (u) | $+\tfrac{2}{3}e$ | protón, neutrón |
| down (d) | $-\tfrac{1}{3}e$ | protón, neutrón |

Y las cuentas cierran exactamente:

- **Protón** = $uud$ → $\tfrac{2}{3} + \tfrac{2}{3} - \tfrac{1}{3} = +1\,e$ ✅
- **Neutrón** = $udd$ → $\tfrac{2}{3} - \tfrac{1}{3} - \tfrac{1}{3} = 0$ ✅

El neutrón es eléctricamente neutro **por cancelación interna**, no por ausencia de carga: tiene cargas adentro, y por eso responde a campos magnéticos (tiene momento magnético) aunque su carga neta sea cero.

Entonces, ¿por qué decimos que la carga está cuantizada en $e$? Por el **confinamiento de color**: la fuerza fuerte impide que un quark exista aislado. Siempre aparecen en combinaciones cuya carga total es un múltiplo entero de $e$. La cuantización en $e$ es una regla sobre lo *observable libre*, no sobre los constituyentes.

#### "Fraccionaria" es un mal nombre: el raro es el electrón

Llamamos $e$ a **la** unidad por accidente histórico: era la primera carga que supimos aislar (Millikan). Pero si tomás $e/3$ como unidad natural, no queda ninguna fracción en ningún lado:

| Partícula | En unidades de $e$ | En unidades de $e/3$ |
|-----------|--------------------|----------------------|
| down | $-\tfrac{1}{3}$ | **−1** |
| up | $+\tfrac{2}{3}$ | **+2** |
| electrón | $-1$ | **−3** |
| protón | $+1$ | **+3** |

La moneda real del universo no es $e$: es $e/3$, y el electrón resulta ser un fajo de tres. Así que la pregunta buena no es "¿por qué fracciones?" sino **¿por qué el denominador es exactamente 3?**

#### Por qué el denominador es 3: porque hay 3 colores

$$\text{denominador de la carga del quark} \;=\; N_c \;=\; \text{número de colores}$$

No es numerología. Hay **dos caminos independientes** que llegan al mismo lugar:

**① Cancelación de anomalías (dentro del Modelo Estándar).** Una teoría de gauge cuántica se rompe —pierde unitariedad, deja de ser renormalizable, literalmente predice probabilidades absurdas— si ciertos diagramas triangulares no se cancelan. Eso impone ecuaciones sobre las hipercargas. Una de ellas es:

$$N_c\,Y_Q + Y_L = 0$$

Ese $N_c$ que multiplica **es el número de colores**: los quarks entran en el triángulo tres veces, una por color; los leptones una sola vez. Para compensar a un leptón, cada quark tiene que aportar un tercio. Resolviendo el sistema completo con la normalización $Y_e = -1$ sale forzosamente $Q_u = +\tfrac{2}{3}$, $Q_d = -\tfrac{1}{3}$: **no es una elección del modelo, es la única solución consistente.** Con 4 colores, los quarks tendrían cargas en cuartos.

> [!tip] La frase que resume todo
> **La carga del electrón vale exactamente $-1$ porque el protón tiene tres quarks.** Las cargas de quark y leptón están amarradas entre sí por consistencia matemática — y por eso los átomos son neutros con precisión de $10^{-21}$.

**② Tracelessness en Gran Unificación (más elegante).** En SU(5) (Georgi–Glashow, 1974) el antiquark *down* y el doblete leptónico viven en **el mismo multiplete**:

$$\bar{5} = (d^c_{\text{rojo}},\ d^c_{\text{verde}},\ d^c_{\text{azul}},\ e^-,\ \nu_e)$$

Acá la carga $Q$ deja de ser un U(1) suelto: pasa a ser **un generador de un grupo simple**, y los generadores de un grupo simple son matrices **sin traza**. Entonces la suma de las cargas del multiplete debe dar cero:

$$3\,Q(d^c) + Q(e^-) + Q(\nu) = 0 \;\Rightarrow\; 3\,Q(d^c) - 1 + 0 = 0 \;\Rightarrow\; Q(d) = -\tfrac{1}{3}$$

El 3 son literalmente las tres entradas de color. Y de regalo, esto **sí explica la cuantización**: un U(1) aislado admitiría cualquier número real, pero embebido en un grupo no abeliano los autovalores son discretos por álgebra pura.

#### El confinamiento explica la invisibilidad, no el valor

Son **dos hechos distintos** y conviene no fundirlos:

| Pregunta | Respuesta |
|----------|-----------|
| ¿Por qué la carga del quark vale $\tfrac{1}{3}$? | Anomalías / tracelessness → $N_c = 3$ |
| ¿Por qué nunca vemos $\tfrac{1}{3}$ suelto? | Confinamiento de color |

> [!info] Frontera abierta y honesta
> La explicación de arriba **no cierra el misterio, lo baja un piso**:
> - **Por qué $N_c = 3$** no se deriva: se mide (ritmo de $e^+e^- \to$ hadrones, tasa de $\pi^0 \to \gamma\gamma$). Ya no preguntamos "¿por qué tercios?" sino "¿por qué tres colores?". `❓`
> - **SU(5) mínimo está descartado**: predice decaimiento del protón a un ritmo que se buscó y no aparece. Variantes (SO(10), supersimétricas) siguen vivas pero sin confirmar.
> - Dirac demostró en 1931 que si existiera **un solo monopolo magnético** en todo el universo, la cuantización sería una consecuencia matemática forzosa. Nunca se detectó uno. Sigue siendo la otra vía abierta. `❓`

Ver [[la-composicion-de-la-materia-atomos]] para el detalle de quarks, gluones y estructura nuclear.

---

## 4. Conservación: y por qué "local" es la palabra importante

La formulación débil es la que todos conocen:

> En un sistema aislado, la carga total permanece constante.

La formulación fuerte —la verdadera— es mucho más restrictiva:

$$\frac{\partial \rho}{\partial t} + \nabla\cdot\mathbf{J} = 0$$

Esta es la **ecuación de continuidad**: $\rho$ es la densidad de carga (C/m³) y $\mathbf{J}$ la densidad de corriente (A/m²). Léela en castellano: *"si la carga dentro de un volumen disminuye, es porque exactamente esa cantidad salió cruzando la frontera del volumen"*.

La carga no puede desaparecer aquí y aparecer allá, ni siquiera conservando el total. **Tiene que viajar.** Esto no es un postulado extra: sale directamente de tomar la divergencia de la ley de Ampère-Maxwell (ver [[ecuaciones-de-maxwell]]).

### ¿Y la aniquilación electrón-positrón?

Caso de prueba favorito. Un electrón ($-e$) choca con un positrón ($+e$) y ambos desaparecen convirtiéndose en dos fotones. ¿Se destruyó carga?

**No.** Antes: $(-e) + (+e) = 0$. Después: dos fotones, carga $0 + 0 = 0$. El balance es perfecto. Lo que se destruyó fue *materia*, no *carga*. La carga total nunca cambió.

> [!tip] Consecuencia práctica que ya usás
> La **ley de nodos de Kirchhoff** ($\sum I_{\text{nodo}} = 0$) no es una regla de ingeniería: es la ecuación de continuidad aplicada a un nodo de circuito. Lo que entra sale, porque la carga no se acumula ni se evapora en un empalme de cables.

---

## 5. Ley de Coulomb: la ecuación que gobierna la materia cotidiana

Charles-Augustin de Coulomb midió en 1785, con una balanza de torsión de sensibilidad brutal, cómo se atraen y repelen dos esferas cargadas:

$$F = k_e\,\frac{|q_1 q_2|}{r^2}, \qquad k_e = \frac{1}{4\pi\varepsilon_0} \approx 8{,}988\times10^{9}\ \frac{\text{N}\cdot\text{m}^2}{\text{C}^2}$$

En forma vectorial, con $\hat{r}$ el unitario de $q_1$ hacia $q_2$:

$$\vec{F}_{12} = k_e\,\frac{q_1 q_2}{r^2}\,\hat{r}$$

Símbolos: $F$ fuerza (N), $q_1, q_2$ cargas (C), $r$ distancia (m), $\varepsilon_0 = 8{,}854\times10^{-12}$ F/m es la **permitividad del vacío**.

### Tres lecturas físicas de esta fórmula

**(a) El $1/r^2$ no es casualidad.** Es geometría pura: las líneas de campo de una carga puntual se reparten sobre la superficie de una esfera, y esa superficie crece como $4\pi r^2$. La misma densidad de líneas repartida en más área → intensidad que cae como $1/r^2$. La gravedad hace lo mismo por la misma razón. Experimentalmente, el exponente está verificado como $2$ con una precisión de $10^{-16}$ — de las leyes mejor comprobadas de toda la física.

**(b) El signo lleva la información.** Si $q_1 q_2 > 0$ el resultado apunta *alejándose*: repulsión. Si $q_1 q_2 < 0$, apunta *hacia*: atracción. La matemática codifica la física sin necesitar dos ecuaciones.

**(c) Es brutalmente más fuerte que la gravedad.** Comparemos protón y electrón:

$$\frac{F_{\text{eléctrica}}}{F_{\text{gravitatoria}}} \approx 2\times10^{39}$$

> ⚡ **Analogía de Feynman (y las cuentas para creerla).**
> Si vos y otra persona estuvieran separados un metro, y cada uno tuviera apenas **un 1 % más de electrones que de protones**, la repulsión entre ustedes sería de unos $10^{25}$ N. Eso es del mismo orden que el peso de la Tierra entera. Con un desbalance del 1 %.
>
> **Por eso la materia es neutra con una precisión obsesiva** (mejor que 1 parte en $10^{21}$). No es coincidencia ni elegancia: es que cualquier desbalance apreciable se corrige violentamente en microsegundos. La neutralidad no es un estado pasivo, es un equilibrio impuesto a la fuerza.
>
> **Límite de la analogía:** las cuentas suponen la ley de Coulomb en el vacío entre cargas puntuales; a esas densidades habría descargas, ionización del aire y ruptura dieléctrica mucho antes. Sirve para el orden de magnitud, no como predicción literal.

### Del campo a la carga: por qué inventamos $\mathbf{E}$

Coulomb describe acción a distancia, y eso incomodaba a Faraday. Su solución: la carga $q_1$ **no** empuja a $q_2$ directamente; $q_1$ deforma el espacio creando un campo $\mathbf{E}$, y $q_2$ responde al campo *que hay donde ella está*.

$$\mathbf{E} = \frac{\mathbf{F}}{q_{\text{prueba}}} \qquad \Rightarrow \qquad \mathbf{F} = q\mathbf{E}$$

Esto parece un cambio cosmético hasta que movés la carga: el cambio en el campo viaja a $c$, no instantáneamente. Ese retraso **es** la onda electromagnética. Ver [[onda-electromagnetica]] y [[fotones-virtuales]] (la versión cuántica: la fuerza la media un intercambio de fotones virtuales).

---

## 6. Invariancia relativista: la propiedad más subestimada de la carga

Tres cantidades se comportan distinto al cambiar de sistema de referencia:

| Magnitud | ¿Cambia con la velocidad? |
|----------|---------------------------|
| Longitud | Sí (contracción de Lorentz) |
| Tiempo / masa-energía | Sí (dilatación, $E = \gamma mc^2$) |
| **Carga eléctrica** | **No. Invariante exacto.** |

Un electrón acelerado al 99,999 % de $c$ en un sincrotrón sigue teniendo exactamente $-1{,}602\ldots\times10^{-19}$ C. Verificado con altísima precisión: si no fuera así, un átomo de helio (cuyos electrones se mueven mucho más rápido que los del hidrógeno) no sería exactamente neutro, y lo es.

### La joya: el magnetismo es la carga vista en movimiento

Tomá un cable neutro con corriente. En el marco del laboratorio: igual densidad de iones positivos y de electrones → neutro → **ningún campo eléctrico neto**, pero sí campo magnético.

Ahora ponete a viajar a la velocidad de deriva de los electrones. Ahora los electrones están quietos y los iones positivos se mueven. La contracción de Lorentz afecta a las densidades de manera distinta en cada caso — y como la **carga de cada partícula no cambia pero el volumen que ocupan sí**, el cable deja de ser neutro en tu marco: aparece una densidad de carga neta y con ella un **campo eléctrico**.

> **El campo magnético que ves en un marco es el campo eléctrico de otro marco.** El magnetismo es un efecto relativista de la electricidad, visible a velocidades de mm/s solo porque la fuerza de Coulomb es $10^{39}$ veces la gravedad y no hace falta mucho desbalance para notarla.

Esto solo funciona porque la carga es invariante. Si la carga se dilatara como el tiempo, la deducción se caería. Conecta con [[ecuaciones-de-maxwell]] y con [[relatividad-general]] (aunque este efecto es de relatividad *especial*).

---

## 7. El culombio: una unidad monstruosamente grande

$$1\ \text{C} = 1\ \text{A}\cdot\text{s} = \frac{1}{1{,}602176634\times10^{-19}} \approx 6{,}242\times10^{18}\ \text{cargas elementales}$$

Es decir: **6,24 trillones de electrones.**

> [!warning] Mito a desmontar #3: "un culombio es una cantidad modesta de electricidad"
> Al revés. Un culombio de carga *estática* concentrada es una barbaridad: dos cargas de 1 C separadas 1 m se repelerían con $9\times10^9$ N ≈ el peso de un millón de toneladas. Un rayo, que es uno de los eventos eléctricos más violentos de la naturaleza, transfiere típicamente **5–20 C**. Toda la carga que puede acumular un globo frotado en el pelo anda por los **nanoculombios** ($10^{-9}$ C).
>
> ¿Y entonces por qué una batería AA de 2000 mAh mueve 7200 C sin drama? Porque ahí la carga **no se acumula: circula**. Sale por un borne y vuelve por el otro; el circuito completo permanece neutro en todo momento. Acumular carga es carísimo; hacerla fluir en un lazo cerrado es barato. Esa distinción es el corazón de la diferencia entre electrostática y electrodinámica.

### Cómo se relacionan las magnitudes que ya conocés

| Magnitud | Definición desde la carga | Lectura física |
|----------|---------------------------|----------------|
| Corriente $I$ | $I = dQ/dt$ (A = C/s) | **Cuánta** carga pasa por segundo |
| Voltaje $V$ | $V = W/q$ (V = J/C) | **Cuánta energía** carga cada culombio |
| Campo $E$ | $E = F/q$ (N/C = V/m) | Fuerza por unidad de carga |
| Capacitancia $C$ | $C = Q/V$ (F = C/V) | Carga almacenada por voltio |

> [!tip] La confusión clásica que esta tabla disuelve
> "Más voltaje = más electrones" es **falso**. El voltaje no cuenta cargas: cuenta **energía por carga**. Una batería de 9 V no tiene más electrones que una de 1,5 V; le da a cada culombio seis veces más energía. Ver [[voltaje]].

---

## 8. ¿Qué significa "cargar" un cuerpo? (transferencia, nunca creación)

Aquí es donde la palabra del idioma nos traiciona. Decimos "cargar un cuerpo" como si le inyectáramos algo, igual que se carga un camión. **Físicamente eso es imposible:** por la conservación local (§4), nadie fabrica carga. Cargar un cuerpo significa **exactamente una cosa: mover electrones de un objeto a otro**. Uno queda con exceso (negativo), el otro con déficit (positivo), y la suma sigue siendo la de antes.

> [!warning] Mito a desmontar #4: "los protones también se mueven al cargar algo"
> Casi nunca. Los protones están **anclados** en el núcleo, que a su vez está anclado en la red cristalina del sólido. Los únicos móviles en la materia condensada son los electrones. Por eso, en la práctica cotidiana: **cargar positivamente = quitar electrones**. (Excepción: en líquidos, gases ionizados y plasmas sí se mueven iones positivos completos — ver [[la-corriente-electrica-en-el-hogar]] y la electrólisis.)

### Los tres métodos de electrización

| Método | Qué ocurre | ¿Hay contacto? | Resultado |
|--------|------------|----------------|-----------|
| **Frotamiento** (triboeléctrico) | Dos materiales distintos se rozan; el que tiene más afinidad por los electrones se los arranca al otro | Sí, íntimo | Cargas **opuestas e iguales** en ambos |
| **Contacto** (conducción) | Un cuerpo ya cargado toca a otro conductor; la carga se redistribuye hasta igualar potencial | Sí | Ambos quedan con el **mismo signo** |
| **Inducción** | Un cuerpo cargado se **acerca sin tocar**; reorganiza las cargas del otro. Si conectás el segundo a tierra un instante y luego lo desconectás, queda cargado | **No** | Carga de **signo opuesto** al inductor |

La **serie triboeléctrica** ordena los materiales por su avidez de electrones: vidrio y pelo humano los sueltan fácil (quedan **+**), teflón y ámbar los capturan (quedan **−**). Frotar globo contra pelo transfiere del orden de $10^{-9}$ C (nanoculombios) — y ya alcanza para pegarlo a la pared. Recordá la §7: **acumular carga es carísimo**.

> 🧲 **Analogía central: la baraja repartida.**
> Imaginá dos jugadores y un mazo de 100 cartas, 50 y 50. "Cargar" es que un jugador le robe cartas al otro: ahora hay 60 y 40. **En la mesa siguen habiendo 100 cartas** — nadie imprimió ninguna. El "+" y el "−" son solo *quién quedó por encima y quién por debajo del reparto justo*.
>
> **Dónde se rompe la analogía:** las cartas son objetos neutros intercambiables; los electrones no son "unidades de carga" separables de la partícula — la carga viaja **montada** en el electrón, no suelta. Y a diferencia de las cartas, robarlas cuesta energía y genera una atracción creciente que se opone al robo (por eso no podés cargar indefinidamente: llega la ruptura dieléctrica y salta la chispa).

### Conductores vs. aislantes: la carga es la misma, lo que cambia es su libertad

Este punto suele explicarse mal. La diferencia **no** está en cuánta carga tiene el material — todos los materiales están repletos de carga — sino en **si esa carga puede caminar**.

- **Conductor** (cobre, agua salada, tu cuerpo): tiene electrones **deslocalizados**, que no pertenecen a ningún átomo en particular. Consecuencia clave: si cargás un conductor, la carga en exceso se repele a sí misma y **huye a la superficie exterior**, distribuyéndose hasta que el campo interior es exactamente cero. Por eso funciona la **jaula de Faraday** — y por eso estás a salvo dentro de un auto durante una tormenta eléctrica.
- **Aislante / dieléctrico** (vidrio, plástico, aire seco): sus electrones están **amarrados** a su átomo. La carga que depositás **se queda quieta donde la pusiste**. Por eso los experimentos de electrostática se hacen con plástico y vidrio: la carga no se escapa.
- **Semiconductor** (silicio): en el medio, y —crucialmente— *controlable*. Ese control es literalmente el transistor.

> [!info] La polarización: por qué un globo cargado atrae papelitos **neutros**
> Un papelito no tiene carga neta. ¿Por qué salta hacia el globo? Porque el campo del globo **deforma** cada molécula del papel: empuja sus electrones un poquito hacia un lado. Ahora cada molécula tiene su lado "−" mirando al globo (+) y su lado "+" del lado opuesto. Como la fuerza de Coulomb cae con $1/r^2$, **el lado cercano gana**: la atracción supera a la repulsión y el papelito vuela. Esto es la **polarización**, y es la raíz física de la constante dieléctrica $\varepsilon$ y de todo capacitor. En un conductor el mismo fenómeno se llama **inducción** y es mucho más marcado, porque ahí las cargas viajan de verdad en vez de solo estirarse.

La razón microscópica profunda de esta clasificación (teoría de bandas, gap de energía, dopaje) ya está desarrollada en [[corriente-electrica]] y su consecuencia macroscópica cuantitativa —la resistividad $\rho$— en [[resistencia]]. Aquí solo importa el titular: **conductor = carga libre de viajar; aislante = carga inmovilizada.**

---

## 9. Puente a redes y telecomunicaciones

Todo lo anterior no es física de museo — es exactamente lo que pasa en tu cable Ethernet.

1. **La señal es carga que se mueve muy poco.** En [[corriente-electrica]] ya viste que la velocidad de deriva es de ~0,45 mm/s mientras la señal viaja a $2\times10^8$ m/s. La razón última es la **repulsión de Coulomb**: el cable ya está lleno de electrones y el empujón se propaga por repulsión mutua, no por transporte de partículas.

2. **La señalización diferencial es aritmética de cargas.** En [[señalizacion-diferencial]], $V_{\text{diff}} = V_1 - V_2$ funciona porque el ruido externo deposita la *misma* perturbación de carga en ambos conductores del par trenzado, y la resta la elimina. Es conservación y aditividad de la carga puesta a trabajar.

3. **La capacitancia limita tu ancho de banda.** $C = Q/V$: cada tramo de cable tiene que *cargarse* antes de que el voltaje cambie. Cuanto más rápido querés conmutar bits, más corriente necesitás para mover esa carga. Ahí nace el límite físico que motivó [[codificacion-4b-5b-y-mlt-3]] y MLT-3 (bajar la frecuencia fundamental a 31,25 MHz para no pelear tanto contra la capacitancia del Cat5).

4. **La antena radia porque acelerás cargas.** Una carga quieta produce campo estático; una carga con velocidad constante produce campo magnético; una carga **acelerada** radia energía al infinito. Eso es una antena: carga sacudida de un lado a otro a la frecuencia portadora. Ver [[onda-electromagnetica]] y [[ieee-802-11]].

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es la carga eléctrica? | Propiedad **primitiva** (no reducible) que determina cuánta fuerza siente una partícula en un campo EM y cuánto campo genera. Opera vía $\mathbf{F} = q(\mathbf{E} + \mathbf{v}\times\mathbf{B})$. Es simultáneamente sensor y fuente del campo. |
| ¿Cuál es el "porqué" moderno de la carga? | El **teorema de Noether** aplicado a la **simetría gauge U(1)**: como la fase cuántica $\psi \to e^{i\theta(x)}\psi$ no es observable, la cantidad conservada asociada es la carga. Exigir esa libertad local *obliga* a que exista el campo EM. |
| ¿Por qué hay exactamente dos signos? | Porque la carga es un **número** y los números tienen dos signos. La fuerza va como el producto $q_1q_2$: $(+)(+)$ y $(-)(-)$ repelen, $(+)(-)$ atrae. Con un solo signo no habría átomos estables. La fuerza fuerte, con grupo SU(3), sí tiene 3 "colores"; U(1) admite un solo eje. |
| ¿Qué es la cuantización de la carga y quién la probó? | $Q = n\,e$ con $n$ entero. **Millikan (1909)**, gota de aceite: equilibró $qE = mg$ en miles de gotas y jamás encontró un valor no entero. Hoy $e = 1{,}602176634\times10^{-19}$ C es **exacto por definición** del SI (2019). |
| ¿Los quarks contradicen la cuantización? | No. Tienen carga fraccionaria ($u = +\tfrac{2}{3}e$, $d = -\tfrac{1}{3}e$) pero el **confinamiento de color** impide aislarlos. Protón $uud = +e$; neutrón $udd = 0$. La cuantización en $e$ vale para lo observable **libre**. |
| ¿Por qué los quarks tienen carga $\tfrac{1}{3}$? | Truco: **no son fraccionarios** — en unidades de $e/3$ todo es entero ($d=-1$, $u=+2$, electrón $=-3$). El raro es el electrón; $e$ es unidad por accidente histórico. El denominador es 3 porque **$N_c = 3$ colores**, por dos vías: ① cancelación de anomalías ($N_c Y_Q + Y_L = 0$ — los quarks entran 3 veces en el triángulo, el leptón 1); ② en SU(5), $Q$ es generador de grupo simple → **sin traza** → $3Q(d^c) - 1 = 0$. |
| ¿Confinamiento y carga $\tfrac{1}{3}$ son lo mismo? | No, son dos hechos distintos. El **valor** $\tfrac{1}{3}$ lo fija $N_c=3$ (anomalías / tracelessness). El confinamiento solo explica la **invisibilidad**: por qué nunca vemos un tercio suelto. Confundirlos es el error clásico. |
| ¿Por qué "conservación local" es más fuerte que "conservación total"? | Porque prohíbe que la carga desaparezca en un punto y reaparezca en otro: debe **fluir**. Formalmente $\partial\rho/\partial t + \nabla\cdot\mathbf{J} = 0$ (ecuación de continuidad), derivable de Maxwell. La **ley de nodos de Kirchhoff** es este principio aplicado a un nodo. |
| ¿La aniquilación electrón-positrón destruye carga? | No. Antes: $(-e)+(+e)=0$. Después: 2 fotones, $0+0=0$. Se destruye **materia**, no **carga**. |
| ¿Qué dice la ley de Coulomb y qué significa cada parte? | $F = k_e |q_1q_2|/r^2$ con $k_e = 1/(4\pi\varepsilon_0) \approx 8{,}99\times10^9$ N·m²/C². El $1/r^2$ es **geometría** (el área esférica crece como $4\pi r^2$); el exponente 2 está verificado a $10^{-16}$. El signo del producto codifica atracción/repulsión. |
| ¿Cuán fuerte es la fuerza eléctrica frente a la gravedad? | Entre protón y electrón, unas $2\times10^{39}$ veces mayor. Un desbalance del 1 % entre dos personas a 1 m daría una repulsión del orden del peso de la Tierra. **Por eso la materia es neutra a mejor que 1 parte en $10^{21}$**: cualquier desbalance se corrige violentamente. |
| ¿Por qué la invariancia relativista de la carga es tan importante? | Porque la longitud se contrae y la energía se dilata, pero la carga **no cambia con la velocidad**. Consecuencia: un cable neutro con corriente deja de ser neutro en otro marco → aparece campo eléctrico. **El magnetismo es el campo eléctrico de la carga en movimiento.** |
| ¿Cuánto es 1 culombio y por qué es enorme? | $1\ \text{C} = 1\ \text{A}\cdot\text{s} \approx 6{,}242\times10^{18}$ cargas elementales. Dos cargas de 1 C a 1 m se repelen con $9\times10^9$ N. Un rayo transfiere solo 5–20 C; un globo frotado, nanoculombios. **Acumular carga es carísimo; hacerla circular en lazo cerrado es barato.** |
| ¿Cómo distingo carga, corriente y voltaje? | **Carga (C)** = cuánta "sustancia eléctrica" hay. **Corriente (A = C/s)** = cuánta pasa por segundo. **Voltaje (V = J/C)** = cuánta **energía** lleva cada culombio. Más voltaje ≠ más electrones. |
| ¿Qué significa realmente "cargar" un cuerpo? | **Transferir electrones, nunca crearlos.** Un cuerpo queda con exceso (−) y el otro con déficit (+); la suma no cambia. Los protones no se mueven en sólidos (están anclados a la red), así que *cargar positivamente = quitar electrones*. Es la conservación local (§4) vista en la mesa del laboratorio. |
| ¿Cuáles son los tres métodos de electrización? | **Frotamiento** (contacto íntimo entre materiales distintos → cargas opuestas e iguales; orden dado por la serie triboeléctrica), **contacto** (un cargado toca a un conductor → ambos con el mismo signo), e **inducción** (acercar sin tocar + tierra momentánea → carga de signo **opuesto** al inductor). Magnitudes típicas: nanoculombios. |
| ¿Qué distingue de verdad a un conductor de un aislante? | **No** cuánta carga tienen (ambos están repletos), sino **si esa carga puede moverse**. Conductor = electrones deslocalizados → la carga en exceso huye a la superficie y el campo interior se anula (**jaula de Faraday**). Aislante = electrones amarrados → la carga se queda donde la pusiste. Semiconductor = intermedio y *controlable* (transistor). |
| ¿Por qué un globo cargado atrae papelitos neutros? | Por **polarización**: el campo del globo estira las moléculas del papel, dejando su lado "−" mirando al globo "+". Como Coulomb va con $1/r^2$, **el lado cercano gana** y la atracción neta supera a la repulsión. En conductores el mismo efecto (con cargas que sí viajan) se llama **inducción**; es el origen de la constante dieléctrica y del capacitor. |
| ¿Cómo llega esto al cable de red? | (1) La señal se propaga por repulsión de Coulomb, no por transporte de electrones. (2) La señalización diferencial resta el ruido común. (3) $C = Q/V$: cargar el cable limita la velocidad de conmutación (motivo de MLT-3). (4) Carga **acelerada** = radiación = antena. |

**📌 Resumen en tus propias palabras (Feynman check):**

> La carga eléctrica es una etiqueta que traen algunas partículas y que las hace empujarse o jalarse entre sí. Viene en dos versiones opuestas que se cancelan exactamente, y siempre en paquetitos del mismo tamaño mínimo, nunca en pedazos más chicos. Nadie puede fabricarla ni borrarla: solo pasarla de un lugar a otro, y para llegar a otro lado tiene que recorrer el camino.

---

## 💡 Aprendizajes principales

- La carga no se "explica" reduciéndola a nada más: es **primitiva**. Lo que sí se explica es *por qué se conserva* — simetría gauge U(1) + Noether.
- La **neutralidad de la materia no es casualidad**: es un equilibrio impuesto por la brutalidad de la fuerza de Coulomb ($10^{39}$ veces la gravedad).
- El neutrón **no carece de carga**: tiene $+\tfrac{2}{3}, -\tfrac{1}{3}, -\tfrac{1}{3}$ adentro que suman cero. Por eso tiene momento magnético.
- La cuantización de la carga **no se deriva desde cero** en el Modelo Estándar, pero tampoco es arbitraria: la cancelación de anomalías amarra las cargas de quarks y leptones entre sí. La carga del electrón vale $-1$ **porque el protón tiene tres quarks**.
- Los quarks **no son "fraccionarios"**: en unidades de $e/3$ son enteros. El denominador 3 es el número de colores. Lo que queda sin explicar es por qué $N_c = 3$, y por qué la escala global está fijada. Agujeros abiertos: monopolo de Dirac (1931) y Gran Unificación, ninguno confirmado. `❓`
- La **invariancia relativista** de la carga es lo que permite deducir el magnetismo desde la electricidad: mismo fenómeno, distinto observador.
- Distinguir **acumular** carga (electrostática, caro, culombios enormes) de **hacerla circular** (electrodinámica, barato, lo que hace tu batería).
- **"Cargar" es un verbo mal puesto:** nunca se inyecta carga, solo se *reparte*. Todo el fenómeno electrostático cotidiano (globo, chispa del picaporte, papelitos) es transferencia de nanoculombios de electrones.
- Conductor vs. aislante **no** es cuánta carga hay, sino **cuánta libertad tiene** para moverse. De ahí salen la jaula de Faraday (conductor: campo interior nulo) y la polarización (aislante: la carga solo se estira, no viaja).

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Recorré el palacio en orden: entrada → cajero → bóveda → balanza → sala de espejos → mesa de póker.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **Dos signos** | La **puerta giratoria** de un banco | Dos multitudes: unos con chaleco rojo (+), otros con chaleco azul (−). Los del mismo color se rechazan violentamente y salen despedidos; rojo con azul se abrazan y se pegan. Nadie lleva chaleco verde: **solo hay dos colores** en este banco. |
| **Cuantización ($Q=ne$)** | El **cajero automático** del vestíbulo | Solo escupe billetes idénticos de $1{,}602176634$ — jamás medio billete. Un cliente pide 2,5 billetes y la máquina se apaga con un zumbido. En el sótano hay una máquina rota que sí tiene tercios (los **quarks**), pero está soldada y nunca sale nada suelto de ahí. |
| **Conservación local** | La **bóveda blindada** | El oro nunca se evapora ni se teletransporta. Si la bóveda A tiene menos, es porque un carrito **cruzó el pasillo** llevándolo a la bóveda B — y las cámaras lo grabaron todo el camino. En el pasillo hay un cartel: `∂ρ/∂t + ∇·J = 0`. |
| **Ley de Coulomb / fuerza brutal** | La **balanza de torsión** de Coulomb en el patio | Dos personas a un metro con apenas 1 % de electrones de más. Del techo cuelga **el planeta Tierra entero** como contrapeso — y la balanza queda **empatada**. Alejalos al doble de distancia y el empuje cae a la **cuarta parte** ($1/r^2$). |
| **Invariancia relativista** | La **sala de espejos** del fondo | Corrés junto a un cable. En el espejo de la izquierda (parado) el cable es neutro y solo ves un imán. En el espejo de la derecha (corriendo) el cable está **cargado** y ves campo eléctrico. Tu carga en el bolsillo pesa lo mismo en ambos espejos: **es lo único que no se deforma**. |
| **Cargar = transferir** (conductor vs. aislante) | La **mesa de póker** de la salida | Dos jugadores, 100 fichas repartidas 50/50. Uno le roba 10 al otro: 60 y 40, pero **sobre la mesa siguen habiendo 100** — nadie imprimió fichas. Un jugador viste **traje de mercurio líquido** (conductor): las fichas que recibe le resbalan al instante hasta el borde del traje y ninguna queda en el pecho. El otro viste **traje de brea** (aislante): las fichas se le quedan pegadas exactamente donde cayeron. Sobre la mesa, servilletas neutras se estiran y saltan hacia el que tiene más fichas (**polarización**). |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
- Releer la sección "La carga eléctrica y la cuantización" de [[corriente-electrica]] y comprobar que ya no necesito volver a leerla: esta nota la sustituye y la amplía.
- Reformular en voz alta la diferencia **carga / corriente / voltaje** usando la tabla de la sección 7, sin mirar.

**Aplicación a medio plazo (este mes):**
- Rehacer el argumento relativista del cable con corriente (sección 6) para cerrar el puente carga → magnetismo → [[onda-electromagnetica]].
- Calcular la capacitancia aproximada de un tramo de Cat5 y ver cuánta carga hay que mover por cada transición MLT-3 → conecta con [[codificacion-4b-5b-y-mlt-3]].

**Proyecto o idea donde encaja:**
- [[020 Física y Electromagnetismo MOC]] — es la nota raíz del bloque de fundamentos: corriente, voltaje y resistencia se definen todas *desde* la carga.

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Concepto `#prioridad/alta` → escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60). El único obligatorio es el primero.

> [!info] Escalera reiniciada el 2026-08-23
> La planificación original (Día 1 = 2026-08-13) venció sin registrarse (`review-count: 0`). Aplicando la regla 3 de CLAUDE.md —*no acumular deuda: relee y reinicia desde Día 1*— y habiendo ampliado la nota con la sección 8 (electrización, conductores/aislantes, polarización), el contador arranca de nuevo.

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1) | 2026-08-24 | ✅ / ⚠️ / ❌ | |
| 2 (Día 3) | 2026-08-26 | ✅ / ⚠️ / ❌ | |
| 3 (Día 7) | 2026-08-30 | ✅ / ⚠️ / ❌ | |
| 4 (Día 14) | 2026-09-06 | ✅ / ⚠️ / ❌ | |
| 5 (Día 30) | 2026-09-22 | ✅ / ⚠️ / ❌ | |
| 6 (Día 60) | 2026-10-22 | ✅ / ⚠️ / ❌ | |

---

## 🔗 Relacionado

- Otras investigaciones: [[corriente-electrica]] — la carga **en movimiento**: $I = dQ/dt$. Esta nota profundiza la sección "La carga eléctrica y la cuantización" que allí aparece resumida.
- Otras investigaciones: [[voltaje]] — energía **por unidad de carga** (J/C); explica por qué más voltaje no significa más electrones.
- Otras investigaciones: [[la-composicion-de-la-materia-atomos]] — dónde vive la carga: protones, electrones y quarks $uud$ / $udd$.
- Otras investigaciones: [[resistencia]] — la cuantificación macroscópica de "cuánta libertad tiene la carga para moverse" ($R = \rho L/A$); el reverso cuantitativo de la sección "conductores vs. aislantes".
- Otras investigaciones: [[la-corriente-electrica-en-el-hogar]] — dónde sí se mueven cargas positivas (iones en electrólitos) y dónde la transferencia de carga se vuelve peligrosa (descarga a tierra).
- Otras investigaciones: [[ecuaciones-de-maxwell]] — la ley de Gauss $\nabla\cdot\mathbf{E}=\rho/\varepsilon_0$ es carga como fuente del campo; de ahí sale la ecuación de continuidad.
- Otras investigaciones: [[fotones-virtuales]] — la versión cuántica de la ley de Coulomb: la fuerza entre cargas la media el intercambio de fotones virtuales.
- Otras investigaciones: [[onda-electromagnetica]] — carga **acelerada** = radiación.
- Otras investigaciones: [[lagrangiano-y-principio-de-minima-accion]] — el marco (acción + simetrías + Noether) del que se deduce la conservación de la carga.
- Otras investigaciones: [[señalizacion-diferencial]] — aditividad de la carga aplicada a cancelar ruido en el par trenzado.
- Ideas: sin idea asociada por ahora.
- Proyectos: sin proyecto asociado por ahora.
- MOC: [[020 Física y Electromagnetismo MOC]]

---

#research #tema/física #tema/electromagnetismo #prioridad/alta #loci/anclado #review/pendiente
