const inquirer = require("inquirer");
const BaseSelection = require("./BaseSelection");
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
          // console.log(data);
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
              case 'Utilized Budget':
                  viewBudget();
                  break;
              case 'back to task selection':
                  BaseSelection();
                  break;                  
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

async function viewEmployees () {
  let employees = await connection.query("select id AS ID, first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.table(employees);
  BaseSelection();
};

async function viewRoles () {
  let employees = await connection.query("select id AS ID, title AS Title, salary AS Salary, department_id AS DepartmentID from role");
  console.table(employees);
  BaseSelection();
};

async function viewDepartments () {
  let employees = await connection.query("select id as ID, name AS DepartmentName from department");
  console.table(employees);
  BaseSelection();
};

async function viewBudget () {
console.log("this function is not available yet")
BaseSelection();
};

module.exports = selectView;