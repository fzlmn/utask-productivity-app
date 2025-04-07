
# UTask Productivity App

## Introduction
UTask est une application de productivité conçue pour aider les étudiants, professeurs et professionnels à gérer leurs tâches efficacement, éviter de perdre du temps et rester organisés. Le projet est containerisé à l'aide de Docker, ce qui simplifie le déploiement et l'accessibilité, tant localement que dans le cloud. L'objectif est de créer une application facile à accéder et à tester sans la complexité des procédures d'installation.

### **Collaborateurs :**
- Anam Aya
- Fatima Zahra Ait Lamine

### **Encadrant :**
- Professeur Khiat Azzedine

### **Institution :**
- Université Mundiapolis, École d'Ingénierie

## Technologies Utilisées
- **Frontend :** Next.js, TypeScript
- **Backend :** Node.js, Express, Nodemon
- **Base de données :** MongoDB
- **Containerisation :** Docker, Docker Compose
- **Contrôle de version :** GitHub

## Objectifs du Projet
- Développer une application de gestion des tâches avec un timer intégré.
- Implémenter les fonctionnalités de login et d'inscription des utilisateurs.
- Déployer l'application avec Docker pour simplifier la configuration et le déploiement via `docker-compose up`.
- Partager les images Docker via DockerHub pour un accès facile.

## Architecture
La structure du projet UTask comprend :
- `backend/` : Contient le Dockerfile du backend.
- `frontend/` : Contient le Dockerfile du frontend.
- `docker-compose.yml` : Configure les services MongoDB, backend, et frontend, et les orchestre via Docker.

## Docker Compose Configuration
Ce fichier `docker-compose.yml` permet de gérer tous les services ensemble :
```yaml
version: "3.9"

services:
  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - "27017:27017"
    networks:
      - utask_network

  backend:
    image: ayaanam/utask-main-backend:latest
    depends_on:
      - mongo
    ports:
      - "9000:9000"
    networks:
      - utask_network

  frontend:
    image: ayaanam/utask-main-frontend:latest
    depends_on:
      - backend
    ports:
      - "3000:3000"
    networks:
      - utask_network

networks:
  utask_network:
```

## Dockerfile pour le Frontend (Next.js) :
```dockerfile
FROM node:18.20.6

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
```

## Dockerfile pour le Backend (Node.js avec Express) :
```dockerfile
FROM node:18.20.6

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "run", "start"]
```

## Instructions de Build et d'Exécution

### 1. Cloner le dépôt
```bash
git clone https://github.com/fzlmn/utask-productivity-app.git
cd utask-productivity-app
```

### 2. Construire les images Docker
Vous pouvez construire les images Docker localement en utilisant les Dockerfiles présents dans les dossiers `frontend/` et `backend/`.

#### Pour le Frontend :
```bash
docker build -t fatimazahraaitlamine/utask-main-frontend:latest ./frontend
```

#### Pour le Backend :
```bash
docker build -t fatimazahraaitlamine/utask-main-backend:latest ./backend
```

### 3. Lancer l'application avec Docker Compose
Une fois les images construites, vous pouvez lancer l'application avec la commande suivante :
```bash
docker-compose up
```

Cette commande va télécharger l'image de MongoDB, ainsi que celles du backend et du frontend, et les démarrer dans des containers distincts.

### 4. Accéder à l'application
- Le **frontend** sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)
- Le **backend** sera accessible à l'adresse : [http://localhost:9000](http://localhost:9000)

### 5. Pousser les images vers DockerHub (facultatif)
Si vous souhaitez publier vos images Docker sur DockerHub pour un accès à distance, vous devez d'abord vous connecter à DockerHub :
```bash
docker login
```
Puis poussez les images :
```bash
docker push fatimazahraaitlamine/utask-main-frontend:latest
docker push fatimazahraaitlamine/utask-main-backend:latest
```

## Lien vers DockerHub
Les images Docker utilisées pour ce projet sont disponibles sur DockerHub :
- [UTask Frontend Docker Image](https://hub.docker.com/r/fzlmn/utask-main-frontend)
- [UTask Backend Docker Image](https://hub.docker.com/r/fzlmn/utask-main-backend)

## Choix Techniques & Difficultés
- **Docker Compose** a été choisi pour gérer les containers facilement avec une seule commande (`docker-compose up`), simplifiant ainsi le processus de déploiement et de test, notamment pour les utilisateurs non techniques.
- Parmi les défis, l'intégration du frontend avec Next.js et la connexion au backend via **CORS** et **Axios** ont été complexes. La configuration des ports et la gestion de l'instance MongoDB dans le fichier `docker-compose.yml` ont également posé des difficultés.

## Conclusion
L'application UTask vise à aider les utilisateurs à rester organisés, tout en offrant une solution simple et prête pour le cloud, grâce à Docker. Ce projet simplifie l'accès et l'installation pour tous, tout en fournissant une interface fonctionnelle pour gérer les tâches.
