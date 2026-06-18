---
tags:
  - prompt-engineering
  - plantilla
  - claude
tipo: Prompt Estándar (5 pasos)
fecha: {{date}}
proyecto: 
estado: borrador
---

# 🧠 Prompt — {{Título de la tarea}}

> [!tip] ¿Cuándo usar esta plantilla?
> Para tareas **intermedias o avanzadas** que requieren claridad y estructura, pero no son flujos de trabajo complejos. Ideal para análisis, redacción, resúmenes, revisiones y consultas elaboradas.

---

## 1. 🎭 Rol + Descripción de la tarea

> Define **quién es** la IA y **qué va a hacer** en términos generales.

```
Eres [ROL / ESPECIALIDAD].
Tu tarea es [DESCRIPCIÓN GENERAL DE LA TAREA].
```

**Ejemplo:**
> *Eres un experto en seguridad CCTV con 15 años de experiencia. Tu tarea es analizar el siguiente reporte de incidentes y detectar patrones de comportamiento sospechoso.*

---

## 2. 📎 Contenido dinámico (contexto)

> Adjunta o pega aquí el **material sobre el que trabajará** la IA: texto, imagen, enlace, datos, etc.

```
[PEGA AQUÍ EL CONTENIDO: texto, tabla, imagen, URL, etc.]
```

**Notas del contenido:**
- Tipo de material: 
- Fuente: 
- Fecha / versión: 

---

## 3. 📋 Instrucciones detalladas

> Este es el **corazón del prompt**. Describe paso a paso lo que debe hacer, con la precisión suficiente para que no tenga que preguntar nada más.

```
Instrucciones específicas:

1. 
2. 
3. 
4. 
5. 
```

**Restricciones / lo que NO debe hacer:**
- No inventes información que no esté en el contexto.
- No uses lenguaje técnico excesivo a menos que se indique.
- 

---

## 4. 💡 Ejemplos (opcional — Few-shot)

> Proporciona entre 1 y 3 ejemplos del **formato o tipo de respuesta** que esperas. Cuantos más ejemplos, más preciso el resultado.

**Deja este bloque vacío si no usas ejemplos (Zero-shot).**

**Ejemplo de entrada:**
```
[EJEMPLO DE INPUT]
```

**Ejemplo de salida esperada:**
```
[EJEMPLO DE OUTPUT]
```

---

## 5. 🔁 Repetición de instrucciones críticas

> Repite aquí los puntos **más importantes** del prompt — lo que bajo ninguna circunstancia debe olvidar la IA. Especialmente útil en prompts largos.

```
Recuerda siempre:
- 
- 
- 
```

---

## 📤 Prompt final ensamblado

> Copia y pega el bloque de abajo directamente en Claude cuando hayas completado las secciones anteriores.

```
[ROL Y TAREA]


[CONTENIDO DINÁMICO]


[INSTRUCCIONES DETALLADAS]


[EJEMPLOS, si aplica]


[RECORDATORIO DE INSTRUCCIONES CRÍTICAS]
```

---

## 📝 Notas y revisiones

| Versión | Fecha | Cambio realizado | Resultado |
|---------|-------|-----------------|-----------|
| v1.0    | {{date}} | Versión inicial | — |
|         |       |                 |           |

---

*Plantilla basada en las buenas prácticas oficiales de Anthropic · Estructura de 5 pasos*
