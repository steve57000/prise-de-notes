# MySQL — Fonctions avancées et usage pro complet

> Version de référence conseillée : **MySQL 8.4 LTS**
>
> Ce document vise un usage professionnel : reporting, optimisation, SQL avancé, industrialisation, administration et performance.

---

## 1. Vision pro : ce qui distingue un usage avancé

Un usage avancé de MySQL ne consiste pas seulement à écrire des `SELECT` compliqués.
Il s'agit de savoir :

- modéliser proprement ;
- écrire des requêtes analytiques ;
- optimiser l'exécution ;
- automatiser via procédures, triggers et événements ;
- exploiter JSON ;
- sécuriser les accès ;
- diagnostiquer les lenteurs ;
- maintenir la base dans la durée.

---

## 2. CTE — Common Table Expressions

Les CTE rendent les requêtes plus lisibles et maintenables.

### CTE simple

```sql
WITH ventes_clients AS (
    SELECT client_id, SUM(total) AS total_ventes
    FROM commandes
    GROUP BY client_id
)
SELECT *
FROM ventes_clients
WHERE total_ventes > 1000;
```

### CTE avec plusieurs blocs

```sql
WITH
clients_actifs AS (
    SELECT id, nom
    FROM clients
    WHERE actif = 1
),
ventes AS (
    SELECT client_id, SUM(total) AS total_ventes
    FROM commandes
    GROUP BY client_id
)
SELECT c.nom, v.total_ventes
FROM clients_actifs c
JOIN ventes v ON c.id = v.client_id;
```

### CTE récursive

Très utile pour des hiérarchies.

```sql
WITH RECURSIVE categories_tree AS (
    SELECT id, nom, parent_id, 0 AS niveau
    FROM categories
    WHERE parent_id IS NULL

    UNION ALL

    SELECT c.id, c.nom, c.parent_id, ct.niveau + 1
    FROM categories c
    JOIN categories_tree ct ON c.parent_id = ct.id
)
SELECT * FROM categories_tree;
```

---

## 3. Fonctions de fenêtre (Window Functions)

Elles permettent d'effectuer des calculs analytiques sans perdre le détail ligne par ligne.

### ROW_NUMBER()

```sql
SELECT
    id,
    client_id,
    total,
    ROW_NUMBER() OVER (PARTITION BY client_id ORDER BY total DESC) AS rang
FROM commandes;
```

### RANK() / DENSE_RANK()

```sql
SELECT
    vendeur_id,
    chiffre_affaires,
    RANK() OVER (ORDER BY chiffre_affaires DESC) AS classement
FROM vendeurs_stats;
```

### LAG() / LEAD()

```sql
SELECT
    date_vente,
    montant,
    LAG(montant) OVER (ORDER BY date_vente) AS montant_precedent,
    LEAD(montant) OVER (ORDER BY date_vente) AS montant_suivant
FROM ventes_journalieres;
```

### SUM() OVER()

```sql
SELECT
    date_vente,
    montant,
    SUM(montant) OVER (ORDER BY date_vente) AS cumul_ventes
FROM ventes_journalieres;
```

### AVG() OVER(PARTITION BY ...)

```sql
SELECT
    departement,
    employe,
    salaire,
    AVG(salaire) OVER (PARTITION BY departement) AS salaire_moyen_departement
FROM employes;
```

---

## 4. Sous-requêtes avancées

### Sous-requête corrélée

```sql
SELECT c1.*
FROM commandes c1
WHERE total > (
    SELECT AVG(c2.total)
    FROM commandes c2
    WHERE c2.client_id = c1.client_id
);
```

### EXISTS

```sql
SELECT *
FROM clients c
WHERE EXISTS (
    SELECT 1
    FROM commandes co
    WHERE co.client_id = c.id
);
```

### NOT EXISTS

```sql
SELECT *
FROM clients c
WHERE NOT EXISTS (
    SELECT 1
    FROM commandes co
    WHERE co.client_id = c.id
);
```

