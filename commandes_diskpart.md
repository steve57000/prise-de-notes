# Commandes Diskpart pour formater un disque Apple et le convertir en GPT

> ⚠️ Attention : ces commandes effacent totalement le disque choisi. Vérifiez bien le numéro du disque avant exécution.

```cmd
diskpart
list disk
rem >>> Vérifiez ici le numéro de votre disque (exemple : 2)
select disk 2
clean
convert gpt
create partition primary
format fs=exfat quick
assign
exit
```

### 💡 Variante pour NTFS (si utilisation uniquement sous Windows)
```cmd
format fs=ntfs quick
```

### 💬 Explications :
- **list disk** : affiche les disques disponibles
- **select disk 2** : sélection du disque (remplacez le numéro si besoin)
- **clean** : supprime toutes les partitions, y compris EFI
- **convert gpt** : convertit le disque au format GPT
- **create partition primary** : crée une partition principale
- **format fs=exfat quick** : formate rapidement le disque en exFAT
- **assign** : attribue une lettre de lecteur
- **exit** : quitte Diskpart
