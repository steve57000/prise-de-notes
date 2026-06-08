# ✏️ Saisir, recopier et créer des formules dans Excel

# 📝 1. Saisir des données

## Types de données possibles

Une cellule peut contenir : - Texte (ex : Excel) - Nombre (ex : 2019) -
Alphanumérique (ex : Excel 2019) - Date (ex : 01/04/2021) - Heure (ex :
12:00) - Formule (commence toujours par =)

👉 Pour saisir : 1. Clique sur la cellule (cellule de destination) 2.
Tape ta donnée 3. Appuie sur **Entrée**

### Raccourcis utiles

-   Date du jour → `Ctrl + ;`
-   Heure actuelle → `Ctrl + :`

### Alignement automatique

-   Texte / Alphanumérique → aligné à gauche
-   Nombre / Date / Heure → aligné à droite

------------------------------------------------------------------------

# 🧹 2. Effacer et corriger

## Effacer

-   Sélectionner la cellule
-   Appuyer sur **Suppr** ou
-   Accueil → Effacer

## Corriger une donnée

1.  Sélectionner la cellule
2.  Cliquer dans la barre de formule
3.  Modifier
4.  Valider avec Entrée

------------------------------------------------------------------------

# 🔁 3. Recopier des données

## 📍 La poignée de recopie

Petit carré en bas à droite de la cellule sélectionnée.

Place le curseur dessus → croix noire → clique et glisse.

------------------------------------------------------------------------

## 🔹 Recopie simple

Duplique exactement la valeur.

Ex : 26 → 26 → 26 → 26

------------------------------------------------------------------------

## 🔢 Recopie incrémentée

Ajoute une quantité constante.

Ex : 26 27 28 29

👉 Pas d'incrémentation = +1

Astuce : Maintenir **Ctrl** pendant le glisser pour incrémenter.

------------------------------------------------------------------------

## 🔢 Recopie incrémentée personnalisée

1.  Saisir deux valeurs (ex : 5 et 10)
2.  Sélectionner les deux
3.  Glisser

Résultat : 5 → 10 → 15 → 20 → 25

👉 Pas d'incrémentation = 5

------------------------------------------------------------------------

## 📅 Recopie automatique

Excel reconnaît : - Mois (Janvier...) - Jours - Dates - Suites logiques

Ex : Janvier → Février → Mars...

Gain de temps énorme 🚀

------------------------------------------------------------------------

# 🧮 4. Créer une formule simple

Exemple : Calculer un chiffre d'affaires

Formule : =Quantité \* Prix

### Étapes :

1.  Sélectionner la cellule résultat
2.  Taper =
3.  Cliquer sur première cellule (ex : C4)
4.  Taper \*
5.  Cliquer sur deuxième cellule (ex : D4)
6.  Entrée

Exemple : =C4\*D4

👉 Recopier avec la poignée pour calculer les autres lignes.

Les références changent automatiquement : =C4*D4 devient =C5*D5

➡ Ce sont des **références relatives**.

------------------------------------------------------------------------

# ⚠️ 5. Référence absolue (important !)

Problème : =C4*D1 devient =C5*D2 après recopie ❌

Solution : Transformer D1 en référence absolue.

1.  Sélectionner D1 dans la formule
2.  Appuyer sur **F4**
3.  Devient : \$D\$1

Nouvelle formule : =C4\*\$D\$1

👉 En recopiant : - C4 devient C5, C6... - \$D\$1 ne bouge pas

➡ C'est une **référence absolue**.

------------------------------------------------------------------------

# 🎯 À retenir

-   Une formule commence toujours par =

-   -   = multiplication

-   La poignée de recopie fait gagner énormément de temps

-   Référence relative → se décale

-   Référence absolue (\$D\$1) → ne se décale pas

-   F4 permet d'ajouter les \$ automatiquement

------------------------------------------------------------------------

Tu sais maintenant : ✔ Saisir tous types de données\
✔ Corriger et effacer\
✔ Recopier intelligemment\
✔ Créer des formules\
✔ Gérer les références relatives et absolues

🔥 Tu viens de passer au niveau supérieur sur Excel !
