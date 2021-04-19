# module-2-WestPoint-backend

A backend for a Forex Trading Application made with Nodejs and a couple of dependencies such as:

1. Cors to enable requests;
2. Express to create the rest api;
3. Pg to manage my postgres database
4. Node-fetch to fetch data from a API;
5. Socket-io to update data in real time.

I used a setInterval to get data with socket io each couple of minutes. After getting this data i send it to the frontend e store it on the database;

On controllers folder there are functions to create, read, update and delete elements on my database;

Finally, on routes folder there are the routes to make those create, read, update and delete operations.

To install this project, you can just git clone and yarn.

Link to the frontend - https://github.com/ErickMifo/module-2-WestPoint-frontend

Made by Erick Mifo ( https://github.com/ErickMifo ).
