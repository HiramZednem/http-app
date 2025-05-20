import { modelToUser } from "../mappers/user.mapper";
import { User } from "../models/users";


export const saveUser = async( userLike ) => {
    const user = new User(user);
    const userToSave = modelToUser(user);

    if ( user.id ) {
        throw 'No implemented'; 
        return;
    }

    const updatedUser = await createUser(userToSave) 
    return updatedUser;
    
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