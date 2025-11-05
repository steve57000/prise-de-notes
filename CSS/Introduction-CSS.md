
# Introduction au CSS

## Qu'est-ce que le CSS ?
Le CSS (Cascading Style Sheets) est utilisé pour styliser les pages web.

## Syntaxe de base

```css
sélecteur {
    propriété: valeur;
}
```

## Types de sélecteurs
- Sélecteur d'élément (balise) : `p { color: blue; }`
- Sélecteur de classe : `.maClasse { font-size: 16px; }`
- Sélecteur d'ID : `#monId { background-color: yellow; }`

## Couleurs et polices
- Couleur du texte :
    ```css
    p { color: red; }
    ```
- Couleur d'arrière-plan :
    ```css
    div { background-color: lightgray; }
    ```
- Police et taille du texte :
    ```css
    body { font-family: Arial, sans-serif; font-size: 14px; }
    ```

## Display : block, inline, inline-block
- `display: block;` : l’élément occupe toute la largeur disponible.
- `display: inline;` : l’élément occupe seulement la place de son contenu.
- `display: inline-block;` : similaire à inline mais permet de définir des largeurs et hauteurs.
