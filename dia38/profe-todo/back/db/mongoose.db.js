import mongoose from 'mongoose'
import 'dotenv/config'

export const mongo_db = async () => {
    console.log('.. conectando a base de datos ..')

    await mongoose.connect(process.env.DB_URL)
    .then(()=> console.log("Connectado a MongoDB Localhost"))
    .catch(e=> console.log("Error en la conexion", e));
}