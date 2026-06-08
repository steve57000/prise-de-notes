# Consolidez de grandes quantités de données (Excel)

Lorsque vous travaillez sur plusieurs périodes ou plusieurs fichiers, il devient nécessaire de **regrouper les données** pour poursuivre l’analyse.

👉 Consolider = regrouper plusieurs listes issues de différents onglets ou fichiers en une seule source exploitable.

---

# 1️⃣ Consolider plusieurs plages de données

## 🎯 Objectif

Regrouper plusieurs tableaux identiques (même structure) provenant de périodes différentes.

Exemple :
- Janvier
- Février
- Mars
- Juillet (avec un nouveau pays)

Chaque tableau possède :
- Les mêmes colonnes
- Les mêmes indicateurs
- Une structure identique

---

## ⚙️ Étapes pour consolider

1. Créez une **nouvelle feuille**
2. Onglet **Données**
3. Cliquez sur **Consolider**

### Paramétrage :

- Fonction : **Somme**
- Sélectionnez la première plage (inclure les titres)
- Cliquez sur **Ajouter**
- Répétez pour chaque tableau
- Cochez :
  - ✅ Ligne du haut
  - ✅ Colonne de gauche
  - ✅ Lier aux données source

Cliquez sur **OK**

---

## ✅ Résultat

Excel crée :
- Un tableau consolidé
- Des regroupements (+ / -) pour voir le détail
- Une mise à jour automatique si les données source changent

---

# 2️⃣ Consolider avec un Tableau Croisé Dynamique (TCD multisource)

Méthode plus puissante que "Consolider".

👉 Permet de combiner des données complémentaires.

Exemple :
- Tableau1 : ventes
- Tableau2 : informations pays
- Champ commun : Pays

---

## ⚙️ Étapes

### 1. Transformer les données en tableaux Excel
Nommer :
- Tableau1
- Tableau2

---

### 2. Créer un TCD avec modèle de données

1. Onglet **Insertion**
2. Cliquez sur **Tableau croisé dynamique**
3. Dans la source, indiquez : `Tableau1`
4. Cochez :  
   ✅ Ajouter ces données au modèle de données
5. Cliquez sur OK

---

### 3. Ajouter le deuxième tableau

Dans le panneau de champs :
- Cliquez sur **Tous**
- Sélectionnez un champ de Tableau2

Excel demandera de créer une relation.

---

### 4. Créer la relation

Indiquez :
- Champ commun dans Tableau1
- Champ commun dans Tableau2

Exemple :
Pays ↔ Pays

Validez.

---

## 🎯 Résultat

Vous obtenez un TCD capable de :
- Croiser les données des deux tableaux
- Faire des analyses combinées
- Remplacer efficacement RECHERCHEV()

---

# 🔎 Comparaison des méthodes

| Méthode         | Utilisation              | Avantage         |
| --------------- | ------------------------ | ---------------- |
| Consolider      | Tableaux identiques      | Simple et rapide |
| TCD multisource | Tableaux complémentaires | Analyse avancée  |

---

# 📌 Bonnes pratiques

✔ Toujours avoir une structure identique pour consolider  
✔ Inclure les titres dans les plages  
✔ Utiliser le modèle de données pour relier plusieurs tableaux  
✔ Vérifier les relations entre champs communs  

---

# 🎯 À retenir

- La fonction **Consolider** regroupe des tableaux identiques.
- Le **TCD multisource** permet de croiser plusieurs tableaux via un champ commun.
- Le modèle de données remplace avantageusement les multiples RECHERCHEV().
- Excel peut gérer de très grandes quantités de données structurées.

Vous savez désormais consolider et exploiter des volumes importants de données. 🚀
