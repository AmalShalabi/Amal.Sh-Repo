-- create a table
CREATE TABLE bookQ1 (
  id INTEGER PRIMARY KEY,
  bookName varchar(30),
  bookLanguage varchar(15),
  numOfPages numeric
);
-- insert some values
INSERT INTO bookQ1 VALUES (1, 'The Time Travelers Wife', 'English',546 ),
                        (2,'The Kite Runner','English',371),
                        (3,'My Sisters Keeper','English',432 ),
                        (4,'Predictably Irrational','English',304),
                        (5,'Healing Without Freud or Prozac','English',304),
                        (6,'The Leader Who Had No Title','English',224),
                        (7,'The Monk Who Sold His Ferrari','English',198),
                        (8,'Eat Pray Love','English',352 ),
                        (9,'Before I Go to Sleep','English',368),
                        (10,'Me Before You','English',480);
------------------------------------------------------------------------------------------------------
CREATE TABLE studentsQ2 (
  id varchar(9) PRIMARY KEY,
  SName varchar(20),
  SDegree varchar(30)
);
-- insert some values 

INSERT INTO studentsQ2 VALUES ("123456789", "Amal Shalabi", " M.Sc Biotechnology"),
                            ("123456780", "Maya Haddad", "B.A Mathmatic" ), 
                            ("123456781", "Jumana Geraisy", "Ph.D Electric Engineering"),  
                            ("123456782", "Moris Haddad", "B.A Medical Lab"), 
                            ("123456783", "Olga Haddad", "L.L.B"),
                            ("123456784", "Grace Geraisy", "M.A History of the middle east"),
                            ("123456785", "Joyce Geraisy", "M.Sc Music"),
                            ("123456786", "Elias Geraisy", "CPA"),
                            ("123456787", "Johnny Geraisy", "M.Sc Biochemical Engineering"),
                            ("123456788", "Ehab Shalabi", "B.Sc chemistry ");
                      -------------------------------------------------------------------------------------------
CREATE TABLE BILLIONAIRESQ3 (
  id INTEGER PRIMARY KEY,
  BName varchar(20),
  BWorth varchar(8)
);              
INSERT INTO BILLIONAIRESQ3 VALUES('1','Elon Musk','$257.3 B'),
('2',	'Bernard Arnault & family','$162.2 B'),
('3','Jeff Bezos','$155.3 B'),
('4','	Gautam Adani & family','$140.1 B'),
('5','Bill Gates','$111.0 B'),
('6','	Larry Ellison',	'$103.8 B'),
('7', 'Warren Buffett','$100.9 B'),
('8', 'Mukesh Ambani','$94.8 B'),
('9','Larry Page','$94.8 B'),
('10', 'Sergey Brin','$90.8 B');



                      