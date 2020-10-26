const inquirer = require("inquirer");

function addDepartment(){
  //  return console.log("adding employeee");
inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "Name of the department"       
    }
  ])
  .then(
      console.log("listo")// moverlo a async
  )


}

module.exports = addDepartment;