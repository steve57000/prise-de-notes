# Le Modèle Physique de Données (MPD)

Le **Modèle Physique de Données (MPD)** est la dernière étape de la modélisation dans la méthode Merise. Après avoir conçu le Modèle Conceptuel de Données (MCD) et le Modèle Logique de Données (MLD), on passe au MPD, qui consiste à traduire les structures logiques en objets physiques propres au Système de Gestion de Base de Données (SGBD) choisi.

## Objectifs du MPD

1. **Implémentation Technique** :  
   Le MPD précise la manière dont les données seront stockées physiquement dans la base de données. Il intègre les spécificités du SGBD (Oracle, MySQL, PostgreSQL, SQL Server, etc.) ainsi que les aspects de performances, sécurité, et contraintes matérielles.

2. **Optimisation des Performances** :  
   Le MPD prend en compte les mécanismes d’optimisation comme les index, la répartition des données sur plusieurs disques, le partitionnement des tables, afin d’améliorer la vitesse d’accès et de manipulation des données.

3. **Respect des Contraintes Techniques** :  
   Le MPD doit s’adapter aux règles et particularités du SGBD (types de données disponibles, limites, mots-clés réservés) et de l’infrastructure matérielle (taille mémoire, espace disque, réseau).

## Composants du MPD

1. **Tables et Colonnes** :  
   Les entités du MLD se transforment en tables. Les attributs deviennent des colonnes, avec un type de données spécifique (INTEGER, VARCHAR, DATE, etc.).

2. **Clés Primaires et Étrangères** :  
   Les clés primaires, déjà identifiées dans le MLD, deviennent des contraintes physiques. Les relations entre tables sont implémentées via des clés étrangères.  
   
   Exemple :  
   ```sql
   CREATE TABLE Client (
       NumClient INT PRIMARY KEY,
       NomClient VARCHAR(50),
       PrenomClient VARCHAR(50),
       EmailClient VARCHAR(100)
   );

   CREATE TABLE Commande (
       NumCommande INT PRIMARY KEY,
       DateCommande DATE,
       MontantCommande DECIMAL(10,2),
       NumClient INT,
       FOREIGN KEY (NumClient) REFERENCES Client(NumClient)
   );
   ```

3. **Index, Vues, Contraintes et Triggers** :  
    Pour optimiser les performances et répondre aux besoins de la logique applicative, on ajoute des index sur certaines colonnes, on crée des vues pour faciliter la consultation, et on définit des contraintes (UNIQUE, CHECK) ainsi que des triggers (déclencheurs) pour garantir l’intégrité des données.
    
4. **Sécurité et Droits d’Accès** :  
    Le MPD tient également compte de la gestion des droits d’accès aux données, avec la création de rôles, d’utilisateurs, et l’application de restrictions d’accès aux tables ou aux colonnes sensibles.
    

## Processus de Construction

1. **Partir du MLD** :  
    On utilise le Modèle Logique de Données comme base. Celui-ci fournit déjà la structure relationnelle, les clés primaires, les clés étrangères et les types génériques (ex. Chaîne, Numérique, Date).
    
2. **Adaptation au SGBD** :  
    On choisit les types de données physiques (ex. VARCHAR, INT, DATE), on crée les tables, les index et les contraintes selon la syntaxe du SGBD cible.
    
3. **Optimisation et Ajustements** :  
    On introduit des index pour accélérer les requêtes fréquentes, on crée éventuellement des vues pour simplifier l’accès, et on définit des triggers pour s’assurer du maintien de l’intégrité référentielle et métier.
    
4. **Tests et Ajustements Finaux** :  
    Avant la mise en production, on teste le schéma physique (performances, robustesse, intégrité). On peut procéder à des ajustements (modification de types, ajout/suppression d’index, etc.).
    

## Exemple Simplifié

À partir d’un MLD où l’on a deux entités _Client_ et _Commande_, liées par une clé étrangère :

- **Table Client** :
```sql
CREATE TABLE Client (
    NumClient INT PRIMARY KEY,
    NomClient VARCHAR(50),
    PrenomClient VARCHAR(50),
    EmailClient VARCHAR(100)
);
```

- **Table Commande** :
```sql
CREATE TABLE Commande (
    NumCommande INT PRIMARY KEY,
    DateCommande DATE,
    MontantCommande DECIMAL(10,2),
    NumClient INT,
    FOREIGN KEY (NumClient) REFERENCES Client(NumClient)
);
```

- **Index sur DateCommande** :
```sql
CREATE INDEX idx_commande_date ON Commande(DateCommande);
```

Dans cet exemple, le MCD et le MLD ont été traduits en une structure prête à être exécutée sur un SGBD, respectant les contraintes, avec des optimisations simples (index).

## Conclusion

Le Modèle Physique de Données est l’aboutissement du processus de conception des données. Il reflète la réalité matérielle et logicielle du système, permettant une implémentation efficace, sécurisée et évolutive. En maîtrisant le MPD, on garantit la pérennité des données et la performance du système d’information en production.