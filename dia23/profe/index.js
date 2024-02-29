import express from "express"; // ES modules
import { PORT, domain } from './config/config.js';
import cors from 'cors'; // uso de CORS con librería externa

const app = express();
console.clear();
const fulldomain=`${domain}:${PORT}`;

import { Sequelize, DataTypes } from 'sequelize';

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
  });
  
// Define models (tablas)
const User = sequelize.define('Usuario', {
    // email: {
    //     type: DataTypes.STRING, 
    //     allowNull: false
    // },
    // id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV1,
    //     primaryKey: true
    // },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // cumple: DataTypes.DATE,
    // edad: DataTypes.INTEGER,
    // precio: DataTypes.NUMBER,
    // activo: DataTypes.BOOLEAN
})

// Sync models with database (crear todas las tablas)
sequelize.sync();

// `sequelize.define` also returns the model
// console.log("models es: ", sequelize.models); // true



// --------------------------
// middleWares
// --------------------------
app.use(cors());
app.use(express.json());
// necesario para leer el req.body si se envían datos de formulario del tipo x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
/* ej request react:
 const response = await fetch('http://localhost:3000/login', { method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password })
      });
*/

// const crearUsuario = async (req, res) => {
//     const jane = await User.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20),
//       });
      
//       const users = await User.findAll();
//       return users;
// }

app.get("/", async (req, res)=> {
    res.setHeader("Content-Type", "text/html");

    //const users =await crearUsuario();

    const homeHTML=`<h1>Backend SQLITE Usuarios!</h1>
        <hr />
        ${users}
        `;
    res.send(homeHTML);
});


// CRUD routes for User model
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });
  
  app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  });
  
  app.post('/users', async (req, res) => {

    
      //     const jane = await User.create({
      //         username: 'janedoe',
      //         birthday: new Date(1980, 6, 20),
      //       });


    const user = await User.create(req.body);



    res.json(user);
  });
  
  app.put('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${fulldomain}`)
} )