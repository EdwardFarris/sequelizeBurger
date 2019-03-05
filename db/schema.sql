
-- Creates the "todolist" database --
CREATE DATABASE sequelizeBurger_DB;
USE sequelizeBurger_DB;


create table burgers (
    id int(10) NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured boolean DEFAULT FALSE,
    createdAt DATETIME NOT NULL DEFAULT current_timestamp,
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);