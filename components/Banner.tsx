export function Banner () {
    return (
        <div className="relative">
            <div className="bottom-0 left-0 top-0 right-0 bg-cover md:bg-center"
                style={{ backgroundImage: `url(../icons/stars.svg)` }}>
                <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center">
                    <div className="md:ml-20 md:mt-20 space-y-4 md:space-y-8 w-4/6 xl:mt-28">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-darkBlue font-bold xl:text-8xl">Lorem ipsum dolor sit amet</h1>
                        <p className="text-darkBlue text-sm lg:text-lg xl:text-xl">consectetur adipisicing elit. Ducimus ut saepe sed aliquid, sequi, necessitatibus repellat ipsa labore repellendus quos molestias dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt, a mollitia iste voluptate odio nostrum</p>
                        <button className="text-yellow px-4 py-2 md:px-8 md:py-4 font-bold text-2xl md:text-4xl rounded-md btn lg:text-5xl xl:text-6xl">Join now</button>
                    </div>
                    <div className="md:mr-20">
                        <img src="../images/cercle.png" alt="image en tête" className="" />
                    </div>
                </div>
                <div className="mx-12 md:mx-32 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-12">
                    <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">2000+ <br /> members</span>
                    <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">25 <br /> use cases</span>
                    <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">49 <br /> hours of contents</span>
                    <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">50+ panel <br /> discussions</span>
                    <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">10 <br /> communities</span>
                </div>
            </div>
        </div>
    );
}
