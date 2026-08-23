---
type: indice-grafo
generado: 2026-08-14
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

**35 nodos indexados** · 32 en `investigaciones/` · 3 en `ideas/`.

---

## 🔌 1-fundamentos (física fundamental)

- ⭐ [[carga-electrica]] :: Propiedad primitiva que decide si una partícula participa (y con qué signo) en la interacción EM; cuantizada en múltiplos de e, conservada localmente e invariante relativista. Incluye qué significa "cargar" un cuerpo (transferir electrones, nunca crearlos), los 3 métodos de electrización y conductor vs. aislante como libertad de la carga.
  → [[corriente-electrica]], [[voltaje]], [[resistencia]], [[la-composicion-de-la-materia-atomos]], [[la-corriente-electrica-en-el-hogar]], [[ecuaciones-de-maxwell]], [[onda-electromagnetica]], [[fotones-virtuales]], [[relatividad-general]], [[lagrangiano-y-principio-de-minima-accion]], [[señalizacion-diferencial]], [[codificacion-4b-5b-y-mlt-3]], [[ieee-802-11]]
- ⭐ [[corriente-electrica]] :: Flujo ordenado de electrones (I = dQ/dt); modelo de Drude, deriva lenta (~mm/s) vs señal de propagación casi a c.
  → [[carga-electrica]], [[resistencia]], [[voltaje]], [[fotones-virtuales]], [[la-composicion-de-la-materia-atomos]], [[la-corriente-electrica-en-el-hogar]], [[onda-electromagnetica]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]]
- [[voltaje]] :: Diferencia de potencial = presión eléctrica (J/C), no cantidad de electrones; batería de 1.5 V la fija la química, no el tamaño.
  → [[resistencia]], [[ruptura-kvl-campos-no-conservativos]], [[carga-electrica]], [[corriente-electrica]], [[fuerza-electromotriz]], [[la-corriente-electrica-en-el-hogar]]
- [[resistencia]] :: Oposición al paso de corriente (Ω); del modelo clásico de Drude al estado sólido (fonones, Matthiessen, superconductividad); V = IR.
  → [[voltaje]], [[corriente-electrica]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[la-corriente-electrica-en-el-hogar]]
- [[la-composicion-de-la-materia-atomos]] :: Protón define identidad química, neutrón estabiliza el núcleo, electrón controla la química; 98,7% de la masa nucleónica es energía de confinamiento.
  → [[corriente-electrica]], [[fotones-virtuales]], [[carga-electrica]], [[onda-electromagnetica]], [[voltaje]]
- [[la-corriente-electrica-en-el-hogar]] :: De la inducción de Faraday → transmisión a 400 kV (P = I²R) → cableado domiciliario; la CA ganó por los transformadores.
  → [[onda-electromagnetica]], [[corriente-electrica]], [[señalizacion-diferencial]]
- [[lagrangiano-y-principio-de-minima-accion]] :: L = T − V, acción S = ∫L dt; la naturaleza elige el camino de acción estacionaria (Euler-Lagrange ≡ Newton).
  → [[ecuaciones-de-maxwell]], [[onda-electromagnetica]], [[ondas-gravitacionales]], [[relatividad-general]], [[corriente-electrica]], [[voltaje]]

---

## ⚡ 2-circuitos

- [[fuerza-electromotriz]] :: Energía por unidad de carga que un agente no conservativo (química, movimiento, flujo variable) entrega para sostener la corriente; V = ε − Ir con resistencia interna.
  → [[voltaje]], [[ruptura-kvl-campos-no-conservativos]], [[la-corriente-electrica-en-el-hogar]], [[corriente-electrica]], [[ecuaciones-de-maxwell]]
- [[ruptura-kvl-campos-no-conservativos]] :: KVL falla con flujo magnético variable (∂B/∂t ≠ 0); el voltaje deja de ser propiedad del punto (experimento de Lewin).
  → [[ecuaciones-de-maxwell]], [[señalizacion-diferencial]], [[onda-electromagnetica]], [[corriente-electrica]], [[fuerza-electromotriz]], [[voltaje]]

