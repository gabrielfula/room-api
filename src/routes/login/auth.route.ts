import express from 'express';
import { AuthController } from '../../http/controllers/auth.controller';

const router = express.Router();

const authController = new AuthController();

router.post('/signin', authController.login);
router.post('/register', authController.register);


export default router;