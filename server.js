const mysql = require("mysql");
const inquirer = require("inquirer");
const baseSelection = require("./lib/baseSelection");

const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: '@kina1987',
    database: 'employee_db',
  });

  baseSelection();


