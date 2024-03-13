interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
  firstName: "David",
  lastName:" Raya",
  age: 23,
  location: "London",
};

const student2: Student = {
  firstName: "Shadrack",
  lastName: "Koech",
  age: 29,
  location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

// const table = document.getElementById('studentTable') as HTMLTableElement;

// // Create a new row for each student and append it to the table
// studentsList.forEach((student) => {
// 	const row = table.insertRow();
// 	const firstNameCell = row.insertCell(0);
// 	const locationCell = row.insertCell(1);
// 	firstNameCell.innerHTML = student.firstName;
// 	locationCell.innerHTML = student.location;
// })



const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
