# Marvelous App
This is the backend for an app that lets you put items in either column one or column two.  Then you can filter those items by typing in a search field.


## Backend Setup

Git clone the repo to your preferred directory:

    git clone https://github.com/Spanomaly/marvelous-be.git

Change to the new project directory:

    cd marvelous-be/

Install the npm packages:

    npm i


This backend requires a MySQL database on your machine.  Information about installing MySQL and setting up a database can be found [here](https://dev.mysql.com/doc/mysql-getting-started/en/).

You'll want to set up a new database, and a user with full privileges, which should be covered in the guide.


Create a copy of the sample config file found here:

    /config/sample.config.json

Rename it

    /config/config.json

In the new file, update the development object with the configuration for your database:

      "development": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "database": "YOUR_DATABASE",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
      }

To start the server:

    npm start


If you'd prefer a development server that reloads after changes:

Install nodemon

    npm i -g nodemon

Start the dev server

    npm run dev

The frontend for this app is in [this repo](https://github.com/Spanomaly/marvelous-ui).
