export function Navbar () {
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center p-4">
      <a href="">
        <img src="../images/logo.png" alt="logo" className="w-1/2 xl:w-full hover:opacity-60" />
      </a>
      <div className="flex space-x-8 text-xl font-semibold text-pink items-center lg:text-2xl lg:space-x-10 xl:text-3xl">
        <a href="#about" className="hover:underline">About</a>
        <a href="#calendar" className="hover:underline">Calendar</a>
        <a href="#pastevents" className="hover:underline">Past events</a>
        <a href="#ourteam" className="hover:underline">Our team</a>
      </div>
      <a href="/login" className="">
        <img src="../icons/login.svg" alt="" className="w-1/2 xl:w-full hover:opacity-60" />
      </a>
    </div>
  );
}
