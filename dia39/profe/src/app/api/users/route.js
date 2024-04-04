import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

// siempre trae nuevo contenido
export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {

   
   const count = await prisma.user.count();
   console.log(`Hay ${count} en la base.`);

   const users = await prisma.user.findMany({
         include: { posts: true },
   });
   return NextResponse.json({ message: "OBTENIENDO USUARIOS", data: users, status:"OK", cant:count });

}

export async function POST() {


   // // crear un nuevo usuario
   // await prisma.user.create({
   //    data: {
   //       name: "John Dough",
   //       username: "Jhonny",
   //       email: `john-${Math.random()}@example.com`,
   //    },
   // });


   
   const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!result.ok) {
        // This will activate the closest `error.jsx` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const users = await result.json();

    // elijo los datos que quiero guardar en la base de datos
   const usariosSeleccionados = users.map(user => ({
      //id: user.id, // no es necesario, prisma lo crea automáticamente
      name: user.name,
      email: user.email,
      username: user.username,
      website: user.website
   }));

    await prisma.user.createMany({
      data: usariosSeleccionados
   });
   


   return NextResponse.json({ message: "PIDIENDO PRESTADO USUARIOS DESDE JSONPLACEHOLDER", data: users, status:"OK"});
}
