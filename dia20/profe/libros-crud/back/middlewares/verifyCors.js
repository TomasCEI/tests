const verifyCors = (req, res, next) => {
    // se crea un array con las rutas que se quieren permitir
    const dominiosPermitidos = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost'];
    //
    const dominioRequest = req.headers.origin;
    //
    if (dominiosPermitidos.includes(dominioRequest)) {
        res.setHeader('Access-Control-Allow-Origin', dominioRequest);
    };
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // content-type es el más básico
    // cookie es si uso cookies
    // autorization es si uso barearToken
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
}

export default verifyCors;