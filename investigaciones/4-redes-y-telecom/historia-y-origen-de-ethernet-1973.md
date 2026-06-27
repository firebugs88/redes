---
type: research
fuente: Estudio propio (historia de redes)
fecha: 2026-04-12
relevancia: media
dominio: redes/historia
review-count: 0
ultimo-review: 2026-04-12
next-review: 2026-06-04
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - tema/historia
  - review/pendiente
---

# 🔬 Historia y Origen de Ethernet (1973)

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas palabras clave:
> `Metcalfe` · `Xerox PARC` · `1973` · `ALOHA` · `CSMA/CD` · `Ethernet` · `coaxial`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las ideas que capturan el núcleo del valor?

1. **Ethernet nació en Xerox PARC en 1973** cuando Robert Metcalfe adaptó la red ALOHA de radio de Hawái a un entorno cableado para conectar computadores Alto a impresoras láser.
2. **CSMA/CD fue la innovación clave**: escuchar antes de hablar (Carrier Sense) + detectar colisiones mientras transmites (Collision Detection), resolviendo la enorme ineficiencia de ALOHA (18-37% → >90%).
3. **El estándar abierto DIX (1980)** fue tan importante como la invención técnica: DEC + Intel + Xerox publicaron Ethernet como estándar libre de 10 Mbps, permitiendo que cualquier fabricante lo adoptara.
4. **Ethernet pasó de ser propietaria a dominio público**: Xerox licenció la patente por solo $1,000 y en 1982 renunció a la marca registrada, creando el primer estándar LAN abierto y multiproveedor del mundo.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Quién inventó Ethernet y dónde? | **Robert Metcalfe** en el **Xerox PARC** (Palo Alto Research Center), California. El 22 de mayo de 1973 escribió el primer memorando describiendo el sistema. |
| ¿Qué problema resolvía Ethernet? | Conectar varios computadores **Xerox Alto** (los primeros con GUI y ratón) a una **impresora láser compartida**. No existía ninguna LAN capaz de manejar el volumen de datos que generaban. |
| ¿Qué fue la red ALOHA y qué relación tiene? | Red de radio desarrollada en la **Universidad de Hawái** (finales de los 60) por Norman Abramson para comunicar las islas hawaianas. Usaba un canal compartido: transmitía a ciegas y esperaba acuse de recibo (ACK). Si no llegaba ACK → colisión → retransmisión aleatoria. Eficiencia máxima: apenas **18.4%** (ALOHA Puro) o **36.8%** (ALOHA Ranurado, 1972). Metcalfe se inspiró en ella pero identificó su ineficiencia fundamental. |
| ¿Qué es CSMA/CD y cuáles son sus 3 componentes? | **Carrier Sense Multiple Access with Collision Detection**. Los tres componentes: (1) **CS — Carrier Sense**: escuchar el cable antes de transmitir, solo hablar si está libre; (2) **MA — Multiple Access**: múltiples nodos comparten el mismo medio físico; (3) **CD — Collision Detection**: monitorear el cable mientras transmites, si detectas un pico de voltaje anómalo → abortar → enviar señal de atasco (_jam signal_) → retroceso aleatorio. |
| ¿Por qué se llamó "Ethernet" y no otro nombre? | Originalmente se llamó **"Alto Aloha Network"** (solo para Altos). En 1973 Metcalfe la renombró **"Ethernet"**, del concepto físico del _éter_ como medio invisible por donde viajan las señales, para dejar claro que podía soportar **cualquier computadora**, no solo Altos. |
| ¿Qué velocidad tenía originalmente? | **2.94 Mbps** en la primera versión experimental (finales de 1972). Saltó a **10 Mbps** con el estándar DIX en 1980. |
| ¿Qué fue el consorcio DIX y qué logró? | Consorcio formado en 1979 por **DEC, Intel y Xerox**. Objetivo: convertir Ethernet en estándar abierto. Publicaron **Ethernet v1.0** ("The Blue Book") el 30 de septiembre de 1980 — 10 Mbps sobre cable coaxial grueso (Thicknet/10BASE5), con direcciones MAC de 48 bits y CSMA/CD. Sin derechos de autor. |
| ¿Qué papel jugó 3Com? | Metcalfe fundó **3Com en 1979** para fabricar hardware de red y garantizar que computadoras de diferentes fabricantes pudieran comunicarse mediante Ethernet. |
| ¿Cómo pasó Ethernet de patente a dominio público? | Xerox licenció su tecnología patentada por solo **$1,000**. En **1982** renunció a la marca registrada "Ethernet". Con DIX v2.0 (Ethernet II) y la posterior adopción por el comité IEEE 802.3, Ethernet se convirtió en estándar internacional abierto. |
| ¿Cuál fue la evolución después de DIX? | En 1982 se lanzó **DIX v2.0 (Ethernet II)** con el campo EtherType (crucial para multiprotocolo). El trabajo se entregó al **IEEE 802.3** para estandarización formal. Hoy, casi el 100% del tráfico Ethernet usa el formato de trama DIX v2.0 bajo el paraguas normativo IEEE. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que tienes decenas de computadoras en una oficina y todas necesitan compartir una sola impresora cara. El problema es: ¿cómo hablan entre ellas sin que se pisen unas a otras? Es como una mesa redonde donde todos quieren hablar al mismo tiempo. Ethernet resolvió esto con una regla simple: **antes de hablar, escucha si alguien ya está hablando. Si está libre, habla. Si dos empiezan a la vez y se dan cuenta del choque, se callan al instante, esperan un tiempo aleatorio cada uno, y vuelven a intentarlo.** Metcalfe sacó esta idea de una red de radio en Hawái (ALOHA) que era muy derrochadora — los nodos "gritaban" sin escuchar y chocaban constantemente. Ethernet añadió la inteligencia de escuchar antes y durante, subiendo la eficiencia del ~18% al >90%. Y lo más importante: en lugar de guardársela, la abrió al mundo para que cualquier fabricante pudiera usarla.

