const inquirer = require("inquirer");
const baseSelection = require("./baseSelection");
const { generateSetQuery } = require("./query-helpers");
// const asd = require("./asd");
const connection = require("../db/connection");
require('console.table');


function selectEmployeeTask() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: ["Show all employees", "Add new employee", "Update existing employee", "Delete existing employee", "Back to task selection"],
      name: "employees",
    }])
    .then((data) => {
      switch (data.employees) {
        case 'Show all employees':
          viewEmployees();
          break;
        case 'Add new employee':
          addEmployee();
          break;
        case 'Update existing employee':
          updateEmployee();
          break;
        case 'Delete existing employee':
          deleteEmployee();
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

// async function viewEmployees() {
//   let employees = await connection.query(`
//   select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department 
//   from employee 
//   inner join role on employee.role_id = role.id 
//   inner join department on role.department_id = department.id`);
//   console.table(employees);
//  };

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the first name of new employee",
      name: "newFirstName",
    },
    {
      type: "input",
      message: "Please enter the last name of new employee",
      name: "newLastName",
    },
    {
      type: "input",
      message: "Please enter a new valid roleID",
      name: "newRoleId",
    },
    {
      type: "input",
      message: "Please enter a new valid Manager ID",
      name: "newManagerId",
    }]).then((answer) => {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('?', '?', '?', '?')", [answer.newFirstName, answer.newLastName, answer.newRoleId, answer.newManagerId], (req, res) => {
        return res;
      })
    })
};

async function updateEmployee() {
  let employee = await connection.query("select id, last_name, first_name from employee");
  const choices = employee.map(({ id, first_name, last_name }) => ({
    name: ("ID " + id + " Name: " + first_name + " " + last_name),
    value: id
  }));
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: choices,
      name: "id",
    }]).then((employees) => {

      updateEmployeeDetails(employees.id)
    });
};



function updateEmployeeDetails(employeeId) {


  inquirer.prompt([
    {
      type: "input",
      message: "Please enter a new first name?",
      name: "newFirstName",
    },
    {
      type: "input",
      message: "Please enter a new valid Surname?",
      name: "newLastName",
    },
    {
      type: "input",
      message: "Please enter a new valid roleID?",
      name: "newRoleId",
    },
    {
      type: "input",
      message: "Please enter a new valid Manager ID?",
      name: "newManagerId",
    }]).then((employee) => {
      const payload = {
        first_name: employee.newFirstName,
        last_name: employee.newLastName,
        role_id: employee.newRoleId,
        manager_id: employee.newManagerId,
      }

      const setQuery = generateSetQuery(payload)

      console.log(setQuery);

      connection.query(`update employee set ${setQuery} where id = ?`, [
        ...Object.values(payload),
        employeeId
      ]
      
      // {

      //   // [employee.newFirstName, employee.newLastName, Number(employee.newRoleId), Number(employee.newManagerId), employeeId]
      // }
      )
        .then((res) => {
          console.log({res});
          console.log("ID " + employeeId + "has been updated");
        }).catch((err) => {
          throw err;
        })

    })
};


async function deleteEmployee() {
  let employee = await connection.query("select id, last_name, first_name from employee");
  const choices = employee.map(({ id, first_name, last_name }) => ({
    name: ("ID " + id + " Name: " + first_name + " " + last_name),
    value: id
  }));
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like do?",
      choices: choices,
      name: "id",
    }]).then((employees) => {
      const selectedId = employees.id;
      inquirer.prompt([
        {
          type: "list",
          message: "What would you like do?",
          choices: choices,
          name: "id",
        }]).then((employees) => {
          const idToDelete = employees.id;
          connection.query("delete from employee where id = ?", [idToDelete], () => {
            console.log("ID " + idToDelete + "has been deleted");
          })
        })
    });
};


// IMPORTANT this is via callback with error handling
// function viewEmployees() {
//   let employees = connection.query('select first_name AS FirstName, last_name AS Surname, title AS JobTitle, salary AS AnnualSalary, name AS Department from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id', function (err, result){
//     if (err) {
//       result.status(500).end();
//       return;
//     }
//     console.table(employees);
//   });

//   console.table(employees);
//   console.log("testtest", baseSelection);

// };

// connection.query('select * from employee where ? and ?',
// [variable1, variable2]

module.exports = selectEmployeeTask;