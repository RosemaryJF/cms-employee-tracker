const Department = require('./Department');

class Role extends Department {
    constructor(id, title, salary, department_id) {
        super(id),
            this.title = title,
            this.salary = salary,
            this.department_id = department_id;
    };
};

module.exports = Role