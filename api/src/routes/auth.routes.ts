import {Response, Request, Router} from 'express';
const router = Router();

import { CreateUser, AuthUser } from '../utils/auth.utils';

router.post('/register', async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if(firstName && lastName && email && password) {
            // createdUser: constante que será un objeto con un msj de error o con un usuario 
            // y token creados
            const createdUser = await CreateUser(firstName, lastName, email, password); 
            if(createdUser.error) return res.status(500).send({error: createdUser.error})
            return res.status(200).send(createdUser);
        }
        res.send({message: 'There are missing parameters'})
    } catch (error: any | object) {
        return res.status(500).json({message: error.message})
    }
});

router.post('/login', async (req: Request, res: Response) => {
    const {email, password} = req.body;
    if (email && password) {
        const authUser = await AuthUser(email, password);
        if (authUser.error) return res.status(500).send({error: authUser.error})
        return res.status(200).json(authUser);
    } else {
        res.status(500).send({error: "There are missing parameters"})
    }
})

export default router;