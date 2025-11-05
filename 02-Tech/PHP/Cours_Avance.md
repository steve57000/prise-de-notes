
# Cours Avancé en PHP : Bases Solides pour Divers Cas de Figure

Ce cours propose des bases solides pour travailler avec PHP, en abordant divers cas d'utilisation comme la manipulation des fichiers, les sessions, les cookies, la gestion des erreurs, et la connexion à une base de données.

## Table des Matières :
1. [Manipulation des Fichiers](#manipulation-des-fichiers)
2. [Sessions et Cookies](#sessions-et-cookies)
3. [Gestion des Erreurs et Exceptions](#gestion-des-erreurs-et-exceptions)
4. [Connexion à une Base de Données](#connexion-à-une-base-de-données)
5. [API Restful avec PHP](#api-restful-avec-php)

---

## Manipulation des Fichiers

### Lire un fichier
```php
<?php
$file = "example.txt";
if (file_exists($file)) {
    $content = file_get_contents($file);
    echo nl2br($content);
} else {
    echo "Le fichier n'existe pas.";
}
?>
```

### Écrire dans un fichier
```php
<?php
$file = "example.txt";
$content = "Ceci est un texte ajouté au fichier.";
file_put_contents($file, $content, FILE_APPEND);
echo "Contenu ajouté avec succès.";
?>
```

---

## Sessions et Cookies

### Gestion des Sessions
```php
<?php
session_start();
$_SESSION["username"] = "JohnDoe";
echo "Nom d'utilisateur enregistré : " . $_SESSION["username"];
?>
```

### Gestion des Cookies
```php
<?php
setcookie("user", "JohnDoe", time() + (86400 * 30), "/"); // Cookie valable 30 jours
if (isset($_COOKIE["user"])) {
    echo "Utilisateur : " . $_COOKIE["user"];
} else {
    echo "Cookie non défini.";
}
?>
```

---

## Gestion des Erreurs et Exceptions

### Gestion des Erreurs avec `error_log`
```php
<?php
ini_set("log_errors", 1);
ini_set("error_log", "errors.log");
error_log("Ceci est un message d'erreur pour le journal.");
?>
```

### Gestion des Exceptions
```php
<?php
try {
    throw new Exception("Une erreur est survenue.");
} catch (Exception $e) {
    echo "Erreur capturée : " . $e->getMessage();
}
?>
```

---

## Connexion à une Base de Données

### Exemple avec PDO (MySQL)
```php
<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=example_db", "username", "password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
```

### Requête Préparée
```php
<?php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(["email" => "user@example.com"]);
$user = $stmt->fetch();
print_r($user);
?>
```

---

## API Restful avec PHP

### Exemple de Point de Terminaison
```php
<?php
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    echo json_encode(["message" => "Bienvenue dans l'API !"]);
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["message" => "Données reçues", "data" => $data]);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Méthode non autorisée"]);
}
?>
```

---

## Conclusion :
Ce cours couvre des cas d'utilisation essentiels en PHP pour des projets modernes. En combinant ces bases avec de bonnes pratiques, vous serez prêt à développer des applications PHP robustes et sécurisées.
