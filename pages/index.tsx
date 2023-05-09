// import {Navbar} from '../components/Navbar'
// import {Banner} from '../components/Banner'
import {About} from '../components/About'
import {Header} from '../components/Header'
import {Feature} from '../components/Feature'
import { Replay } from '../components/Replay'
import {Team} from '../components/Team'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      {/* <Feature /> */}
      <Replay />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}
