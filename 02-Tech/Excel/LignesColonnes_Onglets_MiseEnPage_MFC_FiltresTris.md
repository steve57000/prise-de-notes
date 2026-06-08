# 🧩 Excel – Manipuler structure, mise en page, MFC, filtres & tris

## ✅ Objectif
Dans cette partie, tu apprends à :
- manipuler **lignes** et **colonnes**
- gérer les **onglets (feuilles)**
- améliorer la **mise en page** et l’**impression**
- automatiser la mise en forme avec la **mise en forme conditionnelle**
- exploiter **filtres** et **tris** pour gérer de grandes listes

---

# 1) ↔️ Lignes & Colonnes

## Méthode générale
1. Sélectionner la **ligne/colonne** via son **en-tête** (lettre ou chiffre)
2. **Clic droit** → menu contextuel (la plupart des actions sont là)

## ➕ Insérer une ligne/colonne
- Sélectionne la **colonne (ou ligne) située à droite (ou en dessous)** de l’endroit où tu veux insérer
- Clic droit → **Insérer**
✅ Une nouvelle colonne/ligne apparaît **avant** celle sélectionnée

## 🗑 Supprimer une ligne/colonne
- Sélection → clic droit → **Supprimer**
⚠️ Supprime réellement les données

## 🙈 Masquer / Afficher
**Masquer** :
- Sélection → clic droit → **Masquer**

**Afficher** :
- Sélectionne les colonnes/lignes qui **encadrent** la zone masquée
- Clic droit → **Afficher**

## 📏 Ajuster la taille
- **Double-clic** sur la séparation entre deux en-têtes → ajustement automatique au contenu
- Ou **cliquer-glisser** pour régler manuellement

## 🧷 Grouper / Dissocier
But : masquer/afficher **en bloc** plusieurs colonnes/lignes.

**Grouper** :
- Sélectionner les colonnes/lignes
- Onglet **Données** → **Grouper**

**Masquer/afficher un groupe** :
- Bouton **- / +** ou niveaux **1 / 2**

**Dissocier** :
- Onglet **Données** → **Dissocier**

---

# 2) 🗂 Onglets (Feuilles)

## C’est quoi un onglet ?
Un classeur Excel = un **dossier**  
Les onglets = des **feuilles** à l’intérieur du classeur

## ➕ Créer un onglet
- Cliquer sur le **+** à droite des onglets

## 🗑 Supprimer un onglet
- Clic droit sur l’onglet → **Supprimer**
⚠️ Suppression définitive (données perdues)

## ✏️ Renommer
- Double-clic sur le nom **ou** clic droit → **Renommer**
📌 Max **31 caractères**, pas de caractères spéciaux

## ↔️ Déplacer
- Cliquer sur l’onglet → **glisser-déposer**

## 🎨 Mettre en couleur
- Clic droit → **Couleur d’onglet** → choisir couleur
✅ utile quand tu as beaucoup d’onglets

## 🙈 Masquer / Afficher un onglet
- Clic droit sur onglet → **Masquer**
- Pour afficher : clic droit sur un onglet → **Afficher** → choisir l’onglet

## 📄 Copier un onglet
- Clic droit → **Déplacer ou copier**
- Cocher **Créer une copie**
- Choisir emplacement (même classeur ou autre)

---

# 3) 🧾 Mise en page (lisibilité)

## 🧱 Masquer le quadrillage
- Onglet **Affichage**
- Groupe **Afficher**
- Décocher **Quadrillage**

📌 Le quadrillage ne s’imprime pas (contrairement aux bordures).

## 🧷 Ajouter des bordures (pour l’impression + lisibilité)
- Sélectionner le tableau
- Onglet **Accueil** → **Bordures**
- **Toutes les bordures**

## 🧊 Figer les volets (garder les titres visibles)
- Onglet **Affichage** → **Figer les volets**
- **Figer la ligne supérieure**
Pour annuler : **Libérer les volets**

## ↩️ Renvoyer à la ligne automatiquement
- Sélectionner cellule
- Onglet **Accueil** → Alignement
- **Renvoyer à la ligne automatiquement**

---

# 4) 🖨 Impression (options utiles)

## Imprimer
- Onglet **Fichier** → **Imprimer** → bouton Imprimer

## Répéter les titres sur chaque page
- Onglet **Mise en page** → **Imprimer les titres**
- Définir la **ligne à répéter en haut**
✅ indispensable si ton tableau tient sur plusieurs pages

## Numéroter les pages
- Onglet **Mise en page** → bouton **Mise en page**
- Onglet **En-tête/Pied de page**
- Dans **Pied de page** → choisir un modèle (ex : Page 1)

## Définir une zone d’impression
- Sélectionner la zone à imprimer
- Onglet **Mise en page** → **Zone d’impression** → **Définir**
Pour enlever : **Annuler la zone d’impression**

---

# 5) 🎯 Mise en forme conditionnelle (MFC)

## Principe
La **mise en forme conditionnelle** applique automatiquement une mise en forme **si une condition est vraie**.
✅ Si la valeur change, la mise en forme s’adapte (contrairement à une couleur mise à la main).

## Exemple : valeurs < 100 000 en rouge
1. Sélectionner les cellules
2. Onglet **Accueil** → **Mise en forme conditionnelle**
3. **Règles de mise en surbrillance** → **Inférieur à…**
4. Saisir `100000` → OK

## Supprimer une MFC
- Accueil → Mise en forme conditionnelle → **Effacer les règles**
- **Effacer les règles des cellules sélectionnées**

## Jeux d’icônes
- Accueil → Mise en forme conditionnelle → **Jeux d’icônes**
- Exemple : **3 indicateurs** (vert/orange/rouge)

---

# 6) 🔎 Filtres & Tris

## 🧰 Filtrer = afficher seulement ce qui t’intéresse
- Les données non retenues sont **masquées**, pas supprimées
- Une flèche apparaît sur chaque en-tête de colonne
- Un entonnoir indique une colonne filtrée

### Activer un filtre
1. Sélectionner une cellule du tableau
2. Accueil → **Trier et filtrer** → **Filtrer**

### Critères possibles
- Texte
- Nombres
- Dates (année, période…)
- Couleur (Excel 2016+)

### Combiner plusieurs filtres
Tu peux filtrer plusieurs colonnes en même temps (ex : Qualification + Contrat).

### Désactiver / Réinitialiser
- Pour enlever le mode filtre : Accueil → Trier et filtrer → **Filtrer**
- Pour garder le mode mais enlever les filtres : Accueil → Trier et filtrer → **Effacer**

## 🔃 Trier = classer les données (sans masquer)
Le tri réorganise les lignes selon un critère :
- Texte : **A → Z** / **Z → A**
- Dates : ancien → récent / récent → ancien
- Nombres : petit → grand / grand → petit

Étapes :
1. Sélectionner une cellule de la colonne
2. Accueil → Trier et filtrer → choisir le type de tri

---

# ✅ À retenir (mini mémo)
- Clic droit sur en-têtes = actions lignes/colonnes
- Masquer ≠ supprimer
- Double-clic sur séparation = largeur auto
- Onglets : créer, renommer, déplacer, colorer, masquer, copier
- Quadrillage = affichage (pas impression), bordures = impression
- Figer les volets = garder titres visibles
- MFC = mise en forme automatique selon condition
- Filtrer = masque, Trier = classe
