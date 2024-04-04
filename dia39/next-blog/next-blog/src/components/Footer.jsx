import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="bg-red-500 text-white text-center">
            <p>2024 - Derechos reservados</p>
            <Link href="/privacidad">politicas de privacidad</Link>
        </footer>
    )
}
