import loginUser, { loginAuthAction, loginAuthPayload } from "./loginUser";

export type Payload = loginAuthPayload

export type Action = loginAuthAction;

export const actionCreators = {
    loginUser
}