const inquirer = require("inquirer");
const askEmployee = require("./askEmployee");
const index = require("../index.js");


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
  .then( answer => {

      connection.query = ("INSERT department(name) VALUE (?)" , answer.name, function(err,res){
          if(err)throw err;
          console.log("Department added")
          //askEmployee();
        })
      

  }
  )


}

module.exports = addDepartment;