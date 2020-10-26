//Adding Employees
const inquirer = require("inquirer");

function addEmployee(){
  //  return console.log("adding employeee");
inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee"       
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the last Name"       
    },
    {
        type: "input",
        name: "department",
        message: "What is the department"       
    },
    {
        type: "input",
        name: "title",
        message: "What is the title"       
    },
     {
        type: "input",
        name: "manager",
        message: "What is the Manager Id"       
    }

  ])
  .then(
      console.log("listo")// moverlo a async
  )


}

module.exports = addEmployee;