import { NextResponse } from "next/server";

// siempre trae nuevo contenido
export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
 
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!result.ok) {
       throw new Error('Failed to fetch data')
    }
    const posts = await result.json();

   return NextResponse.json({ msg: "obteniendo posts", data: posts, status:"OK" });
}

export async function POST() {
 

   return NextResponse.json({ msg: "creando posts", status:"OK" });
}