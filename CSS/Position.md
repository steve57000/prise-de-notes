La propriété `position` détermine la manière dont un élément est positionné dans un document.  ## 1. `static` C'est la valeur par défaut. L'élément est positionné selon le flux normal du document.  

```html
<div style="position: static;">   Positionnement par défaut. </div>
```

## 2. relative

L'élément est positionné par rapport à sa position normale dans le flux.

```html
`<div style="position: relative; top: 10px;">   Position relative. </div>`
```
## 3. absolute

L'élément est positionné par rapport à l'élément conteneur le plus proche positionné.

```html
<div style="position: absolute; top: 50px; left: 50px;">
	 postion absolute
</div>
```

## 4. fixed

L'élément est positionné par rapport à la fenêtre du navigateur.

```html
 <div style="position: fixed; bottom: 10px;">   Position fixe. </div>
```
## 5. sticky

L'élément bascule entre `relative` et `fixed` selon le défilement.

```html
<div style="position: sticky; top: 0;">   Position sticky. </div>
```