
## 

Tutoriel : Les Bases de Git avec GitHub

Bienvenue dans ce tutoriel sur les bases de Git avec GitHub. Ce guide vous aidera à apprendre à initialiser un projet, faire des commit, et à utiliser les commandes pull et push. Chaque section sera accompagnée de liens vers la documentation officielle pour approfondir vos connaissances.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-1.-installation-de-git)

1. Installation de Git

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#windows)

Windows

1. **Téléchargez Git pour Windows :**
    
    - Rendez-vous sur [gitforwindows.org](https://gitforwindows.org/).
        
    - Téléchargez l'installateur et lancez-le.
        
    
2. **Installation :**
    
    - Suivez les instructions de l'installateur.
        
    - Acceptez les paramètres par défaut pour la plupart des options.
        
    - Une fois l'installation terminée, ouvrez "Git Bash" pour vérifier l'installation en tapant :
        
        Copier
        
        ```
        git --version
        ```
        
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#mac)

Mac

1. **Utilisation de Homebrew :**
    
    - Si Homebrew n'est pas installé, installez-le en suivant les instructions sur [brew.sh](https://brew.sh/).
        
    - Ouvrez un terminal et tapez :
        
        Copier
        
        ```
        brew install git
        ```
        
    - Vérifiez l'installation avec :
        
        Copier
        
        ```
        git --version
        ```
        
    
2. **Utilisation du package officiel :**
    
    - Téléchargez le package Git depuis [git-scm.com](https://git-scm.com/download/mac).
        
    - Ouvrez le package et suivez les instructions d'installation.
        
    - Vérifiez l'installation avec :
        
        Copier
        
        ```
        git --version
        ```
        
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#linux)

Linux

1. **Utilisation du gestionnaire de paquets :**
    
    - Ouvrez un terminal et utilisez la commande adaptée à votre distribution :
        
        Copier
        
        ```
        # Debian/Ubuntu
        sudo apt-get install git
        
        # Fedora
        sudo dnf install git
        
        # Arch Linux
        sudo pacman -S git
        ```
        
    - Vérifiez l'installation avec :
        
        Copier
        
        ```
        git --version
        ```
        
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-2.-configuration-de-git)

2. Configuration de Git

Après l'installation, configurez votre nom d'utilisateur et votre adresse e-mail :

Copier

```
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

Vérifiez la configuration :

Copier

```
git config --list
```

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-3.-initialiser-un-projet)

3. Initialiser un Projet

1. **Créer un nouveau répertoire et y naviguer :**
    
    Copier
    
    ```
    mkdir mon-projet
    cd mon-projet
    ```
    
2. **Initialiser un dépôt Git :**
    
    Copier
    
    ```
    git init
    ```
    
3. **Créer un fichier** `**README.md**` **:**
    
    Copier
    
    ```
    echo "# Mon Projet" >> README.md
    ```
    
4. **Ajouter le fichier au suivi Git :**
    
    Copier
    
    ```
    git add README.md
    ```
    
5. **Faire un premier commit :**
    
    Copier
    
    ```
    git commit -m "Premier commit : Ajout du fichier README.md"
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-4.-travailler-avec-github)

4. Travailler avec GitHub

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#creation-dun-depot-sur-github)

Création d'un dépôt sur GitHub

1. Rendez-vous sur [GitHub](https://github.com/) et connectez-vous.
    
2. Cliquez sur le bouton "+" en haut à droite et sélectionnez "New repository".
    
3. Donnez un nom à votre dépôt et cliquez sur "Create repository".
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#lier-le-depot-local-a-github)

Lier le dépôt local à GitHub

1. **Ajouter l'URL du dépôt GitHub comme remote :**
    
    Copier
    
    ```
    git remote add origin https://github.com/votre-nom-utilisateur/mon-projet.git
    ```
    
2. **Pousser le contenu local vers GitHub :**
    
    Copier
    
    ```
    git push -u origin master
    ```
    
    - `-u` crée une association entre la branche locale et la branche distante, facilitant les futurs `git push` et `git pull`.
        
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-5.-travailler-sur-le-projet)

5. Travailler sur le Projet

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#faire-des-modifications-et-des-commits)

Faire des modifications et des commits

1. **Modifiez ou créez des fichiers dans votre projet.**
    
2. **Vérifiez l'état du dépôt :**
    
    Copier
    
    ```
    git status
    ```
    
3. **Ajouter les modifications :**
    
    Copier
    
    ```
    git add nom-du-fichier
    ```
    
    - Pour ajouter tous les fichiers modifiés :
        
        Copier
        
        ```
        git add .
        ```
        
    
