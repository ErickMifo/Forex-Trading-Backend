# module-2-WestPoint-backend

## Description

Project made for WestPoint's "Module 2".

A backend for a Forex Trading Application made with Nodejs and a couple of dependencies such as:

1. Cors to enable requests;
2. Express to create the rest api;
3. Pg to manage my postgres database
4. Node-fetch to fetch data from a API;
5. Socket-io to update data in real time.

## Instalation 

To install this project, you can git clone and yarn.

Once everything is installed copy and paste the database.sql on your postgres and run yarn start.

You will need to create 1 element with random values on the wallet table following the schema and more 4 for the graph table, you will not need to do nothing on the history and the currency tables.  

Also you will need to get your own API key on https://free.currencyconverterapi.com/.

And to make it fully work you will also need the frontend part.

Link to the frontend - https://github.com/ErickMifo/module-2-WestPoint-frontend

## Usage

Every couple of minutes running, the application will show some data related to GBP_USD on the console.

You can make CRUD operations using "/wallet", "/currency", "/history" or "/graph".


## Code Explanation

I used a setInterval to get data with socket io each couple of minutes. After getting this data i send it to the frontend e store it on the database;

On controllers folder there are functions to create, read, update and delete elements on my database;

Finally, on routes folder there are the routes to make those create, read, update and delete operations.

## Credits 

Made by Erick Mifo ( https://github.com/ErickMifo ).
