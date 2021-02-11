const mysql = require("mysql");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: '@kina1987',
    database: 'employee_db',
  });

choices

inquirer.prompt([
    

})

// inquirer with options A) add departments B) add roles C) add employess D) view departments E) view roles F) view employess G) update employee roles 
// bonus A) update employee managers B) view employees by manager C) delete departments D) delete roles E) delete employees
// bonus view the total budget of a department, ie the combined salaries of all employess in that department

// inquirer add, view, delete, update
// switch   add==> inquirer departments, roles, employees
//          view ==> inquirer departments, roles, employees, total budget
//          delete ==> inquirer departments, roles, employees
//          update ==> inquirer departments, roles, employees


//   function 
//     connection.query('select * from actors order by id', (err, res) =>{
//         if (err) {
//             throw err;             
//         }

//     connection.end();

