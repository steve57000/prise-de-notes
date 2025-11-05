
## Configuration initiale
Avant de commencer à utiliser Git, configure ton identité :
```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton.email@example.com"
```

## Créer un dépôt

Pour créer un nouveau dépôt :

```bash
`git init nom-du-dépôt`
```
## Cloner un dépôt existant

Pour cloner un dépôt distant :

```bash
`git clone url_du_dépôt`
```
## Vérifier l'état du dépôt

Pour vérifier l'état de ton dépôt :

```bash
`git status`
```
## Ajouter des fichiers

Pour ajouter tous les fichiers modifiés :

```bash
`git add .`
```
Pour ajouter un fichier spécifique :

```bash
`git add nom_du_fichier`
```
## Effectuer un commit

Pour effectuer un commit avec un message descriptif :

```bash
`git commit -m "Message du commit"`
```
## Pousser les modifications

Pour pousser les modifications vers le dépôt distant :

```bash
`git push origin nom_de_branche`
```
## Récupérer les modifications

Pour récupérer les modifications depuis le dépôt distant :

```bash
`git pull origin nom_de_branche`
```
## Afficher l'historique des commits

Pour afficher l'historique des commits :

```bash
`git log`
```
## Annuler des modifications

Pour annuler des modifications non commités :

```bash
`git checkout -- nom_du_fichier`
```

Pour annuler un commit local (pas encore poussé) :

```bash
`git reset HEAD~1`
```
## Gérer les branches

Pour créer une nouvelle branche :

```bash
`git branch nom_de_branche`
```

Pour changer de branche :

```bash
`git checkout nom_de_branche`
```

Pour supprimer une branche :

```bash
`git branch -d nom_de_branche`
```
## Fusionner des branches

Pour fusionner une branche dans la branche courante :

```bash
`git merge nom_de_branche`
```
## Afficher les différences

Pour voir les différences entre les fichiers :

```bash
`git diff`
```
## Annuler un commit précédent (localement)

Pour annuler un commit précédent sans supprimer les changements :

```bash
`git reset --soft HEAD~1`
```
## Forcer le push

Pour forcer le push si nécessaire (attention à l'utilisation) :

```bash
`git push origin nom_de_branche --force`
```