---
type: research
fuente: recursos/Investigación Profunda del Voltaje Eléctrico.md
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
  - tema/circuitos
  - tema/electromagnetismo
  - review/pendiente
---

# 🔬 Ruptura de KVL y Campos No Conservativos

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 7 palabras clave:
> `KVL` · `Faraday` · `campos no conservativos` · `FEM` · `Lewin` · `voltímetros contradictorios` · `flujo magnético cambiante`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **KVL solo es válida cuando no hay flujo magnético cambiante** atravesando el lazo del circuito. En presencia de ∂B/∂t, la circulación del campo eléctrico deja de ser cero y KVL colapsa por completo.
2. **El voltaje deja de ser una propiedad del punto** cuando existen campos no conservativos: la lectura de un voltímetro depende de la trayectoria espacial de sus cables, no solo de los dos nodos a los que está conectado.
3. **El experimento de Lewin** (dos voltímetros conectados a los mismos puntos que dan lecturas diferentes) demuestra experimentalmente que "el voltaje entre dos puntos" es un concepto que pierde validez física cuando hay flujo magnético variable.
4. **La FEM tiene dos mecanismos distintos**: FEM de movimiento (conductor que se mueve en campo B estático, fuerza de Lorentz) y FEM de transformador (circuito fijo, campo B variable en el tiempo, campo E circulante).
5. **En un conductor perfecto (ρ=0)**, el campo electrostático interno cancela exactamente al campo no conservativo inducido, pero la FEM neta del lazo sigue siendo distinta de cero e impulsa corrientes macroscópicas.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es KVL y por qué normalmente funciona? | La Ley de Voltajes de Kirchhoff postula que la suma de caídas de tensión a lo largo de un lazo cerrado es cero: ΣV = 0. Funciona porque en electrostática el campo E es conservativo: su circulación ∮ E·dl = 0. Esto permite definir un potencial escalar V único en cada punto del espacio, de modo que E = -∇V. La diferencia de potencial entre dos puntos es independiente del camino. |
| ¿Cuándo falla KVL? (cuando hay flujo magnético cambiante en el circuito) | KVL falla cuando un flujo magnético variable Φ_B atraviesa el lazo del circuito. Según la ecuación de Maxwell-Faraday: ∇ × E = -∂B/∂t. Si ∂B/∂t ≠ 0, entonces ∇ × E ≠ 0, el campo E pierde su carácter conservativo y la circulación ∮ E·dl ya no es cero sino igual a -dΦ_B/dt (ley de Faraday). La suma de caídas de tensión ya no puede ser cero. |
| ¿Qué es un campo no conservativo? | Un campo vectorial cuyo rotacional no es cero en algún punto del espacio: ∇ × E ≠ 0. Consecuencia: la integral de línea entre dos puntos A y B **depende de la trayectoria** que se tome. No se puede expresar como gradiente de un potencial escalar. El campo eléctrico total en electrodinámica se descompone en: E = -∇V - ∂A/∂t, donde el segundo término (-∂A/∂t) es la contribución no conservativa de carácter solenoidal inducida por la variación temporal del potencial vectorial magnético A. |
| Explicar el experimento de Lewin: ¿por qué dos voltímetros conectados a los mismos puntos dan lecturas diferentes? | Circuito: dos resistencias R₁=100Ω y R₂=900Ω en serie formando un lazo alrededor de un solenoide con corriente variable. El solenoide induce una FEM total de 1V, lo que produce una corriente I = 1V/1000Ω = 1mA. Las caídas óhmicas son: V₁ = IR₁ = 0.1V y V₂ = IR₂ = 0.9V. Se conectan dos voltímetros a los mismos dos nodos: V₁ cierra su bucle por fuera de R₁ (no encierra el solenoide → flujo nulo en su bucle → lee 0.1V). V₂ cierra su bucle por fuera de R₂ en sentido opuesto (encierra el solenoide → experimenta inducción local → lee 0.9V). **El voltímetro mide la circulación de E a través de la espira formada por el instrumento, sus cables y la sección del circuito.** Cada trayectoria encierra distinto flujo magnético → lecturas contradictorias simultáneas. |
| ¿Qué es la FEM de movimiento vs FEM de transformador? | **FEM de movimiento (Motional EMF):** un conductor se desplaza con velocidad v a través de un campo magnético B estacionario. Los electrones libres experimentan la fuerza de Lorentz F = q(v × B), que actúa como un campo eléctrico motional E_mot = v × B, impulsando la separación de carga a lo largo del conductor. **FEM de transformador (Transformer EMF):** el circuito permanece fijo en el espacio pero el campo B varía con el tiempo (∂B/∂t ≠ 0). La aceleración de las cargas del campo inductor genera un campo eléctrico circulante (-∂A/∂t) que ejerce fuerza directa sobre los electrones del circuito estacionario. Ambos mecanismos producen FEM = -dΦ_B/dt pero por causas físicas distintas. |
| ¿Qué pasa en un conductor perfecto (ρ=0) con campos no conservativos? | Según la ley de Ohm microscópica J = σE, para mantener una densidad de corriente finita J dentro de un conductor perfecto (σ→∞), el campo eléctrico total en su interior debe ser E=0. Esto significa que el campo electrostático (por acumulación de carga superficial) cancela exactamente al campo no conservativo inducido (-∂A/∂t). La diferencia de potencial electrostático a lo largo del conductor perfecto es cero, pero la FEM neta del lazo sigue siendo ≠ 0 y produce corrientes. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina que quieres medir la altitud entre dos puntos en una montaña. En un mundo normal (sin campos magnéticos variables), da igual qué sendero tomes: la diferencia de altitud entre el punto A y el punto B es siempre la misma. Eso es lo que KVL asume: que el "voltaje" entre dos puntos es como la altitud, una propiedad fija de los puntos.
>
> Pero cuando hay un campo magnético cambiante cerca del circuito, es como si la montaña misma se deformara mientras caminas. Ahora, **el desnivel que mides depende del sendero exacto que recorras**. Dos personas que salgan del mismo punto A y lleguen al mismo punto B por caminos diferentes medirán desniveles distintos. Los dos voltímetros de Lewin son esas dos personas: conectados a los mismos puntos pero con cables que siguen trayectorias diferentes, obtienen lecturas diferentes. No es un error del instrumento — es que **"el voltaje entre dos puntos" dejó de existir como concepto bien definido**. La montaña ya no tiene una altitud fija; depende de cómo la recorras.

