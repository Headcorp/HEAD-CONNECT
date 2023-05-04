export function Banner () {
    return (
        <div className="flex justify-evenly p-4 mx-auto">
            <div className="space-y-4">
                <h1 className="text-5xl text-darkBlue">Lorem ipsum dolor sit amet</h1>
                <p>consectetur adipisicing elit. Ducimus ut saepe sed aliquid, sequi, necessitatibus repellat ipsa labore repellendus quos molestias dolorem</p>
                <button>Join now</button>
            </div>
            <div className="">
                <img src="../images/cercle.png" alt="image en tête" className="w-3/4" />
            </div>
        </div>
    );
}