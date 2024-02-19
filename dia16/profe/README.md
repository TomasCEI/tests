# Formularios

## Fetch

```js
fetch('miurl.com/api/data')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
```




1) que es Json?
    Es un formato de texto estructurado y ligero (JavaScript Object Notation). No deja de ser un string.
    Se utiliza en 
    - obtención de datos de APIs, GraphQL
    - Archivos de configuración (package.json)
    - Interacciones con websockets.

    Características:
    Comienzan y terminan con llaves o corchetes
    se utiliza la sintaxis de key:value
    sus valores pueden ser strings, números, booleanos, arrays, objetos, null.
    todas las comillas son dobles
    no soporta comentarios

    Ejemplos:
    ```js
    const userData = {
        nombre: "Homero",
        edad: 38,
        casado: false,
        hijos: null,
        mascotas: ["Bola de Nieve", "Ayudante de Santa", "Tenazas"],
        direccion: {
            calle: "Av. Siempre Viva",
            numero: 123
        }
    }
    ```

    Convertir de un objeto JS a un "string JSON" se lo llama `stringify`
    Convertir de un "string JSON" a un objeto JS se lo llama `parse`    

    Ejemplo:
    ```js
    const stringParaEnviarJSON = JSON.stringify(userData);
    console.log(stringParaEnviarJSON); // `{"nombre":"Homero","edad":38,"casado":false,"hijos":null,"mascotas":["Bola de Nieve","Ayudante de Santa","Tenazas"],"direccion":{"calle":"Av. Siempre Viva","numero":123}}`

    const objetoRecibidoJS = JSON.parse(stringParaEnviarJSON);
    console.log(objetoRecibidoJS); // {nombre: "Homero", edad: 38, casado: false, hijos: null, mascotas: Array(3), …}
    ```

1) Request (petición)
    La obtención de información de un servidor (HTML, CSS, JS, imagenes, tipografías, datos). Puede ser sincrónica o asíncrona. 
    En JS principalmente se utilizan de manera asíncrona. Se les solía llamar `AJAX` (Asynchronous JavaScript And XML) aunque mayormente no se utiliza para traer información XML si no JSON. Ahora la llamamos `fetch` por su método fetch(). También existe un método menos común llamado `XMLHttpRequest` por llevar un poco mas de complejidad en su uso.
    - Se utilizan para enviar datos a un servidor (formularios)
    - Se utilizan para recibir datos de manera asíncrona (contenido de RRSS, noticias, APIs, etc)
    - hay librerías como `axios` basadas en promesas.

1) Como funciona el fetch?
4) Response (respuesta)
5) Promise (promesa)
6) fetch()

## useEffect