import { InputLogin } from "../Types";


export const LoginValidator = (input: InputLogin) => {
    let errors: InputLogin = {
        email: null,
        password: null,
    };
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!input.email) errors.email = 'Enter your email';
    else if (!testEmail.test(input.email)) errors.email = 'Please enter a valid email'
    if (!input.password) errors.password = 'Enter your password';
    else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
    // Errors: Email y contraseña no coinciden
    return errors;
}