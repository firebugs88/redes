
# explica detalladamente como las simetrías globales dan origen a leyes de conservación (vía el Teorema de Noether, como la conservación de la carga eléctrica

Tengo suficiente información para dar una respuesta detallada y rigurosa. Voy a estructurarla cubriendo: el formalismo lagrangiano, la derivación general del Teorema de Noether, su aplicación a simetrías globales, y el caso concreto de la simetría U(1) y la conservación de la carga eléctrica.

***

# Simetrías Globales, Teorema de Noether y Conservación de la Carga Eléctrica

El **Teorema de Noether** establece que toda simetría continua global de la acción de un sistema físico implica la existencia de una corriente conservada y, por tanto, de una carga conservada. Este resultado, demostrado por Emmy Noether en 1915 y publicado en 1918, unifica de manera profunda la geometría abstracta (simetrías) con las leyes físicas de conservación.[^1_1][^1_2][^1_3]

***

## El Formalismo Lagrangiano: La Acción

El punto de partida es el **principio de mínima acción**. Para un sistema de campos $\phi_a(x)$, se define la acción como:

$$
S[\phi] = \int d^4x \, \mathcal{L}(\phi_a, \partial_\mu \phi_a)
$$

donde $\mathcal{L}$ es la **densidad Lagrangiana**. Las ecuaciones de movimiento se obtienen de la condición $\delta S = 0$, que da las ecuaciones de **Euler-Lagrange**:[^1_4]

$$
\frac{\partial \mathcal{L}}{\partial \phi_a} - \partial_\mu \left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi_a)}\right) = 0
$$

Las simetrías del sistema son las transformaciones de los campos que dejan la acción $S$ invariante (al menos salvo una derivada total de frontera).[^1_5]

***

## Tipos de Simetrías

Las simetrías se clasifican en dos grandes categorías:[^1_6]

- **Simetrías espacio-temporales**: translaciones (→ conservación del momento y energía), rotaciones (→ momento angular).
- **Simetrías internas**: no modifican las coordenadas espacio-temporales, solo las componentes del campo. La conservación de la carga eléctrica, el número bariónico y el isospín son consecuencias de simetrías internas.[^1_7]

Además, una simetría puede ser:

- **Global**: el parámetro $\alpha$ de la transformación es una constante igual en todo el espacio-tiempo.
- **Local (gauge)**: $\alpha = \alpha(x)$ varía punto a punto. El Teorema de Noether en su **primera versión** aplica a las simetrías globales.[^1_2][^1_8]

***

## Derivación del Teorema de Noether (Primera Versión)

### Paso 1: La transformación infinitesimal de simetría

Considérese una transformación continua infinitesimal generada por el parámetro $\epsilon$ y el generador $T$:

$$
\phi_a'(x) = \phi_a(x) + \epsilon \, (iT\phi_a)(x)
$$

Para que sea una simetría, la densidad Lagrangiana debe cambiar **a lo sumo** en una derivada total:[^1_5]

$$
\delta \mathcal{L} = \epsilon \cdot \partial_\mu I^\mu(\phi, \partial\phi)
$$

### Paso 2: Variación explícita del Lagrangiano

Variando $\mathcal{L}$ con respecto al campo y usando integración por partes:

$$
\delta \mathcal{L} = \sum_a \left[\frac{\partial \mathcal{L}}{\partial \phi_a} - \partial_\mu\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi_a)}\right)\right] \delta\phi_a \;+\; \partial_\mu\left[\sum_a \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi_a)} \delta\phi_a\right]
$$

El primer término es cero **sobre las ecuaciones de movimiento** (Euler-Lagrange). Queda solo la divergencia total:[^1_5]

$$
\delta \mathcal{L} = \epsilon \cdot \partial_\mu \left[\sum_a \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi_a)} \cdot iT\phi_a\right]
$$

### Paso 3: Definición de la corriente de Noether

Comparando con la condición de simetría $\delta \mathcal{L} = \epsilon \cdot \partial_\mu I^\mu$, se define la **corriente de Noether**:[^1_9][^1_5]

$$
J^\mu \;\overset{\text{def}}{=}\; \sum_a \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi_a)} \cdot iT\phi_a \;-\; I^\mu(\phi, \partial\phi)
$$

### Paso 4: Conservación local y carga global

Cuando los campos obedecen las ecuaciones de movimiento, la corriente satisface la **ecuación de continuidad** (conservación local):[^1_6]

$$
\partial_\mu J^\mu(x) = 0
$$

Esto es análogo a la continuidad en electrodinámica clásica $(\partial\rho/\partial t + \nabla \cdot \mathbf{J} = 0)$. Integrando sobre un volumen espacial y usando el teorema de Gauss, se obtiene la **carga de Noether** (conservada globalmente):[^1_6]

