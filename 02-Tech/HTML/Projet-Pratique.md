
# Projet Pratique : Créer une carte de profil

## Objectif
Créer une carte de profil en utilisant les concepts HTML et CSS appris.

## Étapes
1. **HTML** : Créer la structure de base
    ```html
    <div class="card">
        <img src="photo.jpg" alt="Photo de profil">
        <h2>Nom de la personne</h2>
        <p>Description courte ici</p>
    </div>
    ```

2. **CSS** : Styliser la carte
    ```css
    .card {
        width: 300px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: center;
    }

    .card img {
        width: 100%;
        border-radius: 50%;
    }

    .card h2 {
        margin-top: 10px;
        font-size: 24px;
    }

    .card p {
        font-size: 14px;
        color: #666;
    }
    ```
