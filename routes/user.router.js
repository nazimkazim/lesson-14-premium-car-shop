import Router from 'express';
import userController from '../controller/user.controller.js';

const router = Router();

router.post('/registration', userController.createUser);
router.post('/login', userController.login);

export default router;