import { Router} from 'express';
import { loginUser, registerUser} from '../controllers/auth.controllers.js';
import { verifyToken } from '../helpers/utils.js';

const router = Router();

// Rutas de Auth
router.post( "/auth/login", loginUser)
router.post( "/auth/register", registerUser)
//router.post( "/landingPage", landingPage)


// Rutas de mi APP
router.get("/panel-de-control", verifyToken, (req, res)=> {
    console.log("TIENES PERMISO tus datos son:" , req.stuffff);
    res.json({msg: "Entraste a una sección privada", payload: req.stuffff});
});
// Otra Ruta privada
router.post("/privado", verifyToken, (req, res)=> {

});


export default router;