---

## 🌈 3-electromagnetismo

- ⭐ [[onda-electromagnetica]] :: Campos E y H perpendiculares autosostenidos (Faraday + Ampère-Maxwell) que se propagan sin medio; la energía viaja en el campo (Poynting), guiada en el cable Ethernet.
  → [[fotones-virtuales]], [[corriente-electrica]], [[fast-ethernet-ieee-802-3u]], [[preguntas-clave-onda-electromagnetica]]
- [[ecuaciones-de-maxwell]] :: Las 4 ecuaciones unifican E y B; c = 1/√(μ₀ε₀) demuestra que la luz es onda EM; la corriente de desplazamiento cierra el ciclo de autopropagación.
  → [[señalizacion-diferencial]], [[antena-wifi-tarro-papas]], [[onda-electromagnetica]], [[fotones-virtuales]], [[corriente-electrica]], [[la-corriente-electrica-en-el-hogar]]
- [[espectro-electromagnetico]] :: Continuo de frecuencias (>20 órdenes de magnitud); la luz visible es una fracción mínima; la energía del fotón (E = hf) determina la peligrosidad.
  → [[onda-electromagnetica]], [[efectos-biologicos-radiacion-em]], [[fotones-virtuales]], [[ecuaciones-de-maxwell]], [[preguntas-clave-onda-electromagnetica]], [[corriente-electrica]]
- [[efectos-biologicos-radiacion-em]] :: El umbral de ionización (~10-12 eV) separa daño directo/indirecto al ADN de efectos meramente térmicos; la controversia de RF de baja potencia (WiFi/5G) vive en terreno sin mecanismo confirmado (IARC Grupo 2B).
  → [[espectro-electromagnetico]], [[onda-electromagnetica]]
- [[fotones-virtuales]] :: Excitación off-shell que media la fuerza EM en QED; existen por Heisenberg (ΔE·Δt ≥ ħ/2); medibles vía Casimir y Lamb shift.
  → [[corriente-electrica]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- [[relatividad-general]] :: La gravedad es curvatura del espaciotiempo (Einstein 1915), no una fuerza; los objetos siguen geodésicas; G_μν = (8πG/c⁴)T_μν.
  → [[lagrangiano-y-principio-de-minima-accion]], [[ondas-gravitacionales]], [[onda-electromagnetica]]
- [[ondas-gravitacionales]] :: Perturbaciones del espaciotiempo (Einstein 1916, LIGO 2015 con GW150914); a diferencia de las EM, atraviesan materia sin atenuación.
  → [[onda-electromagnetica]], [[relatividad-general]], [[fotones-virtuales]], [[antena-wifi-tarro-papas]]
- [[preguntas-clave-onda-electromagnetica]] :: Checklist de repaso activo sobre [[onda-electromagnetica]]: autopropagación, E⊥H⊥k, velocidad de medio, espectro y vector de Poynting.
  → [[onda-electromagnetica]], [[corriente-electrica]], [[fast-ethernet-ieee-802-3u]], [[codificacion-4b-5b-y-mlt-3]], [[antena-wifi-tarro-papas]], [[frecuencia-mlt3-longitud-onda-cobre]], [[fotones-virtuales]], [[señalizacion-diferencial]]

---

## 🌐 4-redes-y-telecom

- [[internet]] :: Red de redes; ARPANET (1969) y conmutación de paquetes; TCP/IP (1983, "Día de la Bandera") como momento fundacional.
  → [[nsfnet]], [[modelo-tcp-ip]], [[rfc]], [[historia-y-origen-de-ethernet-1973]]
- [[modelo-tcp-ip]] :: Familia de protocolos en 4 capas (Acceso-Internet-Transporte-Aplicación) unidas por encapsulación; estándar de facto desde 1983.
  → [[internet]], [[rfc]], [[nsfnet]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]]
