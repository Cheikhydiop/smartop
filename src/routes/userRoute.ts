import express from 'express';
import UserController from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';



const router = express.Router();


router.post('/register', UserController.register);
router.post('/login', UserController.login);
// router.get('/',authMiddleware, UserController.getAllUsers);
// router.get('/', UserController.getAllUsers);
router.get('/organisation-users/:id', UserController.getUsersBySameOrganisation);




export default router;