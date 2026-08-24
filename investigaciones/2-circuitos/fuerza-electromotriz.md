---
type: research
fuente: Estudio propio (síntesis de física de circuitos e inducción electromagnética)
fecha: 2026-08-02
relevancia: alta
dominio: física / circuitos / electromagnetismo
review-count: 0
ultimo-review: 2026-08-02
next-review: 2026-08-25
nivel-retencion: 0
tags:
  - research
  - tema/física
  - tema/circuitos
  - tema/electromagnetismo
  - review/pendiente
  - prioridad/alta
---

# 🔬 Fuerza Electromotriz (FEM)

---

> [!important] La **fuerza electromotriz (FEM, ε)** es la **energía por unidad de carga** que una fuente entrega para mover cargas *en contra* del campo eléctrico, cerrando el circuito. Pese al nombre, **no es una fuerza** (se mide en voltios, no en newtons): es lo que **crea y mantiene** la diferencia de potencial, no la diferencia de potencial en sí misma.

> [!warning] Corrigiendo un mito heredado del lenguaje cotidiano
> "Fuerza electromotriz" es un nombre histórico engañoso (acuñado por Volta en 1801, antes de que se entendiera bien el electromagnetismo). No aparece ninguna fuerza mecánica en su definición formal — es trabajo por unidad de carga, exactamente las mismas unidades que el voltaje (J/C = V). La confusión entre **FEM** y **voltaje** es uno de los errores conceptuales más comunes en física introductoria, y es justo el hueco que esta nota cierra: [[voltaje]] describe la diferencia de potencial en un campo *conservativo*; la FEM describe el trabajo de un agente *no conservativo* (química, mecánica, un campo inducido) que hace posible que esa diferencia de potencial exista y se sostenga.

---

## 🔑 Recuperación Activa (Palabras Clave)

> [!important] Antes de leer la nota, intenta explicar el concepto usando solo estas 7 palabras clave:
> `ε (épsilon)` · `Trabajo/carga` · `No es una fuerza` · `Resistencia interna` · `V = ε − Ir` · `FEM química` · `FEM inducida`

---

## 📝 Resumen (3-5 ideas clave — Pareto)

> [!tip] 80/20: De todo lo que leíste, ¿cuáles son las 3-5 ideas que capturan el núcleo del valor?

1. **La FEM es el "motor", el voltaje es la "presión resultante".** ε = dW/dq: trabajo que un agente no electrostático (química, movimiento, flujo magnético variable) hace sobre cada unidad de carga para moverla en contra del campo eléctrico dentro de la fuente. El voltaje entre dos puntos, en cambio, describe el campo ya establecido.
2. **Toda fuente real tiene resistencia interna (r).** La FEM ideal (ε) y el voltaje que realmente mides en los bornes (V) casi nunca son iguales: **V = ε − Ir** cuando la fuente entrega corriente I. Solo coinciden en circuito abierto (I = 0).
3. **La FEM tiene varios orígenes físicos, no uno solo.** Química (batería: reacciones redox separan carga), electromagnética (generador: ley de Faraday), fotovoltaica (celda solar: efecto fotoeléctrico), termoeléctrica (efecto Seebeck). Todas hacen lo mismo — trabajo por unidad de carga contra el campo — por mecanismos distintos.
4. **La inducción electromagnética tiene dos "sabores" de FEM**, ya explorados en [[ruptura-kvl-campos-no-conservativos]]: FEM de movimiento (conductor que se mueve en B estático, fuerza de Lorentz) y FEM de transformador (circuito fijo, B variable, campo E circulante). Ambas dan FEM = −dΦ_B/dt pero por causas físicas distintas.
5. **Sin FEM no hay corriente sostenida.** Un campo electrostático puro (conservativo) solo puede mover cargas hasta que se cancela a sí mismo (como un capacitor cargándose); la FEM es lo único capaz de mantener el "desequilibrio" indefinidamente, bombeando carga en contra del gradiente una y otra vez.

---

## 🧠 Notas Cornell

> [!info] Columna izquierda: preguntas/claves que te ayuden a repasar. Columna derecha: desarrollo.

