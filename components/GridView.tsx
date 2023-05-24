import React from "react"

export function GridView () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        <OneView />
        <OneView />
        <OneView />
        <OneView />
        <OneView />
        <OneView />
        <OneView />
        <OneView />
    </div>
  )
}

function OneView () {
    return (
        <div className="w-[90%] mx-auto sm:space-y-1">
            <div className="relative">
                <img src="../images/test.jpg" className="rounded-xl sm:rounded-2xl" />
                <span className="absolute top-1 right-2 text-white shadow-xl text-md font-bold bg-pink rounded-xl px-1">20:00</span>
            </div>
            <h1 className="text-3xl text-darkBlue font-bold">Titre de la vidéo</h1>
            <div className="flex space-x-2">
                <span className="text-xl opacity-90 text-darkBlue">Nbre de vues</span>
                <span className="text-xl opacity-90 text-darkBlue">.</span>
                <span className="text-xl opacity-90 text-darkBlue">Il y'a ... ans</span>
            </div>
        </div>
    )
}
