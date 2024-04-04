import Link from "next/link";

export const metadata = {
  title: "Sección Blog",
  description: "Aquí mostramos nuestro blog",
};

export default function BlogLayout({ children }) {
  return (
    <>
    <div className="flex flex-grow">
      <div className="content flex-grow">
        {children}
      </div>
      <aside className="bg-green-500 w-1/4 p-3">
        
          <h3 className="border-slate-900 border-b-2 font-bold"># Top 5 Posts</h3>
         <nav>
          <ul>
            <li><Link href="/blog/1">Blog Post 1</Link></li>
            <li><Link href="/blog/2">Blog Post 2</Link></li>
            <li><Link href="/blog/3">Blog Post 3</Link></li>
            <li><Link href="/blog/4">Blog Post 4</Link></li>
            <li><Link href="/blog/5">Blog Post 5</Link></li>
          </ul>
         </nav>
      </aside>
    </div>
    </>
  );
}
