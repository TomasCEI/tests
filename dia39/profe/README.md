## Blog del Profe!


### Objetivo

Crear un sistema de Blog, donde durante su construcción se puedan observar distintas tecnologías nuevas. Entre ellas, el framework de NextJs14 con sus mejores funciones (Rutas, Data fetching, API integrada, Server actions, Middlewares, Client & Server Rendering, etc), el uso de TailWind CSS, Prisma como ORM de base de datos MySQL.

# Lista de Temas

## 1. Setup

- instalar nextJs 14 `npx create-next-app@latest`
- Baje el nivel de mi next a "14.0.3" para que funcione con mi versión mas vieja de Node.
- Mostrar el contenido de la página principal `npm run dev`

## 2. Layout Principal y Rutas

- crear `/app/components/NavBar.jsx` e importarlo en `app/layout.jsx`
- crear `/app/components/Footer.jsx` e importarlo en `app/layout.jsx`

### Page Router
- crear `/app/components/Header.jsx`
- Crear carpeta de TodoList y mostrarlo en `app/todolist/page.jsx`
- Crear carpeta de blog y mostrarla en `app/blog/page.jsx`

### Agrupar Rutas
- Crear carpet `app/(private)` y dentro 2 páginas privadas 
    admin `app/(private)/admin/page.jsx`
    pagos `app/(private)/pagos/page.jsx`
- Crear un 2ndo Navbar en `app/(private)/_components/Navbar.jsx` y agregar las 2 rutas privadas

### Layouts anidados
- Crear un layout privado `app/(private)/layout.jsx` y agregar el NavBar privado
- Crear un layout dentro de la carpeta app/blog  para el navBar lateral <aside>Top 5 Posts</aside>

### Crear rutas con params
- Crear una carpeta [id] dentro de blog y mostrar el id con `const { postid } = params;` Requiere recibir `{params}` como argumento.

### Render Cliente vs Servidor

- Comenzar a codificar todoList, al probar `useState` o `useEffect` va a tirar ERROR! agregar `use client`
- Pegar el código de mi página "TodoList" y repasarlo paso a paso

## 3. Data Fetching (serverSide)

- crear item `const posts = await fetchPosts();` directamente en `app/blog/page.jsx` 
- crear funcion `async fetchPosts` con url jsonPlaceholder `https://jsonplaceholder.typicode.com/posts` y mostrarlo en la pantalla.
- incluir console.log() para que vean que se ejecuta en el servidor y es seguro.

## 4. Data Fetching (clientSide) con API integrada

-  crear el archivo `src/app/api/posts/route.js`
Mostrar como se pueden obtener los datos de la API en el cliente, y como se puede hacer un fetch en el cliente.
- crear el archivo `src/app/api/posts/[id]/route.js` y mostrar el uso de GET(req, {params}) para obtener le id de un único post.
- Incluir funciones de POST/PUT/DELETE para mostrar como se pueden hacer las distintas operaciones con thunderclient.

## 5. Server Actions (NO)

// /app/lib/actions.js
// 'use server'; 
// export async function createInvoice(formData: FormData) {}

## 6. Instalación de Prisma

- npm install prisma --save-dev
- npm add @prisma/client
- `npx prisma init` donde se creará la carpeta prisma automáticamente con `schema.prisma` y el archivo `.env`
- podemos elegir entre distintos providers (mysql, sqlite, postgresql, mongodb, etc)
- Debemos modificar nuestra constante `DATABASE_URL` en el archivo `.env` para que apunte a nuestra base de datos.
- Creamos los modelos de usuarios y posts según nuestro esquema de jsonPlaceholder.
- ejecutamos `npx prisma migrate dev --name init` para crear la primera migración.
- creamos el archivo `lib/db/prisma.js` para poder acceder a la base de datos desde cualquier parte de la aplicación.
    mostrar con y sin log[query] para ver las consultas que se hacen a la base de datos.
- Creamos el API de usuarios "src/app/api/users/route.js" y mostramos como se puede crear un usuario con POST.
- Todos los tipos de consulta en "https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries"
    Ver menú de la derecha.
    `findUnique(), findFirst(), findMany(), create(), update(), upsert(), delete(), createMany(), updateMany(), deleteMany(),` etc

## 7. Deploy Vercel + Postgress Storage
- Ir a https://dash.filess.io/
- Ir a Vercel.com -> Storage -> Create Database -> Postgress (1 sola gratuita por usuario)
- Ir a One.com -> Panel de control -> crear base de datos
- Ir a https://www.db4free.net/

Cambiar la URL de la base de datos y listo.

## Siguientes pasos
- Login, Auth, MiddleWares, upload de imagenes, comentarios + Likes, Markdown.





## Built on open source

- Next.js as the React framework
- Tailwind for CSS styling
- Prisma as the ORM for database access
- Vercel Postgres for the database
- Vercel for deployment
- Vercel Blob for image uploads (prox)
- NextAuth.js for authentication (prox)
- Tremor for charts (prox)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
