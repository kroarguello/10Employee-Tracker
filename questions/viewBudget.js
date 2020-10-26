//view Budget Employees
const inquirer = require("inquirer");

function viewBudget(){
//    return console.log("view budget employeee");
    inquirer
    .prompt([
      {
          type: "input",
          name: "department",
          message: "What Department's Budget do you want to see"       
      }
    ])
  
}

module.exports = viewBudget;