import { User } from "../models/User";


export const CreateUser = async (
    firstName: string,
    lastName: string,
    email: string, 
    password: string
    ) => {
    try {
        // Chek if the email is already in use
        const userCreated: null | object = await User.findOne({where:{email: email}});
        console.log(userCreated)
        if(userCreated) return { error: 'Email is already in use'};

        // If email is not at the db we create the user. 
        // Instance the user, add the information and save it. 
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        await user.save();
        return {user, password}
    } catch (err: any | object) {
        return {error: err.message}
    }
}