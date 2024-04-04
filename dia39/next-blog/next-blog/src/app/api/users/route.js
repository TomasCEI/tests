import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

// siempre trae nuevo contenido
export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
 
   const users = await prisma.user.findMany({
      include: { posts: true }
   })

   return NextResponse.json({ msg: "obteniendo usuarios", data: users, status:"OK" });
}

export async function POST() {
 
   /*
   const usuario={
      name: "juan3",
      email: "juan3@mail.com",
      username: "juanchi3",
      website: "www.juan3.com"
   }*/
   // await prisma.user.create({
   //    data: usuario
   // });


   const result = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await result.json();

   const dataDeUsuarios = users.map(user => ({
      name: user.name,
      email: user.email,
      username: user.username,
      website: user.website
   }));

   await prisma.user.createMany({
      data: dataDeUsuarios
   })



   const usersResponse = await prisma.user.findMany({
      include: { posts: true }
   })


   return NextResponse.json({ msg: "creando usuario", data: usersResponse, status:"OK" });
}


