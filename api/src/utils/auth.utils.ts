import { User } from "../models/User";
import * as bcrypt from 'bcrypt'
import { generateAccessToken } from "./jwt.utils";

import { loginData, registerData, resultAuthUtils } from "./interfaces.utils";

export const CreateUser = async (
    userData: registerData
    ) => {
    try {
        // Chek if the email is already in use
        const userCreated: null | object = await User.findOne({where:{email: userData.email}});
        console.log(userCreated)
        if(userCreated) return { error: 'Email is already in use'};

        // If email is not at the db we create the user. 
        // Instance the user, add the information and save it. 
        const user: User = new User();
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.email = userData.email;
        user.password = userData.password;
        await user.save();
        return {user}
    } catch (err: any | object) {
        return {error: err.message}
    }
};

export const AuthUser = async (userData: loginData): Promise<resultAuthUtils>=> {
    try {
        const user: User | null = await User.findOne({where: {email: userData.email}});
        if (user) {
            const verified: boolean = bcrypt.compareSync(userData.password, user.password);
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
};

export const TokenAuth = async ( token: string, userId: number) => {
    try {
        const user: User | null = await User.findOne({ where: { id: userId } });
        if(user) {
            return {user, token};
        }
        return { error: "User not found!"}
    } catch (err: any | object) {
        return {error: err.message}
    }
    
}