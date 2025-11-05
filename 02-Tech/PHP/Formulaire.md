
# Exemple de Formulaire Complet en PHP

Ce document présente un exemple de formulaire complet en PHP, incluant tous les types d'inputs et une validation de base.

## Exemple de code :

### Formulaire HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire Complet PHP</title>
</head>
<body>
    <h1>Formulaire Complet PHP</h1>
    <form action="traitement.php" method="post" enctype="multipart/form-data">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>

        <label for="mot_de_passe">Mot de passe :</label>
        <input type="password" id="mot_de_passe" name="mot_de_passe" required>

        <label for="age">Âge :</label>
        <input type="number" id="age" name="age" min="1" required>

        <label for="date_naissance">Date de naissance :</label>
        <input type="date" id="date_naissance" name="date_naissance" required>

        <label for="couleur_preferee">Couleur préférée :</label>
        <input type="color" id="couleur_preferee" name="couleur_preferee">

        <label for="site_web">Site web :</label>
        <input type="url" id="site_web" name="site_web">

        <fieldset>
            <legend>Genre :</legend>
            <label><input type="radio" name="genre" value="homme" required> Homme</label>
            <label><input type="radio" name="genre" value="femme" required> Femme</label>
            <label><input type="radio" name="genre" value="autre" required> Autre</label>
        </fieldset>

        <fieldset>
            <legend>Langues parlées :</legend>
            <label><input type="checkbox" name="langues[]" value="francais"> Français</label>
            <label><input type="checkbox" name="langues[]" value="anglais"> Anglais</label>
            <label><input type="checkbox" name="langues[]" value="espagnol"> Espagnol</label>
        </fieldset>

        <label for="photo">Photo de profil :</label>
        <input type="file" id="photo" name="photo" accept="image/*">

        <label for="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
```

### Traitement des données (traitement.php)
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $mot_de_passe = htmlspecialchars($_POST["mot_de_passe"]);
    $age = intval($_POST["age"]);
    $date_naissance = htmlspecialchars($_POST["date_naissance"]);
    $couleur_preferee = htmlspecialchars($_POST["couleur_preferee"]);
    $site_web = htmlspecialchars($_POST["site_web"]);
    $genre = htmlspecialchars($_POST["genre"]);
    $langues = isset($_POST["langues"]) ? $_POST["langues"] : [];
    $message = htmlspecialchars($_POST["message"]);

    if (!empty($nom) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($mot_de_passe) && $age > 0) {
        echo "<h1>Données soumises avec succès</h1>";
        echo "<p>Nom : $nom</p>";
        echo "<p>Email : $email</p>";
        echo "<p>Âge : $age</p>";
        echo "<p>Date de naissance : $date_naissance</p>";
        echo "<p>Couleur préférée : $couleur_preferee</p>";
        echo "<p>Site web : $site_web</p>";
        echo "<p>Genre : $genre</p>";
        echo "<p>Langues parlées : " . implode(", ", $langues) . "</p>";
        echo "<p>Message : $message</p>";
        
        if (isset($_FILES["photo"]) && $_FILES["photo"]["error"] == 0) {
            $photo_name = htmlspecialchars(basename($_FILES["photo"]["name"]));
            echo "<p>Photo : $photo_name</p>";
        } else {
            echo "<p>Photo non téléchargée ou erreur.</p>";
        }
    } else {
        echo "<h1>Erreur dans le formulaire</h1>";
        echo "<p>Veuillez vérifier les champs et réessayer.</p>";
    }
} else {
    echo "<h1>Accès non autorisé</h1>";
}
?>
```

## Explications :
1. **Input diversifié** :
   - Inclut tous les types de champs principaux : texte, email, mot de passe, nombre, date, couleur, URL, radio, checkbox, fichier et zone de texte.

2. **Validation côté serveur** :
   - Toutes les données sont vérifiées et nettoyées avec `htmlspecialchars()` et `filter_var()`.

3. **Téléchargement de fichiers** :
   - Le formulaire utilise `enctype="multipart/form-data"` pour permettre l'upload de fichiers.

4. **Langues multiples** :
   - Les checkboxes permettent de soumettre plusieurs valeurs sous forme de tableau.

## Conclusion :
Cet exemple illustre un formulaire complet et polyvalent en PHP. Il peut être adapté à une variété de projets web.
