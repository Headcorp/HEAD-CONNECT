import { useState, useEffect, useRef } from 'react';

export function NavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu.svg");
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    isMobileMenuOpen ? setMenuIcon("close.svg") : setMenuIcon("menu.svg");
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mx-auto flex justify-between items-center p-4">
      <a href="/" className="w-1/2">
        <img src="../images/logo.png" alt="logo" className="" />
      </a>
      <div className="flex justify-end items-center space-x-4">
        <a href="/login" className=""><img src="../icons/login.svg" alt="" width={40} height={40} /></a>
        <div className="" ref={navbarRef}>
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none p-2"
            aria-label="Toggle Mobile Menu"
          >
            <img src={`../icons/${menuIcon}`} alt="" width={25} height={25} />
          </button>
          {isMobileMenuOpen && (
            <div className="navbar_mobile absolute z-50 top-30 mt-2 text-2xl font-bold right-0 w-full text-center uppercase rounded-xl text-darkBlue p-8 flex flex-col justify-between">
              <div>
                <a href="" className="block mb-6 hover:underline">About</a>
                <a href="" className="block mb-6 hover:underline">Calendar</a>
                <a href="" className="block mb-6 hover:underline">Past events</a>
                <a href="" className="block hover:underline">Our team</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
