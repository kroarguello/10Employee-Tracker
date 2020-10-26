const inquirer = require("inquirer");
const addEmployee= require("./addEmployee.js");
const deleteEmployee= require("./deleteEmployee.js");
const updateEmployee= require("./updateEmployee.js");
const viewEmployee= require("./viewEmployee.js");
const addDepartment = require('./addDepartment.js');
const addRole = require("./addRole.js");
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
        "Add department",
        "Add Role",
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
    if (answer.question === "Add department") {
      //console.log("delete");
      addDepartment();
    }
    if (answer.question === "Add Role") {
      //console.log("delete");
      addRole();
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