-- Seeding of departments table
INSERT INTO departments (department_name)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

SELECT * FROM departments;

-- Seeding of roles table
INSERT INTO roles (role_title, role_salary, department_id)
VALUES
    ('Project Manager', 175000, 1),
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 80000, 2),
    ('Accountant',120000, 2),
    ('Legal Team Manager', 75000, 3),
    ('Lawyer', 100000, 3),
    ('Sales Manager', 80000, 4),
    ('Salesperson', 70000, 4);

SELECT * FROM roles;

-- Seeding of employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Lucy', 'Simmons', 1, NULL),
    ('Kyle', 'Housten', 2, 1),
    ('Amanda', 'Watts', 3, 1),
    ('Tony', 'Shields', 4, NULL),
    ('Sharon', 'Stone', 5, 1),
    ('Harry', 'Kline', 6, NULL),
    ('Josie', 'Wellington', 7, 6),
    ('Rachel', 'Dunn', 8, NULL),
    ('Lee', 'Duggs', 9, 8);

SELECT * FROM employees;
