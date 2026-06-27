---
type: research
fuente: Explicación generada con Claude (diagrama interactivo incluido)
fecha: 2026-06-24
relevancia: media
dominio: redes-y-telecom
review-count: 0
ultimo-review: 2026-06-24
next-review: 2026-06-25
nivel-retencion: 0
tags:
  - research
  - tema/redes
  - review/pendiente
  - prioridad/media
---

# 🔬 Modelo OSI — Arquitectura de Red en 7 Capas

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `capas` · `encapsulación` · `protocolo` · `PDU` · `emisor/receptor` · `TCP/IP` · `estándar`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. El modelo OSI divide la comunicación de red en **7 capas** con responsabilidades separadas, creado por ISO en 1984 para que equipos de distintos fabricantes puedan comunicarse.
2. El **emisor encapsula** (añade cabeceras al bajar de capa 7 a 1); el **receptor desencapsula** (las quita al subir de capa 1 a 7).
3. Las capas **1-4** son responsabilidad de la infraestructura de red; las **5-7** son responsabilidad del software/aplicaciones.
4. En capa 4, **TCP** garantiza entrega (más lento) y **UDP** es rápido sin garantía — la elección depende del caso de uso.
5. Cada capa solo se comunica con la capa inmediatamente superior e inferior — eso es lo que hace el modelo modular y escalable.

---

## 🗺 Diagrama de las 7 Capas

> [!info] Diagrama generado en Claude (sesión 2026-06-24). Para verlo de nuevo, abre la conversación o usa el checkpoint `f46a8b7e380c45a6b2`.

```
  EMISOR                                          RECEPTOR
    │                                                 ▲
    ▼   ┌─────────────────────────────────────────┐   │
    │   │  7 - Aplicación  │  HTTP, FTP, DNS, SMTP │   │
    │   ├─────────────────────────────────────────┤   │
    │   │  6 - Presentación │  SSL/TLS, JPEG, ASCII│   │
    │   ├─────────────────────────────────────────┤   │
    │   │  5 - Sesión       │  NetBIOS, RPC, SQL   │   │
    │   ├─────────────────────────────────────────┤   │
    │   │  4 - Transporte   │  TCP, UDP            │   │
    │   ├─────────────────────────────────────────┤   │
    │   │  3 - Red          │  IP, ICMP, OSPF, BGP │   │
    │   ├─────────────────────────────────────────┤   │
    │   │  2 - Enlace Datos │  Ethernet, MAC, ARP  │   │
    │   ├─────────────────────────────────────────┤   │
    │   │  1 - Física       │  Cable, Fibra, Bits  │   │
    │   └─────────────────────────────────────────┘   │
    └─────────── encapsula (baja) ─────────────────────┘
                            desencapsula (sube) ───────►
```

---

## ⚖️ OSI vs TCP/IP — Comparación

> [!info] OSI es el mapa. TCP/IP es la carretera real. OSI llegó tarde — Internet ya usaba TCP/IP cuando OSI terminó de especificarse. Hoy OSI sirve para enseñar y entender; TCP/IP es lo que corre en cada dispositivo.

### Mapeo de capas

```
OSI (7 capas)              TCP/IP (4 capas)
─────────────────          ─────────────────
7 - Aplicación   ┐
6 - Presentación ├────────► Aplicación
5 - Sesión       ┘
4 - Transporte   ──────────► Transporte
3 - Red          ──────────► Internet
2 - Enlace       ┐
1 - Física       ┴────────► Acceso a red
```

### Diferencias clave

| | OSI | TCP/IP |
|---|---|---|
| **Origen** | ISO, 1984, diseñado por comité | DARPA, 1970s, diseñado para sobrevivir ataques nucleares |
| **Propósito** | Modelo teórico de referencia | Implementación real que usa Internet |
| **Capas** | 7 (más granular) | 4 (más pragmático) |

