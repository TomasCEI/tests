import { NextResponse } from "next/server";

// siempre trae nuevo contenido
export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(req, { params }) {

    const id= Number(params.id);
    
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!result.ok) {
        // This will activate the closest `error.jsx` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const posts = await result.json();

   return NextResponse.json({ msg: `obteniendo post num ${id}`, data: posts, status:"OK" });
}

export async function POST() {
    return NextResponse.json({ message: "CREANDO NUEVO POST" });
 }

export async function PUT() {
    return NextResponse.json({ message: "ACTUALIZANDO POST" });
 }
 
 export async function DELETE() {
    return NextResponse.json({ message: "ELIMINADO POST" });
 }