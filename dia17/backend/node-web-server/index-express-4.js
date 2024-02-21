//const express = require("express");
import express from "express"; // ES modules

//const PORT= 3000;
import { PORT } from './config.js';
import { timeLog } from './middlewares/logger.js';

import * as xmlbuilder from 'xmlbuilder';

/**
 * MOSTRAR DISTINTOS TIPOS DE DATOS EN RESPUESTA
 * 
 * - Response en JSON
 * - Response en XML 
 * - Response en YML (no la utilizaremos)
 * - Response en HTML
 */

const app = express();
console.clear();

const datos = {
    id: 25,
    name: "María Soledad",
    email: "maria.soledad@mail.com"
}

//utilizar el middleWare timeLog 
app.use(timeLog);

app.get("/resp-json", (req, res)=> {
    // convertir mi objeto JS a un String JSON
    const jsonData = JSON.stringify(datos);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
});

app.get("/resp-xml", (req, res)=> {
    const xml = xmlbuilder.create('data')
    .ele('id', datos.id)
    .up()
    .ele('name', datos.name)
    .up()
    .ele('email', datos.email)
    .end({pretty: true});

    res.header('Content-Type', 'application/xml');
    res.send(xml);
});

app.get("/resp-html", (req, res) => {
    const html=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Datos en formato HTML</title>
      </head>
      <body>
        <div>
          <h1>Id: ${datos.id}</h1>
          <h2>Name: ${datos.name}</h2>
          <p>Email: ${datos.email}</p>
        </div>
      </body>
    </html>
  `;
    res.header("Content-Type", "text/html");
    res.send(html);
})

app.get("/usuarios/:idusuario/:nombre", (req, res)=> {

    console.log(req);
    // recibimos parametros de la URL
    const idUsuario=req.params.idusuario;
    const nombre=req.params.nombre;

    const jsonData = JSON.stringify(datos);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
})

app.get("/usuarios", (req, res)=> {
    const jsonData = JSON.stringify(datos);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
})




app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
} )