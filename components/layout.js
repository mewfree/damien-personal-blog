import Link from "next/link";

export default function Layout({ children }) {

  const header = (
    <div className="flex flex-col bg-indigo-600 p-12">
      <h1 className="text-center mb-2">
        <Link href="/">
          <a className="text-4xl text-white font-bold no-underline">
            Damien Gonot
          </a>
        </Link>
      </h1>
      <h2 className="text-center text-2xl text-white">Personal Blog</h2>
    </div>
  )

  const menu = (
    <nav className="menu bg-indigo-800 text-white p-2 px-4">
      <div className="links space-x-4 md:space-x-16 text-center">
        <span className="hover:text-indigo-200"><Link href="/">Home</Link></span>
        <span className="hover:text-indigo-200"><Link href="/blog">Blog</Link></span>
        <span className="hover:text-indigo-200"><Link href="/resume">Résumé</Link></span>
        <span className="hover:text-indigo-200"><Link href="/about">About</Link></span>
      </div>
    </nav>
  )

  return (
    <div className="mx-auto">
      <div>{menu}</div>
      <header>{header}</header>
      <main className="max-w-3xl mx-auto p-6">{children}</main>
    </div>
  );
}
