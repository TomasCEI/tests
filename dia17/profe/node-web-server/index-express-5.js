
/**
 * 
 *  convertimos nuestra APP de express para usar ES Modules
 * 
 *  - cambiamos el type de package.json a "module"
 *  - utilizamos imports y exports como estamos acostumbrados
 */

  //const express = require("express");
  import express from "express";

  
  const app = express();

  // agrego puerto desde una variable
  // importar el puerto desde un archivo "config.js"
  const PORT = 3000;


  // Quitarlo de aquí y ponerlo en middlewares/logger.js
  // import {timeLog} from "./middlewares/logger.js";
  const timeLog = (req, res, next) => {
    console.log('Registro Guardado');
    console.log('Time: ', Date.now());
    next();
  }
  app.use(timeLog);

 
  
  

  // Recibir cualquier otra ruta con comodín
  app.get('*', function(req, res){
    res.send(`<h3>404 ☹️</h3>`);
    console.log('Accediendo a ruta inexistente!');
  });

 



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
