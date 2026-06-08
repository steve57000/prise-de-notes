# Automatisez vos tâches avec les macros VBA (Excel)

Quand un tableau de bord doit être mis à jour régulièrement (ex. tous les trimestres), refaire les mêmes manipulations à la main devient long et risqué.

👉 Les **macros** servent justement à automatiser ces tâches.

---

# 1️⃣ Comprendre macros / VBA

## Macro : c’est quoi ?
Une **macro** est un petit programme qui exécute automatiquement une suite d’actions dans Excel (clics, insertions, formules, suppression de colonnes, etc.).

## VBA : c’est quoi ?
Les macros sont écrites en **VBA** (*Visual Basic for Applications*), le langage de programmation intégré à Excel.

---

# 2️⃣ Créer un classeur compatible macros

Un fichier **.xlsx** ne peut pas contenir de macros.

✅ Pour utiliser des macros, il faut enregistrer le fichier en :
- **.xlsm** : Classeur Excel prenant en charge les macros
- (ancien format : **.xls** peut aussi contenir des macros)

### Étapes
1. **Fichier** → **Enregistrer sous**
2. Choisir le type : **Classeur Excel (prenant en charge les macros) (*.xlsm)**
3. Nommer + enregistrer

---

# 3️⃣ Activer les macros en sécurité

Quand vous ouvrez un fichier **.xlsm** contenant des macros, Excel affiche un avertissement.

- ✅ *Activer le contenu* = macros utilisables
- ❌ Ne pas activer = fichier utilisable mais sans macros

⚠️ N’activez les macros **que si la source est fiable**, car elles peuvent exécuter des actions potentiellement dangereuses.

---

# 4️⃣ Enregistrer une macro (sans coder)

## Afficher l’onglet Développeur
Il est souvent caché.

### Windows
1. Clic droit sur le ruban
2. **Personnaliser le ruban**
3. Cocher **Développeur**

### Mac
Menu **Excel** → **Préférences** → **Ruban et barre d’outil** → activer Développeur

---

## Enregistrer la macro
1. Onglet **Développeur** → **Enregistrer une macro**
2. Donner un nom (sans espaces), ex. `Premiere_Macro`
3. Excel enregistre toutes vos actions

### Exemple d’actions enregistrées
- Ajouter une colonne
- Utiliser `SUPPRESPACE()`
- Copier / coller en valeurs
- Supprimer une colonne

4. Cliquer sur **Arrêter l’enregistrement**

✅ Macro créée !

---

# 5️⃣ Exécuter une macro

1. Onglet **Développeur** → **Macros**
2. Sélectionner la macro
3. Cliquer sur **Exécuter**

➡️ Excel rejoue toutes les actions, très rapidement.

---

# 6️⃣ Voir et comprendre le code dans Visual Basic

## Ouvrir l’éditeur VBA
- Onglet **Développeur** → **Visual Basic**
- ou raccourci : **Alt + F11**

### Structure d’une macro
Une macro VBA commence par :
- `Sub NomDeMacro()`
et se termine par :
- `End Sub`

Même sans coder, vous pouvez lire le code pour comprendre ce qu’elle fait.

---

# 7️⃣ Automatiser facilement : bouton + macro

Pour lancer une macro sans aller dans Développeur :

1. **Insertion** → Forme (rectangle)
2. Mettre un texte (ex. “Supprimer espaces colonne B”)
3. Clic droit sur la forme → **Affecter une macro**
4. Choisir la macro → OK

✅ Un clic sur le bouton = macro exécutée.

---

# 8️⃣ Adapter une macro à des fichiers plus grands

Problème classique : la macro ne traite que jusqu’à une ligne fixe (ex. 116).

Solution simple :
- Remplacer la limite (116) par un nombre plus grand (ex. 10000)
- Ou améliorer ensuite avec une détection automatique de la dernière ligne

---

# 9️⃣ Cumuler plusieurs macros (macro “maîtresse”)

Quand vous avez plusieurs étapes (supprimer espaces, supprimer doublons, formater catégories…), vous pouvez les regrouper.

### Principe
Créer une macro principale qui appelle les autres :

- `Call Premiere_Macro`
- `Call Suppr_Doublons`
- `Call Format_Categ`
- etc.

✅ Résultat : un seul bouton → tout le nettoyage s’exécute d’un coup.

---

# ✅ À retenir

- Une macro = automatisation d’actions Excel.
- VBA = langage utilisé pour écrire les macros.
- Pour stocker des macros : fichier **.xlsm**.
- Les macros peuvent être enregistrées sans coder.
- On peut déclencher une macro via un bouton.
- Les macros doivent être adaptées aux volumes de données.
- Une macro “maîtresse” permet d’enchaîner plusieurs traitements.

Automatiser vos tâches, c’est gagner du temps et réduire les erreurs. 🚀
