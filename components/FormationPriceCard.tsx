import { useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

export function FormationPriceCard() {
    const [isMedium, setIsMedium] = useState(false)
    const tempIsMedium = useMediaQuery({ maxWidth: 1023 })
  
    useEffect(() => {
      setIsMedium(tempIsMedium)
    }, [tempIsMedium])

    return (
        <div>
            { !isMedium && 
                <div className="fixed m-4 w-full bg-white lg:w-1/4 rounded-xl mx-2 p-8 flex flex-col space-y-4 drop-shadow-md top-30 right-10 h-fit">
                    <div className="flex flex-col space-y-4 items-center">
                        <span className="text-3xl font-extrabold text-darkBlue">777,98$</span>
                        <button className="text-white px-4 py-2 md:px-8 md:py-4 font-bold text-xl md:text-2xl rounded-xl btn xl:text-4xl w-full">Add</button>
                        <button className="text-darkBlue px-4 py-2 md:px-8 md:py-4 font-bold text-xl md:text-2xl rounded-xl border-darkBlue border-4 xl:text-4xl w-full hover:bg-darkBlue hover:text-white">Buy now</button>
                        <span className="text-lg font-medium text-darkBlue">Waranty satisfied or paid</span>
                    </div>
                    <div className="flex flex-col space-y-4 items-start ">
                        <span className="text-xl font-bold text-darkBlue">This course contents</span>
                        <div className="flex flex-col space-y-2 items-start ">
                            <div className="text-lg font-medium text-darkBlue flex space-x-2 items-center">
                                <svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z" fill="#2E5F7E" /></svg>
                                <span>videos after 68 hours</span>
                            </div>
                            <div className="text-lg font-medium text-darkBlue flex space-x-2 items-center">
                                <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title />
                                    <g id="Complete">
                                        <g id="Code">
                                            <g>
                                                <polyline data-name="Right" fill="none" id="Right-2" points="15.5 7 20.5 12 15.5 17" stroke="#2E5F7E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                <polyline data-name="Left" fill="none" id="Left-2" points="8.5 7 3.5 12 8.5 17" stroke="#2E5F7E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>1 coding exercice</span>
                            </div>
                            <div className="text-lg font-medium text-darkBlue flex space-x-2 items-center">
                                <svg width="25" height="25" viewBox="-6 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path id="document" d="M451,471a5.005,5.005,0,0,1-5-5V428a5.006,5.006,0,0,1,5-5h21.07a.9.9,0,0,1,.489.138.876.876,0,0,1,.219.157l8.908,8.977a1,1,0,0,1,.314.7c0,.008,0,.017,0,.025v33a5.006,5.006,0,0,1-5,5Zm-3-43v38a3,3,0,0,0,3,3h26a3,3,0,0,0,3-3V433h-4a3.626,3.626,0,0,1-4-4v-4H451A3,3,0,0,0,448,428Zm25,1a3,3,0,0,0,3,3h3l-6-6Zm-20,32a1,1,0,1,1,0-2h12a1,1,0,0,1,0,2Zm0-7a1,1,0,1,1,0-2h22a1,1,0,1,1,0,2Zm0-7a1,1,0,1,1,0-2h22a1,1,0,1,1,0,2Zm0-7a1,1,0,0,1,0-2h22a1,1,0,0,1,0,2Z" transform="translate(-446 -423)" fill="#2E5F7E" />
                                </svg>
                                <span>42 articles</span>
                            </div>
                            <div className="text-lg font-medium text-darkBlue flex space-x-2 items-center">
                                <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title />
                                    <g id="Complete">
                                        <g id="download">
                                            <g>
                                                <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#2E5F7E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                <g>
                                                    <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#2E5F7E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                    <line fill="none" stroke="#2E5F7E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>5 downloads</span>
                            </div>
                        </div>
                    </div>
                    <div  className="flex items-center justify-between px-8 mx-8">
                        <a href="#" className="text-darkBlue font-semibold text-xl hover:underline">Share</a> 
                        <a href="#" className="text-darkBlue font-semibold text-xl hover:underline">Give away</a>
                    </div>
                    <div  className="flex items-center justify-center">
                        <a href="#" className="text-darkBlue font-semibold text-xl hover:underline">Apply coupon</a> 
                    </div>
                </div>
            }
            { isMedium && <div className="fixed m-2 w-full bg-white lg:w-1/4 rounded-xl mx-2 p-4 flex flex-col space-y-4 drop-shadow-md bottom-2 left-0 h-fit">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-darkBlue">Price: 777,98$</span>
                    <button className="text-white px-6 py-2 font-bold text-md md:text-xl rounded-xl btn">Add</button>
                    <button className="text-darkBlue px-6 py-2 font-bold text-md md:text-xl rounded-xl border-darkBlue border-2 hover:bg-darkBlue hover:text-white">Buy now</button>
                </div>
                <div  className="flex items-center justify-between">
                    <a href="#" className="text-darkBlue font-semibold text-md md:text-xl hover:underline">Share</a> 
                    <a href="#" className="text-darkBlue font-semibold text-md md:text-xl hover:underline">Give away</a>
                    <a href="#" className="text-darkBlue font-semibold text-md md:text-xl hover:underline">Apply coupon</a> 
                </div>
            </div> }
        </div>
    );
}
