---
type: research
fuente: Estudio propio
fecha: 2026-06-03
relevancia: media
dominio: redes / historia de Ethernet
review-count: 0
ultimo-review: 2026-06-03
next-review: 2026-07-01
nivel-retencion: 0
tags:
  - tema/redes
  - tema/historia
  - research
  - review/pendiente
---

# 🔬 El Estándar DIX (Ethernet II) — 1980

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 7 palabras clave:
> `DIX` · `DEC-Intel-Xerox` · `Ethernet II` · `10 Mbps` · `CSMA/CD` · `transceptor` · `coaxial grueso`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **DIX fue el consorcio que convirtió Ethernet en un estándar abierto y comercial.** Sin la alianza entre DEC, Intel y Xerox (1979-1980), Ethernet habría quedado como un experimento de laboratorio en Xerox PARC.
2. **Ethernet II (DIX v2.0, 1982) definió el formato de trama que todavía usa Internet hoy.** El campo EtherType es la piedra angular que permite identificar protocolos (IPv4, IPv6, ARP) y sigue vigente en cada paquete que viaja por la red.
3. **CSMA/CD es el mecanismo democrático que hizo posible compartir un cable entre miles de máquinas.** Escuchar antes de hablar, detectar colisiones y reintentar con espera aleatoria: simple, robusto y escalable.
4. **Xerox cedió las patentes al IEEE → estandarización masiva.** Esta decisión estratégica permitió que IEEE 802.3 naciera y que Ethernet derrotara a competidores como Token Ring y Token Bus por ser más simple y económico.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave                                    | 📝 Respuesta / Desarrollo                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ¿Quién creó Ethernet y cuándo?                         | Robert Metcalfe en **Xerox PARC**, el 22 de mayo de 1973. Se inspiró en **ALOHAnet** (red de radio hawaiana). La llamó "ETHER Network" y usaba cable coaxial como medio físico de transmisión.                                                                                                                                                                                                        |
| ¿Qué es CSMA/CD y cómo funciona?                       | El corazón técnico de Ethernet. **Carrier Sense:** antes de transmitir, la estación verifica que el medio esté libre. **Multiple Access:** todas las estaciones comparten el mismo canal con igual prioridad. **Collision Detection:** si dos transmiten simultáneamente, se detecta la colisión, ambas paran y esperan un tiempo aleatorio antes de reintentar (*binary exponential backoff*).       |
| ¿Qué empresas formaron el consorcio DIX y por qué?     | **Digital Equipment Corporation (DEC), Intel y Xerox** se unieron en 1979 para comercializar Ethernet. El **30 de septiembre de 1980** publicaron el *"Blue Book"* (DIX v1.0), definiendo el sistema **10BASE5** (Thick Ethernet). Objetivos: simplicidad, alta velocidad, equidad, compatibilidad y estabilidad bajo carga alta.                                                                     |
| ¿Cuáles eran las especificaciones técnicas originales? | **Codificación Manchester** a **10 Mbps** sobre cable coaxial. Máx. 1.024 estaciones, separación máxima 2.5–2.8 km, conexión física mediante *vampire taps* (sin interrumpir la red).                                                                                                                                                                                                                 |
| ¿Qué aportó Ethernet II (DIX v2.0) en 1982?            | El formato de trama estándar para **TCP/IP** moderno. Estructura: Preámbulo (7B) + SFD (1B) + MAC Destino (6B) + MAC Origen (6B) + **EtherType** (2B) + Datos (46–1500B) + FCS/CRC (4B). El campo **EtherType** es su característica distintiva: identifica el protocolo de capa superior (IPv4 = 0x0800, IPv6 = 0x86DD). Valores ≥ 1536 → Ethernet II; ≤ 1500 → IEEE 802.3.                          |
| ¿En qué se diferencia Ethernet II de IEEE 802.3?       | El IEEE inició el **Proyecto 802** en 1980. Tras negociaciones con DIX y [[ECMA]], el estándar **IEEE 802.3 CSMA/CD** fue aprobado en diciembre de 1982 y publicado en 1985. Diferencia principal: IEEE 802.3 reemplaza EtherType con un campo de *longitud* + encabezados LLC/SNAP (menos eficiente). Por eso **Ethernet II (DIX) se convirtió en el formato dominante**, especialmente para TCP/IP. |
| ¿Qué papel jugó 3Com en la historia?                   | En 1979, Metcalfe fundó **3Com** para fabricar equipamiento LAN Ethernet. Fabricó adaptadores para DEC, VAX, Sun e IBM PC. La empresa alcanzó $5.7 mil millones en ingresos (1999) y se fusionó con HP en 2010.                                                                                                                                                                                       |
| ¿Cómo evolucionó Ethernet después de DIX?              | 10BASE-T (1990, 10 Mbps, par trenzado, estrella) → Fast Ethernet (1995, 100 Mbps, Cat 5) → Gigabit Ethernet (1998-99, 1 Gbps, fibra y cobre) → 10 Gigabit (2002, 10 Gbps). Cada versión mantuvo **compatibilidad hacia atrás**, garantizando la longevidad del estándar.                                                                                                                              |

---

## 🏆 Legado e impacto

- **Estandarización abierta:** Xerox cedió todas sus patentes al IEEE → adopción masiva.
- **Neutralidad de protocolo:** funciona con TCP/IP, XNS, DECnet, OSI.
- **Influencia en Wi-Fi ([[IEEE 802.11]])** y en el Internet moderno.
- Ethernet sobrevivió a sus competidores (Token Ring, Token Bus) por ser más simple, flexible y económico.

