---
name: rescate-git
description: Recupera trabajo perdido en Git y deshace operaciones que salieron mal — commits desaparecidos tras un `reset --hard`, ramas borradas, rebases o merges arruinados, `stash drop` accidental, HEAD desprendido, force push que sobrescribió el remoto, secretos ya confirmados en la historia. Usa esta skill en cuanto el usuario diga que perdió, borró o sobrescribió algo; que un rebase, merge o reset "salió mal"; que no encuentra un commit o una rama; que hizo un `git clean` o un `push --force` y se arrepiente; o simplemente que rompió su repositorio y no sabe cómo estaba antes. Actívala también ante un "creo que la cagué con git". Prioriza no empeorar el daño. No es para revisión rutinaria de cambios — eso es `revisar-cambios-git` — ni para redactar commits — eso es `escribir-commit`.
---

# Rescate de Git

Casi todo lo que parece destruido en Git sigue existiendo. Los commits no se borran cuando dejas de apuntarlos: quedan huérfanos hasta que el recolector de basura pasa, semanas después. La recuperación casi siempre consiste en volver a apuntarlos.

Lo que sí se pierde de verdad es lo que nunca entró en la base de datos de objetos. Distinguir un caso del otro, rápido y con honestidad, es el trabajo principal de esta skill.

## Contexto inyectado

**Estado actual:**
!`git status 2>&1 | head -20`

**Historial de movimientos de HEAD (el mapa del tesoro):**
!`git reflog -30 2>&1`

**Rama y posición:**
!`git log --oneline -5 --all --decorate 2>&1 | head -15`

## Regla cero: no empeorar

El daño real casi nunca lo causa el error original. Lo causa el segundo comando, el que se ejecuta con prisa para arreglarlo.

**Antes de tocar nada:**

1. **Detente.** No propongas comandos hasta haber diagnosticado.
2. **Haz copia de seguridad.** Si hay cualquier cosa en el árbol de trabajo, cópialo entero antes de intentar nada. Es barato y es lo único que hace reversible una recuperación fallida:

   ```bash
   cp -a /ruta/al/repo /ruta/al/repo.backup-$(date +%s)
   ```

3. **No dejes pasar el tiempo.** El reflog alcanzable expira a los 90 días; lo inalcanzable, a los 30. Un `git gc` agresivo puede acortarlo. Nunca sugieras `git gc`, `git prune` ni `git reflog expire` durante un rescate.

**Nunca ejecutes tú** ningún comando que mueva `HEAD`, reescriba historia o borre archivos: `reset --hard`, `checkout .`, `restore`, `clean`, `rebase`, `push --force`. Diagnostica, explica el plan, escribe el comando exacto, y **espera confirmación explícita**. El usuario ve cosas que tú no ves.

**Recupera creando, no moviendo.** Ante un commit huérfano, prefiere `git branch rescate-<algo> <sha>` a `git reset --hard <sha>`. Lo primero no destruye nada y deja el commit accesible por nombre; lo segundo puede tirar por la borda lo que estabas intentando salvar.

## Paso 1: clasificar la pérdida

Esta es la única pregunta que importa, y hay que responderla primero:

> **¿Lo perdido llegó alguna vez a la base de datos de objetos de Git?**

- **Sí, hubo commit** → recuperable casi seguro. Vía `reflog`.
- **Solo hubo `git add`** (nunca commit) → recuperable a menudo. Vía `git fsck`, buscando blobs sueltos.
- **Nunca hubo `add`** → Git nunca lo vio. No hay nada que recuperar con Git. Dilo de inmediato.

En ese tercer caso, no hagas perder una hora al usuario fingiendo que hay esperanza. Redirige a lo que sí puede funcionar: la historia local del editor (VS Code: *Local History*; JetBrains: *Local History*), copias de seguridad del sistema, papelera. Y dilo con claridad: los cambios sin `add` destruidos por `reset --hard`, `checkout .` o `restore` no están en Git.

## Paso 2: las herramientas de diagnóstico

```bash
git reflog -50                       # movimientos de HEAD, con sha
git reflog show <rama>               # historial de una rama concreta
git fsck --lost-found --unreachable  # objetos huérfanos (commits y blobs)
git show <sha> --stat                # inspeccionar antes de recuperar
git log --all --oneline --graph      # panorama
```

