import { modelToUser, userToModel } from "../mappers/user.mapper";
import { User } from "../models/users";


export const saveUser = async( userLike ) => {
    const user = new User(userLike);
    const userToSave = modelToUser(user);

    let userUpdated;
    if ( user.id ) {
        userUpdated = await updateUser(userToSave, user.id)
    } else {
        userUpdated = await createUser(userToSave) 
    }

    return userToModel(userUpdated)

    
}

const createUser = async(user) => {
    const res = await fetch( `${import.meta.env.VITE_BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({newUser})
    return newUser;

}

const updateUser = async(user, id) => {
    const res = await fetch( `${import.meta.env.VITE_BASE_URL}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updatedUser = await res.json();
    console.log({updatedUser})
    return updatedUser;

}