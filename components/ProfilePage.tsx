import "@fontsource/yantramanav";

export function ProfilePage() {
    return (
        <div className="flex items-center justify-center body w-screen">
            <div className="flex items-center justify-center space-x-2 p-12 w-full">
                <div className="flex flex-col space-y-4 items-center justify-center w-1/4">
                    <img
                        src="../images/blackperson.jpg"
                        alt=""
                        className="rounded-full h-[100px] w-[100px]"
                        width="300"
                        height="300"
                    />
                    <span className="text-pink text-2xl font-bold">Change your password</span>
                    <a href="#" className="text-white text-xl bg-pink rounded-xl px-8 py-4 border-pink border-2 hover:bg-white hover:text-pink font-medium">New membership</a>
                    <a href="#" className="text-white text-xl bg-pink rounded-xl px-8 py-4 border-pink border-2 hover:bg-white hover:text-pink font-medium">Your orders</a>
                </div>
                <div className="flex flex-col space-y-4 justify-center w-1/4">
                    <input type="text" className="w-full border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <div className="flex space-x-4 w-full">
                        <input type="text" className="w-1/2 border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                        <input type="text" className="w-1/2 border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    </div>
                    <input type="text" className="w-full border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <input type="text" className="w-full border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <input type="text" className="w-1/2 border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <input type="text" className="w-full border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <input type="text" className="w-full border-2 border-pink bg-white placeholder:text-pink text-xl font-semibold p-2 rounded-xl " placeholder="Email" />
                    <a href="#" className="text-white text-xl bg-pink rounded-xl px-8 py-4 border-pink border-2 hover:bg-white hover:text-pink font-medium w-full">save</a>
                </div>
            </div>


        </div>
    );
}
