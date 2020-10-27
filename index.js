
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

//Main Questions
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
          "Update Title of Employee",
          "Delete Employee",
          "Add department",
          "Add Title",
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
      if (answer.question === "Update Title of Employee") {
        updateEmployee();
      }
      if (answer.question === "Delete Employee") {
        deleteEmployee();
      }
      if (answer.question === "Add department") {
        addDepartment();
      }
      if (answer.question === "Add Title") {
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

  connection.query("INSERT INTO department (name) VALUES ('" + department.name + "')", (err, res) => {
    if (err) throw err;
  })

  //show Department    
  connection.query("SELECT name FROM department ORDER BY id", function (err, res) {
    if (err) throw err;
    console.table(res);
    askEmployee();
  })
}

//Adding Role
async function addRole() {
  const departments = await new Promise(resolve => {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })
  let allDepartments = [];
  departments.forEach(element => {
    allDepartments.push(element.name);
  })
  const role = await inquirer.prompt([
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
      type: "list",
      name: "department_id",
      message: "What is the department",
      choices: allDepartments
    }
  ])

  const index = allDepartments.indexOf(role.department_id);
  connection.query("INSERT INTO roles (title, salary,department_id) VALUES ('" + role.title + "','" + role.salary + "','" + departments[index].id + "')", (err, res) => {
    if (err) throw err;
  })

  //show Role
  connection.query("SELECT title, salary, department_id FROM roles ORDER BY id", function (err, res) {
    if (err) throw err;
    console.table(res);
    askEmployee();
  })
}


//Add Employee
async function addEmployee() {
  const roles = await new Promise(resolve => {
    connection.query("SELECT * FROM roles", (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })
  let allRoles = [];
  roles.forEach(element => {
    allRoles.push(element.title);
  })

  const employee = await inquirer.prompt([
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
      name: "manager",
      message: "What is the Manager Id"
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the title",
      choices: allRoles
    }
  ])

  const index = allRoles.indexOf(employee.role_id);
  connection.query("INSERT INTO employee (first_name, last_name,role_id, manager_id) VALUES ('" + employee.name + "','" + employee.lastName + "','" + roles[index].id + "','" + employee.manager + "')", (err, res) => {
    if (err) throw err;
  })
  viewEmployee();
}

//View employee
function viewEmployee() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, employee.manager_id, department.name AS department FROM employee LEFT JOIN roles ON employee.role_id=roles.id LEFT JOIN department ON roles.department_id=department.id LEFT JOIN employee manager ON manager.id = employee.manager_id", function (err, res) {
    if (err) throw err;
    console.table(res);
    askEmployee();
  })
}

//update Employee by Title
async function updateEmployee() {
  // Title to update
  const roles = await new Promise(resolve => {
    connection.query("SELECT * FROM roles", (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })
  let allRoles = [];
  roles.forEach(element => {
    allRoles.push(element.title);
  })

  //employee to update
  const employees = await new Promise(resolve => {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })

  let allEmployees = [];
  employees.forEach(element => {
    allEmployees.push(element.first_name + "    " + element.last_name);
  })


  const employee = await inquirer.prompt([
    {
      type: "list",
      name: "employeeName",
      message: "Which Employee do you want to update",
      choices: allEmployees
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the New Title ",
      choices: allRoles
    }
  ])

  const indexTitle = allRoles.indexOf(employee.role_id);
  const indexEmployee = allEmployees.indexOf(employee.employeeName);
  console.log(allEmployees.indexOf(employee.employeeName));
  console.log(allRoles.indexOf(employee.role_id));

  connection.query("UPDATE employee SET role_id=" + roles[indexTitle].id + " WHERE id=" + employees[indexEmployee].id, (err, res) => {
    if (err) throw err;
    viewEmployee()
  });
}


//Delete employee
async function deleteEmployee() {
  //employee list
   const employees = await new Promise(resolve => {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      resolve(res);
    })
  })

  let allEmployees = [];
  employees.forEach(element => {
    allEmployees.push(element.first_name + "    " + element.last_name);
  })
  const employee = await inquirer.prompt([
    {
      type: "list",
      name: "employeeName",
      message: "Which Employee do you want to DELETE",
      choices: allEmployees
    }
  ])
  const indexEmployee = allEmployees.indexOf(employee.employeeName);
  connection.query("DELETE FROM employee  WHERE id=" + employees[indexEmployee].id, (err, res) => {
    if (err) throw err;
    viewEmployee()
  });
}

//view Budget by Department
async function viewBudget(){
//employee list
const depart = await new Promise(resolve => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    resolve(res);
  })
})

let allDepartment = [];
depart.forEach(element => {
  allDepartment.push(element.name);
})
const department = await inquirer.prompt([
  {
    type: "list",
    name: "departmentName",
    message: "What Department Badget do you want?",
    choices: allDepartment
  }
])
const index = allDepartment.indexOf(department.departmentName);
connection.query("SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.name AS department FROM employee LEFT JOIN roles ON employee.role_id=roles.id LEFT JOIN department ON roles.department_id=department.id WHERE department.id=" + depart[index].id, (err, res) => {
  if (err) throw err;
  console.table(res);  
  
});

connection.query("SELECT SUM(roles.salary) AS department FROM employee LEFT JOIN roles ON employee.role_id=roles.id LEFT JOIN department ON roles.department_id=department.id WHERE department.id=" + depart[index].id, (err, res) => {
  if (err) throw err;
  console.log ("Total Budget by Department");
  console.table(res);  
  
});
askEmployee();
}