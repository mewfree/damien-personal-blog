import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Damien Gonot</title>
        <meta name="description" content="About Damien Gonot" />
        <meta name="keywords" content="damien, gonot, damien gonot, about, linkedin, github, contact" />
      </Head>
      <div className="text-3xl font-bold text-center">
        About
      </div>
      <div className="pl-4 mt-4">
        <div>
          Where you can see my code: <Link href="https://github.com/mewfree"><a className="font-semibold text-indigo-600 no-underline hover:text-black">https://github.com/mewfree</a></Link>
        </div>
        <div>
          Where you can see where I work: <Link href="https://www.linkedin.com/in/damiengonot"><a className="font-semibold text-indigo-600 no-underline hover:text-black">https://www.linkedin.com/in/damiengonot</a></Link>
        </div>
        <div>
          Where you can contact me: damien.gonot@gmail.com
        </div>
      </div>
      <div className="text-3xl font-bold mt-4">
       λ
      </div>
    </Layout>
  );
}
