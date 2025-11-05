## ==Noms de domaines / Noms d’hôte==
_____________________________________________________________

(Nom d’hôte / Nom de sous domaine).(Nom).(domaine de premier niveau)

www.exemple.com
	=> www = sous-domaine    => exemple.com = nom de domaine

## ==Serveurs de noms de domaines==
_____________________________________________________________

- Avant c’était… pas mieux
	- fichier hosts.txt 
- Protocole DNS 
    - Définit le lien entre IP et nom de domaine
    - Cache réparti sur plusieurs instances
    - Continuité avec des serveurs secondaires
    - Définit des sous domaines, le serveur de mail, les informations de la zone
    - Permet de définir des valeurs “TXT” libres
    
On peut très bien créer ses propres noms de domaines en “local”


## ==URL - Uniform Resource Locator==
_____________________________________________________________

![[URL.png]]

## ==FTP==
_____________________________________________________________

- partage de fichiers sur un réseau TCP/IP
- port 21 pour les commandes et le port 20 pour les données (en mode actif)
- FTPS : port 990 
- transfert en binaire ou texte
- mode actif ou passif
    - actif : port 20 serveur et port client décidé par le client
    - passif : port serveur décidé par le serveur et port client décidé par le client


## ==POP(S) / SMTP(S) / IMAP(S)==
_____________________________________________________________

Protocoles de gestion de courrier électronique
- SMTP/SMTPS : envoie et relai de message  
- POP/POPS : récupération de message entier localement
    - tout est hors connexion
    - coûteux en réseau même si on ne regarde pas le mail
- IMAP/IMAPS : récupération des entêtes du mail uniquement
    - plus léger
    - obligation de connexion pour avoir le contenu (cache local par le lecteur de mail)
    - synchronisé

## ==HTTP==
_____________________________________________________________

1. Méthode
2. Chemin (URL)
3. Version
4. Hôte
5. En-tête
6. Corps

	![[http.png]]

#### Méthode :

	Get , Post , Put, Delete
	Head, Patch, Connect, Options, Trace

#### Chemin :

	URL "Relative"
	URL : Uniform Ressource Locator

#### Hôte :

	Host: www.tutorialspoint.com

#### En-têtes :

- Optionnelles
- Standards
    - Content-Length,
    - Content-Type...
- Personnalisées
    - libres
    - commence souvent par X-
	    - X-Request-ID

#### HTTPS :

- HTTP + TLS (SSL)
- Autorité de Certification
    - Garantie la validité du certificat et l’authentification du serveur
- Possibilité de forger son propre certificat
    - OpenSSL
- Let’s Encrypt
    - Gratuit
    - à renouveler tous les 90 jours
    - CertBot
    
## ==Sources :==

- http://atilf.atilf.fr/  
- https://medium.com/platform-engineer/evolution-of-http-69cfe6531ba0  
- https://www.diffen.com/difference/TCP_vs_UDP  
- http://sebsauvage.net/comprendre/tcpip/  
- https://www.dummies.com/programming/networking/cisco/network-basics-tcpip-and-osi-network-model-comparisons/)
- https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/transition-ipv6/barometre-annuel-de-la-transition-vers-ipv6-en-france.html
- https://developer.mozilla.org/fr/docs/Apprendre/Comprendre_les_URL