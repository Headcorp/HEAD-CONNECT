export function Footer() {
  return (
    <div className="footer_bg">
      <div className="grid grid-cols-4 p-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="../images/logo.png" alt="logo" className="" />
          <div className="flex justify-between">
            <img src="../twitter.svg" alt="Twitter" />
            <img src="../facebook.svg" alt="Facebook" />
            <img src="../instagram.svg" alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  )
}
