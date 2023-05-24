import React from "react"
import { useState } from "react"

export function ListItem() {
  const [value, setValue] = useState(false)
  const toggleChecked = () => {
    setValue(!value)
    console.log(value)
  }

  return (
    <div className="flex w-full space-x-2">
      <input type="checkbox" name="checkbox" id="checkbox" onChange={toggleChecked} checked={value} className="" />
      <div className="w-1/2 relative">
        <img src="../images/test.jpg" alt="" className="rounded-xl" />
        <span className="absolute top-1 right-2 text-white shadow-xl text-md font-bold bg-pink rounded-xl px-1">20:00</span>
      </div>
      <div className="flex flex-col mt-1 space-y-2">
        <h1 className="text-xl font-bold text-darkBlue">Titre de la video</h1>
        <div>
          <h3 className="text-lg font-light text-red">293K vues</h3>
          <h3 className="text-lg font-light text-red">23/05/2023</h3>
        </div>
      </div>
    </div>
  )
}
