export enum ActionTypes {
    LOGIN_TOKEN,
}

// Por default enum asignará LOGIN_TOKEN el número 0 y así sucesivamente hacía abajo aumentando el valor
// del número como si fuera un índice. Si quisieramos que si o si tenga un valor en formato texto
// deberíamos ponerlo como LOGIN_TOKEN = 'LOGIN_TOKEN', pero solo nos importa que redux pueda identificar
// uno de otros. 