const inquirer = require("inquirer");

function selectAdd() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to add?",
        choices: ["Employees", "Roles", "Departments"],
        name: "adds",
      }])
        .then((data) => {
          // console.log(data);
          switch (data.adds) {
              case 'Employees':
                  addEmployee();
                  break;
              case 'Roles':
                  addRoles();
                  break;
              case 'Departments':
                  addDepartments();
                  break;
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

module.exports = selectAdd;