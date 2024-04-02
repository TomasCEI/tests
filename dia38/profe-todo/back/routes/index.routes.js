
import { Router} from 'express';

import { loginUser, registerUser } from '../controllers/auth.controller.js';
import { getAllTasks, createTask, completeTask } from '../controllers/task.controller.js';

import { verifyToken } from '../helpers/util.js';

const router = Router();


// Auth
router.post(    "/auth/login",        loginUser); // login
router.post(    "/auth/register",     registerUser); // register

router.get( "/auth/private", verifyToken, (req, res) => {

    res.json({message: "Acceso a ruta protegida", stuff:req.stuff});
});

// Tasks
router.get (    "/task/getall",        getAllTasks);
router.post(    "/task/create",        createTask); 
router.post(    "/task/complete",      completeTask); 

export default router;