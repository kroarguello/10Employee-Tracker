const inquirer = require("inquirer");

function addRole(){
  //  return console.log("adding employeee");
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title"       
    },
    {
        type: "input",
        name: "salary",
        message: "How much is the salary"       
    },
    {
        type: "input",
        name: "department_id",
        message: "What is the department"       
    }

  ])
  .then( 
      
  )


}

module.exports = addRole;