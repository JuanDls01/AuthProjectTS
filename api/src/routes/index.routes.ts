import {Router} from 'express';
const router = Router();

// Routes:
import userRoutes from './user.routes';
import authRoutes from './auth.routes';


router.use('/user', userRoutes);
router.use('/auth', authRoutes);

export default router;