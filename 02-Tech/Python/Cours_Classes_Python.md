
# Les Classes en Python

## Introduction aux Classes
En Python, une **classe** est un plan de création pour les objets. Elle définit un ensemble d'attributs et de méthodes que les instances de la classe vont posséder.

### Syntaxe de base
Voici la syntaxe de base pour créer une classe en Python :
```python
class MaClasse:
    def __init__(self, attribut1, attribut2):
        self.attribut1 = attribut1
        self.attribut2 = attribut2

    def ma_methode(self):
        return f"Attribut 1 : {self.attribut1}, Attribut 2 : {self.attribut2}"
```

- `class` : mot-clé pour définir une classe.
- `__init__` : méthode spéciale (constructeur) qui initialise les attributs de la classe.
- `self` : fait référence à l'instance courante de la classe.

## Instanciation d'une Classe
Pour créer un objet (instance) d'une classe, on utilise la syntaxe suivante :
```python
objet = MaClasse("valeur1", "valeur2")
print(objet.ma_methode())
```

## Les Attributs
Les **attributs** sont des variables qui appartiennent à une instance de classe. Il en existe deux types :
- **Attributs d'instance** : spécifiques à chaque objet.
- **Attributs de classe** : partagés par toutes les instances de la classe.

Exemple d'attribut de classe :
```python
class Compteur:
    total = 0  # Attribut de classe

    def __init__(self):
        Compteur.total += 1
```

## Les Méthodes
Les **méthodes** sont des fonctions définies au sein des classes. Elles permettent de manipuler les attributs et d'effectuer des actions spécifiques à la classe.

### Méthodes Spéciales
Python propose des méthodes spéciales, reconnaissables par leurs doubles underscores (dunder methods). Quelques-unes d'entre elles :
- `__str__` : pour définir une représentation en chaîne de caractères.
- `__repr__` : pour une représentation plus technique de l'objet.
- `__len__` : pour définir le comportement de la fonction `len()` sur l'objet.

Exemple :
```python
class Livre:
    def __init__(self, titre, auteur):
        self.titre = titre
        self.auteur = auteur

    def __str__(self):
        return f"{self.titre} écrit par {self.auteur}"
```

## Héritage
L'**héritage** permet de créer une nouvelle classe basée sur une classe existante, et d'en réutiliser les méthodes et attributs.
```python
class Animal:
    def parler(self):
        pass

class Chien(Animal):
    def parler(self):
        return "Woof!"

class Chat(Animal):
    def parler(self):
        return "Meow!"
```

## Les Propriétés
Les **propriétés** permettent de contrôler l'accès en lecture et en écriture aux attributs d'une classe.
```python
class Personne:
    def __init__(self, nom):
        self._nom = nom

    @property
    def nom(self):
        return self._nom

    @nom.setter
    def nom(self, nouveau_nom):
        self._nom = nouveau_nom
```

## Conclusion
Les classes sont fondamentales pour la programmation orientée objet en Python. Elles permettent de structurer le code, de réutiliser des éléments et de mieux organiser les projets.
