const inquirer = require("inquirer");
const selectAdd = require("./selectAdd");
const selectView = require("./selectView");
const selectDelete = require("./selectDelete");
const selectUpdates = require("./selectUpdates");

function baseSelection() {
    inquirer.prompt([
          {
            type: "list",
            message: "What do you want to do?",
            choices: ["view", "add", "update", "delete"],
            name: "task",
          }])
            .then((data) => {
              
              switch (data.task) {
                  case 'view':
                      selectView();
                      break;
                  case 'add':
                      selectAdd();
                      break;
                  case 'update':
                      selectUpdates();
                      break;
                  case 'delete':
                      selectDelete();
                      break;
                  default:
                      console.log("something went wrong");
                      break;
              }
              
            })
};

module.exports = baseSelection;