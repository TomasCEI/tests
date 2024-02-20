
const express = require("express");

  /**
   *  Guía de express:
   * 
   * Express.js es un framework web para Node.js que te permite crear aplicaciones web del lado del servidor de forma rápida y sencilla. 
   * https://expressjs.com/es/guide/routing.html
   */
    const app = express();


    app.get("/", (req, res) => {
        res.send("Bienvenidos a expressJS!");
        console.log("Seccion de Home")
    });

    app.get("/about", (req, res) => {
        res.send(`<h3>Acerca de...</h3>`);
        console.log("Sección de About")
    });

    // recibo otros métodos:
    // Métodos mas utilizados: get, post, put, head, delete, options
    // Otros métodos: trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search y connect.
    app.post("/users", (req, res) => {
        res.send(`<h3>Sección de Usuarios POST!</h3>`);
        console.log("Sección de About")
    });

    // Recibo TODOS los métodos
    app.all('/metodos', function (req, res) {
        res.send(`<h3>Soporta todos los métodos (POST, GET, PUT...)</h3>`);
        console.log('Accediendo con cualquier método...');
      });

     // Enviar JSON
    // descargar extension JSON viewer 
    // https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh
    app.get('/jsonUser', function(req, res) {
      res.json({nombre: "Sofía", edad: 25});
    });


    // De una misma ruta obtenga diferentes métodos
    app.route('/libros')
    .get(function(req, res) {
      res.send('Obtener Libros');
    })
    .post(function(req, res) {
      res.send('Agregar un Libro');
    })
    .put(function(req, res) {
      res.send('Actualizar un Libro');
    });

   

  // Recibir cualquier otra ruta con comodin
  // CUIDADO CON EL ORDEN DE RUTAS!
  app.get('*', function(req, res){
    res.send(`<h3>404 ☹️</h3>`);
    console.log('Accediendo a ruta inexistente!');
  });

    // Si vamos a crear un API probablemente necesitemos enviar y recibir datos en formato JSON, no HTML
  //  app.use((req, res) => {
  //   res.status(404);
  //   res.type('json');
  //   res.json({ message: "Not found" });
  //    
  //   // o también
  //   //res.status(404).json({ message: "Not found" });
  // });


app.listen(8080, () => {
    console.log("Server is running on port 8080")
});
