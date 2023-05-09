export function Team () {
  return (
    <div className="relative">
        <div className="absolute z-30 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(../images/team.png)` }}>
            <div className="absolute z-40 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(../images/team_gradiant.png)` }}>
                <div className="flex h-full justify-center items-center">
                    <button className="text-yellow px-8 py-4 font-bold text-4xl rounded-xl uppercase btn">
                        Show team
                    </button>
                </div>
                <div className="grid grid-cols-4 p-6"> {/* Footer */}
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src="../images/logo.png" alt="logo" className="w-1/2" />
                        <div className="flex justify-between">
                            <a href=""><img src="../twitter.svg" alt="Twitter" width={40} height={40} /></a>
                            <a href=""><img src="../facebook.svg" alt="Facebook" width={40} height={40} /></a>
                            <a href=""><img src="../instagram.svg" alt="Instagram" width={40} height={40} /></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="../position.svg" alt="" className="" />
                        <div className="space-y-4">
                            <span className="text-darkBlue text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span className="text-darkBlue text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </div>
                    <div className="space-y-4 flex flex-col justify-center">
                        <div className="flex items-center justify-center">
                            <img src="../phone.svg" alt="" className="" />
                            <div className="flex flex-col space-y-2">
                            <span className="text-darkBlue text-lg font-bold">+228 xx-xx-xx-xx</span>
                            <span className="text-darkBlue text-lg font-bold">+228 xx-xx-xx-xx</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="../mail.svg" alt="" className="" />
                            <span className="text-darkBlue font-bold text-lg">info@headconnect.com</span>
                        </div>
                    </div>
                    <div className="text-darkBlue text-lg font-bold m-auto">
                    Copyright all rights reserved
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
