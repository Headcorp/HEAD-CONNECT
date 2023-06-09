export function TopicsFooter() {
    return (
        <div className="w-full flex flex-col bg-darkBlue text-white">
            <div className="border-b-2 border-white/50 flex items-center justify-between p-4">
                <div className="flex space-y-4 flex-col w-2/3 sm:w-1/2">
                    <span className="text-xl font-bold ">Teach the world online</span>
                    <span className="text-lg font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</span>
                </div>
                <button className="px-4 py-2 sm:px-8 sm:py-4 border-2 rounded-xl border-white font-bold hover:text-darkBlue hover:bg-white">Teach on Head connect</button>
            </div>
            <div className="border-b-2 border-white/50 flex items-center justify-between p-4">
                <div className="flex space-y-4 flex-col w-full sm:w-1/2">
                <span className="text-lg font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</span>
                </div>
            </div>
        </div>
    )
}
