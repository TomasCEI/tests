import Link from "next/link";

export const NavBar = () => {
    return (    
        <nav className="flex justify-between p-3 border-2 border-b-slate-500">
            <Link href="/">Home</Link>
            <Link href="/todolist">TodoList</Link>
            <Link href="/blog">Blog</Link>

            {/* Link a sección privada  */}
            <Link href="/admin">Privado</Link>
        </nav>
    )
};