| 🔑 Pregunta / Clave | 📝 Respuesta / Desarrollo |
|---------------------|--------------------------|
| ¿Qué es la FEM, formalmente? | ε = dW/dq — el trabajo que un agente no electrostático realiza por unidad de carga al moverla a través de la fuente, en contra de la fuerza eléctrica que intenta empujarla de vuelta. Se mide en voltios (J/C), igual que el potencial, pero conceptualmente **no es lo mismo**. |
| ¿Por qué el nombre es engañoso? | Porque no describe una fuerza en newtons: describe energía por carga (igual que el voltaje). El nombre es un resabio histórico de 1801 (Volta), cuando "fuerza" se usaba de forma más laxa para referirse a cualquier "agente causante" de un efecto. |
| ¿En qué se diferencia exactamente de la diferencia de potencial? | El potencial (voltaje) describe un campo eléctrico **conservativo**: ∮E·dl = 0 en electrostática pura, así que "el voltaje entre A y B" no depende del camino. La FEM describe el trabajo de un agente **no conservativo** — dentro de una batería, la reacción química empuja carga del polo − al polo + *en contra* del campo eléctrico interno; ese trabajo extra es exactamente lo que mantiene la diferencia de potencial en los bornes en vez de dejar que se colapse a cero. |
| ¿Cómo se relaciona con la resistencia interna de una fuente real? | Toda fuente real disipa algo de energía dentro de sí misma (resistencia interna r). Cuando circula corriente I, el voltaje en los bornes es **V = ε − Ir** (fuente entregando corriente) o V = ε + Ir (cargando la fuente, ej. batería en carga). Solo en circuito abierto (I=0) el voltaje medido coincide exactamente con la FEM. |
| ¿Cuáles son las fuentes físicas de FEM? | **Química** (pila/batería: reacciones redox, ver [[voltaje]] para el caso de una batería de 1.5 V). **Electromagnética** (generador/dinamo: ley de Faraday, inducción). **Fotovoltaica** (celda solar: fotones excitan electrones a través de una unión p-n). **Termoeléctrica** (termopar: efecto Seebeck, diferencia de temperatura). **Piezoeléctrica** (deformación mecánica de ciertos cristales). |
| ¿Qué es la FEM de movimiento (motional EMF)? | Un conductor se desplaza con velocidad v a través de un campo magnético B **estático**. Los electrones libres sienten la fuerza de Lorentz F = q(v × B), que actúa como un campo eléctrico efectivo E_mot = v × B y separa carga a lo largo del conductor. Es el mecanismo detrás de un generador de disco o una barra deslizante sobre rieles conductores. Ver desarrollo completo en [[ruptura-kvl-campos-no-conservativos]]. |
| ¿Qué es la FEM de transformador? | El circuito permanece **fijo** en el espacio, pero el campo B varía en el tiempo (∂B/∂t ≠ 0). Según la ley de Faraday, esto genera un campo eléctrico circulante (no conservativo) que empuja directamente a los electrones del circuito estacionario. Es el mecanismo detrás de un transformador o de una bobina cerca de un electroimán que se enciende/apaga. |
| ¿Por qué sin FEM no hay corriente sostenida? | Un campo electrostático puro mueve cargas solo hasta neutralizarse a sí mismo (ej.: un capacitor se carga y la corriente cesa). La FEM es la única capaz de **remontar** cargas contra el campo de forma continua — sin ese "bombeo" constante, cualquier corriente se apagaría en fracciones de segundo al reequilibrarse las cargas. |
| ¿Cómo se ve esto con la analogía de la bomba de agua? | Un circuito es como una fuente de jardín en circuito cerrado: el agua fluye cuesta abajo por las tuberías (el circuito externo) empujada por la diferencia de altura (voltaje) — eso es pasivo, solo describe el desnivel ya creado. Pero **algo** tiene que levantar el agua de vuelta arriba, en contra de la gravedad, para que el ciclo no se detenga: esa bomba, que gasta energía externa (eléctrica, mecánica) para hacer ese trabajo cuesta arriba, es la FEM. |

**📌 Resumen en tus propias palabras (Feynman check):**

> Imagina un circuito cerrado como una fuente de jardín circular. El agua bajando por las tuberías es la corriente, y la diferencia de altura entre dos puntos es el voltaje — así de simple, ya está "ahí", es solo geometría. Pero el agua no sube sola de vuelta a la cima: hace falta una bomba que gaste energía (eléctrica) para forzarla cuesta arriba, en contra de la gravedad. Esa bomba es la fuerza electromotriz. No es una fuerza en el sentido físico de "empujón": es el trabajo por litro que la bomba invierte para mantener el ciclo funcionando. Sin la bomba, el agua se acomodaría en un nivel plano y dejaría de fluir — igual que sin FEM, las cargas de un circuito se reacomodarían y la corriente se detendría.

---

## 💡 Aprendizajes principales

