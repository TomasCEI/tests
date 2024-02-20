export const timeLog =(req, res, next) => {
    console.log("Guardar timestamp en Base de Datos");
    console.log("Time: ", Date.now());
    next();
}
