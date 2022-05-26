import { User } from "../models/User";
import * as bcrypt from 'bcrypt'
import { generateAccessToken } from "./jwt.utils";


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
        return {user}
    } catch (err: any | object) {
        return {error: err.message}
    }
}

interface authInterface {
    user?: object;
    token?: string;
    error?: string;
}

export const AuthUser = async (email: string, password: string): Promise<authInterface>=> {
    try {
        const user: User | null = await User.findOne({where: {email: email}});
        if (user) {
            const verified: boolean = bcrypt.compareSync(password, user.password);
            console.log('verified', verified)
            if (verified) {
                const token: string = generateAccessToken({ id: user.id })
                return {user, token}
            } else {
                return { error: 'Incorrect password!'}
            }
        } else {
            return {error: 'This email is not registered!'}
        }
    } catch(err: any | object) {
        return {error: err.message}
    }
}