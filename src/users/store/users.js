import { User } from "../models/users";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async() => {
   const users = await loadUsersByPage( state.currentPage + 1 );
   if( users.length === 0 ) return;

   state.currentPage += 1;
   state.users = users;
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage( state.currentPage - 1 );
    if( users.length === 0 ) return;

    state.currentPage -= 1;
    state.users = users;
}

const onUserChanged = (updatedUser) => {
    let userChanged = false;

    state.users = state.users.map( (user) => {
        if  (user.id == updatedUser.id) {
            userChanged = true;
            return updatedUser;
        }
        return user;
    });


    // si la longitud de los users es menos de 10 (osea que cabe en el grid)
    // y no es una actualizacion, entonces agregalo asi a lo maldito al state
    // pq debe aparecer, si no xd, pues aparecera cuando el user cambie de pagina
    if ( state.users.length < 10 && !userChanged) {
        state.users.push(updatedUser)
    }
    

}

const reloadPage = () => {
    throw new Error('not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage 
}