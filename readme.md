# Marvelous App
This is the beckern for an app that lets you put items in either column one or two.  Then you can fi those items by typing in a search field.


## Backend Setup

Git clone the repo to your preferred directory:

    > git clone https://github.com/Spanomaly/marvelous-be.git

Install the npm packages:

    > npm i


This backend requires a MySQL database on your machine.  Information about installing MySQL and setting up a database can be found [here](https://dev.mysql.com/doc/mysql-getting-started/en/).

Create a new database and user with full permissions for that database.

Create a copy of the sample config file found here:

    /config/sample.config.json

and rename it

    /config/config.json

Update the development object with the configuration for your database:

      "development": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "database": "YOUR_DATABASE",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
      }

To start the server

    npm start


If you'd prefer a development server that reloads after changes:

install nodemon

    npm i -g nodemon

start dev server

    npm run dev

The frontend for this app is in [this repo](https://github.com/Spanomaly/marvelous-ui).
