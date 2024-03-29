import { Fragment } from 'react'
import { useState, useEffect, useRef } from "react";
import { Tab, Popover, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";

import { Dropdown } from "./Dropdown";
import { UserHomeBlog } from "./UserHomeBlog";
import { UserHomeEvents } from "./UserHomeEvents";
import { ProfilePage } from './ProfilePage';

export function UserNavbarMobile() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [svgPath, setSvgPath] = useState(
    "M0 46V38.3333H50V46H0ZM0 26.8333V19.1667H50V26.8333H0ZM0 7.66667V0H50V7.66667H0Z"
  );
  const [svgViewBox, setSvgViewBox] = useState("0 0 50 46");
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState('blog')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    isMobileMenuOpen
      ? setSvgPath(
        "M29.1667 2.9375L26.2292 0L14.5833 11.6458L2.9375 0L0 2.9375L11.6458 14.5833L0 26.2292L2.9375 29.1667L14.5833 17.5208L26.2292 29.1667L29.1667 26.2292L17.5208 14.5833L29.1667 2.9375Z"
      )
      : setSvgPath(
        "M0 46V38.3333H50V46H0ZM0 26.8333V19.1667H50V26.8333H0ZM0 7.66667V0H50V7.66667H0Z"
      );
  }, [isMobileMenuOpen]);

  useEffect(() => {
    isMobileMenuOpen ? setSvgViewBox("0 0 30 30") : setSvgViewBox("0 0 50 46");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <Tab.Group>
        <div className="flex justify-center space-y-2 items-center userheader p-4">
          <a href="/" className="w-1/2">
            <img
              src="../images/logo.png"
              alt="logo"
              className="w-2/3 sm:w-1/2 hover:opacity-60"
            />
          </a>
          <div className="w-1/2 text-end" ref={navbarRef}>
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none p-2"
              aria-label="Toggle Mobile Menu"
            >
              <svg
                width="25"
                height="25"
                viewBox={`${svgViewBox}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:opacity-60"
              >
                <path d={`${svgPath}`} fill="white" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="navbar_mobile absolute z-50 top-30 mt-7 text-2xl font-bold right-0 w-[50%] sm:w-[33%] text-center uppercase rounded-xl text-darkBlue p-8 flex flex-col justify-between space-y-2">
                <div className="flex flex-col space-y-2 items-center">
                  <Tab.List className="flex flex-col sm:flex-row sm:space-x-2 text-md sm:text-xl justify-center items-center font-semibold space-y-2 my-2">
                    <Tab
                      className={`${activeButton === 'blog' ?
                        'hover:bg-white/50 bg-pink border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center' :
                        'bg-white/50 border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center'}`
                      }
                      onClick={() => setActiveButton('blog')}
                    >
                      <span className={`${activeButton === 'blog' ? "text-white" : "text-pink"}`}>Blog</span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.335 0.799984L23.45 2.91498C24.035 3.49998 24.035 4.44498 23.45 5.02998L17 11.495V26H0.5V3.49998H16.505L19.205 0.799984C19.805 0.214984 20.75 0.199984 21.335 0.799984ZM12.845 13.52L20.9 5.47998L18.77 3.34998L10.73 11.405L9.665 14.585L12.845 13.52Z"
                          fill={`${activeButton === 'blog'? "white" : "#E8334E"}`}
                        />
                      </svg>
                    </Tab>
                    <Tab
                      className={`${activeButton === 'events' ?
                        'hover:bg-white/50 bg-pink border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center' :
                        'bg-white/50 border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center'}`
                      }
                      onClick={() => setActiveButton('events')}
                    >
                      <span className={`${activeButton === 'events' ? "text-white" : "text-pink"}`}>Events</span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6875 17.3125L15.0313 12.9688C15.2813 12.7188 15.5833 12.5938 15.9375 12.5938C16.2917 12.5938 16.5938 12.7188 16.8438 12.9688C17.0938 13.2188 17.2188 13.5208 17.2188 13.875C17.2188 14.2292 17.0938 14.5313 16.8438 14.7813L11.5625 20.0625C11.3125 20.3125 11.0208 20.4375 10.6875 20.4375C10.3542 20.4375 10.0625 20.3125 9.8125 20.0625L7.15625 17.4063C6.90625 17.1563 6.78125 16.8542 6.78125 16.5C6.78125 16.1458 6.90625 15.8438 7.15625 15.5938C7.40625 15.3438 7.70834 15.2188 8.0625 15.2188C8.41667 15.2188 8.71875 15.3438 8.96875 15.5938L10.6875 17.3125ZM3.25 25.5C2.5625 25.5 1.97375 25.255 1.48375 24.765C0.993752 24.275 0.749169 23.6867 0.750002 23V5.5C0.750002 4.8125 0.995002 4.22375 1.485 3.73375C1.975 3.24375 2.56334 2.99917 3.25 3H4.5V1.75C4.5 1.39584 4.62 1.09875 4.86 0.858754C5.1 0.618754 5.39667 0.499171 5.75 0.500004C6.10417 0.500004 6.40125 0.620004 6.64125 0.860004C6.88125 1.1 7.00084 1.39667 7 1.75V3H17V1.75C17 1.39584 17.12 1.09875 17.36 0.858754C17.6 0.618754 17.8967 0.499171 18.25 0.500004C18.6042 0.500004 18.9013 0.620004 19.1413 0.860004C19.3813 1.1 19.5008 1.39667 19.5 1.75V3H20.75C21.4375 3 22.0263 3.245 22.5163 3.735C23.0063 4.225 23.2508 4.81334 23.25 5.5V23C23.25 23.6875 23.005 24.2763 22.515 24.7663C22.025 25.2563 21.4367 25.5008 20.75 25.5H3.25ZM3.25 23H20.75V10.5H3.25V23Z"
                          fill={`${activeButton === 'events'? "white" : "#E8334E"}`}
                        />
                      </svg>
                    </Tab>
                    <Tab
                      className={`${activeButton === 'profil' ?
                        'hover:bg-white/50 bg-pink border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center' :
                        'bg-white/50 border-2 border-pink rounded-xl px-2 py-1 sm:px-4 sm:py-2 flex space-x-2 items-center justify-center'}`
                      }
                      onClick={() => setActiveButton('profil')}
                    >
                      <span className={`${activeButton === 'profil' ? "text-white" : "text-pink"}`}>Profil</span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.335 0.799984L23.45 2.91498C24.035 3.49998 24.035 4.44498 23.45 5.02998L17 11.495V26H0.5V3.49998H16.505L19.205 0.799984C19.805 0.214984 20.75 0.199984 21.335 0.799984ZM12.845 13.52L20.9 5.47998L18.77 3.34998L10.73 11.405L9.665 14.585L12.845 13.52Z"
                          fill={`${activeButton === 'profil'? "white" : "#E8334E"}`}
                        />
                      </svg>
                    </Tab>
                  </Tab.List>
                  <div className="flex justify-evenly w-full space-x-4 items-center">
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button>
                            <a
                              href="#"
                              className="relative flex items-center justify-center p-0 h-[70px] rounded-full hover:bg-pink/40"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 42 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M40.8547 29.1453L36.625 24.9156V19.3125C36.6202 15.4404 35.1797 11.7076 32.5822 8.83591C29.9848 5.96424 26.4147 4.15771 22.5625 3.76562V0.5625H19.4375V3.76562C15.5853 4.15771 12.0153 5.96424 9.41776 8.83591C6.82028 11.7076 5.37985 15.4404 5.375 19.3125V24.9156L1.14531 29.1453C0.852267 29.4383 0.687588 29.8356 0.6875 30.25V34.9375C0.6875 35.3519 0.85212 35.7493 1.14515 36.0424C1.43817 36.3354 1.8356 36.5 2.25 36.5H13.1875V38.0625C13.1875 40.1345 14.0106 42.1216 15.4757 43.5868C16.9409 45.0519 18.928 45.875 21 45.875C23.072 45.875 25.0591 45.0519 26.5243 43.5868C27.9894 42.1216 28.8125 40.1345 28.8125 38.0625V36.5H39.75C40.1644 36.5 40.5618 36.3354 40.8549 36.0424C41.1479 35.7493 41.3125 35.3519 41.3125 34.9375V30.25C41.3124 29.8356 41.1477 29.4383 40.8547 29.1453ZM25.6875 38.0625C25.6875 39.3057 25.1936 40.498 24.3146 41.3771C23.4355 42.2561 22.2432 42.75 21 42.75C19.7568 42.75 18.5645 42.2561 17.6854 41.3771C16.8064 40.498 16.3125 39.3057 16.3125 38.0625V36.5H25.6875V38.0625Z"
                                  fill="white"
                                />
                              </svg>
                              <div className="rounded-full bg-pink text-white p-4 w-[10px] h-[10px] absolute top-0 right-0 flex items-center justify-center">
                                <span>3</span>
                              </div>
                            </a>
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute z-10 w-full max-w-sm -translate-x-1/2 transform rounded-xl">
                                <div className="relative w-max-content grid gap-4 bg-white p-2 overflow-scroll h-[250px] rounded-xl shadow-xl">
                                  <span className='text-xl text-darkBlue font-extrabold p-2'>Notifications</span>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                  <a href='#' className='rounded-2xl p-2 flex flex-col space-y-1 hover:bg-blancsale'>
                                    <span className='text-sm text-darkBlue font-bold'>Infos formations</span>
                                    <span className='text-sm text-darkBlue font-medium'>Les informations sur votre prochaine formations....</span>
                                  </a>
                                </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <a
                      href="#"
                      className="flex space-x-2 items-center rounded-full hover:bg-pink/90"
                    >
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9998 36C15.7915 36 11.1873 33.3334 8.49984 29.3334C8.56234 25.1667 16.8332 22.875 20.9998 22.875C25.1665 22.875 33.4373 25.1667 33.4998 29.3334C32.1225 31.3842 30.262 33.0649 28.0823 34.2275C25.9025 35.39 23.4703 35.9987 20.9998 36ZM20.9998 6.41669C22.6574 6.41669 24.2472 7.07517 25.4193 8.24727C26.5914 9.41937 27.2498 11.0091 27.2498 12.6667C27.2498 14.3243 26.5914 15.914 25.4193 17.0861C24.2472 18.2582 22.6574 18.9167 20.9998 18.9167C19.3422 18.9167 17.7525 18.2582 16.5804 17.0861C15.4083 15.914 14.7498 14.3243 14.7498 12.6667C14.7498 11.0091 15.4083 9.41937 16.5804 8.24727C17.7525 7.07517 19.3422 6.41669 20.9998 6.41669ZM20.9998 0.166687C18.264 0.166687 15.5549 0.705557 13.0273 1.75253C10.4996 2.7995 8.203 4.33407 6.26845 6.26863C2.36144 10.1756 0.166504 15.4747 0.166504 21C0.166504 26.5254 2.36144 31.8244 6.26845 35.7314C8.203 37.666 10.4996 39.2005 13.0273 40.2475C15.5549 41.2945 18.264 41.8334 20.9998 41.8334C26.5252 41.8334 31.8242 39.6384 35.7312 35.7314C39.6382 31.8244 41.8332 26.5254 41.8332 21C41.8332 9.47919 32.4582 0.166687 20.9998 0.166687Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-white text-xl font-bold">{session?.user.name}</span>
                    </a>
                  </div>
                </div>
                <Dropdown />
              </div>
            )}
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <UserHomeBlog />
          </Tab.Panel>
          <Tab.Panel>
            <UserHomeEvents />
          </Tab.Panel>
          <Tab.Panel>
            <ProfilePage />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
