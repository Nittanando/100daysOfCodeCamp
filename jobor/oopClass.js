class DataTable {
  constructor(data) {
    this.data = data;
  }

  generateTable() {
    const table = document.createElement("table");
    table.classList.add("data-table");

    // Create table header
    const headerRow = table.insertRow();
    for (const key in this.data[0]) {
      const headerCell = document.createElement("th");
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }

    // Create table rows
    this.data.forEach((item) => {
      const row = table.insertRow();
      for (const key in item) {
        const cell = row.insertCell();
        cell.textContent = item[key];
      }
    });

    return table;
  }
}

const privateyeData = [
  {
    name: "Nittanando",
    profession: "software developer",
    age: 35,
    designation: "Frontend Developer",
    department: "Frontend",
  },
  {
    name: "mahmudul",
    profession: "software developer",
    age: 28,
    designation: "Backend Developer",
    department: "Backend",
  },
];

const dataTable = new DataTable(privateyeData);
const tableContainer = document.getElementById("table-container");
tableContainer.appendChild(dataTable.generateTable());