> [!warning] Por qué importa en la práctica
> Los ingenieros mezclan ambos vocabularios constantemente: dicen "**capa 3**" pensando en **IP** (numeración OSI, protocolo TCP/IP) y "**capa 7**" para referirse a HTTP, firewalls de aplicación o balanceadores de carga. Saber OSI te da el vocabulario; TCP/IP es lo que corres en el código.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es el modelo OSI? | Framework de referencia de 7 capas creado por ISO en 1984 para estandarizar protocolos de red entre fabricantes distintos. Es teórico; el modelo que Internet usa en la práctica es TCP/IP. |
| ¿Qué hace la Capa 1 (Física)? | Transmite bits crudos sobre el medio físico: cables, fibra óptica, señales de radio. No entiende de tramas ni paquetes. |
| ¿Qué hace la Capa 2 (Enlace)? | Organiza los bits en tramas, gestiona el acceso al medio (MAC) y detecta errores dentro de una red local. Ethernet opera aquí. |
| ¿Qué hace la Capa 3 (Red)? | Determina la ruta óptima para mover paquetes entre redes distintas. IP opera aquí: cada paquete lleva dirección de origen y destino. |
| ¿Diferencia TCP vs UDP? | TCP (Capa 4): orientado a conexión, confirma entrega, más lento. Ej: web, email. UDP (Capa 4): sin conexión, sin confirmación, más rápido. Ej: streaming, DNS. |
| ¿Qué es encapsulación? | Proceso donde cada capa agrega su propia cabecera (header) al dato al bajarlo. La capa 2 también agrega un trailer de verificación. Al subir, cada capa quita su cabecera. |
| ¿Cuál es el PDU de cada capa? | 7-5: Datos · 4: Segmento (TCP) / Datagrama (UDP) · 3: Paquete · 2: Trama · 1: Bits |
| ¿OSI vs TCP/IP? | OSI = 7 capas, modelo teórico, llegó tarde. TCP/IP = 4 capas, el que Internet usa realmente. Las capas 5-6-7 de OSI colapsan en "Aplicación" de TCP/IP porque en la práctica conviven en el mismo software. Ver sección ⚖️ arriba. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que envías una carta. La escribes (Aplicación), la codificas en un idioma comprensible y la cifras (Presentación), estableces la sesión con el destinatario (Sesión), decides si usar mensajero certificado o correo rápido sin rastro (Transporte), escribes la dirección en el sobre (Red), lo depositas en el buzón de tu edificio con tu número de piso (Enlace de datos), y el cartero lo transporta físicamente por las calles (Física). El destinatario hace el proceso inverso, abriendo cada "capa" hasta leer tu mensaje.
>
> **OSI vs TCP/IP:** OSI es el plano de arquitectura ideal de ese sistema postal — perfecto sobre el papel, diseñado por un comité. TCP/IP es el sistema postal real que ya funcionaba antes de que el plano se terminara de dibujar. Por eso Internet usa TCP/IP y OSI se usa para enseñar.

---

## 💡 Aprendizajes principales

- El modelo OSI no es lo que Internet usa — es una guía conceptual. El mundo real usa TCP/IP de 4 capas.
- Saber en qué capa ocurre un problema acelera enormemente el diagnóstico: ¿no hay cable? Capa 1. ¿No llega IP? Capa 3. ¿El navegador falla? Capa 7.
- La encapsulación es bidireccional: al enviar se añaden cabeceras (de arriba a abajo), al recibir se quitan (de abajo a arriba).

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Recorre este "edificio de 7 plantas" mentalmente para repasar las capas.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| Capa 1 — Física | Sótano del edificio | Cables enormes como boas constrictor cubren el suelo, chispas azules saltan al pisarlos |
| Capa 2 — Enlace | Portería / buzones | El portero (MAC address) tiene una lista y solo entrega el sobre si el número de piso coincide exactamente |
| Capa 3 — Red | Garaje con GPS gigante | Una pantalla de 3 metros traza rutas por autopistas entre ciudades-red; el copiloto grita "¡IP destino!" |
| Capa 4 — Transporte | Mostrador de mensajería | El mensajero de Amazon (TCP) exige firma y devuelve si no hay nadie; el repartidor de pizzas (UDP) tira la caja y sale corriendo |
| Capa 5 — Sesión | Sala de reuniones | Un reloj gigante en la pared marca el inicio y fin de cada llamada — si la sesión expira, todos se quedan mudos |
| Capa 6 — Presentación | Cabina de traducción | Un intérprete convierte tu PDF a bits y pone un candado dorado (SSL/TLS) antes de pasarlo |
| Capa 7 — Aplicación | Tu escritorio / oficina | El navegador, el cliente de correo, el chat — todo lo que ves y tocas como usuario final |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Al analizar un error de red, identificar mentalmente en qué capa ocurre antes de buscar la solución.

**Aplicación a medio plazo (este mes):**
Entender por qué Ethernet opera en capas 1-2, por qué IP opera en capa 3, y cómo esto explica la arquitectura de Internet.

**Proyecto o idea donde encaja:**
- [[010 Redes y Telecomunicaciones MOC]]

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30** (3 toques). El único obligatorio es el primero (mañana). Solo para conceptos `#prioridad/alta` extiende a Día 1 → 3 → 7 → 14 → 30 → 60 (añade filas).

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1) | 2026-06-25 | ✅ / ⚠️ / ❌    |        |
| 2 (Día 3) | 2026-06-27 | ✅ / ⚠️ / ❌    |        |
| 3 (Día 7) | 2026-07-01 | ✅ / ⚠️ / ❌    |        |
| 4 (Día 14) | 2026-07-08 | ✅ / ⚠️ / ❌    |        |
| 5 (Día 30) | 2026-07-24 | ✅ / ⚠️ / ❌    |        |
| 6 (Día 60) | 2026-08-23 | ✅ / ⚠️ / ❌    |        |

---

## 🔗 Relacionado

- Proyectos: [[010 Redes y Telecomunicaciones MOC]]
- Otras investigaciones: [[modelo-tcp-ip]] · [[internet]] · [[historia-y-origen-de-ethernet-1973]] · [[el-estandar-dix]] · [[rfc]]
