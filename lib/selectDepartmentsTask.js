const inquirer = require("inquirer");
const baseSelection = require("./baseSelection");
const connection = require("../db/connection");
require('console.table');

function selectDepartmentTask() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: ["Show all departments", "Add new department", "Update existing department", "Delete existing department", "Back to task selection"],
      name: "department",
    }])
      .then((data) => {
        switch (data.department) {
            case 'Show all departments':
                viewDepartments();
                break;
            case 'Add new department':
                addDepartment();
                break;
            case 'Update existing department':
                updateDepartment();
                break;
            case 'Delete existing department':
                deleteDepartment();
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

async function viewDepartments () {
  let role = await connection.query("select ID, name AS DepartmentName from department");
  console.table(role);
  // baseSelection();
};


async function addDepartment () {
  // fill inquirer
  // INSERT INTO department (name) VALUES ('?');
  // baseSelection();
};

async function updateDepartment () {
  let role = await connection.query("select ID, name AS DepartmentName from department");
  console.table(role);
  // map role
  // fill inquirer
  // delete from department where id = ?
  // baseSelection();
};

async function deleteDepartment () {
  let role = await connection.query("select ID, name AS DepartmentName from department");
  console.table(role);
  // map role
  // fill inquirer
  // delete from department where id = ?
  // baseSelection();
};



module.exports = selectDepartmentTask;
