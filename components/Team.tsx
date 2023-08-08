export function Team () {
  return (
    <div className="relative" id="ourteam">
        <div className="z-30 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(../images/team.png)` }}>
            <div className="absolute z-40 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(../images/team_gradiant2.png)` }}>
                <div className="flex h-full justify-center items-center">
                    <button className="text-white px-8 py-4 font-bold text-4xl rounded-xl uppercase btn lg:text-6xl">
                        Show team
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
