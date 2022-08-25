import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister, loggedInUser, verifyUserAccount} from '../Controllers/UserControllers.js';
import { adminMiddleWare } from '../Middlewares/adminMiddleware.js';
import { authMiddleWare } from '../Middlewares/authMiddleWare.js';
import { userMiddleWare } from '../Middlewares/userMiddleware.js';



// create student router
const router = express.Router();

// REST Api


// user login router
router.route('/me').get(loggedInUser);
router.post('/login', userLogin);
router.post('/register', userRegister);
router.route('/verify_account').post(verifyUserAccount);

router.get('/', authMiddleWare, getAllUser);
router.get('/:id', authMiddleWare, getSingleUser);


router.post('/', adminMiddleWare, createUser);
router.put('/:id', userMiddleWare, updateUser);
router.patch('/:id', userMiddleWare, updateUser);
router.delete('/:id', userMiddleWare, deleteUser);



export default router;
