import { Fragment } from 'react'
import { useSession } from "next-auth/react"
import { useState, useEffect, useRef } from "react"
import { Popover, Transition } from "@headlessui/react"
import { useRouter } from 'next/router'

export function CoursesNavbarMobile () {
  const {data: session} = useSession()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [svgViewBox, setSvgViewBox] = useState("0 0 50 46")
  const navbarRef = useRef<HTMLDivElement>(null)
  const [svgPath, setSvgPath] = useState(
    "M0 46V38.3333H50V46H0ZM0 26.8333V19.1667H50V26.8333H0ZM0 7.66667V0H50V7.66667H0Z"
  )

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  useEffect(() => {
    isMobileMenuOpen
      ? setSvgPath(
          "M29.1667 2.9375L26.2292 0L14.5833 11.6458L2.9375 0L0 2.9375L11.6458 14.5833L0 26.2292L2.9375 29.1667L14.5833 17.5208L26.2292 29.1667L29.1667 26.2292L17.5208 14.5833L29.1667 2.9375Z"
        )
      : setSvgPath(
          "M0 46V38.3333H50V46H0ZM0 26.8333V19.1667H50V26.8333H0ZM0 7.66667V0H50V7.66667H0Z"
        );
  }, [isMobileMenuOpen])

  useEffect(() => {
    isMobileMenuOpen ? setSvgViewBox("0 0 30 30") : setSvgViewBox("0 0 50 46");
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  return (
        <div className="flex justify-between space-y-2 items-center userheader p-4">
          <a href="/" className="w-1/3">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full sm:w-1/2 hover:opacity-60"
            />
          </a>
          <div className="w-1/3 flex space-x-2 sm:space-x-4 item-center justify-end" ref={navbarRef}>
            {/* <a href="/userhome" className="hover:bg-pink rounded-full border-4 border-pink p-4 flex item-center">
                <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9998 11.8542L35.4165 21.2292V37.5H31.2498V25H18.7498V37.5H14.5832V21.2292L24.9998 11.8542ZM24.9998 6.25L4.1665 25H10.4165V41.6667H22.9165V29.1667H27.0832V41.6667H39.5832V25H45.8332L24.9998 6.25Z" fill="white" />
                </svg>
            </a> */}
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none p-2"
              aria-label="Toggle Mobile Menu"
            >
              <svg width="25" height="25" viewBox={`${svgViewBox}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:opacity-60" >
                <path d={`${svgPath}`} fill="white" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="navbar_mobile absolute z-50 top-30 mt-20 text-2xl font-bold right-0 w-[50%] sm:w-[33%] text-center uppercase rounded-xl text-darkBlue p-8 flex flex-col justify-between space-y-2">
                <div className="w-full flex space-x-0">
                  <input
                  type="search"
                  className="w-4/5 rounded-l-full p-2 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50"
                  placeholder="Search"
                  />
                  <button className="w-1/5 rounded-r-full p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50 flex items-center justify-center hover:bg-pink">
                  <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                      d="M18.6043 16.4167H17.4522L17.0439 16.0229C17.9553 14.9641 18.6214 13.717 18.9945 12.3707C19.3676 11.0244 19.4386 9.61233 19.2022 8.23544C18.5168 4.18127 15.1335 0.943774 11.0501 0.447941C9.61458 0.266329 8.1565 0.415525 6.78747 0.884112C5.41844 1.3527 4.17475 2.12826 3.15157 3.15145C2.12838 4.17463 1.35282 5.41832 0.884234 6.78735C0.415647 8.15638 0.266451 9.61446 0.448063 11.05C0.943896 15.1334 4.1814 18.5167 8.23556 19.2021C9.61245 19.4384 11.0246 19.3675 12.3708 18.9944C13.7171 18.6212 14.9643 17.9552 16.0231 17.0438L16.4168 17.4521V18.6042L22.6147 24.8021C23.2126 25.4 24.1897 25.4 24.7876 24.8021C25.3856 24.2042 25.3856 23.2271 24.7876 22.6292L18.6043 16.4167ZM9.85431 16.4167C6.22306 16.4167 3.29181 13.4854 3.29181 9.85419C3.29181 6.22294 6.22306 3.29169 9.85431 3.29169C13.4856 3.29169 16.4168 6.22294 16.4168 9.85419C16.4168 13.4854 13.4856 16.4167 9.85431 16.4167Z"
                      fill="url(#paint0_linear_278_64)"
                      />
                      <defs>
                      <linearGradient
                          id="paint0_linear_278_64"
                          x1="12.8046"
                          y1="0.372925"
                          x2="12.8046"
                          y2="25.2505"
                          gradientUnits="userSpaceOnUse"
                      >
                          <stop stop-color="#E8334E" />
                          <stop offset="1" stop-color="#FBDB18" />
                      </linearGradient>
                      </defs>
                  </svg>
                  </button>
              </div>
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
                  { session ?
                    <a
                      href="#"
                      className="flex space-x-2 items-center w-1/3 rounded-full hover:bg-pink/90"
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
                    </a> : <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push('/auth/login')
                        }}
                        className="flex space-x-2 items-center w-1/3 rounded-full hover:bg-pink/90 mx-2"
                    >
                        <svg width="50" height="50" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.0001 27.1667C53.0943 27.1667 56.0617 28.3958 58.2497 30.5838C60.4376 32.7717 61.6667 35.7392 61.6667 38.8334C61.6667 41.9275 60.4376 44.895 58.2497 47.0829C56.0617 49.2709 53.0943 50.5 50.0001 50.5C46.9059 50.5 43.9384 49.2709 41.7505 47.0829C39.5626 44.895 38.3334 41.9275 38.3334 38.8334C38.3334 35.7392 39.5626 32.7717 41.7505 30.5838C43.9384 28.3958 46.9059 27.1667 50.0001 27.1667ZM50.0001 56.3334C62.8917 56.3334 73.3334 61.5542 73.3334 68V73.8334H26.6667V68C26.6667 61.5542 37.1084 56.3334 50.0001 56.3334Z" fill="white"/>
                        </svg>
                        <span className="text-white text-xl font-bold">Sign in</span>
                    </a>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
  );
}
