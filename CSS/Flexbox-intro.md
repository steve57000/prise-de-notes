
# Flexbox en CSS

## Qu'est-ce que Flexbox ?
Flexbox est un modèle de mise en page qui permet d'agencer facilement des éléments dans une page.

## Les propriétés principales
- `display: flex;` : transforme un conteneur en boîte flexible.
    ```css
    .container {
        display: flex;
    }
    ```
- `justify-content` : aligne les éléments horizontalement.
    ```css
    .container {
        justify-content: center; /* aligne les éléments au centre */
    }
    ```
- `align-items` : aligne les éléments verticalement.
    ```css
    .container {
        align-items: center; /* aligne les éléments au centre verticalement */
    }
    ```

## Exemple pratique
```html
<div class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <div>Élément 1</div>
    <div>Élément 2</div>
    <div>Élément 3</div>
</div>
```
