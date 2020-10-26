const inquirer = require("inquirer");
const addEmployee= require("./addEmployee.js");
const deleteEmployee= require("./deleteEmployee.js");
const updateEmployee= require("./updateEmployee.js");
const viewEmployee= require("./viewEmployee.js");
const viewBudget= require("./viewBudget.js");




function askEmployee() {
 //return console.log ("pagina 2");
  inquirer
  .prompt([
    {
      type: "list",
      name: "question",
      message: "What do you like to do",
      choices: [
        "View Employee",
        "Add Employee",
        "Update Employee",
        "Delete Employee",
        "View Budget by Department",
        "Exit"
      ]

    }
  ])
  .then(answer => { 
    
    if (answer.question === "View Employee") {
     // console.log("view");
      viewEmployee();
    }

    if (answer.question === "Add Employee") {            
      // console.log("add");
       addEmployee();
    }

    if (answer.question === "Update Employee") {
      //console.log("update");
      updateEmployee();
    }
    
    if (answer.question === "Delete Employee") {
      //console.log("delete");
      deleteEmployee();
    }

    if (answer.question === "View Budget by Department") {
      //console.log("budget");
      viewBudget();
    }
    if (answer.question === "Exit") {
      console.log("Thank you see you next time");
      //connection.end();
    }
})
}


module.exports = askEmployee;