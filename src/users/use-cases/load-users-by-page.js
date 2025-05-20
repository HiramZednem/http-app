import { userToModel } from "../mappers/user.mapper";
import { User } from "../models/users";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page ) => {
    if(page < 1) return [];

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

    const res = await fetch(url);
    const data = await res.json();

    if (page > data.last) return [];
    return data.data.map( userToModel );
} 