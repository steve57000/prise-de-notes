
# Introduction au HTML

## Structure de base d'un document HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
</head>
<body>
    <!-- Contenu de la page -->
</body>
</html>
```

## Les balises principales
- `<html>` : la racine du document HTML.
- `<head>` : contient les métadonnées et les liens vers des ressources externes.
- `<body>` : contient tout le contenu visible de la page.

## Balises de structure
- `<header>` : représente l’en-tête de la page.
- `<section>` : pour diviser le contenu en sections.
- `<footer>` : le pied de page.

## Listes
- **Liste non ordonnée :**
    ```html
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ul>
    ```
- **Liste ordonnée :**
    ```html
    <ol>
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ol>
    ```

## Liens et attributs
- Exemple de lien :
    ```html
    <a href="https://example.com">Visitez Example.com</a>
    ```
- Utilisation de `class` et `id` :
    ```html
    <div class="maClasse" id="monId">Contenu ici</div>
    ```
