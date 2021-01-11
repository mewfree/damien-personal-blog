import Head from "next/head";

import "../styles/tailwind.css";
import "typeface-lato";

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Damien Gonot</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
