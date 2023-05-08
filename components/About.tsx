export function About () {
  return (
    <div className="about_bg w-full text-center p-4">
        <h1 className="text-darkBlue underline text-6xl pb-12">Who are we?</h1>
        <div className="flex w-3/4 mx-auto space-x-8 items-center">
            <img src="../images/video.png" alt="Section vidéo" className="w-1/2 cursor-pointer" />
            <div className="space-y-4 text-left">
                <h1 className="text-red text-4xl">Lorem ipsum dolor sit</h1>
                <p className="text-darkBlue text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium sequi laudantium officia, iure recusandae dolor commodi cupiditate ut qui possimus reiciendis. Nisi quo blanditiis repellendus non sit laudantium animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolor quisquam repellat non ut ex voluptatibus temporibus, possimus dolores repudiandae modi numquam natus dolore, asperiores quod ipsam itaque aspernatur dolorum?</p>
                <button className="text-yellow px-8 py-4 font-bold text-2xl rounded-md btn">More Informations</button>
            </div>
        </div>
    </div>
  )
}
