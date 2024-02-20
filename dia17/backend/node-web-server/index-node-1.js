const http = require("http");
const cowsay = require("cowsay");

/**
 * URL de Node: https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction
 * 
 * Final: 
 * 
 * Desventajas respecto a express:
 *
 *      - no provee sistema de rutas
 *      - no provee Middlewares
 *      - no provee Controladores
 *      - Mayor tiempo de desarrollo
 */

const server = http.createServer( (req, res)=> {
  res.statusCode=200;
  // le indico al cliente que voy a responder con HTML
  res.setHeader("Contenty-Type", "text/html");

  let isRoute=false;

  console.log(req.url);

  res.write("<html>");

  if(req.url == "/"){
    isRoute=true;
    res.write("<head><title>Mi servidor Node</title></head>");
    res.write("<body><h1>Hola desde mi server</h1></body>");
  }

  if(req.url == "/perfil"){
    isRoute=true;
    res.write("<head><title>Pagina Perfil</title></head>");
    res.write("<body><h1>Hola desde Perfil</h1></body>");
  }

  if(!isRoute){
    res.write("<head><title>No encontrada</title></head>");
    res.write("<body><h1>Error 404!!!</h1></body>")
  }

  res.write("</html>");
  res.end();
 
});

server.listen(8080, ()=> {
    console.log("Server corriendo en puerto 8080");
})

