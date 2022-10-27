# cms-employee-tracker

# Employee Tracker (CLI)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

My employee tracker is a command line application that allows a business owner to quickly review their business database, including information of current departments, roles and employees. Furthermore they can add a new database, role or employee without having to exit the application to another one. 

I got more experience with express, used mySQL to create and seed a brand new database, as well as connect to it for the application to run. I used a `.env` file for the first time to hide sensitive data. Due to using this for the first time I struggled to format my file structure better and to use classes/routes effectively. As such I'm a bit disappointed with my server.js and down line would be keen to refactor it so that it is easier to navigate the entire application.

In addition to refactoring my code I would like to increase the functionality by adding delete functions and the option to view department budgets, unfortunately I ran out of time for the moment.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

---

## Installation

The user will need to clone the application from my GitHub account: https://github.com/RosemaryJF/cms-employee-tracker, to their local repository, and have Node.js and npm installed on their code editor.

Once cloned to the local repository the user will need to run `npm i` so that the necessary packages are installed on the application, otherwise the application will not work properly.

From there the user will need to source and seed the database. The following commands will need to be run through the integrated interminal from the `db` folder:
 * `mysql -u root -p` (this will switch them to SQL)

They will then be prompted to enter their SQL password, once this has been entered the following should be done:
 * `SOURCE schema.sql;`
 * `SOURCE seeds.sql;`

By seeding the database through the command line each table will be presented to the user as it is created. Once the database has been created the user can return to running the application from their integrated terminal launched from the `server.js` file. To start the application they simply need to run `node server.js`. 

You can view my walkthrough video to see the applications functionality by following the link below:

 * https://drive.google.com/file/d/1IgCbhpKDv0g2JcKzBheONlSqeBVwEMvR/view

---

## Usage

Once the application has been launched the user is presented with a list of choices (below) which they navigate with their keyboard arrows:
 * `View all departments`
 * `Add a department`
 * `View all roles`
 * `Add a role`
 * `View all employees`
 * `Add an employee`
 * `Update an employee role`
 * `Exit the Employee Tracker`

It is quite self explanatory what each line will do. Once the user has made a choice they will either view a formatted table (for the view options), or if adding something, or updating an employee will then be greeted by separate prompts to continue the process of their choice.

Once the user is finished using the application they simply need to `Exit the Employee Tracker` and `ctrl c` to go back to normal terminal functionality.

---

## Features

The user is automatically presented with the relevant table after adding/updating, this is a quick confirmation that everything they wanted to do has been done correctly.

---

## License

This application is licensed under an [MIT license](https://github.com/RosemaryJF/cms-employee-tracker/blob/main/assets/images/LICENSE).

---

## Credits

* https://dev.mysql.com/doc/refman/8.0/en/join.html

* https://www.mysqltutorial.org/mysql-left-join.aspx

* https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/

* https://expressjs.com/en/starter/basic-routing.html

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

* https://www.sqlshack.com/sql-syntax-errors/

* https://www.javatpoint.com/sql-syntax

* https://www.tabnine.com/code/javascript/functions/query

* https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/13-ORM/01-Activities/02-Stu_Sequelize-Setup