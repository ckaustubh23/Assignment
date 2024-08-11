#Create Table in database using the queries below.

create database polling_system;

use polling_system;

CREATE TABLE polls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    votes1 INT DEFAULT 0,
    votes2 INT DEFAULT 0
);