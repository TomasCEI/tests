import { NavBarPrivada } from "@/app/(private)/_components/Navbar";

export const metadata = {
  title: "Private Section",
  description: "Sección privada",
};

export default function PrivateLayout({ children }) {
  return (
    <>
        <NavBarPrivada />
        {children}
    </>
  );
}