- [[modelo-osi]] :: Arquitectura de red en 7 capas (ISO 1984); el emisor encapsula y el receptor desencapsula; en la práctica Internet corre TCP/IP.
  → [[modelo-tcp-ip]], [[internet]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]], [[rfc]]
- [[rfc]] :: Documentos fundacionales e inmutables de Internet (IETF); RFC 791/792/793 (1981) definieron IP/ICMP/TCP.
  → [[internet]], [[modelo-tcp-ip]]
- [[nsfnet]] :: Backbone académico (1985) entre ARPANET y el Internet comercial; su privatización en 1995 dio origen a los ISPs.
  → [[internet]], [[modelo-tcp-ip]]
- [[historia-y-origen-de-ethernet-1973]] :: Metcalfe adapta ALOHA en Xerox PARC (1973); CSMA/CD resuelve la ineficiencia de ALOHA; el estándar abierto DIX (1980) lo lleva al mundo.
  → [[el-estandar-dix]], [[codificacion-4b-5b-y-mlt-3]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[internet]], [[modelo-tcp-ip]]
- ⭐ [[el-estandar-dix]] :: Consorcio DEC+Intel+Xerox (1980) vuelve Ethernet un estándar abierto; Ethernet II define el campo EtherType que aún usa Internet.
  → [[ecma]], [[ieee-802-11]], [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[historia-y-origen-de-ethernet-1973]], [[internet]], [[modelo-tcp-ip]], [[onda-electromagnetica]]
- [[ecma]] :: Asociación industrial (1961) que medió entre DIX e IEEE con ECMA-82, evitando la fragmentación de Ethernet; hoy conocida por ECMAScript/JavaScript.
  → [[el-estandar-dix]]
- ⭐ [[fast-ethernet-ieee-802-3u]] :: 100BASE-TX (1995), 10× más rápido vía 4B/5B + MLT-3 (31,25 MHz) sobre Cat5; la señal viaja como onda EM guiada, no dentro del cobre.
  → [[onda-electromagnetica]], [[codificacion-4b-5b-y-mlt-3]], [[historia-y-origen-de-ethernet-1973]], [[el-estandar-dix]]
- [[codificacion-4b-5b-y-mlt-3]] :: 4B/5B garantiza transiciones para sincronización de reloj; MLT-3 (3 niveles de voltaje) reduce la frecuencia fundamental a 31,25 MHz.
  → [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[historia-y-origen-de-ethernet-1973]], [[onda-electromagnetica]], [[corriente-electrica]]
- ⭐ [[señalizacion-diferencial]] :: Datos como diferencia de voltaje entre dos conductores (V_diff = V₁−V₂); el par trenzado cancela el ruido de modo común (CMRR).
  → [[onda-electromagnetica]], [[codificacion-4b-5b-y-mlt-3]], [[fast-ethernet-ieee-802-3u]]
