import mysqlConn from '../db/mysql.db.js';
import misDatos from '../db/seed.js';
import bcrypt from 'bcrypt';
const Users = misDatos.usuarios;

// formato de Respuesta
const responseAPI = {
    data: [],
    msg:"",
    status: "ok"
}


export const getAllUsers = async (req, res) => {
    responseAPI.msg="Obtener all usuarios";
    res.status(200).send(responseAPI);
}
export const getUserById = async (req, res) => {
    responseAPI.msg="Obtener usuario by id";
    res.status(200).send(responseAPI);
}
export const updateUser = async (req, res) => {
    responseAPI.msg="update usuario";
    res.status(200).send(responseAPI);
}
export const deleteUser = async (req, res) => {
    responseAPI.msg="delete usuario";
    res.status(200).send(responseAPI);
}
export const seedUsers = async (req, res) => {
    
    // let A_values=[];
    // Users.map((user) => {
    //     const isProfesor= user.isProfesor ? 1 : 0;

    //     A_values.push(`('${user.id}', '${user.user}', '${user.nombre}', '${user.password}', '${isProfesor}') `); 
    // });
    // const stringValues= A_values.join(', ');

    // const sqlQuery= `INSERT INTO usuarios 
    //     (id, user, nombre, password, isProfesor) 
    //     VALUES  ${stringValues};`;
    // await mysqlConn.query(sqlQuery);


    // const consulta=`SELECT * FROM usuarios WHERE deleted_at IS NULL`;
    // const [results, fields ] = await mysqlConn.query(consulta);

    let values = [];
    let placeholders = [];
    let params = [];
    
    Users.forEach(user => {
        const isProfesor = user.isProfesor ? 1 : 0;
        //const cryptedPass = user.password;
        const cryptedPass = bcrypt.hashSync(user.password, 10);
        const created_at = new Date();
    
        // Push values and placeholders for each user
        values.push(user.id, user.user, user.nombre, cryptedPass, isProfesor, created_at);
        placeholders.push('(?, ?, ?, ?, ?, ?)');
    });
    
    // Join placeholders to construct the VALUES clause of the SQL query
    const placeholdersString = placeholders.join(', ');
    
    // Duplicate params array for each row of data
    params = [...params, ...values];
    console.log("params es: ", params);
    
    const sqlQuery = `INSERT INTO usuarios 
                      (id, user, nombre, password, isProfesor, created_at) 
                      VALUES ${placeholdersString}`;
    
    // Assuming mysqlConn is your database connection object
    await mysqlConn.query(sqlQuery, params);

    

    const consulta=`SELECT * FROM usuarios WHERE deleted_at IS NULL`;
    const [results, fields ] = await mysqlConn.query(consulta);


    responseAPI.data=results;
    responseAPI.msg="Lista de usuarios creada!";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}



