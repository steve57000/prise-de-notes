# Cours Complet en PHP

## Introduction

PHP (Hypertext Preprocessor) est un langage de script côté serveur largement utilisé pour le développement web. Il s'intègre facilement avec le HTML et s’exécute sur un serveur, générant du code HTML dynamique envoyé au navigateur. Grâce à sa popularité, son intégration aisée avec des bases de données, et un vaste écosystème de bibliothèques et frameworks (tels que Laravel ou Symfony), PHP reste un choix privilégié pour créer des sites, des applications web et des APIs.

### Prérequis

- Connaissances de base en HTML/CSS
- Compréhension basique de la programmation (variables, fonctions, conditions, boucles)
- Serveur web (Apache, Nginx...) ou un environnement intégré comme XAMPP, WAMP, MAMP ou un conteneur Docker
- PHP installé (version 7.4+ recommandée)
- Un éditeur de texte ou IDE (VSCode, PhpStorm, Sublime Text, etc.)

## Installation et Configuration

### Installation de PHP

La méthode la plus simple est d'utiliser un environnement préconfiguré comme [XAMPP](https://www.apachefriends.org/fr/index.html) ou [WAMP](http://www.wampserver.com/). Cela vous fournira :

- Apache (serveur web)
- PHP
- MariaDB/MySQL (base de données)
- phpMyAdmin (gestion de la base via interface web)

Une fois installé, placez vos fichiers `.php` dans le répertoire `htdocs` de XAMPP ou `www` de WAMP, puis accédez-y via `http://localhost/nom_du_projet`.

### Test d’un script PHP

Créez un fichier `test.php` :

```php
<?php
phpinfo();
```

Placez-le dans le répertoire racine de votre serveur local, puis visitez `http://localhost/test.php`. Si vous voyez la page de configuration PHP, c’est que tout fonctionne.

## Bases du Langage PHP

### Syntaxe de base

Un fichier PHP contient généralement du code entre les balises `<?php ... ?>` :

```php
<?php
echo "Bonjour, monde !";
?>
```

PHP s’intègre facilement au HTML :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple PHP</title>
</head>
<body>
    <h1><?php echo "Bienvenue sur mon site"; ?></h1>
</body>
</html>
```

### Les variables

- Commencent par `$`
- Sensibles à la casse
- Types dynamiques (pas besoin de spécifier le type)

Exemple :
```php
<?php
$nom = "Alice";
$age = 30;
echo "Nom : $nom, Age : $age";
```

### Types de données

- **Chaînes de caractères** (string)
- **Entiers** (int)
- **Nombres à virgule flottante** (float)
- **Booléens** (bool)
- **Tableaux** (array)
- **Objets** (object)
- **Ressources** (resource)
- **Null** (null)

### Constantes

Les constantes se définissent avec `define()` ou `const` :
```php
define("NOM_SITE", "MonSiteWeb");
const VERSION = "1.0";
echo NOM_SITE; // MonSiteWeb
echo VERSION; // 1.0
```

## Opérateurs et Structures de Contrôle

### Opérateurs

- Affectation : `=`
- Arithmétiques : `+`, `-`, `*`, `/`, `%`
- Comparaison : `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Logiques : `&&`, `||`, `!`

### Conditions
```php
if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}
```

```php
$jour = 3;
switch ($jour) {
    case 1:
        echo "Lundi";
        break;
    case 2:
        echo "Mardi";
        break;
    default:
        echo "Autre jour";
}
```
### Boucles
```php
for ($i = 0; $i < 5; $i++) {
    echo $i; // Affiche 0,1,2,3,4
}

$i = 0;
while ($i < 3) {
    echo $i; // Affiche 0,1,2
    $i++;
}

$fruits = ["Pomme", "Poire", "Banane"];
foreach ($fruits as $fruit) {
    echo $fruit;
}
```
## Tableaux

### Tableau Indexé
```php
$fruits = ["Pomme", "Poire", "Banane"];
echo $fruits[0]; // Pomme
```

### Tableau Associatif
```php
$pers = [
    "nom" => "Dupont",
    "age" => 25,
    "ville" => "Paris"
];
echo $pers["ville"]; // Paris
```
### Fonctions utiles sur les tableaux

- `count($array)` : nombre d’éléments
- `array_push($array, $val)` : ajoute un élément
- `array_merge($array1, $array2)` : fusionne deux tableaux
- `in_array($val, $array)` : recherche une valeur

