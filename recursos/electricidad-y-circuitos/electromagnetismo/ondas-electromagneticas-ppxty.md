---
type: recurso
fuente: Investigación (Perplexity AI — nivel universitario)
fecha: 2026-04-13
dominio: física / electromagnetismo
relevancia: alta
tags:
  - research
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
---

## 🔗 Relacionado

- [[onda-electromagnetica]] — nota canónica del vault: Cornell, Feynman y anclas de memoria
- [[preguntas-clave-onda-electromagnetica]] — 5 preguntas esenciales de repaso
- [[fotones-virtuales]] — descripción cuántica del campo EM
- [[Ondas electromagnéticas - naturaleza, historia y frontera tecnológica]] — informe complementario con foco en historia y frontera

---

# La Onda Electromagnética: Estudio Integral

## Resumen Ejecutivo

Las ondas electromagnéticas constituyen uno de los fenómenos más fundamentales de la física moderna. Son perturbaciones autosostenidas de campos eléctricos y magnéticos acoplados que se propagan a través del espacio —incluso en el vacío— a la velocidad de la luz. Desde la predicción teórica de James Clerk Maxwell en 1864 hasta su confirmación experimental por Heinrich Hertz en 1887, el estudio de estas ondas ha transformado la comprensión del universo y ha dado origen a prácticamente toda la tecnología de comunicaciones, medicina diagnóstica y exploración espacial que define la era moderna.

Este informe aborda de manera exhaustiva el concepto, las propiedades, la historia, el espectro, la generación, las aplicaciones y los avances más recientes relacionados con las ondas electromagnéticas, orientado al nivel universitario.

---

## Definición y Concepto Central

