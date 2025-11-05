
#int :  =="integer" = entier==

	la fonction int permet de transformer un "string" en "int"
	(une chaine de caractère en nombre entier)


#input : ==champs de saisie==

	  la fonction input permet d'afficher un prompt dans la console,       et attend la réponse de l'utilisateur


## Qu’est ce qu’une boucle WHILE ?

##### Rôle d’une boucle “tant que”

Le rôle d’une **boucle** #WHILE est d’exécuter un bloc de code, c’est-à-dire un certain nombre d'instructions, **tant qu’une condition est vraie**.

  **`while age == 0 :`**
	  **`try :`** 
		   **`age_textuel = input("saisissez votre age : ")`** 
		   **`age = int(age_textuel)`** 
		   **`age = int(input("saisissez votre age : "))`** 
	   **`except :`**
		   **`print("Saisissez un entier")`**

###### L'instruction #try et #except :

Les clauses `try` et `except` fonctionnent ensemble. Elles permettent de tester (try) un code qui peut potentiellement poser problème et de définir les actions à prendre si une exception est effectivement rencontrée (except).

## Qu’est ce qu’une boucle FOR ?

La boucle #for permet de faire des **itérations** sur un élément, comme une chaine de caractères par exemple ou une liste.

##### Range
Il est possible de créer une boucle facilement avec #range :
		
	  for i in range(0,100):
		    print(i)

##### Stopper une boucle avec break

Pour stopper immédiatement une boucle on peut utiliser le mot clé #break 

##### Boucle for imbriquée exemple

	   for i in range(11):
	
		print("table de : " + str(i))
	
		for j in range(11):
	
			#print("à multiplier avec : " + str(i))
	
		        print(f"{i}x {j} = {i * j}")
	
		  print(f"Fin de la table de : {i}")
	
		  print("----------------------")



