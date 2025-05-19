import { userToModel } from "../mappers/user.mapper";

/**
 * 
 * @param {Number} page 
 */
export const loadUsersByPage = async( page ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    console.log(url)

    const res = await fetch(url);
    const data = await res.json();

    const users = data.data.map( user => userToModel(user) );
    console.log(users);
} 