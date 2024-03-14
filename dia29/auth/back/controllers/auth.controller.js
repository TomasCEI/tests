import mysqlConn from '../db/mysql.db.js';
import bcrypt from 'bcrypt';

// formato de Respuesta
const responseAPI = {
    data: [],
    msg:"",
    status: "ok"
}


export const loginUser = async (req, res) => {

    //const consulta=`SELECT * FROM usuarios WHERE user='${req.body.user}' AND password='${req.body.password}' AND deleted_at IS NULL`;
    
    // obtenemos los datos del request
    const { user, password } = req.body;

    // buscamos un usuario con ese user y password
    const consulta= "SELECT * FROM `usuarios` WHERE `user`= ? AND `password`= ? AND `deleted_at` IS NULL";
    const params = [user, password];
    const [results, fields ] = await mysqlConn.query(consulta, params);

    // si no existe el usuario
    if(results.length==0){
        responseAPI.msg="Usuario o clave incorrecto";
        responseAPI.status="error";
        res.status(400).send(responseAPI);
        return;
    }


    // devolvemos los datos del usuario
    responseAPI.data=results; // devuelve un array [{}]
    responseAPI.debug_query=consulta;
    responseAPI.debug_params=params;
    responseAPI.msg="login de usuario";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const loginUserCrypted = async (req, res) => {

    // obtenemos los datos del request
    const { user, password } = req.body;

    // buscamos el usuario con ese user
    const consulta= "SELECT * FROM `usuarios` WHERE `user`= ? AND `deleted_at` IS NULL";
    const params = [user, password];
    const [results, fields ] = await mysqlConn.query(consulta, user);

    // si no existe el usuario
    if(results.length==0){
        responseAPI.msg="Usuario no existe";
        responseAPI.status="error";
        res.status(400).send(responseAPI);
        return;
    }
    
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));
    // console.log(bcrypt.hashSync("123456", 10));

    // Comprobar claves
    const db_user = results[0];

    console.log(db_user.password, password);
    const isPasswordValid = bcrypt.compareSync(password, db_user.password);
    
    if(!isPasswordValid){
        responseAPI.msg="Clave incorrecta";
        responseAPI.status="error";
        res.status(400).send(responseAPI);
        return;
    }
    
    responseAPI.data=results;
    responseAPI.debug_query=consulta;
    responseAPI.debug_params=params;
    responseAPI.msg="login de usuario";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const registerUser = async(req, res) => {

    // ejemplo MySQL
    const {user, password } = req.body;

    if(user=="" || password == ""){
        responseAPI.msg="Error al registrar usuario";
        responseAPI.status="error";
        res.status(400).send(responseAPI);
        return;
    }

    const now = new Date();
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const sqlQuery= `INSERT INTO usuarios (user, password, created_at) 
                        VALUES ('${user}', '${encryptedPassword}', '${now}');`;
    const [result, fields ] = await mysqlConn.query(sqlQuery);

    const lastInsertId = result.insertId; // ultimo id insertado

    const [newUser, newUserFields] = await mysqlConn.query('SELECT * FROM usuarios WHERE id = ?', [lastInsertId] );

    delete newUser[0].password; // no devolvemos la clave encritada

    // Nuestra respuesta para MySQL o Sequelize
    responseAPI.data=newUser;
    responseAPI.msg="Usuario registrado correctamente!";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}


