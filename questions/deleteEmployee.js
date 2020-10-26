//Adding Employees
const inquirer = require("inquirer");

function deleteEmployee(){
//return console.log("delete employeee");
    inquirer
    .prompt([
      {
          type: "input",
          name: "name",
          message: "What is the name of the employee that you want DELETE"       
      },
      {
          type: "input",
          name: "lastName",
          message: "What is the last Name that you want DELETE"       
      },
    ])
  
}

module.exports = deleteEmployee;