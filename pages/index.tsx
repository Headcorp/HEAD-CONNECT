import "@fontsource/ubuntu-mono";

import {Navbar} from '../components/Navbar';
import {Banner} from '../components/Banner';
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Feature } from "../components/Feature";
import { Replay } from "../components/Replay";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

export default function Home () {
  return (
    <div className="body">
      <Header />
      <About />
      <Feature />
      <Replay />
      <Team />
      <Footer />
    </div>
  );
}
