---

## Introduction à Java

Java est un langage de programmation orienté objet populaire développé par Sun Microsystems, aujourd'hui propriété d'Oracle. Il est utilisé pour créer des applications multiplateformes grâce à sa portabilité, sa sécurité et sa robustesse.

---

## Prérequis

- Connaissance de base en programmation
    
- IDE Java (IntelliJ IDEA, Eclipse, VS Code)
    
- Installation du JDK (Java Development Kit)
    

---

## Partie Standard : Bases de Java

### Syntaxe et Structure

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Types de données

- Primitifs : `int`, `char`, `boolean`, `float`, `double`, etc.
    
- Non primitifs : Classes, Arrays, Strings
    

### Opérateurs

- Arithmétiques (+, -, *, /, %)
    
- Logiques (&&, ||, !)
    
- Relationnels (==, !=, >, <)
    

### Structures de Contrôle

- Conditions : `if`, `else if`, `else`, `switch`
    
- Boucles : `for`, `while`, `do-while`
    

### Méthodes et Fonctions

```
public int somme(int a, int b) {
    return a + b;
}
```

### Programmation Orientée Objet (POO)

- Classes et objets
    
- Encapsulation, héritage, polymorphisme, abstraction
    

```
public class Animal {
    void sound() {
        System.out.println("Animal fait du bruit");
    }
}

public class Dog extends Animal {
    void sound() {
        System.out.println("Le chien aboie");
    }
}
```

---

## Partie Avancée : Concepts Avancés de Java

### Collections

- List, Set, Map
    

```
List<String> list = new ArrayList<>();
list.add("Java");
```

### Gestion des Exceptions

```
try {
    int division = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erreur de division par zéro");
}
```

### Entrées/Sorties (I/O)

- Lecture et écriture de fichiers
    

```
try (BufferedReader br = new BufferedReader(new FileReader("fichier.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
```

### Threads et Concurrence

- Gestion des threads
    
- Synchronisation
    

```
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread en cours...");
    }
}
```

### JDBC et Bases de Données

- Connexion et interaction avec une base de données
    

```
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
```

---

## Développement Web avec Java

### Servlets et JSP

- Création d'applications web basées sur Java EE
    

### Frameworks Java

- Spring, Hibernate, JSF
    

---

## Développement d'applications avec JavaFX

- Interfaces graphiques
    

```
public class JavaFXApp extends Application {
    public void start(Stage stage) {
        Button btn = new Button("Cliquez-moi");
        Scene scene = new Scene(new StackPane(btn), 300, 200);
        stage.setScene(scene);
        stage.show();
    }
}
```

---

## Bonnes Pratiques Java

- Conventions de nommage
    
- Commentaires et documentation (Javadoc)
    
- Gestion efficace des ressources
    

---

## Déploiement d'applications Java

- Compilation avec `javac`
    
- Exécution avec `java`
    

```
javac HelloWorld.java
java HelloWorld
```

### Packaging et distribution

- Création de fichiers JAR
    

```
jar cvf MyApp.jar *.class
java -jar MyApp.jar
```

---

## Conclusion

Ce cours complet couvre les aspects fondamentaux et avancés de Java, vous préparant ainsi à développer des applications robustes et performantes.