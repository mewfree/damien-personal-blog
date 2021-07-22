import Head from "next/head";
import { ThemeProvider } from 'next-themes';

import "../styles/tailwind.css";
import "typeface-lato";

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Damien Gonot</title>
        <meta name="description" content={`Damien Gonot's personal website (${new Date().getFullYear()})`} />
        <meta name="keywords" content="damien, gonot, damien gonot, personal" />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
