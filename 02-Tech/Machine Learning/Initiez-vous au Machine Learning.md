# Initiez-vous au Machine Learning

> [Cours OpenClassrooms](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning) — niveau moyen, durée indicative de 10 h. La page du cours indique une mise à jour au 30 septembre 2025.
>
> Cette fiche rassemble le parcours, les notions à retenir et une procédure réutilisable pour entraîner un premier modèle tabulaire avec Python.

## Objectifs et prérequis

Le cours apprend à reconnaître les grands principes du Machine Learning, manipuler les fonctions de base d’un modèle prédictif, transformer un jeu de données et améliorer les performances d’un modèle.

Les prérequis recommandés sont les bibliothèques Python de Data Science, quelques bases d’algèbre linéaire (vecteurs, matrices, normes) et de probabilité/statistique (distributions, variance). Les outils indiqués sont scikit-learn et Jupyter Notebook ou Google Colab.

- [[02-Tech/Python/Index Python|Index Python]]
- [[02-Tech/Notebook/00-Accueil-MOC|Notes sur les notebooks et l’analyse de données]]
- [[02-Tech/Statistiques/Explorez les tests statistiques|Guide des tests statistiques]]
- [Cours OpenClassrooms — bibliothèques Python pour la Data Science](https://openclassrooms.com/fr/courses/7771531-decouvrez-les-librairies-python-pour-la-data-science)
- [Documentation officielle scikit-learn](https://scikit-learn.org/stable/)

## Synthèse du cours, leçon par leçon

Cette synthèse reformule les notions à retenir pour pouvoir les retrouver et les réutiliser. Les liens du parcours plus bas donnent accès aux leçons complètes et aux quatre quiz ; les quiz restent à faire sur OpenClassrooms pour vérifier les acquis.

### Partie 1 — Découvrez les grands principes du Machine Learning

#### 1. [Tirez un maximum de ce cours](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8296611-tirez-un-maximum-de-ce-cours)

Le cours progresse des principes généraux vers les modèles, la préparation des données et l’amélioration des performances. Il est conçu pour être suivi avec de la pratique : refaire les manipulations dans un notebook et utiliser les quiz pour vérifier les notions. Les bases de Python pour la Data Science, des statistiques et de l’algèbre linéaire facilitent la progression.

#### 2. [Abordez le domaine d’application du Machine Learning](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8296925-abordez-le-domaine-d-application-du-machine-learning)

- La modélisation statistique cherche surtout à analyser ou expliquer des relations ; le Machine Learning présenté ici vise surtout à faire des prédictions qui généralisent à de nouveaux exemples.
- Dans un tableau, les lignes sont les échantillons, les colonnes les variables. En supervisé, on distingue les variables prédictives de la cible ; en non supervisé, il n’y a pas de cible fournie.
- Une cible continue appelle une **régression** ; une cible catégorielle, une **classification** ; la recherche de groupes sans étiquettes, un **clustering**.
- Le développement alterne préparation des données, validation et optimisation. Le jeu de test doit représenter des données que le modèle n’a pas vues.

#### 3. [Découvrez les notions de modèle et d’algorithme](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297197-decouvrez-les-notions-de-modele-et-d-algorithme)

- Un algorithme est une suite d’opérations qui ajuste progressivement une estimation pour réduire une erreur, mesurée par une fonction de coût.
- Dans scikit-learn, la classe décrit une famille de modèles ; après instanciation et entraînement avec `fit(X, y)`, l’objet contient les paramètres appris et peut produire des prédictions.
- Les familles évoquées incluent les modèles linéaires, les arbres et les réseaux de neurones. Le gradient stochastique illustre l’apprentissage itératif ; le taux d’apprentissage règle l’ampleur des mises à jour et peut empêcher la convergence s’il est trop élevé.

#### 4. [Passez d’une problématique business à la mise en production](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297367-passez-d-une-problematique-business-a-la-mise-en-production)

- Le projet commence par une question d’usage, des données pertinentes et un critère de succès. Comparer le Machine Learning à une règle simple fournit un benchmark et aide à vérifier que la complexité apporte une valeur réelle.
- Le prototype prépare les données, choisit un modèle, sépare entraînement et validation, puis optimise les paramètres. Ces étapes sont itératives.
- La production demande le déploiement, le suivi et parfois le réentraînement. Les données évoluent : un **drift** peut dégrader les performances ; les pratiques MLOps automatisent notamment les mises à jour, déploiements et contrôles.

### Partie 2 — Manipulez les fonctions de base d’un modèle prédictif

#### 5. [Évaluez la performance d’un modèle prédictif](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297644-evaluez-la-performance-d-un-modele-predictif)

- La fonction de coût guide l’apprentissage ; une métrique de performance sert à comparer les prédictions aux valeurs réelles. Il faut choisir cette métrique selon la tâche et l’usage.
- En régression, la MAE et la RMSE sont des erreurs (plus petites = mieux) ; le R² est généralement meilleur quand il se rapproche de 1. La MAPE exprime une erreur relative, mais demande de la prudence lorsque les valeurs cibles sont nulles ou proches de zéro.
- Le score d’entraînement ne suffit pas : évaluer sur des données tenues à l’écart donne une indication de généralisation. La classification et le clustering ont leurs propres métriques.
- Démarche de base : charger, transformer, séparer, entraîner, prédire, calculer le score, puis recommencer en justifiant chaque modification.

#### 6. [Découvrez le principe de la régression linéaire](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298139-decouvrez-le-principe-de-la-regression-lineaire)

- La régression linéaire estime une cible continue comme une combinaison pondérée des variables prédictives et d’une erreur résiduelle.
- Comparer des métriques sur le jeu de test, comme RMSE et MAPE, permet de mesurer la qualité des estimations ; les coefficients dépendent des unités et de l’échelle des variables.
- Examiner les graphiques aide à vérifier si une relation linéaire est plausible. Des termes polynomiaux ou des interactions peuvent représenter une courbure, mais augmentent la complexité et le risque de surapprentissage.
- Le découpage et le paramètre `random_state` influencent les résultats ; fixer la graine rend une expérience reproductible, tandis qu’une validation croisée donne une comparaison moins dépendante d’un unique découpage.

#### 7. [Classifiez les données avec la régression logistique](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298609-classifiez-les-donnees-avec-la-regression-logistique)

- Malgré son nom, la régression logistique sert à la classification : elle transforme une combinaison de variables en probabilité de classe, puis un seuil transforme cette probabilité en étiquette.
- La matrice de confusion compte les vrais/faux positifs et vrais/faux négatifs. La précision pénalise surtout les faux positifs ; le rappel mesure la capacité à retrouver les positifs.
- En cas de classes déséquilibrées, l’accuracy peut sembler élevée même si la classe rare n’est jamais détectée. Choisir les métriques selon le coût des erreurs et ajuster le seuil en conséquence.
- La courbe ROC et son AUC évaluent le classement sur plusieurs seuils ; elles complètent la matrice de confusion et les métriques au seuil retenu.

#### 8. [Partitionnez les données avec k-means](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298902-partitionnez-les-donnees-avec-k-means)

- K-means attribue les observations à `K` groupes et met à jour leurs centroïdes de façon itérative pour rapprocher les points de leur centre.
- Le choix de `K` fait partie du problème. Le score de silhouette aide à comparer plusieurs valeurs : il favorise des groupes compacts et séparés.
- Comme l’algorithme s’appuie sur des distances, les échelles des variables comptent ; standardiser peut être nécessaire. Les identifiants de groupes sont arbitraires : il faut interpréter les clusters dans le contexte métier.
- Un clustering peut ressembler à une classification si l’on possède des étiquettes de référence, mais il n’apprend pas ces étiquettes.

### Partie 3 — Transformez vos jeux de données

#### 9. [Comprenez le rôle central du jeu de données](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299062-comprenez-le-role-central-du-jeu-de-donnees)

- La performance dépend fortement des données et du signal qu’elles contiennent. Des exemples synthétiques permettent de tester ce qu’un modèle peut apprendre, par exemple quand la séparation entre classes est linéaire ou non.
- Un échantillonnage non représentatif et des catégories sous-représentées peuvent produire des biais systématiques. Vérifier quelles populations et situations les données couvrent, puis documenter les limites.
- Le chapitre insiste sur le fait qu’un modèle peut reproduire des préjugés présents dans les données ; contrôler les résultats par sous-groupes fait partie de l’analyse, pas seulement de l’optimisation du score.

#### 10. [Améliorez un jeu de données](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299343-ameliorez-un-jeu-de-donnees)

- Traiter les valeurs manquantes demande de comprendre pourquoi elles manquent et de choisir une imputation cohérente avec le contexte ; supprimer les lignes n’est pas toujours approprié.
- Un outlier peut être une erreur ou une observation rare mais réelle. Le repérer avec un histogramme, un boxplot, un z-score ou la règle IQR, puis vérifier le sens métier avant de le supprimer, plafonner ou transformer.
- Pour réduire l’effet d’échelle ou d’asymétrie, choisir selon le besoin entre normalisation Min-Max, standardisation par z-score, transformation logarithmique ou discrétisation.
- Dans un pipeline prédictif, apprendre les paramètres d’imputation et de mise à l’échelle sur l’entraînement seulement, puis appliquer ces paramètres à validation et test.

#### 11. [Transformez les variables pour faciliter l’apprentissage du modèle](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299647-transformez-les-variables-pour-faciliter-l-apprentissage-du-modele)

- Les modèles attendent généralement des entrées numériques. L’encodage ordinal est compact mais introduit un ordre artificiel si les catégories n’en ont pas ; le one-hot évite cet ordre mais crée une colonne par catégorie.
- Pour les variables à forte cardinalité, un encodage plus compact, comme le binaire, peut réduire le nombre de colonnes ; il faut choisir une représentation adaptée au modèle et aux données.
- Le feature engineering crée ou transforme des variables à partir d’une connaissance du domaine : intervalles, puissances, logarithmes, indicateurs de valeurs manquantes ou combinaisons de colonnes.
- Comparer les transformations dans une validation rigoureuse : toute transformation apprise à partir des données doit être ajustée sur l’entraînement pour éviter la fuite de données.

### Partie 4 — Optimisez les performances d’un modèle

#### 12. [Améliorez le modèle](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299917-ameliorez-le-modele)

- Comparer les scores entraînement et test permet de diagnostiquer le compromis biais-variance : scores faibles des deux côtés = sous-apprentissage ; très bon score d’entraînement mais score test inférieur = surapprentissage.
- Ajuster les paramètres de complexité (par exemple la profondeur d’un arbre), ajouter des données ou revoir les variables peut améliorer la généralisation.
- La meilleure configuration est celle qui fonctionne bien sur des données non vues, pas celle qui maximise seulement le score d’entraînement.

#### 13. [Augmentez la robustesse de vos modèles](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8300129-augmentez-la-robustesse-de-vos-modeles)

- La régularisation pénalise la complexité pour éviter que le modèle colle trop aux observations d’entraînement. Ridge correspond à une pénalisation L2 ; Lasso à une pénalisation L1. Les arbres se régularisent notamment en limitant leur profondeur.
- La validation croisée divise les données d’entraînement en plis successifs, entraîne sur certains plis et valide sur le pli laissé de côté. La moyenne des scores donne une comparaison plus stable.
- `GridSearchCV` explore les combinaisons de paramètres avec validation croisée. Une recherche large peut coûter cher ; limiter les paramètres testés et réserver le jeu test final à l’évaluation finale.

#### 14. [Découvrez l’apprentissage d’ensemble avec les forêts aléatoires](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8300349-decouvrez-l-apprentissage-d-ensemble-avec-les-forets-aleatoires)

- Une forêt aléatoire entraîne de nombreux arbres en parallèle sur des échantillons et sous-ensembles de variables, puis agrège leurs prédictions. Cette approche réduit souvent la variance d’un arbre seul ; profondeur et nombre de variables par arbre contrôlent sa complexité.
- Le Gradient Boosting construit les arbres séquentiellement, chaque étape se concentrant sur les erreurs précédentes. Le taux d’apprentissage influence la vitesse et la qualité de convergence ; ces modèles demandent un réglage attentif.
- Commencer par une régression simple établit un benchmark. Comparer ensuite forêt aléatoire et boosting selon la métrique utile, la stabilité et les contraintes du problème.
- L’importance des variables renseigne sur les associations exploitées par un modèle ; elle ne démontre pas qu’une variable cause la cible.

## Repérer le type de problème

Commencer par formuler la question à laquelle la prédiction doit répondre et la décision qui utilisera le résultat. Le choix du modèle dépend de la cible et de l’usage.

| Besoin | Cible disponible | Famille | Exemple |
|---|---|---|---|
| Estimer une quantité ou une valeur | Une valeur numérique | Régression | Estimer un prix |
| Attribuer une catégorie | Une classe connue pour les exemples d’entraînement | Classification | Prédire une catégorie ou un statut |
| Découvrir des groupes similaires | Pas de variable cible | Clustering | Regrouper des profils ou des biens |

L’analyse statistique vise généralement à décrire ou expliquer des relations. Le Machine Learning est ici abordé comme une démarche prédictive : apprendre sur des exemples et mesurer la qualité des prédictions sur des données non utilisées pendant l’entraînement. Une bonne performance seule ne prouve pas qu’un modèle est explicable ni qu’il convient à une décision donnée.

## Méthode réutilisable

1. **Définir l’usage.** Écrire la question métier, la cible, le moment où la prédiction sera faite et l’erreur qui serait coûteuse.
2. **Comprendre les lignes et les colonnes.** Une ligne représente un échantillon ; les colonnes représentent les variables. Séparer explicitement la cible des variables disponibles au moment de la prédiction.
3. **Contrôler les données.** Repérer les valeurs manquantes, doublons, valeurs impossibles, catégories incohérentes, dates et changements de définition. Vérifier qu’une variable ne révèle pas déjà la réponse.
4. **Préparer sans fuite de données.** Choisir les transformations nécessaires : imputation, encodage des catégories, mise à l’échelle ou création de variables. Apprendre les paramètres de préparation sur l’échantillon d’entraînement seulement.
5. **Séparer apprentissage et évaluation.** Garder un jeu test que le modèle ne verra pas pendant son apprentissage ni pendant le choix des paramètres. La validation croisée peut servir à comparer des modèles sur les données d’entraînement.
6. **Créer un point de comparaison.** Commencer par un modèle simple et une métrique pertinente, puis essayer des transformations ou algorithmes supplémentaires.
7. **Évaluer et documenter.** Rapporter la métrique, les limites du jeu de données, les hypothèses, les erreurs importantes et la différence entre entraînement et test.
8. **Vérifier la robustesse.** S’assurer que les résultats ne dépendent pas d’un seul découpage et que le protocole représente bien les données qui arriveront ensuite.

### Attention au découpage temporel

Un découpage aléatoire convient seulement si les observations peuvent être mélangées sans fausser l’évaluation. Pour une prévision dans le futur, trier par date, entraîner sur la période la plus ancienne et tester sur une période ultérieure. Mélanger passé et futur pourrait donner au modèle des informations qu’il n’aurait pas au moment réel de la prédiction.

![Schéma OpenClassrooms de séparation entre échantillons d’entraînement et de test](https://user.oc-static.com/upload/2023/10/20/16977886249121_P1C2-3.png)

*Illustration provenant du chapitre « Abordez le domaine d’application du Machine Learning » du cours OpenClassrooms.*

## Algorithmes du cours

| Algorithme | Usage principal | À retenir |
|---|---|---|
| Régression linéaire | Régression | Point de départ interprétable pour relier des variables numériques à une valeur cible ; vérifier si cette relation simple représente les données. |
| Régression logistique | Classification | Malgré son nom, elle sert à prédire une classe. Choisir des métriques adaptées aux coûts des faux positifs et faux négatifs. |
| k-means | Clustering | Regroupe des observations sans cible connue. Le nombre de groupes et l’échelle des variables influencent le résultat ; il faut interpréter les groupes dans leur contexte. |
| Forêt aléatoire | Régression ou classification | Combine plusieurs arbres. Comparer ses performances et ses limites à un modèle de base ; une meilleure métrique ne garantit pas une meilleure explication. |

## Exemple de départ : régression avec scikit-learn

Ce modèle suppose que `df` est un DataFrame déjà chargé, que la cible est numérique et que les variables retenues sont tabulaires. Remplacer `nom_de_la_cible` et contrôler quelles colonnes doivent être traitées comme numériques ou catégorielles. Les dates, textes libres et variables spécifiques demandent un traitement explicite.

```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

target = "nom_de_la_cible"
X = df.drop(columns=[target])
y = df[target]

numeric_features = X.select_dtypes(include=["number"]).columns
categorical_features = X.select_dtypes(
    include=["object", "category", "bool"]
).columns

numeric_prep = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
])
categorical_prep = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore")),
])

preprocessing = ColumnTransformer(
    [
        ("numeric", numeric_prep, numeric_features),
        ("categorical", categorical_prep, categorical_features),
    ],
    remainder="drop",
)

# Pour des observations indépendantes seulement.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = Pipeline([
    ("preprocessing", preprocessing),
    ("regression", LinearRegression()),
])
model.fit(X_train, y_train)
predictions = model.predict(X_test)

mae = mean_absolute_error(y_test, predictions)
rmse = mean_squared_error(y_test, predictions) ** 0.5
r2 = r2_score(y_test, predictions)

print(f"MAE : {mae:.2f}")
print(f"RMSE : {rmse:.2f}")
print(f"R² : {r2:.3f}")
```

Le prétraitement est inclus dans le pipeline : ses paramètres sont ajustés lors de `fit` sur les données d’entraînement, puis réutilisés pour le test. `remainder="drop"` exclut les autres colonnes ; vérifier cette liste pour éviter d’écarter une variable utile sans le vouloir.

- **MAE** : erreur absolue moyenne, exprimée dans l’unité de la cible.
- **RMSE** : erreur quadratique moyenne ramenée à la même unité ; elle pénalise davantage les erreurs importantes.
- **R²** : mesure de référence à interpréter avec prudence ; ce n’est pas un pourcentage de prédictions « exactes ».

Pour une cible catégorielle, choisir un classifieur (par exemple `LogisticRegression`) et des métriques de classification. Pour des classes déséquilibrées, ne pas se limiter au taux de bonnes réponses : examiner la matrice de confusion, la précision, le rappel et le F1 en fonction du coût métier des erreurs.

## Application au Projet 8

La fiche du [[01-Projets/Projet 8 - Analyse de l'évolution immobilière avec Python|Projet 8]] reste l’endroit où suivre l’avancement propre au projet. Cette méthode Machine Learning est réutilisable dans d’autres analyses.

- Pour estimer une valeur immobilière, traiter la valeur comme cible de régression et interpréter l’erreur dans son unité (par exemple en euros).
- Pour une prédiction portant sur une période future, réserver les années les plus récentes au test au lieu de mélanger les périodes aléatoirement.
- Pour un essai de classification, vérifier d’abord que les classes et leurs étiquettes sont définies de façon cohérente.
- Pour k-means, séparer la recherche de groupes de toute question de prédiction d’un prix : le clustering n’utilise pas de cible.
- Conserver les limites des données, le protocole de validation et l’interprétation des résultats dans le notebook et dans la présentation.

## Parcours OpenClassrooms

### Partie 1 — Découvrez les grands principes du Machine Learning

- [Tirez un maximum de ce cours](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8296611-tirez-un-maximum-de-ce-cours)
- [Abordez le domaine d’application du Machine Learning](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8296925-abordez-le-domaine-d-application-du-machine-learning)
- [Découvrez les notions de modèle et d’algorithme](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297197-decouvrez-les-notions-de-modele-et-d-algorithme)
- [Passez d’une problématique business à la mise en production](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297367-passez-d-une-problematique-business-a-la-mise-en-production)
- [Quiz — Découvrir les grands principes](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/exercises/5022)

### Partie 2 — Manipulez les fonctions de base d’un modèle prédictif

- [Évaluez la performance d’un modèle prédictif](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8297644-evaluez-la-performance-d-un-modele-predictif)
- [Découvrez le principe de la régression linéaire](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298139-decouvrez-le-principe-de-la-regression-lineaire)
- [Classifiez les données avec la régression logistique](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298609-classifiez-les-donnees-avec-la-regression-logistique)
- [Partitionnez les données avec k-means](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8298902-partitionnez-les-donnees-avec-k-means)
- [Quiz — Manipuler les fonctions de base](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/exercises/5023)

### Partie 3 — Transformez vos jeux de données

- [Comprenez le rôle central du jeu de données](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299062-comprenez-le-role-central-du-jeu-de-donnees)
- [Améliorez un jeu de données](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299343-ameliorez-un-jeu-de-donnees)
- [Transformez les variables pour faciliter l’apprentissage du modèle](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299647-transformez-les-variables-pour-faciliter-l-apprentissage-du-modele)
- [Quiz — Transformer des jeux de données](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/exercises/5024)

### Partie 4 — Optimisez les performances d’un modèle

- [Améliorez le modèle](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8299917-ameliorez-le-modele)
- [Augmentez la robustesse de vos modèles](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8300129-augmentez-la-robustesse-de-vos-modeles)
- [Découvrez l’apprentissage d’ensemble avec les forêts aléatoires](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/8300349-decouvrez-l-apprentissage-d-ensemble-avec-les-forets-aleatoires)
- [Quiz — Optimiser les performances](https://openclassrooms.com/fr/courses/8063076-initiez-vous-au-machine-learning/exercises/5025)

## Documentation de référence

- [scikit-learn — Prise en main](https://scikit-learn.org/stable/getting_started.html)
- [Pipelines et transformations de colonnes](https://scikit-learn.org/stable/modules/compose.html)
- [Découpage et validation croisée](https://scikit-learn.org/stable/modules/cross_validation.html)
- [Évaluation et métriques](https://scikit-learn.org/stable/modules/model_evaluation.html)
- [Éviter les pièges courants et les fuites de données](https://scikit-learn.org/stable/common_pitfalls.html)
