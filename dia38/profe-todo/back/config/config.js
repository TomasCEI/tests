
import dotenv from 'dotenv';
dotenv.config();

console.log("enviroment es: ",process.env.NODE_ENV || "development");

export const PORT= process.env.PORT         || 3000;
export const domain= process.env.DOMAIN     || "http://localhost"; 

//console.log("PUERTO ES: ", PORT);

export const fullDomain=`${domain}:${PORT}`;