-- create a table
CREATE TABLE cars (
  car_id varchar(8)  ,
  car_company varchar(20) not null,
  car_model varchar(20) not null,
  car_color varchar(10) not null,
  car_test boolean NOT NULL,
 car_report boolean NOT NULL,
 primary key (car_id)
);
-- insert some values
INSERT INTO cars VALUES ("12345678", 'kia', 'Soul',"gray",true, false),
                            ("12345677", 'kia', 'Sportage',"Champagne",true, false),
                            ("12345676", 'kia', 'EV6',"Beige",true, false),
                            ("12345675", 'kia', 'Seltos',"Bordo",true, true),
                            ("12345674", 'kia', 'Carnival',"dark blue",true, false),
                            ("12345673", 'kia', 'Niro',"light blue",true, false),
                            ("12345672", 'kia', 'Sorento',"White",false, true),
                            ("12345671", 'kia', 'Telluride',"Black",true, false),
                            ("12345679", 'kia', 'Rio',"Red", false, true),
                            ("12345670", 'kia', 'K5',"Red",true, true);
                            
                         /*  To pay attention  not to put boolean value inside  => " "*/ 
-- fetch some values
-- q1 Present all cars data in Table
SELECT * FROM cars ; 

-- q2 Present Just the cars which its color is white
SELECT car_model FROM cars where car_color="White";

-- q3 Present just the cars that have a car_test
SELECT car_id,car_model FROM cars where car_test=true;

-- q4 Present the cars that have report and its color is Red
SELECT car_id,car_model FROM cars where car_color="Red" and car_report=true;

-- q5 Present Just the car which have id=12345678
SELECT car_id, car_model FROM cars where car_id="12345678";
-------------------------------------------------------------------------------------
CREATE Table products (
product_barcode varchar(13) ,
product_name varchar(20) NOT NULL,
product_price numeric NOT NULL,
product_company varchar(20) NOT NULL,
product_date boolean NOT NULL ,
 primary key (product_barcode)
);
-- insert some values
INSERT INTO products VALUES ("1234567891012", 'Milk', '10',"Tnova",true),
                            ("1234567891013", 'Wine', '120',"Garda",false),
                            ("1234567891014", 'Cola', '5',"Coca-cola",true),
                            ("1234567891015", 'Chocolate', '5',"elite",true),
                            ("1234567891016", 'Ice-Cream', '8',"nestle",false),
                            ("1234567891017", 'Seven-Up', '10',"Schweaps",false),
                            ("1234567891018", 'Bamba', '2',"Shosh",true),
                            ("1234567891010", 'Bamba', '16',"Osem",true),
                            ("1234567891011", 'Wine', '80',"Vesevo",true),
                            ("1234567891000", 'Milk', '18',"Tara",true);
-- q1 Present all the products data in one tabel
SELECT * FROM products;
-- q2 Present all the products which there price is less than 15 ₪
SELECT product_name FROM products where product_price< 15;

-- q3 Present all the products which there price is between 15₪ and 30₪ 
SELECT product_name FROM products where product_price>15 and product_price<30; 

-- q4 Present all the products which have expiration date
SELECT product_name FROM products where product_date=true;

-- q5 peresent how many products is there 
SELECT COUNT(product_name) FROM products;
 
--  q6 present the avgrage price for all the products together
SELECT AVG(product_price)FROM products;

