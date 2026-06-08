# Tableau de bord professionnel : préparation et transformation des données (Excel)

## 1) Caractéristiques d’un tableau à visée professionnelle

Un **tableau de bord** est un **outil d’aide à la décision** : il sert à répondre à une problématique à partir de données, via des **indicateurs** (tableaux et/ou graphiques).

Il doit être :
- **Concis** : idéalement sur **1 écran** (max 3)
- **Synthétique** : pas trop d’indicateurs, police lisible
- **Facile à analyser** : compréhensible même sans connaître les données sources
- **Objectif** : montre points forts/faibles sans jugement

🎯 Finalité : **décider et agir**.

---

## 2) Mission : créer un tableau de bord commercial

Contexte : tu es assistant du responsable des ventes Europe de **Zarigual**.

Questions à résoudre :
1. **État des ventes** en Europe de l’Ouest **par catégorie** et **par trimestre** depuis **2019**
2. Comparaison : **pantalons collection 2018** vs **collection 2020**

Exigences : **pertinent**, **beau**, **présentable**.

---

## 3) Formater un fichier source (le rendre exploitable)

### 3.1 Inspecter le fichier
Objectif : détecter ce que contient le fichier (lignes masquées, infos cachées, etc.).
- **Fichier → Informations**
- Bouton **Inspecter le document**
- Laisser les analyses cochées → **Inspecter**
- Ensuite : supprimer automatiquement ou corriger manuellement selon pertinence

📌 Bon réflexe : inspecter un fichier d’une **source inconnue** ou avant un envoi important.

### 3.2 Transformer en “liste de données”
Une **liste de données** = colonnes (**champs**) + lignes (**enregistrements**), sans “décorations” inutiles.

À supprimer dans l’exemple :
- les lignes d’en-tête “informatives” au-dessus des données
- une colonne vide à gauche
- une ligne vide sous les titres (coupe le lien titres ↔ données)

✅ Résultat : un tableau simple, propre, exploitable.

### 3.3 Alléger le fichier (si trop lourd)
Un fichier devient “lourd” quand il est difficile à envoyer (≈ **10 Mo**).

Problème fréquent : Excel “pense” que des cellules très loin sont utilisées.
Pour trouver la **dernière cellule utilisée** :
- Accueil → **Rechercher et sélectionner** → **Sélectionner des cellules**
- Choisir **Dernière cellule**
- Si elle est “inutile” (format/espaces) : supprimer puis enregistrer

### 3.4 Transposer (si besoin)
But : passer des données **horizontales → verticales** (souvent plus exploitable).

- Copier les données (avec titres)
- Nouvelle feuille → clic droit A1 → **Collage spécial**
- Cocher **Transposé**

---

## 4) Réaliser un tableau de données propre

### 4.1 Supprimer les espaces inutiles
Certaines colonnes contiennent des espaces invisibles (ex : `Country_Cod`), ce qui casse filtres, tris et recherches.

✅ Solution : **SUPPRESPACE()**
- Insérer une colonne
- Exemple : `=SUPPRESPACE(B2)`
- Recopier sur toute la colonne
- Puis **copier-coller en valeurs** (Collage spécial) pour éviter de recalculer 1000+ formules
- Supprimer l’ancienne colonne

### 4.2 Détecter les doublons (visuellement)
Méthode : créer une **colonne de concaténation** puis utiliser la **mise en forme conditionnelle**.

Concaténation (2 façons équivalentes) :
- `=CONCATENER(A2;B2;C2;D2;E2;F2)`
- ou `=A2&B2&C2&D2&E2&F2`

Ensuite :
- Mise en forme conditionnelle → **Nouvelle règle**
- “Valeurs uniques ou en double” → choisir un format (couleur)

📌 Les doublons repérés doivent être validés : parfois il faut les garder, parfois non.

### 4.3 Supprimer les doublons (proprement)
- Onglet **Données** → **Supprimer les doublons**
- Cocher les colonnes qui définissent le doublon (souvent **toutes** si lignes identiques)
- OK → Excel annonce le nombre supprimé

