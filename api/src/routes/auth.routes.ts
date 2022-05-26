import {Response, Request, Router} from 'express';
const router = Router();

import { CreateUser, AuthUser, TokenAuth } from '../utils/auth.utils';
import { JWTAuthenticator } from '../middlewares/JWTAuth'
import { loginData, registerData } from '../utils/interfaces.utils';

router.post('/register', async (req: Request, res: Response) => {
    try {
        const userData: registerData = req.body;
        if(userData.firstName && userData.lastName && userData.email && userData.password) {
            // createdUser: constante que será un objeto con un msj de error o con un usuario 
            // y token creados
            const createdUser = await CreateUser(userData); 
            if(createdUser.error) return res.status(500).send({error: createdUser.error})
            return res.status(200).send(createdUser);
        }
        res.send({message: 'There are missing parameters'})
    } catch (error: any | object) {
        return res.status(500).json({message: error.message})
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const userData: loginData = req.body;
        if (userData.email && userData.password) {
            const authUser = await AuthUser(userData);
            if (authUser.error) return res.status(500).send({error: authUser.error})
            return res.status(200).json(authUser);
        } else {
            res.status(500).send({error: "There are missing parameters"})
        }
    } catch (error: any | object) {
        return res.status(500).json({message: error.message})
    }
})

router.post('/login/token', JWTAuthenticator, async (req: Request, res: Response) => {
    // We call this route every time the root page is load, to know if 
    // the user is login. That's the reason we use the token. 
    try {
        const {bodyToken, user} = req.body;
        if (bodyToken && user) {
            const foundUser = await TokenAuth(bodyToken, user);
            if(foundUser.error) return res.status(500).send({error: foundUser.error});
            return res.status(200).json(foundUser)
        }
    } catch (error: any | object) {
        return res.status(500).json({message: error.message})
    }
})

export default router;