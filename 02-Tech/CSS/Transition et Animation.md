## 1. transition

Permet de créer des transitions douces entre les états CSS. 

```css 
transition: property duration timing-function delay;
```

## 2. animation

Permet de créer des animations complexes.

### Exemple :

```css
@keyframes example {
  0% { background-color: red; }
  100% { background-color: yellow; }
}

div {
  animation: example 5s infinite;
}
```