```php
$fruits = ["Pomme", "Poire", "Banane"];
echo count($fruits); // 3
```

## Fonctions

Les fonctions permettent de réutiliser du code.
```php
function bonjour($nom) {
    return "Bonjour, $nom !";
}
echo bonjour("Alice"); // Bonjour, Alice !
```

- Paramètres par défaut :
```php
function saluer($nom = "Visiteur") {
    echo "Salut, $nom";
}
saluer(); // Salut, Visiteur
```


## Programmation Orientée Objet (POO) en PHP

### Classe et Objet
```php
class Personne {
    public $nom;
    public $age;

    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function sePresenter() {
        echo "Je m'appelle {$this->nom} et j'ai {$this->age} ans.";
    }
}

$pers1 = new Personne("Alice", 30);
$pers1->sePresenter(); // Je m'appelle Alice et j'ai 30 ans.
```

### Visibilité

- `public` : accessible de partout
- `protected` : accessible dans la classe et ses descendants
- `private` : accessible uniquement dans la classe

### Héritage
```php
class Etudiant extends Personne {
    public $ecole;

    public function __construct($nom, $age, $ecole) {
        parent::__construct($nom, $age);
        $this->ecole = $ecole;
    }

    public function sePresenter() {
        parent::sePresenter();
        echo " J'étudie à {$this->ecole}.";
    }
}

$etd = new Etudiant("Bob", 20, "Université de Paris");
$etd->sePresenter(); 
// Je m'appelle Bob et j'ai 20 ans. J'étudie à Université de Paris.
```
## Gestion des Formulaires et Méthodes HTTP

### Méthode GET et POST

- `$_GET` : données transmises dans l’URL
- `$_POST` : données transmises via formulaire

Exemple de formulaire HTML :
```html
<form method="post" action="traitement.php">
    <input type="text" name="nom">
    <input type="submit" value="Envoyer">
</form>
```

Et dans traitement.php :
```php
<?php
$nom = $_POST["nom"];
echo "Vous avez envoyé : $nom";
```

## Sessions et Cookies

### Sessions

Les sessions permettent de stocker des informations côté serveur pour un utilisateur.
```php
session_start();
$_SESSION["user"] = "Alice";
echo $_SESSION["user"];
```

### Cookies

Les cookies sont stockés côté client (navigateur).
```php
setcookie("lang", "fr", time() + 3600); 
// Cookie 'lang' valable 1 heure

echo $_COOKIE["lang"]; // fr
```

## Interaction avec une Base de Données (MySQL)

### Connexion à la Base

Avec PDO :
```php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=testdb;charset=utf8", "utilisateur", "motdepasse");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
```

### Requêtes
```php
// Insertion
$stmt = $pdo->prepare("INSERT INTO users (nom, age) VALUES (:nom, :age)");
$stmt->execute(["nom" => "Alice", "age" => 30]);

// Sélection
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($users as $user) {
    echo $user["nom"]." ".$user["age"]."<br>";
}
```
## Sécurité

- Échapper les données avant de les afficher dans une page HTML : `htmlspecialchars()`
- Utiliser des requêtes préparées pour éviter les injections SQL
- Valider et filtrer toutes les données entrantes

Exemple :
```php
$nom = htmlspecialchars($_POST["nom"], ENT_QUOTES, 'UTF-8');
```
## Inclure et Organiser son Code

- `include "fichier.php";`
- `require "fichier.php";`
- `include_once "fichier.php";`
- `require_once "fichier.php";`

Permettent de segmenter le code en plusieurs fichiers.

## Bonnes Pratiques

- Respecter la structure MVC (Modèle-Vue-Contrôleur) pour organiser le code
- Utiliser un framework (Laravel, Symfony) pour accélérer le développement
- Utiliser Composer pour gérer les dépendances
- Ajouter des tests unitaires (PHPUnit)
- Documenter le code

## Ressources

- [Documentation Officielle PHP](https://www.php.net/docs.php)
- [Laracasts](https://laracasts.com/) (Laravel, Eloquent)
- Symfony Docs

---

Vous voilà avec une solide base pour commencer à développer en PHP. N’hésitez pas à explorer plus en détail chaque concept, à consulter la documentation officielle, et à pratiquer régulièrement pour améliorer vos compétences.