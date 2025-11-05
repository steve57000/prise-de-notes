# Aventure dans la Forêt Enchantée


## Contexte :

Tu es un aventurier perdu dans une forêt mystérieuse et enchantée. Ton objectif est de sortir sain et sauf de cette forêt en prenant les bonnes décisions. Chaque choix que tu fais te rapproche soit de la sortie, soit d'un piège mortel. À chaque étape, tu devras prendre une décision basée sur les indices que tu rencontres. Utilise uniquement des instructions `if` pour écrire ce scénario d'aventure en Python.

## Instructions :

### 1. Entrée dans la forêt : 

Dès que tu entres dans la forêt, tu te retrouves face à deux chemins : Le script doit demander à l'utilisateur de choisir entre le chemin 1 ou 2.
- **Chemin 1** : Un sentier sombre où tu entends des bruits inquiétants. 
- **Chemin 2** : Un sentier éclairé par des lucioles, plus calme. 
- 
Le script doit demander à l'utilisateur de choisir entre le chemin 1 ou 2.
-  **Si l'utilisateur choisit le chemin 1** : Tu avances prudemment, mais tu entends un bruit étrange venant des arbres.
- **Si l'utilisateur choisit le chemin 2** : Tu marches tranquillement, mais soudain, un loup-garou apparaît.


### 2. Rencontre avec le danger :

- **Si tu entends le bruit étrange (Chemin 1)** : Tu as deux choix :
	- **Choix 1** : Tu t'arrêtes et cherches à identifier la source du bruit. 
	- **Choix 2** : Tu continues à avancer rapidement en espérant que cela ne te suive pas.
	- **Si tu choisis de t'arrêter (Choix 1)** : C'était un piège ! Un groupe de brigands t'attrape et te vole tout ce que tu possèdes. Tu as échoué ! 
	- **Si tu choisis d'avancer rapidement (Choix 2)** : Bonne décision ! Tu as évité le piège et tu continues ton chemin. 
- **Si tu fais face au loup-garou (Chemin 2)** : Tu as deux choix :
	- **Choix 1** : Courir vers un grand arbre pour te cacher.
	- **Choix 2** : Te battre avec une épée que tu trouves par terre.
	- **Si tu choisis de courir (Choix 1)** : Malheureusement, le loup-garou te rattrape. Tu n'as pas été assez rapide. Fin de l'aventure.
	- **Si tu choisis de te battre (Choix 2)** : Incroyable ! Tu as réussi à le vaincre, et tu continues ta route. 


### 3. La rivière magique :

Après avoir évité le danger, tu arrives devant une rivière. Deux options s'offrent à toi : 
- **Option 1** : Traverser la rivière à la nage. 
- **Option 2** : Suivre la rivière en espérant trouver un pont plus loin. 
- **Si tu choisis de nager (Option 1)** : Mauvais choix. L'eau de la rivière est empoisonnée. Fin de l'aventure. 
- **Si tu choisis de suivre la rivière (Option 2)** : Bravo ! Tu trouves un pont après quelques minutes de marche.


### 4. Le pont maudit : 

Tu arrives finalement à un vieux pont en bois, mais une étrange créature apparaît et te dit que tu dois résoudre une énigme pour traverser.
L'énigme est la suivante : 
*"Je suis léger comme une plume, mais personne ne peut me tenir longtemps. Qui suis-je ?"* 
Trois réponses possibles te sont proposées : 
- **Réponse 1** : "Le souffle." 
- **Réponse 2** : "L'eau." 
- **Réponse 3** : "L'ombre." 
- **Si tu choisis "Le souffle" (Réponse 1)** : Félicitations ! La créature te laisse passer, et tu continues ta quête.
- **Si tu choisis "L'eau" ou "L'ombre" (Réponses 2 et 3)** : Mauvaise réponse. La créature te jette dans la rivière et tu échoues. 


### 5. Sortie de la forêt : 

Après avoir traversé le pont, tu aperçois enfin la sortie de la forêt. Cependant, un dernier choix crucial s'impose : 
- **Option 1** : Prendre un raccourci à travers un champ de fleurs toxiques. 
- **Option 2** : Suivre le sentier principal, plus long mais sûr. 
- **Si tu choisis le raccourci (Option 1)** : Le champ de fleurs toxiques t'endort à jamais. Fin de l'aventure. 
- **Si tu choisis le sentier principal (Option 2)** : Félicitations ! Tu sors enfin de la forêt enchantée, sain et sauf. 

----

### Résumé des étapes à implémenter :

1.  Demander à l'utilisateur de choisir entre deux chemins. 
2.  Utiliser des conditions `if` pour gérer les différents choix et leurs conséquences.
3.   Ajouter des décisions à chaque étape clé de l'aventure (ex. : danger, énigme, dernier choix).
4. Afficher des messages selon les résultats des choix faits par l'utilisateur (réussite ou
   échec).


[[Aventure dans la forêt|Voir le projet python]]