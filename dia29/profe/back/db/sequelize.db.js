// improtar metodos de Sequelize
import { Sequelize, DataTypes } from "sequelize";


// Crear una instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
});


// Define models (tablas)
// const Autor = sequelize.define('autor', {
//     nombre: DataTypes.STRING
//   })
  
//   // Modelo de Autor (extensión de Clase)
//   class Autor extends Model {}
//   Autor.init({
//     nombre: DataTypes.STRING
//   }, { sequelize, modelName: 'autor' });


// Definir Modelos (tablas)
export const Libros = sequelize.define('libros', {
    titulo: DataTypes.STRING, // DATE, INTEGER, NUMBER, BOOLEAN....
    autor: DataTypes.STRING,
    categoria: DataTypes.STRING
})

// eliminar todas las tablas entre pruebas
// await sequelize.destroyAll();

sequelize.sync({ alter: true }); // actualiza las columnas de las tablas si hay diferencias
