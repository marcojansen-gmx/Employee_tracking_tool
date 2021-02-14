const inquirer = require("inquirer");
const BaseSelection = require("./BaseSelection");
const connection = require("../db/connection");
require('console.table');

function selectUpdates() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to update?",
        choices: ["Employee", "Role", "Department", "back to task selection"],
        name: "updates",
      }])
        .then((data) => {
          // console.log(data);
          switch (data.updates) {
              case 'Employee':
                  updateEmployee();
                  BaseSelection();
                  break;
              case 'Role':
                  updateRole();
                  BaseSelection();
                  break;
              case 'Department':
                  updateDepartment();
                  BaseSelection();
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

async function updateEmployee () {
  let employees = await connection.query("select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.table(employees);
  console.log(employees);

};

async function updateRole () {
  let employees = await connection.query("select id AS ID, first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.table(employees);

};

async function updateDepartment () {
  let employees = await connection.query("select id AS ID, first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.table(employees);

};


// function userSelection() {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "Which Employee do you wish to update (please enter ID)?",
//       name: "employeeToUpdate",
//     },
//     {
//       type: "input",
//       message: "Please enter new First Name",
//       name: "employeeToUpdateFirstName",
//     },
//     {
//       type: "input",
//       message: "Please enter new Last Name",
//       name: "employeeToUpdateLastName",
//     },
//     {
//       type: "input",
//       message: "Which Role ID does your updated Employee received",
//       name: "employeeToUpdateRole",
//     },
//     {
//       type: "input",
//       message: "Which manager does this employee report to (Please enter managers ID)?",
//       name: "employeeToUpdateRole",
//     }])
//       .then((data) => {
//         switch (data.updates) {
//             case 'Employee':
//                 updateEmployee();
//                 break;
//             case 'Role':
//                 updateRole();
//                 break;
//             case 'Department':
//                 updateDepartment();
//                 break;
//             case 'Manager':
//                 updateManager();
//                 break;
//             default:
//                 console.log("something went wrong");
//                 break;
//               }
//           })
// };

module.exports = selectUpdates;
