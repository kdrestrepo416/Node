CREATE DATABASE IF NOT EXISTS companydb;
use companydb;
CREATE TABLE empleoyee(
    id  INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    salary INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE empleoyee;

INSERT INTO empleoyee values 
  (1, 'Karen', 20000),
  (2, 'Joe ', 40000),
  (3, 'John ', 50000),
  (4, 'Alex ', 50000);
