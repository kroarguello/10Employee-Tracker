
* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager



DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL, 
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
    );


CREATE TABLE roles(
   id INTEGER AUTO_INCREMENT NOT NULL,
   title VARCHAR(30),
   salary DECIMAL,
   department_id INT NOT NULL,
   FOREIGN KEY (department_id) REFERENCES department(id),
   PRIMARY KEY (id)
);

CREATE TABLE employee(
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id),
PRIMARY KEY(id)
);

INSERT INTO department(name) VALUES ("KITCHEN");
INSERT INTO roles (title, salary, department_id) VALUES ("Cook 1", 25.00 , 1);
INSERT INTO employee (first_name,last_name,role_id, manager_id) VALUES ("Alejandro","Martinez", 1, 1)

