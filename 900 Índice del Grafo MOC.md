---
type: indice-grafo
generado: 2026-06-30
generado-por: skill indexador-grafo
nota: Archivo GENERADO AUTOMÁTICAMENTE. No editar a mano — se regenera con la skill `indexador-grafo`.
tags:
  - moc
  - indice/grafo
---

# 900 🗺️ Índice del Grafo — Mapa de navegación para el agente

> [!warning] Archivo generado automáticamente
> No lo edites a mano. Lo regenera la skill **`indexador-grafo`** escaneando `investigaciones/` e `ideas/`. Si una nota cambia de resumen o de enlaces, vuelve a correr la skill.

> [!info] Cómo usar este índice (instrucciones para el agente)
> 1. **Léelo PRIMERO**, antes de hacer `glob`/`grep` o abrir notas a ciegas.
> 2. Localiza por el resumen de una frase las **1-3 notas** relevantes a la consulta.
> 3. Sigue las aristas `→` para descubrir notas vecinas conectadas.
> 4. **Solo entonces** abre el contenido completo de esas 2-3 notas. Esto ahorra tokens: navegas el grafo en vez de leer toda la bóveda.
> 5. Los nodos marcados con ⭐ son **hubs** (muy conectados): buenos puntos de entrada a cada dominio.

Formato de cada entrada: `[[nota]] :: resumen` y debajo `→ vecinos`.

---

## 🔌 1-fundamentos (física fundamental)

- ⭐ [[corriente-electrica]] :: Flujo ordenado de electrones en un conductor (I = dQ/dt); modelo de Drude, deriva lenta (~mm/s) vs señal casi a c.
  → [[resistencia]], [[voltaje]], [[fotones-virtuales]], [[la-composicion-de-la-materia-atomos]], [[la-corriente-electrica-en-el-hogar]], [[onda-electromagnetica]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]]
- [[voltaje]] :: Diferencia de potencial = presión eléctrica (J/C), no cantidad de electrones; batería de 1.5 V.
  → [[resistencia]], [[corriente-electrica]], [[ruptura-kvl-campos-no-conservativos]], [[la-corriente-electrica-en-el-hogar]]
- [[resistencia]] :: Oposición al paso de corriente (Ω); del modelo clásico al estado sólido; V = IR.
  → [[voltaje]], [[corriente-electrica]], [[la-corriente-electrica-en-el-hogar]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]]
- [[la-composicion-de-la-materia-atomos]] :: Protón define identidad química, neutrón estabiliza el núcleo, electrón controla la química; 98,7% de la masa es energía de confinamiento.
  → [[corriente-electrica]], [[fotones-virtuales]], [[onda-electromagnetica]], [[voltaje]]
