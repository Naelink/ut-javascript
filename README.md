# Undertale Javascript
# Naël Mokrane

![ Logo Undertale](/img/logo.png "Logo Undertale")

# Cahier des charges


## 1. Description du contexte :
J’ai choisi de reproduire le jeu Undertale, jeu réalisé avec le logiciel Game Maker, mais entièrement en Javascript. 
La contrainte était de reproduire le jeu simplement d’après ce que je vois, sans me pencher sur le code du jeu ou faire de datamining, ainsi que de n’utiliser que du javascript pur. Node.js est cependant utilisé avec Express pour le back et la communication avec la DB.
Du fait de l’ampleur du projet, seule une partie de la première zone a pu être réalisée.

## 2. Description du jeu original :
"Undertale" est un jeu vidéo de rôle indépendant créé par Toby Fox. Lancé en 2015, il se distingue par son gameplay innovant et sa narration riche, permettant aux joueurs de choisir entre combattre ou interagir pacifiquement avec les monstres qu'ils rencontrent. L'histoire se déroule dans le monde souterrain des monstres, où le joueur contrôle un enfant humain qui est tombé de la surface. L'objectif est de retrouver le chemin vers la surface, mais les choix du joueur influencent profondément l'histoire et les relations avec les personnages non-joueurs. Undertale est célèbre pour ses graphismes rétro, sa bande-son captivante, et ses thèmes profonds comme l'amitié, le pardon et les conséquences des choix personnels. 

## 3. Description des besoins:
Afin de créer un jeu de manière efficace, sans devoir copier des centaines de lignes de code, il était important de factoriser le code via fonctions, procédures et objets. La plupart du code a donc été écrit dans cette optique là.
De plus, l'immersion dans Undertale repose sur une grande quantité de petits détails, qui peuvent parfois prendre beaucoup de temps. Dans une démarche perfectionniste, je me suis assuré de reproduire ces petits détails du mieux que je peux. Il peut être pertinent de regarder à quoi ressemble le début du jeu sur Youtube, puis de le comparer au début d'Undertale Javascript.

### 3.1 Base de données:
Pour gérer les sauvegardes du joueur et certaines informations nécessaires au fonctionnement du jeu, une base de données est nécessaire. Bien qu'elle soit composée de plusieurs tables, elle n'a cependant pas besoin d'être relationnelle et d'utiliser de clés étrangères pour l'usage actuel que j'en fais dans l'application.
Afin d'effectuer des opérations sur la base de données de manière sécurisée, j'ai été obligé de créer dans le back une API via express (contenue dans server.js) afin d'effectuer les opérations sur la base de données sans m'y connecter depuis le front.

### 3.2 Overworld:
Undertale est composé de plusieurs phases de gameplay. La première phase à laquelle le joueur est confronté est celle d'Overworld, à savoir celle où le joueur voit son personnage, peut se déplacer sur la carte et ainsi intéragir avec le monde qui l'entoure. Il faut ainsi gérer les mouvements du joueur, la caméra, les hitbox, les intéractions, etc.


### 3.3 Combat:
L'autre phase de gameplay d'Undertale est celle de combat. Le joueur n'y voit plus son personnage, qui est representé par son âme, à savoir le coeur rouge. Le système de combat est lui-même divisé en deux phases ; une phase d'action du joueur, où il peut choisir entre combattre, agir, utiliser un objet ou faire preuve de clémence, ainsi qu'une phase où l'ennemi attaque, et le joueur doit donc esquiver les attaques de l'ennemi en question. Bien que le système ait été développé, le jeu ne va pour l'instant pas assez loin pour que le joueur rencontre son premier vrai combat. Cependant, le tutoriel (ou faux tutoriel) avec le personnage nommé Flowey, lui, introduit une des deux phases du système de combat, à savoir celle d'esquive (Bien que le personnage essaye de faire croire au joueur qu'il s'agit d'une phase de collecte. Essayez donc d'esquiver ses "friendliness pellets" à la place !)


### 3.4 Gestion des Evênements:
Etant un jeu scénarisé, les évênements et éléments scénaristiques tels que dialogues, animations ou combats doivent se déclencher au bon moment et le bon nombre de fois. Il est donc important de garder une trame cohérente.


### 3.6 Gestion des choix:
De nombreux choix et chemins différents sont donnés au joueur pour chaque intéraction. Que ce soit des choix évidents, tels que choisir oui ou non sur une interface, ou bien simplement la façon d'agir, il est important de modifier le cours du jeu selon les choix du joueur. Ainsi, la table "Flags" garde en mémoire les choix du joueur, selon des déclencheurs positionnés dans le code du jeu. De plus, Undertale est un jeu qui retient des informations au délà de la sauvegarde du joueur. Ainsi, si un joueur tue un certain personnage, puis revient à une sauvegarde plus ancienne afin de ne pas tuer ce même personnage, le jeu s'en souviendra. Et le jeu prendra un malin plaisir à le faire savoir.
Un exemple d'un choix inconscient a déjà été implémenté dans le jeu, lors du tutoriel avec Flowey. En effet, le joueur peut décider d'écouter Flowey et de tomber dans son piège, ou bien de ne pas lui faire confiance et ainsi éviter ses attaques. Le jeu se comportera ainsi différemment selon ce choix.

### 3.6 Gestion des sons et musiques :
Undertale brille par ses musiques et son sound design, il était donc plus qu'important de gérer correctement les musiques et effets sonores, ainsi que leur début, leur fin, leur volume et leurs pauses, selon les évênements en cours.

### 3.6 Gestion des dialogues:
Plusieurs types de dialogues (en combat, dans l'overworld, affiché en haut, affiché en bas, affiché avec sprite, sans sprite, etc) existent, et avancent dans leur texte sur l'appui d'un bouton. Lorsque le texte apparait, le personnage parle ; ainsi, sa sprite s'anime, et on entend sa voix. De plus, le texte, l'animation, et la voix, doivent faire une pause lorsque le personnage atteint une virgule, afin de rendre le dialogue plus immersif et de donner une vraie impression de parole.

## 6. Captures :
![ Capture](/img/capture1.png "Capture")
![ Capture](/img/capture2.png "Capture")
![ Capture](/img/capture3.png "Capture")


# Installation : 

1. Installer Node.js
2. Installer la base de données (undertale.sql) et l'héberger en local
3. Changer les identifiants de connexion à la bdd dans server.js
4. Executer la commande suivante à la racine du projet : node server.js
5. Se rendre à l'adresse localhost:3000 sur navigateur