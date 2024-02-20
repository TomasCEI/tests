const http = require("http");
const cowsay = require("cowsay");

const server = http.createServer( (req, res)=> {
  //res.end("Hola desde mi servidor Web");
  //res.end(cowsay.say({text:"Hola mundo"}));

  res.write("<html>");
  res.write("<head><title>Mi servidor Node</title></head>");
  res.write("<body><h1>Hola desde mi server</h1></body>")
  res.write("</html>");
  res.end();
});

server.listen(8080, ()=> {
    console.log("Server corriendo en puerto 8080");
})

