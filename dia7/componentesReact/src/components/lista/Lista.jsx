const users = [
   { "id": 1, "firstName": "John", "age": 30, "isAdmin": true },
   { "id": 2, "firstName": "Jane", "age": 25, "isAdmin": false },
   { "id": 5, "firstName": "Jim", "age": 33, "isAdmin": true },
];

const frutas = ["Manzana", "Pera", "Uva"];

export default function Lista() {
   return (
      <ul>
         {users.map((user) => (
            <>
               {frutas.join(", ")}
               {/* <User key={index} firstName={firstName} age={age} /> */}
               <User key={user.id} {...user} />
            </>
         ))}
      </ul>
   );
}

//const User = ({ firstName, age }) => {
const User = ({ firstName, age, isAdmin }) => {
   return (
      <li>
         <h1>{firstName}</h1>
         <p>Mi edad es {age}</p>
         {isAdmin && <p>Soy admin</p>}
      </li>
   );
};
