import {useState} from 'react'

export function NavbarMobile() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto flex justify-between items-center p-4">
      <a href="" className="w-1/2"><img src="../images/logo.png" alt="logo" className="w-1/2" /></a>
      <div className="flex justify-evenly items-center">
        <a href="" className="w-1/2"><img src="../icons/login.svg" alt="" className="w-1/2 xl:w-full" /></a>
        <div className="flex flex-col">
            <div className="">
                <button
                onClick={toggleMobileMenu}
                className="focus:outline-none rounded-xl p-2 font-bold text-white btn"
                aria-label="Toggle Mobile Menu"
                >
                Plus
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col bg-white/80 rounded-xl space-y-4 text-xl font-semibold text-pink items-center justify-end">
                <a href="" className="block hover:underline">About</a>
                <a href="" className="block hover:underline">Calendar</a>
                <a href="" className="block hover:underline">Past events</a>
                <a href="" className="block hover:underline">Our team</a>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}
