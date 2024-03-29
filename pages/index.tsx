import "@fontsource/ubuntu-mono";
import "@fontsource/yantramanav";

import Head from 'next/head'

import { Header } from "../components/Header";
import { About } from "../components/About";
import { Feature } from "../components/Feature";
import { Replay } from "../components/Replay";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

export default function Home () {
  return (
    <div className="">
      <Head>
        <title>Acceuil</title>
      </Head>
      <div className="body">
        <Header />
        <About />
        <Feature />
        <Replay />
        <Team />
        <Footer />
      </div>
    </div>
  );
}
