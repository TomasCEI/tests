import misLibros from './db/datos.js'
import express from "express"; // ES modules

import { PORT, domain } from './config/config.js';
import { timeLog } from './middlewares/logger.js';
import {contadorItems} from './middlewares/contadorItems.js';
import {setHeaders} from './middlewares/setHeaders.js';

const app = express();
console.clear();

const listaLibros=misLibros.libros;
const responseLibros={
    data: listaLibros,
    msg: ""
};

const fulldomain=`${domain}:${PORT}`;

// middleWares

app.use(timeLog);

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

    const homeHTML=`<h1>API de Libros</h1>
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


// luego del "/" que utiliza headers text/html, de todas formas, lo iba a reescribir, asique no tendríamos problema
app.use(setHeaders);

const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase();
}

app.get("/libros", (req, res)=> {
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
});

app.get("/libros/:id", (req, res)=> {
    const idLibro=req.params.id;

    // reviso si id es un número
    if (isNaN(idLibro)) {
        responseLibros.msg="El id debe ser un número";
        delete responseLibros.data;
        res.status(400).send(responseLibros);
        return;
    }

    responseLibros.data=listaLibros.find((libro)=> libro.id==idLibro);
    responseLibros.msg="Libro con id: "+idLibro;
    responseLibros.cant=listaLibros.length;
    console.log("Libros por id");
    res.send(responseLibros);
 });


app.get("/libros/author/:author",  (req, res) => {
    const author=helperCleanString(req.params.author);
    //responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor)==author);
    // string.includes(substring)  // check if string contains a substring
    responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor).includes(author));
    responseLibros.msg="Buscando Autores con string: "+author;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por autor", author);
    res.send(responseLibros);
})

app.get("/libros/categoria/:category",  (req, res) => {
    const cate=helperCleanString(req.params.category);
    responseLibros.data = listaLibros.filter((libro)=> helperCleanString(libro.categoria).includes(cate));
    responseLibros.msg="Buscando libros con categoría: "+cate;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por categoría", cate);
    res.send(responseLibros);
})

app.get("/authors", (req, res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor);

    // Distintas maneras de eliminar duplicados de un array

    // usando forEach
    // const uniqueAuthors=[];
    // responseLibros.data.forEach((autor)=> {
    //     if (!uniqueAuthors.includes(autor)) {
    //         uniqueAuthors.push(autor);
    //     }
    // });
    // responseLibros.data=uniqueAuthors;

    // usando new Set()  
    // crea una Set, y luego lo convierte en array con el spread Operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // responseLibros.data = [...new Set(responseLibros.data)];
    
    // usando Método Filter
    // el indexOf(value) devuelve el PRIMER índice en el que se encuentra un elemento dado en el array, o -1 si no se encuentra
    // responseLibros.data = responseLibros.data.filter((autor, index, arr)=> arr.indexOf(autor)===index);

    // usando Método Reduce
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // responseLibros.data = responseLibros.data.reduce((acc, autor)=> {
    //     if (!acc.includes(autor)) {
    //         acc.push(autor);
    //     }
    //     return acc;
    // }, []);

    responseLibros.msg="Lista de Autores";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})

app.get("/categories", (req, res)=> {
    responseLibros.data = listaLibros.map((libro)=> libro.categoria);

    responseLibros.data = responseLibros.data.filter((autor, index, arr)=> arr.indexOf(autor)===index);

    responseLibros.msg="Lista de Categorías";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})

// nunca se ejecuta, porque se envía antes...
app.use(contadorItems);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${domain}:${PORT}`)
} )