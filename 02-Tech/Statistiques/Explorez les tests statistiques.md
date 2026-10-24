# Explorez les tests statistiques

> [Cours OpenClassrooms](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques) — niveau moyen, durée indicative de 12 h. Le cours indique une mise à jour au 23 janvier 2025.
>
> Cette fiche transforme le parcours en guide réutilisable : préparer une analyse, choisir un test, l’exécuter et présenter ses limites.

## Objectifs et prérequis

Le cours couvre la préparation d’une analyse, le choix des tests selon le type de variables, leur exécution et l’interprétation des résultats, puis leur communication. Il suppose une pratique de l’analyse de données avec Python. Les outils indiqués sont Anaconda, Python, Jupyter Notebook, NumPy et GitHub.

- [[02-Tech/Python/Index Python|Index Python]]
- [[02-Tech/Notebook/00-Accueil-MOC|Analyse de données et notebooks]]
- [[02-Tech/Machine Learning/Initiez-vous au Machine Learning|Guide Machine Learning]]
- [Cours OpenClassrooms — Initiez-vous à Python pour l’analyse de données](https://openclassrooms.com/fr/courses/6204541-initiez-vous-a-python-pour-l-analyse-de-donnees)
- [Documentation officielle SciPy — statistiques](https://docs.scipy.org/doc/scipy/reference/stats.html)

## Synthèse du parcours, leçon par leçon

Le fil rouge du cours est l’analyse de données de l’entreprise fictive VertiGo. Les leçons suivent le cycle complet : cadrer la question, constituer et préparer les données, sélectionner puis exécuter les tests, interpréter les résultats et les communiquer. Cette synthèse aide à retrouver les notions ; les liens des leçons et des quiz restent disponibles dans le parcours ci-dessous.

### Partie 1 — Établissez les bases statistiques

#### 1. [Tirez un maximum de ce cours](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8495938-tirez-un-maximum-de-ce-cours)

Le cours avance de la préparation de l’étude vers l’exécution des tests et la présentation des conclusions. Il s’appuie sur Python et sur les fichiers VertiGo, avec des exercices à reproduire et des quiz pour vérifier les acquis. Le principe à retenir : une analyse statistique ne commence pas par le choix d’un test, mais par une question claire et des données exploitables.

#### 2. [Analysez les besoins](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496074-analysez-les-besoins)

- Formuler un objectif SMART : spécifique, mesurable, atteignable, pertinent et défini dans le temps.
- Décrire le contexte de collecte et les facteurs externes susceptibles d’influencer les observations.
- Définir les variables utiles, leur rôle et la population étudiée, puis écrire une hypothèse testable reliant ces variables.
- Une hypothèse doit être formulée avant le test et avec des variables mesurables ou catégorisables.

#### 3. [Collectez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496218-collectez-les-donnees)

- Les sources possibles incluent les enquêtes, les bases de données, les capteurs et les sources web. Vérifier leur fiabilité, leur validité et leur adéquation avec la question.
- Distinguer données quantitatives, qualitatives et mixtes. Une date calendrier ne devient une mesure numérique pertinente qu’après une transformation définie, par exemple le calcul d’un délai.
- Si toute la population ne peut pas être étudiée, sélectionner un échantillon représentatif : tirage aléatoire, stratifié, systématique ou par grappes.
- Une taille d’échantillon doit concilier la précision recherchée, la diversité de la population et les moyens disponibles.

#### 4. [Préparez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496366-preparez-les-donnees)

- Contrôler les valeurs manquantes, les erreurs, les doublons, les catégories incohérentes et les valeurs aberrantes.
- Choisir le traitement selon le contexte : corriger, exclure, imputer ou conserver une valeur atypique après vérification. Une imputation par moyenne ou médiane n’est pas automatiquement sans biais.
- Transformer ou agréger les données pour répondre à la question, par exemple calculer une moyenne d’évaluation par type de voyage.
- Garder une trace des filtres, corrections, exclusions et transformations pour rendre l’analyse contrôlable.

#### 5. [Visualisez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496626-visualisez-les-donnees)

- Choisir le graphique selon la question : histogramme pour une distribution, barres pour comparer des catégories, courbe pour une évolution temporelle, nuage de points pour explorer une relation entre deux variables numériques.
- La moyenne et la médiane décrivent le centre ; l’histogramme montre aussi la dispersion, l’asymétrie, les groupes et les valeurs atypiques.
- Une moyenne mobile peut lisser les variations de court terme d’une série temporelle.
- Les graphiques servent à explorer les données, vérifier les hypothèses de test et communiquer les résultats. Ils montrent des tendances possibles, mais ne démontrent pas à eux seuls une causalité.

### Partie 2 — Sélectionnez le type de tests statistiques

#### 6. [Déterminez la distribution des données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496871-determinez-la-distribution-des-donnees)

- Une distribution décrit la manière dont les valeurs se répartissent. La moyenne et la médiane décrivent le centre ; la variance et l’écart-type décrivent l’étalement.
- Une distribution gaussienne est approximativement symétrique et en forme de cloche ; sa moyenne et son écart-type la caractérisent.
- Les lois binomiale et de Poisson modélisent d’autres situations, notamment un nombre de succès sur des essais et un nombre d’événements dans un intervalle.
- Commencer par une visualisation de la distribution avant de décider si une hypothèse de normalité est plausible.

#### 7. [Testez la normalité des données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497034-testez-la-normalite-des-donnees)

- Le test de Shapiro–Wilk fournit une statistique W et une valeur p. Sous l’hypothèse nulle, les données sont compatibles avec une distribution normale.
- Si p est inférieure au seuil choisi, on rejette cette hypothèse ; si p est supérieure, on ne la rejette pas, sans pour autant prouver la normalité.
- Compléter le test par un histogramme et, selon le besoin, un graphique quantile-quantile. Vérifier quelle distribution doit être normale pour le test choisi : parfois il s’agit des résidus ou des valeurs dans chaque groupe.
- Shapiro–Wilk est utile pour les petits et moyens échantillons, mais les grands échantillons peuvent rendre le test sensible à de faibles écarts sans conséquence pratique.

#### 8. [Identifiez les tests quantitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497140-identifiez-les-tests-quantitatifs-pertinents)

- **Pearson** mesure la force et le sens d’une relation linéaire entre deux variables numériques. Examiner le nuage de points, la linéarité, l’indépendance et l’influence des valeurs extrêmes.
- **Spearman** compare les rangs et mesure une relation monotone, sans exiger la normalité ni une relation strictement linéaire. Il convient aussi à des variables ordinales.
- Le coefficient varie de −1 à +1 : le signe indique le sens de la relation et sa valeur absolue sa force. La valeur p renseigne sur la compatibilité des données avec l’hypothèse d’absence de corrélation.
- Examiner des sous-groupes peut révéler des relations différentes que le coefficient global masque. Aucune corrélation ne prouve une causalité.

#### 9. [Identifiez les tests qualitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497325-identifiez-les-tests-qualitatifs-pertinents)

- Construire un tableau de contingence pour croiser les fréquences de deux variables catégorielles.
- Le test du khi-deux compare les fréquences observées aux fréquences attendues et s’utilise lorsque les effectifs attendus sont suffisants.
- Le test exact de Fisher est surtout adapté aux petits échantillons et aux tableaux 2 × 2.
- La valeur p s’interprète avec les hypothèses et les effectifs attendus. Une carte de chaleur ou un tableau lisible aide à repérer les catégories qui contribuent à l’association.

#### 10. [Intégrez des approches mixtes](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497415-integrez-des-approches-mixtes)

Quand on compare une mesure numérique entre catégories indépendantes, le nombre de groupes et les hypothèses du test guident le choix :

- Deux groupes : test t pour comparer les moyennes si les conditions sont adaptées ; test de Welch si l’égalité des variances est douteuse ; Mann–Whitney comme méthode fondée sur les rangs si l’approche paramétrique ne convient pas.
- Trois groupes ou plus : ANOVA ; elle indique si au moins un groupe diffère, mais pas lesquels. Prévoir des comparaisons post-hoc adaptées si l’ANOVA est significative.
- Kruskal–Wallis est une alternative fondée sur les rangs pour plusieurs groupes indépendants.
- Si les mêmes personnes ou objets sont mesurés plusieurs fois, choisir un test apparié : l’indépendance des observations ne doit pas être supposée à tort.

### Partie 3 — Exécutez et interprétez les tests statistiques

#### 11. [Analysez et interprétez les données quantitatives](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497807-analysez-et-interpretez-les-donnees-quantitatives)

- Pour Pearson et Spearman, sélectionner les paires complètes, visualiser la relation, calculer le coefficient et sa valeur p, puis interpréter direction et ampleur.
- Interpréter un coefficient avec son contexte, son incertitude et les sous-groupes éventuels. Un résultat global peut cacher des relations différentes selon les groupes.
- Une valeur p très petite ne mesure ni la taille de l’effet ni son importance métier. Rapporter les deux séparément.
- Une relation entre dépenses publicitaires et réservations peut guider une enquête supplémentaire, mais une corrélation seule ne justifie pas une conclusion causale.

#### 12. [Examinez les relations qualitatives](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498133-examinez-les-relations-qualitatives)

- Pour Fisher, construire un tableau 2 × 2 et rapporter notamment l’odds ratio et la valeur p. Un odds ratio proche de 1 correspond à des chances similaires entre groupes.
- Pour le khi-deux, rapporter la statistique, les degrés de liberté, la valeur p et les effectifs attendus ; contrôler que les conditions de fréquence sont satisfaites.
- La conclusion porte sur l’existence d’éléments en faveur d’une association, pas sur sa causalité.
- Un tableau de contingence ou une carte de chaleur complète le test en montrant les catégories et fréquences concernées.

#### 13. [Établissez des associations mixtes](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498349-etablissez-des-associations-mixtes)

- Comparer une variable numérique entre groupes avec un boxplot aide à comprendre les distributions avant le test.
- Pour deux groupes, lire la statistique t et la valeur p ; pour plusieurs groupes, l’ANOVA compare la variation entre groupes à la variation au sein des groupes avec une statistique F.
- Vérifier indépendance, forme des distributions et variances ; utiliser une alternative par rangs si les conditions de l’approche paramétrique ne sont pas raisonnables.
- Après une ANOVA significative, effectuer des comparaisons post-hoc avec correction pour identifier les groupes concernés. Une valeur p supérieure au seuil signifie que les données ne suffisent pas à établir une différence, pas que les groupes sont identiques.

### Partie 4 — Présentez vos résultats

#### 14. [Soulignez les défis liés à votre étude statistique](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498504-soulignez-les-defis-lies-a-votre-etude-statistique)

- Signaler les limites des données, de l’échantillonnage, de la période étudiée et des hypothèses propres aux tests.
- L’erreur de type I est un faux positif ; l’erreur de type II est un faux négatif. La taille de l’échantillon influe sur la puissance et la précision.
- Un grand échantillon peut rendre statistiquement significatif un effet faible en pratique ; interpréter aussi l’ampleur de l’effet et ses conséquences.
- Distinguer corrélation et causalité, et rechercher les variables de confusion qui peuvent influencer les deux variables étudiées.

#### 15. [Élaborez votre rapport statistique](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498604-elaborez-votre-rapport-statistique)

Un rapport professionnel peut suivre cette structure :

1. **Introduction** : contexte, question, justification et objectifs.
2. **Méthodologie** : sources, population et échantillon, variables, nettoyage, tests choisis et raisons du choix.
3. **Résultats** : statistiques, valeurs p, mesures d’effet et visualisations avec titres et légendes.
4. **Limites** : qualité des données, hypothèses, biais et portée des conclusions.
5. **Conclusion** : réponse à la question et recommandations proportionnées aux résultats.

Documenter les sources et les transformations rend l’analyse traçable et reproductible.

#### 16. [Communiquez vos découvertes à l’oral](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498616-communiquez-vos-decouvertes-a-l-oral)

- Adapter le vocabulaire au public, limiter le jargon et relier chaque résultat à la question et aux hypothèses de départ.
- Expliquer les chiffres par leur portée concrète, utiliser des graphiques lisibles et sélectionner un message principal par visuel.
- Traduire les résultats en implications et recommandations, sans dépasser ce que l’étude démontre.
- Répéter, gérer le temps, prévoir les questions et utiliser une histoire ou une question au public pour soutenir l’attention.

## Démarche complète

1. **Définir la question.** Préciser ce qu’on cherche à comprendre ou comparer, pourquoi, sur quelle population et à quelle période. Rendre l’objectif concret et mesurable.
2. **Examiner le contexte.** Documenter l’origine des données, la période, les conditions de collecte, les biais possibles et les événements qui peuvent influencer les résultats.
3. **Définir les variables.** Identifier la mesure ou catégorie étudiée, son unité, la variable cible, les groupes comparés et la relation attendue.
4. **Formuler les hypothèses.** Écrire avant le calcul l’hypothèse nulle (H_0) et l’hypothèse alternative (H_1), puis fixer le seuil (alpha) en fonction du contexte.
5. **Préparer les données.** Contrôler les types, valeurs manquantes, doublons, valeurs extrêmes et catégories. Garder une trace des exclusions ou transformations.
6. **Explorer avant de tester.** Calculer des statistiques descriptives et visualiser les distributions ou relations. Un graphique aide à détecter une forme, une tendance, un groupe atypique ou une erreur.
7. **Choisir le test.** Tenir compte du type des variables, du nombre de groupes, de l’indépendance ou du caractère apparié des observations et des hypothèses de la méthode.
8. **Exécuter et interpréter.** Rapporter la statistique du test et la valeur p, mais aussi l’ampleur de l’effet, son incertitude et la taille de l’échantillon.
9. **Conclure sans dépasser les données.** Distinguer une association d’une causalité, signaler les limites et expliquer ce que le résultat permet réellement de décider.

### Objectifs SMART

Un objectif d’analyse utile est spécifique, mesurable, atteignable, pertinent et défini dans le temps. Le contexte des données importe autant que le test : saison, promotion, période de collecte et biais d’échantillonnage peuvent changer l’interprétation.

![Schéma OpenClassrooms des objectifs SMART](https://user.oc-static.com/upload/2024/10/14/17288910915849_P1C2-a.png)

*Image du chapitre [Analysez les besoins](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496074-analysez-les-besoins).*

## Choisir une famille de tests

| Question | Variables et plan | Tests possibles | Points à vérifier |
|---|---|---|---|
| La distribution d’une mesure est-elle compatible avec la normalité ? | Une variable numérique | Shapiro–Wilk, complété par un histogramme ou un graphique quantile-quantile | La normalité est une hypothèse de certaines méthodes, pas une fin en soi. Pour de grands échantillons, un test peut signaler des écarts faibles mais peu importants en pratique. |
| Deux mesures numériques évoluent-elles ensemble ? | Deux variables numériques | Pearson pour une relation linéaire ; Spearman pour une relation monotone ou des rangs | Visualiser les points, vérifier l’indépendance et rechercher les valeurs influentes. Une corrélation n’établit pas une causalité. |
| Deux variables catégorielles sont-elles associées ? | Deux catégories, échantillons indépendants | Khi-deux ; Fisher exact notamment pour un tableau 2 × 2 peu fourni | Examiner les effectifs attendus. Le seuil de 5 est un repère fréquent, pas une règle universelle. |
| Deux groupes indépendants ont-ils des mesures numériques différentes ? | Une mesure numérique et deux groupes | Test t de Welch ; Mann–Whitney comme méthode fondée sur les rangs | Vérifier l’indépendance et la forme des distributions. Mann–Whitney teste les distributions, pas toujours seulement une différence de médianes. |
| Trois groupes indépendants ou plus diffèrent-ils ? | Une mesure numérique et plusieurs groupes | ANOVA ; Kruskal–Wallis comme méthode fondée sur les rangs | L’ANOVA indique si au moins un groupe diffère ; elle ne désigne pas à elle seule lequel. Des comparaisons après le test doivent être planifiées et corrigées si nécessaire. |
| Les mêmes personnes ou objets sont-ils mesurés plusieurs fois ? | Mesures appariées ou répétées | Test adapté aux données appariées, par exemple t apparié ou Wilcoxon signé-rang | Ne pas traiter des mesures répétées comme des observations indépendantes. |

Pour une comparaison à deux groupes, le test t de Welch accepte des variances inégales et constitue souvent un point de départ plus prudent que le test t classique. Le choix final dépend du plan de collecte et des hypothèses, pas uniquement du résultat d’un test de normalité.

### Arbres de décision du cours

![Choisir entre Pearson et Spearman](https://user.oc-static.com/upload/2024/10/14/17288931782074_P2C3-a.png)

*Image du chapitre [Identifiez les tests quantitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497140-identifiez-les-tests-quantitatifs-pertinents).*

![Choisir entre le khi-deux et Fisher](https://user.oc-static.com/upload/2024/10/14/17288933892929_P2C4-a.png)

*Image du chapitre [Identifiez les tests qualitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497325-identifiez-les-tests-qualitatifs-pertinents).*

![Choisir un test pour comparer des groupes](https://user.oc-static.com/upload/2024/10/14/17288934798407_P2C5-a%20%20%281%29.png)

*Image du chapitre [Intégrez des approches mixtes](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497415-integrez-des-approches-mixtes).*

## Interpréter la valeur p

- Une valeur p n’est pas la probabilité que (H_0) soit vraie. Elle mesure à quel point les résultats observés sont compatibles avec (H_0), selon le test et ses hypothèses.
- Si (p < alpha), on rejette (H_0) au seuil choisi : les données apportent des éléments contre elle.
- Si (p geq alpha), on ne rejette pas (H_0). Cela ne prouve pas l’absence d’effet ou d’association ; les données peuvent aussi manquer de précision ou de puissance.
- Une différence statistiquement significative peut être faible en pratique. Toujours rapporter l’effet observé et son incertitude, pas seulement « significatif » ou « non significatif ».
- Répéter beaucoup de tests augmente le risque de faux positifs. Définir les questions à l’avance et documenter les tests multiples.
- Une corrélation, même forte et significative, ne prouve pas qu’une variable cause l’autre.

Pour un test de normalité, (H_0) pose que les données sont compatibles avec une distribution normale. Une valeur p supérieure à (alpha) signifie qu’on ne rejette pas cette hypothèse ; elle ne « prouve » pas la normalité. Il faut aussi regarder la distribution. Dans certains tests, l’hypothèse porte surtout sur les résidus ou les valeurs à l’intérieur de chaque groupe, et non sur toutes les données réunies.

## Modèles de code Python

Les fonctions ci-dessous utilisent SciPy. Pour comparer deux colonnes, supprimer les lignes incomplètes en gardant les paires alignées. Les résultats SciPy exposent généralement les champs `statistic` et `pvalue`.

```python
import pandas as pd
from scipy import stats

# Normalité d'une mesure : toujours compléter par une visualisation.
mesure = df["ma_mesure"].dropna()
normalite = stats.shapiro(mesure)
print(normalite.statistic, normalite.pvalue)

# Association entre deux variables numériques.
paires = df[["variable_x", "variable_y"]].dropna()
pearson = stats.pearsonr(paires["variable_x"], paires["variable_y"])
spearman = stats.spearmanr(paires["variable_x"], paires["variable_y"])
print("Pearson :", pearson.statistic, pearson.pvalue)
print("Spearman :", spearman.statistic, spearman.pvalue)

# Association entre deux variables catégorielles.
table = pd.crosstab(df["categorie_a"], df["categorie_b"])
khi2 = stats.chi2_contingency(table)
print("Khi-deux :", khi2.statistic, khi2.pvalue)
print("Effectifs attendus :\n", khi2.expected_freq)

# Fisher ne s'applique ici qu'à un tableau 2 x 2.
if table.shape == (2, 2):
    fisher = stats.fisher_exact(table)
    print("Fisher :", fisher.statistic, fisher.pvalue)

# Comparer deux groupes indépendants : test t de Welch.
groupe_a = df.loc[df["groupe"] == "A", "mesure"].dropna()
groupe_b = df.loc[df["groupe"] == "B", "mesure"].dropna()
welch = stats.ttest_ind(groupe_a, groupe_b, equal_var=False)
mann_whitney = stats.mannwhitneyu(groupe_a, groupe_b, alternative="two-sided")
print("Welch :", welch.statistic, welch.pvalue)
print("Mann-Whitney :", mann_whitney.statistic, mann_whitney.pvalue)

# Trois groupes indépendants ou plus.
groupes = [
    df.loc[df["groupe"] == nom, "mesure"].dropna()
    for nom in ["A", "B", "C"]
]
anova = stats.f_oneway(*groupes)
kruskal = stats.kruskal(*groupes)
print("ANOVA :", anova.statistic, anova.pvalue)
print("Kruskal-Wallis :", kruskal.statistic, kruskal.pvalue)
```

Ces appels illustrent les fonctions, mais ne remplacent pas le contrôle des conditions d’application. Le code n’applique pas automatiquement des corrections de comparaisons multiples ni les tests post-hoc nécessaires après une ANOVA significative.

### Trame courte de compte rendu

> **Question :** …  
> **Données et période :** …  
> **Hypothèses :** (H_0) … / (H_1) …  
> **Test et justification :** …  
> **Effectif :** …  
> **Résultat :** statistique …, valeur p …, effet estimé …  
> **Conclusion :** au seuil (alpha = …), …  
> **Limites :** biais, hypothèses, données manquantes, causalité non établie…

## Fil conducteur du cours : VertiGo

Le cours utilise des données de clients et d’entreprise d’une agence de voyages, avec une version brute et une version nettoyée des fichiers. Les liens de téléchargement figurent dans le chapitre d’introduction du cours.

- [Données clients VertiGo — brut et nettoyé](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8495938-tirez-un-maximum-de-ce-cours)
- [Données entreprise VertiGo — brut et nettoyé](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8495938-tirez-un-maximum-de-ce-cours)
- [Fiche résumé PDF du cours](https://course.oc-static.com/courses/8313631/Course%2BSummary%2B%5BExplorez%2Bles%2Btests%2Bstatistiques%2Bavec%2BPython%5D.pdf)

## Parcours OpenClassrooms

### Partie 1 — Établissez les bases statistiques

- [Tirez un maximum de ce cours](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8495938-tirez-un-maximum-de-ce-cours)
- [Analysez les besoins](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496074-analysez-les-besoins)
- [Collectez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496218-collectez-les-donnees)
- [Préparez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496366-preparez-les-donnees)
- [Visualisez les données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496626-visualisez-les-donnees)
- [Quiz — Établir les bases statistiques](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/exercises/5143)

### Partie 2 — Sélectionnez le type de tests statistiques

- [Déterminez la distribution des données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8496871-determinez-la-distribution-des-donnees)
- [Testez la normalité des données](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497034-testez-la-normalite-des-donnees)
- [Identifiez les tests quantitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497140-identifiez-les-tests-quantitatifs-pertinents)
- [Identifiez les tests qualitatifs pertinents](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497325-identifiez-les-tests-qualitatifs-pertinents)
- [Intégrez des approches mixtes](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497415-integrez-des-approches-mixtes)
- [Quiz — Sélectionner le type de tests statistiques](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/exercises/5145)

### Partie 3 — Exécutez et interprétez les tests statistiques

- [Analysez et interprétez les données quantitatives](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8497807-analysez-et-interpretez-les-donnees-quantitatives)
- [Examinez les relations qualitatives](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498133-examinez-les-relations-qualitatives)
- [Établissez des associations mixtes](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498349-etablissez-des-associations-mixtes)
- [Quiz — Exécuter et interpréter les tests statistiques](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/exercises/5146)

### Partie 4 — Présentez vos résultats

- [Soulignez les défis liés à votre étude statistique](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498504-soulignez-les-defis-lies-a-votre-etude-statistique)
- [Élaborez votre rapport statistique](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498604-elaborez-votre-rapport-statistique)
- [Communiquez vos découvertes à l’oral](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/8498616-communiquez-vos-decouvertes-a-l-oral)
- [Quiz — Présenter les résultats](https://openclassrooms.com/fr/courses/8313631-explorez-les-tests-statistiques/exercises/5147)

## Références techniques officielles

- [Guide SciPy — statistiques](https://docs.scipy.org/doc/scipy/reference/stats.html)
- [Shapiro–Wilk](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.shapiro.html)
- [Corrélation de Pearson](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html)
- [Corrélation de Spearman](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html)
- [Test du khi-deux d’indépendance](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.contingency.chi2_contingency.html)
- [Test exact de Fisher](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.fisher_exact.html)
- [Test t pour deux échantillons indépendants](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html)
- [ANOVA à un facteur](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.f_oneway.html)
- [Mann–Whitney U](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html)
- [Kruskal–Wallis](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kruskal.html)

## Liens avec les autres domaines

- Les tests d’hypothèses répondent à des questions d’inférence. L’évaluation d’un modèle prédictif porte plutôt sur sa capacité à généraliser : [[02-Tech/Machine Learning/Initiez-vous au Machine Learning|Machine Learning]].
- Pour les traitements des données et l’exploration dans un notebook : [[02-Tech/Notebook/00-Accueil-MOC|Analyse de données et notebooks]].