---

## 5. Fonctions JSON

MySQL gère le type `JSON` et de nombreuses fonctions associées.

### Création de table JSON

```sql
CREATE TABLE logs_api (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    payload JSON NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Extraction

```sql
SELECT JSON_EXTRACT(payload, '$.user.name') AS nom
FROM logs_api;
```

Version simplifiée :

```sql
SELECT payload->'$.user.name' AS nom_json
FROM logs_api;
```

Texte non JSON :

```sql
SELECT payload->>'$.user.name' AS nom
FROM logs_api;
```

### Construction JSON

```sql
SELECT JSON_OBJECT(
    'id', id,
    'nom', nom,
    'email', email
) AS client_json
FROM clients;
```

### Tableau JSON

```sql
SELECT JSON_ARRAY('Java', 'Spring', 'MySQL');
```

### Mise à jour JSON

```sql
UPDATE logs_api
SET payload = JSON_SET(payload, '$.status', 'processed')
WHERE id = 1;
```

### Suppression de clé JSON

```sql
UPDATE logs_api
SET payload = JSON_REMOVE(payload, '$.debug')
WHERE id = 1;
```

### Validation de schéma JSON

```sql
SELECT JSON_SCHEMA_VALID(
    '{"type":"object","required":["name"]}',
    '{"name":"Alice"}'
);
```

---

## 6. Fonctions texte avancées

```sql
CONCAT()
CONCAT_WS()
SUBSTRING()
LEFT()
RIGHT()
LENGTH()
CHAR_LENGTH()
LOWER()
UPPER()
TRIM()
REPLACE()
REGEXP_LIKE()
REGEXP_REPLACE()
REGEXP_SUBSTR()
```

Exemples :

```sql
SELECT CONCAT(prenom, ' ', nom) AS nom_complet FROM utilisateurs;
SELECT REGEXP_LIKE(email, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$') AS email_valide FROM utilisateurs;
SELECT REGEXP_REPLACE(telephone, '[^0-9]', '') AS telephone_nettoye FROM clients;
```

---

## 7. Fonctions date/heure avancées

```sql
NOW()
CURDATE()
CURTIME()
DATE()
TIME()
YEAR()
MONTH()
DAY()
DATE_FORMAT()
DATEDIFF()
TIMESTAMPDIFF()
DATE_ADD()
DATE_SUB()
LAST_DAY()
```

Exemples :

```sql
SELECT DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s');
SELECT TIMESTAMPDIFF(YEAR, date_naissance, CURDATE()) AS age FROM clients;
SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);
SELECT LAST_DAY(CURDATE());
```

---

## 8. Fonctions conditionnelles

```sql
IF()
IFNULL()
NULLIF()
COALESCE()
CASE
```

Exemples :

```sql
SELECT IF(stock > 0, 'Disponible', 'Rupture') AS etat FROM produits;
SELECT COALESCE(telephone, mobile, 'Non renseigné') AS contact FROM clients;
SELECT
    nom,
    CASE
        WHEN note >= 16 THEN 'Très bien'
        WHEN note >= 14 THEN 'Bien'
        WHEN note >= 10 THEN 'Passable'
        ELSE 'Échec'
    END AS appreciation
FROM examens;
```

---

## 9. Fonctions numériques et agrégats avancés

```sql
ROUND()
TRUNCATE()
CEIL()
FLOOR()
ABS()
MOD()
POWER()
SQRT()
RAND()
STDDEV()
VARIANCE()
GROUP_CONCAT()
```

Exemples :

```sql
SELECT ROUND(prix_ttc, 2) FROM produits;
SELECT GROUP_CONCAT(nom ORDER BY nom SEPARATOR ', ') FROM tags;
```

---

## 10. Vues avancées

### Vue de reporting

```sql
CREATE VIEW vue_ca_mensuel AS
SELECT
    DATE_FORMAT(date_commande, '%Y-%m') AS mois,
    SUM(total) AS chiffre_affaires
