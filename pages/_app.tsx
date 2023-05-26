import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Head>
        <title>GitHub Datasets</title>
      </Head>
      <main className="app">
      <Hero/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default CustomApp;
