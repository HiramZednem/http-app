
import usersStore from './store/users';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'loading...';
    await usersStore.loadNextPage();

    const users = usersStore.getUsers();

    console.log(users);
}