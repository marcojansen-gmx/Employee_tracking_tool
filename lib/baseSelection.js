const inquirer = require("inquirer");
const {addEmployee, viewEmployees, deleteEmployee, updateEmployee} = require("./selectEmployeeTask");
const selectRolesTask = require("./selectRolesTask");
const selectDepartmentsTask = require("./selectDepartmentsTask");


const operations = {
  'Show all employees': viewEmployees,
  'Add new employee': addEmployee,
  'Update existing employee': updateEmployee,
  'Delete existing employee': deleteEmployee,
  'Back to task selection': baseSelection,
}


function selectEmployeeTask() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: Object.keys(operations),
      name: "operation",
    }])
    .then((data) => {
      const selected = data.operation;
      operations[selected]();
      
    })
};

function baseSelection() {
  inquirer.prompt([
    {
      type: "list",
      message: "What do you want to do?",
      choices: ["Manage Employee information", "Manage roles", "Manage departments"],
      name: "preSelection",
    }])
    .then((data) => {
      switch (data.preSelection) {
        case 'Manage Employee information':
          selectEmployeeTask();
          break;
        case 'Manage roles':
          selectRolesTask();
          break;
        case 'Manage departments':
          selectDepartmentsTask();
          break;
        default:
          console.log("something went wrong");
          break;
      }
    })
};

module.exports = baseSelection;