Una onda electromagnética (onda EM) es una forma de energía radiante compuesta por campos eléctricos y magnéticos que oscilan de manera perpendicular entre sí y perpendicular a la dirección de propagación ([Physics LibreTexts](https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundless)/23:_Electromagnetic_Waves/23.2:_Electromagnetic_Waves_and_their_Properties)). A diferencia de las ondas mecánicas (como el sonido), las ondas electromagnéticas no requieren un medio material para propagarse: pueden viajar a través del vacío ([Muy Interesante](https://muyinteresante.okdiario.com/ciencia/61971.html)).

### Puntos Clave del Concepto

- **Naturaleza transversal**: Los campos eléctrico (\(\vec{E}\)) y magnético (\(\vec{B}\)) oscilan en planos perpendiculares entre sí y perpendiculares a la dirección de propagación de la onda ([Wikipedia - Electromagnetic field](https://en.wikipedia.org/wiki/Electromagnetic_field)).
- **Autopropagación**: Un campo eléctrico variable en el tiempo genera un campo magnético, y viceversa. Esta retroalimentación mutua permite que la onda se sostenga y propague indefinidamente en el vacío ([Wikipedia - Maxwell's equations](https://en.wikipedia.org/wiki/Maxwell's_equations)).
- **Dualidad onda-partícula**: La radiación electromagnética exhibe comportamiento tanto ondulatorio como corpuscular. Los fotones, las partículas cuánticas de la luz, transportan energía proporcional a la frecuencia: \(E = hf\), donde \(h = 6{,}63 \times 10^{-34}\) J·s es la constante de Planck ([Physics LibreTexts - Quantum](https://phys.libretexts.org/Courses/Prince_Georges_Community_College/PHY_2040:_General_Physics_III/08:_Introduction_to_Quantum_Physics/8.1:_History_and_Quantum_Mechanical_Quantities)).
- **Velocidad universal**: En el vacío, todas las ondas electromagnéticas viajan a la misma velocidad: \(c \approx 299\,792\,458\) m/s, independientemente de su frecuencia o longitud de onda ([CAB INTA-CSIC](https://partner.cab.inta-csic.es/printable_section.php?Section=Curso_Fundamentos_Capitulo_1)).

---

## Las Ecuaciones de Maxwell: Fundamento Matemático

Las ecuaciones de Maxwell son un conjunto de cuatro ecuaciones diferenciales parciales que constituyen la base teórica completa del electromagnetismo clásico. Formuladas por James Clerk Maxwell entre 1861 y 1865, unifican los fenómenos eléctricos, magnéticos y ópticos en un solo marco teórico ([Wikipedia - Maxwell's equations](https://en.wikipedia.org/wiki/Maxwell's_equations)).

### Forma Diferencial en el Vacío

| Ecuación | Nombre | Expresión | Significado Físico |
|----------|--------|-----------|-------------------|
| 1.ª | Ley de Gauss (eléctrica) | \(\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}\) | Las cargas eléctricas son fuentes del campo eléctrico |
| 2.ª | Ley de Gauss (magnética) | \(\nabla \cdot \vec{B} = 0\) | No existen monopolos magnéticos |
| 3.ª | Ley de Faraday | \(\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\) | Un campo magnético variable genera un campo eléctrico |
| 4.ª | Ley de Ampère-Maxwell | \(\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\) | Corrientes y campos eléctricos variables generan campo magnético |

([Universidad Complutense de Madrid](http://teorica.fis.ucm.es/ft11/FICHEROSELECTRODINAMICA.DIR/TEMA_1_ONDAS_EM.pdf), [Universidad de Murcia](https://webs.um.es/jmz/IntroFisiCompu/Alumnos/05_Alcaraz_Marta/ecmax.html))

La aportación crucial de Maxwell fue el término de **corriente de desplazamiento** (\(\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\)) en la cuarta ecuación. Este término establece que un campo eléctrico variable en el tiempo genera un campo magnético, completando la simetría entre los campos eléctrico y magnético y prediciendo la existencia de ondas electromagnéticas ([Lumen Learning](https://courses.lumenlearning.com/suny-physics/chapter/24-1-maxwells-equations-electromagnetic-waves-predicted-and-observed/)).

### Derivación de la Velocidad de la Luz

En el vacío (donde \(\rho = 0\) y \(\vec{J} = 0\)), las ecuaciones de Maxwell se combinan para producir ecuaciones de onda tanto para \(\vec{E}\) como para \(\vec{B}\):

\[
\nabla^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}
\]

\[
\nabla^2 \vec{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}
\]

Comparando con la ecuación de onda estándar \(\nabla^2 u = \frac{1}{v^2} \frac{\partial^2 u}{\partial t^2}\), se obtiene la velocidad de propagación:

\[
c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 3 \times 10^8 \text{ m/s}
\]

donde \(\mu_0 = 4\pi \times 10^{-7}\) H/m es la permeabilidad del vacío y \(\varepsilon_0 = 8{,}854 \times 10^{-12}\) F/m es la permitividad del vacío ([Cadence](https://resources.system-analysis.cadence.com/blog/msa2021-deriving-the-speed-of-electromagnetic-waves-from-maxwells-equation-in-vacuum-and-non-conducting-mediums), [Wikipedia - Maxwell's equations](https://en.wikipedia.org/wiki/Maxwell's_equations)). El hecho de que este valor coincidiera con la velocidad de la luz medida experimentalmente llevó a Maxwell a concluir que la luz es una onda electromagnética.

---

## Componentes y Propiedades Fundamentales

### Componentes de una Onda Electromagnética

Toda onda EM posee dos componentes vectoriales acoplados ([Physics LibreTexts](https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundless)/23:_Electromagnetic_Waves/23.2:_Electromagnetic_Waves_and_their_Properties)):

- **Campo eléctrico (\(\vec{E}\))**: Medido en voltios por metro (V/m). Ejerce fuerza sobre cargas eléctricas en la dirección del campo.
- **Campo magnético (\(\vec{B}\))**: Medido en teslas (T). Ejerce fuerza sobre cargas en movimiento, perpendicular tanto al campo como a la velocidad de la carga.

Ambos campos oscilan en fase (alcanzan sus máximos y mínimos simultáneamente) y están relacionados por la expresión \(E = cB\) en el vacío.

### Propiedades Fundamentales

| Propiedad | Símbolo | Definición | Unidad SI |
|-----------|---------|------------|-----------|
| **Longitud de onda** | \(\lambda\) | Distancia entre dos crestas (o valles) consecutivos | metro (m) |
| **Frecuencia** | \(f\) | Número de oscilaciones completas por segundo | hercio (Hz) |
| **Período** | \(T\) | Tiempo de una oscilación completa (\(T = 1/f\)) | segundo (s) |
| **Amplitud** | \(A\) | Máximo desplazamiento del campo desde el equilibrio | V/m o T |
| **Velocidad** | \(c\) | Velocidad de propagación en el vacío | m/s |
| **Energía del fotón** | \(E\) | Energía cuantizada por fotón (\(E = hf\)) | julio (J) o electronvoltio (eV) |
| **Intensidad** | \(I\) | Potencia por unidad de área | W/m² |

([Redeweb](https://www.redeweb.com/actualidad/ondas-electromagneticas/), [CAB INTA-CSIC](https://partner.cab.inta-csic.es/printable_section.php?Section=Curso_Fundamentos_Capitulo_1))

### Relaciones Matemáticas Clave

La relación fundamental entre velocidad, frecuencia y longitud de onda es:

\[
c = \lambda f
\]

La energía de un fotón se expresa como:

\[
E = hf = \frac{hc}{\lambda}
\]

Estas relaciones implican que a mayor frecuencia, menor longitud de onda y mayor energía por fotón. Esto explica, por ejemplo, por qué los rayos gamma son extremadamente energéticos y los rayos de radio transportan muy poca energía por fotón ([CAB INTA-CSIC](https://partner.cab.inta-csic.es/printable_section.php?Section=Curso_Fundamentos_Capitulo_1)).

En un medio material con permitividad relativa \(\varepsilon_r\) y permeabilidad relativa \(\mu_r\), la velocidad se reduce a:

\[
v = \frac{c}{\sqrt{\varepsilon_r \mu_r}} = \frac{c}{n}
\]

donde \(n = \sqrt{\varepsilon_r \mu_r}\) es el índice de refracción del medio ([Cadence](https://resources.system-analysis.cadence.com/blog/msa2021-deriving-the-speed-of-electromagnetic-waves-from-maxwells-equation-in-vacuum-and-non-conducting-mediums)).

---

## Generación y Propagación de Ondas Electromagnéticas

### Mecanismo de Generación

Las ondas electromagnéticas se generan cuando una **carga eléctrica experimenta aceleración** —es decir, cuando cambia su velocidad o dirección de movimiento ([Muy Interesante](https://muyinteresante.okdiario.com/ciencia/61971.html)). El proceso fundamental se describe así:

1. Una carga eléctrica acelerada perturba el campo eléctrico en su entorno, creando una variación temporal de \(\vec{E}\).
2. Según la ley de Ampère-Maxwell, este campo eléctrico variable genera un campo magnético \(\vec{B}\).
3. Según la ley de Faraday, el campo magnético variable genera a su vez un nuevo campo eléctrico.
4. Este ciclo de inducción mutua se autopropaga a través del espacio como una onda electromagnética ([Physics LibreTexts](https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundless)/23:_Electromagnetic_Waves/23.2:_Electromagnetic_Waves_and_their_Properties)).

### Fuentes Comunes de Ondas EM

- **Antenas de radio y televisión**: Electrones oscilando en conductores producen ondas de radio y microondas.
- **Cavidades resonantes y magnetrones**: Generan microondas (como en hornos microondas y radares).
- **Cuerpos calientes (radiación térmica)**: Todo cuerpo con temperatura superior al cero absoluto emite radiación infrarroja. A temperaturas suficientemente altas, emite luz visible (incandescencia).
- **Transiciones electrónicas en átomos y moléculas**: Generan luz visible, ultravioleta e infrarroja.
- **Desaceleración de partículas de alta energía (Bremsstrahlung)**: Produce rayos X.
- **Desintegración nuclear y reacciones nucleares**: Producen rayos gamma.

([Lumen Learning](https://courses.lumenlearning.com/suny-physics/chapter/24-1-maxwells-equations-electromagnetic-waves-predicted-and-observed/), [Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum))

### Propagación

Una onda electromagnética plana que se propaga en la dirección \(+x\) puede describirse matemáticamente como:

\[
\vec{E}(x, t) = E_0 \sin(kx - \omega t) \, \hat{y}
\]

\[
\vec{B}(x, t) = B_0 \sin(kx - \omega t) \, \hat{z}
\]

donde \(k = \frac{2\pi}{\lambda}\) es el número de onda, \(\omega = 2\pi f\) es la frecuencia angular, y \(E_0 = cB_0\) ([University of Edinburgh](https://www2.ph.ed.ac.uk/~mevans/em/lec13.pdf)). La onda transporta energía y momento lineal. La densidad de flujo de energía (vector de Poynting) es:

\[
\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}
\]

y apunta en la dirección de propagación.

---

## El Espectro Electromagnético

El espectro electromagnético es el continuo de todas las frecuencias (o longitudes de onda) posibles de radiación electromagnética. Se divide convencionalmente en siete regiones principales, aunque no existen fronteras nítidas entre ellas ([ESA/Webb](https://esawebb.org/wordbank/electromagnetic-spectrum/), [Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum)).

![El Espectro Electromagnético](https://d2z0o16i8xm8ak.cloudfront.net/e40d2262-73d5-4b32-9194-1c50456b467a/60865566-4deb-43c3-8420-24a77967406b/espectro-electromagnetico.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnowbzE2aTh4bThhay5jbG91ZGZyb250Lm5ldC9lNDBkMjI2Mi03M2Q1LTRiMzItOTE5NC0xYzUwNDU2YjQ2N2EvNjA4NjU1NjYtNGRlYi00M2MzLTg0MjAtMjRhNzc5Njc0MDZiL2VzcGVjdHJvLWVsZWN0cm9tYWduZXRpY28ucG5nPyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NzY2NDUxNDZ9fX1dfQ__&Signature=Y2HNQBYbGGIj-f47iajqUKaT3EMzwmu2bK52WBWhhwHYeCkrP~~vR60GVymkvCiU8IpixwNSo7g~DTAsi-G-xXejqL6dqJkeO9QwldcscK6ZYU60wSakzdIBlEHvd~u-9VdQ4dB-quLT6ajAuxQIul2Gp-a7EC1KipSgtDC2R9J5bMtseE0OwIKju3-aiI5s84vLroltwpvvAbsXvQw9Np~I4jgbTRow8RFt3NFeILJMw9N17~GLAPa8SRjEdLQQ0OywBa2GWuhh8qcbC0xon-QcM2HA5JP57-W5L3qPdp3TGYG1TVeARAScjEeNsrjFS0FBhSe3RxNinuwiet3~MQ__&Key-Pair-Id=K1BF7XGXAIMYNX)

### Regiones del Espectro

| Región | Longitud de onda | Frecuencia | Energía por fotón | Interacción con la materia |
|--------|-----------------|------------|-------------------|--------------------------|
| **Ondas de radio** | > 1 mm (hasta km) | < 300 GHz | < 1,24 meV | Oscilación colectiva de portadores de carga (antenas) |
| **Microondas** | 1 mm – 1 m | 300 MHz – 300 GHz | 1,24 μeV – 1,24 meV | Rotación molecular, calentamiento dieléctrico |
| **Infrarrojo** | 750 nm – 1 mm | 300 GHz – 400 THz | 1,24 meV – 1,7 eV | Vibración molecular, emisión térmica |
| **Luz visible** | 380 – 750 nm | 400 – 790 THz | 1,65 – 3,26 eV | Excitación de electrones moleculares (visión, fotosíntesis) |
| **Ultravioleta** | 10 – 380 nm | 790 THz – 30 PHz | 3,26 – 124 eV | Excitación y eyección de electrones de valencia (fotoionización) |
| **Rayos X** | 0,01 – 10 nm | 30 PHz – 30 EHz | 124 eV – 124 keV | Eyección de electrones internos, dispersión Compton |
| **Rayos gamma** | < 0,01 nm | > 30 EHz | > 124 keV | Excitación y disociación nuclear, creación de pares |

([Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum), [Siyavula](https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-03))

### Radiación Ionizante vs. No Ionizante

Las ondas con fotones de alta energía (rayos gamma, rayos X y ultravioleta extremo) se denominan **radiación ionizante** porque tienen suficiente energía para arrancar electrones de los átomos, provocando reacciones químicas y daño biológico. Las ondas de menor frecuencia (visible, infrarroja, microondas y radio) son **no ionizantes** ([Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum)).

### La Brecha de Terahercios

Entre las microondas y el infrarrojo lejano se encuentra la región de **terahercios** (100 GHz – 30 THz), históricamente poco explorada por la dificultad de generar y detectar estas frecuencias. Actualmente, esta brecha está siendo cerrada con avances significativos en fuentes, detectores y aplicaciones ([Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum)).

---

## Historia Completa de las Ondas Electromagnéticas

La comprensión de las ondas electromagnéticas es el resultado de siglos de investigación acumulativa. A continuación se presenta la cronología detallada de los hitos más significativos.

![Cronología de las Ondas Electromagnéticas](https://d2z0o16i8xm8ak.cloudfront.net/e40d2262-73d5-4b32-9194-1c50456b467a/7ebac163-1b7e-4fcc-a141-8b2de14a2f9b/cronologia-ondas-em.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnowbzE2aTh4bThhay5jbG91ZGZyb250Lm5ldC9lNDBkMjI2Mi03M2Q1LTRiMzItOTE5NC0xYzUwNDU2YjQ2N2EvN2ViYWMxNjMtMWI3ZS00ZmNjLWExNDEtOGIyZGUxNGEyZjliL2Nyb25vbG9naWEtb25kYXMtZW0ucG5nPyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NzY2NDUxNDZ9fX1dfQ__&Signature=LMy5qlEPnmrSE20DJfAEFt6hb6-jgGQTYxkI2qsqmptLuQVdpmoNhuF5hM9NQLe3XTABvFn5vjE47Vq1vc5TbTTW2QWOUCJGopEJQVPWCkvVRl69WsXUJfxJ7qprexjSAEQReEp3da5PcxURRKUcTuCKU1InZW-6d-pISA2UsKP6XkUS3mtsinCAvQD7pNC7e7zs~evarmT5nXkiY6qeYNrXK1uTCMWLn~G3zW-5vrz5Nrpld1tzwpumGFjpvER3SHz3DeqAopwEpuVnTjIfyAmv5U7y2SUa3Y4bddceJBFwMz~0S2VPqXYsCd8uCSK-zmgGGGHvFj6GMJvnov~1yA__&Key-Pair-Id=K1BF7XGXAIMYNX)

### Era de los Descubrimientos Fundamentales (1600–1830)

| Año | Científico | Hito |
|-----|-----------|------|
| 1600 | William Gilbert | Publica *De Magnete*, distinguiendo por primera vez la electricidad del magnetismo de forma sistemática |
| 1752 | Benjamin Franklin | Demuestra la naturaleza eléctrica del rayo, establece las cargas positiva y negativa |
| 1785 | Charles Coulomb | Formula la ley de Coulomb: la fuerza entre cargas es inversamente proporcional al cuadrado de la distancia |
| 1800 | Alessandro Volta | Inventa la pila voltaica, primera fuente de corriente eléctrica continua |
| 1801 | Johann Ritter | Descubre la radiación ultravioleta |
| 1820 | Hans Christian Oersted | Descubre que una corriente eléctrica desvía una aguja magnética, demostrando la conexión entre electricidad y magnetismo |
| 1821 | André-Marie Ampère | Formula la ley de Ampère: relación matemática entre corriente eléctrica y campo magnético |
| 1826 | Georg Simon Ohm | Establece la ley de Ohm: \(V = IR\) |

([ALLPCB](https://www.allpcb.com/allelectrohub/a-brief-history-of-electromagnetism), [Scribd - Timeline](https://www.scribd.com/document/716514497/TIMELINE-OF-ELECTROMAGNETISM-AND-CLASSICAL-OPTICS), [NEWSM](https://newsm.org/wireless-e/wireless-timeline/))

### Era de la Unificación Electromagnética (1831–1890)

| Año | Científico | Hito |
|-----|-----------|------|
| 1831 | Michael Faraday | Descubre la inducción electromagnética: un campo magnético variable genera corriente eléctrica. Base de generadores y transformadores |
| 1845 | Michael Faraday | Descubre el efecto Faraday: un campo magnético puede rotar el plano de polarización de la luz, sugiriendo conexión entre luz y magnetismo |
| 1864 | James Clerk Maxwell | Publica *"A Dynamical Theory of the Electromagnetic Field"*: formula las cuatro ecuaciones que predicen ondas EM viajando a la velocidad de la luz |
| 1873 | James Clerk Maxwell | Publica *A Treatise on Electricity and Magnetism*, síntesis definitiva de la teoría electromagnética |
| 1887 | Heinrich Hertz | Construye el primer transmisor y receptor de ondas EM. Demuestra experimentalmente la reflexión, refracción, difracción y polarización de las ondas, y confirma que viajan a la velocidad de la luz |

([ALLPCB](https://www.allpcb.com/allelectrohub/a-brief-history-of-electromagnetism), [History of Science - KAIST](https://kaisthistory.wordpress.com/2016/05/20/electromagnetic-waves-maxwell-hertz/))

La demostración de Hertz en 1887-1888 fue decisiva: usando un oscilador de chispa como transmisor y un aro de cobre con una brecha como receptor, observó chispas inducidas a distancia, confirmando que ondas electromagnéticas invisibles se propagaban por el espacio. Además, demostró que estas ondas exhibían todas las propiedades de la luz (reflexión, refracción, difracción, polarización), validando definitivamente la teoría de Maxwell ([ALLPCB](https://www.allpcb.com/allelectrohub/a-brief-history-of-electromagnetism)).

### Era de las Aplicaciones y la Teoría Cuántica (1895–1930)

| Año | Científico | Hito |
|-----|-----------|------|
| 1895 | Wilhelm Röntgen | Descubre los rayos X |
| 1895 | Guglielmo Marconi | Realiza la primera transmisión inalámbrica por ondas de radio |
| 1897 | J. J. Thomson | Descubre el electrón |
| 1900 | Max Planck | Propone la cuantización de la energía (\(E = hf\)) para resolver el problema de la radiación del cuerpo negro. Nace la mecánica cuántica |
| 1900 | Paul Villard | Descubre los rayos gamma |
| 1905 | Albert Einstein | Explica el efecto fotoeléctrico proponiendo que la luz se compone de cuantos discretos (fotones) con energía \(E = hf\) |
| 1916 | Albert Einstein | Predice la emisión estimulada (base teórica del láser) |
| 1923 | Arthur Compton | Demuestra el efecto Compton: los fotones transfieren momento a los electrones, confirmando la naturaleza corpuscular de la luz |

([Galileo Unbound](https://galileo-unbound.blog/2020/01/13/who-invented-the-quantum-einstein-vs-planck/), [Physics LibreTexts - Quantum](https://phys.libretexts.org/Courses/Prince_Georges_Community_College/PHY_2040:_General_Physics_III/08:_Introduction_to_Quantum_Physics/8.1:_History_and_Quantum_Mechanical_Quantities), [Spectroscopy Online](https://www.spectroscopyonline.com/view/electromagnetic-spectrum-history))

### Era Tecnológica Moderna (1930–presente)

| Período | Desarrollo |
|---------|-----------|
| 1930s–1940s | Desarrollo del radar (microondas) durante la Segunda Guerra Mundial |
| 1960 | Theodore Maiman construye el primer láser funcional (luz coherente) |
| 1960s–1970s | Desarrollo de comunicaciones por satélite y fibra óptica |
| 1990s | Expansión de las telecomunicaciones móviles (2G) y Wi-Fi |
| 2000s–2010s | Redes 3G, 4G/LTE; uso de ondas milimétricas en comunicaciones |
| 2019–presente | Despliegue de redes 5G (frecuencias sub-6 GHz y bandas milimétricas hasta 40 GHz) |

([ITU](https://www.itu.int/en/mediacentre/backgrounders/Pages/5G-EMF-health.aspx), [Ericsson](https://www.ericsson.com/en/about-us/sustainability-and-corporate-responsibility/responsible-business/radio-waves-and-health/5g))

---

## Aplicaciones Prácticas e Importancia

Las ondas electromagnéticas son la base de una enorme variedad de tecnologías que permean todos los aspectos de la vida moderna.

### Telecomunicaciones

- **Radio y televisión**: Ondas de radio (kHz a GHz) transmiten señales de audio y video a nivel global.
- **Telefonía móvil (2G–5G)**: Utiliza frecuencias de radio desde 700 MHz hasta 40 GHz. Las redes 5G incorporan beamforming y MIMO masivo con cientos de pequeñas antenas para dirigir las transmisiones y maximizar la eficiencia ([ITU](https://www.itu.int/en/mediacentre/backgrounders/Pages/5G-EMF-health.aspx), [Ericsson](https://www.ericsson.com/en/about-us/sustainability-and-corporate-responsibility/responsible-business/radio-waves-and-health/5g)).
- **Wi-Fi y Bluetooth**: Operan en las bandas de microondas (2,4 GHz y 5 GHz).
- **Comunicaciones por satélite**: Emplean microondas para GPS, telefonía y transmisión de datos.
- **Fibra óptica**: Transmite datos como pulsos de luz infrarroja cercana a través de fibras de vidrio.

### Medicina

- **Rayos X (radiografías y tomografías CT)**: Permiten la visualización de estructuras internas del cuerpo.
- **Resonancia magnética (MRI)**: Utiliza ondas de radiofrecuencia y campos magnéticos intensos.
- **Radioterapia**: Emplea rayos gamma y rayos X de alta energía para destruir células cancerosas.
- **Medicina nuclear (PET)**: Detecta rayos gamma emitidos por radioisótopos inyectados en el paciente.
- **Diatermia**: Usa microondas para calentar tejidos con fines terapéuticos.

### Ciencia e Investigación

- **Espectroscopía**: Analiza la interacción de la radiación EM con la materia para identificar composiciones químicas.
- **Astronomía**: Observa el universo en todas las bandas del espectro (radioastronomía, infrarrojo, visible, UV, rayos X, rayos gamma) ([Wikipedia - Electromagnetic spectrum](https://en.wikipedia.org/wiki/Electromagnetic_spectrum)).
- **Radar y LIDAR**: Detectan objetos y miden distancias mediante microondas y luz láser.

### Vida Cotidiana

- **Hornos microondas**: Calientan alimentos excitando moléculas de agua con microondas a 2,45 GHz.
- **Control remoto (infrarrojo)**: Transmite comandos mediante pulsos de luz infrarroja.
- **Iluminación**: Bombillas, LEDs y láseres producen luz visible.
- **Visión nocturna**: Detecta radiación infrarroja emitida por cuerpos calientes.
- **Esterilización UV**: Emplea radiación ultravioleta para eliminar microorganismos.

([Siyavula](https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-03), [Redeweb](https://www.redeweb.com/actualidad/ondas-electromagneticas/))

---

## Pregunta Adicional: ¿Es segura la exposición a ondas electromagnéticas?

Esta pregunta es fundamental, especialmente en el contexto del despliegue de nuevas tecnologías como el 5G.

Las ondas electromagnéticas de baja frecuencia (radio, microondas, infrarrojas y luz visible) son **no ionizantes**: no poseen suficiente energía por fotón para romper enlaces químicos o ionizar átomos. Según la Unión Internacional de Telecomunicaciones (ITU), "a pesar de estudios extensos durante las últimas dos o tres décadas, no hay indicación de un riesgo aumentado para la salud cuando la exposición a campos electromagnéticos se mantiene por debajo de los niveles especificados por organismos internacionales" ([ITU](https://www.itu.int/en/mediacentre/backgrounders/Pages/5G-EMF-health.aspx)). Investigaciones específicas sobre radiación 5G (28 GHz) no han encontrado efectos significativos sobre células humanas en condiciones de uso normal ([PMC/NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC7794711/)).

Por otro lado, la radiación ionizante (UV extremo, rayos X, rayos gamma) sí puede causar daño celular y genético, por lo que su uso requiere protección y dosimetría estrictas.

---

## Avances Recientes (2024–2026)

### Tecnología de Terahercios

La "brecha de terahercios" está siendo cerrada rápidamente. En 2025, investigadores de la EPFL y Harvard desarrollaron un chip híbrido capaz de convertir bidireccionalmente entre pulsos electromagnéticos en el rango de terahercios y el rango óptico, un avance publicado en *Nature Communications* ([Tech Xplore](https://techxplore.com/news/2025-08-hybrid-chip-enables-conversion-terahertz.html)). También en 2025, científicos demostraron el control preciso de plasmones polaritones de Dirac (DPPs) en la región de terahercios usando aislantes topológicos, con aplicaciones potenciales en comunicaciones ultrarrápidas y dispositivos cuánticos ([Phys.org](https://phys.org/news/2025-09-terahertz-faster-electronics.html)). Además, absorbedores de terahercios basados en metamateriales de carbono han logrado anchos de banda de 8,99 THz con más del 90% de absorción ([SPIE](https://spie.org/news/innovative-design-marks-groundbreaking-progress-in-terahertz-technology)).

### Magnones y Computación Ultrarrápida

En noviembre de 2025, ingenieros de la Universidad de Delaware descubrieron que los magnones —ondas magnéticas que se desplazan por materiales sólidos— son capaces de generar señales eléctricas medibles. En materiales antiferromagnéticos, estos magnones operan a frecuencias de terahercios (unas mil veces más rápido que las ondas magnéticas convencionales), abriendo un camino hacia la computación ultrarrápida y de bajo consumo energético ([ScienceDaily](https://www.sciencedaily.com/releases/2025/11/251104094141.htm)).

### Fibra Óptica de Núcleo Hueco

Microsoft y la Universidad de Southampton rompieron un límite de 40 años en transmisión por fibra óptica al reemplazar el núcleo de vidrio con aire, reduciendo la pérdida de señal por debajo de 0,1 decibelios por kilómetro y aumentando las velocidades en un 45%. Este avance tiene implicaciones tanto para internet de alta velocidad como para redes cuánticas de baja latencia ([Bohring](https://bohring.substack.com/p/10-most-significant-physics-breakthroughs)).

### Ondas Gravitacionales y Radiación EM

En 2025, los detectores LIGO capturaron la señal gravitacional más clara hasta la fecha (GW250114), permitiendo pruebas cuantitativas del teorema de área de Hawking y la naturaleza Kerr de los agujeros negros. Aunque las ondas gravitacionales no son electromagnéticas, su detección complementa la astronomía de ondas EM al proporcionar información sobre eventos cósmicos donde la radiación electromagnética puede estar ausente u oscurecida ([Bohring](https://bohring.substack.com/p/10-most-significant-physics-breakthroughs)).

---

## Síntesis y Conclusiones

Las ondas electromagnéticas son perturbaciones autopropagantes de campos eléctricos y magnéticos acoplados que obedecen las ecuaciones de Maxwell. Sus propiedades fundamentales —velocidad, frecuencia, longitud de onda y energía del fotón— están interrelacionadas por ecuaciones simples pero profundas que conectan la electrodinámica clásica con la mecánica cuántica.

Desde los primeros experimentos de Oersted y Faraday que revelaron la conexión entre electricidad y magnetismo, pasando por la síntesis teórica de Maxwell y la verificación experimental de Hertz, hasta la revolución cuántica de Planck y Einstein, el estudio de las ondas EM representa una de las narrativas más coherentes y triunfales de la historia de la ciencia.

Hoy, las ondas electromagnéticas son indispensables para la civilización tecnológica: telecomunicaciones, medicina, ciencia, industria y vida cotidiana dependen de ellas. Los avances recientes en tecnología de terahercios, magnones ultrarrápidos y fibra óptica de núcleo hueco indican que el potencial de estas ondas sigue expandiéndose, prometiendo comunicaciones más rápidas, computación más eficiente y una comprensión aún más profunda del universo.


---

## 🔗 Relacionado

- [[onda-electromagnetica]] — nota canónica del vault: Cornell, Feynman y anclas de memoria
- [[preguntas-clave-onda-electromagnetica]] — 5 preguntas esenciales para repasar el tema
- [[fotones-virtuales]] — descripción cuántica del campo electromagnético
- [[Ondas electromagnéticas - naturaleza, historia y frontera tecnológica]] — informe con foco en historia y frontera tecnológica
- [[Investigación Onda Electromagnética Universitaria - gemini]] — informe exhaustivo universitario sobre el mismo tema
