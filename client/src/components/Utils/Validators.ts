import { InputLoginErr, InputLogin } from "../Types";


export const LoginValidator = (input: InputLogin) => {
    let errors: InputLoginErr = {
        emailErr: null,
        passwordErr: null,
    };
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!input.email) errors.emailErr = 'Enter your email';
    else if (!testEmail.test(input.email)) errors.emailErr = 'Please enter a valid email'
    if (!input.password) errors.passwordErr = 'Enter your password';
    else if (input.password.length < 8) errors.passwordErr = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.passwordErr = 'La contraseña debe contener 20 digitos maximo';
    // Errors: Email y contraseña no coinciden
    return errors;
}