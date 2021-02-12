const inquirer = require("inquirer");

function selectView() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to view?",
        choices: ["Employees", "Roles", "Departments", "Utilized Budget"],
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
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

module.exports = selectView;