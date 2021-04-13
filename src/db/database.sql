CREATE DATABASE forex_database;

CREATE TABLE history(
    history_id SERIAL PRIMARY KEY,
    history_content VARCHAR(100)
);

CREATE TABLE wallet(
    wallet_id SERIAL PRIMARY KEY,
    usd INT,
    gbp INT
);

CREATE TABLE currency(
    currency_id SERIAL PRIMARY KEY,
    usd VARCHAR(40),
    gbp VARCHAR(40)
);

CREATE TABLE graph(
    graph_id SERIAL PRIMARY KEY,
    usd NUMERIC,
    gbp NUMERIC,
    graph_date VARCHAR(30)
);