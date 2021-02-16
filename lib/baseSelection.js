const inquirer = require("inquirer");
const selectEmployeeTask = require("./selectEmployeeTask");
const selectRolesTask = require("./selectRolesTask");
const selectDepartmentsTask = require("./selectDepartmentsTask");

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