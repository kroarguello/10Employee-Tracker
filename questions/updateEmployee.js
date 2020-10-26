//update Employees
const inquirer = require("inquirer");

function updateEmployee(){
    //return console.log("update employeee");
    inquirer
    .prompt([
      {
          type: "input",
          name: "name",
          message: "What is the name of the employee that you want to UPDATE"       
      },
      {
          type: "input",
          name: "lastName",
          message: "What is the last Name that you want to UPDATE"       
      },
    ])
  
    
}

module.exports = updateEmployee;