import Link from "next/link";

export const NavBarPrivada = () => {
    return (    
        <nav className="flex justify-between p-3 border-b-2 border-b-red-500 ">
            <Link href="/admin">Admin Panel</Link>
            <Link href="/pagos">Pagos</Link>
        </nav>
    )
};