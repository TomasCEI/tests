// importar via CommonJS la librería Express
const express = require("express");

/** ------------------------------------------
 * 
 *  Ejemplos de  MiddleWares Anidados en Express
 * 
 * ------------------------------------------ */

const app = express();

console.clear();

// enviar información luego de cumplir el timeout!
app.get("/ejemplo/a", (req, res, next)=> {
 console.log("La respuesta será enviada luego del tiemout");

 setTimeout(()=> {
    console.log("Timeout de 2 seg");
    next();
 }, 2000);

}, function (req, res){
    console.log("llegaste a la 2nda funcion");
    res.send("llegaste a la 2nda funcion");
});


// ENVIAR INFORMACION AL USUARIO, MIENTRAS EL SERVIDOR SIGUE TRABAJANDO
app.get("/ejemplo/b", (req, res, next) => {
    console.log("La respuesta será enviada antes de finalizar la funcion de timeout");
    next();
    setTimeout(()=> {
        console.log("timeout 2 seg");
    }, 2000);
},  (req, res) => {
    res.send("llegaste a la 2nda función");
})


// CREAMOS UNA PROMESA ANTES DE ENVIAR DATOS
app.get("/ejemplo/c", (req, res, next) => {
    console.log("La respuesta será enviada una vez cumplida la promesa");
    
    new Promise((resolve, reject)=> {

        setTimeout(()=> {
            console.log("timeout 2 seg");
            resolve();
            //reject();
        }, 2000);

    }).then( ()=> {
        // usamos then() para llamar a next() cuando se resuelva la promesa
        next();
    } )
    
},  (req, res) => {
    res.send("Promesa CUMPLIDA!");
})





app.listen(8080, ()=> {
    console.log("Servidor corriendo en 8080");
})