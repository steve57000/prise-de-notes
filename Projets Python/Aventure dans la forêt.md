
```python  
print("Bienvenue dans la Forêt Enchantée.")  
##############################################  
### -------- Entrer dans la forêt -------- ###  
##############################################  
chemin = int(input("Deux chemins s'offrent à toi. Choisis 1 pour le sentier sombre, ou 2 pour le sentier éclairé : "))  
  
if chemin == 1:  
    print("Tu entends un bruit étrange.")  
    action = int(input("Que fais-tu ? 1 : T'arrêter pour écouter. 2 : Continuer rapidement. "))  
    if action == 1:  
        print("C'était un piège ! Les brigands t'ont attrapé. Fin de l'aventure.")  
        exit()  
    elif action == 2:  
        print("Tu as évité le danger et tu continues ta route.")  
elif chemin == 2:  
    print("Un loup-garou apparaît !")  
    action = int(input("Que fais-tu ? 1 : Courir pour te cacher. 2 : Te battre avec une épée trouvée par terre. "))  
    if action == 1:  
        print("Le loup-garou t'a rattrapé. Fin de l'aventure.")  
        exit()  
    elif action == 2:  
        print("Tu as vaincu le loup-garou et continues ta route.")  
  
  
##############################################  
###---------- La rivière magique --------- ###  
##############################################  
  
danger = int(input("Tu arrives devant une rivière, tu as deux possibilité. Choisis 1 pour traverser à la nage, ou 2 pour suivre la rivière en espérant trouver un pont plus loin "))  
  
if danger == 1:  
    print("Mauvais choix. L'eau de la rivière est empoisonnée. Fin de l'aventure.")  
    exit()  
elif chemin == 2:  
    print("Bravo ! Tu trouves un pont après quelques minutes de marche.")  
  
##############################################  
###---------- Le pont maudit --------- ###  
##############################################  
  
print("Je suis léger comme une plume, mais personne ne peut me tenir longtemps. Qui suis-je ?")  
enigme = int(input(" 1 : Le souffle, 2 : L'eau, 3 : L'ombre "))  
  
if enigme == 1:  
    print("Félicitation ! La créature te laisse passer et tu continue ta quête.")  
elif enigme == 2 or 3 :  
    print("Mauvaise réponse. La créature te jette dans la rivière et tu échoues. ")  
    exit()  
  
  
##############################################  
###---------- Sortie de la forêt --------- ###  
##############################################  
  
print("Après avoir traversé le pont, tu aperçois enfin la sortie de la forêt. Cependant, un dernier choix crucial s'impose :")  
dernier_choix = int(input("Pour prendre un raccourci à travers un champ de fleurs toxiques tape 1. Sit tu veux suivre le sentier principal, plus long mais sûr tape 2 "))  
  
if dernier_choix == 1:  
    print("Le champ de fleurs toxiques t'endort à jamais. Fin de l'aventure.")  
    exit()  
elif dernier_choix == 2 :  
    print("Félicitations ! Tu sors enfin de la forêt enchantée, sain et sauf.")
```