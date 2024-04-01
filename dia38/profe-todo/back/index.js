import express from "express";
import {PORT, fullDomain} from "./config/config.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import cors from 'cors'; // uso de cors mediante libreria externa
import multer from "multer";

const app = express();
console.clear();


// Servir archivos estáticos (antes de middleWare setHeaders)
app.use('/html-form', express.static('public')); // formulario html de pruebas para uploads
app.use('/files', express.static('uploads'));

// Uso de MiddleWares
app.use(cors()); // Cross-Origin Resource Sharing
app.use(setHeaders);
app.use(express.json()); // procesa el json body para leer con req.body()
app.use(express.urlencoded({extended:false})); // leer datos de urlEncoded de req.body

// Rutas
app.get("/", (req, res)=> {
    res.setHeader("Content-Type", "text/html");
    const landingHTML = `
        <h1>Bienvenidos a nuestra ToDo List</h1>
    `;
    res.send(landingHTML);
})


// Uso de Multer para upload de archivos
// https://expressjs.com/en/resources/middleware/multer.html

// Opción 1: Datos mínimos, el archivo destino tendrá unun nombre aleatorio sin extensión
// const upload = multer({ dest: 'uploads/' });

// Opción 2: Datos completos, el archivo destino conservará el nombre original o podremos manipularlo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // utilizando storage para renombrar el archivo
        cb(null, file.originalname);
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //   cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage })

// Upload desde un formulario HTML
app.post("/upload", upload.single('profile'), (req, res) => {
    try {
        console.log("file es ", req.file); // req.file is the `profile` file
        console.log("body es:", req.body); // req.body will hold the text fields, if there were any

        res.json({
            msg: "Archivo subido correctamente", 
            file: req.file, 
            body: req.body,
            peso: `${Math.round(req.file.size/1024)} Kbytes`,
            url: `${fullDomain}/files/${req.file.filename}`
        });

    } catch (err) {
        next(err)
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({"error":'Something broke!', msg: err, code: 500})
})


// Alta de Servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})