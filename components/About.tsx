export function About () {
  return (
    <div className="about_bg w-full text-center p-4" id="about">
        <h1 className="text-darkBlue font-bold underline text-4xl md:text-5xl pb-12 lg:text-6xl xl:text-7xl">Who are we?</h1>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto space-y-4 md:space-x-8 items-center mb-8  ">
            <img src="../images/video.png" alt="Section vidéo" className="w-1/2 cursor-pointer" />
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-red font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl">Lorem ipsum dolor sit</h1>
                <p className="text-darkBlue text-md md:text-lg lg-text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium sequi laudantium officia, iure recusandae dolor commodi cupiditate ut qui possimus reiciendis. Nisi quo blanditiis repellendus non sit laudantium animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolor quisquam repellat non ut ex voluptatibus temporibus, possimus dolores repudiandae modi numquam natus dolore, asperiores quod ipsam itaque aspernatur dolorum?</p>
                <button className="text-yellow px-8 py-4 font-bold text-xl md:text-2xl rounded-xl btn lg:text-3xl">More Informations</button>
            </div>
        </div>
    </div>
  )
}
