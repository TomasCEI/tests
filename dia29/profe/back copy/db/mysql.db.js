import mysql from 'mysql2/promise';

// Create the connection to database
const mysqlConn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_biblioteca',
  });

  export default mysqlConn;