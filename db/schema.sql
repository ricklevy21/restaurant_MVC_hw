DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(33) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


