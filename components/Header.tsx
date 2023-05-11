import { useMediaQuery } from 'react-responsive';
import {Navbar} from './Navbar'
import {Banner} from './Banner'
import { NavbarMobile } from './NavbarMobile'

export function Header () {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const handleNavbar = () => {
  //   return isMobile ? <NavbarMobile /> : <Navbar />;
  // }

  return (
    <div className="header">
        {/* {handleNavbar()} */}
        {isMobile ? <NavbarMobile /> : <Navbar />}
        <Banner />
      </div>
  )
}
