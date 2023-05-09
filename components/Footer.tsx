export function Footer() {
  return (
    <div className="">
      <div className="grid grid-cols-4 p-6"> {/* Footer */}
          <div className="flex flex-col justify-center items-center gap-4">
              <img src="../images/logo.png" alt="logo" className="w-1/2" />
              <div className="flex justify-between">
                  <img src="../twitter.svg" alt="Twitter" width={40} height={40} />
                  <img src="../facebook.svg" alt="Facebook" width={40} height={40} />
                  <img src="../instagram.svg" alt="Instagram" width={40} height={40} />
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
  )
}
