---
type: research
fuente: Estudio propio (historia de Internet)
fecha: 2026-04-12
relevancia: alta
dominio: redes / historia de Internet
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

> [!important] 🧠 Recuperación Activa
> Antes de leer, intenta definir de memoria cada una de estas palabras clave. Si no puedes, la nota necesita repaso.
>
> `ARPANET` · `TCP/IP` · `conmutación de paquetes` · `NSFNET` · `Día de la Bandera` · `WWW` · `backbone`

![[Red Lan.png]]

# 🌍 Internet — Historia y estructura

## 📌 Resumen — 3 ideas clave (Pareto)

1. Internet nació como un proyecto militar (ARPANET, 1969) para crear una red descentralizada resistente a fallos. Su arma técnica fue la **conmutación de paquetes**.
2. La adopción de **TCP/IP en 1983** fue el momento fundacional del Internet moderno: todas las redes podían hablar el mismo idioma.
3. Internet no es una red única, sino una **"red de redes"** — millones de redes conectadas mediante protocolos comunes (Ethernet + TCP/IP).

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué era ARPA? | Advanced Research Projects Agency del Departamento de Defensa de EE.UU. Financiaba investigación tecnológica avanzada durante la Guerra Fría. Conceptualizó la "red galáctica" de J.C.R. Licklider. |
| ¿Qué era ARPANET? | La red concreta que nació de un proyecto de ARPA. Operativa desde **1969**. Primera red basada en **conmutación de paquetes** a escala real. |
| Primer mensaje de ARPANET | **29 de octubre de 1969**: entre UCLA y Stanford. El sistema falló al enviar "LOGIN" — llegó solo "LO". Aun así, la conexión funcionó. |
| Primeros 4 nodos (dic. 1969) | UCLA, Stanford Research Institute (SRI), UC Santa Bárbara y Universidad de Utah. |
| ¿Qué es la conmutación de paquetes? | Los datos se dividen en paquetes que viajan por rutas distintas y se reensamblan en destino. Si un nodo falla, los paquetes toman otro camino. Diseñado para sobrevivir ataques nucleares. |
| TCP/IP — el momento clave (1983) | **1 de enero de 1983** ("Día de la Bandera"): ARPANET migra de NCP a TCP/IP. Todos los hosts cambian simultáneamente. Ese día nace el Internet basado en TCP/IP. |
| ¿Qué es Internet? | Conjunto de redes conectadas entre sí mediante protocolos comunes (principalmente Ethernet y TCP/IP). No es una red única: es una **red de redes global**. |
| ARPANET se desmanteló en | **1990**. Su sucesor civil fue [[nsfnet]] (1985–1995). |
| OSI vs TCP/IP | OSI: modelo teórico de referencia con 7 capas. TCP/IP: modelo práctico con 4 capas, que refleja la arquitectura real de Internet. Ver [[modelo-tcp-ip]]. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Internet no se inventó un día — se construyó en capas durante 30 años. Primero ARPANET conectó cuatro computadoras universitarias con un protocolo militar. Luego TCP/IP le dio un idioma común a todas las redes del mundo. Luego NSFNET lo abrió al mundo académico. Y en 1995, cuando la columna vertebral se privatizó, nació el Internet comercial que usamos hoy. Lo que une todo esto no es un cable ni un servidor central: es un acuerdo de protocolos.

---

## 📅 Línea de tiempo

| Año | Hito |
|-----|------|
| 1969 | ARPANET — primeros 4 nodos (UCLA, SRI, UCSB, Utah) |
| 1972 | Invención del email |
| 1983 | Adopción de TCP/IP — "Día de la Bandera" |
| 1985 | Nace [[nsfnet]] — backbone académico civil |
| 1990 | ARPANET se desmanuela |
| 1991 | World Wide Web — Tim Berners-Lee (CERN) |
| 1993 | Mosaic — primer navegador gráfico |
| 1995 | NSFNET se privatiza → nace el Internet comercial |

---

## 🔁 Registro de repasos

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 | 2026-06-04 | ✅ / ⚠️ / ❌ | |
| 2 | 2026-06-06 | ✅ / ⚠️ / ❌ | |
| 3 | 2026-06-10 | ✅ / ⚠️ / ❌ | |
| 4 | 2026-06-17 | ✅ / ⚠️ / ❌ | |
| 5 | 2026-07-03 | ✅ / ⚠️ / ❌ | |

---

## 🏛 Anclas Loci — Palacio de Memoria

| Concepto | Lugar/Imagen | Escena vívida |
|----------|--------------|---------------|
| Conmutación de paquetes | Un laberinto de espejos | Los paquetes son bolas de cristal que se lanzan en el laberinto. Cuando chocan con un muro caído (nodo destruido), rebotan y encuentran otro camino. Todas llegan al centro del laberinto y se reensamblan en una bola gigante. |
| ARPANET (1969) | Un bunker militar subterráneo | Cuatro computadoras del tamaño de habitaciones rugen en un bunker. Un general aprieta un botón rojo y escribe "LO" en una terminal. La máquina escupe humo y se detiene, pero la conexión funcionó. |
| Día de la Bandera (1983) | Una ceremonia de izamiento | Miles de servidores forman filas como soldados. A medianoche, todos cambian su bandera de NCP a TCP/IP simultáneamente. Un general de red saluda mientras la nueva bandera ondea sobre Internet. |
| NSFNET (backbone académico) | Una autopista gigante | Una autopista de 100 carriles conecta universidades. Camiones cargados de datos académicos viajan gratis. En 1995, ponen casetas de peaje (comercialización) y la autopista se vuelve pública. |
| World Wide Web (1991) | Una biblioteca infinita | Tim Berners-Lee en el CERN abre una puerta mágica. Detrás hay una biblioteca que se extiende hasta el horizonte. Cada libro tiene enlaces que te teletransportan a otros libros instantáneamente. |

---

## 🔗 Relacionado

- [[modelo-tcp-ip]] — el protocolo que unificó todas las redes; nació con ARPANET
- [[nsfnet]] — el sucesor civil de ARPANET y puente hacia el Internet comercial
- [[rfc]] — los documentos que estandarizaron todos los protocolos de Internet
- [[historia-y-origen-de-ethernet-1973]] — Ethernet es la tecnología de red local sobre la que corre TCP/IP
- [[historia-y-evolucion-del-internet-arpanet]] — video de referencia sobre este tema