FROM commandes
GROUP BY DATE_FORMAT(date_commande, '%Y-%m');
```

### Vue sécurisée métier

```sql
CREATE VIEW vue_clients_public AS
SELECT id, nom, ville
FROM clients;
```

Les vues simplifient l'accès aux données, standardisent le reporting et limitent l'exposition de colonnes sensibles.

---

## 11. Procédures stockées

### Procédure simple

```sql
DELIMITER //

CREATE PROCEDURE liste_clients()
BEGIN
    SELECT * FROM clients;
END //

DELIMITER ;
```

### Avec paramètre d'entrée

```sql
DELIMITER //

CREATE PROCEDURE clients_par_ville(IN p_ville VARCHAR(100))
BEGIN
    SELECT * FROM clients WHERE ville = p_ville;
END //

DELIMITER ;
```

### Avec transaction

```sql
DELIMITER //

CREATE PROCEDURE transfert(IN p_source INT, IN p_cible INT, IN p_montant DECIMAL(10,2))
BEGIN
    START TRANSACTION;

    UPDATE comptes SET solde = solde - p_montant WHERE id = p_source;
    UPDATE comptes SET solde = solde + p_montant WHERE id = p_cible;

    COMMIT;
END //

DELIMITER ;
```

---

## 12. Fonctions stockées

```sql
DELIMITER //

