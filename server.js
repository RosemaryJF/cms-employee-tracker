require('dotenv').config();

const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const table = require('console.table');
var uniqid = require('uniqid');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'business_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the Business Database as ' + db.threadId);
  initApp();
});

initApp = () => {
  console.log('Ready to use the employee tracker? Let us get this thing rolling!');
  runMainQuestions();
};

const runMainQuestions = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'What would you like to do?',
      loop: false,
      choices: [
        'View all departments',
        'Add a department',
        'View all roles',
        'Add a role',
        'View all employees',
        'Add an employee',
        'Update an employee role',
        'Exit the Employee Tracker',
        'Delete a department',
        'Delete a role',
        'Delete an employee',
        'View total department budgets'
      ]
    }
  ])

    .then((response) => {
      const { choices } = response;

      if (choices === 'View all departments') {
        allDepartments();
      }

      if (choices === 'View all roles') {
        allRoles();
      }

      if (choices === 'View all employees') {
        allEmployees();
      }

      if (choices === 'Add a department') {
        addDepartment();
      }

      if (choices === 'Add a role') {
        addRole();
      }

      if (choices === 'Add an employee') {
        addEmployee();
      }

      if (choices === 'Update an employee role') {
        updateEmployee();
      }

      if (choices === 'Delete a department') {
        deleteDepartment();
      }

      if (choices === 'Delete a role') {
        deleteRole();
      }

      if (choices === 'Delete an employee') {
        deleteEmployee();
      }

      if (choices === 'View total department budgets') {
        viewTotalBudget();
      }

      if (choices === 'Exit the Employee Tracker') {
        connection.end()
      };
    });
};

// Function to show all the departments 
const allDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT id, department_name AS department FROM departments`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    runMainQuestions();
  });
};

// Function to show all the roles 
const allRoles = () => {
  console.log('Showing all roles...\n');

  const sql = `
    SELECT roles.id, roles.role_title, roles.role_salary
    FROM roles
    LEFT JOIN departments ON roles.department_id = department_id
  `;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    runMainQuestions;
  })
};

// Function to show all the employees 
const allEmployees = () => {
  console.log('Showing all employees...\n');
  const sql = `
    SELECT employees.id, 
      employees.first_name, 
      employees.last_name, 
      roles.role_title, 
      departments.department_name AS department,
      roles.role_salary AS salary, 
      CONCAT (manager.first_name, " ", manager.last_name) AS manager
      FROM employees
      LEFT JOIN roles ON employees.role_id = roles.id
      LEFT JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employees manager ON employees.manager_id = manager.id`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    runMainQuestions();
  });
};

// Function to add a department 
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addDepartment',
      message: 'What is the department name?',
      validate: addDepartment => {
        if (addDepartment) {
          return true;
        } else {
          console.log('Please enter a department name.');
          return false;
        }
      }
    }
  ])
    .then(res => {
      const sql = `
        INSERT INTO departments (department_name)
        VALUES (?)
      `;
      db.query(sql, res.addDepartment, (err, res) => {
        if (err) throw err;
        console.log(res.addDepartment + ` has been added to the departments table.`);
        allDepartments();
      });
    });
};

// Function to add a department 
const addRole = () => {
  //get the list of all department with department_id to make the choices object list for prompt question
  const existingDepartments = [];
  db.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;

    res.forEach(dep => {
      let deptObj = {
        name: dep.department_name,
        value: dep.id
      }
      existingDepartments.push(deptObj);
    });

    //question list to get arguments for making new roles
    let roleQuestions = [
      {
        type: "input",
        name: "roleTitle",
        message: "What is the title of the role you would like to add?"
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the roles salary?"
      },
      {
        type: "list",
        name: "department",
        choices: existingDepartments,
        message: "which department will the role be in?"
      }
    ];

    inquirer.prompt(roleQuestions)
    .then(response => {
      const sqlQuery = `
        INSERT INTO roles (role_title, role_salary, department_id) 
        VALUES (?)
      `;

      db.query(sqlQuery, [[response.roleTitle, response.roleSalary, response.department]], (err, res) => {
        if (err) throw err;
        console.log(`Successfully inserted ${response.roleTitle} role at id ${res.insertId}`);
        allRoles();
      });
    })
    .catch(err => {
      console.error(err);
    });
  });
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});