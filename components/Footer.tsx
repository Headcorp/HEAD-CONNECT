export function Footer() {
  return (
    <div className="footer_bg">
      <div className="md:grid md:grid-rows-2 items-center p-6 space-y-8 md:space-y-0">
            <div className="flex flex-row justify-between items-center gap-2 md:gap-4">
                <a href="/" className=""><img src="../images/logo.png" alt="logo" className="hover:opacity-60 duration-300 w-4/5" /></a>
                <div className="flex justify-between space-x-5">
                    <a href=""><img src="../icons/vector.svg" alt="Twitter" width={40} height={40} className="hover:opacity-70 duration-300" /></a>
                    <a href=""><img src="../icons/facebook2.svg" alt="Facebook" width={40} height={40} className="hover:opacity-70 duration-300" /></a>
                    <a href=""><img src="../icons/instagram2.svg" alt="Instagram" width={40} height={40} className="hover:opacity-70 duration-300" /></a>
                </div>
            </div>

            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col items-center justify-center">
                    <img src="../icons/position2.svg" alt="" className="hover:opacity-70 duration-300 w-10" />
                    <div className="space-y-2">
                     <p className="text-darkBlue text-md font-bold lg:text-lg">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                    </div>
                </div>

                
                    <div className="flex flex-col items-center justify-start md:justify-center">
                        <img src="../icons/phone2.svg" alt="" className="hover:opacity-70 duration-300 w-10" />
                        <div className="flex flex-col space-y-2">
                            <span className="text-darkBlue text-md font-bold lg:text-lg">+228 xx-xx-xx-xx</span>
                            <span className="text-darkBlue text-md font-bold lg:text-lg">+228 xx-xx-xx-xx</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-start md:justify-center">
                        <img src="../icons/mail2.svg" alt="" className="hover:opacity-70 duration-300 w-10" />
                        <span className="text-darkBlue font-bold text-md lg:text-lg">info@headconnect.com</span>
                 
                    </div>
            {/* <div className="text-darkBlue text-md font-bold m-auto lg:text-lg text-center">Copyright all rights reserved</div> */}
            </div>
        </div>
    </div>
  )
}
