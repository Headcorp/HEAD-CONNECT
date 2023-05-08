export function Navbar () {
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center p-4">
      <a href="">
        <img src="../images/logo.png" alt="logo" className="w-1/2" />
      </a>
      <div className="flex space-x-6 text-2xl font-semibold text-pink">
        <a href="" className="hover:underline">About</a>
        <a href="" className="hover:underline">Calendar</a>
        <a href="" className="hover:underline">Past events</a>
        <a href="" className="hover:underline">Our team</a>
      </div>
      <a href="" className="">
        <img src="../login.svg" alt="" className="w-1/2" />
      </a>
    </div>
  );
}
