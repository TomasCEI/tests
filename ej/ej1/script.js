// ----------------------------------------
// TDZ (temporal dead zone)
// ----------------------------------------
{
    // TDZ comienza aquí
    // miVariable TDZ continua aquí
    // miVariable TDZ continua aquí
    console.log(miVariable); // devuelve undefined + error ReferenceError (cannot access 'miVariable' before initialization)
    //   si no estuviera definida mas abajo devuelve: ReferenceError: miVariable is not defined
 
    // miVariable TDZ continua aquí
    let miVariable = "valor"; // TDZ termina aquí
    console.log(miVariable); // devuelve el valor
    // TDZ no existe aquí
    // TDZ no existe aquí
 }
 
 // con var se puede declarar luego pero no tiene valor.
 // NO USAR VAR!! ESTA PROHIBIDO
 {
    console.log(miVariable); // devuelve undefined
    var miVariable = "valor";
    console.log(miVariable); // devuelve el valor
 }