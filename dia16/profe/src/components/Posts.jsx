import {useState, useEffect } from 'react';

/**
 * https://jsonplaceholder.typicode.com/
 * 
 *  /posts, /comments, /albums, /photos, /todos, /users
 */

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect( ()=> {

        const controller = new AbortController();

        const options = {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
        .catch(error => console.log(error))
        .finally(() => {
            console.log("fetch posts")
            controller.abort();
        });
      }, [])


      return (
        <div className="Posts">
        <h2>Posts</h2>

        <ul>
        { posts.length === 0 && <li>No hay datos</li> }
        {posts.map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                </li>
            ))}
        </ul>
        </div>
      )
    }

    export default Posts;