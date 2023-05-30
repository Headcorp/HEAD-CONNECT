import React from "react"
import { useState } from "react"
import axios from "axios";

export function ListItem({order=0, title=''}:{order?:number, title?:string}) {
  const [value, setValue] = useState(false)
  const toggleChecked = () => {
    setValue(!value)
    console.log(value)
  }

  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    try {
      const {data} = await axios.get('/api/classroom/courses')
      setCourses(data)
    } catch (error) {
      
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full space-x-4">
        <input type="checkbox" name="checkbox" id="checkbox" onChange={toggleChecked} checked={value} />
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-2xl font-bold text-darkBlue">{order>0?order:''}</span>
            <span className="text-2xl font-bold text-darkBlue">{order>0?'.':''}</span>
            <h1 className="text-2xl font-bold text-darkBlue">{title&&title}</h1>
          </div>
          <div className="">
            <span className="text-red text-lg">6min</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-red"></div>
    </div>
  )
}
