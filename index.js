
const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,  // Your port; if not 3306
  user: "root", // Your username
  password: "Mishi*20",  // Your password
  database: "department_db" //Data Base 
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  askEmployee();
 });



function askEmployee() {
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
        viewEmployee();
      }

      if (answer.question === "Add Employee") {
        addEmployee();
      }

      if (answer.question === "Update Employee") {
        updateEmployee();
      }

      if (answer.question === "Delete Employee") {
        deleteEmployee();
      }

      if (answer.question === "Add department") {
        addDepartment();
      }

      if (answer.question === "Add Role") {
        addRole();
      }

      if (answer.question === "View Budget by Department") {
        viewBudget();
      }

      if (answer.question === "Exit") {
        //console.log("Thank you see you next time");
        connection.end();
      }
    })
}


async function addDepartment() {
  const department = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Name of the department"
      }
    ])
        
        connection.query("INSERT INTO department (name) VALUES ('" + department.name + "')", (err, res) =>{
        if (err) throw err;
      })
}


 
  