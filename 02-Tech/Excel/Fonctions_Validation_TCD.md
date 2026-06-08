# 🧠 Excel – Fonctions, validation des données et TCD 

## ✅ Objectif
Dans ce chapitre, tu apprends à :
- trouver et utiliser des **fonctions Excel**
- contrôler la saisie avec la **validation des données**
- analyser rapidement un tableau avec un **Tableau Croisé Dynamique (TCD)**

---

# 1) 🧮 Réaliser des calculs grâce aux fonctions

## 🔎 Trouver une fonction
Si tu ne connais pas la fonction, pars du principe qu’elle existe 😉  
Deux façons de la retrouver :

1. **Aide Excel** : touche **F1** → tape ce que tu cherches (fonction + explication)
2. **Liste des fonctions** :
   - Onglet **Formules** → **Insérer une fonction**
   - ou bouton **fx**
   - Fonctions classées par catégories : Finances, Date/Heure, Math & Trigo, Statistiques…

📌 Idée clé : Excel sait faire énormément → sois curieux et explore !

## ✅ Fonction simple : SOMME
Objectif : calculer un total (ex : CA total)

Étapes (ex : en E10) :
1. Sélectionner la cellule résultat (ex : **E10**)
2. Onglet **Accueil** → groupe **Édition**
3. Cliquer sur **Somme**
4. Excel propose une plage (ex : **E4:E9**)
5. Valider avec **Entrée**

## ✅ Variante : MOYENNE
Même principe que SOMME, mais avec **Moyenne**.

---

# 2) 🧠 Fonction plus avancée : SI

## Principe
La fonction **SI** est une fonction **conditionnelle** :
- si une condition est vraie → résultat A
- sinon → résultat B

**Structure :**
`SI(test_logique; valeur_si_vrai; valeur_si_faux)`

## Exemple (prime)
But : donner **500 €** si le CA > **100 000**, sinon **0**.

1. Sélectionner la cellule résultat (ex : **F4**)
2. Bouton **fx** (insérer une fonction)
3. Catégorie **Logique** → choisir **SI**
4. Remplir :
   - **Test logique** : CA > 100000
   - **Valeur si vrai** : 500
   - **Valeur si faux** : 0

📌 Plus tu pratiques SI, plus tu découvriras ses possibilités.

## 🎯 Entraînement conseillé
- Calculer un **délai entre deux dates** (catégorie Date)
- Compter les **cellules vides**
- Compter les cellules contenant un **certain contenu**
➡ Explore un maximum !

---

# 3) ✅ Autoriser / interdire la saisie (Validation des données)

## Pourquoi ?
Pour éviter des saisies différentes qui cassent :
- les **filtres/tris** (ex : “Madame” vs “Mme”)
- certaines **formules** (ex : compter le nombre de “Monsieur”)

➡ On impose une saisie propre et uniforme.

## Comment faire ?
1. Sélectionner les cellules concernées
2. Onglet **Données**
3. Groupe **Outils de données**
4. **Validation des données**
5. Définir les critères

## Les 3 onglets importants
- **Options** : ce qu’on autorise (Tout, Nombre, Date, Liste…)
- **Message de saisie** : message affiché quand l’utilisateur clique dans la cellule (optionnel)
- **Alerte d’erreur** : message si la valeur saisie ne respecte pas la règle (bloquer ou avertir)

## Exemple : liste “Madame / Monsieur”
- Dans **Options** → choisir **Liste**
- Dans **Source** : `Madame;Monsieur`
Résultat : l’utilisateur a une **liste déroulante** et ne peut pas saisir autre chose (ou reçoit une alerte).

---

# 4) 📊 Tableau Croisé Dynamique (TCD)

## C’est quoi ?
Un **TCD** est un tableau récapitulatif qui permet de :
- **croiser** plusieurs critères (mois, vendeurs, familles…)
- faire des **calculs automatiques** (sommes, totaux…)
- créer un **rapport** en quelques clics

---

## ✅ Avant de créer un TCD (règles)
La table source doit :
- avoir **une seule ligne de titres** (en général la ligne 1)
- ne contenir **aucune ligne vide**
- ne contenir **aucune colonne vide**
- être déjà remplie (le TCD dépend des données)

---

## ➕ Créer un TCD
1. Onglet **Insertion**
2. Groupe **Tableaux**
3. **Tableau croisé dynamique**
4. Excel propose la plage de données (modifiable)
5. Choisir l’emplacement :
   - nouvelle feuille (par défaut)
   - ou feuille existante
6. OK

Tu obtiens :
- à droite : **volet des champs** (Mois, Vendeur, Famille, CA…)
- à gauche : la zone du futur TCD

---

## 🧩 Construire le rapport (glisser-déposer)
Zones principales :
- **Lignes**
- **Colonnes**
- **Valeurs** (calculs)
- **Filtres**

Exemple :
- **CA** → Valeurs
- **Mois** → Lignes
- **Vendeur** → Colonnes
- **Famille** → Filtres (optionnel)

➡ Tu peux réorganiser comme tu veux en déplaçant les champs.

---

## 🔄 Mettre à jour un TCD
Un TCD **ne se met pas à jour tout seul** si tu modifies la source.

Pour actualiser :
1. Cliquer dans le TCD
2. Onglet **Analyse du tableau croisé dynamique**
3. Groupe Données → **Actualiser**

---

## 🔍 Retrouver le détail d’une valeur
Pour voir quelles lignes composent un total :
- Double-clique sur une valeur du TCD
➡ Excel crée un **nouvel onglet** avec le détail correspondant.

---

# ✅ À retenir
- F1 + Formules → Insérer une fonction (fx) = tes meilleurs outils pour trouver une fonction
- **SOMME** / **MOYENNE** = fonctions rapides et très utilisées
- **SI** = condition (vrai/faux) avec 3 arguments
- **Validation des données** = imposer une saisie propre (souvent via liste déroulante)
- **TCD** = synthèse puissante (source propre, pas de vides)
- Après modification source → penser à **Actualiser** le TCD
- Double-clic sur une valeur du TCD = voir le **détail** des données
