import { Router } from "express";


const router = Router();

let jsonRes = {
    success: true,
    error: false,
    data: [],
    msg: "mensaje"
}

export const index = (req, res) => {
    jsonRes.msg = "Welcome to eCampus Express API v1";
    res.status(200).json(jsonRes);
}
export const ping = (req, res) => {
    console.log("haciendo Ping, respondiendo Pong");
    jsonRes.msg = "Pong!";
    res.status(200).json(jsonRes);
}






// Main Rutas
router.get("/", index);
router.get("/ping", ping);

// fase 3 (obtener parametros  de la URL):
// export const user = (req, res) => {
//     // Logic for getting a specific usuario by ID
//     const nombre = req.params.name;
//     //const id = parseInt(req.params.id);
//     jsonRes.msg = `Buscando usuario con nombre: ${nombre}`;
//     res.status(200).json(jsonRes);
// }   
// router.get("/user/:name", user);


export default router;