export function Banner () {
    return (
        <div className="flex justify-evenly p-4 mx-auto">
            <div className="ml-20 mt-32 space-y-8 w-4/6">
                <h1 className="text-7xl text-darkBlue">Lorem ipsum dolor sit amet</h1>
                <p className="text-darkBlue text-md">consectetur adipisicing elit. Ducimus ut saepe sed aliquid, sequi, necessitatibus repellat ipsa labore repellendus quos molestias dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt, a mollitia iste voluptate odio nostrum</p>
                <button className="text-yellow px-8 py-4 bg-pink text-4xl rounded-md">Join now</button>
            </div>
            <div className="mr-20">
                <img src="../images/cercle.png" alt="image en tête" className="" />
            </div>
        </div>
    );
}