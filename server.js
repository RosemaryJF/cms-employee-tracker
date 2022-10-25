require('dotenv').config();
const inquirer = require("inquirer");
const express = require('express');
const mysql = require('mysql2');
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
  },
  console.log(`Connected to the Business database.`)
);

// // Connect to the database
// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`connected as id ${connection.threadId}\n`);
//   figlet('Employee tracker', function(err, data) {
//     if (err) {
//       console.log('ascii art not loaded');
//     } else {
//       console.log(data);
//     }  
//     startPrompt();
//   });
// });

// function startPrompt() {
//   const startQuestion = [{
//     type: "list",
//     name: "action",
//     message: "what would you like to do?",
//     loop: false,
//     choices: ["View all employees", "View all roles", "View all departments", "add an employee", "add a role", "add a department", "update role for an employee", "update employee's manager", "view employees by manager", "delete a department", "delete a role", "delete an employee", "View the total utilized budget of a department", "quit"]
//   }]
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
