CREATE DATABASE IF NOT EXISTS friendfinder;

USE friendfinder;

CREATE TABLE IF NOT EXISTS friends (
    id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    Q1 INT NOT NULL,
    Q2 INT NOT NULL,
    Q3 INT NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE friends;

INSERT INTO friends (name, Q1, Q2, Q3) VALUES 
('Liz', 3, 3, 3), ('Bill', 3, 3, 3), ('Tim', 3, 3, 3), ('Rachel', 3, 3, 3), ('Zoe', 3, 3, 3), ('Luke', 3, 3, 3);  

SELECT * FROM friends;

UPDATE friends
SET Q1 = 1
WHERE id=6;

UPDATE friends
SET Q2 = 5
WHERE id=6;

UPDATE friends
SET Q3 = 1
WHERE id=6;