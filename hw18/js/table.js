function createTable(rows, columns) {
	const table = document.createElement('table');

	let counter = 1;
	for (let i = 0; i < rows; i++) {
		const row = document.createElement('tr');

		for (let j = 0; j < columns; j++) {
			const cell = document.createElement('td');
			cell.textContent = counter;
			row.appendChild(cell);
			counter++;
		}

		table.appendChild(row);
	}

	document.getElementById('table__div').appendChild(table)
}

createTable(15, 5)