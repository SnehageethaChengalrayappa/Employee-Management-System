class Employee {
	constructor(name, department, salary) {
		this.name = name;
		this.department = department;
		this.salary = salary;
		this.age = Math.floor(Math.random() * 50); // random age for example purpose
	}
}

let employeeList = [];
let totalSalary = 0;

const addEmployee = () => {
	const name = prompt("Enter employee name");
	const department = prompt("Enter employee department");
	const salary = parseFloat(prompt("Enter employee salary"));
	employeeList.push(new Employee(name, department, salary));
	totalSalary += salary;
	displayEmployeeList();
};

const displayAverageSalary = () => {
	alert(`Average salary: ${totalSalary / employeeList.length}`);
};

const findDeptEmployees = () => {
	const department = prompt("Enter department");
	const foundEmployees = employeeList.filter(employee => employee.department === department);
	if (foundEmployees.length === 0) {
		alert("No employees found in this department");
	} else {
		foundEmployees.forEach(employee => alert(employee.name));
	}
};

const increaseSalaries = () => {
	const increasePercentage = parseFloat(prompt("Enter the percentage to increase the salary by"));
	employeeList.forEach(employee => employee.salary *= (1 + increasePercentage / 100));
	totalSalary = employeeList.reduce((total, employee) => total + employee.salary, 0);
	displayEmployeeList();
};

const sortByAge = () => {
	employeeList.sort((a, b) => a.age - b.age);
	displayEmployeeList();
};

const displayEmployeeList = () => {
	let list = "";
	employeeList.forEach((employee, index) => list += `<p>${index + 1}. ${employee.name} (${employee.department}, $${employee.salary.toFixed(2)})</p>`);
	document.getElementById("employeeList").innerHTML = list;
};

document.getElementById("addEmployee").onclick = addEmployee;
document.getElementById("displayAverageSalary").onclick = displayAverageSalary;
document.getElementById("findDeptEmployees").onclick = findDeptEmployees;
document.getElementById("increaseSalaries").on