4. **Faire un commit avec un message descriptif :**
    
    Copier
    
    ```
    git commit -m "Description de la modification"
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#envoyer-les-modifications-sur-github)

Envoyer les modifications sur GitHub

1. **Pousser les commits vers le dépôt distant :**
    
    Copier
    
    ```
    git push
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-6.-synchroniser-les-modifications)

6. Synchroniser les Modifications

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#recuperer-les-modifications-depuis-github)

Récupérer les modifications depuis GitHub

1. **Pour obtenir les dernières modifications faites par d'autres contributeurs :**
    
    Copier
    
    ```
    git pull
    ```
    
    - Cela fusionne les modifications distantes dans votre branche locale.
        
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#gerer-les-conflits)

Gérer les conflits

1. **Si un conflit survient, Git vous informera des fichiers en conflit. Ouvrez ces fichiers dans votre éditeur pour résoudre les conflits manuellement.**
    
2. **Après résolution, marquez les conflits comme résolus :**
    
    Copier
    
    ```
    git add fichier-en-conflit
    ```
    
3. **Finalisez la fusion avec un commit :**
    
    Copier
    
    ```
    git commit -m "Résolution des conflits"
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-7.-documentation-et-ressources-supplementaires)

7. Documentation et Ressources Supplémentaires

Pour plus de détails et d'options avancées, consultez la documentation officielle de Git et GitHub :

- [Documentation officielle de Git](https://git-scm.com/doc)
    
- [Guide GitHub](https://docs.github.com/en/get-started/quickstart)
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#resume-des-commandes)

Résumé des Commandes

- **Initialiser un dépôt Git :** `git init`
    
- **Ajouter des fichiers :** `git add`
    
- **Faire un commit :** `git commit -m "message"`
    
- **Ajouter un dépôt distant :** `git remote add origin URL`
    
- **Pousser des modifications :** `git push`
    
- **Récupérer des modifications :** `git pull`
    
- **Vérifier l'état :** `git status`
    

## 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#systeme-de-branches-dans-git)

Système de Branches dans Git

Le système de branches est une fonctionnalité clé de Git qui permet de travailler sur différentes versions d'un projet de manière isolée. Voici une explication détaillée du système de branches et comment l'utiliser.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-1.-quest-ce-quune-branche)

1. Qu'est-ce qu'une Branche ?

Une branche est une version distincte de votre code. Par défaut, Git crée une branche principale appelée `master` ou `main`. Les branches permettent de développer des fonctionnalités, corriger des bugs, ou expérimenter des idées sans affecter le code stable de la branche principale.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-2.-creer-et-utiliser-des-branches)

2. Créer et Utiliser des Branches

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#creer-une-nouvelle-branche)

Créer une nouvelle branche

1. **Créer une branche :**
    
    Copier
    
    ```
    git branch nom-de-la-branche
    ```
    
2. **Lister toutes les branches :**
    
    Copier
    
    ```
    git branch
    ```
    
    - La branche actuelle est marquée d'un astérisque (*) dans la liste.
        
    
3. **Changer de branche :**
    
    Copier
    
    ```
    git checkout nom-de-la-branche
    ```
    
4. **Créer et basculer sur une nouvelle branche en une seule commande :**
    
    Copier
    
    ```
    git checkout -b nom-de-la-branche
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#travailler-sur-une-branche)

Travailler sur une Branche

1. **Effectuer des modifications, les ajouter et les committer comme d'habitude :**
    
    Copier
    
    ```
    git add fichier-modifie
    git commit -m "Message du commit"
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#fusionner-des-branches)

Fusionner des Branches

1. **Basculer sur la branche où vous souhaitez fusionner les modifications (généralement** `**main**` **ou** `**master**`**) :**
    
    Copier
    
    ```
    git checkout main
    ```
    
2. **Fusionner une autre branche dans la branche actuelle :**
    
    Copier
    
    ```
    git merge nom-de-la-branche
    ```
    
    - Cela applique les commits de `nom-de-la-branche` à la branche actuelle.
        
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#resoudre-les-conflits-de-fusion)

Résoudre les Conflits de Fusion

1. **Si des conflits surviennent lors de la fusion, Git vous informera des fichiers en conflit. Ouvrez ces fichiers dans votre éditeur pour résoudre les conflits manuellement.**
    
2. **Après avoir résolu les conflits, marquez les conflits comme résolus :**
    
    Copier
    
    ```
    git add fichier-en-conflit
    ```
    
3. **Finalisez la fusion avec un commit :**
    
    Copier
    
    ```
    git commit -m "Résolution des conflits"
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#supprimer-une-branche)

