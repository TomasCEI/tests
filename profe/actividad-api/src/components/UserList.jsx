import React, { useState, useEffect } from "react";

/* ejemplo de try/catch */
const UserList = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchUsers = async () => {
      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
         if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
         }
         const data = await response.json();
         setUsers(data);
         setLoading(false);
      } catch (error) {
         console.error("Errorrsito:", error);
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   return (
      <div>
         <h1>Lista de Usuarios</h1>
         {loading ? (
            <p>Cargando...</p>
         ) : (
            <ul>
               {users.map((user) => (
                  <li key={user.id}>{user.name}</li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default UserList;
