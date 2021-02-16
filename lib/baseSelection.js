const inquirer = require("inquirer");
const {addEmployee, viewEmployees, deleteEmployee, updateEmployee} = require("./selectEmployeeTask");
const selectRolesTask = require("./selectRolesTask");
const selectDepartmentsTask = require("./selectDepartmentsTask");


const employeeOperations = {
  'Show all employees': viewEmployees,
  'Add new employee': addEmployee,
  'Update existing employee': updateEmployee,
  'Delete existing employee': deleteEmployee,
  'Back to task selection': baseSelection,
  
}

const roleOperations = {

};

const departmentOperations = {};


/**
 * 
 * @param {object} operations 
 */
function selectTask(operations) {
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
    .catch((err) => {
      console.error(err);
    })
};


function baseSelection() {
  selectTask({
    "Manage Employee information": () => selectTask(employeeOperations), 
    "Manage roles": () =>  selectTask(roleOperations), 
    "Manage departments": () =>  selectTask(departmentOperations),
  })
 
};
