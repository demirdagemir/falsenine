# falsenine
False Nine App. Team Project for Software Engineering for Business Applications course at TUM.

## Setup

1. Download and install the current Version of NodeJS including npm (Version >=5): https://nodejs.org/en/download/current/

2. Download and install MongoDB: https://docs.mongodb.com/manual/administration/install-community/

3. To run the project on a development environment, download repo and browse to the root directory where you have the repo from the terminal.

4. Run, `npm install`. This should install all the dependencies.

5. Start your MongoDB Server by the command `mongod` or `mongod --dbpath <path to data directory>` if you don't want to use the default path (i.e., /data/db). Make sure MongoDB has write/read permissions for the directory. Keep the terminal window open.

6. After this, open a second terminal window and run `npm run build:dev`, and from another terminal tab/window, run `npm start`. If no errors thrown, you should be able to go `localhost:3000` from the browser and see the landing page of the application. If errors are thrown, please try to figure out where the error might be depending on your machine.
