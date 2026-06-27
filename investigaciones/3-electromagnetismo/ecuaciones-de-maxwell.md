---
type: research
fuente: ondas-electromagneticas-ppxty (Perplexity AI — nivel universitario)
fecha: 2026-06-01
relevancia: alta
dominio: física/electromagnetismo
review-count: 0
ultimo-review: 2026-06-01
next-review: 2026-06-04
nivel-retencion: 0
tags:
  - research
  - tema/física
  - tema/electromagnetismo
  - review/pendiente
---

# 🔬 Ecuaciones de Maxwell

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 5-7 palabras clave:
> `Maxwell` · `Gauss` · `Faraday` · `Ampère` · `divergencia` · `rotacional` · `corriente de desplazamiento`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **Las 4 ecuaciones de Maxwell unifican todos los fenómenos electromagnéticos** — electricidad, magnetismo y óptica quedan descritos en un solo marco teórico de cuatro ecuaciones diferenciales.
2. **La velocidad de la luz se deriva de constantes del vacío** — al combinar las ecuaciones en el vacío, aparece $c = 1/\sqrt{\mu_0 \varepsilon_0} \approx 3 \times 10^8$ m/s, lo que demostró que la luz es una onda electromagnética.
3. **La corriente de desplazamiento fue la aportación genial de Maxwell** — el término $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ completa la simetría entre campos eléctrico y magnético y hace posible la predicción de ondas EM autosostenidas.
4. **Cada ecuación gobierna un aspecto distinto del electromagnetismo** — Gauss eléctrica (fuentes de $\vec{E}$), Gauss magnética (ausencia de monopolos), Faraday (inducción $\vec{B} \to \vec{E}$), Ampère-Maxwell (generación de $\vec{B}$).
5. **Todo tecnologías de comunicaciones —radio, Wi-Fi, fibra óptica— se fundamenta en estas ecuaciones** — desde la antena hasta la propagación de la señal, todo es consecuencia directa del marco de Maxwell.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| **¿Qué describe la Ley de Gauss eléctrica?** | La 1.ª ecuación ($\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$) establece que las cargas eléctricas son fuentes (o sumideros) del campo eléctrico. La divergencia del campo eléctrico en un punto es proporcional a la densidad de carga en ese punto. **Forma integral:** $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}$ — el flujo eléctrico a través de una superficie cerrada es proporcional a la carga encerrada. |
| **¿Qué implica la Ley de Gauss magnética?** | La 2.ª ecuación ($\nabla \cdot \vec{B} = 0$) dice que no existen monopolos magnéticos aislados (no hay "cargas magnéticas"). Las líneas del campo magnético siempre forman lazos cerrados: lo que entra por un lado, sale por el otro. **Forma integral:** $\oint \vec{B} \cdot d\vec{A} = 0$ — el flujo magnético neto a través de cualquier superficie cerrada es siempre cero. |
| **¿Cómo funciona la Ley de Faraday?** | La 3.ª ecuación ($\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$) describe que un campo magnético que cambia en el tiempo genera un campo eléctrico rotacional. Este es el principio de la inducción electromagnética, base de generadores y transformadores. **Forma integral:** $\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$ — la fem inducida es igual a la tasa de cambio del flujo magnético. El signo negativo refleja la Ley de Lenz. |
| **¿Qué añade Maxwell a la Ley de Ampère?** | La 4.ª ecuación ($\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$) tiene dos fuentes de campo magnético: la corriente eléctrica ($\mu_0 \vec{J}$, término de Ampère original) y la **corriente de desplazamiento** ($\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$, añadida por Maxwell). Este segundo término dice que un campo eléctrico variable genera campo magnético, completando la simetría con Faraday. **Forma integral:** $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}$. |
| **¿Cómo se deriva la velocidad de la luz de estas ecuaciones?** | En el vacío ($\rho = 0, \vec{J} = 0$), las ecuaciones se combinan para producir ecuaciones de onda: $\nabla^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$ y $\nabla^2 \vec{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$. Comparando con la ecuación de onda estándar se obtiene $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 3 \times 10^8$ m/s. Donde $\mu_0 = 4\pi \times 10^{-7}$ H/m (permeabilidad) y $\varepsilon_0 = 8{,}854 \times 10^{-12}$ F/m (permitividad). |
| **¿Cuál es la diferencia entre forma diferencial e integral?** | La **forma diferencial** describe los campos punto a punto (divergencia y rotacional locales). La **forma integral** describe los campos sobre regiones extendidas (flujo y circulación sobre superficies y curvas). Ambas son equivalentes por los teoremas de la divergencia y de Stokes, pero cada forma es más útil en distintos contextos. |
| **¿Qué es la corriente de desplazamiento y por qué importa?** | Es el término $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ añadido por Maxwell a la ley de Ampère. Aunque no involucra movimiento de cargas reales, actúa como fuente de campo magnético igual que una corriente eléctrica. Sin ella, las ecuaciones serían inconsistentes (no se conservaría la carga en un capacitor cargándose) y no se podrían predecir las ondas electromagnéticas. Es la pieza que cierra el ciclo de autopropagación: $\vec{E}$ variable → $\vec{B}$ → $\vec{E}$ → ... |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que el electromagnetismo es una conversación entre dos campos: el campo eléctrico y el campo magnético. Las cuatro ecuaciones de Maxwell son las cuatro reglas de esa conversación. Regla 1: las cargas eléctricas crean campo eléctrico, como una persona que habla (genera sonido a su alrededor). Regla 2: no existen "cargas magnéticas" aisladas; el campo magnético siempre viaja en lazos cerrados, como un collar sin broche. Regla 3: si el campo magnético cambia, nace un campo eléctrico (Faraday) — es como si alguien moviera un imán y eso encendiera una bombilla. Regla 4: si el campo eléctrico cambia o hay corriente, nace un campo magnético (Ampère-Maxwell) — es la contraparte de la regla 3. Juntas, estas cuatro reglas crean un ciclo infinito: un campo variable engendra al otro, que a su vez engendra al primero, y así la energía viaja por el espacio como una onda. Cuando calculas a qué velocidad viaja ese ciclo, obtienes exactamente la velocidad de la luz. Por eso Maxwell pudo decir: la luz *es* una onda electromagnética.

---

## 💡 Aprendizajes principales

- Las cuatro ecuaciones de Maxwell (1861-1865) representan posiblemente la unificación más exitosa en la historia de la física: electricidad + magnetismo + óptica en un solo marco.
- El concepto de **divergencia** ($\nabla \cdot$) mide si un campo "nace" o "muere" en un punto (fuentes/sumideros), mientras que el **rotacional** ($\nabla \times$) mide si el campo "gira" alrededor de un punto.
- La confirmación experimental llegó con Heinrich Hertz en 1887, cuando construyó un transmisor de chispa y demostró ondas EM que se reflejaban, refractaban y viajaban a la velocidad de la luz.
- En un medio material, la velocidad se reduce a $v = c / \sqrt{\varepsilon_r \mu_r} = c / n$, donde $n$ es el índice de refracción — base de [[señalizacion-diferencial]] y la propagación en cables de cobre.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **Gauss eléctrica** ($\nabla \cdot \vec{E} = \rho/\varepsilon_0$) | La entrada de tu casa — el felpudo | Imagina un felpudo mágico que brilla con luz azul cuando alguien (carga) se para encima. Cuanta más gente se aglomere en la puerta, más fuerte brilla el felpudo hacia afuera. Una persona = brillo débil. Un grupo = brillo intenso. El felpudo siempre "apunta hacia afuera" desde las cargas positivas y "hacia adentro" desde las negativas. |
| **Gauss magnética** ($\nabla \cdot \vec{B} = 0$) | Una habitación circular sin puertas | Estás en una habitación redonda y completamente cerrada. Sueltas mariposas magnéticas dentro. Las mariposas nunca pueden escapar ni quedarse quietas en un punto: siempre vuelan en círculos y vuelven al punto de partida. No hay forma de atrapar una sola mariposa "norte" sin su pareja "sur". Todo lo que entra por un lado sale por el otro. |
| **Faraday** ($\nabla \times \vec{E} = -\partial\vec{B}/\partial t$) | La cocina — un imán giratorio sobre la mesa | Hay un imán gigante girando sobre la mesa de la cocina. Cada vez que el imán acelera o frena su giro, los cubiertos metálicos de los cajones empiezan a temblar y se organizan en espirales alrededor del imán (campo eléctrico rotacional). Si el imán está quieto, no pasa nada. Solo el *cambio* genera la danza de los cubiertos. |
| **Ampère-Maxwell** ($\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$) | El baño — el grifo y la bañera | Dos cosas crean remolinos en el agua de la bañera: (1) el chorro del grifo (corriente eléctrica $\vec{J}$, los electrones moviéndose por el cable), y (2) un enchufe mágico donde el nivel del agua sube y baja solo (corriente de desplazamiento — el campo eléctrico cambiando sin que nada se mueva físicamente). Ambas fuentes crean los mismos remolinos magnéticos. |
| **Velocidad de la luz derivada** ($c = 1/\sqrt{\mu_0 \varepsilon_0}$) | El pasillo — una carrera de relevos | El pasillo de tu casa es una pista de carreras. Un corredor eléctrico ($\vec{E}$) le pasa el testigo a un corredor magnético ($\vec{B}$), que se lo devuelve al eléctrico, y así infinitamente. La velocidad de esta cadena de relevos está fijada por dos constantes del universo: la "rigidez" del vacío magnético ($\mu_0$) y su "elasticidad" eléctrica ($\varepsilon_0$). Corren exactamente a 300.000 km/s. Ni más, ni menos. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**

- Explicar verbalmente las 4 ecuaciones usando la analogía de la "conversación entre dos campos" (Feynman check con alguien).

**Aplicación a medio plazo (este mes):**

- Conectar cada ecuación con un fenómeno cotidiano: Gauss → pararrayos; Faraday → generador de turbina eólica; Ampère-Maxwell → cómo funciona una antena Wi-Fi; Gauss magnética → por qué los imanes siempre tienen dos polos.

**Proyecto o idea donde encaja:**
- [[antena-wifi-tarro-papas]] — entender las ecuaciones ayuda a comprender cómo una antena direccional manipula los campos E y B

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30**. El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta. Si dejaste pasar un mes, relee y reinicia desde Día 1.

| #   | Fecha      | ¿Recordé bien? | Ajuste |
| --- | ---------- | -------------- | ------ |
| 1   | 2026-06-02 | ✅              |        |
| 2   | 2026-06-04 | ✅ / ⚠️ / ❌     |        |
| 3   | 2026-06-08 | ✅ / ⚠️ / ❌     |        |
| 4   | 2026-06-15 | ✅ / ⚠️ / ❌     |        |
| 5   | 2026-07-01 | ✅ / ⚠️ / ❌     |        |

---

## 🔗 Relacionado

- [[onda-electromagnetica]] — nota canónica sobre ondas EM (propiedades, espectro, generación)
- [[fotones-virtuales]] — descripción cuántica del campo electromagnético (QED)
- [[corriente-electrica]] — fundamento de la corriente que alimenta la Ley de Ampère
- [[corriente-electrica-en-el-hogar]] — aplicación práctica de la corriente alterna
- [[onda-electromagnetica]] — donde las ecuaciones de Maxwell predicen la existencia de ondas EM
