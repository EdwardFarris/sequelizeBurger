create database burgers_db;
use burgers_db;

create table burgers (
    id int(10) NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured boolean,
    PRIMARY KEY (id)
);