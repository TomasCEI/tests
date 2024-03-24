Filtros de .update
````js
const options = {
    upsert : true,      // Lo creamos si no lo encuentra
    writeConcern : { w : 'majority', j : true }, // confirmación de escritura
    timestamp : true, // agrega prop de fecha
    overwriteDisciminatorKey: true // sobreescribe el discriminador
}
await Modelo.updateOne(filtro, update, options);

````	

- Falta ver Sessiones y Transacciones
- Filtros con opciones de .updateOne
- Explain (explicación de consultas)
- Operadores ($eq, $ne, $gt, $lt, $gte)
equal, not equal, greater than , let than





// Notas del video de EDU


hay 2 bases de datos SQL / NoSQL (MongoDB)

- PHP es mas lento que Node.js si hago cambios en mi página
- frameworks como react son muy rápidos ya que son reactivos

- Las bases de datos reflejan el mismo funcionamiento. MySQL es más lento que MongoDB ya que no es tan reactivo.

# Bases de Datos
Sistemas para almacenar información de manera organizada entre sus características:

- Organizar la información
- Acceder a la información de manera eficiente
- Integridad de la información aplicando reglas y restricciones
- Seguridad de la información aplicando permisos y roles
- Escalabilidad de la información para soportar crecimiento

# SQL vs NoSQL

- SQL: MySQL, MariaDB, PostgreSQL, SQLite, Oracle, SQL Server
- NoSQL: MongoDB, CouchDB, Redis (acaba de dejar de ser openSource), Cassandra, Firebase (AWS)

- Las bases SQL se prefieren utilizar en los casos de aplicaciones que requieren transacciones y relaciones, como por ejemplo:
    - un sistema de gestión de contenido (Wordpress)
    - un sistema de contabilidad (Quickbooks)
    - un sistema de inventario (SAP)
    - un sistema de facturación (Facturascripts)
    - un sistema de recursos humanos (SAP)


- Las bases NoSQL se prefieren utilizar en los casos de aplicaciones que requieren escalabilidad y rendimiento, como por ejemplo:
    - un sistema de geolocalización (Google Maps)
    - un sistema de recomendaciones (Netflix, Disney Plus)
    - un sistema de análisis de datos (Google Analytics)
    - un sistema de redes sociales (Facebook, Twitter, Instagram)
    - un sistema de mensajería (WhatsApp, Telegram)


# MySQL (SQL)

- Lenguaje de consulta estructurado
- Base de datos relacional
- Estructura de Tablas y Relaciones
- Todos los campos de una tabla tienen un tipo de dato y deben ser llenados (aun que sea con NULL)
- Se deben definir las claves primarias y foráneas
- Se deben definir las relaciones entre tablas
- Se deben definir los índices para mejorar la velocidad de las consultas
- Posee Funciones Agregadas (SUM, AVG, COUNT, MIN, MAX) donde procesa datos y devuelve 1 valor
- Posee Funciones Escalares (UPPER, LOWER, CONCAT, SUBSTRING) donde procesa datos y devuelve 1 valor
- Funciones de datos Nulos (IFNULL, ISNULL, COALESCE)
- Funciones de Fecha y Hora (NOW, CURDATE, CURTIME, DATE, TIME, TIMESTAMP, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND)
- Funciones de Cadenas (LENGTH, TRIM, LTRIM, RTRIM, REPLACE, SUBSTRING, CONCAT, UPPER, LOWER)
- Subconsultas (SELECT dentro de SELECT)

# MongoDB (NoSQL)

- Es mas flexible, no requiere completar todos sus campos
- No tenemos que definir IDs, MongoDB lo hace por nosotros
- Reemplaza las Tablas con Colecciones (Arrays)
- Reemplaza las Filas (Registros) con Documentos (Objetos)
- Reemplaza las Columnas con Campos
- Trabaja en un esquema mas similar a objetos JSON (BSON)

## Que veremos de MongoDB
- Que es
- Instalación Windows y Mac

- MongoDB Compass
    - Instalación
    - Estructura de MongoDB
    - Interfaz de Compass

