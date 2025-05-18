
import usersStore from './store/users';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'loading...';
    const users = await usersStore.loadNextPage();
}