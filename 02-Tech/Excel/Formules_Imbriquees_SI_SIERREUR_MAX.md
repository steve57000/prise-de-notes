# Imbriquez des formules en fonction de vos besoins (Excel)

Vos données sont prêtes, mais aucune fonction unique ne répond exactement à votre besoin ?  
👉 Solution : **imbriquer des fonctions** (combiner plusieurs fonctions entre elles).

---

## 1) Combiner SI() et SOMME()

### Objectif
Afficher :

- **"Bravo !"** si la somme des 4 derniers trimestres > somme des 4 trimestres précédents
- Sinon afficher **"-"**

---

### Étape 1 : Définir la logique

Condition :

`SOMME(4 derniers trimestres) > SOMME(4 trimestres précédents)`

---

### Étape 2 : Structure de la formule

Formule complète :

```excel
=SI(SOMME(G6:J6)>SOMME(C6:F6);"Bravo !";"-")
```

Explication :
- `SOMME(G6:J6)` → 4 derniers trimestres
- `SOMME(C6:F6)` → 4 trimestres précédents
- SI(condition; valeur_si_vrai; valeur_si_faux)

📌 Une fonction peut remplacer un argument d’une autre fonction.

---

## 2) Gérer les erreurs Excel

Erreurs courantes :

| Erreur     | Signification |
|------------|---------------|
| #NOM?      | Nom de fonction mal écrit |
| #REF!      | Référence de cellule invalide |
| #DIV/0!    | Division par zéro |
| #N/A       | Valeur introuvable |
| #VALEUR!   | Argument incorrect |

---

### Causes et solutions

- **#NOM?** → vérifier l’orthographe (ex : RECHERCHEVV au lieu de RECHERCHEV)
- **#REF!** → vérifier les plages utilisées
- **#DIV/0!** → vérifier les divisions par zéro
- **#N/A** → valeur recherchée inexistante (ex : faute d’orthographe)
- **#VALEUR!** → type d’argument incorrect

---

## 3) Utiliser l’outil d’analyse des erreurs

Onglet **Formules** → **Vérification des erreurs**

Excel :
- identifie les cellules en erreur
- explique le problème
- permet de passer à l’erreur suivante

---

## 4) Anticiper les erreurs avec SIERREUR()

Certaines erreurs sont normales (ex : division par zéro).

Exemple d’évolution :

Formule classique :
```excel
=J7/F7-1
```

Si F7 = 0 → erreur #DIV/0!

### Solution :

```excel
=SIERREUR(J7/F7-1;"-")
```

Logique :
- Si la formule provoque une erreur → afficher "-"
- Sinon → afficher le résultat

---

## 5) Exemple d’imbriquement avec MAX()

Objectif :
Afficher “Bien joué !” si le maximum des 6 derniers trimestres > 5,2

Formule :

```excel
=SI(MAX(G6:L6)>5,2;"Bien joué !";"-")
```

---

## À retenir

- Une fonction peut être insérée dans une autre.
- La structure générale :  
  `=SI(condition; valeur_si_vrai; valeur_si_faux)`
- Les fonctions imbriquées permettent de créer des règles personnalisées.
- Utiliser **SIERREUR()** améliore la lisibilité et évite les messages techniques.
- Toujours vérifier les erreurs avec l’outil d’analyse.

Les formules imbriquées transforment Excel en véritable outil décisionnel.
