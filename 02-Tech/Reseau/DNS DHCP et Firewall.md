## 1. DNS (Domain Name System)

Le DNS (Domain Name System) est un service qui permet de traduire les noms de domaine en adresses IP, afin que les utilisateurs puissent accéder à des sites web en utilisant des noms faciles à retenir, comme `www.example.com`, plutôt qu'une adresse IP numérique.


### Fonctionnement du DNS

Lorsque vous tapez un nom de domaine dans un navigateur, une requête DNS est envoyée à un serveur DNS pour obtenir l'adresse IP correspondante. Le processus se fait en plusieurs étapes :

1. **Requête du client** : L'utilisateur demande à accéder à un site web en entrant un nom de domaine.

2. **Résolution DNS** : Le serveur DNS interroge différents serveurs DNS (serveur racine, TLD, autoritaire) pour trouver l'adresse IP associée au domaine.

3. **Réponse** : Le serveur DNS renvoie l'adresse IP au client, qui peut alors établir la connexion avec le serveur web.


### Types d'enregistrements DNS

- **A** : Associe un nom de domaine à une adresse IPv4.

- **AAAA** : Associe un nom de domaine à une adresse IPv6.

- **CNAME** : Alias pour un autre nom de domaine.

- **MX** : Indique le serveur de messagerie pour un domaine.

- **NS** : Spécifie les serveurs DNS autoritaires pour un domaine.


### Démonstration : Utilisation de `nslookup` et `dig`

Vous pouvez utiliser la commande `nslookup` ou `dig` pour interroger les enregistrements DNS d'un domaine.

#### Utilisation de `nslookup`

```bash
nslookup www.google.com
```

Cela renverra l'adresse IP associée à `www.google.com`.

#### Utilisation de `dig`

```bash
dig www.google.com
```

La commande `dig` vous fournira plus de détails sur les enregistrements DNS, y compris les enregistrements A et NS.

  
---

  
## 2. DHCP (Dynamic Host Configuration Protocol)

Le DHCP est un protocole réseau qui permet d'attribuer dynamiquement des adresses IP aux dispositifs sur un réseau. Grâce au DHCP, les administrateurs n'ont pas besoin de configurer manuellement chaque appareil.

  
### Fonctionnement du DHCP

1. **Découverte (Discovery)** : L'appareil qui rejoint le réseau envoie une requête pour obtenir une adresse IP.

2. **Offre (Offer)** : Le serveur DHCP propose une adresse IP disponible à l'appareil.

3. **Demande (Request)** : L'appareil accepte l'adresse IP proposée.

4. **Acknowledge** : Le serveur DHCP confirme l'attribution de l'adresse IP.

  
### Démonstration : Configuration d'un serveur DHCP

Pour simuler un serveur DHCP sur un réseau local, vous pouvez utiliser un routeur ou configurer un serveur sous Linux.

  
#### Exemple de configuration sur un serveur Linux

Installez le service DHCP sur une distribution Linux :

```bash
sudo apt install isc-dhcp-server
```

  
Modifiez le fichier de configuration `/etc/dhcp/dhcpd.conf` pour définir les plages d'adresses IP attribuables :

```conf
subnet 192.168.1.0 netmask 255.255.255.0 {

    range 192.168.1.10 192.168.1.50;

    option routers 192.168.1.1;

    option domain-name-servers 8.8.8.8, 8.8.4.4;

    option domain-name "localdomain";

}
```

  
Démarrez le service :

```bash

sudo systemctl start isc-dhcp-server

```

  
---

## 3. Firewall (Pare-feu)

Un pare-feu (ou firewall) est un dispositif de sécurité réseau qui surveille et contrôle le trafic réseau entrant et sortant, en fonction de règles de sécurité prédéfinies. Il agit comme une barrière entre un réseau interne sécurisé et des réseaux externes non sécurisés (comme Internet).

  
### Types de pare-feux

1. **Pare-feu matériel** : Généralement utilisé pour protéger des réseaux entiers. Il est souvent installé sous forme de routeurs ou de dispositifs dédiés.

2. **Pare-feu logiciel** : Installé sur un ordinateur individuel ou un serveur pour protéger cet appareil spécifique.

3. **Pare-feu de nouvelle génération (NGFW)** : Offre des fonctionnalités avancées, comme l'inspection des paquets, la détection des intrusions, et la protection contre les malwares.


### Démonstration : Utilisation de `iptables` pour configurer un pare-feu sous Linux

Vous pouvez configurer des règles de pare-feu sous Linux à l'aide de `iptables` ou de `ufw`.

  
#### Exemple avec `iptables`

```bash
# Bloquer tout le trafic entrant sauf HTTP et HTTPS

sudo iptables -P INPUT DROP

sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT


# Autoriser les réponses aux requêtes initiées depuis le serveur

sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

  
#### Exemple avec `ufw`

```bash
# Activer ufw et autoriser uniquement HTTP et HTTPS

sudo ufw enable

sudo ufw allow http

sudo ufw allow https
```


---

## Exercices

  
### Exercice 1 : Résolution DNS

1. Utilisez la commande `nslookup` ou `dig` pour interroger les enregistrements DNS d'un domaine de votre choix. Analysez les enregistrements `A`, `MX` et `NS`.

  
### Exercice 2 : Configuration DHCP

1. Simulez l'ajout d'un nouvel appareil à un réseau en configurant le DHCP sur votre routeur local ou un serveur DHCP.

  
### Exercice 3 : Mise en place d'un pare-feu

1. Créez des règles de pare-feu sur un serveur Linux en utilisant `iptables` ou `ufw`. Bloquez tout le trafic entrant sauf pour les ports HTTP (80) et HTTPS (443).