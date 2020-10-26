//Adding Employees
const inquirer = require("inquirer");

function viewEmployee(){
  //  return console.log("view employeee");
  inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee that you want to see"       
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the last Name that you want to see"       
    },
  ])
    
}

module.exports = viewEmployee;