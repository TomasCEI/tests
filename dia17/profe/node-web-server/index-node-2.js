const http = require("http");

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

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    // const { method, url } = request;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    let isRoute=false;

    res.write("<html>");
    if(req.url === "/") {
        isRoute=true;
        res.write("<head><title>Node Web Server</title></head>");
        res.write("<body><h1>Hola a todos!</h1></body>");
    }

    if(req.url === "/about") {
        isRoute=true;
        res.write("<head><title>About</title></head>");
        res.write("<body><h1>About</h1></body>");
    }

    if(!isRoute){
        res.write("<head><title>404</title></head>");
        res.write("<body><h1>404</h1></body>");
    }

    res.write("</html>");
    res.end();
});

server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});