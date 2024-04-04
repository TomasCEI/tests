import Link from "next/link";

export const NavBarPrivada = () => {
    return (
        <nav className="flex justify-between  p-3 border-2 border-b-slate-500">
            
                <>
                <Link href="/admin">Panel Admin</Link>
                <Link href="/pagos">pagos</Link>
                </>
        </nav>
    )
}
