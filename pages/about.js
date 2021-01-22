import Head from "next/head";

import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Damien Gonot</title>
      </Head>
      <div className="text-3xl font-bold">
        About
      </div>
      <div className="pl-4 mt-4">
        Hey
      </div>
    </Layout>
  );
}
