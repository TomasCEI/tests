import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js";
import {logger} from './middlewares/logger.js';
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from './routes/index.routes.js';
import cors from 'cors'; // uso de cors mediante libreria externa

const app = express();
console.clear();


// También puedes configurar CORS con métodos específicos y encabezados personalizados
// con origen para 2 dominios

// Uso de MiddleWares
app.use(cors());
app.use(setHeaders);
app.use(express.json()); // procesa el json body para leer con req.body
app.use(logger);

// Rutas
app.get("/", (req, res)=> {
    res.setHeader("Content-Type", "text/html");

    const landingHTML = `
        <h1>Bienvenidos a nuestra API de Libros</h1>
    `;
    res.send(landingHTML);
})

// app.get("/API/v1/libros", (req, res)=>{
//     console.log("librosss");
//     res.send("libros");
// } )

app.use("/API/v1/", indexRoutes);

// Alta de Servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})