
const express = require("express");

/**
 *  Guía de express:
 * 
 * https://expressjs.com/es/guide/routing.html
 */
const app = express();

console.clear();


app.get("/", (req, res) => {
    res.send("Bienvenidos a expressJS!");
    console.log("Seccion de Home")
});

app.get("/about", (req, res) => {
    res.send(`<h3>Acerca de...</h3>`);
    console.log("Sección de About")
});


app.listen(8080, () => {
    console.log("Server is running on port 8080")
});
