---
tags:
  - prompt-engineering
  - plantilla
  - claude
  - avanzado
tipo: Prompt Avanzado (10 pasos)
fecha: {{date}}
proyecto: 
estado: borrador
---

# ⚙️ Prompt Avanzado — {{Título de la tarea}}

> [!warning] ¿Cuándo usar esta plantilla?
> Para tareas **altamente complejas**: automatizaciones, flujos de trabajo multi-paso, análisis de múltiples documentos, generación con formato estricto, o cuando integras Claude con herramientas externas (Notion, APIs, etc.). No es necesaria para tareas simples.

---

## 1. 🗂️ Contexto de la tarea

> Define el **tipo general de tarea** como si fuera un encabezado de briefing. Sitúa a la IA antes de cualquier detalle.

```
Contexto general:
Tipo de tarea: [análisis / extracción / generación / clasificación / automatización / otro]
Dominio: [área de conocimiento o industria]
Propósito final: [para qué se usará el resultado]
```

---

## 2. 🎙️ Contexto de tono y comportamiento

> Define **cómo debe comunicarse** la IA y qué actitud debe tomar frente a la incertidumbre.

```
Tono: [formal / técnico / cercano / neutro / otro]
Idioma de respuesta: [español / inglés / otro]

Comportamiento ante la duda:
- Si no estás seguro de algo, pregunta antes de asumir.
- Si no tienes suficiente información, responde "No tengo suficientes datos para responder esto con certeza."
- No inventes ni extrapoles sin advertirlo explícitamente.
```

---

## 3. 📦 Datos, documentos e imágenes

> Proporciona **todos los materiales** que necesita para trabajar. Usa etiquetas XML o Markdown para estructurarlos si son varios.

```xml
<documento_1 tipo="[tipo]" descripcion="[descripción breve]">
[PEGA EL CONTENIDO AQUÍ]
</documento_1>

<documento_2 tipo="[tipo]" descripcion="[descripción breve]">
[PEGA EL CONTENIDO AQUÍ]
</documento_2>
```

**Estructura de los datos (si aplica):**
- Columnas / campos esperados: 
- Formato: `[CSV / JSON / tabla / texto libre / imagen]`
- Consideraciones especiales: *(ej: texto manuscrito, columnas variables, datos incompletos)*

---

## 4. 📐 Descripción detallada de la tarea + Normas

> Lista **paso a paso** lo que debe hacer la IA. Esta sección es más poderosa que los ejemplos para tareas que requieren formato constante o estándares específicos.

```
Normas y pasos a seguir:

1. [Primer paso o norma]
2. [Segundo paso o norma]
3. [Tercer paso o norma]
4. 
5. 

Restricciones absolutas:
- NUNCA hagas [X]
- SIEMPRE incluye [Y]
- Si encuentras [Z], entonces [acción]
```

---

## 5. 💬 Ejemplos de respuesta esperada (Few-shot)

> Añade entre 1 y 5 ejemplos del resultado que esperas. Más ejemplos = mayor precisión en el formato.

**Ejemplo 1**
- Input: `[descripción o dato de entrada]`
- Output esperado:
```
[FORMATO DE RESPUESTA ESPERADO]
```

**Ejemplo 2** *(opcional)*
- Input: `[descripción o dato de entrada]`
- Output esperado:
```
[FORMATO DE RESPUESTA ESPERADO]
```

---

## 6. 💾 Historial de conversación (opcional — para automatizaciones)

> Úsalo cuando quieras que Claude responda **como si fuera tú**, o cuando estés construyendo un agente con historial previo.

```
Ejemplos de mi estilo de comunicación:

Mensaje 1: "[ejemplo de cómo me expreso]"
Mensaje 2: "[otro ejemplo]"

Vocabulario que uso frecuentemente: 
Frases que evito: 
```

> [!note] Este paso es opcional. Solo es relevante para automatizaciones o agentes que actuarán en tu nombre.

---

## 7. 🎯 Recordatorio inmediato de la tarea

> Después de todo el contexto, **recuérdale a la IA el objetivo concreto** y las salvaguardas más importantes antes de que comience.

```
Tu tarea concreta ahora es:
[DESCRIPCIÓN DIRECTA Y CONCISA DE LO QUE DEBE HACER]

Antes de responder:
- Piensa paso a paso.
- Si necesitas buscar información en los documentos adjuntos, hazlo antes de responder.
- Responde solo si tienes confianza razonable en la respuesta.
- Si algo es ambiguo, indícalo antes de proceder.
- Di "No lo sé" si no tienes la información necesaria.
```

---

## 8. 🔢 Pensamiento paso a paso (Chain of Thought)

> Indica el **orden exacto** en que debe procesar los materiales o razonar el problema.

```
Proceso de razonamiento que debes seguir:

Paso A: Primero lee [documento X] para entender [propósito].
Paso B: Luego analiza [documento Y / imagen Z] teniendo en cuenta [criterio].
Paso C: Cruza la información de ambos para [objetivo].
Paso D: Finalmente genera la respuesta siguiendo el formato indicado.
```

---

## 9. 🖨️ Formato de salida

> Define **exactamente** cómo debe verse la respuesta: estructura, extensión, encabezados, tablas, etc.

```
Formato de respuesta:

Estructura:
- Encabezado: [sí / no / tipo]
- Secciones: [lista de secciones esperadas]
- Tablas: [sí / no / cuándo usarlas]
- Listas: [numeradas / con viñetas / ninguna]

Extensión: [breve / media / extensa / máximo X palabras]
Idioma: [español / inglés]
Incluir siempre: [elementos obligatorios en cada respuesta]
Excluir siempre: [elementos que no deben aparecer]
```

---

## 10. ✅ Respuesta rellenada / Plantilla de output

> Si tienes un ejemplo **completo y real** del resultado que esperas, pégalo aquí para que la IA no haga interpretaciones libres.

```
[EJEMPLO COMPLETO DE OUTPUT FINAL ESPERADO]
```

---

## 📤 Prompt final ensamblado

> Cuando hayas completado todas las secciones, ensambla el prompt aquí y cópialo directamente en Claude.

```
[CONTEXTO DE TAREA]


[TONO Y COMPORTAMIENTO]


[DOCUMENTOS Y DATOS]


[NORMAS Y PASOS]


[EJEMPLOS]


[HISTORIAL, si aplica]


[RECORDATORIO INMEDIATO]


[INSTRUCCIONES DE RAZONAMIENTO]


[FORMATO DE SALIDA]


[PLANTILLA DE OUTPUT, si aplica]
```

---

## 📝 Notas y revisiones

| Versión | Fecha | Cambio realizado | Resultado observado |
|---------|-------|-----------------|---------------------|
| v1.0    | {{date}} | Versión inicial | — |
|         |       |                 |                     |

---

*Plantilla basada en las buenas prácticas oficiales de Anthropic · Estructura avanzada de 10 pasos*
