

---

## Introduction

Ce guide détaille étape par étape comment configurer un projet avec Java en backend (Spring Boot), Angular en frontend, en utilisant Docker pour conteneuriser l'ensemble.

---

## Prérequis

- Java (JDK 17 recommandé)
    
- Node.js et npm
    
- Angular CLI
    
- Docker
    

---

## 1. Initialisation du Projet Backend (Java avec Spring Boot)

### Création du projet via Spring Initializr

Utilisez [Spring Initializr](https://start.spring.io/) ou en ligne de commande :

```
curl https://start.spring.io/starter.zip -d dependencies=web,data-jpa,h2,lombok -d javaVersion=17 -o backend.zip
unzip backend.zip -d backend
```

### Lancer l'application backend

```
cd backend
./mvnw spring-boot:run
```

---

## 2. Initialisation du Projet Frontend (Angular)

### Création du projet Angular

```
npm install -g @angular/cli
ng new frontend
```

### Lancer l'application frontend

```
cd frontend
ng serve
```

---

## 3. Dockerisation du Projet

### Dockerfile Backend (Java)

Créez `Dockerfile` dans le dossier `backend` :

```
FROM openjdk:17-jdk-alpine
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Dockerfile Frontend (Angular)

Créez `Dockerfile` dans le dossier `frontend` :

```
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
```

### Docker Compose

Créez un fichier `docker-compose.yml` à la racine :

```
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
```

---

## 4. Construire et Lancer avec Docker

Construire les images :

```
docker-compose build
```

Démarrer les conteneurs :

```
docker-compose up
```

Pour lancer en arrière-plan :

```
docker-compose up -d
```

---

## 5. Déploiement sur AWS

### Configurer AWS CLI

```
aws configure
```

### Authentification à Amazon ECR

Créez un référentiel ECR via AWS Console ou AWS CLI, puis connectez-vous :

```
aws ecr get-login-password --region <votre-region> | docker login --username AWS --password-stdin <id_compte>.dkr.ecr.<votre-region>.amazonaws.com
```

### Push des images sur ECR

```
docker tag backend:latest <id_compte>.dkr.ecr.<votre-region>.amazonaws.com/backend:latest
docker push <id_compte>.dkr.ecr.<votre-region>.amazonaws.com/backend:latest

# Idem pour frontend
docker tag frontend:latest <id_compte>.dkr.ecr.<votre-region>.amazonaws.com/frontend:latest
docker push <id_compte>.dkr.ecr.<votre-region>.amazonaws.com/frontend:latest
```

### Déploiement avec AWS ECS

Utilisez AWS ECS pour déployer vos conteneurs en créant une tâche ECS et un service pour gérer vos conteneurs et équilibrer la charge.

---

## Commandes Utiles Docker et AWS

- Voir les conteneurs actifs :
    

```
docker ps
```

- Arrêter les conteneurs :
    

```
docker-compose down
```

- Afficher les logs :
    

```
docker-compose logs -f
```

- Afficher la configuration AWS :
    

```
aws configure list
```

---

## Conclusion

Vous disposez désormais d'un environnement de développement complet, utilisant Java pour le backend, Angular pour le frontend, et Docker pour gérer efficacement votre infrastructure.