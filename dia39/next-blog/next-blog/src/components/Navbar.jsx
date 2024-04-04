import Link from "next/link";

export const NavBar = () => {
    const soyadmin=true;
    return (
        <nav className="flex justify-between  p-3 border-2 border-b-slate-500">
            <Link href="/">Home</Link>
            <Link href="/blog">blog</Link>
            <Link href="/todolist">todoList</Link>


            <Link href="/admin">Admin</Link>

        </nav>
    )
}
