//const express = require("express");
import express from "express"; // ES modules

//const PORT= 3000;
import {PORT} from './config.js';
import {timeLog} from './middlewares/logger.js';


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

app.use(timeLog);

app.get("/resp-json", (req, res)=> {
    // convertir mi objeto JS a un String JSON
    const jsonData = JSON.stringify(datos);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
});



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
} )