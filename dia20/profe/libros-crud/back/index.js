import express from "express"; // ES modules


import misLibros from './db/datos.js'
import indexRoutes from "./routes/index.routes.js";
import { PORT, domain } from './config/config.js';
import { timeLog } from './middlewares/logger.js';
import {setHeaders} from './middlewares/setHeaders.js';

import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'; // uso de CORS con librería externa
import verifyCors from "./middlewares/verifyCors.js"; // configuración Manual

const app = express();
console.clear();



/*
   --------- INICIO CORS ---------
   habilitar CORS (Cross-Origin Resource Sharing) en Express.js te permite controlar qué recursos pueden ser solicitados desde diferentes orígenes.
 */

// Habilitar CORS para todas las solicitudes
app.use(cors());
// También puedes configurar CORS con métodos específicos y encabezados personalizados
// con origen para 2 dominios
// app.use(cors({
//   origin: ['http://example.com', 'http://another.com'],
//   origin: 'http://miotrodominio.com',
//   origin: true, // permitir a todos los dominios
//   methods: ['GET', 'POST', 'PUT'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));


// CORS con MiddleWare
app.use(verifyCors);

/* --------- FIN CORS --------- */


const listaLibros=misLibros.libros;
const fulldomain=`${domain}:${PORT}`;

// --------------------------
// middleWares
// --------------------------
app.use(timeLog);
// luego del "/" que utiliza headers text/html, de todas formas, lo iba a reescribir, asique no tendríamos problema
app.use(setHeaders);
// Express lo utiliza para recibir el "body" como JSON
// necesario para leer el req.body
app.use(express.json());




app.use("/API/v1/", indexRoutes);

app.get("/", (req, res)=> {
    res.setHeader("Content-Type", "text/html");

    // order by title method 1
    // listaLibros.sort((a, b)=> {
    //     if (a.titulo > b.titulo) { return 1; }
    //     if (a.titulo < b.titulo) { return -1; }
    //     return 0;
    // });

    // order by title method 2
    //listaLibros.sort((a, b)=> a.titulo.localeCompare(b.titulo));

    const ENV = process.env.NODE_ENV;
    const NOMBRE= process.env.ENV_NAME;
    const homeHTML=`<h1>API de Libros</h1>
        env: ${ENV} - ${NOMBRE}

        <ul>
            <li>Todos los Libros:           <a href="${fulldomain}/libros">${fulldomain}/libros</a></li>
            <li>Libro con id 3:             <a href="${fulldomain}/libros/3">${fulldomain}/libros/3</a></li>
            <li>Libros de George Orwell:    <a href="${fulldomain}/libros/author/George%20Orwell">${fulldomain}/libros/author/George Orwell</a></li>
            <li>Libros de Realismo:         <a href="${fulldomain}/libros/categoria/Realismo">${fulldomain}/libros/categoria/Realismo</a></li>
            <li>Lista de Autores:           <a href="${fulldomain}/authors">${fulldomain}/authors</a></li>
            <li>Lista de Categorías:        <a href="${fulldomain}/categories">${fulldomain}/categories</a></li>
        </ul>
        <hr />

        ${ 
            listaLibros.map((libro)=> {
                return `<div>
                        <h2>${libro.id}: ${libro.titulo} (${libro.autor})</h2>
                        <a href="${fulldomain}/libros/${libro.id}">Ver Detalles</a>
                    </div>`
                }).join("")
        }
        `;
    res.send(homeHTML);
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${fulldomain}`)
} )