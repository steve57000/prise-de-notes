#bdd #sql #important 

# Syntaxe SQL : INSERT, UPDATE, DELETE avec Jointures

## **1. INSERT avec JOIN**

### Syntaxe :
```sql
INSERT INTO table_cible (colonne1, colonne2, ...)
SELECT colonne1, colonne2, ...
FROM table_source
INNER JOIN autre_table
ON condition_de_jointure
WHERE condition_facultative;
```

### Exemple :

Requête d'insertion avec jointure: Ajoutez un nouvel employé associé à la location SEATTLE.

```sql
INSERT INTO Employee (firstname, lastname, job, hire_date, salary, commission, dep_id)
SELECT 'LAURENT', 'LALLEMENT', 'DEV', '2025-01-14', 500, 50, d.id
FROM Employee e INNER JOIN Department d ON e.dep_id = d.id
WHERE location = 'SEATTLE';
```

Il est possible d'utiliser une requête imbriquée à la place mais moins bien optimisée (2 requêtes au lieu d'1)

```sql
INSERT INTO Employee (firstname, lastname, job, hire_date, salary, commission, dep_id)
VALUES ('LAURENT', 'LALLEMENT', 'DEV', '2025-01-14', 500, 50, 
		(SELECT TOP 1 id
		 FROM Department
		 WHERE location = 'SEATTLE'
		 )
)
```

## **2. UPDATE avec JOIN**

### Syntaxe :

```sql
UPDATE table_cible
SET table_cible.colonne = nouvelle_valeur, ...
FROM table_cible
INNER JOIN autre_table
ON condition_de_jointure
WHERE condition_facultative;
```

### Exemple :

Modifiez toutes les personnes associées à NEW YORK pour les affecter à 'JERSEY'

```sql
-- Ici on n'a que deux requêtes au total, une imbriquée et l'update
UPDATE Employee
SET dep_id = 
(
	SELECT TOP 1 id
	FROM Department
	WHERE location = 'JERSEY'
)
FROM Employee e
INNER JOIN Department d ON e.dep_id = d.id
WHERE location = 'ATLANTA'

-- Même chose, mais avec 3 requête exécutées, car il y'a 2 requêtes imbriquées + l'update
UPDATE Employee
SET dep_id = 
(
	SELECT TOP 1 id
	FROM Department
	WHERE location = 'JERSEY'
)
WHERE dep_id = 
(
	SELECT TOP 1 id
	FROM Department
	WHERE location = 'ATLANTA'
)
```

## **3. DELETE avec JOIN**

### Syntaxe :

```sql
DELETE table_cible
FROM table_cible
INNER JOIN autre_table
ON condition_de_jointure
WHERE condition_facultative;
```

### Exemple :

Supprimez uniquement les employés dont le 'lastname' est 'VERLE' qui sont associés au département 'JERSEY'

```sql
DELETE Employee
FROM Employee e INNER JOIN Department d ON e.dep_id = d.id
WHERE lastname = 'VERLE' and location = 'JERSEY';
```


# Les fonctions


<font color="#ff0000">Les fonctions doivent toujours retourner quelque chose !</font>


```sql
GO
CREATE FUNCTION FCT_TrucSimple()
RETURNS VARCHAR(50)
AS
BEGIN
	RETURN 'Truc simple'
END
GO
SELECT dbo.FCT_TrucSimple()
```


```sql
DROP FUNCTION dbo.FCT_GetDepartmentByLocation;

GO
CREATE FUNCTION FCT_GetDepartmentByLocation
(
	@Location VARCHAR(50)
)
RETURNS INT
AS
BEGIN
	RETURN (
		SELECT id 
		FROM Department
		WHERE location = @Location
	)
END
GO

SELECT dbo.FCT_GetDepartmentByLocation('NEW YORK')
```



```sql
-- Base programme (fichier de code)
-- NomFichier | Departement
-- fichier.py | 1

-- Ces valeurs n'étaient que connues par identifiant dans la base de données
-- Donc je ne savais dire que 1 valait CM-CIC.
-- 1 => CM-CIC
-- 2 => EID
-- 4 => EIS
-- ...
GO
CREATE OR ALTER FUNCTION FCT_GetValueNameById
(
	@Id INT
)
RETURNS VARCHAR(10)
AS
BEGIN
	DECLARE @Value VARCHAR(10)

	IF @Id = 1
		SET @Value = 'CM-CIC'
	ELSE IF @Id = 2
		SET @Value = 'EID'
	ELSE IF @Id = 4
		SET @Value = 'EIS'
	ELSE
		SET @Value = 'Inconnu'

	RETURN @Value
END
GO

SELECT dbo.FCT_GetValueNameById(2)

SELECT 
	*,
	dbo.FCT_GetValueNameById(dep_id) AS DepName
FROM Employee

```

# Les procédures stockées

Les procédures stockées permettent d'enchainer les instructions
Ex : début transaction, création table temporaire, insertion données, sélection des données + return, suppression table temporaire, commit par exemple.

En plus possibilité de gérer les exceptions.

```sql
GO
CREATE OR ALTER PROCEDURE SP_InsertNewDepartmentSelectHisId
(
	@name VARCHAR(50),
	@location VARCHAR(50)
)
AS
BEGIN
	-- N'importe quelles instructions
	-- Première instruction INSERT INTO
	INSERT INTO Department (name, location)
	VALUES (@name, @location)

	-- Declaration + affectation de variable
	-- @@Identity permet de récupérer le dernier id inséré 
	-- (quelque soit la table de la portée actuelle)
	DECLARE @LastInsertedId INT = @@IDENTITY

	SELECT @LastInsertedId
END
GO

EXEC SP_InsertNewDepartmentSelectHisId 'MonNom', 'MaLocation'

GO
CREATE OR ALTER PROCEDURE SP_GetEmployeeListFromDepartmentLocation
(
	@location VARCHAR(50)
)
AS
BEGIN
	-- On vérifie que le département existe
	IF EXISTS (SELECT * FROM Department WHERE location = @location)
	BEGIN
		-- S'il existe on retourne la liste des employés
		SELECT *
		FROM Employee e
		INNER JOIN Department d ON e.dep_id = d.id
		WHERE location = @location
	END
	ELSE 
	BEGIN
		-- Sinon on retourne un message explicite
		SELECT 'Le département n''existe pas'
	END
END

EXEC SP_GetEmployeeListFromDepartmentLocation 'QSDQSD'
```







