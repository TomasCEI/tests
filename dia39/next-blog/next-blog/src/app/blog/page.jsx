import {Header} from "@/components/Header"

async function fetchPosts(){
    console.log("Obteniendo datos");
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok){
        throw Error("Error al obtener los datos")
    }
    return res.json();
}



const Blog = async () => {

    const posts = await fetchPosts();
    console.log(posts);

    return (
        <>
        <Header title="Soy Blog" />
        </>
    )
}
export default Blog;