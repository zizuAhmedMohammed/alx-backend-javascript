interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'beka',
    lastName: 'bekele',
    age: 40,
    location: 'Addis Ababa',
  };
  const student2: Student = {
    firstName: 'tadesse',
    lastName: 'bekele',
    age: 27,
    location: 'jimma',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  table.appendChild(tbody);
  table.style.backgroundColor= 'rgb(249, 243, 243)'
  studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
  
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  document.body.appendChild(table);
