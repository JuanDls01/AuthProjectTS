import {Response, Request, Router} from 'express';
const router = Router();

import { CreateUser } from '../utils/auth.utils';

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
    } catch (error: any | object) {
        return res.status(500).json({message: error.message})
    }
})

export default router;