Supprimer une Branche

1. **Après avoir fusionné une branche et n'en ayant plus besoin, vous pouvez la supprimer :**
    
    Copier
    
    ```
    git branch -d nom-de-la-branche
    ```
    
    - Utilisez `-D` au lieu de `-d` pour forcer la suppression d'une branche non fusionnée.
        
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-3.-utilisation-avancee-des-branches)

3. Utilisation Avancée des Branches

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#suivi-des-branches-distantes)

Suivi des branches distantes

1. **Lister les branches distantes :**
    
    Copier
    
    ```
    git branch -r
    ```
    
2. **Créer une branche locale suivie d'une branche distante :**
    
    Copier
    
    ```
    git checkout -b nom-de-la-branche origin/nom-de-la-branche-distante
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#rebasage)

Rebasage

1. **Rebaser une branche pour intégrer les modifications de la branche** `**main**` **:**
    
    Copier
    
    ```
    git checkout nom-de-la-branche
    git rebase main
    ```
    
    - Le rebasage réapplique les commits de votre branche sur le dernier commit de `main`.
        
    
2. **Résoudre les conflits comme lors d'une fusion, puis poursuivre le rebasage :**
    
    Copier
    
    ```
    git rebase --continue
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#stash)

Stash

1. **Sauvegarder temporairement des modifications sans les committer :**
    
    Copier
    
    ```
    git stash
    ```
    
2. **Récupérer les modifications sauvegardées :**
    
    Copier
    
    ```
    git stash pop
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#documentation-officielle)

Documentation Officielle

Pour plus d'informations sur les branches, consultez la documentation officielle de Git :

- [Branches Git](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
    
- [Rebasing Git](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#resume-des-commandes-de-branches)

Résumé des Commandes de Branches

- **Créer une branche :** `git branch nom-de-la-branche`
    
- **Basculer de branche :** `git checkout nom-de-la-branche`
    
- **Créer et basculer sur une branche :** `git checkout -b nom-de-la-branche`
    
- **Fusionner une branche :** `git merge nom-de-la-branche`
    
- **Supprimer une branche :** `git branch -d nom-de-la-branche`
    

## 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#bonnes-pratiques-avec-git-et-github)

Bonnes Pratiques avec Git et GitHub

L'utilisation efficace de Git et GitHub nécessite l'adoption de bonnes pratiques. Voici quelques conseils pour vous aider à tirer le meilleur parti de ces outils et à maintenir un code propre et bien organisé.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-1.-utilisez-des-commits-atomiques)

1. Utilisez des Commits Atomiques

**Commits atomiques** : Un commit atomique signifie qu'il ne contient qu'une seule tâche ou une seule modification logique. Cela rend l'historique Git plus lisible et facilite le débogage.

- **Bon exemple :**
    
    Copier
    
    ```
    git commit -m "Ajout de la fonction de connexion utilisateur"
    git commit -m "Correction du bug de la page d'accueil"
    ```
    
- **Mauvais exemple :**
    
    Copier
    
    ```
    git commit -m "Ajout de la fonction de connexion utilisateur et correction du bug de la page d'accueil"
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-2.-ecrivez-des-messages-de-commit-clairs-et-significatifs)

2. Écrivez des Messages de Commit Clairs et Significatifs

Les messages de commit doivent décrire clairement ce qui a été modifié et pourquoi. Utilisez l'impératif présent pour décrire l'action du commit.

- **Bon exemple :**
    
    Copier
    
    ```
    git commit -m "Ajoute la fonctionnalité de réinitialisation du mot de passe"
    ```
    
- **Mauvais exemple :**
    
    Copier
    
    ```
    git commit -m "Fix bug"
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-3.-travaillez-sur-des-branches)

3. Travaillez sur des Branches

Utilisez des branches pour développer des fonctionnalités, corriger des bugs ou expérimenter. Cela permet de maintenir la branche principale (`main` ou `master`) stable et déployable à tout moment.

- **Créer une branche pour une nouvelle fonctionnalité :**
    
    Copier
    
    ```
    git checkout -b feature/nouvelle-fonctionnalite
    ```
    
- **Créer une branche pour corriger un bug :**
    
    Copier
    
    ```
    git checkout -b bugfix/correction-du-bug
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-4.-mettez-a-jour-regulierement-votre-branche)

