---
name: revisar-cambios-git
description: Resume los cambios sin confirmar de un repositorio Git y señala lo que sea arriesgado — secretos y credenciales, archivos que no deberían versionarse, código de depuración olvidado, operaciones destructivas, marcadores de conflicto sin resolver. Usa esta skill siempre que el usuario pida revisar, resumir o auditar sus cambios pendientes; pregunte "¿qué he cambiado?", "¿esto es seguro para commitear?" o "¿se me escapa algo?"; se prepare para hacer commit, push o abrir un pull request; mencione git status, git diff, staging o working tree; o quiera confirmar que no está subiendo nada peligroso. Actívala aunque el usuario no la nombre explícitamente y aunque solo pida un "vistazo rápido" al diff.
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git ls-files:*), Bash(git stash list:*), Bash(git check-ignore:*), Bash(grep:*), Bash(head:*), Bash(tail:*)
---

# Revisar cambios sin confirmar

Auditar el estado de trabajo de un repositorio antes de que esos cambios se conviertan en historia. Un commit se puede enmendar; un secreto empujado a un remoto ya no.

## Regla fundamental: esta skill es de solo lectura

Ejecuta únicamente comandos que **leen** el repositorio. Nunca `add`, `commit`, `checkout`, `restore`, `reset`, `stash`, `clean`, `rm` ni `push`. El usuario pidió una revisión, no una intervención.

Cuando una corrección sea necesaria, escribe el comando exacto en la respuesta y deja que el usuario lo ejecute. Esto importa por dos razones: él conoce el contexto que tú no ves, y un `git checkout` mal dirigido destruye trabajo sin papelera de reciclaje.

## Contexto inyectado

Claude Code ejecuta estos comandos y sustituye cada línea por su salida antes de que leas nada:

**Rama y estado:**
!`git status --porcelain=v1 -uall --branch`

**Volumen del cambio:**
!`git diff HEAD --stat`

**Archivos sin rastrear:**
!`git ls-files --others --exclude-standard`

**Trabajo guardado y olvidado:**
!`git stash list`

**Espacios en blanco y marcadores de conflicto:**
!`git diff HEAD --check`

Si esa salida trae errores de git en lugar de datos, probablemente no estás en un repositorio. Dilo y detente.

## Paso 1: leer los cambios

Con el `--stat` ya inyectado sabes el tamaño. Decide cómo leer:

- **Menos de ~500 líneas cambiadas:** lee todo con `git diff HEAD`.
- **Más:** no vuelques el diff completo. Prioriza por riesgo y lee archivo por archivo con `git diff HEAD -- <ruta>`. Van primero los archivos de configuración, migraciones, CI/CD, scripts de despliegue y cualquier cosa con nombre sospechoso.

Distingue siempre entre lo preparado y lo no preparado — `git diff --staged` frente a `git diff` — porque un `git commit` a secas solo se lleva lo primero. Si el usuario está a punto de commitear, esa frontera es lo que le importa.

**Los archivos sin rastrear no aparecen en ningún diff.** Léelos aparte, con el listado que ya tienes arriba. Ahí es donde se esconden los secretos: un `.env` recién creado no está en `git diff HEAD`, pero un `git add .` se lo lleva sin preguntar.

## Paso 2: entender la intención

Antes de auditar riesgos, entiende qué se estaba haciendo. Agrupa los cambios por propósito, no por carpeta: "se añadió autenticación por token" es útil; "se modificaron 4 archivos en `src/`" no lo es.

Si el conjunto mezcla varias intenciones sin relación —una corrección de bug, una función nueva y un reformateo masivo— eso es en sí mismo un hallazgo. Un commit que hace tres cosas es un commit que no se puede revertir sin daños colaterales.

## Paso 3: auditar riesgos

Recorre este catálogo de forma activa. No esperes a que algo salte a la vista: búscalo.

### 🔴 Crítico — no confirmar hasta resolverlo

**Secretos y credenciales.** Lo más caro de equivocarse. Revisa las líneas *añadidas* (las que empiezan con `+`) y también los archivos sin rastrear:

```bash
git diff HEAD -U0 | grep -E '^\+' | grep -inE 'api[_-]?key|secret|token|passw|BEGIN [A-Z ]*PRIVATE KEY|aws_(access|secret)|ghp_|xox[baprs]-|sk-[A-Za-z0-9]{20,}|Bearer [A-Za-z0-9._-]{20,}'
```

