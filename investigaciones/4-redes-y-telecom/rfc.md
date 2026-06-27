---
type: research
fuente: Estudio propio (estándares de Internet)
fecha: 2026-04-12
relevancia: media
dominio: redes / estándares / Internet
review-count: 0
ultimo-review: 2026-04-12
next-review: 2026-06-04
nivel-retencion: 0
palabras-clave:
  - IETF
  - inmutable
  - TCP/IP
  - ICMP
  - estándares
  - datatracker
  - 1969
tags:
  - research
  - tema/redes
  - review/pendiente
---

# 📄 RFC — Request for Comments

## 📌 Resumen — 3 ideas clave (Pareto)

1. Los RFC son los **documentos fundacionales de Internet**: definen todos sus protocolos (TCP, IP, HTTP, DNS…). Sin RFC no hay estándares; sin estándares no hay interoperabilidad.
2. Una vez publicado, un RFC es **inmutable**: nunca se modifica. Si algo cambia, se publica un RFC nuevo que reemplaza al anterior.
3. Los RFC más importantes de la historia son **RFC 791 (IP)**, **RFC 793 (TCP)** y **RFC 792 (ICMP)**, publicados en 1981, que definieron la pila TCP/IP sobre la que corre Internet.

---

## 🧠 Notas Cornell

| 🔑 Pregunta / Clave                        | 📝 Respuesta / Desarrollo                                                                                                                                         |
| ------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ¿Qué es un RFC?                            | Documento técnico numerado que define especificaciones, estándares y métodos para Internet. Publicados por el **IETF** (Internet Engineering Task Force).         |
| ¿Por qué se llaman "Request for Comments"? | Nombre histórico: originalmente eran borradores para discusión abierta. Hoy siguen llamándose así por tradición, aunque los aprobados son estándares definitivos. |
| ¿Son inmutables?                           | Sí. Un RFC publicado **nunca cambia**. Las actualizaciones se publican como un nuevo RFC que "Obsoletes" (reemplaza) al anterior.                                 |
| ¿Todos los RFC son estándares?             | No. Hay RFC **informativos** (explican conceptos), **experimentales** (propuestas en prueba) y **de estándares** (norma obligatoria).                             |
| RFC 791                                    | Define el **Protocolo IP (Internet Protocol)**: direccionamiento, fragmentación y enrutamiento de paquetes (datagramas).                                          |
| RFC 792                                    | Define **ICMP (Internet Control Message Protocol)**: mensajes de error y diagnóstico. Es lo que usa el comando `ping`.                                            |
| RFC 793                                    | Define **TCP (Transmission Control Protocol)**: conexión confiable, ordenada y libre de errores entre aplicaciones.                                               |
| ¿Dónde se encuentran?                      | En **datatracker.ietf.org** — todos los RFC publicados desde 1969 están accesibles libremente.                                                                    |

**📌 Resumen en tus propias palabras (Feynman check):**

> Los RFC son como las leyes de Internet: documentos que definen exactamente cómo debe funcionar cada protocolo, para que una computadora en Japón y otra en Colombia puedan entenderse. A diferencia de las leyes normales, los RFC no se cambian una vez aprobados: si algo está mal o cambia, se escribe una ley nueva que cancela la vieja. Son públicos, gratuitos y cualquiera puede proponer uno.

---

## 📅 Registro de Repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30** (el primero es obligatorio, al día siguiente)
> La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional, solo para conceptos #prioridad/alta.
> - ✅ Retención buena → avanza al siguiente intervalo
> - ⚠️ Retención parcial → repite el intervalo actual
> - ❌ Retención fallida → retrocede al intervalo anterior

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 | 2026-06-04 | ✅ / ⚠️ / ❌ | |
| 2 | 2026-06-06 | ✅ / ⚠️ / ❌ | |
| 3 | 2026-06-10 | ✅ / ⚠️ / ❌ | |
| 4 | 2026-06-17 | ✅ / ⚠️ / ❌ | |
| 5 | 2026-07-03 | ✅ / ⚠️ / ❌ | |

---

## 🧠 Recuperación Activa

**Palabras clave para autoevaluación** (tapa el resto de la nota y explica cada una):

1. **IETF** — ¿Qué organización publica los RFC y qué significan sus siglas?
2. **Inmutable** — ¿Por qué los RFC nunca se modifican después de publicados?
3. **RFC 791** — ¿Qué protocolo fundamental define y qué año se publicó?
4. **ICMP** — ¿Para qué sirve este protocolo y qué comando común lo usa?
5. **Estándares vs Informativos** — ¿Qué tipos de RFC existen y cuál es obligatorio?
6. **Datatracker** — ¿Dónde se encuentran todos los RFC publicados libremente?
7. **1969** — ¿Qué año se publicó el primer RFC y por qué es importante?

> [!tip] Método de uso
> Lee cada palabra clave, intenta explicar el concepto en voz alta sin mirar la nota, luego verifica. Si fallas, marca con ❌ y repasa esa sección específica.

---

## 🏛 Anclas de Memoria (Loci)

**Recorrido: Tu casa → La biblioteca → El centro de la ciudad**

| # | Concepto | Lugar/Imagen | Escena vívida |
|---|----------|--------------|---------------|
| 1 | **RFC inmutable** | La puerta de tu casa | Imagina que grabas las reglas de convivencia en **piedra** en la puerta. Una vez talladas, **nunca puedes borrarlas**. Si necesitas cambiar algo, escribes una nueva piedra y la pegas encima, pero la original sigue ahí intacta. Sientes el polvo de piedra en tus manos. |
| 2 | **RFC 791 (IP)** | La biblioteca local | Entras a la biblioteca y ves un **libro gigante con el número 791** en el lomo. Al abrirlo, salen **direcciones postales volando** por todo el aire: cada libro tiene su dirección única para que el cartero sepa dónde llevarlo. Es como el sistema de direccionamiento IP pero con libros. |
| 3 | **ICMP (ping)** | El centro de la ciudad | Estás en la plaza central y **gritas "¡HOLA!"** hacia un edificio. El eco te responde inmediatamente: **"¡HOLA! ¡ESTOY AQUÍ!"**. Eso es ICMP/ping: envías un mensaje y recibes confirmación de que el destino está vivo y responde. |
| 4 | **IETF** | La cafetería de la esquina | Entras a la cafetería y ves una **mesa redonda gigante** donde ingenieros de todo el mundo discuten acaloradamente. Hay mapas, cables y diagramas por todas partes. Uno golpea la mesa y grita: "¡Yo propongo este estándar!" Es la IETF debatiendo nuevos RFC. |
| 5 | **1969 (primer RFC)** | El museo de la ciudad | En el museo ves una **máquina de escribir antigua de 1969** junto a una computadora primitiva. Un estudiante universitario está escribiendo el primer RFC a máquina, sin saber que está creando las bases de Internet. El papel amarillento tiene anotaciones a mano. |

> [!warning] Clave del método Loci
> Cuanto más absurda y emocional sea la imagen, mejor la recordarás. Revisa estas escenas mentalmente recorriendo los lugares antes de cada repaso.

---

## 🔗 Relacionado

- [[internet]] — los RFC son los documentos que estandarizaron todos los protocolos de Internet
- [[modelo-tcp-ip]] — TCP/IP está definido en RFC 791, 792 y 793
