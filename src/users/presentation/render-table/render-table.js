import './render-table.css'
import usersStore from '../../store/users';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);
    }

    let tableHTML = ``

    users.forEach( user => {
        tableHTML = tableHTML + `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class="select" data-id="${ user.id }">select</a> 
                    <a href="#/" class="delete" data-id="${ user.id }">delete</a> 
                </td> 
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;

    document.querySelectorAll('.select').forEach((btnSelect => {
        btnSelect.addEventListener('click', (event) => {
            console.log(event.target.getAttribute('data-id'))
        })
    }))

    document.querySelectorAll('.delete').forEach((btnSelect => {
        btnSelect.addEventListener('click', (event) => {
            console.log(event.target.getAttribute('data-id'))
        })
    }))

}