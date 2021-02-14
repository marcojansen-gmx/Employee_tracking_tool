const inquirer = require("inquirer");
const baseSelection = require("./baseSelection");
const connection = require("../db/connection");
require('console.table');

function selectView() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to view?",
        choices: ["Employees", "Roles", "Departments", "Utilized Budget", "back to task selection"],
        name: "views",
      }])
        .then((data) => {
          switch (data.views) {
              case 'Employees':
                  viewEmployees();
                  break;
              case 'Roles':
                  viewRoles();
                  break;
              case 'Departments':
                  viewDepartments();
                  break;
              case 'back to task selection':
                  baseSelection();
                  break;                  
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

async function viewEmployees () {
  let employees = await connection.query("select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.table(employees);
  baseSelection();
};

async function viewRoles () {
  let employees = await connection.query("select title AS Title, salary AS Salary, department_id AS DepartmentID from role");
  console.table(employees);
  baseSelection();
};

async function viewDepartments () {
  let employees = await connection.query("select name AS DepartmentName from department");
  console.table(employees);
  baseSelection();
};

module.exports = selectView;