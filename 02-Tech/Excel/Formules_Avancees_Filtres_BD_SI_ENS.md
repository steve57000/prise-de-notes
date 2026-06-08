# Saisissez des formules avancées (Excel)

Vos données sont propres et votre maquette prête : il est temps de les exploiter avec des **formules avancées**.

---

## 1) Utiliser les filtres élaborés (Avancé)

Objectif : répondre à une question complexe  
Exemple :  
> Les pantalons de la collection 2018 se vendent-ils aussi bien que ceux de 2020 ?

### 1.1 Créer une zone de critères

La zone de critères contient :
- Les **noms exacts des colonnes**
- Les **conditions de filtre**

Exemple :
- Produit → `Pantalon`
- Jours → `>730` (plus de 2 ans)

⚠️ La ligne de titre doit être incluse dans la zone de critères.

---

### 1.2 Appliquer le filtre avancé

1. Sélectionner une cellule du tableau
2. Onglet **Données**
3. Cliquer sur **Avancé**
4. Vérifier la plage de données
5. Sélectionner la zone de critères
6. OK

Résultat : extraction précise des lignes correspondant aux critères.

Pour supprimer le filtre :  
Données → **Effacer**

---

### 1.3 Condition ET / OU

- Critères sur **la même ligne** → condition **ET**
- Critères sur **des lignes différentes** → condition **OU**

Exemple :
- Produit = Pantalon  
OU  
- Jours > 730

---

## 2) Nommer une plage de cellules

Donner un nom rend les formules plus lisibles.

### Étapes :
1. Sélectionner le tableau
2. Dans la zone Nom (à gauche de la barre de formule)
3. Saisir un nom (ex : `Plage_Nommée`)
4. Entrée

Gestion :
Formules → **Gestionnaire de noms**

---

## 3) Fonctions de base de données (BD)

### BDSOMME()

Permet de sommer un champ selon des critères écrits dans des cellules.

Syntaxe :
`=BDSOMME(Base; "Champ"; Zone_Critères)`

Exemple :
`=BDSOMME(Plage_Nommée;"Sales";R2:S3)`

Autres fonctions BD :
- BDMOYENNE()
- BDNBVAL()
- BDMIN()
- BDMAX()

---

## 4) Fonctions conditionnelles simples

### SOMME.SI()

Additionne selon **1 seul critère**

Syntaxe :
`=SOMME.SI(plage_critère; critère; plage_somme)`

Exemple :
`=SOMME.SI(J:J;"Robe";I:I)`

---

### NB.SI()

Compte le nombre de lignes répondant à un critère.

---

## 5) Fonctions à critères multiples (.ENS)

### SOMME.SI.ENS()

Permet d’additionner selon plusieurs critères.

Syntaxe :
`=SOMME.SI.ENS(plage_somme; plage_critère1; critère1; plage_critère2; critère2; ...)`

Exemple :
`=SOMME.SI.ENS(I:I;G:G;"2019-T2";E:E;"Haut")`

---

### Astuce : tableau à double entrée

En utilisant :
- Références absolues `$`
- En-têtes de lignes
- En-têtes de colonnes

➡️ Une seule formule peut remplir tout le tableau.

---

## 6) Explorer les fonctions Excel

Excel contient près de **500 fonctions** :
- financières
- statistiques
- comptables
- immobilières
- dates
- texte
- etc.

Souvent plus simple et plus fiable que recréer les calculs manuellement.

---

## Exercices possibles

- Compter les ventes de chaussettes en France (filtre avancé)
- Créer une plage nommée “Ma_BDD”
- Utiliser BDNBVAL() avec Ma_BDD
- Calculer la somme des robes vertes avec SOMME.SI.ENS()

---

## À retenir

- Le filtre avancé permet des extractions complexes (ET / OU)
- SOMME.SI() et NB.SI() → 1 critère
- SOMME.SI.ENS() → critères multiples
- BDSOMME() et fonctions BD → basées sur zone de critères
- Les plages nommées rendent les formules plus lisibles

Les formules avancées permettent de transformer un tableau en véritable outil d’analyse.
