CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO burgers (name)
VALUES ("Hogwarts School of Witchcraft");

INSERT INTO burgers (name)
VALUES ("Castelobruxo");

INSERT INTO burgers (name)
VALUES ("Durmstrang Institute");