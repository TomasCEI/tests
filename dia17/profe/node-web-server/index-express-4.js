
const express = require("express");

  /**
   *  Guía de express:
   * 
   * Express.js es un framework web para Node.js que te permite crear aplicaciones web del lado del servidor de forma rápida y sencilla. 
   * https://expressjs.com/es/guide/routing.html
   */
  const app = express();

  // agrego puerto desde una variable
  const PORT = 3000;



  // Que son los middleWares? 
  // - Son funciones que se ejecutan en el medio de un proceso, en este caso, en el medio de la petición y la respuesta.
  // - Se ejecutan en el orden que se declaran.
  // - Se pueden usar para validar, modificar o procesar la petición o la respuesta.
  
  // Creación de MiddleWares!
  app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  

  // Ejemplo 2 (uso de más de un middleWare)
  var middleWareLogger = function (req, res, next) {
    console.log('Registro Guardado');
    next();
  };
  var middleWareLogger2 = (req, res, next) => {
    console.log('Registro Guardado2');
    next();
  };
  app.use(middleWareLogger, middleWareLogger2);


  // Ejemplo 3 (obtención de datos del request)
  app.use('/admin', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });
  
  

  // Recibir cualquier otra ruta con comodín
  app.get('*', function(req, res){
    res.send(`<h3>404 ☹️</h3>`);
    console.log('Accediendo a ruta inexistente!');
  });

  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