---

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que en los años 70, tres empresas —DEC (fabricaba computadoras), Intel (fabricaba chips) y Xerox (inventó Ethernet en su laboratorio)— decidieron que Ethernet era demasiado bueno para quedarse encerrado en un solo laboratorio. Formaron el consorcio **DIX** (las iniciales de sus nombres) y publicaron un manual abierto que cualquiera podía usar para construir redes Ethernet. Ese manual definió cómo se organizan los datos en "paquetes" (tramas) y cómo cada paquete lleva una etiqueta (EtherType) que dice qué tipo de información transporta. Cuando hoy envías un correo, ves un video o navegas por Internet, tus datos viajan dentro de tramas cuyo formato básico fue definido por esas tres empresas hace más de 40 años. Es como el ancestro directo de todo lo que conecta tu computadora al mundo.

---

## 💡 Aprendizajes principales

- La colaboración entre competidores (DEC, Intel, Xerox) fue más poderosa que cualquier patente individual: ceder las patentes al IEEE generó un ecosistema que benefició a todos.
- El campo **EtherType** (2 bytes) es uno de los detalles técnicos más influyentes de la historia de Internet: sin él, TCP/IP no tendría un transporte estándar en capa 2.
- La evolución de Ethernet (10 Mbps → 10 Gbps) demuestra el poder de la **compatibilidad hacia atrás**: cada nueva versión respeta a las anteriores, lo que protege la inversión y acelera la adopción.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| Consorcio DIX (3 empresas) | La puerta de entrada de tu casa | Tres gigantes vestidos de dorado (DEC), azul (Intel) y rojo (Xerox) se dan la mano formando un arco en la puerta. Sobre el arco brilla un letrero: "1980 — ESTÁNDAR ABIERTO". Cada uno sostiene un cable coaxial grueso como si fuera una cuerda de tug-of-war. |
| Cable coaxial grueso (10BASE5) | El pasillo de tu casa | El pasillo está inundado por una manguera de bomberos amarilla y rígida (el coaxial grueso). Pequeños vampiros metálicos (*vampire taps*) muerden la manguera sin romperla, conectando computadores que cuelgan de las paredes como cuadros. El agua que fluye dentro es luz verde: datos a 10 Mbps. |
| Campo EtherType | La cocina | Sobre la encimera hay una fila de sobres de correo. Cada sobre tiene una etiqueta de color: azul (0x0800 = IPv4), violeta (0x86DD = IPv6). Un cartero robot abre cada sobre, mira la etiqueta EtherType y sabe exactamente a quién entregarlo. Sin la etiqueta, no sabría qué hacer con la carta. |
| CSMA/CD — Colisión | La sala de estar | Una mesa redonda con 1024 sillas diminutas (estaciones). Dos personas intentan hablar al mismo tiempo, se escuchan, levantan la mano ("¡colisión!"), y cada una tira un dado para decidir cuánto esperar antes de volver a hablar. El que saca el número más bajo habla primero. |
| Xerox cede patentes al IEEE | El jardín / balcón | Un ejecutivo de Xerox abre una caja fuerte enorme y saca un rollo de pergaminos brillantes (las patentes). Los lanza al viento y aterrizan en las manos de un comité del IEEE sentado en el jardín. Los pergaminos se multiplican en el aire y llegan a miles de ingenieros que empiezan a construir redes por todas partes. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**

- Usar el campo EtherType como ejemplo cuando explique cómo los routers identifican el tráfico en capa 2 vs capa 3.

**Aplicación a medio plazo (este mes):**

- Conectar la historia de DIX con la evolución hacia [[fast-ethernet-ieee-802-3u]] y [[señalizacion-diferencial]] para tener una línea temporal completa de Ethernet.

**Proyecto o idea donde encaja:**
- [[historia-y-origen-de-ethernet-1973]] — ampliar la línea temporal completa de Ethernet desde PARC hasta hoy

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 | 2026-06-04 | ✅ / ⚠️ / ❌    |        |
| 2 | 2026-06-06 | ✅ / ⚠️ / ❌    |        |
| 3 | 2026-06-10 | ✅ / ⚠️ / ❌    |        |
| 4 | 2026-06-17 | ✅ / ⚠️ / ❌    |        |
| 5 | 2026-07-03 | ✅ / ⚠️ / ❌    |        |

---

## 🔗 Relacionado

- [[historia-origen-ethernet-1973]] — el origen del que nace el consorcio DIX
- [[fast-ethernet-ieee-802-3u]] — la evolución directa del estándar que DIX abrió al mundo
- [[señalizacion-diferencial]] — técnica de codificación usada en variantes posteriores de Ethernet
- [[internet]] — Ethernet II (DIX) es el formato de trama que transporta todos los paquetes de Internet
- [[modelo-tcp-ip]] — TCP/IP corre sobre tramas Ethernet II, el formato definido por DIX
- [[onda-electromagnetica]] — los fundamentos físicos del medio por donde viajan las señales Ethernet

---

> [!info] Nota sobre ECMA
> **ECMA** (hoy Ecma International) es una asociación industrial fundada en 1961 dedicada a elaborar estándares técnicos. En el contexto de Ethernet, ECMA fue clave en los años 80 al desarrollar estándares CSMA/CD muy cercanos al de DIX, presionando al IEEE 802.3 para adoptar un estándar compatible. Publicó normas como ECMA-82 para LAN CSMA/CD en banda base.
