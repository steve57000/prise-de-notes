# MySQL — Guide des bases complet

> Version de référence conseillée : **MySQL 8.4 LTS**
>
> Ce guide couvre les fondamentaux indispensables pour créer, manipuler et interroger une base de données MySQL proprement.

---

## 1. Qu'est-ce que MySQL ?

MySQL est un système de gestion de base de données relationnelle (SGBDR) utilisant le langage SQL.
Il permet de :

- créer des bases de données ;
- créer et modifier des tables ;
- insérer, lire, modifier et supprimer des données ;
- gérer les relations entre tables ;
- sécuriser les accès ;
- optimiser les requêtes avec des index.

---

## 2. Structure logique

### Base de données
Conteneur principal regroupant des tables, vues, procédures, triggers, etc.

### Table
Structure contenant des colonnes et des lignes.

### Colonne
Champ défini avec un type (`INT`, `VARCHAR`, `DATE`, etc.).

### Ligne
Enregistrement stocké dans une table.

### Clé primaire
Identifiant unique d'une ligne.

### Clé étrangère
Lien entre deux tables.

---

## 3. Types de données principaux

## Numériques

```sql
TINYINT
SMALLINT
MEDIUMINT
INT
BIGINT
DECIMAL(10,2)
FLOAT
DOUBLE
```

## Chaînes de caractères

```sql
CHAR(10)
VARCHAR(255)
TEXT
MEDIUMTEXT
LONGTEXT
```

## Date et heure

```sql
DATE
TIME
DATETIME
TIMESTAMP
YEAR
```

## Booléen

```sql
BOOLEAN
```

> En pratique, `BOOLEAN` est interprété comme un alias de `TINYINT(1)`.

## Données diverses

```sql
JSON
BLOB
ENUM('actif', 'inactif')
SET('lecture', 'ecriture', 'admin')
```

---

## 4. Créer une base de données

```sql
CREATE DATABASE entreprise;
```

Avec encodage explicite :

```sql
CREATE DATABASE entreprise
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

Sélectionner la base :

```sql
USE entreprise;
```

Supprimer une base :

```sql
DROP DATABASE entreprise;
```

---

## 5. Créer une table

```sql
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    age INT,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. Contraintes essentielles

### NOT NULL
Empêche les valeurs nulles.

### UNIQUE
Empêche les doublons.

### PRIMARY KEY
Identifie chaque ligne de manière unique.

### AUTO_INCREMENT
Génère automatiquement un identifiant numérique.

### DEFAULT
Définit une valeur par défaut.

### CHECK
Permet d'imposer une règle logique.

```sql
CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10,2) CHECK (prix >= 0)
);
```

### FOREIGN KEY
Crée un lien avec une autre table.

```sql
CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);
```

---

## 7. Modifier une table

Ajouter une colonne :

```sql
ALTER TABLE utilisateurs ADD telephone VARCHAR(20);
```

Modifier le type d'une colonne :

```sql
ALTER TABLE utilisateurs MODIFY nom VARCHAR(150) NOT NULL;
```

Renommer une colonne :

```sql
ALTER TABLE utilisateurs RENAME COLUMN telephone TO mobile;
```

Supprimer une colonne :

```sql
ALTER TABLE utilisateurs DROP COLUMN mobile;
```

Renommer une table :

```sql
RENAME TABLE utilisateurs TO clients;
```

Supprimer une table :

```sql
DROP TABLE clients;
```

---

## 8. Insertion de données

Insertion simple :

```sql
INSERT INTO utilisateurs (nom, email, age)
VALUES ('Alice', 'alice@mail.com', 28);
```

Insertion multiple :

```sql
INSERT INTO utilisateurs (nom, email, age)
VALUES
('Bob', 'bob@mail.com', 32),
('Claire', 'claire@mail.com', 25),
('David', 'david@mail.com', 41);
```

---

## 9. Lecture de données avec SELECT

Lire toutes les colonnes :

```sql
SELECT * FROM utilisateurs;
```

Lire certaines colonnes :

```sql
SELECT nom, email FROM utilisateurs;
```

Alias :

```sql
SELECT nom AS nom_utilisateur, email AS adresse_mail
FROM utilisateurs;
```

Éviter `SELECT *` en production lorsque ce n'est pas nécessaire.

---

## 10. Filtrer avec WHERE

```sql
SELECT * FROM utilisateurs WHERE age >= 18;
```

Opérateurs utiles :

```sql
=
<
>
<=
>=
<>
!=
```

Conditions composées :

```sql
SELECT * FROM utilisateurs
WHERE age >= 18 AND age <= 30;
```

