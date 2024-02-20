const express = require("express");

const app = express();
console.clear();


/** ------------------------------------
 * 
 *  Ejemplos de Rutas con Express
 * 
 * ------------------------------------ */


app.get("/", (req, res) => {
    res.send("Bienvenidos a ExpressJS!");
    console.log("EL usuario entro al Home");
});

app.get("/perfil", (req, res) => {
    res.send("Bienvenidos a Perfil!");
    console.log("EL usuario entro al Perfil");
});

// Métodos mas comunes: GET, POST, PUT, DELETE, OPTIONS
// Métodos: trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search y connect.
app.post("/users", (req, res) => {
    res.send("Sección de usuarios con POST!!!");
    console.log("El usuario realizo un POST a users");
})
app.get("/users", (req, res) => {
    res.send("Sección de usuarios con GET!!!");
    console.log("El usuario realizo un POST a users");
})

// el metodo "ALL" habilita cualquier método anterior
app.all("/metodos", (req, res) => {
    res.send("<h3>Soporta todos los métodos (POST, PUT, DELETE, GET)</h3>");
    console.log("El usuario realizo un ALL a metodos");
})


app.route("/libros")
        .get( (req, res) => {
            res.send("Obtener Libros")
        })
        .post( (req, res) => {
            res.send("Agregar un nuevo Libro")
        })
        .put( (req, res) => {
            res.send("Actualizar un Libro X")
        })


/*
app.get("/jsonUser2", (req,res) => {
    res.json({nombre:"Sofia", id: 5, edad: 25});
})

app.get("/jsonUser", (req,res) => {
    res.status(200);
    res.type("json");
    res.json({nombre:"Sofia", id: 5, edad: 25});

    //res.status(404).json({message: "Not Found"});
})
*/





app.get("*", (req, res) => {
    res.send("<h3>404 Not found 🤪</h3>");
    console.log("Usuario accede a ruta inexistente!");
})









app.listen(8080,  () => {
    console.log("Servidor express corriendo en puerto 8080");
})