4. Mettez à Jour Régulièrement Votre Branche

Pour éviter les conflits et rester à jour avec les modifications des autres contributeurs, intégrez régulièrement les changements de la branche principale dans votre branche de travail.

- **Rebaser votre branche avec** `**main**` **:**
    
    Copier
    
    ```
    git checkout main
    git pull
    git checkout votre-branche
    git rebase main
    ```
    
- **Alternative avec merge :**
    
    Copier
    
    ```
    git checkout main
    git pull
    git checkout votre-branche
    git merge main
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-5.-resolvez-les-conflits-rapidement)

5. Résolvez les Conflits Rapidement

Lorsqu'un conflit survient, résolvez-le rapidement pour éviter de compliquer l'historique du projet. Communiquez avec votre équipe si nécessaire pour comprendre et résoudre les conflits efficacement.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-6.-utilisez-.gitignore)

6. Utilisez `.gitignore`

Utilisez un fichier `.gitignore` pour exclure les fichiers et répertoires qui ne doivent pas être suivis par Git, tels que les fichiers temporaires, les dépendances compilées et les fichiers de configuration spécifiques à l'environnement.

- **Exemple de** `**.gitignore**` **:**
    
    Copier
    
    ```
    # Fichiers de log
    *.log
    
    # Fichiers de configuration d'environnement
    .env
    
    # Dépendances de Node.js
    node_modules/
    
    # Fichiers compilés
    *.class
    *.o
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-7.-faites-des-pull-requests-pr-pour-les-revues-de-code)

7. Faites des Pull Requests (PR) pour les Revues de Code

Lorsque vous travaillez sur un projet collaboratif, utilisez des pull requests pour proposer des modifications. Cela permet à d'autres développeurs de revoir et de discuter des modifications avant qu'elles ne soient intégrées dans la branche principale.

- **Créer une pull request sur GitHub :**
    
    1. Poussez votre branche vers GitHub.
        
    2. Accédez à votre dépôt sur GitHub.
        
    3. Cliquez sur "Pull requests" puis "New pull request".
        
    4. Sélectionnez votre branche et créez la pull request.
        
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-8.-etiquetez-vos-versions)

8. Étiquetez Vos Versions

Utilisez des tags pour marquer des points spécifiques de votre historique comme des versions ou des releases. Cela facilite la gestion des versions et le déploiement.

- **Créer un tag :**
    
    Copier
    
    ```
    git tag -a v1.0 -m "Version 
    ```
    

1.0"

Copier

```

- **Pousser un tag vers GitHub :**
  ```bash
  git push origin v1.0
```

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-9.-documentez-votre-projet)

9. Documentez Votre Projet

Assurez-vous de bien documenter votre projet avec un fichier `README.md` clair et détaillé. Indiquez les instructions d'installation, d'utilisation, les contributions et les informations de licence.

- **Exemple de** `**README.md**` **:**
    
    Copier
    
    ```
    # Nom du Projet
    
    ## Description
    Brève description du projet.
    
    ## Installation
    Instructions pour installer les dépendances et configurer le projet.
    
    ## Bash
    git clone https://github.com/votre-nom-utilisateur/nom-du-projet.git
    cd nom-du-projet
    npm install
    
    ## Utilisation Instructions pour utiliser le projet.
    npm start
    
    ## Contribuer
    Indications pour contribuer au projet.
    
    ## Licence
    Informations sur la licence.
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-10.-protegez-la-branche-principale)

10. Protégez la Branche Principale

Configurez des protections de branche sur GitHub pour empêcher les commits directs sur la branche principale. Cela peut inclure l'obligation de passer par des pull requests et d'obtenir des approbations avant de fusionner.

- **Configurer les protections de branche :**
    
    1. Allez dans les "Settings" de votre dépôt sur GitHub.
        
    2. Sous "Branches", configurez les règles de protection pour `main` ou `master`.
        
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-11.-communiquez-et-collaborez)

11. Communiquez et Collaborez

Utilisez les fonctionnalités de collaboration de GitHub comme les issues et les discussions pour suivre les tâches, signaler les bugs, et discuter des améliorations.

- **Créer une issue :**
    
    1. Allez dans l'onglet "Issues" de votre dépôt.
        
    2. Cliquez sur "New issue" et décrivez le problème ou la tâche.
        
    

## 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#conventions-de-commits-conventional-commits)

Conventions de Commits (Conventional Commits)

