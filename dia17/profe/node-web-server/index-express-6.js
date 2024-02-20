
/**
 * 
 *  Tipos de respuestas:
 * 
 *  - Response en JSON
 *  - Response en XML (npm i xmlbuilder)
 *  - Response en HTML
 */

  //const express = require("express");
  import express from "express";
  import {timeLog} from "./middlewares/logger.js";
  // import { PORT } from "./config.js";
  
  import * as xmlbuilder from 'xmlbuilder';
  
  const app = express();

  // agrego puerto desde una variable
  const PORT = 3000;

  app.use(timeLog);

  const data = {
    id: 1,
    name: 'María Soledad',
    email: 'maria.soledad@gmail.com'
  };

  app.get('/resp-json', function(req, res){
    //const data = { message: 'Hello, world from JSON!' };
    const jsonData = JSON.stringify(data);

    res.setHeader('Content-Type', 'application/json');
    res.end(jsonData);
  });

  app.get('/resp-xml', function(req, res){
 
  
    const xml = xmlbuilder.create('data')
      .ele('id', data.id)
      .up()
      .ele('name', data.name)
      .up()
      .ele('email', data.email)
      .end({ pretty: true });
  
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
  
  app.get('/resp-html', function(req, res){
    //const data = { message: 'Hello, world from JSON!' };
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Data</title>
        </head>
        <body>
          <div>
            <h1>Id: ${data.id}</h1>
            <h2>Name: ${data.name}</h2>
            <p>Email: ${data.email}</p>
          </div>
        </body>
      </html>
    `;
    res.header('Content-Type', 'text/html');
    res.send(html);
  });
  
  
  /* Ignorar YAML por ahora
  import * as yaml from 'js-yaml';
  app.get('/data', (req, res) => {
    const yamlData = yaml.dump(data);
    res.header('Content-Type', 'text/yaml');
    res.send(yamlData);
  });
  */


  // Fase 2: Routes
  // crear archivo routes/main.routes.js

  import mainRoutes from "./routes/main.routes.js";
  app.use("/API/v1", mainRoutes);


  // Recibir cualquier otra ruta con comodín
  app.get('*', function(req, res){
    res.send(`<h3>404 ☹️</h3>`);
    console.log('Accediendo a ruta inexistente!');
  });

 



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
