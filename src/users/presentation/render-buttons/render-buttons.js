import './render-buttons.css'
import usersStore from '../../store/users';
import { renderTable } from '../render-table/render-table';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination-container');

    const btnPrev = document.createElement('button');
    btnPrev.innerText = '⟵ Anterior';

    const btnNext = document.createElement('button');
    btnNext.innerText = 'Siguiente ⟶';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.innerText = `Página ${usersStore.getCurrentPage()}`;

    paginationContainer.append(btnPrev, currentPageLabel, btnNext);
    element.append(paginationContainer);

    btnPrev.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = `Página ${usersStore.getCurrentPage()}`;
        renderTable();
    });
    
    btnNext.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = `Página ${usersStore.getCurrentPage()}`;
        renderTable();
    });
}