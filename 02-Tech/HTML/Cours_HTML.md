
# Introduction au HTML

HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web. Il permet de structurer et de présenter du contenu sur le Web.

## Structure de base d'un document HTML

Tout document HTML commence par une structure de base qui contient les éléments essentiels :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page</title>
</head>
<body>

  <h1>Ceci est un titre de niveau 1</h1>
  <p>Ceci est un paragraphe de texte.</p>

</body>
</html>
```

### Explication des éléments

- **`<!DOCTYPE html>`** : Indique au navigateur qu'il s'agit d'un document HTML5.
- **`<html>`** : Élément racine du document HTML.
- **`<head>`** : Contient des métadonnées comme le titre de la page et le charset.
- **`<meta charset="UTF-8">`** : Définit l'encodage des caractères.
- **`<title>`** : Titre affiché dans l'onglet du navigateur.
- **`<body>`** : Contient tout le contenu visible de la page.

## Titres et Paragraphes

Les titres vont du niveau 1 (`<h1>`) au niveau 6 (`<h6>`), avec `<h1>` étant le plus important.

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Ceci est un paragraphe de texte. Il est utilisé pour afficher des blocs de texte.</p>
```

## Liens hypertextes

Les liens permettent de naviguer entre les pages ou de rediriger vers des ressources externes.

```html
<a href="https://www.example.com">Cliquez ici pour visiter un site</a>
```

- **`href`** : Définit l'URL vers laquelle le lien pointe.

## Images

Les images peuvent être insérées dans une page avec l'élément `<img>`.

```html
<img src="image.jpg" alt="Description de l'image" width="500">
```

- **`src`** : Lien vers l'image.
- **`alt`** : Texte alternatif pour l'accessibilité.
- **`width`** : Largeur de l'image en pixels.

## Listes

Il existe deux types de listes en HTML : les listes ordonnées et les listes non ordonnées.

### Liste non ordonnée :

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
```

### Liste ordonnée :

```html
<ol>
  <li>Premier élément</li>
  <li>Deuxième élément</li>
</ol>
```

## Formulaires

Les formulaires permettent de collecter des informations de l'utilisateur.

```html
<form action="/submit" method="POST">
  <label for="name">Nom :</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Envoyer">
</form>
```

- **`action`** : URL vers laquelle les données du formulaire seront envoyées.
- **`method`** : Méthode d'envoi des données (`GET` ou `POST`).

## Conclusion

HTML est le fondement de toute page web. En comprenant les éléments de base, tu seras capable de structurer une page et d'y ajouter du contenu visuel et interactif.
