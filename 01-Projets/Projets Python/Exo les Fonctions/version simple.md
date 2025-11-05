Retour à la note  : [[Les fonctions|Retour]]

```python
#########################################################  
""" ------------------ Calcul Aire ------------------ """  
#########################################################  
  
def calcul_aire(longueur, largeur):  
    aire = longueur * largeur  
    return aire  
  
  
longueur_entrer = 10  
largeur_entrer = 40  
  
#print(f"L'aire pour un rectangle de longueur {longueur_entrer} et de largeur {largeur_entrer} est :", calcul_aire(longueur_entrer, largeur_entrer))  
  
  
  
#########################################################  
""" --------------- Max trois nombres --------------- """  
#########################################################  
  
def max_trois_nombre(liste):  
    le_plus_grand = liste[0]  
  
    for i in liste:  
        if i > le_plus_grand:  
            le_plus_grand = i  
    return le_plus_grand  
  
  
nombres_a_comparer = [19, 15, 7, 18]  
  
#print(f"Dans ce tableau {nombres_a_comparer} le plus grand nombre est :", max_trois_nombre(nombres_a_comparer))  
  
  
  
########################################################  
""" --------------- Année bissextile --------------- """  
########################################################  
  
def annee_bissextile(annee):  
  
    if annee%4==0 and annee%100!=0 or annee%400==0:  
        return True  
    else:  
        return False  
  
  
test_annee = 1920  
  
#print(f"L'année {test_annee} est bissextile ?", annee_bissextile(test_annee))  
  
  
  
########################################################  
""" ----------- Nombre d'année bissextile ---------- """  
########################################################  
  
def nombres_annee_bisextile(annee_depart, annee_fin):  
    total_annee_bissextile = 0  
    for i in range(annee_depart, annee_fin + 1):  
        verif_annee_bissextile = annee_bissextile(i)  
        if verif_annee_bissextile == True:  
            total_annee_bissextile += 1  
    return total_annee_bissextile  
  
  
entre_annee = 2004  
et_annee = 2012  
  
#print(f"Le nombre d'année bissextile entre {entre_annee} et {et_annee} est :", nombres_annee_bisextile(entre_annee, et_annee))
```