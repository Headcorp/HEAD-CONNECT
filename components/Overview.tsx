export function Overview () {
    return (
        <div className="w-full flex flex-col space-y-2 text-darkBlue">
            <div className="flex flex-col space-y-4 p-6 border-b-2 border-b-darkBlue/20">
                <span className="text-2xl font-bold">About this course</span>
                <span className="text-lg font-medium w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>
            <div className="flex space-x-4 p-6 border-b-2 border-b-darkBlue/20 justify-between">
                <span className="text-start">By the numbers</span>
                <div className="flex flex-col space-y-2 items-start">
                    <span>Skill level:Intermediate Level</span>
                    <span>Students:44071</span>
                    <span>Language:English</span>
                    <span>Caption:Yes</span>
                </div>
                <div className="flex flex-col space-y-2 items-start">
                    <span>Lecture:112</span>
                    <span>Video:15 total hour</span>
                </div>
            </div>
            <div className="flex p-6 border-b-2 border-b-darkBlue/20 space-x-12">
                <div className="flex items-start justify-between w-2/3 ">
                    <span className="text-start font-medium">Certificate</span>
                    <div className="flex justify-between flex-col space-y-4">
                        <span className="font-medium">Get Udemy certificate by completing entire course</span>
                        <a href="#" className="border-2 border-darkBlue px-12 py-2 flex items-center justify-center">Udemy certificate</a>
                    </div>
                </div>
            </div>
            <div className="flex p-6 border-b-2 border-b-darkBlue/20 space-x-12">
                <div className="flex items-start justify-between w-2/3 ">
                    <span className="text-start font-medium">Certificate</span>
                    <div className="flex space-x-2 w-2/3">
                        <span className="font-medium">Available on</span>
                        <a className="font-medium">IOS</a>
                        <span className="font-medium">and</span>
                        <a className="font-medium">Android</a>
                    </div>
                </div>
            </div>
            <div className="flex p-6 border-b-2 border-b-darkBlue/20 space-x-12">
                <div className="flex items-start justify-between w-full">
                    <span className="text-start font-medium">Description</span>
                    <div className="flex flex-col space-y-4">
                        <span className="text-lg font-medium w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
                        <span className="text-lg font-medium w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
                        <span className="text-lg font-medium w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </div>
            </div>
        </div>
    )
}