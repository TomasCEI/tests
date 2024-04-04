
import { Header } from "@/components/Header";

const BlogPage =( {params}) => {
    return ( 
    <>
    <article className="p-4">
        <Header title="Artículo de Blog" />
        
        Blog con id: {params.id}
    </article>
    </>
    )
}

export default BlogPage;