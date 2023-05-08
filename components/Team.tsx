export function Team () {
  return (
    <div>
        <div className="relative">
            <div className="absolute z-30 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(../images/team.png)` }}>
                <div className="absolute z-40 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/team_gradiant.png)` }}>
                        <div className="flex h-full justify-center items-center">
                            <button className="text-yellow px-8 py-4 font-bold text-4xl rounded-md uppercase btn">Show team</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
