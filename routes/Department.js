require('dotenv').config();
const mysql = require('mysql');
const inquier = require('inquirer');

class Department {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    };


    deleteDepartment() {
        const departments = [];
        connection.query("SELECT * FROM DEPARTMENT", (err, res) => {
            if (err) throw err;

            res.forEach(dep => {
                let qObj = {
                    name: dep.name,
                    value: dep.id
                }
                departments.push(qObj);
            });

            let questions = [
                {
                    type: "list",
                    name: "id",
                    choices: departments,
                    message: "which department do u want to delete?"
                }
            ];

            inquier.prompt(questions)
                .then(response => {
                    const query = `DELETE FROM DEPARTMENT WHERE id = ?`;
                    connection.query(query, [response.id], (err, res) => {
                        if (err) throw err;
                        console.log(`${res.affectedRows} row(s) successfully deleted!`);
                        startPrompt();
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        });
    };

};


module.exports = Department;