## BASIC API WITH NODE JS - EXPRESS - POSTGRESQL - REACT.

> Dependencies install.

- npm init -y
- npm i express pg
- npm i -g nodemon
- npm i dotenv

## Create Database and Tables.

> Login PSQL
psql -d postgres -U {my_user}

> Database create.
CREATE DATABASE database_usuario;

> Create customers table.
CREATE TABLE merchants( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(30), 
    email VARCHAR(30) 
);

> Insert register on the customers table.
INSERT INTO merchants (name, email) VALUES ('john', 'john@mail.com');

## Start Server 

> Star server
nodemon index.js

## Postman

> Get all customers. (GET)
http://localhost:3001

> Get customer by Id. (GET)
http://localhost:3001/merchants/{id}

> Add customer. (POST)
http://localhost:3001/merchants

> Update customer by Id. (PUT)
http://localhost:3001/merchants/{id}

> Delete customer by Id. (DELETE)
http://localhost:3001/merchants/{id}