### 4.4 Convertir en “Tableau Excel”
- Sélectionner une cellule du tableau
- **Insertion** → **Mettre sous forme de tableau**
- Confirmer la zone → OK

Avantages :
- filtres automatiques
- 1 ligne sur 2 colorée (lecture)
- formules auto-propagées dans une colonne
- le tableau s’agrandit automatiquement

---

## 5) Adapter les données pour répondre au besoin

### 5.1 Nettoyer des données texte (ex : Categ)
But : rendre les catégories compréhensibles (retirer un préfixe comme `CAT_`).

Fonctions utiles :
- **NBCAR()** : nombre de caractères
- **DROITE()** : extraire la partie droite

Exemple (retirer 4 caractères) :
- D2 : `=NBCAR(C2)`
- E2 : `=DROITE(C2;D2-4)`

### 5.2 Transformer des nombres stockés en texte
Symptômes :
- alignés à gauche
- triangle vert (alerte)

✅ Solution :
- `=CNUM(H2)` → convertit en nombre

Si séparateur décimal incompatible :
- utiliser **VALEURNOMBRE()** (selon cas)

### 5.3 Transformer un champ “Period” texte en vraie date
Objectif : obtenir une date Excel exploitable (ex : `01/01/2020`).

Outils utilisés :
- **GAUCHE()**, **DROITE()**, **NBCAR()**
- **TROUVE()** (position d’un caractère comme “-”)
- **DATE()** (reconstruit une date)

Idée : extraire année + mois → `DATE(année; mois; 1)` puis formater l’affichage (mois court, etc.).

---

## 6) Enrichir le tableau (ajouter des infos + calculs)

### 6.1 Ajouter des données via une table de correspondance

#### RECHERCHEV()
Utile pour récupérer une info depuis une autre feuille/classeur, quand la clé est dans la **1re colonne** de la plage.

Syntaxe :
`=RECHERCHEV(valeur_cherchée; plage; no_colonne; FAUX)`

Exemple :
`=RECHERCHEV(B2;Table_Correspondance!$B$2:$F$40;2;FAUX)`

#### INDEX() + EQUIV()
Solution quand la clé n’est **pas** dans la 1re colonne.

- `EQUIV(valeur; plage; 0)` → trouve la position exacte
- `INDEX(plage; no_ligne)` → renvoie la valeur à cette position

Ensemble : retrouver une valeur dans une table “non compatible” RECHERCHEV.

### 6.2 Créer un champ Trimestre (à partir d’une date)
Excel ne donne pas directement le trimestre → on le calcule.

Exemple de logique :
- `MOIS(date)` → numéro de mois (1 à 12)
- `(mois+2)/3` → prépare le trimestre
- `ENT()` → récupère 1 à 4
- `ANNEE(date)` → année
- `CONCATENER(année;"-T";trimestre)` → ex : `2021-T2`

### 6.3 Calculer un écart entre 2 dates
Deux cas :
- **JOURS()** : écart en jours calendaires (exclut une des deux dates)
- **NB.JOURS.OUVRES()** : jours ouvrés (week-ends exclus, jours fériés optionnels)

Si magasins ouverts tous les jours → utiliser **JOURS()**.
Exemple : `=JOURS(date_fin; date_début)`

⚠️ Ne pas confondre :
- **JOUR()** = numéro du jour (1 à 31)
- **JOURS()** = différence entre 2 dates

---

## À retenir
- Un tableau pro = **concis + synthétique + lisible + objectif**
- Avant analyse : **inspecter**, **nettoyer**, **alléger**, **structurer en liste/tableau**
- Qualité des données : **SUPPRESPACE**, gestion des **doublons**, conversion **texte→nombre/date**
- Enrichissement : **RECHERCHEV** ou **INDEX/EQUIV**
- Besoins business : créer **Trimestres** et **écarts de dates**
