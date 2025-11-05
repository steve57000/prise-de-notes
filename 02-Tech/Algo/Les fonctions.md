# Cours sur les fonctions en Python

## 1. Introduction aux Fonctions

En Python, une fonction est un bloc de code qui effectue une tâche spécifique. Les fonctions permettent de réutiliser du code pour éviter la répétition. Vous pouvez définir vos propres fonctions ou utiliser des fonctions intégrées.

### 1.1. Définition d'une Fonction

Pour définir une fonction en Python, on utilise le mot-clé `def` suivi du nom de la fonction, puis une paire de parenthèses `()` qui peut contenir des paramètres (ou rester vide si la fonction ne prend aucun argument). Voici la syntaxe générale :

```python
def nom_de_fonction(paramètre1, paramètre2, ...):

    # Bloc de code de la fonction

    return résultat  # facultatif
```

Exemple :

```python
def saluer(nom):

    print(f"Bonjour {nom} !")
```

### 1.2. Appel d'une Fonction

Une fois qu'une fonction est définie, on peut l'appeler simplement en écrivant son nom suivi de parenthèses :

```python
saluer("Alice")  # Affiche: Bonjour Alice !
```

### 1.3. Paramètres et Arguments

- Les paramètres sont les variables spécifiées entre les parenthèses lors de la définition de la fonction.
- Les arguments sont les valeurs que vous passez à la fonction lorsque vous l'appelez.

Exemple avec plusieurs paramètres :
  
```python

def addition(a, b):

    return a + b

résultat = addition(3, 5)  # Retourne 8

```

### 1.4. Valeur de retour (`return`)

Une fonction peut retourner une valeur grâce au mot-clé `return`. Cela permet de récupérer des résultats après l'exécution de la fonction.
  
```python
def carré(x):

    return x ** 2
    
print(carré(4))  # Affiche: 16
```

## Exercices

### Exercice 1 : Fonction de Calcul de l'aire d'un rectangle

Écrivez une fonction `aire_rectangle` qui prend deux arguments `longueur` et `largeur` et retourne l'aire du rectangle.
  
### Exercice 2 : Maximum de Trois Nombres

Écrivez une fonction `max_trois_nombres` qui prend trois entiers en entrée et retourne le plus grand des trois.

Exemple :

```python
def max_trois_nombres(a, b, c):
    # Votre code ici
    pass 
    
print(max_trois_nombres(3, 7, 5))  # Devrait afficher 7
```

  
### Exercice 3 : Calcul d’une année bissextile

Écrivez une fonction qui retourne `True` si une année est bissextile et `False` sinon. Elle prend en paramètre une année.

Aide : https://fr.wikipedia.org/wiki/Ann%C3%A9e_bissextile

Pour rappel, pour savoir si `A` est divisible par `B`, on fait : `A % B == 0` (on vérifie que le reste de la division de `A` par `B` est égal à 0). Si c’est vrai, alors `B` est un diviseur de `A`, et `A` est divisible par `B`.

### Exercice 4 : Combien d’années bissextiles ?

Écrivez une fonction qui prend deux années en paramètre. Elle retourne le nombre d’années bissextiles contenues entre la première et la deuxième date (les 2 inclues). Appelez la fonction de l’exercice 3 pour savoir si une année est bissextile.


[[version simple|Voir les exercices en version simple]]
[[version plus poussée|Voir les exercices en version plus poussée]]