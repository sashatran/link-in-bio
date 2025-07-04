import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sasha cozy - gaming desk setup, cozy hobbies</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
