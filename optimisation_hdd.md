# Optimisation des performances d'un disque dur (HDD)

## 1️⃣ Désactiver la mise en veille du disque dur
**Étapes :**
1. Ouvrir *Panneau de configuration → Options d’alimentation*
2. Cliquer sur *Modifier les paramètres du mode*
3. Cliquer sur *Modifier les paramètres d’alimentation avancés*
4. Dérouler : `Disque dur > Arrêter le disque dur après`
5. Mettre la valeur sur `0` (signifie jamais)

---

## 2️⃣ Vérifier la défragmentation automatique
**Étapes :**
1. Ouvrir *Défragmenter et optimiser les lecteurs*
2. Vérifier que :
   - Le SSD est optimisé (TRIM)
   - Le HDD est planifié pour défragmentation hebdomadaire

---

## 3️⃣ Désactiver l’indexation du HDD (facultatif)
1. Clic droit sur le HDD → *Propriétés*
2. Décochez *Autoriser l’indexation du contenu des fichiers de ce lecteur*
3. Cliquez sur *Appliquer à tous les fichiers et sous-dossiers*

---

## 4️⃣ Vérifier l’état du disque
Ouvrir un terminal et exécuter :
```cmd
wmic diskdrive get model,status
```
Si le statut est `OK`, le disque est en bon état.

---

## 5️⃣ Déplacer les bibliothèques utilisateur vers le HDD (optionnel)
1. Clic droit sur *Documents* → *Propriétés* → *Emplacement*
2. Cliquer sur *Déplacer...* et choisir un dossier du HDD

---

## ✅ Résumé
| Optimisation | Action |
|---------------|---------|
| Mise en veille | Désactivée |
| Défragmentation | Hebdomadaire |
| Indexation | Désactivée (optionnel) |
| Santé disque | Vérifiée (OK) |
| Dossiers utilisateurs | Déplacés vers HDD (optionnel) |
