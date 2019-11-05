CREATE DATABASE goodburger_db;
USE goodburger_db;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);