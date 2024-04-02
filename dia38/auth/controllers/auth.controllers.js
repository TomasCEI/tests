import {generarTokenJWT} from '../helpers/utils.js';

export const loginUser = async (req, res, next) => {
    try {
        const { user, pass} = req.body;

        // 1. Buscar en la DB mi usuario
        const usuario={
            _id: "lsjdfiowroiwer234",
            nombre: "Marisa",
            rol: "ADMIN",
            pass: "sdfljoiw$%3rsfdsdl"
        }
        if(!usuario) {
            return res.status(401).json({msg:"Usuario no existe",  status:"error"});
        }



        // 2. Comparar la contraseña proporcionada con la de la DB
        // const isValid= await bcrypt.compare(pass, usuario.pass);
        // if(!isValid){
        //     return res.status(401).json({msg:"Clave incorrecta", status:"error"});
        // }

        // 3. Generar la llave "TOKEN"
        const token=generarTokenJWT(usuario);
        console.log("token es:", token);

        // 4. eliminar datos sensibles antes de enviar al cliente.
        delete usuario.pass;

        // 5. Enviar respuesta
        res.status(200).json({msg:"Login Correcto", jwtToken:token, user: usuario, status:"ok" })


    } catch (error) {
        console.log("Error en consulta:", error);
       // next(error);
    }
}

export const registerUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}