
Voici un exemple de contenu pour un fichier `.md` sur les propriétés CSS `display` avec des exemples :

# Propriétés display en CSS

La propriété `display` contrôle la manière dont un élément HTML est rendu dans la page. Elle détermine si l'élément est traité comme un bloc, un élément en ligne, ou un autre type d'affichage.

## 1. display: block

Les éléments avec `display: block` occupent toute la largeur disponible et commencent sur une nouvelle ligne. Exemples courants : `<div>`, `<h1>`, `<p>`.

### Exemple :

```html
<div style="display: block; background-color: lightblue;">
  Ceci est un élément en bloc.
</div>
```

### Résultat :
- Occupe toute la largeur de la page.
- Chaque élément en bloc commence sur une nouvelle ligne.

---

## 2. display: inline

Les éléments avec `display: inline` n'occupent que l'espace nécessaire à leur contenu et ne forcent pas de saut de ligne. Exemples courants : `<span>`, `<a>`, `<strong>`.

### Exemple :

```html
<span style="display: inline; background-color: yellow;">
  Ceci est un élément en ligne.
</span>
```

### Résultat :
- N'occupe que l'espace de son contenu.
- Ne commence pas sur une nouvelle ligne.

---

## 3. display: inline-block

Les éléments `inline-block` se comportent comme des éléments en ligne tout en permettant de définir des dimensions (largeur, hauteur). Exemples : boutons personnalisés, vignettes.

### Exemple :

```html
<div style="display: inline-block; width: 150px; height: 100px; background-color: lightgreen;">
  Ceci est un élément inline-block.
</div>
```

### Résultat :
- Peut être placé côte à côte avec d'autres éléments en ligne.
- Peut avoir des dimensions définies (largeur, hauteur).

---

## 4. display: none

Les éléments avec `display: none` ne sont pas affichés du tout, ils ne prennent pas de place dans la page.

### Exemple :

```html
<div style="display: none;">
  Cet élément est masqué et n'apparaîtra pas.
</div>
```

### Résultat :
- L'élément est complètement masqué, sans occuper de place dans la mise en page.

---

## 5. display: [[Flexbox|Flex]]

La valeur `flex` permet de transformer un conteneur en un flexbox, alignant ses enfants de manière flexible. Utile pour des mises en page dynamiques.

### Exemple :

```html
<div style="display: flex;">
  <div style="background-color: coral; width: 100px; height: 100px;">Bloc 1</div>
  <div style="background-color: lightcoral; width: 100px; height: 100px;">Bloc 2</div>
  <div style="background-color: salmon; width: 100px; height: 100px;">Bloc 3</div>
</div>
```

### Résultat :
- Les blocs seront alignés côte à côte.

---

## 6. Autres valeurs

- **`display: grid`** : Pour créer des grilles.
- **`display: table`** : Comporte les éléments comme un tableau HTML.
- **`display: inline-flex`** : Flexbox en mode en ligne.
- **`display: inherit`** : Hérite de la valeur du parent.

---

### Conclusion

La propriété `display` est essentielle pour la mise en page en CSS. Utilisez-la pour contrôler la manière dont vos éléments HTML apparaissent et interagissent dans le flux de votre page.
