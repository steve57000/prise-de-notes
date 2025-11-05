
# Cours sur TLS et SSL

## Introduction 

TLS (Transport Layer Security) et SSL (Secure Sockets Layer) sont des protocoles cryptographiques conçus pour assurer la sécurité des communications sur Internet. SSL est le prédécesseur de TLS, mais tous deux partagent le même objectif : protéger les données échangées entre un client (navigateur) et un serveur. 


## Historique 

- **SSL** : SSL 1.0 a été développé par Netscape mais n'a jamais été publié. SSL 2.0 est apparu en 1995, suivi de SSL 3.0 en 1996. SSL est maintenant obsolète en raison de vulnérabilités. 
- **TLS** : TLS a été introduit en 1999 en tant que mise à jour de SSL. Depuis, plusieurs versions ont été publiées, la dernière étant TLS 1.3 en 2018. 


## Différences entre SSL et TLS 

1. **Versions** : - SSL 2.0 et 3.0 sont obsolètes. - TLS 1.0, 1.1, 1.2 et 1.3 sont les versions actuelles, avec 1.3 comme la plus sécurisée. 
2. **Sécurité** : - TLS est plus sécurisé que SSL grâce à des algorithmes améliorés et des mécanismes de sécurité renforcés. - SSL présente de nombreuses vulnérabilités (ex : POODLE) qui ne sont plus présentes dans TLS. 
3. **Handshake** : - Le processus de handshake de TLS inclut des optimisations qui réduisent la latence et améliorent la sécurité.


## Fonctionnement de TLS/SSL
### Le Handshake TLS/SSL

Le handshake est le processus par lequel un client et un serveur établissent une connexion sécurisée. Voici les étapes d'un handshake TLS :

1. **Hello Client** : Le client envoie une requête "ClientHello" au serveur avec des informations telles que les versions TLS supportées, les algorithmes de chiffrement et les extensions. 
2. **Hello Serveur** : Le serveur répond avec un message "ServerHello" contenant le certificat du serveur, la version TLS choisie et l'algorithme de chiffrement. 
3. **Échange de clés** : Le client et le serveur échangent des clés publiques et génèrent une clé de session partagée. 
4. **Chiffrement des données** : Une fois la clé de session établie, toutes les données échangées entre le client et le serveur sont chiffrées.


### Certificats SSL/TLS

- **Certificats numériques** : Utilisés pour authentifier l'identité d'un serveur. Ils sont émis par une autorité de certification (CA).
- **Chaîne de certificats** : Un certificat peut être validé via une chaîne de confiance reliant le certificat du serveur à une CA racine de confiance.
- **Types de certificats** : 
	- Certificats **DV** (Domain Validation) : Vérification de la propriété du domaine.
	- Certificats **OV** (Organization Validation) : Validation de l'organisation derrière le domaine. 
	- Certificats **EV** (Extended Validation) : Le plus haut niveau de validation, montrant un indicateur de confiance (barre verte dans le navigateur).


### Algorithmes de Chiffrement

TLS/SSL utilise plusieurs types d'algorithmes pour sécuriser la connexion : 

1. **Chiffrement symétrique** : Utilisé pour chiffrer les données échangées. Exemples : AES, ChaCha20. 
2. **Chiffrement asymétrique** : Utilisé pendant le handshake pour échanger les clés. Exemples : RSA, Diffie-Hellman, ECDSA. 
3. **Fonctions de hachage** : Assurent l'intégrité des données. Exemples : SHA-256, SHA-3.


## Vulnérabilités et Attaques Connues

1. **POODLE (SSL 3.0)** : Exploite une faiblesse dans SSL 3.0, permettant à un attaquant de déchiffrer les données.
2. **BEAST (TLS 1.0)** : Attaque contre TLS 1.0, exploitant une vulnérabilité dans le chiffrement CBC. 
3. **Heartbleed (OpenSSL)** : Une faille dans l'implémentation OpenSSL de TLS qui permettait aux attaquants de lire des données en mémoire sur le serveur. 
4. **FREAK** : Attaque contre des configurations utilisant des clés RSA de faible sécurité.
5. **Renégociation TLS** : Une faille dans le processus de renégociation TLS, résolue dans les versions récentes.


## Meilleures Pratiques de Sécurité

- **Utiliser TLS 1.2 ou supérieur** : Éviter les versions obsolètes de SSL et de TLS. 
- **Certificats à jour** : Utiliser des certificats SSL/TLS valides émis par une CA reconnue.
- **Algorithmes de chiffrement modernes** : Privilégier AES-256, ChaCha20, et SHA-256.
- **HSTS (HTTP Strict Transport Security)** : Imposer l'utilisation de TLS pour toutes les communications.
- **Désactiver les suites de chiffrement obsolètes** : Désactiver SSL 2.0, SSL 3.0 et les suites de chiffrement faibles comme RC4.


## Conclusion

TLS et SSL jouent un rôle crucial dans la sécurité des communications sur Internet. En adoptant les dernières versions de TLS et en suivant les meilleures pratiques de sécurité, vous pouvez garantir que les données échangées sur vos sites sont sécurisées et protégées contre les attaques. 


*Pour plus d'informations, consultez la [documentation TLS](https://tools.ietf.org/html/rfc8446) et la [page Wikipedia sur TLS](https://fr.wikipedia.org/wiki/Transport_Layer_Security).* 