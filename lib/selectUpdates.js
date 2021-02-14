const inquirer = require("inquirer");

function selectUpdates() {
    inquirer.prompt([
      {
        type: "list",
        message: "What do you want to update?",
        choices: ["Employee", "Role", "Department", "Manager assignment"],
        name: "updates",
      }])
        .then((data) => {
          // console.log(data);
          switch (data.updates) {
              case 'Employee':
                  updateEmployee();
                  break;
              case 'Role':
                  updateRole();
                  break;
              case 'Department':
                  updateDepartment();
                  break;
              case 'Manager':
                  updateManager();
                  break;
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

updateEmployee = () => {
  // update employee set ?,? where id=?;

};

updateRole = () => {
  // update role set ? where id=?;

};

updateDepartment = () => {
  // update employee set ? where id=?;

};

updateManager = () => {
  // update employee set ? where id=?;

};

module.exports = selectUpdates;