
CREATE DATABASE goodburger_db;
USE goodburger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
);