CREATE FUNCTION calcul_tva(ht DECIMAL(10,2), taux DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN ht * (1 + taux / 100);
END //

DELIMITER ;
```

Utilisation :

```sql
SELECT calcul_tva(100, 20);
```

---

## 13. Triggers

### Avant insertion

```sql
DELIMITER //

CREATE TRIGGER before_insert_produit
BEFORE INSERT ON produits
FOR EACH ROW
BEGIN
    IF NEW.prix < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Le prix ne peut pas être négatif';
    END IF;
END //

DELIMITER ;
```

### Journalisation après mise à jour

```sql
DELIMITER //

CREATE TRIGGER after_update_stock
AFTER UPDATE ON produits
FOR EACH ROW
BEGIN
    INSERT INTO logs_stock(produit_id, ancien_stock, nouveau_stock, date_log)
    VALUES (NEW.id, OLD.stock, NEW.stock, NOW());
END //

DELIMITER ;
```

---

## 14. Event Scheduler

Permet d'exécuter automatiquement des tâches planifiées.

```sql
SET GLOBAL event_scheduler = ON;
```

Créer un événement quotidien :

```sql
CREATE EVENT purge_logs_anciens
ON SCHEDULE EVERY 1 DAY
DO
    DELETE FROM logs_api
    WHERE created_at < NOW() - INTERVAL 90 DAY;
```

---

## 15. Requêtes préparées SQL dynamiques

```sql
SET @table_name = 'clients';
SET @sql = CONCAT('SELECT COUNT(*) AS total FROM ', @table_name);

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
```

Très utile dans les procédures stockées ou scripts d'administration.

---

## 16. Analyse d'exécution avec EXPLAIN

```sql
EXPLAIN SELECT *
FROM commandes
WHERE client_id = 10
ORDER BY date_commande DESC;
```

À surveiller :

- type d'accès ;
- index utilisé ;
- nombre estimé de lignes ;
- présence de `Using filesort` ;
- présence de `Using temporary`.

Version détaillée :

```sql
EXPLAIN FORMAT=JSON
SELECT * FROM commandes WHERE client_id = 10;
```

---

## 17. Index avancés

### Index composite

```sql
CREATE INDEX idx_commandes_client_date ON commandes(client_id, date_commande);
```

### Index unique

```sql
CREATE UNIQUE INDEX idx_clients_email ON clients(email);
```

### Index sur colonne générée

```sql
ALTER TABLE clients
ADD COLUMN email_domain VARCHAR(100)
GENERATED ALWAYS AS (SUBSTRING_INDEX(email, '@', -1)) STORED;

CREATE INDEX idx_clients_email_domain ON clients(email_domain);
```

### Full-text

```sql
CREATE FULLTEXT INDEX idx_articles_texte ON articles(titre, contenu);

SELECT *
FROM articles
WHERE MATCH(titre, contenu) AGAINST('mysql performance' IN NATURAL LANGUAGE MODE);
```

---

## 18. Colonnes générées

### STORED
Stockée physiquement.

### VIRTUAL
Calculée à la lecture.

```sql
CREATE TABLE ventes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantite INT NOT NULL,
    prix_unitaire DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) GENERATED ALWAYS AS (quantite * prix_unitaire) STORED
);
```

---

## 19. Partitionnement

Utile pour les très gros volumes.

```sql
CREATE TABLE logs (
    id BIGINT NOT NULL,
    created_at DATE NOT NULL,
    message TEXT,
    PRIMARY KEY (id, created_at)
)
PARTITION BY RANGE (YEAR(created_at)) (
    PARTITION p2024 VALUES LESS THAN (2025),
    PARTITION p2025 VALUES LESS THAN (2026),
    PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

Cas adaptés :

- historiques volumineux ;
- logs ;
- données temporelles massives.

---

## 20. Transactions avancées et contrôle de concurrence

### Niveaux d'isolation

```sql
READ UNCOMMITTED
READ COMMITTED
REPEATABLE READ
SERIALIZABLE
```

Définir le niveau :

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

### Verrouillage explicite

```sql
SELECT * FROM comptes WHERE id = 1 FOR UPDATE;
```

```sql
SELECT * FROM produits WHERE id = 10 LOCK IN SHARE MODE;
```

---

## 21. Gestion des erreurs dans les routines

```sql
DELIMITER //

CREATE PROCEDURE exemple_handler()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    START TRANSACTION;
    -- opérations SQL
    COMMIT;
END //

DELIMITER ;
```

Signaler une erreur métier :

```sql
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'Erreur métier personnalisée';
```

---

## 22. Sécurité et permissions pro

### Principe du moindre privilège

Éviter de donner `ALL PRIVILEGES` à une application.

### Exemple propre

```sql
CREATE USER 'app_readwrite'@'%' IDENTIFIED BY 'MotDePasseFort!';
GRANT SELECT, INSERT, UPDATE, DELETE ON crm_prod.* TO 'app_readwrite'@'%';
```

### Compte lecture seule

```sql
CREATE USER 'reporting_user'@'%' IDENTIFIED BY 'LectureSeulement!';
GRANT SELECT ON crm_prod.* TO 'reporting_user'@'%';
```

---

## 23. Administration et diagnostic

### Variables utiles

```sql
SHOW VARIABLES;
SHOW VARIABLES LIKE 'max_connections';
SHOW VARIABLES LIKE 'sql_mode';
```

### Statut serveur

```sql
SHOW STATUS;
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Slow_queries';
```

### Sessions en cours

```sql
SHOW PROCESSLIST;
```

---

## 24. Performance Schema et sys schema

Pour une analyse sérieuse des performances, utiliser :

- `performance_schema`
- `sys`

Exemple :

```sql
SELECT * FROM sys.statements_with_runtimes_in_95th_percentile;
```

```sql
SELECT * FROM sys.schema_table_statistics ORDER BY rows_fetched DESC;
```

---

## 25. Optimisation pratique des requêtes

### Mauvais réflexes à éviter

- fonctions sur colonnes indexées dans le `WHERE` ;
- `SELECT *` partout ;
- index inutiles ou redondants ;
- jointures sur colonnes non indexées ;
- tri sur gros volumes sans index.

### Exemple à éviter

```sql
SELECT *
FROM commandes
WHERE YEAR(date_commande) = 2025;
```

### Version optimisable

```sql
SELECT *
FROM commandes
WHERE date_commande >= '2025-01-01'
  AND date_commande < '2026-01-01';
```

---

## 26. Import / export professionnel

### Dump logique

```bash
mysqldump -u root -p ma_base > sauvegarde.sql
```

### Restauration

```bash
mysql -u root -p ma_base < sauvegarde.sql
```

### Export sélectif

```bash
mysqldump -u root -p ma_base clients commandes > export_metier.sql
```

---

## 27. Cas d'usage pro : reporting complet

```sql
WITH commandes_mois AS (
    SELECT
        DATE_FORMAT(date_commande, '%Y-%m') AS mois,
        client_id,
        SUM(total) AS total_client
    FROM commandes
    GROUP BY DATE_FORMAT(date_commande, '%Y-%m'), client_id
),
classement AS (
    SELECT
        mois,
        client_id,
        total_client,
        DENSE_RANK() OVER (PARTITION BY mois ORDER BY total_client DESC) AS rang
    FROM commandes_mois
)
SELECT
    cl.mois,
    c.nom,
    cl.total_client,
    cl.rang
FROM classement cl
JOIN clients c ON c.id = cl.client_id
WHERE cl.rang <= 3
ORDER BY cl.mois, cl.rang;
```

---

## 28. Cas d'usage pro : déduplication

```sql
WITH doublons AS (
    SELECT
        id,
        email,
        ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM clients
)
DELETE FROM clients
WHERE id IN (
    SELECT id FROM doublons WHERE rn > 1
);
```

> En pratique, on valide toujours ce type d'opération avec un `SELECT` avant suppression réelle.

---

## 29. Cas d'usage pro : audit métier

```sql
CREATE TABLE audit_clients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    action_type VARCHAR(20) NOT NULL,
    ancienne_valeur JSON,
    nouvelle_valeur JSON,
    changed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Trigger associé :

```sql
DELIMITER //

CREATE TRIGGER audit_client_update
AFTER UPDATE ON clients
FOR EACH ROW
BEGIN
    INSERT INTO audit_clients (client_id, action_type, ancienne_valeur, nouvelle_valeur)
    VALUES (
        NEW.id,
        'UPDATE',
        JSON_OBJECT('nom', OLD.nom, 'email', OLD.email),
        JSON_OBJECT('nom', NEW.nom, 'email', NEW.email)
    );
END //

DELIMITER ;
```

---

## 30. Architecture SQL pro recommandée

### Couche données
- tables normalisées ;
- contraintes ;
- index.

### Couche métier SQL
- vues ;
- procédures ;
- fonctions ;
- triggers ciblés.

### Couche observabilité
- logs ;
- audit ;
- performance_schema ;
- slow query log.

### Couche sécurité
- rôles distincts ;
- comptes séparés ;
- privilèges minimaux.

---

## 31. Check-list expert MySQL

Tu es déjà très solide si tu sais faire :

- CTE simples et récursives ;
- fonctions de fenêtre ;
- JSON et colonnes générées ;
- procédures, fonctions, triggers ;
- index composites et full-text ;
- `EXPLAIN` et optimisation ;
- transactions et verrouillage ;
- audit, sécurité, partitionnement ;
- reporting analytique propre.

---

## 32. Résumé ultra-pro

MySQL avancé = **lisibilité + performance + automatisation + sécurité + observabilité**.

Quand tu écris une requête pro, tu dois toujours te demander :

1. Est-elle correcte ?
2. Est-elle lisible ?
3. Est-elle index-friendly ?
4. Est-elle sûre ?
5. Est-elle maintenable ?

---

## Références conseillées

- MySQL Reference Manual
- Fonctions de fenêtre
- CTE / WITH
- JSON Functions
- CREATE INDEX / EXPLAIN
- Stored Procedures, Functions, Triggers, Events
- Performance Schema / sys schema

