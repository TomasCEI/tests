

# -----------------------------------------------------------------------------

# 1. Bearer Token!

### Enviar en fetch:
```js
const apiKey = 'YOUR_API_KEY';
fetch('https://api.rawg.io/api/platforms', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
.then(response => response.json())
.then(data => {
  // Handle the response data
})
.catch(error => {
  // Handle any errors
});
```

### Recibir con express:

```js
app.get('/api/example', (req, res) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    // Split the authorization header to extract the token
    const [bearer, token] = authorizationHeader.split(' ');
    if (bearer === 'Bearer' && token) {
      // token variable now contains your API key
      console.log('API Key:', token);
      // Use the API key as needed
    }
  }
  // Your code logic here
  res.send('Response from the server');
});
```


# -----------------------------------------------------------------------------


# 2. MySQL (mariaDB)

url: https://sqlfiddle.com/mariadb/online-compiler?id=f53c012e-8d7a-4baa-b3c4-7eed0f7e5577

-- INIT database
CREATE TABLE Product (
  ProductID INT AUTO_INCREMENT KEY,
  Name VARCHAR(100),
  Description VARCHAR(255),
  userID INT
);
CREATE TABLE Users (
  id INT AUTO_INCREMENT KEY,
  Name VARCHAR(100)
);

INSERT INTO Product(Name, Description, userID) VALUES ('Entity Framework Extensions', 'Use <a href="https://entityframework-extensions.net/" target="_blank">Entity Framework Extensions</a> to extend your DbContext with high-performance bulk operations.',1);
INSERT INTO Product(Name, Description, userID) VALUES ('Dapper Plus', 'Use <a href="https://dapper-plus.net/" target="_blank">Dapper Plus</a> to extend your IDbConnection with high-performance bulk operations.',1);
INSERT INTO Product(Name, Description, userID) VALUES ('C# Eval Expression', 'Use <a href="https://eval-expression.net/" target="_blank">C# Eval Expression</a> to compile and execute C# code at runtime.',2);

INSERT INTO Users(Name) VALUES ("Tom");
INSERT INTO Users(Name) VALUES ("Juan");

-- QUERY database
SELECT Product.ProductID, Product.Name as Producto, Users.Name FROM Product INNER JOIN Users ON (Product.userID = Users.id);
SELECT * FROM Users;
SELECT * FROM Product;
SELECT * FROM Product WHERE userID = 1;
SELECT * FROM Product JOIN Users ON (Product.userID = Users.id) WHERE Users.id = 1;


# -----------------------------------------------------------------------------

# 3. Sequelize Raw Query

Ejemplo sqlLite/sequelizer RAW QUERY:
### Example raw SQL query

```js
const rawQuery = `
  SELECT *
  FROM Products
  WHERE price > 100
`;
```

### Execute the raw SQL query

```js
sequelize.query(rawQuery, { type: Sequelize.QueryTypes.SELECT })
  .then(results => {
    // Handle the query results
    console.log(results);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error executing raw SQL query:', error); 
  });
```

# -----------------------------------------------------------------------------

# 4. Sequelizer Consulta libros con autores


## ---- Back End ----

```js
// Definición de los modelos en Sequelize
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
const Autor = sequelize.define('Autor', {
  nombre: DataTypes.STRING
})

// Modelo de Autor (extensión de Clase)
// class Autor extends Model {}
// Autor.init({
//   nombre: DataTypes.STRING
// }, { sequelize, modelName: 'autor' });

// Modelo de Libro
class Libro extends Model {}
Libro.init({
  titulo: DataTypes.STRING
}, { sequelize, modelName: 'libro' });

// Modelo de Categoría
class Categoria extends Model {}
Categoria.init({
  nombre: DataTypes.STRING
}, { sequelize, modelName: 'categoria' });

// Definición de las relaciones
Autor.hasMany(Libro); // Un autor puede tener muchos libros
Libro.belongsTo(Autor); // Un libro pertenece a un autor

Libro.belongsToMany(Categoria, { through: 'LibroCategoria' }); // Un libro puede tener muchas categorías
Categoria.belongsToMany(Libro, { through: 'LibroCategoria' }); // Una categoría puede tener muchos libros


// Sync models with database (crear todas las tablas)
sequelize.sync();

```

### ---- Front End ----


```js
// Consulta de uno a muchos (libros con su autor)
Libro.findAll({
  include: [Autor]
}).then(libros => {
  console.log(libros);
});

// Consulta de muchos a muchos (categorías con libros)
Categoria.findAll({
  include: [Libro]
}).then(categorias => {
  console.log(categorias);
});

// Consulta para obtener una lista de libros con sus autores y categorías
Libro.findAll({
  include: [
    { model: Autor }, // Incluye los datos del autor asociado a cada libro
    { model: Categoria } // Incluye los datos de las categorías asociadas a cada libro
  ]
}).then(libros => {
  libros.forEach(libro => {
    console.log(`Libro: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor.nombre}`);
    console.log('Categorías:');
    libro.categorias.forEach(categoria => {
      console.log(`- ${categoria.nombre}`);
    });
    console.log('---');
  });
});

```