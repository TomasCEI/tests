const http = require("http");


// Fase 1: Convertirlo a una respuesta HTML
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    //let isRoute=false;

    console.log(req.url);


    res.write("<html>");
    if(req.url === "/") {
        //isRoute=true;
        res.write("<html>");
        res.write("<head><title>Node Web Server</title></head>");
        res.write("<body><h1>Hola a todos!</h1></body>");
        res.write("</html>");
        res.end();
    }

    if(req.url === "/about") {
        //isRoute=true;
        res.write("<html>");
        res.write("<head><title>About</title></head>");
        res.write("<body><h1>About</h1></body>");
        res.write("</html>");
        res.end();
    }

    
    // fase 2: puedo agregar un else para manejar el error 404
    // if(!isRoute){
    //     res.write("<html>");
    //     res.write("<head><title>404</title></head>");
    //     res.write("<body><h1>404</h1></body>");
    //     res.write("</html>");
    //     res.end();
    // }

    
    res.write("</html>");
    res.end();
});

server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});