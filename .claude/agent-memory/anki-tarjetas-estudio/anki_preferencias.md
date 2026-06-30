---
name: anki-preferencias
description: Convenciones del usuario para generar tarjetas Anki desde la bóveda (ubicación, naming, mazo, nivel, fuentes)
metadata:
  type: feedback
---

Convenciones validadas al generar tarjetas Anki en esta bóveda.

**Cómo aplicar:** úsalas por defecto en futuras tandas salvo que el usuario diga lo contrario.

- **Ubicación de salida:** `recursos/anki/` dentro del repo, con nombre `anki_{tema}_{AAAA-MM-DD}_{tipo}.txt`. Archivos separados por tipo de nota (`_basicas.txt` y `_cloze.txt`).
- **Separador:** Pipe (`#separator:Pipe`), `#html:true`, UTF-8.
- **Mazo:** `Mi segundo Cerebro::Física::Fundamentos` para los temas de física fundamental (corriente, voltaje, resistencia).
- **Etiquetas:** jerárquicas tipo `fisica::corriente`, `fisica::voltaje`, `fisica::resistencia`, más `fundamentos` y `repaso`/`cloze`.
- **Nivel por defecto:** intermedio (el usuario ya tiene notas Cornell de nivel medio). Asumido sin confirmar el 2026-06-27.
- **Fuentes que mejor rinden:** las tablas Cornell (`🔑 Pregunta / Clave | 📝 Desarrollo`) y los resúmenes Pareto (3-5 ideas clave) de las notas de `investigaciones/1-fundamentos/`. Ya vienen casi formuladas como pregunta/respuesta.
- **MathJax en cloze:** evitar `{{c1::...}}` con llaves de LaTeX dentro (p. ej. `\dfrac{L}{A}`); mejor dejar la fórmula fuera del cloze y ocluir palabras/valores, para no romper el parser de cloze.
