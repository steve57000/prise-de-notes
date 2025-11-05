# Le Modèle Logique de Données Relationnel (MLDR)

Le **Modèle Logique de Données Relationnel (MLDR)** est la deuxième étape de la modélisation des données dans la méthode Merise, après la création du Modèle Conceptuel de Données (MCD) et avant l’élaboration du Modèle Physique de Données (MPD).

Le MLDR consiste à transformer le MCD, encore indépendant de toute technologie, en une structure logique adaptée à un modèle relationnel. Il s’agit de préparer les données afin qu’elles puissent être aisément implémentées dans un Système de Gestion de Base de Données Relationnel (SGBDR).

## Objectifs du MLDR

1. **Passer du niveau conceptuel au niveau logique** :  
   Le MLDR formalise les entités, associations et attributs du MCD en tables, clés primaires, clés étrangères et types de données génériques.

2. **Assurer la cohérence et l’intégrité des données** :  
   Le MLDR met en avant les règles d’intégrité qui garantissent la justesse des liens entre tables (intégrité référentielle) et la cohérence des enregistrements.

3. **Préparer l’Implantation Physique** :  
   Le MLDR sert de base au futur Modèle Physique de Données (MPD). En identifiant dès le MLDR les clés, relations et attributs, on facilite le travail d’implémentation, d’optimisation et de paramétrage du MPD.

## Composants du MLDR

1. **Tables (ou Relations)** :  
   Les entités et associations du MCD sont traduites en tables. Les entités deviennent généralement des tables, tandis que les associations (notamment celles de type “plusieurs-à-plusieurs”) peuvent se transformer en tables de liaison.

2. **Clés Primaires (PK)** :  
   Chaque table se voit attribuer une clé primaire unique pour identifier ses enregistrements. Cela provient souvent de l’identifiant de l’entité dans le MCD.

3. **Clés Étrangères (FK)** :  
   Les liens entre entités sont traduits en clés étrangères. Une clé étrangère est un champ (ou un ensemble de champs) dans une table qui fait référence à la clé primaire d’une autre table, assurant l’intégrité référentielle.

4. **Types de Données Génériques** :  
   Au stade du MLDR, on attribue aux attributs des types de données génériques (exemple : Chaîne, Numérique, Date) sans encore spécifier les types techniques spécifiques (VARCHAR, INT, etc.). Cela viendra au MPD.

## Étapes de Construction du MLDR

1. **Partir du MCD** :  
   Identifiez les entités, leurs attributs et les relations entre elles.

2. **Dériver les Tables** :  
   - Chaque entité devient une table.  
   - Les associations “un-à-plusieurs” (1,n) se traduisent par l’ajout d’une clé étrangère dans la table correspondant à l’entité du côté “plusieurs”.  
   - Les associations “plusieurs-à-plusieurs” (n,n) sont généralement résolues en créant une table de liaison contenant au minimum les clés primaires des deux entités à relier.

3. **Définir les Clés** :  
   - Attribuez une clé primaire à chaque table, de préférence un identifiant unique par enregistrement.  
   - Créez les clés étrangères pour relier les tables entre elles.

4. **Attribuer des Types Génériques** :  
   Définissez des types de données génériques en cohérence avec la nature des attributs. Par exemple, un nom sera de type “Chaîne”, un salaire de type “Numérique”, une date de naissance de type “Date”.

## Exemple Simplifié

**MCD Hypothétique** :  
- Entités : *Client*(NumClient, NomClient, PrenomClient), *Commande*(NumCommande, DateCommande, MontantCommande), *Produit*(RefProduit, LibelleProduit, PrixUnitaire)
- Relations :  
  - Un Client passe plusieurs Commandes (1,n)  
  - Une Commande contient plusieurs Produits et un Produit est présent dans plusieurs Commandes (n,n)

**MLDR Dérivé** :  
- **Table CLIENT** :  
  - NumClient (PK)  
  - NomClient (Chaîne)  
  - PrenomClient (Chaîne)

- **Table COMMANDE** :  
  - NumCommande (PK)  
  - DateCommande (Date)  
  - MontantCommande (Numérique)  
  - NumClient (FK → CLIENT.NumClient)

- **Table PRODUIT** :  
  - RefProduit (PK)  
  - LibelleProduit (Chaîne)  
  - PrixUnitaire (Numérique)

- **Table LIGNE_COMMANDE** (résolution du n,n entre COMMANDE et PRODUIT) :  
  - NumCommande (FK → COMMANDE.NumCommande)  
  - RefProduit (FK → PRODUIT.RefProduit)  
  - Quantité (Numérique)

Dans le MLDR, on a maintenant des tables, des clés primaires, des clés étrangères, et une table de liaison pour gérer la relation n,n. Les types sont encore génériques (Chaîne, Numérique, Date).

## Conclusion

Le Modèle Logique de Données Relationnel constitue une étape charnière entre la définition conceptuelle des données et leur implémentation physique. En construisant un MLDR solide, on facilite grandement le travail ultérieur de mise en place du Modèle Physique de Données et l’optimisation de la base de données.
