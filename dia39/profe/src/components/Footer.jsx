import Link from "next/link";

export const Footer = () => {
    return (    
        <footer className="bg-red-300 text-center">
            <p>© 2021 - Todos los derechos reservados</p>
            <Link href="/privacidad">Política de privacidad</Link>
        </footer>
    )
};