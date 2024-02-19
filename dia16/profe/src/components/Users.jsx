import {useState, useEffect } from 'react';

/**
 * https://jsonplaceholder.typicode.com/
 * 
 *  /posts, /comments, /albums, /photos, /todos, /users
 */

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( ()=> {
        const controller = new AbortController();
        const options = {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('https://jsonplaceholder.typicode.com/users', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        })
        .catch(error => console.log(error))
        .finally(() => {
            console.log("fetch users")
            controller.abort();
        });
      }, [])


      return (
        <div className="Users">
        <h2>Users</h2>

        <ul>
        { users.length === 0 && <li>No hay datos</li> }
        {users.map(user => (
                <li key={user.id}>
                    <h3>{user.name}</h3>
                </li>
            ))}
        </ul>
        </div>
      )
    }

    export default Users;