import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

export function Navbar () {

  const links = () => {
    if(session){
      return [
        { label: 'Sign Out', onClick: () => signOut() }
      ]
    }
    return [
      { label: 'Sign In', onClick: () => signIn() },
    ];
  }

  const { data: session } = useSession()

  return (
    <div className="w-full mx-auto flex justify-between items-center p-2"> {/* Pour fixer la navbar on rajoute : fixed top-0 z-50 bg-white */}
      <a href="/" className="w-1/4">
        <img src="../images/logo.png" alt="logo" className="w-1/2 xl:w-full hover:opacity-60" />
      </a>
      <div className="flex space-x-8 text-xl font-semibold text-pink items-center justify-end lg:text-2xl lg:space-x-10 xl:text-3xl w-1/2">
        <a href="#about" className="hover:underline">About</a>
        <a href="#calendar" className="hover:underline">Calendar</a>
        <a href="#pastevents" className="hover:underline">Past events</a>
        <a href="#ourteam" className="hover:underline">Our team</a>
      </div>
      <Menu as="div" className="flex flex-col items-center w-1/4">
        <Menu.Button className="w-full flex items-center justify-center">
          <img src="../icons/login.svg" alt="" className="w-1/5 hover:opacity-60" />
        </Menu.Button>
        <Menu.Items as="div" className="flex flex-col items-center navbar_mobile absolute z-50 mt-24 right-30 text-2xl font-bold w-[15%] xl:w-[10%] text-end uppercase rounded-xl text-darkBlue p-8 space-y-4">
          {links().map((link) => (
            <Menu.Item key={link.label} as={Fragment}>
              {({ active }) => (
                <button 
                  className={`${
                    active ? 'underline' : ''
                  }`}
                  onClick={link.onClick}>
                  {link.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