- [[modulacion-am-fm]] :: 🌉 Portadora fija + mensaje: AM varía la amplitud, FM la frecuencia (centro fijo, desvío ±75 kHz); FM gana inmunidad al ruido a costa de ancho de banda.
  → [[codificacion-4b-5b-y-mlt-3]], [[espectro-electromagnetico]], [[modulacion-digital-ask-fsk-psk]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- [[modulacion-digital-ask-fsk-psk]] :: 🌉 La versión digital de AM/FM: ASK/FSK/PSK conmutan (keying) amplitud/frecuencia/fase entre símbolos discretos; QAM combina amplitud+fase (plano I/Q).
  → [[modulacion-am-fm]], [[codificacion-4b-5b-y-mlt-3]], [[ofdm]], [[ieee-802-11]], [[señalizacion-diferencial]], [[espectro-electromagnetico]], [[onda-electromagnetica]]
- [[ofdm]] :: 🌉 Miles de subportadoras QAM ortogonales en paralelo (Δf = 1/T) vencen el multitrayecto (ISI); IFFT/FFT + prefijo cíclico lo hacen barato. Núcleo de WiFi/4G/5G.
  → [[modulacion-am-fm]], [[modulacion-digital-ask-fsk-psk]], [[codificacion-4b-5b-y-mlt-3]], [[ieee-802-11]], [[espectro-electromagnetico]], [[onda-electromagnetica]]
- [[ieee-802-11]] :: Wi-Fi; CSMA/CA (no CD, no se puede detectar colisión en el aire); OFDM+QAM desde 802.11a/g; MIMO (n) → MU-MIMO (ac) → OFDMA (ax/WiFi6).
  → [[fast-ethernet-ieee-802-3u]], [[el-estandar-dix]], [[ofdm]], [[modulacion-digital-ask-fsk-psk]], [[antena-wifi-tarro-papas]]

---

## 💡 ideas (semillas sin proyecto)

- [[antena-wifi-tarro-papas]] :: Cantenna casera — el tarro metálico guía y refleja la onda EM para ampliar el alcance del Wi-Fi.
  → [[onda-electromagnetica]], [[señalizacion-diferencial]], [[ieee-802-11]]
- [[frecuencia-mlt3-longitud-onda-cobre]] :: Cálculo de cierre: λ ≈ 6,4 m para f = 31,25 MHz (MLT-3) en cobre — comparable a la longitud de muchos cables de red.
  → [[fast-ethernet-ieee-802-3u]], [[señalizacion-diferencial]], [[onda-electromagnetica]]
- [[palabras-clave-como-repaso-activo]] :: Tapar el desarrollo de una nota y reconstruirla solo desde sus palabras clave antes de leerla — usar la sección "🔑 Recuperación Activa" como práctica, no como adorno.
  → [[onda-electromagnetica]], [[preguntas-clave-onda-electromagnetica]]

---

## 🕳️ Huecos del grafo (notas enlazadas pero aún no creadas)

> [!tip] Pilar de integración lógica. Estos `[[enlaces]]` aparecen en notas existentes pero no tienen archivo destino. Cada uno es una oportunidad de investigación que **ya tiene demanda** en el grafo.

**Sin huecos pendientes.** Todos los enlaces salientes de las 35 notas resuelven a un archivo existente (nodo del grafo o material fuente de `recursos/`). Los 5 huecos de la generación anterior (`fuerza-electromotriz`, `relatividad-general`, `efectos-biologicos-radiacion-em`, `ecma`, `ieee-802-11`) siguen cerrados.

> [!warning] Higiene de enlaces (1 hallazgo)
> `investigaciones/4-redes-y-telecom/el-estandar-dix.md` enlaza `[[ECMA]]` en mayúsculas además de `[[ecma]]`. Obsidian lo resuelve igual, pero incumple la convención de minúsculas-con-guiones de `CLAUDE.md` y duplica la arista. Normalizar a `[[ecma]]`.

---

## 📚 Material fuente (recursos/, no son nodos del grafo conceptual)

Documentos en bruto de los que se destilaron las notas anteriores: `recursos/historia-y-evolucion-del-internet-arpanet.md`, `recursos/Investigación Profunda del Voltaje Eléctrico.md`, `recursos/Investigación Onda Electromagnética Universitaria - gemini.md`, `recursos/Ondas electromagnéticas - naturaleza, historia y frontera tecnológica.md`, `recursos/ondas-electromagneticas-ppxty.md`, `recursos/metodologias-de-aprendizaje.md`, `recursos/las simetrías globales.md`. Consultar solo si la nota destilada no basta.

---

## 🔗 Relacionado

- [[000 Home MOC]] · [[010 Redes y Telecomunicaciones MOC]] · [[020 Física y Electromagnetismo MOC]] · [[050 Diario MOC]]
