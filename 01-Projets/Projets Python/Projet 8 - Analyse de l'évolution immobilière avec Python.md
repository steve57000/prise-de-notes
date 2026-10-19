# Projet 8 — Analysez l’évolution des prix de l’immobilier avec Python

Projet du parcours **Business Intelligence Analyst** d’OpenClassrooms. Cette page sert de point d’entrée pour relier les cours, les notions Python/data et le travail du projet.

## Objectif

Analyser l’évolution du marché immobilier parisien, étudier les transactions historiques, estimer la valeur d’un portefeuille immobilier et présenter les résultats de façon compréhensible pour un interlocuteur non technique.

## Ressources du projet

- [Brief du projet sur OpenClassrooms](https://openclassrooms.com/fr/paths/805/projects/1591)
- [Dépôt GitHub du projet](https://github.com/steve57000/p8)
- [README du dépôt](https://github.com/steve57000/p8/blob/master/README.md)
- [Plan de travail et état d’avancement](https://github.com/steve57000/p8/blob/master/PLAN_DE_TRAVAIL.md)
- [Notebook d’analyse](https://github.com/steve57000/p8/blob/master/livrables/Bell_Steve_1_Notebook_102026.ipynb)
- [Présentation des résultats](https://github.com/steve57000/p8/blob/master/livrables/Bell_Steve_2_presentation_102026.pptx)
- [Notes de soutenance](https://github.com/steve57000/p8/blob/master/livrables/NOTES_SOUTENANCE.md)
- [Prévisions du portefeuille au 31/12/2022](https://github.com/steve57000/p8/blob/master/livrables/predictions_valorisation_portefeuille_2022-12-31.csv)

## État indiqué dans le dépôt

Le plan de travail actuel décrit l’analyse exploratoire, la modélisation, la prévision du portefeuille et un premier test de classification comme réalisés. Il indique aussi qu’une validation finale reste à faire avec l’échantillon de biens et les étiquettes de référence de Louise, qui ne sont pas encore disponibles dans le dépôt.

Ces points décrivent l’état des fichiers du projet. Nous les reprendrons avec les cours pour comprendre les choix, vérifier les résultats et consigner les éventuelles corrections.

## Notes des cours

### Cours 1 — Réalisez un diaporama pour accompagner votre présentation

Ce cours donne les bases pour préparer un support clair et professionnel. Le diaporama accompagne la présentation orale : il aide le public à suivre le fil, comprendre les idées, garder son attention et voir les éléments importants. Il ne remplace pas l’exposé et ne doit pas devenir un texte à lire.

#### Ressources du cours

- [Choisissez les contenus de votre présentation](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/5870128-choisissez-les-contenus-de-votre-presentation)
- [Découvrez des bonnes pratiques de mise en page](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6370576-decouvrez-des-bonnes-pratiques-de-mise-en-page)
- [Prenez en main un logiciel de présentation](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6647291-prenez-en-main-un-logiciel-de-presentation)

#### 1. Choisir le contenu avant l’outil

- Commencer par définir le public, le contexte, l’objectif et le message à faire retenir.
- Préparer d’abord le plan et les notes de l’exposé, puis un brouillon des diapositives utiles.
- Garder une idée principale par diapositive, peu de texte et des mots-clés ; préférer un schéma ou un graphique quand il clarifie mieux l’idée.
- Prévoir une couverture, un plan, les documents à commenter et les visuels qui aident à expliquer.
- Le nombre de diapositives dépend de la durée, de la complexité et de la densité du sujet. Laisser au public le temps de lire et revenir au plan lors des changements de partie.
- Pour les images trouvées en ligne, vérifier les droits d’utilisation et créditer l’auteur, le titre, la licence et l’URL. Filtrer les résultats par licence ; Wikimedia Commons propose des ressources libres ou du domaine public, tandis que les autres sites demandent une vérification au cas par cas.

#### 2. Maquetter et rendre les diapositives lisibles

- Garder un style cohérent : mêmes règles de mise en page, polices et couleurs ; utiliser la charte graphique disponible.
- Donner un titre à chaque diapositive et une légende aux illustrations. Indiquer la source des visuels qui ne sont pas les siens.
- Aligner les éléments et relire les textes.
- Aérer les diapositives, conserver de l’espace vide et privilégier une police sans empattement.
- Vérifier la taille des caractères, la lisibilité des graphiques et le contraste entre le texte et le fond. Le cours conseille de viser au moins 20 px pour le texte et d’éviter les fonds texturés.
- Préférer un design sobre et minimaliste qui met le contenu en avant.

#### 3. Choisir et prendre en main un logiciel

- Le cours présente PowerPoint, Google Slides, OpenOffice Impress et LibreOffice Impress. PowerPoint et Google Slides peuvent être utilisés en ligne ; Impress s’installe sur l’ordinateur.
- Les formats natifs cités sont `.pptx` et `.ppt` pour PowerPoint, et `.odp` pour Impress. L’ouverture dans une autre application est souvent possible, mais la mise en forme peut changer.
- Repérer les menus ou le ruban, les icônes, les menus contextuels au clic droit et l’aide intégrée. Tester les commandes dans l’application choisie.
- Exporter aussi une version PDF pour conserver une version facile à projeter si la mise en forme varie d’un logiciel à l’autre.
- Les interfaces évoluent ; les noms et emplacements des commandes peuvent différer de ceux des exemples du cours.

#### Application à la présentation du Projet 8

- Construire le récit autour du besoin métier, des données, de la méthode, des résultats, des limites et des décisions possibles.
- Présenter une idée à la fois ; utiliser les graphiques du projet seulement s’ils restent lisibles à l’écran.
- Garder les explications détaillées dans les notes orales ou le notebook, et réserver les diapositives aux messages essentiels.
- Citer les sources des données et des visuels, puis contrôler la présentation et son export PDF avant la soutenance.

#### Quiz de la Partie 1

Le quiz « Préparez votre diaporama » vérifie notamment la synthèse du contenu, la lisibilité, le contraste, le choix des outils et les formats de fichiers. À compléter après avoir répondu dans le cours.

### Suite du cours

À venir : construire les diapositives, paramétrer le diaporama, utiliser les animations et transitions avec mesure, puis présenter le support face à un public.

## Journal du projet

### Installation des dépendances sous Windows

Une erreur `WinError 206` a été rencontrée pendant l’installation des dépendances dans l’environnement virtuel de PyCharm, sur un chemin profond de NumPy. La cause et la solution testée restent à documenter ici.

### Questions à reprendre

- Quelles sont les hypothèses de la régression et comment interpréter son erreur de prédiction ?
- Comment expliquer le résultat du clustering et ses limites à un public non technique ?
- Quelles données et étiquettes sont nécessaires pour terminer la validation externe ?
