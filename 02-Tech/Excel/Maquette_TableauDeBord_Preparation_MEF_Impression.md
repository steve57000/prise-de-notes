# Préparez la maquette de votre tableau de bord

## 1) Pourquoi créer une maquette avant les données ?
La **maquette** = la “forme” de ton futur tableau de bord (structure + mise en page + zones d’analyse).

✅ Intérêt :
- rester focalisé sur **les questions à traiter** (pas sur les données brutes)
- éviter d’être influencé par les chiffres
- gagner du temps (validation visuelle + couleurs + disposition avant de remplir)
- tu peux utiliser de **fausses données** pour construire la mise en page

---

## 2) Définir ce qui est pertinent (objectif : répondre aux questions)

Questions à traiter :
1. État des ventes en Europe de l’Ouest **par catégorie** et **par trimestre** depuis 2019
2. Les pantalons collection **2018** se vendent-ils aussi bien que ceux de **2020** ?

### Mauvais exemple (à éviter)
- tableau “brut” : le lecteur doit lire toutes les données
- pas de couleurs / pas de graphiques → peu présentable
- analyse **lente** et chronophage

### Bonne pratique : se poser les bonnes questions
1) **Quel visuel est le plus adapté ?**
- “évolution” → **courbe** ou **histogramme**
- “comparaison” → **mise en forme conditionnelle** et/ou graphique

2) **Quelles questions vont venir ensuite ?**
- prévoir un détail **par pays** (affiner la Q1)
- prévoir un détail **à l’intérieur des catégories** (par type de vêtement)

3) **Les couleurs aident-elles vraiment ?**
- attribuer **une couleur fixe par catégorie** (cohérence visuelle)
- utiliser bordures/format cellule pour guider la lecture

📌 Astuce : si le format voulu n’existe pas, utiliser un **format personnalisé**.

✅ Bonus pro : faire valider la maquette par le responsable avant de tout remplir (évite de refaire la mise en forme).

---

## 3) Anticiper une mise en forme conditionnelle “multi-critères” (Top %)

Objectif : orienter la lecture vers les meilleures ventes.

Exemple de règles :
- **Top 5 %** → vert foncé
- **Top 15 %** → vert moyen
- **Top 25 %** → vert clair

### Étapes (pour chaque règle)
1. Sélectionner les cellules du tableau principal
2. Mise en forme conditionnelle → **Nouvelle règle**
3. Choisir : “Appliquer une mise en forme uniquement aux valeurs rangées parmi les premières ou les dernières…”
4. Saisir le % (25, puis 15, puis 5) + choisir couleur
5. Valider

📌 Important : créer les 3 règles + gérer leur **priorité** (les règles les plus “fortes” doivent passer au-dessus).

---

## 4) Personnaliser la mise en page (pro)

### Ajouter un logo en pied de page
But : ton tableau de bord peut circuler → autant “brander” le document.

- Mise en page → **Mise en page**
- Onglet **En-tête/Pied de page**
- **Pied de page personnalisé**
- Zone centrale → **Insérer une image**

📌 Recommandation : image pas trop grande (≈ 30 px de hauteur), sinon elle empiète sur la zone d’impression.

Vérifier via **Aperçu avant impression**.

---

## 5) Anticiper l’impression et la lecture sur tous supports

### Zone d’impression
- définir une zone d’impression **ajustée à la maquette**
- exclure les cellules vides autour
- vérifier régulièrement avec l’aperçu avant impression

### Disposition recommandée
- privilégier une maquette en **rectangle**
✅ avantages :
- meilleure lisibilité sur smartphone/tablette/PC
- moins de “zones blanches” à l’impression
- meilleur rendu sur vidéoprojecteur

---

## À retenir
- La maquette se construit **avant** les données pour rester centré sur l’objectif
- Choisir les bons visuels : évolution → courbe/histogramme, comparaison → MFC/graphique
- La MFC multi-critères (Top %) guide la lecture
- Ajouter un logo (en-tête/pied de page) rend le livrable plus pro
- Optimiser la zone d’impression et la forme “rectangle” améliore lecture + rendu
