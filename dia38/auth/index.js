import express from "express";
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';

// archivo de configuración
import dotenv from 'dotenv';
dotenv.config();

const app = express();
console.clear();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); // req.body

app.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    const landingHTML= `<h1>Bienvenidos al Auth API con JWT</h1>`;
    res.send(landingHTML);
})

app.use("/API/", indexRoutes);

app.listen(3000, ()=> {
    console.log("Server corriendo en http://localhost:3000");
})