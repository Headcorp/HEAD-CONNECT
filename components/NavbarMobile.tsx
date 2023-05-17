import { useState, useEffect, useRef } from 'react';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import { LoginButton } from './LoginButton'

export function NavbarMobile() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu.svg");
  const navbarRef = useRef<HTMLDivElement>(null);
  const links = [
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Sign Up' }
  ];

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
        <img src="../images/logo.png" alt="logo" className="hover:opacity-60" />
      </a>
      <div className="flex justify-end items-center space-x-4">
        {/* <a href="/login" className=""><img src="../icons/login.svg" alt="" width={40} height={40} className="hover:opacity-60" /></a> */}
        <Menu as="div" className="flex flex-col items-center">
          <Menu.Button>
            <img src="../icons/login.svg" alt="" width={40} height={40} className="hover:opacity-60" />
          </Menu.Button>
          <Menu.Items as="div" className="flex flex-col items-center navbar_mobile absolute z-50 top-30 mt-16 text-2xl font-bold right-0 w-[50%] text-center uppercase rounded-xl text-darkBlue p-8 space-y-4">
            {links.map((link) => (
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'underline' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <div className="" ref={navbarRef}>
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none p-2"
            aria-label="Toggle Mobile Menu"
          >
            <img src={`../icons/${menuIcon}`} alt="" width={25} height={25} className="hover:opacity-60" />
          </button>
          {isMobileMenuOpen && (
            <div className="navbar_mobile absolute z-50 top-30 mt-2 text-2xl font-bold right-0 w-[50%] text-center uppercase rounded-xl text-darkBlue p-8 flex flex-col justify-between">
              <div>
                <a href="#about" className="block mb-6 hover:underline">About</a>
                <a href="#calendar" className="block mb-6 hover:underline">Calendar</a>
                <a href="#pastevents" className="block mb-6 hover:underline">Past events</a>
                <a href="#ourteam" className="block hover:underline">Our team</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