$$
Q(t) \equiv \int d^3x \, J^0(\mathbf{x}, t) = \text{constante en el tiempo}
$$

La demostración formal es: si $\partial_\mu J^\mu = 0$ y el campo cae a cero en el infinito espacial, entonces $\dot{Q} = 0$ para todo tiempo $t$.[^1_6]

***

## Caso Concreto: La Simetría Global U(1) y la Carga Eléctrica

### El grupo U(1)

La simetría global U(1) es la simetría de **cambio de fase global** de un campo complejo. Sus elementos son $g = e^{i\alpha}$ con $\alpha \in \mathbb{R}$, y forman un grupo bajo la multiplicación compleja, isomorfo al círculo unitario $S^1$. Este es el caso más relevante para la conservación de la carga eléctrica.[^1_6]

### Campo escalar complejo (Klein-Gordon)

Considérese el Lagrangiano para un campo escalar complejo $\phi(x)$:[^1_10][^1_6]

$$
\mathcal{L} = (\partial_\mu \phi)^*(\partial^\mu \phi) - V(|\phi|^2)
$$

Este Lagrangiano es **manifiestamente invariante** bajo la transformación global U(1):

$$
\phi(x) \mapsto \phi'(x) = e^{i\alpha}\phi(x), \qquad \phi^*(x) \mapsto \phi'^*(x) = e^{-i\alpha}\phi^*(x)
$$

donde $\alpha$ es una **constante real** igual en todo el espacio-tiempo (global). Para una transformación infinitesimal $\alpha \to \epsilon$:[^1_6]

$$
\delta\phi = i\epsilon\,\phi, \qquad \delta\phi^* = -i\epsilon\,\phi^*
$$

Aplicando la fórmula de Noether con $I^\mu = 0$ (pues $\mathcal{L}$ es estrictamente invariante):

$$
J^\mu = i\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\phi - \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi^*)}\phi^*\right) = i(\partial^\mu\phi^* \cdot \phi - \phi^* \cdot \partial^\mu\phi) \equiv i\phi^*\overleftrightarrow{\partial^\mu}\phi
$$

Esta corriente satisface $\partial_\mu J^\mu = 0$ sobre las ecuaciones de movimiento, y la **carga conservada** es:[^1_6]

$$
Q = \int d^3x \, J^0 = \int d^3x \, i\left(\phi^*\dot\phi - \dot\phi^*\phi\right) = \text{const.}
$$

### Campo de Dirac (QED)

En la **Electrodinámica Cuántica (QED)**, los electrones se describen mediante el campo espinorial de Dirac $\psi(x)$, con Lagrangiano libre:[^1_6]

$$
\mathcal{L}_{\text{Dirac}} = \bar{\psi}(i\slashed{\partial} - m)\psi
$$

Este Lagrangiano es invariante bajo la simetría global U(1):[^1_11][^1_12]

$$
\psi(x) \mapsto \psi'(x) = e^{i\theta}\psi(x), \qquad \bar\psi(x) \mapsto \bar\psi'(x) = e^{-i\theta}\bar\psi(x)
$$

La **corriente de Noether** resultante es:[^1_12][^1_13]

$$
J^\mu_{\text{Dirac}} = \bar\psi\,\gamma^\mu\psi
$$

con la ley de conservación $\partial_\mu J^\mu = 0$. La **carga eléctrica conservada** es entonces:[^1_14][^1_11]

$$
Q = -e \int d^3x \, \psi^\dagger\psi = -e \int d^3x \, J^0
$$

donde $e$ es la carga del electrón. Que $Q$ sea constante en el tiempo es precisamente la **ley de conservación de la carga eléctrica**.[^1_1][^1_14]

***

## De Simetría Global a Simetría Local: El Camino al Campo Electromagnético

Un resultado extraordinario es que **si se exige que la simetría U(1) sea local** (es decir, $\theta = \theta(x)$), el Lagrangiano libre de Dirac ya no es invariante. Para restaurar la invariancia, es necesario introducir un **campo vectorial $A_\mu(x)$** (el potencial electromagnético) y reemplazar la derivada ordinaria por la **derivada covariante**:[^1_6]

$$
\partial_\mu \;\longrightarrow\; D_\mu = \partial_\mu - ieA_\mu(x)
$$

El campo $A_\mu$ debe transformarse como $A_\mu \to A_\mu + \frac{1}{e}\partial_\mu\theta$, que es exactamente una transformación de gauge electromagnética. Este procedimiento, llamado **acoplamiento mínimo**, muestra que todo el electromagnetismo emerge de la exigencia de invariancia gauge local U(1): la simetría global genera la carga conservada, y al promoverla a local, genera la dinámica del fotón.[^1_11][^1_6]

