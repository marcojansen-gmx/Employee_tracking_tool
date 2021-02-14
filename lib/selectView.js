const inquirer = require("inquirer");
const BaseSelection = require("./BaseSelection");
const connection = require("../db/connection");

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
                  // TUTORING: NOT A FUNCTION MESSAGE
                  break;                  
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

async function viewEmployees () {
  let employees = await connection.query("select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id");
  console.log(employees);
  // select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id;
  // TUTORING: How to select assigned manager into select
}

viewRoles = () => {
  // select title, salary from role;
}

viewDepartments = () => {
  // select name AS Department , salary from role;
}

viewBudget = () => {
  // select salary from role inner join department on role.department_id = department.id where department_id = ?; 
  // build array from budget
  // create math add function
  // add array for each
  // return result with depatment name
}

module.exports = selectView;