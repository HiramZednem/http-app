import { User } from "../models/users";

export const userToModel = ( user ) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = user;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    })
}

export const modelToUser = ( user ) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        firstName,
        lastName,
        gender,
    } = user;

    return {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender
    };

}