---
name: escribir-commit
description: Redacta mensajes de commit que explican el porqué del cambio, y divide un conjunto de cambios mezclados en commits atómicos con su plan de staging archivo por archivo. Usa esta skill siempre que el usuario vaya a confirmar cambios, pida un mensaje de commit, diga "commitea esto", pregunte cómo dividir o separar sus cambios, mencione commits atómicos o Conventional Commits, o acabe de terminar una tarea y esté listo para guardarla en la historia. Actívala aunque solo pida "un mensaje rápido". No es para auditar riesgos del árbol de trabajo — eso es `revisar-cambios-git`. No es para recuperar trabajo perdido ni deshacer operaciones — eso es `rescate-git`.
---

# Escribir commits

El diff ya dice **qué** cambió. Nadie necesita que se lo repitas. El mensaje de commit existe para dejar constancia del **porqué**: la razón que dentro de seis meses no estará en la cabeza de nadie y no se puede deducir del código.

## Contexto inyectado

**Convención del repositorio:**
!`git log --oneline -25 2>&1`

**Qué está preparado:**
!`git diff --staged --stat 2>&1 | tail -25`

**Estado completo:**
!`git status --porcelain=v1 -uall 2>&1 | head -60`

Si eso trae errores en vez de datos, no estás en un repositorio. Dilo y detente.

## Paso 0: no confirmes sobre un árbol sin revisar

Si el usuario no ha auditado estos cambios y hay señales de riesgo evidentes —archivos como `.env` sin rastrear, cadenas que parecen credenciales, marcadores de conflicto— dilo antes de redactar nada y sugiere `revisar-cambios-git`. Un mensaje de commit perfecto sobre un secreto filtrado no sirve de nada.

Nunca escribas un commit sobre un hallazgo 🔴 conocido sin advertirlo.

## Paso 1: adopta la convención que ya existe

Lee el `git log` inyectado antes de decidir el formato. La peor cosa que puedes hacer es imponer Conventional Commits a un repositorio que lleva 800 commits en prosa castellana.

Observa: ¿usan prefijos tipo `feat:` / `fix:`? ¿Idioma? ¿Modo imperativo o pasado? ¿Referencias a tickets (`JIRA-123`, `#456`)? ¿Longitud típica del cuerpo?

Imita lo que encuentres. Solo si el historial no tiene convención discernible —o si el repositorio está vacío— usa el formato por defecto de abajo.

## Paso 2: identifica las intenciones

Antes de redactar, pregúntate cuántas cosas distintas hace este conjunto de cambios. Un commit debe ser **atómico**: una sola intención, que compila y pasa las pruebas por sí sola, y que se puede revertir sin arrastrar nada más.

Señales de que hay que dividir:

- Una corrección de bug junto a una función nueva.
- Cambios de lógica mezclados con reformateo o reordenación de importaciones.
- Un refactor y el cambio de comportamiento que lo usa.
- Migración de base de datos y el código que la consume (aquí a veces conviene juntarlos; usa criterio).

Cuando dividas, **ordena los commits para que cada uno funcione**. El refactor va antes de la función que se apoya en él. El movimiento de archivos, separado del cambio de contenido, para que `git log --follow` sirva de algo.

## Paso 3: redacta

Formato por defecto, si el repo no dicta otro:

```
tipo(ámbito): asunto en imperativo, sin punto final

Explica por qué era necesario este cambio. Qué problema resuelve,
qué alternativa se descartó, qué contexto no es obvio leyendo el
diff. Ajusta a ~72 columnas.

Refs #123
```

- **Asunto en 50 caracteres, máximo 72.** Imperativo: "añade", "corrige", "elimina" — no "añadido" ni "añadiendo". Sin punto final.
- **Cuerpo solo si aporta.** Un `fix(css): corrige el margen del pie` no necesita tres párrafos. Un cambio de arquitectura sí.
- **Tipos de Conventional Commits:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`. Un `!` tras el ámbito, o un pie `BREAKING CHANGE:`, marca ruptura de compatibilidad.
- **No inventes números de ticket ni ámbitos.** Si no sabes a qué issue corresponde, deja el pie fuera o pregunta. Un `Refs #42` inventado es peor que ninguno.
- **No añadas pies de "generado por IA"** salvo que el historial ya los tenga.

Escribe el cuerpo como se lo explicarías a un compañero competente que no estaba en la sala. Eso descarta tanto el "arreglos varios" como el párrafo que parafrasea el diff línea a línea.

## Paso 4: el plan de staging

Nunca uses `git add -A`, `git add .` ni `git add -u`. Barren todo lo que haya en el árbol, incluido trabajo ajeno al commit y archivos que el usuario no pretendía versionar. **Prepara siempre por ruta explícita.**

Si un solo archivo contiene dos intenciones, la herramienta es `git add -p`, que trocea por hunks. Dilo, pero no intentes conducirlo tú: es interactivo y el usuario decide mejor.

## Formato de salida

```markdown
## Plan de commits

### 1. <asunto propuesto>
**Archivos:** `ruta/a.py`, `ruta/b.py`
**Por qué va primero:** <si el orden importa>

​```
<mensaje completo, listo para copiar>
​```

​```bash
git add ruta/a.py ruta/b.py
git commit -F - <<'EOF'
<mensaje completo>
EOF
​```

### 2. <asunto propuesto>
...
```

Si todo es una sola intención, no fuerces la división: un commit, un mensaje, listo. Dividir por dividir genera ruido.

## Ejecutar, o no

`git add` y `git commit` son reversibles, así que puedes ejecutarlos — pero **solo después de mostrar el plan y recibir un sí explícito**. Nunca confirmes de forma silenciosa como paso intermedio de otra tarea.

Fuera de límites siempre:

- `git add -A`, `git add .`, `git add -u`.
- `git commit --no-verify`. Los hooks existen por algo; si uno falla, enseña el error, no lo esquives.
- `git commit --amend` sobre un commit ya empujado. Reescribe historia compartida.
- `git push` de cualquier tipo. Eso lo decide el usuario.

Si un hook rechaza el commit, muestra su salida y detente. No reintentes con `--no-verify`.

## Casos borde

- **Nada preparado, pero hay cambios:** propón el plan de staging igual. Es el caso normal.
- **Solo archivos sin rastrear:** revísalos antes de proponer añadirlos. Ahí es donde aparecen los `.env`.
- **Merge o rebase en curso:** `git status` lo indica. El mensaje lo genera git; no lo reescribas salvo petición.
- **Nada que confirmar:** dilo en una línea y termina.
- **El usuario ya escribió su mensaje y solo quiere revisión:** critícalo, no lo reemplaces. Señala si describe el qué en lugar del porqué.

Cuando termines, si el usuario va a empujar cambios a una rama compartida, recuérdale que `--force` sobre historia publicada es la vía más rápida a `rescate-git`.