- Mongoose (conexión de Express a MongoDB)
    - Instalación
    - Uso de Mongoose
    - Conexión a MongoDB
    - Variables de Entorno
    - Acciones
    - Gestion de Errores


### Que es
- Es un sistema de base de datos NoSQ que nos permite guardar infomración y editarla añadendo, eliminado, modificando y recibiendo información.
- Se puede utilizar a través de la terminal, Mongo Shell / Mongosh (Terminal de Mongo), Mongo Compass DB

### Instalación en Windows
- Descargar MongoDB Community Server, y click en siguiente.

### Instalación en Mac
- En el caso de macOS es necesario usar la terminal para instalar Homebrew y luego instalar MongoDB con Homebrew.

### HErramientas de MAC:
- XCode (AppStore)
- Homebrew (Terminal)
- Pasos [XCode, Homebrew, Hombebrew (3 pasos), Mongo Community Ed., Activar Servicio, Mongo Compass]

### Herramientas de MongoDB:
- MongoDB Community Server (Mongo en Hosting Local)
- Compass (Interfaz Gráfica para gestionar las BBDD de MongoDB)
- Atlas (Mongo en la nube)

### Interfaz de Compass
- Conexión con un servidor / Cluster
- Lista de conexiones
- Lista de colecciones
- Lista de Documentos

# -------------------------------------------------------------- #



Perfiles Full Stack
- Frontend: HTML, CSS, JavaScript, React, Angular, Vue
- Backend: Node.js, Express, PHP, Python, Ruby, Java, C#
- Bases de Datos: MySQL, MongoDB, Firebase, SQLite, PostgreSQL, Oracle, SQL Server
- DevOps: Docker, Kubernetes, AWS, Azure, Google Cloud, Netlify, Vercel
- Seguridad: JWT, OAuth, HTTPS, Certificados SSL, Firewalls, VPN, SSH
- Testing: Jest, Mocha, Chai, Jasmine, Selenium, Puppeteer, Cypress
- Metodologías: Scrum, Kanban, Lean, Agile, Waterfall, XP
- Control de Versiones: Git, GitHub, GitLab, Bitbucket, SVN, CVS
- IDEs: Visual Studio Code, Sublime Text, Atom, WebStorm, Eclipse, NetBeans
- Sistemas Operativos: Windows, MacOS, Linux, Ubuntu, Fedora, CentOS, Debian
- Redes: TCP/IP, HTTP, HTTPS, DNS, DHCP, FTP, SSH, Telnet, SMTP, POP3, IMAP
- Servidores: Apache, Nginx, IIS, Tomcat, Node.js, Express, PHP, Python, Ruby

## Nomenclaturas de Perfiles Full Stack

- MERN Stack: MongoDB, Express, React, Node.js
- MEAN Stack: MongoDB, Express, Angular, Node.js
- MEVN Stack: MongoDB, Express, Vue, Node.js

(M es MySQL, no MongoDB)
- LAMP Stack: Linux, Apache, MySQL, PHP
- WAMP Stack: Windows, Apache, MySQL, PHP
- MAMP Stack: MacOS, Apache, MySQL, PHP

(S es SQL o SQLite)
- SERN Stack: SQL, Express, React, Node.js
- SEAN Stack: SQL, Express, Angular, Node.js
- SEVN Stack: SQL, Express, Vue, Node.js


### MongoDB

Buscando documentos:
`const buscarTodos = Model.find()`
Buscando TODOS los que contengan una propiedad
`const buscarUnaProp = Modelo.find({ propiedad: valor })`
Buscando TODOS los que contengan varias propiedades
`const buscarVariasProp = Modelo.find({ propiedad1: valor1, propiedad2: valor2 })`

<!-- 
# Bases NoSQL

- No es relacional
- No tiene tablas
- No tiene esquemas
- No tiene relaciones
- No tiene joins
- No tiene transacciones
- No tiene claves foráneas
- No tiene claves primarias
- No tiene restricciones
- No tiene triggers
- No tiene procedimientos almacenados
- No tiene funciones almacenadas
- No tiene vistas -->