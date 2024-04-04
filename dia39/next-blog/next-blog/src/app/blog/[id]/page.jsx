import {Header} from "@/components/Header"

const PaginaBlog = ({params}) => {
    return (
        <>
        <Header title="Articulo de blog" />
        Blog con id: {params.id}
        </>
    )
}
export default PaginaBlog;