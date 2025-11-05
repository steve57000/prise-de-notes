
# React - Guide Complet, des Bases aux Concepts Avancés

Ce document est un guide exhaustif de React, couvrant les bases, les concepts avancés, et les patterns de conception pour construire des applications robustes.

---

## 1. Introduction à React

### Qu'est-ce que React ?
React est une bibliothèque JavaScript open-source créée par Facebook pour la création d'interfaces utilisateur basées sur des composants réutilisables. Elle gère efficacement le DOM virtuel pour offrir une performance élevée.

### Installation
```bash
npx create-react-app my-app
cd my-app
npm start
```

---

## 2. Concepts Essentiels de React

### JSX
JSX est une syntaxe permettant de combiner HTML et JavaScript dans les composants.
```javascript
const element = <h1>Hello, World!</h1>;
```

### Composants et Props
Les composants sont des fonctions ou des classes qui retournent du JSX. Les props (propriétés) permettent de transmettre des données.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### État (State)
L'état gère les données dynamiques dans les composants fonctionnels.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 3. Hooks en React

### useEffect
Gère les effets secondaires comme les appels API, les timers, etc.
```javascript
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);  // Dépend de `count`
```

### useContext
Permet de consommer des valeurs d'un contexte sans prop drilling.

```javascript
const ThemeContext = React.createContext('light');
function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Hello</div>;
}
```

### useReducer
Offre une alternative pour gérer l'état complexe avec un "reducer".

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

---

## 4. Concepts Avancés

### Context API et State Global
Utiliser le `Context` avec `useContext` permet de créer des états globaux pour éviter le prop drilling.

### Suspense et Lazy Loading
Pour un chargement asynchrone de composants.

```javascript
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Chargement...</div>}>
  <LazyComponent />
</Suspense>
```

### Portals
Utiliser pour rendre un composant dans un autre élément DOM.

```javascript
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
```

---

## 5. Performance en React

### useMemo et useCallback
Optimiser les rendus en mémorisant les valeurs et fonctions.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => { doSomething(a); }, [a]);
```

### React.memo
Empêche le rendu inutile d'un composant si ses props n'ont pas changé.

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
```

### Profiler API
Permet de mesurer les performances de rendu.

---

## 6. Design Patterns en React

### 1. HOC (Higher-Order Component)
Fonction qui prend un composant et retourne un nouveau composant.

```javascript
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}
```

### 2. Render Props
Permet de partager du comportement entre composants.

```javascript
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
<MouseTracker render={({ x, y }) => <h1>La souris est à {x}, {y}</h1>} />
```

### 3. Hooks Personnalisés
Créer des hooks réutilisables pour la logique partagée.

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setData(data));
  }, [url]);

  return data;
}
```

### 4. Composant Conteneur/Présentateur
Sépare la logique (conteneur) de l'affichage (présentateur).

---

## 7. Gestion d'État Avancée

### Redux
Redux est une solution de gestion d'état globale, idéal pour les applications à grande échelle.

Installation:
```bash
npm install redux react-redux
```

### Recoil
Recoil est une alternative à Redux pour la gestion d’état global en React.

```javascript
import { atom, useRecoilState } from 'recoil';

const textState = atom({ key: 'textState', default: '' });

function CharacterCounter() {
  const [text, setText] = useRecoilState(textState);
  return <input type="text" value={text} onChange={(e) => setText(e.target.value)} />;
}
```

---

## 8. Bonnes Pratiques et Optimisations

- Utiliser des **composants fonctionnels** et hooks pour la lisibilité.
- **Split Codes** avec lazy loading pour charger les pages ou composants en différé.
- **Utiliser des clés uniques** dans les listes.
- **PropTypes** pour typer les props.

---

## 9. Testing en React

### React Testing Library
Facilite le test des composants React en simulant le comportement de l'utilisateur.

```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
```

---

Ce fichier propose une base complète pour maîtriser React, incluant les hooks avancés, les optimisations de performance, les design patterns, et plus encore pour des applications réactives robustes.