`ORIG_HEAD` guarda la posición previa al último `merge`, `rebase` o `reset`. Es el atajo cuando la operación fallida acaba de ocurrir.

Siempre **inspecciona antes de recuperar**. Un `git show <sha> --stat` confirma que el sha es el correcto y evita restaurar un estado equivocado.

## Paso 3: por escenario

**Commits perdidos tras `reset --hard`.** Siguen ahí. Busca el sha anterior al reset en el reflog:

```bash
git branch rescate-commits <sha>   # seguro: crea, no mueve
git log rescate-commits --oneline  # verifica
```

**Cambios sin confirmar destruidos por `reset --hard` / `checkout .` / `restore`.** Si nunca hubo `git add`, se perdieron; ver Paso 1. Si sí hubo `add` en algún momento, los blobs sobreviven:

```bash
git fsck --lost-found
# los blobs quedan en .git/lost-found/other/, sin nombre de archivo
```

Hay que identificarlos por contenido. Es tedioso pero funciona.

**Rama borrada con `git branch -D`.** El sha de la punta aparece en el reflog de HEAD, o en `git fsck --unreachable`:

```bash
git branch <nombre-original> <sha>
```

**Rebase arruinado.** Si sigue en curso: `git rebase --abort` y vuelves al punto de partida. Si ya terminó, el reflog tiene la entrada previa al `rebase (start)`; recupera con `git branch rescate <sha>` y compara antes de mover nada.

**Merge que no debía haber ocurrido.** Si no se ha empujado, `ORIG_HEAD` apunta al estado previo. Si ya está publicado, no reescribas: `git revert -m 1 <sha-del-merge>` crea un commit que lo deshace sin alterar la historia compartida.

**`git stash drop` o `git stash clear`.** Los stashes son commits. Están huérfanos, no muertos:

```bash
git fsck --unreachable | grep commit
git show <sha>            # identifica el correcto
git stash apply <sha>
```

**HEAD desprendido con commits encima.** Nómbralos antes de moverte a ningún sitio: `git branch <nombre>`. Si ya te moviste, el reflog los tiene.

**`git clean -fd` borró archivos sin rastrear.** Git nunca los conoció. No hay recuperación por Git. Papelera, copias de seguridad, historia local del editor.

**Force push que sobrescribió el remoto.** Los objetos siguen en cualquier clon que los tuviera. Busca en el reflog local, o en el de un compañero. Cuando se recupere, empuja de vuelta. Y para el futuro, `--force-with-lease` en lugar de `--force`: aborta si el remoto avanzó desde tu última búsqueda.

**Secreto confirmado y ya empujado.** El orden importa y casi todo el mundo lo invierte:

1. **Rota la credencial ahora.** Un `revert` no la des-publica. Si estuvo en un remoto accesible, considérala comprometida — hay bots que barren GitHub en segundos.
2. Después, limpia la historia con `git filter-repo` o BFG.
3. Coordina con todo el que tenga un clon: la reescritura los deja divergentes.

Sin el paso 1, los pasos 2 y 3 son teatro.

## Formato de salida

```markdown
## Diagnóstico
<Qué ocurrió y por qué. Una o dos frases.>

**¿Recuperable?** <Sí, vía reflog / Parcialmente / No, y por qué>

## Antes de nada
​```bash
cp -a . ../repo.backup-$(date +%s)
​```

## Plan
1. <paso> — `<comando>` ✅ seguro
2. <paso> — `<comando>` ⚠️ modifica el árbol

## Verificación
<Cómo confirmar que se recuperó lo correcto, antes de seguir trabajando.>
```

Marca cada comando como ✅ (solo lectura o solo crea referencias) o ⚠️ (mueve HEAD, modifica el árbol, reescribe historia). El usuario debe saber cuál es cuál sin leerse el manual.

## Sobre el tono

Quien invoca esta skill está nervioso y probablemente ha perdido horas de trabajo. No sermonees sobre lo que debió hacer. Diagnostica, recupera, y solo al final —si viene a cuento— menciona la práctica que lo habría evitado.

Y cuando algo sea irrecuperable, dilo pronto y sin rodeos. Es más respetuoso que una hora de esperanza fabricada.
