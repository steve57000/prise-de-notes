
Retour à la note d'information : [[Plus ou Moins|Retour]]


```python

import random

  

#execute la commande suivante dans l'environnement d'execution du projet afin d'installer les bibliothèques nécessaires

#pip install -r requirements.txt

from colorama import Fore, init

  

#Initialisation de colorama (nécessaire sous Windows)

init(autoreset=True)

  

def jouer_partie():

    #Générer un nombre aléatoire entre 1 et 100

    nombre_secret = random.randint(1, 100)

    tentatives_restantes = 10

    #Messages d'accueil et d'introduction colorés

    print(Fore.CYAN + "Bienvenue au jeu du c'est Plus, c'est Moins")

    print(Fore.CYAN + "Vous devez deviner un nombre entre 1 et 100")

    print(Fore.YELLOW + "Attention !!! Vous n'avez que 10 tentatives...")

  

    while tentatives_restantes > 0:

        #Mise à jour du texte "tentative" ou "tentatives"

        texte = "tentatives"

        if tentatives_restantes == 1:

            texte = "tentative"

  

        #Changement de couleur du texte selon les tentatives restantes

        color_tentative = Fore.GREEN

        if tentatives_restantes <= 5:

            color_tentative = Fore.YELLOW

        if tentatives_restantes <= 3:

            color_tentative = Fore.RED

  

        try:

            entrer_number = int(

                input(f"Il vous reste {color_tentative}{tentatives_restantes} {texte}{Fore.RESET}. Devinez le nombre : "))

  

            #Vérifier si la saisie est bien comprise entre 1 et 100

            if entrer_number < 1 or entrer_number > 100:

                print(Fore.RED + "Vous devez saisir un nombre entre 1 et 100. Réessayez.")

                continue

  

            #Comparer la saisie avec le nombre à deviner

            if entrer_number < nombre_secret:

                print(Fore.BLUE + "C'est plus !!")

            elif entrer_number > nombre_secret:

                print(Fore.MAGENTA + "C'est moins !!")

            else:

                print(Fore.GREEN + f"Bravo, vous avez remporté la manche en {Fore.BLUE}{11 - tentatives_restantes} tentative(s)")

                return True

  

            #Décrémenter le nombre de tentatives restantes

            tentatives_restantes -= 1

  

        except ValueError:

            print(Fore.RED + "Entrée invalide, veuillez saisir un nombre entier.")

  

    if tentatives_restantes == 0:

        print(Fore.RED + f"Vous avez utilisé vos 10 tentatives. La réponse était : {nombre_secret}")

  

#On initialise les variables pour le nombres de victoire et defaite      

nb_victoire = 0

nb_defaite = 0

  

#Boucle pour pouvoir relancer une partie

while True:

    victoire = jouer_partie()

    #si victoire, on incrémente le nombre de victoire

    if victoire :

        nb_victoire += 1

    #sinon on incrémente le nombre de défaite

    else:

        nb_defaite += 1

  

    #On informe l'utilisateur de son nombre de victoire(s)

    print(Fore.BLUE + f"Vous avez {nb_victoire} victoire(s)")

  

    #On informe l'utilisateur de son nombre de défaite(s)

    print(Fore.MAGENTA + f"Vous avez {nb_defaite} défaite(s)")

  

    #Demander à l'utilisateur s'il souhaite rejouer

    rejouer = input(Fore.YELLOW + "Voulez-vous rejouer ? (o/n) : ").lower()

    if rejouer != 'o':

        print(Fore.CYAN + "Merci d'avoir joué ! À bientôt.")

        break

```
