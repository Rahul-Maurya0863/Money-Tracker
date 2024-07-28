// app.js
document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;

    if (description === '' || amount === '') {
        alert('Please fill in all fields');
        return;
    }

    const transactionList = document.getElementById('transaction-list');

    const row = document.createElement('tr');

    const typeCell = document.createElement('td');
    typeCell.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    row.appendChild(typeCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = `$${amount}`;
    row.appendChild(amountCell);

    transactionList.appendChild(row);

    document.getElementById('transaction-form').reset();
});
