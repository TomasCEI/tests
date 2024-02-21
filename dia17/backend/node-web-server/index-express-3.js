const express = require("express");

/** ------------------------------------------
 * 
 *  Ejemplos de  MiddleWares en Express
 * 
 * ------------------------------------------ */

const app = express();
const PORT = 3000;
console.clear();

// Que son los MiddleWare?
// - Son funciones que se ejecutan en el  medio de un proceso, en este caso en el medio de la petición y la Respuesta
// - Se ejecutan en el orden que se declaran.
// - Se pueden usar para validar, modificar o procesar la petición y la respuesta.

function timeLog(req, res, next){
    console.log(req);
    console.log("Time:", Date.now());
    next();
}
app.use( timeLog );


// ejemplo 2 (uso de multiples MiddleWares)
const middleWare1 = function (req, res, next) {
    console.log("Registro Guardado 1");
    next();
}
const middleWare2 = function (req, res, next) {
    console.log("Registro Guardado 2");
    next();
}
app.use (middleWare2, middleWare1 );

// ejemplo 3 (obtener información del Request)
app.use("/admin", (req, res, next) => {
    //console.log(req);
    console.log("Request URL:", req.originalUrl);
    next();
}, (req, res , next) => {
    console.log("Request Type:", req.method);
    next();
});


app.get("/", (req, res)=> {
    res.send("TERMINE");
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}` );
})