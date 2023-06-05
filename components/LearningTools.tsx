import React from 'react'

export function LearningTools () {
  return (
    <div className="w-3/4 mx-auto space-y-4 mb-4">
        <h1 className="text-darkBlue text-3xl font-bold">Learning reminders</h1>
        <div className="space-y-2">
            <h2 className="text-darkBlue text-2xl font-semibold">Calendar events</h2>
            <p className="text-darkBlue text-md">
                Learning a little each days adds up. Research shows that students who make learning a habit are more likely to reach theiir goals. Set time aside to learn and get reminders using yur learning schedular.
            </p>
            <button className="btn text-white rounded-xl p-8 py-4 text-xl font-bold">Schedule learning time</button>
        </div>
        <h1 className="text-darkBlue text-2xl font-semibold">Push notifications</h1>
        <div className="space-y-4">
            <p className="text-darkBlue text-md">
                Don't want  to schedule time block? Set a learning reminder to get push notifications from the Head connect mobile app.
            </p>
            <div className="space-y-2">
                <h3 className="text-xl text-darkBlue font-semibold">Text me a link to download the app</h3>
                <select name="" id="" className="w-1/2 p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
                    <option value="">+228 (Togo)</option>
                    <option value="">+225 (Côte d'ivoire)</option>
                    <option value="">+233 (Ghana)</option>
                </select>
                <div className="flex w-1/2">
                    <input type="numbers" placeholder="00 00 00 00" className="p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50" />
                    <button className="btn text-white px-8 text-xl font-bold">Send</button>
                </div>
                <span className="text-sm text-darkBlue">
                    By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply.
                </span>
            </div>
        </div>
    </div>
  )
}
