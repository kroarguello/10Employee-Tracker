//Adding Employees
const inquirer = require("inquirer");

function addEmployee(){
  //  return console.log("adding employeee");
inquirer
  .prompt([
    {
        type: "input",
        name: "question",
        message: "What do you like to do"       
    }, 
    {
      type: "list",
      name: "question",
      message: "What do you like to do",
      choices: [
        "View Employee",
        "Add Employee",
        "Exit"
      ]

    }
  ])
  .then()


}

module.exports = addEmployee;