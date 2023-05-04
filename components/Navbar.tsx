export function Navbar () {
    return (
        <div className="flex justify-between items-center p-4">
        <a href="">
          <img src="../images/logo.png" alt="logo" className="" />
        </a>
        <div className="flex space-x-4 text-3xl font-semibold text-pink">
          <a href="" className="hover:underline">About</a>
          <a href="" className="hover:underline">Calendar</a>
          <a href="" className="hover:underline">Past events</a>
          <a href="" className="hover:underline">Our team</a>
        </div>
        <a href="" className="">
          <img src="../login.svg" alt="" />
        </a>
      </div>
    );
}