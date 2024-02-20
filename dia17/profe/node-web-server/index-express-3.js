
const express = require("express");

  /**
   *  Guía de express:
   * 
   * Express.js es un framework web para Node.js que te permite crear aplicaciones web del lado del servidor de forma rápida y sencilla. 
   * https://expressjs.com/es/guide/routing.html
   */
  const app = express();


// Puedo usar rutas mas complejas
// Puedo ejecutar mas de una función en cadena
  app.get('/ejemplo/a', function (req, res, next) {
    console.log('La respuesta será enviada luego del timeout');
    setTimeout(() => {
        console.log("timeout de 2");
        next();
    }, 2000);
  }, function (req, res) {
    res.send("Hello from A!");
  });

  // ENVIAMOS RESPUESTAS Y EL SERVIDOR SE QUEDA PROCESANDO INFO
  app.get("/ejemplo/b", function (req, res, next) { 
    console.log("La respuesta será enviada antes de finalizar la función"); 
    // Llamamos a next() antes del setTimeout() 
    next(); 
    setTimeout(() => { 
      console.log("timeout de 2"); 
    }, 2000); 
  }, function (req, res) { 
    res.send("Hello from B!"); 
  });

  // CREAMOS UNA PROMESA ANTES DE ENVIAR DATOS
  app.get("/ejemplo/c", function (req, res, next) { 
    console.log("La respuesta será enviada una vez cumplida la promesa"); 
    // Creamos una promesa que se resuelve después de 2 segundos 
    new Promise((resolve, reject) => { 
      setTimeout(() => { 
        console.log("timeout de 2"); 
        resolve(); 
      }, 2000); 
    }) 
    .then(() => { 
        // Usamos then() para llamar a next() cuando se resuelve la promesa 
        next(); 
    }); 
  }, function (req, res) { 
    res.send("Hello from C!"); 
  });




app.listen(8080, () => {
    console.log("Server is running on port 8080")
});
