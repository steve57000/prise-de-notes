---

## Introduction à Angular

Angular est un framework TypeScript développé par Google pour créer des applications web dynamiques. Il repose sur une architecture de composants et propose de nombreuses fonctionnalités pour simplifier le développement.

---

## Prérequis

- Connaissance de base en HTML, CSS et JavaScript
    
- Node.js et npm
    
- Angular CLI (`npm install -g @angular/cli`)
    

---

## Partie Standard : Débuter avec Angular

### Installation et configuration

```
npm install -g @angular/cli
ng new mon-premier-projet
```

### Structure d'un projet Angular

- `app.module.ts` : Module principal
    
- `app.component.ts` : Composant principal
    
- `index.html` : Fichier HTML principal
    

### Composants

Créer un composant :

```
ng generate component nom-du-composant
```

### Exemple de Composant (Affichage d'un message)

```
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`
})
export class AppComponent {
  message: string = 'Bienvenue dans Angular!';
}
```

### Data Binding

- Interpolation (`{{ data }}`)
    
- Property binding (`[property]="data"`)
    
- Event binding (`(event)="action()"`)
    
- Two-way binding (`[(ngModel)]="data"`)
    

### Exemple de Two-way Binding

```
<input [(ngModel)]="userName" placeholder="Nom utilisateur">
<p>Bonjour {{ userName }}!</p>
```

### Routing (Navigation)

Configurer le routage :

```
ng generate module app-routing --flat --module=app
```

### Services et Injection de Dépendances

Créer un service :

```
ng generate service mon-service
```

---

## Partie Avancée : Maîtriser Angular

### Modules Avancés

- Modules Lazy-loading pour optimiser les performances
    
- Shared Modules et Feature Modules
    

### Gestion d'état

- Utilisation de RxJS
    
- NGRX pour le state management avancé
    

### Exemple de gestion d'état simple avec RxJS

```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  private countSource = new BehaviorSubject<number>(0);
  currentCount = this.countSource.asObservable();

  increment() {
    this.countSource.next(this.countSource.value + 1);
  }
}
```

### Formulaires Avancés

- Reactive Forms (Formulaires réactifs)
    
- Form validation personnalisée
    

### Exemple de formulaire réactif

```
import { FormGroup, FormControl, Validators } from '@angular/forms';

this.myForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
});
```

### Directives et Pipes personnalisés

Créer une directive :

```
ng generate directive ma-directive
```

Créer un pipe personnalisé :

```
ng generate pipe mon-pipe
```

### Exemple de Pipe personnalisé (format date)

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): string {
    return value.toLocaleDateString('fr-FR');
  }
}
```

### Communication entre composants

- @Input et @Output
    
- Communication via les services
    

### Tests unitaires et intégration

- Tests unitaires avec Karma et Jasmine
    
- Tests end-to-end avec Protractor ou Cypress
    

### Internationalisation (i18n)

Configurer la gestion multilingue :

```
ng add @angular/localize
```

---

## Déploiement

### Compilation pour production

```
ng build --prod
```

### Déploiement sur serveur web

Exemple avec Nginx ou déploiement via AWS S3.

---

## Bonnes Pratiques

- Structure claire et modulaire
    
- Réutilisation maximale des composants
    
- Documentation claire du code
    

---

## Conclusion

Ce cours vous permet de maîtriser Angular à la fois au niveau standard et avancé, vous donnant toutes les clés pour créer des applications performantes, modulaires et évolutives.