```sql
SELECT * FROM utilisateurs
WHERE nom = 'Alice' OR nom = 'Bob';
```

```sql
SELECT * FROM utilisateurs
WHERE NOT age < 18;
```

---

## 11. Recherche textuelle

### LIKE

```sql
SELECT * FROM utilisateurs WHERE nom LIKE 'A%';
SELECT * FROM utilisateurs WHERE nom LIKE '%e';
SELECT * FROM utilisateurs WHERE nom LIKE '%li%';
```

### IN

```sql
SELECT * FROM utilisateurs
WHERE age IN (25, 30, 35);
```

### BETWEEN

```sql
SELECT * FROM utilisateurs
WHERE age BETWEEN 20 AND 30;
```

### IS NULL / IS NOT NULL

```sql
SELECT * FROM utilisateurs WHERE age IS NULL;
SELECT * FROM utilisateurs WHERE age IS NOT NULL;
```

---

## 12. Trier les résultats

```sql
SELECT * FROM utilisateurs ORDER BY nom ASC;
SELECT * FROM utilisateurs ORDER BY age DESC;
```

Tri multiple :

```sql
SELECT * FROM utilisateurs
ORDER BY age DESC, nom ASC;
```

---

## 13. Limiter les résultats

```sql
SELECT * FROM utilisateurs LIMIT 10;
SELECT * FROM utilisateurs LIMIT 5 OFFSET 10;
```

Très utile pour la pagination.

---

## 14. Mise à jour des données

```sql
UPDATE utilisateurs
SET age = 29
WHERE id = 1;
```

Mettre à jour plusieurs colonnes :

```sql
UPDATE utilisateurs
SET nom = 'Alice Martin', age = 30
WHERE id = 1;
```

⚠️ Sans `WHERE`, toutes les lignes seront modifiées.

---

## 15. Suppression des données

```sql
DELETE FROM utilisateurs WHERE id = 1;
```

⚠️ Sans `WHERE`, toutes les lignes seront supprimées.

Vider complètement une table :

```sql
TRUNCATE TABLE utilisateurs;
```

---

## 16. Les jointures

### INNER JOIN
Retourne uniquement les correspondances.

```sql
SELECT u.nom, c.montant
FROM utilisateurs u
INNER JOIN commandes c ON u.id = c.utilisateur_id;
```

### LEFT JOIN
Retourne toutes les lignes de gauche, même sans correspondance.

```sql
SELECT u.nom, c.montant
FROM utilisateurs u
LEFT JOIN commandes c ON u.id = c.utilisateur_id;
```

### RIGHT JOIN
Retourne toutes les lignes de droite.

```sql
SELECT u.nom, c.montant
FROM utilisateurs u
RIGHT JOIN commandes c ON u.id = c.utilisateur_id;
```

### CROSS JOIN
Produit cartésien.

```sql
SELECT *
FROM utilisateurs
CROSS JOIN commandes;
```

---

## 17. Fonctions d'agrégation

```sql
COUNT()
SUM()
AVG()
MIN()
MAX()
```

Exemples :

```sql
SELECT COUNT(*) FROM utilisateurs;
SELECT AVG(age) FROM utilisateurs;
SELECT SUM(montant) FROM commandes;
SELECT MAX(montant) FROM commandes;
```

---

## 18. GROUP BY et HAVING

```sql
SELECT utilisateur_id, COUNT(*) AS nb_commandes
FROM commandes
GROUP BY utilisateur_id;
```

Filtrer un groupe avec `HAVING` :

```sql
SELECT utilisateur_id, COUNT(*) AS nb_commandes
FROM commandes
GROUP BY utilisateur_id
HAVING COUNT(*) >= 3;
```

---

## 19. DISTINCT

```sql
SELECT DISTINCT age FROM utilisateurs;
```

Permet d'éliminer les doublons dans les résultats.

---

## 20. Sous-requêtes

```sql
SELECT *
FROM utilisateurs
WHERE id IN (
    SELECT utilisateur_id
    FROM commandes
    WHERE montant > 100
);
```

Sous-requête scalaire :

```sql
SELECT *
FROM commandes
WHERE montant > (
    SELECT AVG(montant) FROM commandes
);
```

---

## 21. Vues

Créer une vue :

```sql
CREATE VIEW vue_clients_commandes AS
SELECT u.id, u.nom, c.montant
FROM utilisateurs u
JOIN commandes c ON u.id = c.utilisateur_id;
```

Utiliser la vue :

```sql
SELECT * FROM vue_clients_commandes;
```

Supprimer la vue :

