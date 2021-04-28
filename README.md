# Forex-Trading-Backend

## Description

A backend for a Forex Trading Application made with Nodejs and a couple of dependencies such as:

1. Cors to enable requests;
2. Express to create the rest api;
3. Pg to manage my postgres database
4. Node-fetch to fetch data from a API;
5. Socket-io to update data in real time.

## Installation 

To install this project, you can:

1. Open Git Bash;
2. Change the current working directory to the location where you want the cloned directory;
3. Type `git clone https://github.com/ErickMifo/module-2-WestPoint-backend.git`;
4. Run `yarn` on your terminal to download all the dependencies;
5. Once everything is installed copy and paste the database.sql on your postgres to create the database and the tables and run yarn start.
6. You will need to create 4 random values for the graph table and 2 for the currency following the schema specified on the database.sql. Create values for the other tables are not necessary.
7. Finally you will need to get your own API key on https://free.currencyconverterapi.com/.

And to make it fully work you will also need the frontend part.

Link to the frontend - https://github.com/ErickMifo/module-2-WestPoint-frontend

## Usage

Every couple of minutes running, the application will show some data related to GBP_USD on the console.

![Captura de Tela (3)](https://user-images.githubusercontent.com/65738815/115391406-cf0fbe00-a1b5-11eb-9635-6388697da6fe.png)


You can make CRUD operations using "/wallet", "/currency", "/history" or "/graph".


## Code Explanation

I used a setInterval to get data with socket io each couple of minutes. After getting this data i send it to the frontend e store it on the database;

On controllers folder there are functions to create, read, update and delete elements on my database;

Finally, on routes folder there are the routes to make those create, read, update and delete operations.

## Credits 

Made by Erick Mifo ( https://github.com/ErickMifo ).
