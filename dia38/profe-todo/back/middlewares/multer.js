
import multer from "multer";

// Uso de Multer para upload de archivos
// https://expressjs.com/en/resources/middleware/multer.html

// Opción 1: Datos mínimos, el archivo destino tendrá unun nombre aleatorio sin extensión
// export const upload = multer({ dest: 'uploads/' });

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
export const upload = multer({ storage: storage })
