export function Feature () {
  return (
    <div>
        <div className="relative">
            <div className="absolute z-10 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(../images/feature_bg.png)` }}>
                <div className="absolute z-20 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/gradiant_feature.png)` }}>
                    <div className="w-full text-center mx-auto p-4">
                        <h1 className="text-darkBlue underline text-4xl pb-8">Head connect's upcoming features</h1>
                        <div className="mx-auto space-x-4 w-1/2">
                            <button className="text-white px-4 py-2 text-xl font-bold rounded-md btn2">Conferences</button>
                            <button className="text-white px-4 py-2 text-xl font-bold rounded-md border-pink border btn3">Workshop</button>
                            <button className="text-white px-4 py-2 text-xl font-bold rounded-md border-pink border btn3">Formations</button>
                        </div>
                        <div className="w-[90%] mx-auto mt-4 space-x-4 grid grid-cols-3">
                            <div className="bg-white mx-auto opacity-100 space-y-1 rounded-md p-4 items-center w-[300px]"> {/* opacity-40 items-center h-[400px]*/}
                                <div className="bg-pink text-center p-1 w-[90%] rounded-md mx-auto">
                                    <h2 className="text-yellow font-bold text-sm">Theme: Data's value in 2023</h2>
                                    <h2 className="text-yellow font-bold text-sm">Date: 15/06/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-xl">Principal guest</h2>
                                <img src="../images/conf1.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-xl">Aliana Kodjo</h2>
                                    <h3 className="text-darkBlue font-bold text-sm">Data analyst</h3>
                                </div>
                                <button className="text-white px-2 py-1 text-lg font-bold rounded-md btn">Read more</button>
                            </div>
                            <div className="bg-white mx-auto opacity-100 space-y-1 rounded-md p-4 items-center w-[300px]"> {/* opacity-40 items-center*/}
                                <div className="bg-pink text-center p-1 w-[90%] rounded-md mx-auto">
                                    <h2 className="text-yellow font-bold text-sm">Theme: My cell phone my tresor</h2>
                                    <h2 className="text-yellow font-bold text-sm">Date: 24/07/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-xl">Principal guest</h2>
                                <img src="../images/conf2.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-xl">Elis smiths</h2>
                                    <h3 className="text-darkBlue font-bold text-sm">Marketing director</h3>
                                </div>
                                <button className="text-white px-2 py-1 text-lg font-bold rounded-md btn">Read more</button>
                            </div>
                            <div className="bg-white mx-auto opacity-100 space-y-1 rounded-md p-4 items-center w-[300px]"> {/* opacity-40 items-center*/}
                                <div className="bg-pink text-center p-1 w-[90%] rounded-md mx-auto">
                                    <h2 className="text-yellow font-bold text-sm">Theme: The first 1 M the hardest</h2>
                                    <h2 className="text-yellow font-bold text-sm">Date: 26/09/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-xl">Principal guest</h2>
                                <img src="../images/conf3.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-xl">John O'dowel</h2>
                                    <h3 className="text-darkBlue font-bold text-sm">Economist</h3>
                                </div>
                                <button className="text-white px-2 py-1 text-lg font-bold rounded-md btn">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
