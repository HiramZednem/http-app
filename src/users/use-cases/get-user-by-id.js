import { userToModel } from "../mappers/user.mapper";
import { User } from "../models/users";

/**
 * 
 * @param {Number} id 
 * @returns {Promise<User>}
 */
export const getUserById = async( id ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    return userToModel(data) ;
} 