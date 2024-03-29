export function Footer() {
  return (
    <div className="footer_bg">
      <div className="md:grid md:grid-cols-4 items-center p-6 space-y-8 md:space-y-0">
            <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                <a href="/" className="">
                    <img src="../images/logo.png" alt="logo" className="hover:opacity-60" />
                </a>
                <div className="flex justify-between space-x-2">
                    <a href="">
                        <img src="../icons/twitter.svg" alt="Twitter" width={40} height={40} className="hover:opacity-60" />
                    </a>
                    <a href="">
                        <img src="../icons/facebook.svg" alt="Facebook" width={40} height={40} className="hover:opacity-60" />
                    </a>
                    <a href="">
                        <img src="../icons/instagram.svg" alt="Instagram" width={40} height={40} className="hover:opacity-60" />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <img src="../icons/position.svg" alt="" className="" />
                <p className="text-darkBlue text-md font-bold lg:text-lg">
                    Adidogome Yokoe rue de l'EPL Grand Défi
                </p>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
                <div className="flex items-center justify-start md:justify-center">
                    <img src="../icons/phone.svg" alt="" className="" />
                    <div className="flex flex-col space-y-2">
                        <span className="text-darkBlue text-md font-bold lg:text-lg">+228 93461083</span>
                        <span className="text-darkBlue text-md font-bold lg:text-lg">+228 99667859</span>
                    </div>
                </div>
                <div className="flex items-center justify-start md:justify-center">
                    <img src="../icons/mail.svg" alt="" className="" />
                    <span className="text-darkBlue font-bold text-md lg:text-lg">info@headconnect.com</span>
                </div>
            </div>
            <div className="text-darkBlue text-md font-bold m-auto lg:text-lg text-center">
                Copyright all rights reserved
            </div>
        </div>
    </div>
  )
}
