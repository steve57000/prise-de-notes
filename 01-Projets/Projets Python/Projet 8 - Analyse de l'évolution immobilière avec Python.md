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

### Partie 2 — Créer et présenter le diaporama

#### Ressources du cours

- [Construisez votre diaporama et vos diapositives](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6370596-construisez-votre-diaporama-et-vos-diapositives)
- [Paramétrez votre diaporama](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6370591-parametrez-votre-diaporama)
- [Dynamisez votre diaporama avec des animations et transitions](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6370611-dynamisez-votre-diaporama-avec-des-animations-et-transitions)
- [Utilisez votre support face à un public](https://openclassrooms.com/fr/courses/5870121-realisez-un-diaporama-pour-accompagner-votre-presentation/6370601-utilisez-votre-support-face-a-un-public)

#### 1. Construire les diapositives

- Nommer le fichier clairement. Dans une application en ligne, il est généralement enregistré automatiquement ; dans une application installée, choisir le dossier et le format, puis enregistrer régulièrement.
- Créer, dupliquer, déplacer ou supprimer les diapositives depuis leur vignette dans la zone de gauche. Lancer la présentation avec « Lire » et revenir à l’édition avec Échap.
- Choisir pour chaque diapositive une mise en page adaptée au brouillon et au contenu attendu. Les mises en page préparées aident à conserver une structure uniforme.
- Saisir peu de texte dans les zones prévues ; éviter de régler à la main les polices et tailles globales avant l’étape de mise en forme.
- Insérer les images, tableaux, graphiques et autres éléments lisibles. Une mise en page « titre uniquement » convient souvent aux visuels accompagnés d’une légende.
- Créer des schémas simples avec des formes, du texte et des connecteurs. Utiliser les guides pour aligner les éléments ; grouper ceux qui doivent être déplacés ensemble et les dissocier si leurs animations doivent être séparées.

#### 2. Paramétrer et homogénéiser le diaporama

- Choisir un thème sobre et vérifier qu’il reste lisible : les thèmes proposés ne respectent pas tous les règles de contraste et de simplicité.
- Un thème agit notamment sur le fond, la position et la taille des zones, ainsi que sur les polices, les couleurs et les formes.
- Utiliser le masque de diapositives pour appliquer les changements communs à toute la présentation : titres, polices, tailles, logo ou numérotation.
- Modifier une mise en page précise lorsque seules les diapositives basées sur ce modèle doivent changer. Les fonctions de masque ne sont pas placées au même endroit dans Google Slides, PowerPoint et Impress ; le masque PowerPoint est réservé à l’application de bureau dans le cours.

#### 3. Utiliser animations et transitions avec mesure

- Les animations peuvent révéler les éléments d’un schéma ou d’un texte progressivement, au moment où ils sont expliqués. L’ordre des animations doit suivre le discours.
- Les animations sont facultatives ; les réserver aux éléments qui gagnent à être dévoilés par étapes. Les éléments groupés s’animent ensemble.
- Les transitions rendent le passage entre diapositives plus fluide, mais n’ajoutent pas de contenu. Préférer un effet simple et l’utiliser avec modération.
- Prévisualiser les effets avec « Lire ». Les animations et transitions ne sont pas conservées dans un export PDF.

#### 4. Préparer la présentation devant le public

- Vérifier l’ordinateur, le vidéoprojecteur, l’alimentation et les câbles. Si l’ordinateur a une sortie HDMI et le projecteur une entrée VGA, prévoir un adaptateur compatible.
- Répéter le discours avec les changements de diapositives et les animations. Tester si possible dans la salle pour contrôler le cadrage, la netteté, la taille et le contraste projetés.
- Prévoir une copie PDF sur une clé USB ; garder une solution de connexion Internet si la présentation dépend de liens ou de ressources en ligne.
- Ajouter les rappels dans les notes du présentateur, visibles sur son écran mais pas projetés. Sinon, noter dans un support externe les moments où changer de diapositive.
- Faire face au public, éviter de se placer dans le faisceau du projecteur et désigner les éléments depuis l’écran de l’ordinateur. Une souris sans fil ou une télécommande permet de se déplacer.
- Exporter en PDF si le support doit être remis au public.

#### Application à la présentation du Projet 8

- Utiliser des mises en page cohérentes, un masque pour les titres et la numérotation, et des graphiques simplifiés pour la projection.
- Animer seulement les étapes d’un raisonnement ou d’un schéma qui sont expliquées progressivement ; éviter les effets décoratifs.
- Préparer des notes orales associées aux diapositives, répéter le timing et tester le PDF ainsi que le matériel de projection avant la soutenance.

#### Quiz « Améliorez un diaporama » — réponses proposées

1. **Éditer la diapositive 2 :** cliquer sur sa vignette dans la zone de gauche.
2. **Remplacer la zone texte par l’image :** sélectionner la zone de texte entière et la supprimer, puis insérer l’image.
3. **Dupliquer la diapositive 1 :** clic droit sur sa vignette, puis « Dupliquer la diapositive ».
4. **Construire le schéma :** cinq zones de texte et une flèche.
5. **Insérer une flèche :** menu Insertion > Forme > Flèche ; menu de formes de la barre d’outils ; ou menu de l’outil Trait.
6. **Supprimer la diapositive 1 :** clic droit sur sa vignette > Supprimer ; menu Diapositive > Supprimer ; ou sélectionner sa vignette puis appuyer sur Suppr.
7. **Ordre des animations :** bloc de gauche, flèche, puis bloc de droite.
8. **Agrandir tous les titres :** modifier leur taille dans le masque de diapositives.
9. **Voir les notes pendant la projection :** Afficher > Commentaires du présentateur, puis saisir les notes sous la diapositive.
10. **Projecteur VGA et ordinateur avec HDMI seulement :** non, pas directement ; il faut un adaptateur HDMI-vers-VGA compatible.
11. **Posture :** se placer face au public avec l’ordinateur devant soi.


## Journal du projet

### Installation des dépendances sous Windows

Une erreur `WinError 206` a été rencontrée pendant l’installation des dépendances dans l’environnement virtuel de PyCharm, sur un chemin profond de NumPy. La cause et la solution testée restent à documenter ici.

### Questions à reprendre

- Quelles sont les hypothèses de la régression et comment interpréter son erreur de prédiction ?
- Comment expliquer le résultat du clustering et ses limites à un public non technique ?
- Quelles données et étiquettes sont nécessaires pour terminer la validation externe ?
