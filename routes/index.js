const express = require('express');

// Imports the modular routers for /notes
const departmentsRoute = require('./Department');
const rolesRoute = require('./Role');
const employeesRoute = require('./Employee');

const api = express();

api.use('/departments', departmentsRoute);
api.use('/roles', rolesRoute);
api.use('/employees', employeesRoute);

module.exports = api