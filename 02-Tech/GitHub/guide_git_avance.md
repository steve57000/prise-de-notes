# Guide des commandes Git avancées

Ce document couvre quelques-unes des commandes et fonctionnalités Git dites « avancées » qui vont au-delà des opérations classiques telles que `git commit`, `git push`, ou `git pull`. Nous aborderons :

- [Git Bisect](#git-bisect)
- [Git Rebase (et rebase interactif)](#git-rebase-et-rebase-interactif)
- [Git Stash](#git-stash)
- [Git Reflog](#git-reflog)
- [Git Cherry-pick](#git-cherry-pick)
- [Git Submodules](#git-submodules)
- [Git Worktree](#git-worktree)
- [Git Blame](#git-blame)
- [Amender un commit existant](#amender-un-commit-existant)
- [Gestion avancée des branches et configuration](#gestion-avancée-des-branches-et-configuration)

---

## Git Bisect

### Présentation
`git bisect` est un outil pratique pour trouver le commit précis qui a introduit un bug ou un comportement indésirable. L’idée est d’utiliser une recherche dichotomique (binary search) sur l’historique des commits afin d’identifier le commit fautif.

### Workflow de base

1. **Démarrer la bisect**  
   ```bash
   git bisect start
   ```
2. **Indiquer le commit défectueux (bad)**  
   ```bash
   git bisect bad
   ```
3. **Indiquer un commit correct (good)**  
   ```bash
   git bisect good <commit_sha>
   ```
4. **Tester**  
   ```bash
   git bisect bad  # Si le bug est présent
   git bisect good # Si tout fonctionne correctement
   ```
5. **Répéter jusqu’à identification**  
6. **Terminer la bisect**  
   ```bash
   git bisect reset
   ```

---

## Git Rebase (et rebase interactif)

### Présentation
`git rebase` permet de réappliquer des commits sur une nouvelle base.

### Rebase simple

```bash
git checkout feature
git rebase main
```

### Rebase interactif

```bash
git rebase -i HEAD~n
```

Dans l’éditeur :
- `pick` : garder le commit
- `reword` : changer le message
- `edit` : modifier le commit
- `squash` : fusionner avec le précédent

---

## Git Stash

### Présentation
Permet de sauvegarder temporairement les modifications non validées.

### Commandes principales

```bash
git stash
git stash push -m "Message"
git stash list
git stash apply stash@{0}
git stash pop stash@{0}
git stash drop stash@{0}
git stash clear
```

---

## Git Reflog

```bash
git reflog
git checkout HEAD@{2}
```

---

## Git Cherry-pick

```bash
git log --oneline
git checkout feature-2
git cherry-pick abc1234
```

---

## Git Submodules

```bash
git submodule add https://github.com/utilisateur/projet-externe.git chemin/submodule
git submodule init
git submodule update
```

---

## Git Worktree

```bash
git worktree add ../nouveau-dossier nom_de_branche
git worktree remove ../nouveau-dossier
```

---

## Git Blame

```bash
git blame chemin/fichier.ext
```

---

## Amender un commit existant

```bash
git commit --amend -m "Nouveau message"
```

---

## Gestion avancée des branches et configuration

### Suppression d’une branche

```bash
git branch -d nom_de_branche
git push origin --delete nom_de_branche
```

### Renommer une branche

```bash
git branch -m nouvelle_branche
git push origin :ancienne_branche nouvelle_branche
```

### Configurations avancées

```bash
git config --global core.editor "code --wait"
git config --global alias.st status
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

---

## Conclusion

Ce guide présente une liste de commandes avancées pour mieux maîtriser Git.

Documentation officielle : [https://git-scm.com/docs](https://git-scm.com/docs).
