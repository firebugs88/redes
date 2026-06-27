---
type: research
fuente: Estudio propio (arquitectura de protocolos de red)
fecha: 2026-04-12
relevancia: media
dominio: redes / protocolos / Internet
review-count: 0
ultimo-review: 2026-04-12
next-review: 2026-06-04
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - review/pendiente
---

> [!important] Recuperación Activa — palabras clave
> Antes de releer la nota, intenta recordar qué significa cada una y cómo se conectan entre sí:
> `encapsulación` · `Application` · `Transport` · `Internet` · `Link` · `puertos` · `sockets`

# 🌐 Modelo TCP/IP

## 📌 Resumen — 3 ideas clave (Pareto)

1. TCP/IP es una **familia de protocolos** (no un protocolo único) que define cómo se comunican dispositivos en redes heterogéneas. Es el lenguaje universal de Internet.
2. Su arquitectura de **4 capas** divide responsabilidades: Acceso a red (físico) → Internet (enrutamiento) → Transporte (entrega) → Aplicación (servicios).
3. El proceso de **encapsulación** es la clave: cada capa envuelve los datos de la capa superior añadiendo su propia cabecera antes de pasarlos hacia abajo.

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es TCP/IP? | Familia de protocolos que permite la comunicación entre dispositivos heterogéneos en redes distribuidas. Estándar de facto de Internet desde 1983. Diseñado por Vinton Cerf y Robert Kahn. |
| ¿TCP e IP son lo mismo? | No. **IP** maneja el direccionamiento y enrutamiento (¿a dónde va el paquete?). **TCP** maneja la entrega confiable (¿llegaron todos los paquetes en orden?). Son capas distintas que trabajan juntas. |
| Capa 1 — Acceso a la red | Transmisión física entre dispositivos directamente conectados. Gestiona bits, señales eléctricas, MAC. Aquí opera **Ethernet** (trama con MAC origen/destino + FCS/CRC). |
| Capa 2 — Internet | Enrutamiento de paquetes entre redes. Usa **direcciones IP**. Fragmenta/reensambla paquetes si es necesario. Protocolo principal: **IP** (RFC 791). |
| Capa 3 — Transporte | Comunicación extremo a extremo entre aplicaciones. **TCP**: confiable, con acuse de recibo y reordenamiento. **UDP**: rápido, sin garantía. Usa **puertos** para identificar aplicaciones. |
| Capa 4 — Aplicación | Protocolos que usan las apps directamente: HTTP (web), SMTP (email), FTP (archivos), DNS (nombres). |
| ¿Qué es la encapsulación? | Cada capa añade su cabecera (header) a los datos que recibe de arriba: App → segmento TCP → paquete IP → trama Ethernet → bits eléctricos. El receptor invierte el proceso (desencapsulación). |
| TCP vs UDP | **TCP**: conexión establecida (3-way handshake), garantiza entrega y orden, más lento. **UDP**: sin conexión, sin garantía, más rápido. UDP se usa en streaming, gaming, DNS. |
| Fecha clave | **1 de enero de 1983** — "Día de la Bandera": ARPANET migra de NCP a TCP/IP. Nacimiento del Internet moderno. |
| TCP/IP vs OSI | OSI: 7 capas (teórico, referencia). TCP/IP: 4 capas (práctico, lo que realmente existe). Las capas OSI 1-2 = TCP/IP capa 1; OSI 3 = TCP/IP capa 2; etc. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que quieres mandar una carta de Colombia a Japón. La escribes (capa Aplicación). El correo la mete en un sobre con tu dirección de retorno y la del destinatario (TCP: numeración y orden). Un centro de distribución postal le añade la ruta internacional (IP: dirección del país y ciudad). Y finalmente un camión la recoge y la lleva a la estación de salida (Ethernet: la red local física). En el destino se hace el proceso al revés: cada capa quita su "sobre" y le entrega el contenido al de arriba. Eso es la encapsulación.

---

## 📊 El proceso de encapsulación visualizado

```
EMISOR                                          RECEPTOR
┌─────────────┐                              ┌─────────────┐
│  Aplicación │  datos                       │  Aplicación │
│  (HTTP…)    │──────────────────────────────│  (HTTP…)    │
├─────────────┤                              ├─────────────┤
│  Transporte │  [TCP header | datos]        │  Transporte │
│  (TCP/UDP)  │──────────────────────────────│  (TCP/UDP)  │
├─────────────┤                              ├─────────────┤
│  Internet   │  [IP header | TCP | datos]   │  Internet   │
│  (IP)       │──────────────────────────────│  (IP)       │
├─────────────┤                              ├─────────────┤
│  Acceso red │  [MAC | IP | TCP | datos|FCS]│  Acceso red │
│  (Ethernet) │══════ cable físico ══════════│  (Ethernet) │
└─────────────┘                              └─────────────┘
```

---

## 📎 Recursos de referencia

![[Evolución histórica de los protocolos TCP_IP (1969 - perplexity.pdf]]
![[Modelo TCP_IP_ Proceso de Solicitud Web.pdf]]

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

## 🏛 Anclas de memoria

| Concepto | Lugar / Imagen | Escena vívida |
|----------|---------------|---------------|
| **Encapsulación (4 capas)** | Una matrioska rusa gigante en la entrada de tu casa | Abres la muñeca más grande (Ethernet, cables gruesos), dentro hay otra (IP con mapas pintados), dentro otra (TCP con un sello de "¡recibido!"), y en el centro un mensaje diminuto (HTTP). Cada vez que quitas una capa suena una fanfarria distinta. |
| **TCP vs UDP** | Dos repartidores en la puerta de tu edificio | **TCP** es un repartidor obsesivo que te hace firmar cada paquete, revisa la lista contigo uno por uno y si falta algo vuelve al depósito a buscarlo. **UDP** es un repartidor en patineta que lanza los paquetes por la ventana sin mirar y grita "¡ya cayeron, arréglatelas!". |
| **Three-way handshake (SYN → SYN-ACK → ACK)** | Un saludo samurái en el tatami | Dos samuráis se encuentran: el primero dice "SYN" y desenvaina la mitad de la espada; el segundo responde "SYN-ACK" y desenvaina la otra mitad formando un puente brillante; el primero cierra con "ACK" y ambos chocan las empuñaduras como si sellaran un pacto de acero. |
| **Puertos y sockets** | Un edificio de apartamentos infinito con buzones numerados | Cada apartamento es un puerto (80 = web, 443 = HTTPS, 25 = correo). Un socket es la combinación exacta de dirección IP (la calle) + número de apartamento. El cartero IP sabe a qué calle ir, pero necesita el número de apartamento para tocar la puerta correcta. |
| **Direcciones IP** | Una brújula cósmica flotando en el espacio | Cada dispositivo es una estrella con 4 números grabados (ej: 192.168.1.1). La brújula IP traza una línea luminosa entre estrellas, rebotando en routers como si fueran portales que cambian de galaxia (diferentes subredes). |

---

## 🔗 Relacionado

- [[internet]] — Internet es la red global que funciona gracias a TCP/IP
- [[rfc]] — TCP/IP está definido en los RFC 791 (IP), 792 (ICMP) y 793 (TCP)
- [[nsfnet]] — NSFNET consolidó la adopción de TCP/IP en el mundo académico
- [[historia-y-origen-de-ethernet-1973]] — Ethernet opera en la capa de Acceso a Red y transporta los paquetes IP
- [[el-estandar-dix]] — la trama Ethernet II (DIX) es el formato que encapsula los paquetes IP
