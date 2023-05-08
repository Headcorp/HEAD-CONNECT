export function Banner () {
    return (
        <div className="">
            <div className="flex justify-evenly p-4 mx-auto">
                <div className="ml-20 mt-20 space-y-8 w-4/6">
                    <h1 className="text-7xl text-darkBlue">Lorem ipsum dolor sit amet</h1>
                    <p className="text-darkBlue text-md">consectetur adipisicing elit. Ducimus ut saepe sed aliquid, sequi, necessitatibus repellat ipsa labore repellendus quos molestias dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt, a mollitia iste voluptate odio nostrum</p>
                    <button className="text-yellow px-8 py-4 font-bold text-4xl rounded-md btn">Join now</button>
                </div>
                <div className="mr-20">
                    <img src="../images/cercle.png" alt="image en tête" className="" />
                </div>
            </div>
            <div className="mx-32 grid grid-cols-3 gap-6 pb-12">
                <span className="underline text-3xl text-white">2000+ <br /> members</span>
                <span className="underline text-3xl text-white">25 <br /> use cases</span>
                <span className="underline text-3xl text-white">49 <br /> hours of contents</span>
                <span className="underline text-3xl text-white">50+ panel <br /> discussions</span>
                <span className="underline text-3xl text-white">10 <br /> communities</span>
            </div>
            {/* <img src="stars.svg" alt="Stars" className="svg-overlay" /> */}
        </div>
    );
}
