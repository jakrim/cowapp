CREATE DATABASE IF NOT EXISTS cowapp;

-- DROP DATABASE IF EXISTS cowapp;

USE cowapp;

CREATE TABLE Cowapp (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(15),
  description VARCHAR(140)
);