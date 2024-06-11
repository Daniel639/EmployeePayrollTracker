// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let continueAdding = true;


  while (continueAdding) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    if (isNaN(salary)) {
      salary = 0;
  } else {
      salary = Number(salary);
  }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

   // let continueInput = prompt("Do you want to continue adding employees? (yes/no)");
   // if (continueInput !== null && continueInput.toLowerCase() === "no") {
   //     continueAdding = false;
   // }
   continueAdding = confirm("Do you want to add another employee?");

}

// console.log(`Array(${employees.length})`);
  return employees;
};
employeesArray = collectEmployees();

// Display the average salary
function displayAverageSalary(employees) {
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
      totalSalary += employees[i].salary;
  }
  let averageSalary = totalSalary / employees.length;
  console.log(`The average employee salary between our: ${employees.length} employees(s) is $${averageSalary.toFixed(2)}`);
}

// Select a random employee
function getRandomEmployee(employees) {
  let randomIndex = Math.floor(Math.random() * employees.length);
  let randomEmployee = employees[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);
  employees.sort(function(a,b) {
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