Les conventions de commits sont un ensemble de règles pour structurer les messages de commit de manière standardisée. Ces conventions facilitent la lecture et la compréhension de l'historique des commits, améliorent l'automatisation des processus de versionnage et de déploiement, et favorisent une collaboration plus efficace.

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-1.-structure-des-messages-de-commit)

1. Structure des Messages de Commit

Un message de commit selon les conventions de commits se compose de trois parties principales : le type, la description courte, et, optionnellement, un corps et un pied de page.

Copier

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#types-de-commits)

Types de Commits

- **feat** : Une nouvelle fonctionnalité.
    
- **fix** : Une correction de bug.
    
- **docs** : Des modifications uniquement concernant la documentation.
    
- **style** : Des modifications qui n'affectent pas le sens du code (indentation, formatage, etc.).
    
- **refactor** : Une refactorisation du code qui n'ajoute pas de fonctionnalité ni ne corrige de bug.
    
- **perf** : Une modification du code qui améliore les performances.
    
- **test** : Ajout ou modification de tests.
    
- **build** : Des modifications affectant le système de build ou des dépendances externes (npm, webpack, etc.).
    
- **ci** : Des modifications concernant l'intégration continue.
    
- **chore** : Des tâches diverses qui ne modifient ni les tests ni le code source.
    
- **revert** : Revert d'un commit précédent.
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#exemple-de-message-de-commit)

Exemple de Message de Commit

Copier

```
feat(auth): ajouter la fonctionnalité de réinitialisation de mot de passe

Cette fonctionnalité permet aux utilisateurs de réinitialiser leur mot de passe via un lien envoyé par e-mail. Elle inclut :
- Génération de jetons de réinitialisation
- Envoi de courriels avec le lien de réinitialisation
- Formulaire de réinitialisation de mot de passe

BREAKING CHANGE: La table des utilisateurs a été modifiée pour inclure un champ de jeton de réinitialisation.
```

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-2.-avantages-des-conventions-de-commits)

2. Avantages des Conventions de Commits

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#historique-de-commits-plus-clair)

Historique de Commits Plus Clair

Les conventions de commits permettent d'avoir un historique de commits structuré et lisible. Chaque message de commit fournit une indication claire de l'impact de la modification.

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#versionnage-semantique-automatise)

Versionnage Sémantique Automatisé

En suivant les conventions de commits, il est possible d'automatiser le versionnage sémantique (SemVer). Les outils comme [semantic-release](https://github.com/semantic-release/semantic-release) analysent les messages de commit pour déterminer automatiquement les versions majeures, mineures et correctives.

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#generation-automatique-du-changelog)

Génération Automatique du Changelog

Les messages de commit bien structurés permettent de générer automatiquement des changelogs détaillés en utilisant des outils comme [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-3.-utilisation-des-conventions-de-commits)

3. Utilisation des Conventions de Commits

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#pre-commits-git-hooks)

Pré-commits Git Hooks

Pour s'assurer que tous les développeurs respectent les conventions de commits, utilisez des hooks Git avec des outils comme [commitlint](https://github.com/conventional-changelog/commitlint) et [husky](https://github.com/typicode/husky).

- **Installer commitlint et husky :**
    
    Copier
    
    ```
    npm install --save-dev @commitlint/{config-conventional,cli}
    npx husky install
    ```
    
- **Configurer commitlint :**
    
    Copier
    
    ```
    echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
    ```
    
- **Ajouter un hook de pré-commit :**
    
    Copier
    
    ```
    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
    ```
    

#### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#exemple-de-configuration)

Exemple de Configuration

- **package.json :**
    
    Copier
    
    ```
    {
      "scripts": {
        "prepare": "husky install"
      },
      "devDependencies": {
        "@commitlint/cli": "^13.0.0",
        "@commitlint/config-conventional": "^13.0.0",
        "husky": "^7.0.0"
      }
    }
    ```
    

### 

[](https://metz-numeric-school.gitbook.io/cours-dev/v/git#id-4.-resume-des-commandes-et-bonnes-pratiques)

4. Résumé des Commandes et Bonnes Pratiques

- **Types de commits :** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
    
- **Message de commit :**
    
    Copier
    
    ```
    <type>[optional scope]: <description>
    
    [optional body]
    
    [optional footer(s)]
    ```
    
- **Outils recommandés :**
    
    - [commitlint](https://github.com/conventional-changelog/commitlint)
        
    - [husky](https://github.com/typicode/husky)
        
    - [semantic-release](https://github.com/semantic-release/semantic-release)
        
    - [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)