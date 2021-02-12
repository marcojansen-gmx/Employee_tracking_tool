const inquirer = require("inquirer");

function selectDelete() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to delete?",
        choices: ["Employee", "Role", "Department"],
        name: "deletes",
      }])
        .then((data) => {
          // console.log(data);
          switch (data.deletes) {
              case 'Employee':
                  deleteEmployee();
                  break;
              case 'Role':
                  deleteRole();
                  break;
              case 'Department':
                  deleteDepartment();
                  break;
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

module.exports = selectDelete;