- [[la-corriente-electrica-en-el-hogar]] :: De la inducción de Faraday → transmisión a 400 kV → cableado domiciliario; CA, efecto Joule.
  → [[corriente-electrica]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- [[lagrangiano-y-principio-de-minima-accion]] :: L = T − V, acción S = ∫L dt; la naturaleza elige el camino de acción estacionaria.
  → [[ecuaciones-de-maxwell]], [[onda-electromagnetica]], [[ondas-gravitacionales]], [[corriente-electrica]], [[voltaje]]

---

## ⚡ 2-circuitos

- [[ruptura-kvl-campos-no-conservativos]] :: KVL falla con flujo magnético variable; el voltaje deja de ser propiedad del punto (experimento de Lewin).
  → [[ecuaciones-de-maxwell]], [[señalizacion-diferencial]], [[onda-electromagnetica]], [[corriente-electrica]], [[voltaje]]

---

## 🌈 3-electromagnetismo

- ⭐ [[onda-electromagnetica]] :: Campos E y H perpendiculares que se propagan sin medio; la energía viaja en el campo (vector de Poynting), guiada en el cable Ethernet.
  → [[fotones-virtuales]], [[corriente-electrica]], [[fast-ethernet-ieee-802-3u]], [[preguntas-clave-onda-electromagnetica]]
- [[ecuaciones-de-maxwell]] :: Las 4 ecuaciones unifican E y B; c = 1/√(μ₀ε₀) demuestra que la luz es una onda EM.
  → [[onda-electromagnetica]], [[fotones-virtuales]], [[corriente-electrica]], [[señalizacion-diferencial]]
- [[espectro-electromagnetico]] :: Continuo de frecuencias (>20 órdenes de magnitud); la luz visible es una fracción mínima; la energía del fotón determina la peligrosidad (ionizante vs no).
  → [[onda-electromagnetica]], [[fotones-virtuales]], [[ecuaciones-de-maxwell]], [[preguntas-clave-onda-electromagnetica]], [[corriente-electrica]]
- [[fotones-virtuales]] :: Excitación off-shell que media la fuerza EM en QED; existen por Heisenberg; medibles vía Casimir y Lamb shift.
  → [[corriente-electrica]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- [[ondas-gravitacionales]] :: Perturbaciones del espaciotiempo (Einstein 1916, LIGO 2015); GW170817 inauguró la astronomía multimensajero.
  → [[onda-electromagnetica]], [[fotones-virtuales]]
- [[preguntas-clave-onda-electromagnetica]] :: Herramienta de repaso activo (checklist de comprensión) de [[onda-electromagnetica]].
  → [[onda-electromagnetica]], [[corriente-electrica]], [[fast-ethernet-ieee-802-3u]], [[fotones-virtuales]], [[codificacion-4b-5b-y-mlt-3]], [[señalizacion-diferencial]]

---

## 🌐 4-redes-y-telecom

- ⭐ [[internet]] :: Red de redes; ARPANET (1969) y conmutación de paquetes; TCP/IP (1983) como momento fundacional.
  → [[nsfnet]], [[modelo-tcp-ip]], [[rfc]], [[historia-y-origen-de-ethernet-1973]], [[historia-y-evolucion-del-internet-arpanet]]
- [[modelo-tcp-ip]] :: Familia de protocolos en 4 capas; encapsulación; el lenguaje universal de Internet.
  → [[internet]], [[rfc]], [[nsfnet]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]]
- [[modelo-osi]] :: Arquitectura de red en 7 capas (ISO 1984); el emisor encapsula y el receptor desencapsula.
  → [[modelo-tcp-ip]], [[internet]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]], [[rfc]]
- [[rfc]] :: Documentos fundacionales (inmutables) que definen los protocolos de Internet; RFC 791/793/792.
  → [[internet]], [[modelo-tcp-ip]]
- [[nsfnet]] :: Backbone académico (1985) entre ARPANET y el Internet comercial; desmantelada en 1995.
  → [[internet]], [[modelo-tcp-ip]], [[historia-y-evolucion-del-internet-arpanet]]
- ⭐ [[historia-y-origen-de-ethernet-1973]] :: Metcalfe adapta ALOHA en Xerox PARC; CSMA/CD; el estándar abierto DIX.
  → [[el-estandar-dix]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[internet]], [[codificacion-4b-5b-y-mlt-3]], [[modelo-tcp-ip]]
- [[el-estandar-dix]] :: Consorcio DEC-Intel-Xerox vuelve Ethernet un estándar abierto; trama Ethernet II y campo EtherType.
  → [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[historia-y-origen-de-ethernet-1973]], [[internet]], [[modelo-tcp-ip]], [[onda-electromagnetica]]
