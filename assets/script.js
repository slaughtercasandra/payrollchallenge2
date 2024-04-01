// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []
// Collect employee data   // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function () {
  let firstname = prompt("Enter first name");
  let lastname = prompt("enter last name");
  let salary = prompt("Enter salary");
  if (isNaN(salary)) {
    salary = 0
  }
  const employeeData = {
    firstName: firstname,
    lastName: lastname,
    salary: salary,
  }
  employeesArray.push(employeeData)

  return employeesArray
}



// Display the average salary
const displayAverageSalary = function (employeesArray) {
     let salarysun = 0;
    for(let i = 0; i < employeesArray.length; i++) {
      salarysun += employeesArray[i].salary;
    }
      const average= salarysun /employeesArray.length
      console.log (`The average is ${average}`)
    }


// Select a random employee
const getRandomEmployee = function (employeesArray) {
const rand=Math.floor(Math.random() * employeesArray.length)
console.log(rand);
const r = employeesArray[rand];
console.log (`random winner is ${r.firstName}`);


  // TODO: Select aconsole.lognd display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  console.log('click')
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
