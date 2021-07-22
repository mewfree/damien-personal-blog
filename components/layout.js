import Link from "next/link";

export default function Layout({ children }) {
  const menuLink = (route, label) => <span><Link href={route}><a className="text-white hover:text-indigo-100">{label}</a></Link></span>

  const menu = (
    <nav className="menu bg-indigo-700 dark:bg-indigo-900 text-white p-2 px-4">
      <div className="links space-x-4 md:space-x-16 text-center">
        {menuLink("/", "Home")}
        {menuLink("/blog", "Blog")}
        {menuLink("/resume", "Résumé")}
        {menuLink("/about", "About")}
      </div>
    </nav>
  )

  const header = (
    <div className="flex flex-col bg-indigo-600 dark:bg-indigo-800 p-12">
      <h1 className="text-center mb-2">
        <Link href="/">
          <a className="text-4xl text-white hover:text-white dark:text-white font-bold">
            Damien Gonot
          </a>
        </Link>
      </h1>
      <h2 className="text-center text-2xl text-white">Personal Blog</h2>
    </div>
  )

  return (
    <div className="mx-auto min-h-screen dark:bg-gray-900">
      <div>{menu}</div>
      <header>{header}</header>
      <main className="max-w-3xl mx-auto text-black dark:text-white p-6">{children}</main>
    </div>
  );
}
