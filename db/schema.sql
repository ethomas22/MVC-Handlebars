create database burger_db;
use burger_db;

create table burger
(
    id int not null auto_increment primary key,
    burger_name varchar(75) not null,
    devoured boolean default false
);