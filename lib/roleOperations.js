const inquirer = require("inquirer");
const baseSelection = require("./inquirer-helpers");
const connection = require("../db/connection");
require('console.table');

function selectRolesTask() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: ["Show all roles", "Add new role", "Update existing role", "Delete existing role", "Back to task selection"],
      name: "role",
    }])
      .then((data) => {
        switch (data.role) {
            case 'Show all roles':
                viewRoles();
                break;
            case 'Add new role':
                addRole();
                break;
            case 'Update existing role':
                updateRole();
                break;
            case 'Delete existing role':
                deleteRole();
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

async function viewRoles() {
  let role = await connection.query("select title AS Title, salary AS Salary, department_id AS DepartmentID from role");
  console.table(role);
  // baseSelection();
};

function addRole() {
  console.table(role);
  // inquirer as for title, salary and department_id
  // INSERT INTO role (title, salary, department_id) VALUES ('?', '?', '?');
  // baseSelection();
};

async function updateRole() {
  let role = await connection.query("select title AS Title, salary AS Salary, department_id AS DepartmentID from role");
  console.table(role);
  // fill inquirer with role
  // update role set title = '?', salary = '?', department_id = '?' where id = '?';
  // baseSelection();
};

async function deleteRole() {
  let role = await connection.query("select title AS Title, salary AS Salary, department_id AS DepartmentID from role");
  console.table(role);
  // fill inquirer with role
  // delete from role where id = '?';
  // baseSelection();
};

module.exports = {
  addRole: () => {},
  updateRole: () => {},
  deleteRole: () => {},
  viewRoles: () => {}, // FIXME: fixme marco!!!!
};