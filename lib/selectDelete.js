const inquirer = require("inquirer");

selectDelete = () => {
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
                  deleteEmployeeSeletion();
                  break;
              case 'Role':
                  deleteRoleSeletion();
                  break;
              case 'Department':
                  deleteDepartmentSeletion();
                  break;
              default:
                  console.log("something went wrong");
                  break;
                }
            })
};

deleteEmployeeSeletion = () => {
  // delete from employee where id = ?
};

deleteRoleSeletion = () => {
  // delete from role where id = ?
};

deleteDepartmentSeletion = () => {
  // delete from department where id = ?
};

module.exports = selectDelete;