***

## Cuadro Resumen: Simetría → Corriente → Cantidad Conservada

| Simetría continua global | Corriente de Noether $J^\mu$ | Cantidad conservada $Q$ |
| :-- | :-- | :-- |
| Traslación temporal | Densidad de energía $T^{0\nu}$ | Energía $E$ |
| Traslación espacial | Densidad de momento $T^{i\nu}$ | Momento lineal $\mathbf{p}$ |
| Rotación espacial | Corriente de momento angular | Momento angular $\mathbf{L}$ |
| Fase global U(1) de campo complejo | $J^\mu = i\phi^*\overleftrightarrow{\partial^\mu}\phi$ | Carga $Q = \int J^0 \, d^3x$ |
| Fase global U(1) de campo de Dirac | $J^\mu = \bar\psi\gamma^\mu\psi$ | Carga eléctrica $Q = -e\int\psi^\dagger\psi\,d^3x$ |

[^1_15][^1_16][^1_1]

***

## El Teorema Inverso y la Profundidad de Noether

El teorema también funciona en sentido inverso: si $Q$ es una carga conservada, entonces la transformación $\delta\phi_a = \epsilon\,\partial Q/\partial p_a$ es una simetría del sistema. Esto implica que las leyes de conservación no son axiomas fundamentales del universo, sino **consecuencias** de simetrías más profundas. Toda la estructura del Modelo Estándar de partículas —con sus simetrías SU(3)×SU(2)×U(1)— está construida sobre esta correspondencia: cada fuerza fundamental y cada número cuántico conservado refleja una simetría del Lagrangiano.[^1_17][^1_2][^1_14][^1_1]
<span style="display:none">[^1_18][^1_19][^1_20][^1_21][^1_22][^1_23][^1_24][^1_25][^1_26][^1_27]</span>

<div align="center">⁂</div>

[^1_1]: https://culturacientifica.com/2025/02/11/como-el-teorema-de-noether-revoluciono-la-fisica/

[^1_2]: https://arxiv.org/pdf/1601.03616.pdf

[^1_3]: https://es.scribd.com/document/721612442/teorema-de-noether

[^1_4]: https://es.scribd.com/document/831938169/Temario-Completo-Mecanica

[^1_5]: https://web2.ph.utexas.edu/~vadim/Classes/2020f/Noether.pdf

[^1_6]: http://eduardo.physics.illinois.edu/phys582/582-chapter3-edited.pdf

[^1_7]: https://www.ugr.es/~jillana/SM/t2-TQC.pdf

[^1_8]: http://arxiv.org/pdf/gr-qc/0608096.pdf

[^1_9]: https://www.physics.rutgers.edu/~shapiro/615/lects/lect04_2.pdf

[^1_10]: http://arxiv.org/pdf/0802.2401.pdf

[^1_11]: https://hep.physics.utoronto.ca/~orr/wwwroot/old_phy357/Notes_2002/Notes11.pdf

[^1_12]: https://www2.ph.ed.ac.uk/~paboyle/Teaching/SM_tutorials/StMod5.pdf

[^1_13]: https://www.youtube.com/watch?v=hgrhfkcXlAQ

[^1_14]: http://www.lpthe.jussieu.fr/~zuber/Cours/chap4_12e.pdf

[^1_15]: https://ddd.uab.cat/pub/edlc/edlc_a2005nEXTRA/edlc_a2005nEXTRAp470simley.pdf

[^1_16]: https://www.youtube.com/watch?v=kQiVfG6mkQg

[^1_17]: https://pcforte.mi.infn.it/ft/esami/solft0621.pdf

[^1_18]: https://paginas.matem.unam.mx/videos/todos-los-videos/2022/noviembre-2022/hablando-de-matematicas-noviembre-2022/el-teorema-de-noether-la-dualidad-entre-simetrias-y-leyes-de-conservacion-vista-desde-el-calculo-de-variaciones

[^1_19]: https://edu.itp.phys.ethz.ch/hs12/qft1/Chapter04.pdf

[^1_20]: https://arxiv.org/pdf/2204.02187.pdf

[^1_21]: https://www.arxiv.org/pdf/1011.3057.pdf

[^1_22]: https://arxiv.org/pdf/2206.00283.pdf

[^1_23]: http://arxiv.org/pdf/1001.0091.pdf

[^1_24]: https://teceo.slp.tecnm.mx/index.php/teceo/article/download/15/4/12

[^1_25]: http://strings.itp.ac.ru/Lecture-Notes/CFT2022.pdf

[^1_26]: https://www.youtube.com/watch?v=AGsLpfOCeqE

[^1_27]: http://casanchi.org/fis/conservasimetria01.pdf

