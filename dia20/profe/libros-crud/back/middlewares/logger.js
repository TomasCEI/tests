export const timeLog = (req, res, next) => {
    console.log('Registro Guardado, ruta: ', req.originalUrl);
    console.log('Time: ', Date.now());
    next();
  }