- **FEM y voltaje comparten unidad (voltios) pero no significado.** El voltaje describe un campo ya establecido (conservativo); la FEM describe el trabajo de un agente no conservativo que lo mantiene. Confundirlos es el error más común al pasar de electrostática a circuitos.
- **La ecuación V = ε − Ir** es la puerta de entrada a por qué una batería "se debilita" bajo carga: su FEM química no cambia, pero cuanto más corriente exige el circuito, más voltaje se pierde disipado internamente en r.
- **Todos los generadores de energía eléctrica hacen lo mismo con física distinta.** Química, mecánica (Faraday), fotónica, térmica — todas convierten alguna otra forma de energía en trabajo por unidad de carga. Es el mismo patrón que ya viste en [[la-corriente-electrica-en-el-hogar]] (el generador de una central es FEM de movimiento a escala industrial).
- **Este concepto cierra el círculo entre [[voltaje]], [[corriente-electrica]] y [[ruptura-kvl-campos-no-conservativos]]**: voltaje es el "qué" (el desnivel), FEM es el "quién lo crea y sostiene" (la bomba), y KVL/Faraday son las reglas que dictan cómo se comportan ambos en un lazo cerrado.

---

## 🏛 Anclas de memoria (Método de Loci)

> [!tip] Asocia cada concepto clave a una ubicación o imagen mental vívida. Recorre tu "palacio" mentalmente para repasar.

| Concepto | 🏠 Lugar / Imagen | 🎭 Escena vívida |
|----------|--------------------|-------------------|
| **FEM = la bomba, no el desnivel** | Fuente de jardín circular en el patio | Ves una fuente circular: el agua cae por gravedad por un lado (voltaje, pasivo) mientras una bomba escondida bajo tierra (FEM) gasta electricidad para forzarla de vuelta a la cima. Si apagas la bomba, la fuente se detiene aunque las tuberías sigan intactas — la geometría (voltaje) no basta sin el motor (FEM). |
| **V = ε − Ir (resistencia interna)** | El grifo de la bomba con una fuga interna | La misma bomba de antes tiene una fuga diminuta justo en su salida: cuanta más agua intenta bombear (más corriente I), más se le escapa por esa fuga interna (r) antes de llegar a la tubería principal. Lo que sale realmente (V) siempre es un poco menos que lo que la bomba genera en verdad (ε). |
| **Fuentes de FEM: química, mecánica, fotónica, térmica** | Cuatro habitaciones distintas de una casa de máquinas | En la primera habitación, ácido y metal reaccionan burbujeando (química — batería). En la segunda, una turbina gigante gira (mecánica — generador, ver [[la-corriente-electrica-en-el-hogar]]). En la tercera, paneles brillan bajo un sol artificial (fotónica — celda solar). En la cuarta, dos metales unidos humean por el calor de un lado frío y uno caliente (térmica — termopar). Las cuatro alimentan el mismo tablero eléctrico central. |

---

## 🛠 Cómo lo puedo aplicar

**Aplicación inmediata (esta semana):**
Al leer la etiqueta de una batería ("1.5 V"), recordar que ese número es la FEM nominal (ε), no necesariamente lo que medirás en los bornes bajo carga — eso depende de I y de la resistencia interna r, que crece a medida que la batería envejece.

**Aplicación a medio plazo (este mes):**
Releer [[ruptura-kvl-campos-no-conservativos]] con este marco ya consolidado: la razón última de que KVL falle con flujo magnético variable es que aparece una FEM distribuida a lo largo del lazo (no localizada en un componente), y KVL asume implícitamente que toda la FEM vive dentro de fuentes puntuales.

**Proyecto o idea donde encaja:**
- [[voltaje]] — la FEM es lo que un análisis de "solo diferencia de potencial" no explica: quién sostiene esa diferencia en el tiempo.
- [[ruptura-kvl-campos-no-conservativos]] — aplicación directa: FEM de movimiento vs. transformador en el contexto de por qué falla KVL.

---

## 🔁 Registro de repasos (Repetición Espaciada)

> [!warning] Default sostenible: **Día 1 → Día 7 → Día 30** (3 toques). El único repaso obligatorio es el primero (al día siguiente). La escalera completa (Día 1 → 3 → 7 → 14 → 30 → 60) es opcional y solo se justifica en conceptos #prioridad/alta.

| # | Fecha | ¿Recordé bien? | Ajuste |
|---|-------|-----------------|--------|
| 1 (Día 1) | 2026-08-03 | ✅ / ⚠️ / ❌ | |
| 2 (Día 7) | 2026-08-09 | ✅ / ⚠️ / ❌ | |
| 3 (Día 30) | 2026-09-01 | ✅ / ⚠️ / ❌ | |

---

## 🔗 Relacionado

- Proyectos: [[020 Física y Electromagnetismo MOC]]
- Otras investigaciones: [[voltaje]] — la FEM es lo que crea y sostiene la diferencia de potencial que esa nota describe · [[corriente-electrica]] — sin FEM no hay corriente sostenida en el tiempo · [[ruptura-kvl-campos-no-conservativos]] — cierra este hueco: aplica FEM de movimiento/transformador al fallo de KVL · [[la-corriente-electrica-en-el-hogar]] — el generador de una central es FEM de movimiento a escala industrial · [[ecuaciones-de-maxwell]] — la ley de Faraday es la base matemática de la FEM inducida
