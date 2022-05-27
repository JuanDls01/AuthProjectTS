export interface loginData {
    email: string,
    password: string,
};

export interface registerData extends loginData {
    firstName: string,
    lastName: string,
}

export interface resultAuthUtils {
    user?: object;
    token?: string;
    error?: string;
}