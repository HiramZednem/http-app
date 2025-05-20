
import { renderTable } from './presentation/render-table';
import usersStore from './store/users';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    
    renderTable( element );
}