Busca también cadenas de conexión con contraseña embebida (`postgres://user:pass@host`) y credenciales en archivos de prueba, que se filtran igual de bien.

**Archivos sensibles que están a punto de versionarse.** `.env`, `*.pem`, `*.key`, `id_rsa`, `credentials.json`, `*.keystore`, `.npmrc`, `.pypirc`. Verifica si `.gitignore` los cubre; si aparecen como sin rastrear, no los cubre:

```bash
git check-ignore -v <ruta>   # sin salida = NO está ignorado = va a subir
```

**Marcadores de conflicto sin resolver.** `<<<<<<<`, `=======`, `>>>>>>>` en el código. El `--check` inyectado los detecta.

**Operaciones destructivas de datos.** En migraciones y scripts: `DROP TABLE`, `TRUNCATE`, `DELETE` sin `WHERE`, `rm -rf`, migraciones sin ruta de reversión.

### 🟡 Revisar antes de continuar

**Archivos grandes.** Por encima de 1 MB merece pregunta; por encima de 50 MB GitHub avisa y a los 100 MB rechaza el push. Y una vez en la historia, un binario grande queda ahí para siempre aunque lo borres después.

**Artefactos y dependencias.** `node_modules/`, `dist/`, `build/`, `__pycache__/`, `.venv/`, `*.log`, `.DS_Store`. Casi nunca deben versionarse.

**Restos de depuración.** `console.log`, `debugger`, `print()` suelto, `breakpoint()`, `pdb.set_trace()`, `binding.pry`, `TODO`/`FIXME`/`HACK` recién añadidos, tests comentados. Trata `.only(` y `fdescribe`/`fit` como hallazgo serio: dejan la suite entera sin ejecutar y el CI pasa en verde sin haber probado nada.

**Apuntes al entorno local.** `localhost`, `127.0.0.1`, puertos de desarrollo, URLs de ngrok, usuarios de prueba.

**Infraestructura crítica tocada.** CI/CD (`.github/workflows/`), `Dockerfile`, lockfiles (`package-lock.json`, `poetry.lock`), scripts de despliegue, cambios de permisos (`mode 100644 → 100755`). No son malos por sí mismos, pero el radio de daño es amplio y conviene que el usuario los vea señalados.

**Borrados y renombres masivos.** Confirma que son intencionales.

### 🔵 Notas

Ruido de formato que oculta cambios reales (reindentado, fines de línea CRLF/LF), stashes olvidados, rama divergente del upstream.

## Paso 4: entregar el informe

Usa esta estructura:

```markdown
# Revisión de cambios sin confirmar

**Rama:** <rama> · **Estado:** N preparados, N sin preparar, N sin rastrear

## Qué cambió
[2-4 viñetas agrupadas por intención, no por archivo]

## Riesgos
### 🔴 Crítico
- **<Hallazgo>** — `ruta/archivo.py:42`
  <Por qué importa, en una línea.>
  Corrección: `<comando o acción>`

### 🟡 Revisar
### 🔵 Notas

## Commits sugeridos
[Si los cambios mezclan intenciones, propón cómo dividirlos]
```

Reglas para el informe:

- **Cita ubicaciones exactas.** `src/auth.py:42`, no "en el archivo de autenticación". El usuario debe poder saltar directo.
- **Nunca imprimas el valor de un secreto.** Enseña `AWS_SECRET_ACCESS_KEY=AKIA****` y la ubicación. Reproducirlo en la respuesta lo copia a otro lugar más.
- **Omite las secciones vacías.** Si no hay nada crítico, no escribas el encabezado.
- **No inventes riesgos para parecer útil.** Un informe que dice "no encontré nada preocupante" es un informe valioso, y es lo único que hace creíbles a los demás. Si el árbol está limpio, dilo en una línea y termina.
- **Sé concreto sobre la consecuencia.** "Hardcodea la URL de producción" no dice nada; "apunta a producción, así que las pruebas locales escribirán en la base de datos real" sí.

## Casos borde

- **Repositorio limpio:** dilo y termina. No hace falta plantilla.
- **Merge o rebase en curso:** `git status` lo indica. Avísalo primero — el estado del árbol es transitorio y las recomendaciones normales no aplican.
- **Repositorio sin commits:** `git diff HEAD` falla. Todo es "sin rastrear"; audita solo esa lista.
- **Submódulos modificados:** aparecen como una línea de cambio de puntero. Menciónalos; no entres a auditarlos salvo que se pida.
