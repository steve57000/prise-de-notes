La mise en page par grille permet de créer des designs complexes.  ## 1. `grid-template-columns` Définit les colonnes de la grille.  

```html
<div style="display: grid; grid-template-columns: 100px 200px;">Grille à deux colonnes.
</div>
```

## 2. grid-template-rows

Définit les rangées de la grille.

```html
<div style="display: grid; grid-template-rows: 100px 100px;">Grille à deux rangées.
</div>
```

## 3. grid-gap

Ajoute de l'espace entre les éléments de la grille.

```html
<div style="display: grid; grid-gap: 10px;">   Grille avec espace. </div>
```

## 4. grid-area

Permet de placer un élément dans une zone spécifique de la grille.

```html
<div style="grid-area: header;">   Zone de la grille. </div>
```