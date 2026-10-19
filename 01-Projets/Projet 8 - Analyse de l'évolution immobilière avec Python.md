# Projet 8 — Analysez l’évolution des prix de l’immobilier avec Python

Fiche de suivi du projet OpenClassrooms. Les cours et méthodes réutilisables sont rangés dans `02-Tech` ; cette page garde les liens, l’avancement et les décisions propres au projet.

## Objectif

Analyser l’évolution du marché immobilier parisien, étudier les transactions historiques, estimer la valeur d’un portefeuille immobilier et présenter les résultats de façon compréhensible pour un interlocuteur non technique.

## Dépôt et livrables

- [Brief du projet sur OpenClassrooms](https://openclassrooms.com/fr/paths/805/projects/1591)
- [Dépôt GitHub du projet](https://github.com/steve57000/p8)
- [README du dépôt](https://github.com/steve57000/p8/blob/master/README.md)
- [Plan de travail et état d’avancement](https://github.com/steve57000/p8/blob/master/PLAN_DE_TRAVAIL.md)
- [Notebook d’analyse](https://github.com/steve57000/p8/blob/master/livrables/Bell_Steve_1_Notebook_102026.ipynb)
- [Présentation des résultats](https://github.com/steve57000/p8/blob/master/livrables/Bell_Steve_2_presentation_102026.pptx)
- [Notes de soutenance](https://github.com/steve57000/p8/blob/master/livrables/NOTES_SOUTENANCE.md)
- [Prévisions du portefeuille au 31/12/2022](https://github.com/steve57000/p8/blob/master/livrables/predictions_valorisation_portefeuille_2022-12-31.csv)

## Avancement relevé dans le dépôt

Le plan de travail indique que l’analyse exploratoire, la modélisation, la prévision du portefeuille et un premier test de classification sont réalisés. La validation finale reste à reprendre avec l’échantillon de biens et les étiquettes de référence de Louise, absents du dépôt au moment de la dernière vérification.

À vérifier à chaque mise à jour du dépôt : cette section est un repère de suivi, pas une source de vérité indépendante du plan de travail.

## Connaissances à mobiliser

- [[02-Tech/Python/Index Python|Index Python]]
- [[02-Tech/Notebook/00-Accueil-MOC|Parcours notebook d’analyse de données]]
- [[02-Tech/Machine Learning/Initiez-vous au Machine Learning|Guide Machine Learning]]
- [[02-Tech/Statistiques/Explorez les tests statistiques|Guide des tests statistiques]]
- [[02-Tech/Algo/Les fonctions|Fonctions Python]]
- [[02-Tech/Google Slides/Guide pratique du diaporama|Guide de présentation des résultats]]

### Trame à adapter pour la soutenance

1. Quel besoin métier et quelle décision l’analyse doit-elle éclairer ?
2. Quelles données sont utilisées, sur quelle période et avec quelles limites ?
3. Quelle méthode a été retenue et pourquoi ?
4. Quels résultats répondent à la question de départ ?
5. Quelles sont les limites et validations encore nécessaires ?
6. Quelle décision ou prochaine action peut-on proposer ?

Garder une idée principale par diapositive, simplifier les graphiques pour la projection, citer les sources des données et des visuels, et conserver les détails dans le notebook ou les notes du présentateur.

## Journal technique

### Installation des dépendances sous Windows

Une erreur `WinError 206` a été rencontrée pendant l’installation des dépendances dans l’environnement virtuel de PyCharm, sur un chemin profond de NumPy. La cause et la solution testée restent à documenter ici.

## Questions à reprendre

- Quelles sont les hypothèses de la régression et comment interpréter son erreur de prédiction ?
- Comment expliquer le résultat du clustering et ses limites à un public non technique ?
- Quelles données et étiquettes sont nécessaires pour terminer la validation externe ?
