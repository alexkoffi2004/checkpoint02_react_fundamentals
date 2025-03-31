# Checkpoint02_react_fundamentals

Ce projet React affiche une liste de joueurs de football sous forme de cartes interactives. Chaque carte contient les informations détaillées sur un joueur telles que son nom, son équipe, sa nationalité, son numéro de maillot, son âge et une image de celui-ci.

## Technologies utilisées

- **React** : Pour la création des composants et l'interactivité.
- **React-Bootstrap** : Pour le design des cartes et les composants de l'interface utilisateur.
- **JavaScript** : Pour la logique et les interactions.
- **CSS** : Pour le style de la page.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) sur votre machine.

## Installation

1. Clonez le repository sur votre machine locale :
    ```
    git clone https://github.com/alexkoffi2004/checkpoint02_react_fundamentals.git
    ```

2. Accédez au répertoire du projet :
    ```
    cd checkpoint02_react_fundamentals
    ```

3. Installez les dépendances nécessaires :
    ```
    npm install
    ```

## Lancer l'application

1. Démarrez l'application en local :
    ```
    npm start
    ```

2. Ouvrez votre navigateur à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

## Structure du projet

- fifa-players-cards/ 
- ├── public/ 
- │ └── index.html 
- ├── src/ 
- │ ├── App.js # Composant racine de l'application 
- │ ├── Player.js # Composant pour afficher la carte d'un joueur 
- │ ├── PlayersList.js # Composant qui liste tous les joueurs 
- │ ├── players.js # Données des joueurs (tableau d'objets) 
- │ ├── index.js # Point d'entrée du projet React 
- │ ├── App.css # Styles de base pour l'application 
- └── package.json # Dépendances et scripts du projet


## Fonctionnalités

- Affichage des informations de chaque joueur sous forme de carte.
- Utilisation de `react-bootstrap` pour le style des cartes.
- Mise en page responsive grâce à l'utilisation de `flex` pour afficher les cartes de manière fluide sur tous les écrans.

## Contribuer

Si vous souhaitez contribuer à ce projet, vous pouvez :

1. Forker le repository.
2. Créer une branche pour vos modifications (`git checkout -b feature/amélioration`).
3. Commiter vos modifications (`git commit -am 'Ajoute une fonctionnalité'`).
4. Pusher votre branche (`git push origin feature/amélioration`).
5. Ouvrir une Pull Request.

## Auteurs

- **Alex Koffi** - *Création initiale* - [https://github.com/alexkoffi2004](https://github.com/alexkoffi2004)

