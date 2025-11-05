Retour à la note  : [[Les fonctions|Retour]]

```python
from colorama import init, Fore, Style, Back  
  
# Initialisation de colorama (nécessaire pour Windows)  
init(autoreset=True)  
  
# Définition des variables pour les couleurs et styles  
TEXT_CYAN_LUMINEUX = Style.BRIGHT + Fore.CYAN  
TEXT_YELLOW_LUMINEUX = Style.BRIGHT + Fore.YELLOW  
TEXT_MAGENTA_LUMINEUX = Style.BRIGHT + Fore.MAGENTA  
TEXT_LUMINEUX_BACK_MAGENTA = Back.MAGENTA + Style.BRIGHT  
TIRER_UNE_LIGNE = Fore.MAGENTA + "-" * 40  
  
########################################################  
# ---------------- Année bissextile ------------------ #  
########################################################  
  
def est_bissextile(annee):  
    return annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0)  
  
def demander_annee():  
    while True:  
        try:  
            annee = int(input(f"{TEXT_LUMINEUX_BACK_MAGENTA}Saisissez une année {Style.RESET_ALL}(ou tapez 0 pour quitter): {TEXT_MAGENTA_LUMINEUX}"))  
            return annee  
        except ValueError:  
            print(TIRER_UNE_LIGNE)  
            print(Fore.RED + "Erreur : Veuillez entrer un nombre valide.")  
            print(TIRER_UNE_LIGNE)  
  
########################################################  
# ------------ Nombre d'années bissextiles ----------- #   
########################################################  
  
def nombres_annee_bissextile(annee_depart, annee_fin):  
  
    return sum(1 for i in range(annee_depart, annee_fin + 1) if est_bissextile(i))  
  
#########################################################  
# ---------------- Max trois nombres ------------------ #
#########################################################  
  
def max_trois_nombres(liste):  
    return max(liste)  
  
#########################################################  
# -------------------- Calcul Aire -------------------- #
#########################################################  
  
def calcul_aire(longueur, largeur):  
    return longueur * largeur  
  
#########################################################  
# ------------------ Menu principal ----------------    #  
#########################################################  
  
def menu_principal():  
    print(Fore.GREEN + "Quel test voulez-vous effectuer ?")  
    print("Tapez : a pour le test d'année bissextile")  
    print("Tapez : b pour le test du plus grand des trois nombres")  
    print("Tapez : c pour le calcul de l'aire d'un rectangle")  
    print("Tapez : d pour le nombre d'années bissextiles")  
    print("Tapez : 0 pour quitter")  
    return input(Fore.GREEN + "Entrez votre choix : ").lower()  
  
def retourner_choix_test():  
    print(Fore.CYAN + "À tout moment, tapez -1 pour revenir au choix de test.")  
  
#########################################################  
# ------------------ Boucles de tests ----------------  # 
#########################################################  
  
def boucle_test_bissextile():  
    print(TIRER_UNE_LIGNE)  
    print(Fore.YELLOW + "Test de l'année bissextile")  
    retourner_choix_test()  
    print(TIRER_UNE_LIGNE)  
  
    while True:  
        annee = demander_annee()  
        if annee == 0:  
            break  
        if annee == -1:  
            return  
  
        if est_bissextile(annee):  
            print(f"{Fore.GREEN}L'année {TEXT_CYAN_LUMINEUX}{annee} est bissextile.")  
        else:  
            print(f"{Fore.RED}L'année {TEXT_YELLOW_LUMINEUX}{annee} n'est pas bissextile.")  
        print(TIRER_UNE_LIGNE)  
  
def boucle_test_max_nombres():  
    print(TIRER_UNE_LIGNE)  
    print(Fore.YELLOW + "Test du plus grand des trois nombres")  
    retourner_choix_test()  
    print(TIRER_UNE_LIGNE)  
  
    while True:  
        nombres = []  
        try:  
            for i in range(3):  
                nombre = int(input(f"Entrez le nombre {i+1} : "))  
                if nombre == -1:  
                    return  
                nombres.append(nombre)  
  
            print(f"Le plus grand nombre est : {max_trois_nombres(nombres)}")  
  
        except ValueError:  
            print(Fore.RED + "Veuillez entrer un nombre valide.")  
        print(TIRER_UNE_LIGNE)  
  
def boucle_test_calcul_aire():  
    print(TIRER_UNE_LIGNE)  
    print(Fore.YELLOW + "Test du calcul de l'aire")  
    retourner_choix_test()  
    print(TIRER_UNE_LIGNE)  
  
    while True:  
        try:  
            longueur = int(input("Entrez la longueur : "))  
            if longueur == -1:  
                return  
            largeur = int(input("Entrez la largeur : "))  
            if largeur == -1:  
                return  
  
            print(f"L'aire du rectangle est : {calcul_aire(longueur, largeur)}")  
        except ValueError:  
            print(Fore.RED + "Veuillez entrer des nombres valides.")  
        print(TIRER_UNE_LIGNE)  
  
def boucle_test_nombre_annees_bissextiles():  
    print(TIRER_UNE_LIGNE)  
    print(Fore.YELLOW + "Test du nombre d'années bissextiles")  
    retourner_choix_test()  
    print(TIRER_UNE_LIGNE)  
  
    while True:  
        try:  
            annee_depart = int(input("Entrez l'année de départ : "))  
            if annee_depart == -1:  
                return  
            annee_fin = int(input("Entrez l'année de fin : "))  
            if annee_fin == -1:  
                return  
            ordre_année_min = min(annee_depart, annee_fin)  
            ordre_année_max = max(annee_depart, annee_fin)  
            print(f"Le nombre d'années bissextiles entre {ordre_année_min} et {ordre_année_max} est : {nombres_annee_bissextile(ordre_année_min, ordre_année_max)}")  
        except ValueError:  
            print(Fore.RED + "Veuillez entrer des nombres valides.")  
        print(TIRER_UNE_LIGNE)  
  
#########################################################  
""" ------------------ Main loop -------------------- """  
#########################################################  
  
def main():  
    while True:  
        choix_test = menu_principal()  
  
        if choix_test == '0':  
            print(Fore.CYAN + "Fin du programme.")  
            break  
  
        if choix_test == 'a':  
            boucle_test_bissextile()  
  
        elif choix_test == 'b':  
            boucle_test_max_nombres()  
  
        elif choix_test == 'c':  
            boucle_test_calcul_aire()  
  
        elif choix_test == 'd':  
            boucle_test_nombre_annees_bissextiles()  
  
if __name__ == "__main__":  
    main()
```