```sql
DROP VIEW vue_clients_commandes;
```

---

## 22. Index

Créer un index :

```sql
CREATE INDEX idx_utilisateurs_nom ON utilisateurs(nom);
```

Index composite :

```sql
CREATE INDEX idx_commandes_user_date ON commandes(utilisateur_id, date_creation);
```

Supprimer un index :

```sql
DROP INDEX idx_utilisateurs_nom ON utilisateurs;
```

Utilité : améliorer les performances des recherches et tris.

---

## 23. Clés étrangères et intégrité référentielle

```sql
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
);
```

Avec actions de suppression :

```sql
FOREIGN KEY (categorie_id)
REFERENCES categories(id)
ON DELETE SET NULL
ON UPDATE CASCADE
```

Options courantes :

- `CASCADE`
- `SET NULL`
- `RESTRICT`
- `NO ACTION`

---

## 24. Transactions

Utiles quand plusieurs opérations doivent réussir ensemble.

```sql
START TRANSACTION;

UPDATE comptes SET solde = solde - 100 WHERE id = 1;
UPDATE comptes SET solde = solde + 100 WHERE id = 2;

COMMIT;
```

Annulation :

```sql
ROLLBACK;
```

Point de sauvegarde :

```sql
SAVEPOINT avant_modif;
ROLLBACK TO avant_modif;
```

---

## 25. Gestion des utilisateurs et droits

Créer un utilisateur :

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'MotDePasseFort123!';
```

Accorder des droits :

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON entreprise.* TO 'app_user'@'localhost';
```

Retirer des droits :

```sql
REVOKE INSERT ON entreprise.* FROM 'app_user'@'localhost';
```

Voir les droits :

```sql
SHOW GRANTS FOR 'app_user'@'localhost';
```

---

## 26. Commandes utiles d'administration

Afficher les bases :

```sql
SHOW DATABASES;
```

Afficher les tables :

```sql
SHOW TABLES;
```

Afficher la structure d'une table :

```sql
DESCRIBE utilisateurs;
```

Afficher le SQL de création :

```sql
SHOW CREATE TABLE utilisateurs;
```

Version du serveur :

```sql
SELECT VERSION();
```

Base actuelle :

```sql
SELECT DATABASE();
```

Utilisateur connecté :

```sql
SELECT USER(), CURRENT_USER();
```

---

## 27. Bonnes pratiques de base

- Toujours définir une clé primaire.
- Utiliser `utf8mb4` pour gérer tous les caractères Unicode.
- Préférer `DECIMAL` pour les montants financiers.
- Ajouter des index seulement sur les colonnes réellement utilisées dans les recherches, tris et jointures.
- Éviter `SELECT *` dans le code applicatif.
- Toujours mettre un `WHERE` sur les `UPDATE` et `DELETE` si nécessaire.
- Prévoir des contraintes métier (`NOT NULL`, `UNIQUE`, `CHECK`).
- Utiliser des sauvegardes régulières.
- Séparer les rôles applicatifs et administrateurs.

---

## 28. Exemple complet mini-schéma

```sql
CREATE DATABASE gestion_commerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gestion_commerce;

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10,2) NOT NULL CHECK (prix >= 0),
    stock INT NOT NULL DEFAULT 0
);

CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE commande_lignes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT NOT NULL,
    produit_id INT NOT NULL,
    quantite INT NOT NULL CHECK (quantite > 0),
    prix_unitaire DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE,
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);
```

Exemple de requête utile :

```sql
SELECT c.id, c.nom, COUNT(co.id) AS nb_commandes
FROM clients c
LEFT JOIN commandes co ON c.id = co.client_id
GROUP BY c.id, c.nom
ORDER BY nb_commandes DESC;
```

---

## 29. Raccourci mental à retenir

MySQL de base = **CRUD + contraintes + jointures + agrégations + index + transactions + sécurité**.

- **Create** → `INSERT`
- **Read** → `SELECT`
- **Update** → `UPDATE`
- **Delete** → `DELETE`

---

## 30. Check-list de maîtrise des bases

Tu maîtrises les fondamentaux si tu sais :

- créer une base et une table ;
- choisir les bons types ;
- définir une clé primaire et des clés étrangères ;
- écrire des `SELECT` avec filtres et tris ;
- faire des `JOIN` ;
- utiliser `GROUP BY` / `HAVING` ;
- mettre des index pertinents ;
- sécuriser les accès ;
- utiliser les transactions.

---

## Références conseillées

- Documentation officielle MySQL Reference Manual
- Sections SQL Statements, Functions and Operators, Stored Objects, InnoDB, Optimizer