---

## 💡 Aprendizajes principales

- La ecuación de Maxwell-Faraday (∇ × E = -∂B/∂t) es la raíz fundamental de la ruptura de KVL: cuando el rotacional de E no es cero, no se puede definir un potencial escalar único.
- El voltímetro no mide "el voltaje entre dos puntos" de forma abstracta: mide la integral de línea del campo E a lo largo de la espira física que forman sus cables y el circuito. La geometría de los cables importa.
- La distinción entre FEM de movimiento y FEM de transformador es conceptualmente importante: ambas producen el mismo resultado matemático (-dΦ_B/dt) pero por mecanismos físicos diferentes (Lorentz vs campo E circulante).
- En circuitos de alta frecuencia o cercanos a inductores/transformadores, KVL puede no ser aplicable. Los ingenieros deben considerar la geometría física del tendido de cables y de las puntas de medición.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| KVL rota | La puerta de entrada de tu casa | Estás en la puerta de tu casa intentando sumar las caídas de voltaje de un circuito. Cada vez que cierras la puerta, una mano invisible (Faraday) la vuelve a abrir desde dentro. El marco de la puerta se retuerce como un campo magnético variable. El número "0" tallado en la puerta se transforma en "-dΦ/dt". KVL ya no cierra. |
| Voltímetros contradictorios de Lewin | El salón de tu casa | Dos gemelos idénticos (los voltímetros) están sentados en el sofá mirando la misma película en la TV. Pero uno lleva gafas rojas y el otro gafas azules. Cada uno describe una película completamente diferente. Los dos tienen razón: las gafas (la trayectoria de los cables) cambian lo que ven. Entre ellos flota un solenoide brillante como un imán gigante girando. |
| Campo no conservativo | La escalera de tu edificio | Subes por la escalera y al llegar al tercer piso, la escalera se convierte en una cinta de Moebius. Ya no importa desde dónde empezaste: cada vez que das una vuelta completa, terminas a una altura diferente. El campo E es esa escalera imposible: el trabajo de ir de A a B depende de cuántas vueltas diste y por dónde. |
| FEM de movimiento vs transformador | La cocina | Dos formas de calentar agua: (1) Mover una olla sobre una llama fija = FEM de movimiento (el conductor se mueve, el campo es estático). (2) Dejar la olla fija y encender/apagar la llama rítmicamente = FEM de transformador (el conductor está quieto, el campo varía). En ambos casos el agua se calienta igual (misma FEM), pero el mecanismo es distinto. |
| Conductor perfecto (E=0 interno) | Un espejo perfecto en tu baño | Dentro del espejo (el conductor perfecto), toda la luz (campo no conservativo) es reflejada perfectamente por cargas superficiales que aparecen como una capa de mercurio líquido. Por fuera hay un campo tremendo, pero por dentro todo es calma absoluta: E=0. Sin embargo, la corriente fluye como un río caudaloso por la superficie. |

---

## 📐 Ecuación clave

> [!info] La ley de Faraday como generalización de KVL

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}$$

**Relación con KVL:**
- **KVL** es el caso particular donde dΦ_B/dt = 0 → ∮ E·dl = 0 → la suma de caídas de tensión es cero.
- **Faraday** es la ley general: cuando dΦ_B/dt ≠ 0, la circulación de E es distinta de cero y KVL queda invalidada.

**Campo eléctrico total en electrodinámica:**

$$\mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t}$$

- Primer término (-∇V): contribución electrostática irrotacional (conservativa).
- Segundo término (-∂A/∂t): contribución inducida solenoidal (no conservativa).

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
- Al analizar circuitos con inductores o transformadores, recordar que KVL es una aproximación que solo vale cuando el flujo magnético parásito es despreciable.
- Entender por qué en mediciones de alta precisión la disposición física de las puntas del osciloscopio importa: los cables forman bucles que pueden captar flujo magnético variable.

**Aplicación a medio plazo (este mes):**
- Estudiar las [[ecuaciones-de-maxwell]] completas para entender cómo la ley de Faraday se integra con las demás ecuaciones.
- Conectar este concepto con [[señalizacion-diferencial]] en redes: la señalización diferencial MLT-3 opera en un régimen donde los efectos de campo lejano y la geometría de los conductores sí importan.

**Proyecto o idea donde encaja:**
- [[onda-electromagnetica]] — entender cómo los campos E y B variables se acoplan mutuamente.
- [[corriente-electrica]] — comprender que la corriente en un inductor no se explica solo con potencial electrostático.

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

- Otras investigaciones: [[corriente-electrica]], [[onda-electromagnetica]], [[señalizacion-diferencial]]
- Conceptos relacionados: [[voltaje]], [[ecuaciones-de-maxwell]]
- Conceptos por crear: [[fuerza-electromotriz]]
- Recursos fuente: [[Investigación Profunda del Voltaje Eléctrico]]
- MOC: [[020 Física y Electromagnetismo MOC]]
