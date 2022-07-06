# Manos

Application de mises en relations des artisans.<br>
Cette version a été réalisée dans le cadre scolaire à l'école Hetic et est un POC. Une version plus aboutie est en cours de développement.<br>

# Prérequis

Vous devez avoir installé composer et node sur votre ordinateur.

# Installation

Aprés avoir cloné le projet, tapez dans votre terminal,  à la racine : npm i <br>
Toujours à la racine, tapez cp .env.example .env <br>
Dans le fichier .env, remplacez la première ligne par NEXT_PUBLIC_PHP_API_URL=http://localhost:8001/api
Ensuite, allez dans le dossier api puis tapez la commande suivante : composer i <br>
Toujours dans le dossier api, tapez : cp .env.example .env
Pour remplir les données du .env, veuillez faire une demande au propriétaire du repository, les informations de la base de donnée sont confidentiels.

# Lancer les servers

Pour lancer le server next, tapez dans le terminal, à la racine : npm run dev <br>
Pour lancer le server php, allez dans le dossier api puis tapez : php -S localhost:8001<br>

# Crédits

- Théo Duval
- Thierry Maignan
- Baptiste Dauphouy
- Loïc Jin
- Fabien Renoir
- Valentine Lefebvre
- Victorien Guillerd
- Jean-Baptiste Migone
- Hyppolite Pernot
- Adrien Quimbre