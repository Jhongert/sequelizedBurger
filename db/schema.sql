CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burger(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured boolean NOT NULL DEFAULT false,
	date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);