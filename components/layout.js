import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  // const header = isRoot ? (
  //   <h1 className="mb-8">
  //     <Link href="/">
  //       <a className="text-6xl font-black text-black no-underline">
  //         Damien Gonot
  //       </a>
  //     </Link>
  //   </h1>
  // ) : (
  //   <h1 className="mb-4">
  //     <Link href="/">
  //       <a className="text-4xl font-black text-black no-underline">
  //         Damien Gonot
  //       </a>
  //     </Link>
  //   </h1>
  // );

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

  return (
    <div className="mx-auto">
      <header>{header}</header>
      <main className="max-w-3xl mx-auto p-6">{children}</main>
    </div>
  );
}
