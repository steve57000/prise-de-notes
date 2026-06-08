# Utilisez les outils d’analyse pour atteindre vos objectifs (Excel)

Excel ne sert pas uniquement à calculer et afficher des données.  
Il permet aussi de **résoudre des problèmes stratégiques**, tester des hypothèses et optimiser des résultats.

---

# 1️⃣ Atteindre un objectif avec la Valeur Cible

## 🎯 Problème

Objectif : atteindre **150 000 € de ventes**.

Données :
- Prix moyen : 8,20 €
- Charges fixes : 623 €
- Formule :  
  `Résultat = Nombre de ventes × Prix moyen – Charges fixes`

👉 Question : combien d’unités vendre ?

---

## ✅ Utiliser la Valeur Cible

La valeur cible fonctionne lorsqu’il n’y a **qu’une seule inconnue**.

### Étapes :

1. Onglet **Données**
2. Cliquez sur **Analyse de scénarios**
3. Sélectionnez **Valeur cible**
4. Renseignez :
   - Cellule à définir : cellule contenant le résultat
   - Valeur à atteindre : 150000
   - Cellule à modifier : nombre de ventes

Excel teste automatiquement différentes valeurs jusqu’à atteindre l’objectif.

---

# 2️⃣ Résoudre un problème complexe avec le Solveur

Lorsque plusieurs variables et contraintes entrent en jeu, utilisez le **Solveur**.

## 🎯 Objectif

Atteindre 150 000 € en tenant compte :

| Catégorie | Prix moyen | Production max |
|------------|------------|---------------|
| Haut       | 10 €       | 6 000 |
| Bas        | 7 €        | 6 000 |
| Haut & Bas | 15 €       | 4 500 |

Charges fixes : 623 €

---

## ⚙️ Activer le Solveur

1. **Fichier > Options**
2. **Compléments**
3. Cliquez sur **Atteindre**
4. Cochez **Complément Solveur**

---

## 🧮 Configurer le Solveur

Dans l’onglet **Données** → **Solveur**

### Définir :
- Cellule objectif (total des ventes)
- Valeur cible : 150000
- Cellules variables : quantités vendues

### Ajouter les contraintes :
- Quantité ≤ production maximale
- Valeurs entières
- Autres limites si nécessaire

Puis cliquez sur **Résoudre**.

Excel calcule la meilleure combinaison possible.

---

# 3️⃣ Tester différents scénarios

Quand plusieurs hypothèses sont possibles (ex : différents prix), utilisez les **Scénarios**.

---

## 🎯 Exemple

Trois propositions de prix :

| Personne | Haut | Bas | Haut & Bas |
|-----------|------|------|------------|
| Responsable | 9 € | 8 € | 14 € |
| Tim         | 10 € | 7 € | 15 € |
| Rob         | 11 € | 8 € | 13 € |

---

## 🛠 Créer des scénarios

1. Onglet **Données**
2. **Analyse de scénarios**
3. **Gestionnaire de scénarios**
4. Cliquez sur **Ajouter**
5. Sélectionnez les cellules variables (prix)
6. Saisissez les valeurs pour chaque scénario

---

## 📊 Comparer les scénarios

Cliquez sur **Synthèse**

Excel génère automatiquement un tableau comparatif indiquant :

- Les hypothèses
- Les résultats
- Le scénario le plus performant

---

# 🔎 Résumé des outils d’analyse

| Outil | Usage | Complexité |
|--------|--------|------------|
| Valeur cible | 1 inconnue | Simple |
| Solveur | Plusieurs variables + contraintes | Avancé |
| Scénarios | Comparer plusieurs hypothèses | Stratégique |

---

# 🎯 À retenir

✔ La **Valeur Cible** résout un problème simple à une inconnue.  
✔ Le **Solveur** optimise une situation avec contraintes multiples.  
✔ Les **Scénarios** comparent différentes hypothèses de décision.  

Ces outils transforment Excel en véritable **outil d’aide à la décision stratégique**.

Excel ne fait pas que calculer…  
Il aide à décider. 🚀
