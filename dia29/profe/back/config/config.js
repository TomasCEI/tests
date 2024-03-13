import dotenv from 'dotenv';
//import { config } from "dotenv";

//const envFileName = `.env.${process.env.NODE_ENV || "development"}`

dotenv.config();

// Cargar las variables de entorno desde el archivo correspondiente
//dotenv.config({ path: envFileName });

// Determinar el archivo .env a cargar en función del entorno
//export const envMode = process.env.NODE_ENV;
//console.log("EnvMode es: ", envMode);
const envFile = process.env.NODE_ENV == 'production' ? '.env.production' : '.env';




export const PORT=process.env.PORT || 1000;

export const domain=process.env.DOMAIN || "http://localhost"; 

export const fullDomain=`${domain}:${PORT}`;


//console.log(`Env vars: ${envFile}  ${PORT} ${domain} ${fullDomain} `);
//console.log(process.env)