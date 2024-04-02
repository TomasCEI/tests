import bcrypt from 'bcrypt';
import { mongo_db } from "../db/mongoose.db.js";
import { User } from "../models/user.model.js";
import {generateAuthToken} from "../helpers/util.js";

mongo_db(); // Conexión a la base de datos



export const loginUser = async (req, res, next) => {

    try {
        const { user, pass } = req.body;

        // Verifica si el usuario existe
        const usuario = await User.findOne({ user });
        if (!usuario) {
            return res.status(401).json({ msg: "Credenciales inválidas", status:"error" });
        }
  
         // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
         const isValidPassword = await bcrypt.compare(pass, usuario.pass);
         if (!isValidPassword) {
             return res.status(401).json({ msg: "Clave inválida", status: "error" });
         }


        // Genera un token de autenticación (usando JWT, por ejemplo) y devuelve el usuario
        const token = generateAuthToken(usuario); // Esta función debe ser implementada

        res.status(200).json({ msg: "Login correcto", user:usuario, token:token, status:"ok" });
    } catch (error) {
        next(error);
    }

}

export const registerUser = async(req, res, next) => {

    try {
        const { user, pass } = req.body;

        if(user=="" || pass == ""){
            return res.status(400).send({msg:"Usuario y contraseña son requeridos", status:"error"});
        }

        // Verifica si el usuario ya existe
        const existingUser = await User.findOne({ user });
        if (existingUser) {
            return res.status(400).json({ msg: "El usuario ya existe", status:"error" });
        }
        // Crea un nuevo usuario
        const newUser = new User({ 
            user: user,
            pass: bcrypt.hashSync(pass, 10)
        });

        await newUser.save();

        delete newUser.pass;
        
        res.status(201).send({user:newUser, msg:"Usuario registrado correctamente", status:"ok"});
    } catch (error) {
        next(error);
    }

}