- ⭐ [[fast-ethernet-ieee-802-3u]] :: 100BASE-TX (1995); cadena 4B/5B + MLT-3; la señal viaja en el campo EM que rodea el par trenzado.
  → [[codificacion-4b-5b-y-mlt-3]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- [[codificacion-4b-5b-y-mlt-3]] :: 4B/5B asegura sincronía de reloj; MLT-3 baja la frecuencia fundamental a 31,25 MHz; por qué 100 Mbps caben en Cat5.
  → [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[historia-y-origen-de-ethernet-1973]], [[onda-electromagnetica]], [[corriente-electrica]]
- [[señalizacion-diferencial]] :: Datos como diferencia de voltaje entre dos conductores; el par trenzado cancela el ruido de modo común (CMRR).
  → [[onda-electromagnetica]], [[codificacion-4b-5b-y-mlt-3]], [[fast-ethernet-ieee-802-3u]]
- [[modulacion-am-fm]] :: Cómo una portadora EM lleva información: AM varía su amplitud, FM su frecuencia (centro fijo, desvío ±75 kHz); FM gana inmunidad al ruido a cambio de ancho de banda.
  → [[espectro-electromagnetico]], [[onda-electromagnetica]], [[codificacion-4b-5b-y-mlt-3]], [[señalizacion-diferencial]], [[modulacion-digital-ask-fsk-psk]]
- [[modulacion-digital-ask-fsk-psk]] :: La versión digital de AM/FM: ASK/FSK/PSK conmutan amplitud/frecuencia/fase entre valores discretos (símbolos); QAM combina amplitud+fase (WiFi/5G). Banda base vs paso banda cierra el puente con la codificación.
  → [[modulacion-am-fm]], [[codificacion-4b-5b-y-mlt-3]], [[señalizacion-diferencial]], [[espectro-electromagnetico]], [[onda-electromagnetica]]

---

## 💡 ideas (semillas sin proyecto)

- [[antena-wifi-tarro-papas]] :: Cantenna casera — el tarro metálico guía y refleja la onda EM para ampliar el Wi-Fi.
  → [[onda-electromagnetica]]
- [[frecuencia-mlt3-longitud-onda-cobre]] :: Calcular λ de 31,25 MHz en cobre (v ≈ ⅔ c); conecta redes con ondas EM en medios materiales.
  → [[codificacion-4b-5b-y-mlt-3]], [[onda-electromagnetica]]

---

## 🕳️ Huecos del grafo (notas enlazadas pero aún no creadas)

> [!tip] Pilar de integración lógica. Estos `[[enlaces]]` aparecen en notas existentes pero no tienen archivo destino. Cada uno es una oportunidad de investigación que **ya tiene demanda** en el grafo.

- `[[fuerza-electromotriz]]` ← referenciada desde [[ruptura-kvl-campos-no-conservativos]]
- `[[relatividad-general]]` ← referenciada desde [[ondas-gravitacionales]], [[lagrangiano-y-principio-de-minima-accion]]
- `[[efectos-biologicos-radiacion-em]]` ← referenciada desde [[espectro-electromagnetico]]

> [!warning] Enlaces probablemente rotos (revisar con `organizador-boveda`)
> - `[[historia-origen-ethernet-1973]]` en [[el-estandar-dix]] → parece typo de [[historia-y-origen-de-ethernet-1973]].
> - `[[corriente-electrica-en-el-hogar]]` en [[ecuaciones-de-maxwell]] → falta el prefijo `la-`: [[la-corriente-electrica-en-el-hogar]].
> - `[[investigaciones/corriente-electrica]]` (estilo ruta) en [[la-composicion-de-la-materia-atomos]] → Obsidian usa solo el nombre: [[corriente-electrica]].

---

## 📚 Material fuente (recursos/, no son nodos del grafo conceptual)

Documentos en bruto de los que se destilaron las notas anteriores: `recursos/historia-y-evolucion-del-internet-arpanet.md`, investigaciones de voltaje/resistencia/ondas EM en PDF y exportes de Gemini/Perplexity. Consultar solo si la nota destilada no basta.

---

## 🔗 Relacionado

- [[000 Home MOC]] · [[010 Redes y Telecomunicaciones MOC]] · [[020 Física y Electromagnetismo MOC]] · [[050 Diario MOC]]
