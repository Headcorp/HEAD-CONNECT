export function UserProfilCard () {
  return (
    <div className="w-full md:w-1/2 lg:w-2/3 rounded-xl bg-white border-darkBlue md:mx-12 lg:mx-6 mx-4 py-6 px-12 flex flex-col items-center space-y-4">
      <img
        src="../images/blackperson.jpg"
        alt=""
        className="rounded-full h-1/4 w-2/3"
        width="300"
        height="300"
      />
      <span className="text-darkBlue text-3xl font-bold">Joh Doe</span>
      <span className="text-darkBlue text-2xl">Web designer</span>
      <span className="text-darkBlue text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </span>
      <a href="#" className="text-white text-xl bg-darkBlue btn rounded-xl px-8 py-4 border-2 hover:bg-pink font-medium">New blog</a>
    </div>
  );
}
