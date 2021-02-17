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
