CREATE DATABASE IF NOT EXISTS friendfinder;

USE friendfinder;

DROP TABLE friends;

CREATE TABLE IF NOT EXISTS friends(
    id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    photoLink VARCHAR (50) NOT NULL,
    Q1 INT NOT NULL,
    Q2 INT NOT NULL,
    Q3 INT NOT NULL,
    Q4 INT NOT NULL,
    Q5 INT NOT NULL,
    Q6 INT NOT NULL,
    Q7 INT NOT NULL,
    Q8 INT NOT NULL,
    Q9 INT NOT NULL,
    Q10 INT NOT NULL,
    PRIMARY KEY (id)
);


DESCRIBE friends;

USE friendfinder;

INSERT INTO friends (name, photoLink, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10) VALUES 
('Liz', 'liz.png',3, 3, 3, 3, 3, 3, 3, 3, 3, 3), 
('Bill', 'bill.png', 5, 4, 3, 2, 1, 2, 3, 4, 5, 4), 
('Tim', 'tim.png', 4, 2, 3, 5, 2, 5, 1, 3, 1, 3), 
('Rachel', 'rachel.png', 3, 3, 3, 4, 4, 4, 5, 2, 2, 4), 
('Zoe', 'zoe.png', 2, 2, 2, 4, 3, 4, 3, 5 ,2, 3), 
('Luke', 'luke.png', 1, 2, 1, 2, 3, 4, 5, 2, 5, 3);  

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

DELETE FROM friends WHERE id > 7;