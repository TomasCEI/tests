const http = require("http");
const cowsay = require("cowsay");

// console log de consola!
// console.log(
//     cowsay.say({
//        text: "Mi primer programa con Node.js",
//        e: "oO",
//        T: "U ",
//     })
//  );


const server = http.createServer((req, res) => {

    // fase 1:
    res.end("Hola desde mi web!");
    
    // fase 2:
    res.end(cowsay.say({ text: "Hola Mundo!" }));

    // fase 3:
    //  res.write("<html>");
    //  res.write("<head><title>Node Web Server</title></head>");
    //  res.write("<body><h1>Hola a todos!</h1></body>");
    //  res.write("</html>");
    //  res.end();
});

server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});