
# Java - Guide Complet

Java est un langage de programmation orienté objet populaire pour son efficacité, sa portabilité, et sa capacité à créer des applications robustes. Ce guide couvre tout ce que vous devez savoir sur Java, des bases aux concepts avancés.

---

## 1. Introduction à Java

### Qu'est-ce que Java ?
Java est un langage de programmation orienté objet, développé par Sun Microsystems en 1995. Java est conçu pour être portable, sécurisé et fiable, ce qui le rend idéal pour le développement de logiciels de grande envergure.

### Installation et Premier Programme
1. Installez le JDK depuis [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html).
2. Créez un fichier `HelloWorld.java` :
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```
3. Compilez et exécutez :
   ```bash
   javac HelloWorld.java
   java HelloWorld
   ```

---

## 2. Les Bases de Java

### Types de Données
- **Primitifs** : `int`, `double`, `float`, `char`, `boolean`, `long`, `byte`, `short`
- **Référence** : `String`, `Array`, `Object`

```java
int age = 30;
String name = "Alice";
boolean isStudent = true;
```

### Opérateurs
- **Aritmétiques** : `+`, `-`, `*`, `/`, `%`
- **Comparaison** : `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logiques** : `&&`, `||`, `!`

### Structures de Contrôle

#### Conditions
```java
if (age > 18) {
    System.out.println("Adulte");
} else {
    System.out.println("Mineur");
}
```

#### Boucles
- **for** :
  ```java
  for (int i = 0; i < 10; i++) {
      System.out.println(i);
  }
  ```
- **while** :
  ```java
  int i = 0;
  while (i < 10) {
      System.out.println(i);
      i++;
  }
  ```
- **do...while** :
  ```java
  int i = 0;
  do {
      System.out.println(i);
      i++;
  } while (i < 10);
  ```

---

## 3. Programmation Orientée Objet

### Classes et Objets
Une classe définit un modèle pour des objets. Les objets sont des instances de classes.

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("Hello, I'm " + name);
    }
}

Person alice = new Person("Alice", 25);
alice.greet();
```

### Encapsulation
L'encapsulation protège les données en utilisant des modificateurs d'accès comme `private`.

### Héritage
L'héritage permet de créer une nouvelle classe à partir d'une classe existante.

```java
public class Student extends Person {
    private String school;

    public Student(String name, int age, String school) {
        super(name, age);
        this.school = school;
    }
}
```

### Polymorphisme
Permet d'utiliser les objets de manière polymorphe.

---

## 4. Concepts Avancés

### Exceptions
Java utilise les exceptions pour gérer les erreurs.

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erreur : Division par zéro");
} finally {
    System.out.println("Opération terminée");
}
```

### Collections
Java propose des classes comme `ArrayList`, `HashMap`, `HashSet`, et `LinkedList` pour la gestion des collections.

### Stream API
Introduite en Java 8, elle permet le traitement fonctionnel des collections.

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);
```

### Lambda Expressions
Introduites en Java 8 pour simplifier la syntaxe des fonctions anonymes.

```java
Runnable r = () -> System.out.println("Hello from Lambda!");
new Thread(r).start();
```

---

## 5. Multithreading

### Threads
Java permet la création de threads pour exécuter des tâches de manière parallèle.

```java
public class MyThread extends Thread {
    public void run() {
        System.out.println("Thread exécuté");
    }
}

MyThread t1 = new MyThread();
t1.start();
```

### Interface Runnable
L'interface `Runnable` peut être utilisée pour définir un thread.

```java
Runnable r = () -> System.out.println("Runnable exécuté");
new Thread(r).start();
```

### Synchronisation
La synchronisation empêche les accès concurrents non sécurisés aux ressources partagées.

```java
public synchronized void synchronizedMethod() {
    // Code synchronisé
}
```

---

## 6. Design Patterns en Java

### Singleton
Assure qu'une seule instance d'une classe est créée.

```java
public class Singleton {
    private static Singleton instance = null;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Factory Pattern
Crée des objets selon le type.

```java
public interface Shape {
    void draw();
}

public class Circle implements Shape {
    public void draw() {
        System.out.println("Cercle dessiné");
    }
}

public class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType.equals("CIRCLE")) {
            return new Circle();
        }
        return null;
    }
}
```

### Observer Pattern
Utilisé pour notifier plusieurs objets d'un changement d'état.

```java
import java.util.ArrayList;
import java.util.List;

class Observer {
    public void update() {
        System.out.println("État mis à jour");
    }
}

class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void attach(Observer observer) {
        observers.add(observer);
    }

    public void notifyAllObservers() {
        for (Observer observer : observers) {
            observer.update();
        }
    }
}
```

---

## 7. Gestion de Mémoire et Garbage Collection

Java gère automatiquement la mémoire via le Garbage Collector, qui libère la mémoire des objets non utilisés.

---

## 8. Bonnes Pratiques

- Utiliser des noms de variables et de méthodes explicites.
- Favoriser l'encapsulation avec des modificateurs d'accès.
- Utiliser les interfaces pour une meilleure extensibilité.
- Privilégier `StringBuilder` pour les manipulations de chaînes.
- Écrire des tests unitaires avec JUnit.

---

Ce fichier couvre l'essentiel et les concepts avancés de Java, y compris les bases de la programmation orientée objet, les design patterns, le multithreading, et les bonnes pratiques.
