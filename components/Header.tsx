import { useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

import {Navbar} from './Navbar';
import {Banner} from './Banner';
import { NavbarMobile } from './NavbarMobile';

export function Header () {
  const [isMobile, setIsMobile] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    setIsMobile(tempIsMobile)
  }, [tempIsMobile])

  return (
    <div className="header">
        {isMobile ? <NavbarMobile /> : <Navbar />}
        <Banner />
      </div>
  )
}