---

## 💡 Aprendizajes principales

- La inspiración cruzada entre dominios (radio hawaiana → red cableada de oficina) es una fuente poderosa de innovación técnica.
- Un estándar abierto puede ser más transformador que la tecnología misma: la decisión de DIX/Xerox de liberar Ethernet fue lo que permitió su adopción global.
- CSMA/CD es un ejemplo elegante de cómo añadir dos capas de "inteligencia" (escuchar antes + detectar durante) multiplica la eficiencia de un sistema aparentemente caótico.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| Metcalfe inventando Ethernet | **La puerta de entrada a Xerox PARC** | Bob Metcalfe está sentado frente a un Xerox Alto, sudando porque la impresora láser no responde. Escribe furiosamente en un memorando fechado "22 de mayo de 1973" mientras las Altos a su alrededor parpadean desconectadas. De pronto se le enciende una bombilla literal sobre la cabeza. |
| Red ALOHA en Hawái | **Una playa en Hawái con antenas de radio** | Norman Abramson está en una playa con un walkie-talkie, gritando mensajes a otra isla al mismo tiempo que otro profesor grita por otro walkie-talkie. Las señales chocan en el aire como bolas de billar y el receptor solo escucha ruido. Solo el 18% de los mensajes llega completo. |
| CSMA/CD — colisiones | **Una autopista de un solo carril** | Dos coches entran a la vez en una autopista de un solo carril (el cable coaxial). Se chocan de frente. Pero a diferencia de un accidente real, ambos conductores detectan el golpe al instante (pico de voltaje), tocan el claxon 3 veces (_jam signal_), dan marcha atrás a velocidades aleatorias diferentes, y uno entra primero. |
| Cable coaxial como medio compartido | **Una tubería de agua gigante** | Un tubo grueso amarillo (Thicknet) atraviesa todo un edificio. De él salen grifos (transceptores vampiro) que muerden el cable para conectar cada computadora. Cuando alguien "abre el grifo" (transmite), el agua fluye por todo el tubo y todos los demás grifos lo sienten. |
| Evolución de 3 Mbps a 10 Mbps (DIX) | **Una carrera de Fórmula 1** | El coche "Ethernet experimental" de Xerox corre a 3 mph (un triciclo). Luego llega el consorcio DIX (tres pilotos: DEC, Intel, Xerox) y le ponen un motor nuevo de 10 mph. Después el comité IEEE lo revisa y le pone turbo. El triciclo se convierte en un bólido que acabará corriendo a 100 Mbps y más allá. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**

Usar la analogía de "mesa redonda" (CSMA/CD) para explicarle a alguien qué es Ethernet y por qué funciona. Probar si paso el test de Feynman.

**Aplicación a medio plazo (este mes):**

Conectar esta nota con [[el-estandar-dix]] y [[codificacion-4b-5b-y-mlt-3]] para tener el arco completo: origen → estandarización → implementación física.

**Proyecto o idea donde encaja:**
- [[010 Redes y Telecomunicaciones MOC]]

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

- [[el-estandar-dix]] — el estándar que abrió Ethernet al mundo: DEC + Intel + Xerox (1980)
- [[fast-ethernet-ieee-802-3u]] — la siguiente generación: 100 Mbps construida sobre las bases de 1973
- [[señalizacion-diferencial]] — cómo se transmiten físicamente las señales Ethernet en cobre trenzado
- [[internet]] — Ethernet se convirtió en la base de la red local sobre la que corre Internet
- [[codificacion-4b-5b-y-mlt-3]] — codificación de línea usada en Fast Ethernet (100BASE-TX)
- [[modelo-tcp-ip]] — las capas de protocolos que Ethernet habilita en la capa de enlace
