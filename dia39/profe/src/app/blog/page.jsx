
// Importing the function to fetch posts from the database.
//import { fetchPosts } from "@/db/queries/posts";
import { Header } from "@/components/Header";
import Link from "next/link";
// Importing a component that handles post deletion.
//import PostDelete from "@/components/post-delete";


async function fetchPosts() {

  // esto es SEGURO porque se hace en el backend, se pueden usar credenciales privadas
  console.log("OBTENIENDO DATOS!")
  const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
  if (!res.ok) {
    // This will activate the closest `error.jsx` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const posts = await fetchPosts();
  console.log(posts);

  // const posts = []; //await fetchPosts() // Fetching the posts from the database.
  // const dateOptions = { // Options for formatting dates.
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric'
  // };

  return (
    
       

    <main className="flex min-h-screen flex-col p-4">
        <Header title="Página de Blog" />
        
      <div className="grid gap-x-8 gap-y-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {posts.map(post => {
          return <div key={post.id}>
            <div className="mb-4">
              <Link
                key={post.id}
                href={`/blog/${post.id}/`}
                className=""
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {post.title}
                </h2>
              </Link>
              <p className={`max-w-[30ch] m-auto text-sm opacity-60`}>
                {post.body}
              </p>
            </div>
          </div>
        })}
      </div>
    </main>
  );
}