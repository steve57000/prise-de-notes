# Protégez votre tableau de bord (Excel)

## 1) Protéger une feuille de calcul

Lorsque votre tableau de bord est partagé, il est essentiel d’empêcher les modifications non souhaitées.

### ⚠️ Important
Par défaut, **toutes les cellules sont verrouillées**, mais la protection ne devient active **que lorsque la feuille est protégée**.

---

### Étape 1 : Autoriser certaines cellules à être modifiables

Exemple : seule la cellule **L6** doit rester modifiable.

1. Clic droit sur la cellule L6  
2. **Format de cellule**  
3. Onglet **Protection**  
4. Décochez **Verrouillée**  
5. OK  

---

### Étape 2 : Protéger la feuille

1. Onglet **Révision**  
2. Cliquer sur **Protéger la feuille**  
3. Saisir le mot de passe (exemple : `!Zari01`)  
4. Laisser les autorisations par défaut (les 2 premières cochées)  
5. OK  

✅ Résultat : toutes les cellules sont protégées sauf celles déverrouillées.

Pour retirer la protection :
- Révision → **Ôter la protection de la feuille**
- Saisir le mot de passe

---

## 2) Protéger la structure du classeur

Cela permet de :
- empêcher la suppression d’onglets
- empêcher le renommage
- empêcher le déplacement
- protéger la visibilité des feuilles (ex : table de correspondance masquée)

### Étapes

1. Onglet **Révision**
2. Cliquer sur **Protéger le classeur**
3. Saisir un mot de passe
4. Confirmer

⚠️ Cette protection concerne **la structure des onglets**, pas l’ouverture du fichier.

---

## 3) Protéger l’ouverture du fichier (mot de passe)

Si vous souhaitez limiter l’accès au fichier :

1. **Fichier → Enregistrer sous**
2. Choisir emplacement + nom
3. Cliquer sur **Outils** (en bas à droite)
4. Sélectionner **Options générales**

Deux possibilités :

- 🔒 Mot de passe pour **ouvrir** le fichier
- ✏️ Mot de passe pour **modifier** le fichier

📌 Bonne pratique :
- Utiliser un mot de passe fort (≥ 8 caractères, majuscules, minuscules, caractères spéciaux)
- Donner uniquement le mot de passe d’ouverture aux lecteurs
- Garder le mot de passe de modification pour les auteurs

---

## Exemple d’exercice

- Protéger toute la feuille sauf la cellule D4 (mot de passe : `pass`)
- Protéger le classeur pour ouverture en lecture seule (mot de passe : `pass`)

---

## À retenir

- Une cellule verrouillée n’est protégée que si la feuille est protégée.
- **Protéger la feuille** → protège les cellules.
- **Protéger le classeur** → protège la structure des onglets.
- **Mot de passe à l’enregistrement** → protège l’accès au fichier.

Un tableau de bord professionnel est aussi un tableau de bord sécurisé.
