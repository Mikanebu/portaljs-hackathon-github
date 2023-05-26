import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Head>
        <title>GitHub Datasets</title>
      </Head>
      <main className="app">
      <Hero/>
      <Showcase/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default CustomApp;
